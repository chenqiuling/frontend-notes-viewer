"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[2739],{71856:function(o,n,e){e.r(n),n.default=`\u6709\u4E0B\u8F7D\u94FE\u63A5\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u521B\u5EFA a \u6807\u7B7E\u4E0B\u8F7D\u6587\u4EF6\uFF0C\u901A\u8FC7 a.download \u6307\u5B9A\u4E0B\u8F7D\u7684\u6587\u4EF6\u540D\uFF1A

\u95EE\u9898\u4E00\uFF1A\u5927\u90E8\u5206\u6D4F\u89C8\u5668\u5BF9\u4E8E\u5E38\u89C1\u7684\u6587\u4EF6\u7C7B\u578B\u5982\u56FE\u7247\uFF0C\u4F1A\u8DF3\u8F6C\u9884\u89C8\u800C\u4E0D\u662F\u4E0B\u8F7D\uFF1B

\u95EE\u9898\u4E8C\uFF1A\u975E\u540C\u6E90\u6587\u4EF6 a.download \u65E0\u6548\uFF1B

\`\`\`ts
export const onDownloadFile = (fileUrl: string, filename?: string) => {
  const a = document.createElement('a');
  a.href = fileUrl;
  if (filename) {
    a.download = filename;
  }
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(fileUrl);
  });
};
\`\`\`

\u6587\u4EF6\u4E3A\u5B57\u8282\u6D41\u65F6\uFF0C\u5148\u901A\u8FC7 URL.createObjectURL \u8F6C\u6362\uFF0C\u518D\u901A\u8FC7 a \u6807\u7B7E\u4E0B\u8F7D\uFF1A

\`\`\`ts
export const onDownloadByBlob = (blob: Blob, filename: string) => {
  const url = window.URL.createObjectURL(new Blob([blob]));
  onDownloadFile(url, filename);
};
\`\`\`

\u5982\u60F3\u4FEE\u6539\u975E\u540C\u6E90\u6587\u4EF6\u4E0B\u8F7D\u7684\u6587\u4EF6\u540D\uFF0C\u5219\u9700\u8981\u901A\u8FC7\u53D1\u8D77\u8BF7\u6C42\uFF0C\u54CD\u5E94\u7C7B\u578B\u8BBE\u7F6E\u4E3A\u5B57\u8282\u6D41\uFF0C\u518D\u901A\u8FC7 URL.createObjectURL + a \u6807\u7B7E\u4E0B\u8F7D\uFF1A

\`\`\`ts
// a.download\u53EA\u5728\u540C\u6E90\u65F6\u6709\u6548\uFF0C\u5982\u9700\u4E0B\u8F7D\u4E0D\u540C\u6E90\u6587\u4EF6\uFF0C\u9700\u8F6Cblob
export const onDownloadByXML = (fileUrl: string, filename: string) => {
  const x = new window.XMLHttpRequest();
  x.open('GET', fileUrl, true);
  x.responseType = 'blob';
  // x.withCredentials = true; // \u8DE8\u57DF
  x.onload = () => {
    onDownloadByBlob(x.response, filename);
  };
  x.send();
};
\`\`\`
`}}]);
