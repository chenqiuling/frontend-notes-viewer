"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[9062],{19077:function(t,n,i){i.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u4E09\u5217\u5E03\u5C40\u2014\u2014\u5DE6\u53F3\u5B9A\u5BBD+\u4E2D\u95F4\u81EA\u9002\u5E94

### \u5723\u676F\u5E03\u5C40

\u6838\u5FC3\uFF1A\u901A\u8FC7\u8D1F\u8FB9\u8DDD\u548C\u76F8\u5BF9\u5B9A\u4F4D\u5C06\u5DE6\u53F3\u4E24\u680F\u7CBE\u786E\u5B9A\u4F4D\u5230\u9884\u7559\u7A7A\u95F4

\u4F18\u70B9\uFF1A\u4E2D\u95F4\u5185\u5BB9\u4E0D\u9700\u8981\u989D\u5916\u5BB9\u5668\u5D4C\u5957\uFF0C\u66F4\u7B80\u6D01\u548C\u6613\u8BFB

\u7F3A\u70B9\uFF1A\u5B9E\u73B0\u76F8\u5BF9\u590D\u6742\uFF0C\u9700\u8981\u76F8\u5BF9\u5B9A\u4F4D\uFF0C\u5C0F\u5C4F\u5E55\u5E03\u5C40\u65F6\uFF0C\u4E2D\u95F4\u5185\u5BB9\u663E\u793A\u5728\u6700\u524D\u9762\uFF0C\u6709\u7684\u573A\u666F\u53EF\u80FD\u4E0D\u9002\u7528

