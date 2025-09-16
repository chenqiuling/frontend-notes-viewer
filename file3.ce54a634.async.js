"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[9532],{90834:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \`<title>\`\u6807\u7B7E

\u6BCF\u4E2A HTML \u6587\u6863\u5FC5\u987B\u6709\u4E14\u53EA\u6709\u4E00\u4E2A \`<title>\`\u3002

## \`<meta>\`\u6807\u7B7E

1. \u5B57\u7B26\u96C6
   \u5FC5\u987B\u6B63\u786E\u8BBE\u7F6E\u4EE5\u907F\u514D\u4E71\u7801\u3002

\`\`\`html
<!-- HTML 4.01 -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<!-- HTML5 -->
<meta charset="UTF-8" />
\`\`\`

2. \u89C6\u53E3\u8BBE\u7F6E
   \u63A7\u5236\u6D4F\u89C8\u5668\u89C6\u53E3\u7684\u5C3A\u5BF8\u548C\u7F29\u653E\u884C\u4E3A\u3002

\`\`\`html
<meta
  name="viewport"
  content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,viewport-fit=cover"
/>
\`\`\`

- width=device-width: \u544A\u8BC9\u6D4F\u89C8\u5668\u89C6\u53E3\u5BBD\u5EA6\u5E94\u7B49\u4E8E\u8BBE\u5907\u7684\u5C4F\u5E55\u5BBD\u5EA6\u3002
- initial-scale=1.0: \u8BBE\u7F6E\u9875\u9762\u9996\u6B21\u52A0\u8F7D\u65F6\u7684\u521D\u59CB\u7F29\u653E\u7EA7\u522B\u4E3A 100%\uFF08\u4E0D\u7F29\u653E\uFF09\u3002
- minimum-scale=1.0: \u5141\u8BB8\u7528\u6237\u7F29\u5C0F\u7684\u6700\u5C0F\u6BD4\u4F8B\u3002
- maximum-scale=1.0: \u5141\u8BB8\u7528\u6237\u653E\u5927\u7684\u6700\u5927\u6BD4\u4F8B\u3002
- user-scalable=no: \u7981\u6B62\u7528\u6237\u7F29\u653E\u3002(\u4E0D\u63A8\u8350\uFF0C\u9664\u975E\u5FC5\u8981)
- viewport-fit: ios \u79FB\u52A8\u8BBE\u5907\u89C6\u53E3\u6BD4\u4F8B\uFF1B

3. \u5176\u4ED6

\`\`\`html
<!-- \u9875\u9762\u63CF\u8FF0 -->
<meta name="description" content="xxxxx" />
<!-- \u5173\u952E\u8BCD -->
<meta name="keywords" content="\u5173\u952E\u8BCD1, \u5173\u952E\u8BCD2, \u5173\u952E\u8BCD3" />
<!-- \u4F5C\u8005 -->
<meta name="author" content="\u4F5C\u8005\u59D3\u540D" />
<!-- \u7248\u6743\u4FE1\u606F -->
<meta name="copyright" content="\u7248\u6743\u6240\u6709\u8005" />

<!-- HTTP \u7B49\u6548\u4FE1\u606F\uFF0C\u5982 a \u6807\u7B7E\u4E2D\u7684 href \u9ED8\u8BA4\u4F1A\u53BB\u542F\u7528 DNS Prefetching\uFF0C\u4F46\u9ED8\u8BA4\u542F\u52A8\u5728 https \u4E0B\u65E0\u6548\uFF0C\u9700\u8981\u901A\u8FC7 meta \u6807\u7B7E\u5F3A\u5236\u5F00\u542F -->
<meta http-equiv="x-dns-prefetch-control" content="on" />

<!-- \u5185\u5BB9\u5B89\u5168xss -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'" />

<!-- \u9875\u9762\u7F13\u5B58 -->
<meta http-equiv="Cache-Control" content="no-cache,no-store,must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />

<!-- 30s \u5237\u65B0\u5F53\u524D\u9875\u9762 -->
<meta http-equiv="refresh" content="30" />
<!-- 3s \u8DF3\u8F6Cbaidu.com -->
<meta http-equiv="refresh" content="3;URL=https://www.baidu.com" />
<!-- \u89C4\u5B9A\u8981\u4F7F\u7528\u7684\u9884\u5B9A\u4E49\u7684\u6837\u5F0F\u8868 -->
<meta http-equiv="default-style" content="the document's preferred stylesheet" />

<!-- \u6D4F\u89C8\u5668\u517C\u5BB9 -->
<!-- \u5F3A\u5236Chromium\u5185\u6838\uFF0C\u4F5C\u7528\u4E8E360\u6D4F\u89C8\u5668\u3001QQ\u6D4F\u89C8\u5668\u7B49\u56FD\u4EA7\u53CC\u6838\u6D4F\u89C8\u5668 -->
<meta name="renderer" content="webkit" />
<!-- \u5F3A\u5236Chromium\u5185\u6838\uFF0C\u4F5C\u7528\u4E8E\u5176\u4ED6\u53CC\u6838\u6D4F\u89C8\u5668 -->
<meta name="force-rendering" content="webkit" />
<!-- \u5982\u679C\u6709\u5B89\u88C5 Google Chrome Frame \u63D2\u4EF6\u5219\u5F3A\u5236\u4E3AChromium\u5185\u6838\uFF0C\u5426\u5219\u5F3A\u5236\u672C\u673A\u652F\u6301\u7684\u6700\u9AD8\u7248\u672CIE\u5185\u6838\uFF0C\u4F5C\u7528\u4E8EIE\u6D4F\u89C8\u5668 -->
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />

<!-- \u641C\u7D22\u5F15\u64CE\u7D22\u5F15\u6307\u4EE4 -->
<meta name="robots" content="noindex, nofollow" />

<!-- \u793E\u4EA4\u5143\u6570\u636E\uFF0C og: Open Graph Protocol\uFF08\u5F00\u653E\u5185\u5BB9\u534F\u8BAE\uFF09\uFF0C\u4F7F\u7F51\u9875\u6210\u4E3A\u4E00\u4E2A\u5BCC\u5A92\u4F53\u5BF9\u8C61\uFF0C\u6709\u5229\u4E8E\u7F51\u9875\u722C\u866B\u7684\u6293\u53D6 -->
<meta property="og:title" content="\u6DF1\u5165\u7406\u89E3 HTML \u5143\u4FE1\u606F" />
<meta name="twitter:card" content="summary_large_image" />
\`\`\`

## \`<link>\`\u6807\u7B7E

1. \u5916\u90E8\u6837\u5F0F

\`\`\`html
<link rel="stylesheet" href="styles/main.css" />
\`\`\`

2. \u7F51\u7AD9\u56FE\u6807

\`\`\`html
<!-- ios\u56FE\u6807 -->
<link rel="apple-touch-icon" href="resources/icon.png" />
<!-- android\u56FE\u6807 -->
<link rel="android-touch-icon" href="resources/icon.png" />

<!-- \u6807\u9898\u680Flogo\u56FE\u6807 -->
<link rel="icon" type="image/x-icon" href="favicon.png" />
<!-- \u4E66\u7B7Elogo\u56FE\u6807 -->
<link rel="bookmark" type="image/x-icon" href="favicon.png" />
<!-- \u6536\u85CF\u5939logo\u56FE\u6807 -->
<link rel="shortcut icon" type="image/svg+xml" href="favicon.svg" />
\`\`\`

3. \u9884\u52A0\u8F7D

\`\`\`html
<!-- dns\uFF0Cdomain name system\uFF0C\u57DF\u540D\u89E3\u6790\u7CFB\u7EDF\u3002prefetch \u9884\u52A0\u8F7D\u3002\u63D0\u524D\u89E3\u6790\u57DF\u540D\u3002 -->
<link rel="dns-prefetch" href="//static.zhimg.com" />
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin />
\`\`\`

## \`<style>\`\u6807\u7B7E

\u5185\u5D4C CSS \u6837\u5F0F\u3002

## \`<base>\` \u6807\u7B7E

\u4E3A\u9875\u9762\u4E0A\u6240\u6709\u76F8\u5BF9 URL \u6307\u5B9A\u4E00\u4E2A\u57FA\u7840 URL\u3002
`}}]);
