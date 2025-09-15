"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[4004],{91908:function(t,n,e){e.r(n),n.default=`\u9996\u5148\uFF0C\u5C0F\u7A0B\u5E8F\u76EE\u524D\u8FD8\u4E0D\u652F\u6301 EventSource\uFF0C\u53EA\u80FD\u901A\u8FC7\u5728\u8BF7\u6C42\u4E2D\u52A0\u5165 \`enableChunked: true\`\uFF0C\u5F00\u542F transfer-encoding chunked\uFF0C\u5206\u7247\u63A5\u6536\u54CD\u5E94\u3002

\u5177\u4F53\u5B9E\u8DF5\uFF08\u57FA\u4E8E taro3\uFF09\uFF1A

\u573A\u666F\uFF1AAI \u5BF9\u8BDD\u8F93\u51FA

\u5B9E\u8DF5\u4E2D\u9047\u5230\u7684\u51E0\u4E2A\u95EE\u9898\uFF1A

1. \u6BCF\u6B21\u63A5\u6536\u5230\u7684\u7247\u90FD\u6BD4\u8F83\u5927\uFF08\u51E0\u5341\u4E2A\u4E8B\u4EF6\u6D41\u4E00\u8D77\u8FD4\u56DE\uFF09\uFF0C\u6CA1\u6709\u50CF EventSource \u6309\u6BCF\u4E2A\u4E8B\u4EF6\u6D41\u8FD4\u56DE\u3002

\u9700\u8981\u83B7\u53D6\u5230\u5927\u7684\u6570\u636E\u5757\u540E\u505A\u6570\u636E\u62C6\u5206\u3002\u5F0A\u7AEF\uFF1A\u54CD\u5E94\u65F6\u95F4\u4F1A\u53D8\u957F\u3002

2. ios \u4E2D\u5B9A\u65F6\u5668\uFF08setInterval\uFF09\u5C0F\u4E8E 1 \u6BEB\u79D2\u65F6\u4E0D\u4F1A\u6267\u884C\u3002

\u9700\u8981\u7528 setTimeout \u6A21\u62DF\u5B9E\u73B0

3. \u5982\u679C\u9879\u76EE\u4E2D\u5199\u4E86\u8BF7\u6C42\u62E6\u622A\u5668\uFF0C\u4F1A\u83B7\u53D6\u4E0D\u5230 requestTask \u5BF9\u8C61\uFF08\u53EF\u80FD\u662F\u62E6\u622A\u5668\u5199\u7684\u6709\u95EE\u9898\u3002\u3002\u3002\uFF09

