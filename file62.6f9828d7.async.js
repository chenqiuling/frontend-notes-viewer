"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[274],{71288:function(o,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

nginx \u4E00\u4E2A\u9AD8\u6027\u80FD\u7684 HTTP \u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u3002

\u7CFB\u7EDF\uFF1Awindows \u7248\u672C\uFF1Anginx-1.21.0

windows \u5B89\u88C5 nginx \u540E\uFF0C\u8FDB\u5165 nginx \u5B89\u88C5\u76EE\u5F55\uFF0C\u6267\u884C\u547D\u4EE4\u3002

## \u5E38\u7528\u547D\u4EE4\uFF1A

\`\`\`bash
\u67E5\u770B\u7248\u672C\u53F7\uFF1A
$ nginx -v

\u542F\u52A8\uFF1A
$ start nginx

\u5FEB\u901F\u505C\u6B62\u6216\u5173\u95ED\uFF1A
$ nginx -s stop

\u6B63\u5E38\u505C\u6B62\u6216\u5173\u95ED\uFF1A
$ nginx -s quit

\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6nginx.conf\u540E\u91CD\u542F\uFF1A
$ nginx -s reload
\`\`\`

## uri \u5339\u914D

\`\`\`nginx
location = / {
    # \u5B8C\u5168\u5339\u914D  =
    # \u5927\u5C0F\u5199\u654F\u611F ~
    # \u5FFD\u7565\u5927\u5C0F\u5199 ~*
}
location ^~ /images/ {
    # \u524D\u534A\u90E8\u5206\u5339\u914D ^~
    # \u53EF\u4EE5\u4F7F\u7528\u6B63\u5219\uFF0C\u5982\uFF1A
    # location ~* \\.(gif|jpg|png)$ { }
}
location / {
    # \u5982\u679C\u4EE5\u4E0A\u90FD\u672A\u5339\u914D\uFF0C\u4F1A\u8FDB\u5165\u8FD9\u91CC
}
\`\`\`

## \u7AEF\u53E3\u3001\u6839\u76EE\u5F55\u3001\u8DEF\u7531\u914D\u7F6E

\u914D\u7F6E\u9879\u76EE\u7684\u7AEF\u53E3\u3001\u6839\u76EE\u5F55\u548C\u8DEF\u7531\u4E3B\u8981\u5728 serve \u6A21\u5757\uFF1A

vue \u7684 history \u8DEF\u7531\u6A21\u5F0F\uFF0Creact \u7684 browser \u8DEF\u7531\u6A21\u5F0F\u9700\u8981\u5728 nginx \u7684 server \u5757\u4E2D\u914D\u7F6E\u91CD\u5B9A\u5411

\u56E0\u4E3A vue \u548C react \u662F\u5355\u9875\u5E94\u7528\uFF0C\u5B9E\u9645\u53EA\u6709\u4E00\u4E2A.html\uFF0C\u5982\u679C\u4E0D\u8FDB\u884C\u91CD\u5B9A\u5411\u914D\u7F6E\uFF0C\u666E\u901A\u8DEF\u7531\u8DF3\u8F6C\u6CA1\u6709\u5F02\u5E38\uFF0C\u5237\u65B0\u6D4F\u89C8\u5668\u5219\u4F1A 404\u3002

\`\`\`nginx
location / {
    # vue \u6216\u8005 react \u6253\u5305\u751F\u6210\u7684\u76EE\u5F55
    root  D:/workspaces-demo/frontend-notes/dist;
    # \u5C1D\u8BD5\u5BFB\u627E\u5339\u914D uri \u7684\u6587\u4EF6\uFF0C\u6CA1\u627E\u5230\u5C31\u8DF3 index.html
    try_files $uri $uri/ /index.html;
    index  index.html index.htm;
}
\`\`\`

\u6216\u8005

\`\`\`nginx
location / {
    root  D:/workspaces-demo/frontend-notes/dist;
    try_files $uri @router;
    autoindex on;
}
location @router {
    rewrite ^.*$ /index.html last;
}
\`\`\`

\u6216\u8005

\`\`\`nginx
root  D:/workspaces-demo/frontend-notes/dist;
location / {
    try_files $uri @router;
    autoindex on;
}
location @router {
    rewrite ^.*$ /index.html break;
}
\`\`\`

## \u8DE8\u57DF\u914D\u7F6E

[DNT(Do Not Track)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/DNT) - \u4E0D\u8FFD\u8E2A\u7528\u6237\u4FE1\u606F

\`\`\`nginx
location / {
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods 'GET,POST,DELETE,OPTIONS';
    add_header Access-Control-Allow-Headers 'DNT,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';

    if ($request_method = 'OPTIONS') {
        return 204;
    }
}
\`\`\`

## \u53CD\u5411\u4EE3\u7406

\`\`\`nginx
location / {
    proxy_pass http://localhost:8080; # \u4EE3\u7406
}
\`\`\`
`}}]);
