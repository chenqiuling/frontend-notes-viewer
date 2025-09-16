"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[3397],{45583:function(r,e,n){n.r(e),e.default=`\u5B9E\u73B0\u79BB\u7EBF\u7F13\u5B58\u7684\u6280\u672F\u2014\u2014Manifest\u3001AppCache \u7684\u66F4\u4F73\u66FF\u4EE3\u65B9\u6848 Service Worker\u3002

Service Worker \u7684\u4F5C\u7528\uFF1A

- \u7528\u4E8E\u6D4F\u89C8\u5668\u7F13\u5B58
- \u5B9E\u73B0\u79BB\u7EBF Web APP\uFF08\u4F8B\u5982 PWA\uFF09
- \u6D88\u606F\u63A8\u9001

\u751F\u547D\u5468\u671F\uFF1A

- \u4E0B\u8F7D\uFF08download\uFF09- \u4E0B\u8F7D\u6CE8\u518C\u7684 js
- \u5B89\u88C5\uFF08install\uFF09
- \u6FC0\u6D3B\uFF08activate\uFF09

\u72B6\u6001\u7684\u53D8\u66F4\uFF1A
installing -> installed ->activating -> activated -> redundant
![image](https://mdn.mozillademos.org/files/12636/sw-lifecycle.png)

\u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0Cservice worker \u53EA\u80FD\u5728 https\u3001localhost\u3001127.0.0.1 \u4E0B\u8FD0\u884C\uFF0Chttp \u4E0B\u4E0D\u80FD\u8FD0\u884C\u3002

\u6CE8\u518C service worker\uFF1A

\`\`\`js
if ('serviceWorker' in navigator) {
  console.log('\u652F\u6301service worker');
  /**
   * \u6CE8\u518Cservice worker
   * 'sw.js'\u662F\u76F8\u5BF9\u4E8E origin\u7684\u8DEF\u5F84\uFF0C\u800C\u4E0D\u662F\u76F8\u5BF9\u4E8E\u5F15\u7528\u5B83\u7684\u6587\u4EF6\u7684\u8DEF\u5F84
   * scope \u9009\u586B\u9879\uFF0C\u6307\u5B9A service worker \u63A7\u5236\u7684\u5185\u5BB9\u7684\u5B50\u76EE\u5F55\uFF0C\u7559\u7A7A\u8868\u793A origin \u4E0B\u7684\u6240\u6709\u5185\u5BB9
   */
  navigator.serviceWorker
    .register('sw.js', {
      scope: './',
    })
    .then(function(registration) {
      console.log('service worker\u6CE8\u518C\u6210\u529F\uFF0Cscope\uFF1A' + registration.scope);
    })
    .catch(function(error) {
      console.log('service worker\u6CE8\u518C\u5931\u8D25\uFF0C\u9519\u8BEF\uFF1A' + error);
    });
} else {
  console.log('\u4E0D\u652F\u6301service worker');
}
\`\`\`

sw.js

\u65E7\u7248\u672C\u6D4F\u89C8\u5668\u652F\u6301 ServiceWorker cache\xA0API\uFF0C\u9700\u8981\u5F15\u5165[serviceworker-cache-polyfill.js](https://github.com/dominiccooney/cache-polyfill/blob/master/index.js)

\`\`\`js
importScripts('serviceworker-cache-polyfill.js');
// \u76F8\u5BF9\u4E8E origin\u7684\u8DEF\u5F84
var urlsToCache = ['index.html'];
var CACHE_NAME = 'demo-cache-v1';

// \u5B89\u88C5service worker
self.addEventListener('install', function(event) {
  // \u8DF3\u8FC7\u7B49\u5F85\u9636\u6BB5\uFF0C\u76F4\u63A5\u5230\u6FC0\u6D3B\u9636\u6BB5
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    }),
  );
});

// \u6355\u83B7\u8BF7\u6C42\u5E76\u8FD4\u56DE\u7F13\u5B58\u6570\u636E
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // \u5C06\u8BF7\u6C42\u548C\u7F13\u5B58\u4E2D\u7684\u8D44\u6E90\u8FDB\u884C\u5339\u914D
    caches
      .match(event.request)
      .then(function(res) {
        // \u5982\u679C service worker \u6709\u8FD4\u56DE\uFF0C\u5C31\u76F4\u63A5\u8FD4\u56DE\uFF0C\u51CF\u5C11\u4E00\u6B21 http \u8BF7\u6C42
        if (res) {
          return res;
        }

        // \u5982\u679C service worker \u6CA1\u6709\u8FD4\u56DE\uFF0C\u5C31\u76F4\u63A5\u8BF7\u6C42\u771F\u5B9E\u8FDC\u7A0B\u670D\u52A1
        return fetch(event.request).then(function(response) {
          // \u8BF7\u6C42\u5931\u8D25\uFF0C\u76F4\u63A5\u8FD4\u56DE\u5931\u8D25\u7684\u7ED3\u679C
          if (!response || response.status !== 200) {
            return response;
          }

          // \u8BF7\u6C42\u6210\u529F\uFF0C\u5C06\u8BF7\u6C42\u7F13\u5B58\u8D77\u6765
          return caches.open(CACHE_NAME).then(function(cache) {
            // \u8C03\u7528clone()\uFF0C\u56E0\u4E3A\u8BF7\u6C42\u548C\u54CD\u5E94\u6D41\u53EA\u80FD\u88AB\u8BFB\u53D6\u4E00\u6B21\uFF0C\u6240\u4EE5\u9700\u8981\u514B\u9686\u4E00\u4EFD\uFF0C\u539F\u59CB\u7684\u4F1A\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\uFF0C\u514B\u9686\u7684\u4F1A\u53D1\u9001\u5230\u7F13\u5B58\u4E2D
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
      .catch(function() {
        // \u5339\u914D\u5931\u8D25\u6216\u8005\u7F51\u7EDC\u4E0D\u53EF\u7528\u65F6\uFF0C\u8FD4\u56DE\u5B58\u5728\u7684\u67D0\u4E2A\u7F13\u5B58\u8D44\u6E90
        return caches.match('index.html');
      }),
  );
});

// \u7F13\u5B58\u66F4\u65B0
self.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // \u5982\u679C\u5F53\u524D\u7248\u672C\u548C\u7F13\u5B58\u7248\u672C\u4E0D\u4E00\u81F4\uFF0C\u5219\u5220\u9664\u7F13\u5B58\u7248\u672C
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
\`\`\`

\u8C37\u6B4C\u6D4B\u8BD5\u6548\u679C\uFF1A

- Online \u72B6\u6001\u4E0B\uFF0C\u5237\u65B0\u9875\u9762\uFF0C\u7F13\u5B58\u8D44\u6E90\u6587\u4EF6\uFF1B
- \u5207\u6362 Offline \u72B6\u6001\uFF0C\u518D\u6B21\u5237\u65B0\u9875\u9762\uFF0C\u88AB\u7F13\u5B58\u7684\u8D44\u6E90\u6587\u4EF6\u4ECD\u53EF\u4EE5\u663E\u793A\uFF1B
- \u67E5\u770B Network \uFF0C\u53EF\u4EE5\u770B\u5230 size \u4E00\u680F\u4E2D\u663E\u793A(from ServiceWorker)\uFF1B
- \u67E5\u770B Application -> Service Workers\uFF0C\u53EF\u4EE5\u770B\u5230\u672C\u57DF\u540D\u4E0B\u7684 Service Worker \u4FE1\u606F\u3002
- \u67E5\u770B Application -> Cache Storage\uFF0C\u53EF\u4EE5\u770B\u5230\u672C\u57DF\u540D\u4E0B\u7684\u7F13\u5B58\u8D44\u6E90\u3002

\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u9700\u8981\u5237\u65B0\u4E24\u6B21\u7F51\u9875\u624D\u80FD\u770B\u5230\u66F4\u65B0\u7684 service worker\u3002\u5982\u679C\u60F3\u8981\u4E00\u6B21\u5237\u65B0\u5C31\u80FD\u770B\u5230\u66F4\u65B0\uFF0C\u9700\u8981\u5728 Application -> Service Workers \u9762\u677F\u4E2D\u52FE\u9009\u201CUpdate on reload\u201D\u3002\uFF08\u6240\u4EE5\u7528\u6237\u4F1A\u4E0D\u4F1A\u6709\u8FD9\u4E2A\u95EE\u9898\uFF1F\uFF09

![image](https://chenqiuling.github.io/frontend-notes-viewer/images/img_sw.png)

\u53C2\u8003\u6587\u7AE0\uFF1A

https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers

https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle?hl=zh-cn

https://developers.google.com/web/fundamentals/codelabs/debugging-service-workers/?hl=zh-cn#_9

https://lavas.baidu.com/pwa/offline-and-cache-loading/service-worker/how-to-use-service-worker

\u793A\u4F8B\u4EE3\u7801\uFF1A

https://github.com/chenqiuling/service-worker-demo
`}}]);
