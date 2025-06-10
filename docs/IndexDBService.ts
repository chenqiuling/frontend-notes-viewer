const DB_NAME = "FilesDatabase";
const DB_VERSION = 1;
const TABLE_NAME = "files";

interface InnerAttachment {
  key: string;
  previewUrl: string;
}
interface IAttachmentWithBlob extends InnerAttachment {
  blob?: Blob;
}

export type OnSuccessFn = (message: IAttachmentWithBlob) => void;
export default class IndexDBService {
  private static instance: IndexDBService;
  private database: IDBDatabase | null = null;
  private constructor() {
  }
  private initDataBase = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = (event) => {
        const error = `数据库打开失败: ${(event.target as IDBRequest).error}`;
        console.log(`数据库 ${DB_NAME} 打开失败`, error);
        reject(error);
      };

      request.onsuccess = (event) => {
        this.database = (event.target as IDBRequest).result;
        console.log(`数据库 ${DB_NAME} 打开成功`);
        resolve(this.database);
      };

      request.onupgradeneeded = (event) => {
        this.database = (event.target as IDBRequest).result;

        // 创建对象存储
        if (!this.database?.objectStoreNames.contains(TABLE_NAME)) {
          const store = this.database?.createObjectStore(TABLE_NAME, {
            keyPath: "id",
            autoIncrement: true,
          });

          // 创建索引
          store?.createIndex("keyIndex", "key", { unique: false });
          console.log(`对象存储 ${TABLE_NAME} 创建成功`);
        }
      };
    });
  };

  // 存储文件到IndexedDB
  private storeFileInDB(fileData: IAttachmentWithBlob) {
    return new Promise((resolve, reject) => {
      if (!this.database) {
        return;
      }

      const tx = this.database.transaction(TABLE_NAME, "readwrite");
      const store = tx.objectStore(TABLE_NAME);
      const request = store.add(fileData);

      request.onsuccess = (event) => {
        console.log(`文件存储成功: ${fileData.key}`);
        resolve((event.target as IDBRequest).result);
      };

      request.onerror = (event) => {
        console.log(`文件存储失败: ${fileData.key}`, (event.target as IDBRequest).error);
        reject((event.target as IDBRequest).error);
      };
    });
  }

  private fetchFile = async (attachment: InnerAttachment) => {
    const response = await fetch(attachment.previewUrl);

    if (!response.ok) {
      throw new Error(`下载失败: ${response.status} ${response.statusText}`);
    }

    const chunks: Uint8Array<ArrayBufferLike>[] = [];
    const reader = response.body?.getReader();
    if (reader) {
      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        chunks.push(value);
      }
    }

    const blob = new Blob(chunks);
    return {
      blob: blob,
      size: blob.size,
      type: blob.type,
    };
  };

  // 根据文件key查询文件
  private getFileByKey = async (attachment: InnerAttachment): Promise<IAttachmentWithBlob | undefined> => {
    return new Promise((resolve, reject) => {
      if (!this.database) {
        return;
      }

      const tx = this.database.transaction(TABLE_NAME, "readonly");
      const store = tx.objectStore(TABLE_NAME);
      const index = store.index("keyIndex");
      const request = index.get(attachment.key);

      request.onsuccess = (event) => {
        resolve((event.target as IDBRequest).result);
      };

      request.onerror = (event) => {
        reject((event.target as IDBRequest).error);
      };
    });
  };

  public static loadAndStoreFile = async (attachment?: InnerAttachment, onSuccess?: OnSuccessFn) => {
    if (!IndexDBService.instance) {
      IndexDBService.instance = new IndexDBService();
    }
    if (!attachment) return;
    await IndexDBService.instance.initDataBase();
    const existingFile = await IndexDBService.instance.getFileByKey(attachment);
    if (existingFile) {
      console.log(`文件已存在 （索引key: ${attachment.key}）`);
      onSuccess?.(existingFile);
    } else {
      // 获取文件Blob
      const { blob, type } = await IndexDBService.instance.fetchFile(attachment);
      // 存储到IndexedDB
      const fileData = {
        ...attachment,
        blob,
        type,
      };
      const id = await IndexDBService.instance.storeFileInDB(fileData);
      console.log(`文件添加成功 (ID: ${id})`);
      onSuccess?.(fileData);
    }
    return IndexDBService.instance;
  };
}
