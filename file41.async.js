"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[2058],{5904:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

> Access to fetch at 'https://xxxA' from origin 'https://xxxB' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

## \u4EC0\u4E48\u662F\u8DE8\u57DF

\u534F\u8BAE\u3001\u57DF\u540D\u3001\u7AEF\u53E3\u53F7\u4EFB\u610F\u4E00\u4E2A\u4E0D\u540C\u7684\u90FD\u88AB\u89C6\u4E3A\u8DE8\u57DF\u3002\u8DE8\u57DF\u662F\u7531\u6D4F\u89C8\u5668\u7684\u540C\u6E90\u7B56\u7565\u9020\u6210\u7684\u3002

\u8BF7\u6C42\u9636\u6BB5\u4E0D\u4F1A\u62E6\u622A\uFF0C\u670D\u52A1\u5668\u53D1\u51FA\u54CD\u5E94\u540E\uFF0C\u6D4F\u89C8\u5668\u5224\u65AD\u662F\u5426\u5141\u8BB8\u8DE8\u57DF\uFF0C\u4E0D\u5141\u8BB8\u5219\u6D4F\u89C8\u5668\u62E6\u622A\u54CD\u5E94\u3002

## \u8DE8\u57DF\u9650\u5236\u8303\u56F4

- AJAX \u8BF7\u6C42
- web \u5B57\u4F53
- Canvas \u56FE\u50CF\u64CD\u4F5C
- LocalStorage \u8BBF\u95EE
- IndexedDB \u8BBF\u95EE
- Cookie \u8BFB\u53D6

## \u89E3\u51B3\u65B9\u6848

### \u914D\u7F6E\u8DE8\u57DF\u8BF7\u6C42\u5934