\u4E34\u65F6\u89E3\u51B3\u65B9\u6CD5\uFF1A\u5728\u83B7\u53D6 requestTask \u5BF9\u8C61\u524D\uFF0C\u6E05\u9664\u62E6\u622A\u5668\`Taro.cleanInterceptors();\`\uFF0C\u83B7\u53D6\u5230 requestTask \u5BF9\u8C61\u540E\uFF0C\u518D\u91CD\u65B0\u6DFB\u52A0\u62E6\u622A\u5668\`Taro.addInterceptor(interceptor);\`

\`\`\`ts
import Taro from '@tarojs/taro';
import TextEncoding from 'text-encoding-shim';

export function parseStringToObj(input) {
  // 1. \u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5206\u9694\u5B57\u7B26\u4E32
  const regex = /id:\\s*(.*?)\\s*data:\\s*(.*?)\\s*(?=id:|$)/g;
  let result = { id: '', data: '' };
  let match;
  while ((match = regex.exec(input)) !== null) {
    // match[1] \u662F id \u7684\u503C\uFF0Cmatch[2] \u662F data \u7684\u503C
    result = {
      id: match[1].trim(),
      data: match[2].trim(),
    };
  }

  return result;
}

export function createInterval(callback, interval) {
  let timeoutId: NodeJS.Timeout;

  function start() {
    timeoutId = setTimeout(() => {
      callback();
      start(); // \u518D\u6B21\u8C03\u7528 start \u4EE5\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8D85\u65F6
    }, interval);
  }

  start(); // \u542F\u52A8\u5B9A\u65F6\u5668

  return { clear: () => clearTimeout(timeoutId) };
}

export function fetchChat(chatParams: {
  url: string;
  params: any;
  onReopen: () => void;
  onMessage: (messages: any, interval: any) => void;
  onError: (err: any) => void;
}) {
  const { url, params, onReopen, onMessage, onError } = chatParams;
  let interval;
  const messages: { id: string; data: string }[] = [];

  type Listener = (arrayBuffer: ArrayBuffer) => void;
  function decodeStream(
    _onMessage: (messages: any, interval: any) => void,
    _onClose: () => void,
  ): Listener {
    let str = '';
    let p = 0;

    function outputArrayElements(arr) {
      let index = 0;
      interval = createInterval(() => {
        if (index >= arr.length) {
          interval.clear(); // \u6E05\u9664\u5B9A\u65F6\u5668
        } else {
          _onMessage(arr?.[index], interval);
          index++;
        }
      }, 0.003);
    }

    function decodeFn() {
      // \u65B0\u4E00\u884C\u6570\u636E
      while (str.indexOf('id: ', p) !== -1) {
        let line = '';
        const nextIndex = str.indexOf('id: ', p);
        if (nextIndex !== -1) {
          line = str.substring(p - 1, nextIndex);
          p = nextIndex + 1; // \u79FB\u52A8\u5230\u4E0B\u4E00\u4E2A\u5B57\u7B26
          if (line.trim()) {
            messages.push(parseStringToObj(line));
          }
        }
      }
      if (str.indexOf('id: ', p) === -1 && str.includes(encodeURIComponent('[DONE]'))) {
        const lastLine = str.substring(p - 1).trim();
        if (lastLine) {
          messages.push(parseStringToObj(lastLine));
          _onClose();
        }
      }
    }

    return async function(arraybuffer: ArrayBuffer) {
      const uint8Array = new Uint8Array(arraybuffer);
      const decodeBase64Str = new TextEncoding.TextDecoder('utf-8').decode(uint8Array);
      str += decodeBase64Str;
      try {
        // \u767B\u5F55\u5931\u6548\u903B\u8F91\u5904\u7406
        // // \u5C1D\u8BD5\u8F6Cjson
        // const resData = JSON.parse(str);
        // if (resData?.errCode === "unlogin") {
        //   await fetchRefreshToken();
        //   onReopen();
        // } else {
        //   decodeFn();
        //   if (!interval) {
        //     outputArrayElements(messages);
        //   }
        // }
      } catch (e) {
        decodeFn();
        if (!interval) {
          outputArrayElements(messages);
        }
      }
      // console.log("--sse\u6253\u5370", str, messages);
    };
  }

  // \u56E0\u4E3A\u4E0D\u6E05\u9664\u5C31\u62FF\u4E0D\u5230\u5143\u7D20\u7684requestTask\u5BF9\u8C61
  // Taro.cleanInterceptors();
  const requestTask = Taro.request({
    url,
    header: {
      // \u8BF7\u6C42\u5934\u53C2\u6570
    },
    method: 'POST',
    enableChunked: true,
    data: params,
  });

  // \u56E0\u4E3A\u524D\u9762cleanInterceptors\u4E86\uFF0C\u8D4B\u503C\u540E\u5C31\u8D76\u7D27addInterceptor\u56DE\u6765\uFF0C\u4E0D\u8981\u5F71\u54CD\u9879\u76EE\u5176\u4ED6\u63A5\u53E3
  // Taro.addInterceptor(interceptor);
  const listener = decodeStream(
    (message: any, interval: any) => {
      onMessage(message, interval);
    },
    () => {
      requestTask.offChunkReceived(res => listener(res.data));
    },
  );
  requestTask.onChunkReceived(res => listener(res.data));
  requestTask.catch(err => {
    if (err.errMsg !== 'request:fail abort') {
      onError(err);
    }
  });
  return {
    requestTask,
  };
}
\`\`\`

Server-Sent Events \u89C4\u8303\u63CF\u8FF0\u4E86\u4E00\u4E2A\u5185\u5EFA\u7684\u7C7B EventSource \uFF0C\u5B83\u80FD\u4FDD\u6301\u4E0E\u670D\u52A1\u5668\u7684\u8FDE\u63A5\uFF0C\u5E76\u5141\u8BB8\u4ECE\u4E2D\u63A5\u6536\u4E8B\u4EF6\u3002

\u4E0E WebSocket \u7684\u533A\u522B\uFF1A

- SSE\uFF1A\u5355\u5411\u8FDE\u63A5\uFF0C\u670D\u52A1\u5668\u53EF\u4EE5\u5411\u5BA2\u6237\u7AEF\u63A8\u9001\u6570\u636E\uFF0C\u4F46\u5BA2\u6237\u7AEF\u65E0\u6CD5\u76F4\u63A5\u5411\u670D\u52A1\u5668\u53D1\u9001\u6570\u636E\uFF08\u867D\u7136\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u8BF7\u6C42\u65B9\u5F0F\uFF09\u3002\u57FA\u4E8E HTTP \u534F\u8BAE\u3002

- WebSocket\uFF1A\u53CC\u5411\u8FDE\u63A5\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u53EF\u4EE5\u76F8\u4E92\u53D1\u9001\u6D88\u606F\u3002\u5EFA\u7ACB\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5355\u4E2A\u8FDE\u63A5\u8FDB\u884C\u53CC\u5411\u901A\u4FE1\uFF0C\u6027\u80FD\u8F83\u9AD8\u3002

\u5728 web \u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7

\`\`\`js
const source = new EventSource(\u63A5\u53E3\u5730\u5740);

// \u5173\u95ED
eventSource.close();
\`\`\`

\u5C40\u9650\u6027\uFF1AEventSource \u53EA\u652F\u6301 get \u8BF7\u6C42\uFF0C\u901A\u8FC7\`?xx=xxx\`\u4F20\u9012\u53C2\u6570\uFF0C\u4F1A\u6709\u4E00\u5B9A\u957F\u5EA6\u9650\u5236\u3002

\u89E3\u51B3\u65B9\u6848\uFF1A

\u4F7F\u7528 [fetch-event-source](https://github.com/Azure/fetch-event-source) \u5DE5\u5177

\u7B80\u5355\u793A\u4F8B\uFF1A

\`\`\`ts
import {
  EventSourceMessage,
  EventStreamContentType,
  fetchEventSource,
} from "@microsoft/fetch-event-source";

const ctrl = new AbortController();
fetchEventSource('\u63A5\u53E3\u5730\u5740', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        // \u53C2\u6570
    }),
    openWhenHidden: true, // \u9ED8\u8BA4\u503C\u4E3Afalse\uFF0C\u4E3Afalse\u65F6\u5F53\u6D4F\u89C8\u5668\u9875\u9762\u9690\u85CF\u65F6\u4F1A\u65AD\u5F00\u8FDE\u63A5
    signal: ctrl.signal,
    onopen: (response: Response) => {
        // \u53EF\u4EE5\u505A\u4E00\u4E9B\u63A5\u53E3\u9519\u8BEF\u7684\u5224\u65AD
        // \u5982\u540E\u7AEF\u672A\u767B\u5F55\u8FD4\u56DE\u7684\u662Fjson\u683C\u5F0F\u9519\u8BEF\u5BF9\u8C61
        // \u9ED8\u8BA4\u8FDB\u5165onerror\uFF0C\u6355\u83B7\u7684\u9519\u8BEF\u4E3A "Failed to execute 'getReader' on 'ReadableStream'"
        // \u60F3\u8981\u6355\u83B7\u771F\u6B63\u7684json\u9519\u8BEF\u5BF9\u8C61\u9700\u8981\u5728\u8FD9\u4E2A\u65B9\u6CD5\u4E2D
        if (response.ok && response.headers.get("content-type")?.includes(EventStreamContentType)) {
            return;
        } else {
            const err = await response.json();
            console.log('\u63A5\u53E3\u8FD4\u56DE\u7684json\u9519\u8BEF\u5BF9\u8C61'\uFF0Cerr)
        }
    },
    onmessage: (ev: EventSourceMessage) => {},
    onclose: () => {},
    onerror: (err: any) => {},
});

// \u8C03\u7528\u5219\u65AD\u5F00\u8FDE\u63A5
ctrl.abort();
\`\`\`
`}}]);