\`\`\`html
<style>
  .holy-grail {
    padding: 0 200px; /* \u4E3A\u5DE6\u53F3\u680F\u9884\u7559\u7A7A\u95F4 */
    overflow: hidden; /* \u6E05\u9664\u6D6E\u52A8 */
  }
  .center {
    float: left;
    width: 100%; /* \u5360\u636E\u5168\u90E8\u5BBD\u5EA6 */
  }
  .left {
    float: left;
    width: 200px;
    margin-left: -100%; /* \u79FB\u52A8\u5230\u4E0A\u4E00\u884C\u5DE6\u4FA7 */
    position: relative;
    right: 200px; /* \u5411\u53F3\u79FB\u52A8\u81EA\u8EAB\u5BBD\u5EA6 */
  }
  .right {
    float: left;
    width: 200px;
    margin-left: -200px; /* \u79FB\u52A8\u5230\u4E0A\u4E00\u884C\u53F3\u4FA7 */
    position: relative;
    left: 200px; /* \u5411\u5DE6\u79FB\u52A8\u81EA\u8EAB\u5BBD\u5EA6 */
  }
  /* \u5C0F\u5C4F\u5E55\u54CD\u5E94\u5F0F */
  @media (max-width: 768px) {
    .holy-grail {
      padding: 0;
    }
    .center,
    .left,
    .right {
      float: none;
      width: 100%;
      position: static;
      margin: 0;
      min-height: auto;
    }
    .left,
    .right {
      margin-top: 20px !important;
    }
  }
</style>
<div class="holy-grail">
  <div class="center">\u4E2D\u95F4\u5185\u5BB9</div>
  <div class="left">\u5DE6\u4FA7\u680F</div>
  <div class="right">\u53F3\u4FA7\u680F</div>
</div>
\`\`\`

### \u53CC\u98DE\u7FFC\u5E03\u5C40\uFF08\u63A8\u8350\uFF09

\u6838\u5FC3\uFF1A\u901A\u8FC7\u4E2D\u95F4\u5185\u5BB9\u5BB9\u5668\u7684\u5916\u8FB9\u8DDD\u4E3A\u5DE6\u53F3\u4E24\u680F\u7559\u51FA\u7A7A\u95F4

\u4F18\u52BF\uFF1A\u4E2D\u95F4\u5185\u5BB9\u53EF\u4EE5\u4F18\u5148\u52A0\u8F7D\uFF0C\u80FD\u81EA\u9002\u5E94\u5BBD\u5EA6\uFF0C\u517C\u5BB9\u6027\u597D\uFF0C\u51CF\u5C11\u5D4C\u5957\u5C42\u7EA7

\u7F3A\u70B9\uFF1A\u5C0F\u5C4F\u5E55\u5E03\u5C40\u65F6\uFF0C\u4E2D\u95F4\u5185\u5BB9\u663E\u793A\u5728\u6700\u524D\u9762\uFF0C\u6709\u7684\u573A\u666F\u53EF\u80FD\u4E0D\u9002\u7528

\u4E0E\u5723\u676F\u5E03\u5C40\u7684\u4E3B\u8981\u533A\u522B\uFF1A\u4E2D\u95F4\u5185\u5BB9\u9700\u8981\u989D\u5916\u5305\u88F9\u7684\u5BB9\u5668\uFF0C\u76EE\u7684\u662F\u907F\u514D\u5DE6\u53F3\u5185\u5BB9\u8986\u76D6\u4E2D\u95F4\u5185\u5BB9\u3002

\`\`\`html
<style>
  .main-container,
  .left,
  .right {
    float: left;
  }
  .wrapper {
    overflow: hidden; /* \u6E05\u9664\u6D6E\u52A8 */
  }
  .main-container {
    width: 100%; /* \u5360\u636E\u5168\u90E8\u5BBD\u5EA6 */
  }
  .main {
    margin: 0 200px; /* \u4E3A\u5DE6\u53F3\u4E24\u680F\u9884\u7559\u7A7A\u95F4 */
  }
  .left {
    width: 200px;
    margin-left: -100%; /* \u79FB\u52A8\u5230main-container\u5DE6\u4FA7 */
  }
  .right {
    width: 200px;
    margin-left: -200px; /* \u79FB\u52A8\u5230main-container\u53F3\u4FA7 */
  }
  /* \u5C0F\u5C4F\u5E55\u54CD\u5E94\u5F0F */
  @media (max-width: 768px) {
    .main {
      margin: 0; /* \u79FB\u9664\u8FB9\u8DDD */
    }
    .left,
    .right {
      width: 100%; /* \u5168\u5BBD\u5EA6\u663E\u793A */
      margin-left: 0;
      margin-top: 20px;
    }
  }
</style>
<div class="wrapper">
  <div class="main-container">
    <div class="main">\u4E2D\u95F4\u5185\u5BB9</div>
  </div>
  <div class="left">\u5DE6\u4FA7\u680F</div>
  <div class="right">\u53F3\u4FA7\u680F</div>
</div>
\`\`\`

### \u5F39\u6027\u5E03\u5C40\uFF08\u63A8\u8350\uFF09

\`\`\`html
<style>
  .wrapper {
    display: flex;
  }
  .middle {
    flex: 1;
  }
  .left,
  .right {
    flex: 0 0 200px;
  }
</style>
<div class="wrapper">
  <div class="left">\u5DE6\u4FA7\u680F</div>
  <div class="middle">\u4E2D\u95F4\u5185\u5BB9</div>
  <div class="right">\u53F3\u4FA7\u680F</div>
</div>
\`\`\`

### \u7F51\u683C\u5E03\u5C40

\u7F3A\u70B9\uFF1A\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\uFF0C\u4F4E\u7248\u672C\u5B89\u5353\u8BBE\u5907\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301

\`\`\`html
<style>
  .wrapper {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    /* grid-template-columns: 1fr 1fr 1fr; \u4E09\u5217\u7B49\u5BBD\u5E03\u5C40 */
  }
</style>
<div class="wrapper">
  <div class="left">\u5DE6\u4FA7\u680F</div>
  <div class="middle">\u4E2D\u95F4\u5185\u5BB9</div>
  <div class="right">\u53F3\u4FA7\u680F</div>
</div>
\`\`\`

### \u53E6\u4E00\u79CD\u6D6E\u52A8\u5E03\u5C40

\u7F3A\u70B9\uFF1A\u5C0F\u5C4F\u5E55\u5E03\u5C40\u65F6\uFF0C\u4E2D\u95F4\u5185\u5BB9\u663E\u793A\u5728\u6700\u540E\u9762

\`\`\`html
<style>
  .left {
    float: left;
    width: 200px;
  }
  .right {
    float: right;
    width: 200px;
  }
  .wrapper::after {
    content: '';
    clear: both;
  }
  @media (max-width: 768px) {
    .right {
      float: none;
    }
  }
</style>
<div class="wrapper">
  <div class="left">\u5DE6\u4FA7\u680F</div>
  <div class="right">\u53F3\u4FA7\u680F</div>
  <div class="middle">\u4E2D\u95F4\u5185\u5BB9</div>
</div>
\`\`\`

### \u884C\u5185\u5757\u5E03\u5C40

\`\`\`html
<style>
  .wrapper {
    font-size: 0; /* \u5BB9\u5668\u9700\u8981\u8BBE\u7F6E\u5B57\u4F530\uFF0C\u5426\u5219\u5B50\u7EA7div\u4E4B\u95F4\u7684\u683C\u5F0F\u5316\u6362\u884C\u4F1A\u4EA7\u751F\u95F4\u9699 */
  }
  .left,
  .middle,
  .right {
    display: inline-block;
    font-size: 16px;
  }
  .left,
  .right {
    width: 200px;
  }
  .middle {
    width: calc(100% - 400px);
  }
</style>
<div class="wrapper">
  <div class="left">\u5DE6\u4FA7\u680F</div>
  <div class="middle">\u4E2D\u95F4\u5185\u5BB9</div>
  <div class="right">\u53F3\u4FA7\u680F</div>
</div>
\`\`\`

### \u5B9A\u4F4D\u5E03\u5C40

\`\`\`html
<style>
  .wrapper {
    position: relative;
  }
  .left,
  .right {
    position: absolute;
    top: 0;
    width: 200px;
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
  .middle {
    margin: 0 200px;
  }
</style>
<div class="wrapper">
  <div class="left">\u5DE6\u4FA7\u680F</div>
  <div class="middle">\u4E2D\u95F4\u5185\u5BB9</div>
  <div class="right">\u53F3\u4FA7\u680F</div>
</div>
\`\`\`

## \u4E09\u884C\u5E03\u5C40-\u4E0A\u4E0B\u5B9A\u9AD8+\u4E2D\u95F4\u81EA\u9002\u5E94\uFF08\u8D85\u51FA\u6EDA\u52A8\uFF09

### Flex \u5E03\u5C40

\`\`\`html
<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh; /* \u89C6\u7A97\u9AD8\u5EA6 */
  }
  header,
  footer {
    height: 50px;
  }
  main {
    flex: 1; /* \u5360\u636E\u5269\u4F59\u7A7A\u95F4 */
    overflow-y: auto;
  }
</style>
<div class="container">
  <header>Header</header>
  <main>\u4E3B\u4F53\u5185\u5BB9</main>
  <footer>Footer</footer>
</div>
\`\`\`

### \u56FA\u5B9A\u5B9A\u4F4D

\`\`\`html
<style>
  header,
  footer {
    position: fixed;
    width: 100%;
    height: 50px;
  }
  header {
    top: 0;
  }
  footer {
    bottom: 0;
  }
  main {
    margin-top: 50px;
    margin-bottom: 50px;
    height: calc(100vh - 100px);
    overflow-y: auto;
  }
</style>
<header>Header</header>
<main>\u4E3B\u4F53\u5185\u5BB9</main>
<footer>Footer</footer>
\`\`\`

## \u5782\u76F4\u6C34\u5E73\u5C45\u4E2D

\u5DF2\u77E5\u5E03\u5C40\u5982\u4E0B\uFF1A

\`\`\`html
<style>
  .container {
    width: 300px;
    height: 300px;
    background-color: #aaa;
  }
  .element {
    width: 100px;
    height: 100px;
    background-color: #fff;
  }
</style>
<div class="container">
  <div class="element"></div>
</div>
\`\`\`

### Flex \u5E03\u5C40

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

### Grid \u5E03\u5C40

\`\`\`css
.container {
  display: grid;
  place-items: center; /* \u540C\u65F6\u5C45\u4E2D */
}
\`\`\`

### table-cell \u5E03\u5C40

\`\`\`css
.container {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.element {
  display: inline-block;
}
\`\`\`

### \u5B9A\u4F4D+\u8F6C\u6362

\`\`\`css
.container {
  position: relative;
}
.element {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /* \u5173\u952E */
}
\`\`\`

### \u5B9A\u4F4D+\u8FB9\u8DDD auto

\`\`\`css
.container {
  position: relative;
}
.element {
  position: absolute;
  inset: 0; /* \u7B80\u5316\u5199\u6CD5\uFF0C\u7B49\u540C\u4E8E\u540C\u65F6\u8BBE\u7F6E top, right, bottom, left */
  margin: auto; /* \u5173\u952E */
}
\`\`\`
`}}]);