Access-Control-Allow-Credentials \u8BBE\u7F6E\u4E3A true \u7684\u60C5\u51B5\u4E0B Access-Control-Allow-Origin \u4E0D\u80FD\u8BBE\u7F6E\u4E3A\`*\`\u3002

\`\`\`js
// node\u670D\u52A1\u4E3A\u4F8B
res.set({
  'Access-Control-Allow-Credentials': true, // \u662F\u5426\u5141\u8BB8\u53D1\u9001Cookie
  'Access-Control-Allow-Origin': req.headers.origin || '*', // \u5141\u8BB8\u8BBF\u95EE\u7684\u6E90
  'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type', // \u5141\u8BB8\u7684\u8BF7\u6C42\u5934
  'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS', // \u5141\u8BB8\u7684HTTP\u65B9\u6CD5
  'Access-Control-Expose-Headers': 'X-Custom-Header', // \u5141\u8BB8\u66B4\u9732\u7684\u54CD\u5E94\u5934
  'Access-Control-Max-Age': '86400', // \u9884\u68C0\u8BF7\u6C42\u7684\u6709\u6548\u65F6\u95F4
});
\`\`\`

\u5E94\u907F\u514D\u4F7F\u7528\u8FC7\u5EA6\u5BBD\u677E\u7684 CORS \u7B56\u7565\uFF0C\u4F8B\u5982\u5C06\`Access-Control-Allow-Origin\`\u8BBE\u7F6E\u4E3A\`*\`

\u6CE8\u610F\u9632\u8303 CSRF \u653B\u51FB\uFF0C\u4F7F\u7528 SameSite Cookie \u548C CSRF Token\u3002

#### CORS \u9884\u68C0\u8BF7\u6C42\uFF08Preflight\uFF09\u4F55\u65F6\u89E6\u53D1\uFF1F

> \u5BF9\u90A3\u4E9B\u53EF\u80FD\u5BF9\u670D\u52A1\u5668\u6570\u636E\u4EA7\u751F\u526F\u4F5C\u7528\u7684 HTTP \u8BF7\u6C42\u65B9\u6CD5\uFF08\u7279\u522B\u662F GET \u4EE5\u5916\u7684 HTTP \u8BF7\u6C42\uFF0C\u6216\u8005\u642D\u914D\u67D0\u4E9B MIME \u7C7B\u578B\u7684 POST \u8BF7\u6C42\uFF09\uFF0C\u6D4F\u89C8\u5668\u5FC5\u987B\u9996\u5148\u4F7F\u7528 OPTIONS \u65B9\u6CD5\u53D1\u8D77\u4E00\u4E2A\u9884\u68C0\u8BF7\u6C42\uFF08preflight request\uFF09\uFF0C\u4ECE\u800C\u83B7\u77E5\u670D\u52A1\u7AEF\u662F\u5426\u5141\u8BB8\u8BE5\u8DE8\u6E90\u8BF7\u6C42\u3002

\u5F53\u8BF7\u6C42\u6EE1\u8DB3\u4EE5\u4E0B\u4EFB\u4E00\u6761\u4EF6\u65F6\uFF1A

- \u65B9\u6CD5\u4E3A PUT\u3001DELETE \u7B49\u975E\u7B80\u5355\u65B9\u6CD5\u3002
- \u5305\u542B\u81EA\u5B9A\u4E49\u5934\u90E8\uFF08\u5982 Authorization\uFF09\u3002
- Content-Type \u975E application/x-www-form-urlencoded\u3001multipart/form-data \u6216 text/plain\u3002

### \u8BBE\u7F6E\u4EE3\u7406

#### \u672C\u5730\u4EE3\u7406

\u672C\u5730\u642D\u5EFA\u4E86\u4E00\u4E2A\u4E2D\u95F4\u670D\u52A1\u5668\uFF0C\u6D4F\u89C8\u5668\u8BF7\u6C42\u672C\u5730\u4E2D\u95F4\u670D\u52A1\u5668\uFF0C\u7531\u4E2D\u95F4\u670D\u52A1\u5668\u53BB\u8BF7\u6C42\u8DE8\u57DF\u63A5\u53E3\uFF0C\u6700\u540E\u5C06\u7ED3\u679C\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\u3002

\`\`\`js
// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://api.example.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\\/api/, ''),
        secure: false,
      },
    },
  },
};

// Webpack\u914D\u7F6E
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.example.com',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
      },
    },
  },
};
\`\`\`

#### Nginx \u53CD\u5411\u4EE3\u7406

\`\`\`nginx
server {
    listen 80;
    server_name myapp.com;

    location /api/ {
        proxy_pass http://api.example.com/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # CORS\u914D\u7F6E
        add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range' always;
        add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range' always;
    }
}
\`\`\`

### JSONP\uFF08\u4EC5\u9650 get \u8BF7\u6C42\uFF09

\`\`\`js
var script = document.createElement('script');
function getData(data) {
  // \u4E25\u683C\u9A8C\u8BC1\u6570\u636E\u683C\u5F0F
  if (typeof data !== 'object') return;
  // \u4F7F\u7528\u7EAF\u6570\u636E\uFF0C\u907F\u514D\u51FD\u6570\u6267\u884C
  console.log(data);
}
script.src = 'http://localhost:3000/?callback=getData';
document.body.appendChild(script);
\`\`\`

\u5982 jquery \u4E2D ajax \u8BF7\u6C42

\`\`\`js
function jsonpCallback(data) {
  // \u4E25\u683C\u9A8C\u8BC1\u6570\u636E\u683C\u5F0F
  if (typeof data !== 'object') return;
  // \u4F7F\u7528\u7EAF\u6570\u636E\uFF0C\u907F\u514D\u51FD\u6570\u6267\u884C
  console.log(data);
}
$.ajax({
  url: 'xxx',
  type: 'GET',
  dataType: 'jsonp',
  jsonp: 'cb',
  jsonpCallback: 'jsonpCallback', // \u9700\u8981\u548C\u56DE\u8C03\u51FD\u6570\u540D\u4E00\u6837
  success: function(data) {},
  error: function(error) {},
});
\`\`\`

### postMessage \u8DE8\u6587\u6863\u901A\u4FE1

\`\`\`js
// \u53D1\u9001\u65B9\uFF08iframe\u7236\u9875\u9762\uFF09
const iframe = document.querySelector('iframe');
iframe.contentWindow.postMessage(
  { type: 'GET_DATA', payload: { id: 123 } },
  'https://child.example.com',
);

// \u63A5\u6536\u65B9\uFF08iframe\u5B50\u9875\u9762\uFF09
window.addEventListener('message', event => {
  if (event.origin !== 'https://parent.example.com') return;

  if (event.data.type === 'GET_DATA') {
    const data = fetchData(event.data.payload.id);
    event.source.postMessage({ type: 'DATA_RESPONSE', payload: data }, event.origin);
  }
});
\`\`\`

### WebSocket \u8DE8\u57DF

\`\`\`js
const socket = new WebSocket('wss://api.example.com/socket');

socket.onopen = () => {
  socket.send(JSON.stringify({ action: 'subscribe', channel: 'updates' }));
};

socket.onmessage = event => {
  console.log('Received:', JSON.parse(event.data));
};
\`\`\`

### document.domain \u964D\u57DF

\`\`\`js
// \u7236\u9875\u9762\uFF1Aa.example.com
document.domain = 'example.com';

// \u5B50\u9875\u9762\uFF1Ab.example.com
document.domain = 'example.com';

// \u73B0\u5728\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE
const childWindow = window.frames[0];
childWindow.document.getElementById('content');
\`\`\`

## \u8DE8\u57DF Cookie \u4F20\u9012

\`\`\`js
// \u5BA2\u6237\u7AEF\uFF08withCredentials\uFF09
fetch('https://api.example.com/login', {
  method: 'POST',
  credentials: 'include', // \u5173\u952E\u8BBE\u7F6E
  body: JSON.stringify({ user: 'name', pass: 'secret' })
});

// \u670D\u52A1\u7AEF\u54CD\u5E94\u5934
Access-Control-Allow-Origin: https://myapp.com
Access-Control-Allow-Credentials: true
\`\`\`

## \u8DE8\u57DF\u56FE\u7247\u5904\u7406

\u89E3\u51B3 Canvas \u8DE8\u57DF\u95EE\u9898

\`\`\`js
const img = new Image();
img.crossOrigin = 'Anonymous'; // \u5173\u952E\u5C5E\u6027
img.src = 'https://cross-origin.com/image.jpg';

img.onload = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, img.width, img.height);
};
\`\`\`

## \u8DE8\u57DF\u5B57\u4F53\u52A0\u8F7D

\`\`\`css
@font-face {
  font-family: 'CustomFont';
  src: url('https://font-cdn.com/font.woff2') format('woff2');
  font-display: swap;
  /* \u5B57\u4F53\u670D\u52A1\u5668\u9700\u8BBE\u7F6E\uFF1AAccess-Control-Allow-Origin: * */
}
\`\`\`
`}}]);
