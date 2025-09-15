"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[4979],{95858:function(i,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u5B9A\u4E49

Block Formatting Context\uFF0C\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\u3002BFC \u662F\u9875\u9762\u4E0A\u7684\u4E00\u4E2A\u72EC\u7ACB\u6E32\u67D3\u533A\u57DF\uFF0C\u89C4\u5B9A\u4E86\u5185\u90E8\u7684\u5757\u7EA7\u76D2\u5B50\u5982\u4F55\u5E03\u5C40\uFF0C\u5E76\u4E14\u4E0E\u5916\u90E8\u533A\u57DF\u9694\u79BB\u3002

## \u89E6\u53D1\u6761\u4EF6

\u6EE1\u8DB3\u4EE5\u4E0B\u4EFB\u4E00\u6761\u4EF6\u5373\u53EF\u521B\u5EFA BFC

\`\`\`css
.container {
  /* \u4EFB\u4E00\u5C5E\u6027 */
  float: left | right; /* \u4E0D\u4E3Anone */
  position: absolute | fixed;
  display: inline-block | table-cell | table-caption | flex | inline-flex | grid | inline-grid;
  overflow: hidden | auto | scroll; /* \u4E0D\u4E3Avisible */
  contain: layout | content | paint;
  column-count: auto | 1; /* \u5B9E\u9645\u4E0A\u9700\u8981\u8BBE\u7F6Ecolumn-count\u6216column-width */
  column-span: all; /* \u4E0D\u592A\u5E38\u7528 */
}
\`\`\`

## \u5E03\u5C40\u89C4\u5219

1. **\u5185\u90E8\u76D2\u5B50\u5782\u76F4\u6392\u5217**

   - BFC \u5185\u7684\u5757\u7EA7\u5143\u7D20\u4ECE\u4E0A\u5230\u4E0B\u5782\u76F4\u6392\u5217
   - \u6BCF\u4E2A\u5143\u7D20\u7684\u5DE6\u5916\u8FB9\u7F18\u63A5\u89E6\u5BB9\u5668\u5DE6\u8FB9\u7F18\uFF08\u5373\u4F7F\u5B58\u5728\u6D6E\u52A8\uFF09

2. **\u5782\u76F4\u65B9\u5411\u7684\u8DDD\u79BB\u7531 margin \u51B3\u5B9A**

   - \u76F8\u90BB\u5757\u7EA7\u5143\u7D20\u7684\u5782\u76F4 margin \u4F1A\u53D1\u751F\u91CD\u53E0
   - \u5C5E\u4E8E\u540C\u4E00\u4E2A BFC \u7684\u4E24\u4E2A\u76F8\u90BB\u5757\u7EA7\u5143\u7D20\u7684 margin \u4F1A\u5408\u5E76

3. **\u4E0D\u4E0E\u6D6E\u52A8\u5143\u7D20\u91CD\u53E0**

   - BFC \u533A\u57DF\u4E0D\u4F1A\u4E0E\u6D6E\u52A8\u5143\u7D20\u91CD\u53E0
   - \u81EA\u9002\u5E94\u5BBD\u5EA6\u5BB9\u5668\u53EF\u4EE5\u5229\u7528\u6B64\u7279\u6027

4. **\u8BA1\u7B97\u9AD8\u5EA6\u65F6\u5305\u542B\u6D6E\u52A8\u5143\u7D20**

   - BFC \u5BB9\u5668\u8BA1\u7B97\u9AD8\u5EA6\u65F6\u4F1A\u5305\u542B\u5185\u90E8\u6D6E\u52A8\u5143\u7D20
   - \u8FD9\u662F\u6E05\u9664\u6D6E\u52A8\u7684\u539F\u7406

5. **\u72EC\u7ACB\u5E03\u5C40\u73AF\u5883**
   - BFC \u5185\u90E8\u5143\u7D20\u5E03\u5C40\u4E0D\u5F71\u54CD\u5916\u90E8
   - \u5916\u90E8\u5143\u7D20\u5E03\u5C40\u4E0D\u5F71\u54CD BFC \u5185\u90E8

## \u5E38\u89C1\u5E94\u7528\u573A\u666F

1. **\u89E3\u51B3\u9AD8\u5EA6\u584C\u9677\uFF08\u6E05\u9664\u5185\u90E8\u6D6E\u52A8\uFF09**

\`\`\`html
<style>
  .container {
    border: 2px solid #3498db;
    /* \u672A\u6E05\u9664\u6D6E\u52A8\u65F6\u9AD8\u5EA6\u584C\u9677 */
  }

  .bfc {
    overflow: hidden; /* \u521B\u5EFABFC\u6E05\u9664\u6D6E\u52A8 */
  }

  .float-box {
    float: left;
    width: 100px;
    height: 100px;
    background: #e74c3c;
  }
</style>
<div class="container bfc">
  <div class="float-box">\u6D6E\u52A8\u5143\u7D20</div>
</div>
\`\`\`

![alt text](https://chenqiuling.github.io/frontend-notes-viewer/images/BFC/image.png)
![alt text](https://chenqiuling.github.io/frontend-notes-viewer/images/BFC/image-1.png)

2. **\u9632\u6B62\u5916\u8FB9\u8DDD\u5408\u5E76**

\`\`\`html
<style>
  .box {
    margin: 20px;
    background: #2ecc71;
    height: 50px;
  }

  .bfc-wrapper {
    overflow: hidden; /* \u521B\u5EFABFC\u9632\u6B62\u5916\u8FB9\u8DDD\u5408\u5E76 */
  }
</style>
<div class="box">Box 1</div>
<div class="bfc-wrapper">
  <div class="box">Box 2</div>
</div>
\`\`\`

![alt text](https://chenqiuling.github.io/frontend-notes-viewer/images/BFC/image-2.png)
![alt text](https://chenqiuling.github.io/frontend-notes-viewer/images/BFC/image-3.png)

3. **\u81EA\u9002\u5E94\u4E24\u680F\u5E03\u5C40**

\`\`\`html
<style>
  .container {
    width: 100%;
  }

  .sidebar {
    float: left;
    width: 200px;
    height: 300px;
    background: #9b59b6;
  }

  .main-content {
    overflow: hidden; /* \u521B\u5EFABFC\u907F\u514D\u4E0E\u6D6E\u52A8\u5143\u7D20\u91CD\u53E0\uFF0C\u8C37\u6B4C\u7B49\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E2D\u79FB\u9664\u6B64BFC\u4E5F\u6B63\u5E38 */
    height: 300px;
    background: #f1c40f;
  }
</style>
<div class="container">
  <div class="sidebar">\u4FA7\u8FB9\u680F</div>
  <div class="main-content">\u4E3B\u5185\u5BB9\u533A</div>
</div>
\`\`\`

4. **\u9632\u6B62\u6587\u5B57\u73AF\u7ED5**

\`\`\`html
<style>
  .float-img {
    float: left;
    width: 150px;
    height: 150px;
    background: #e67e22;
  }

  .bfc-text {
    overflow: hidden; /* \u521B\u5EFABFC\u9632\u6B62\u6587\u5B57\u73AF\u7ED5 */
    background: #ecf0f1;
  }
</style>
<div class="container">
  <div class="float-img"></div>
  <div class="bfc-text">
    BFC\u533A\u57DF\u5185\u7684\u6587\u672C\u4E0D\u4F1A\u73AF\u7ED5\u6D6E\u52A8\u5143\u7D20...BFC\u533A\u57DF\u5185\u7684\u6587\u672C\u4E0D\u4F1A\u73AF\u7ED5\u6D6E\u52A8\u5143\u7D20...BFC\u533A\u57DF\u5185\u7684\u6587\u672C\u4E0D\u4F1A\u73AF\u7ED5\u6D6E\u52A8\u5143\u7D20...BFC\u533A\u57DF\u5185\u7684\u6587\u672C\u4E0D\u4F1A\u73AF\u7ED5\u6D6E\u52A8\u5143\u7D20...BFC\u533A\u57DF\u5185\u7684\u6587\u672C\u4E0D\u4F1A\u73AF\u7ED5\u6D6E\u52A8\u5143\u7D20...BFC\u533A\u57DF\u5185\u7684\u6587\u672C\u4E0D\u4F1A\u73AF\u7ED5\u6D6E\u52A8\u5143\u7D20...BFC\u533A\u57DF\u5185\u7684\u6587\u672C\u4E0D\u4F1A\u73AF\u7ED5\u6D6E\u52A8\u5143\u7D20...
  </div>
</div>
\`\`\`

![alt text](https://chenqiuling.github.io/frontend-notes-viewer/images/BFC/image-4.png)
![alt text](https://chenqiuling.github.io/frontend-notes-viewer/images/BFC/image-5.png)

## BFC \u4E0E\u5176\u4ED6\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\u7684\u533A\u522B

| \u7279\u6027         | BFC                | IFC\uFF08\u884C\u5185\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF09      | FFC\uFF08\u5F39\u6027\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF09   |
| ------------ | ------------------ | ---------------------------- | ------------------------- |
| \u5E03\u5C40\u65B9\u5F0F     | \u5757\u7EA7\u5E03\u5C40           | \u884C\u5185\u5E03\u5C40                     | \u5F39\u6027\u5E03\u5C40                  |
| \u6392\u5217\u65B9\u5411     | \u5782\u76F4\u6392\u5217           | \u6C34\u5E73\u6392\u5217                     | \u53EF\u81EA\u5B9A\u4E49\u65B9\u5411              |
| \u89E6\u53D1\u65B9\u5F0F     | overflow, float \u7B49 | display: inline/inline-block | display: flex/inline-flex |
| \u9002\u7528\u5143\u7D20     | \u5757\u7EA7\u5143\u7D20           | \u884C\u5185\u5143\u7D20                     | \u5F39\u6027\u5BB9\u5668\u5B50\u5143\u7D20            |
| \u89E3\u51B3\u6D6E\u52A8\u95EE\u9898 | \u2713                  | \u2717                            | \u2713\uFF08\u81EA\u52A8\u6E05\u9664\u6D6E\u52A8\uFF09         |
| \u5916\u8FB9\u8DDD\u5408\u5E76   | \u53EF\u907F\u514D             | \u4E0D\u4F1A\u53D1\u751F                     | \u4E0D\u4F1A\u53D1\u751F                  |

## BFC \u7684\u6CE8\u610F\u4E8B\u9879

1. **\u6027\u80FD\u8003\u8651**\uFF1A\u8FC7\u5EA6\u4F7F\u7528 BFC\uFF08\u7279\u522B\u662F overflow: hidden\uFF09\u53EF\u80FD\u5F15\u8D77\u526A\u88C1\u95EE\u9898\u548C\u6EDA\u52A8\u6761\u51FA\u73B0
2. **\u73B0\u4EE3\u5E03\u5C40\u66FF\u4EE3**\uFF1AFlexbox \u548C Grid \u5E03\u5C40\u81EA\u8EAB\u521B\u5EFA\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF0C\u5F88\u591A\u573A\u666F\u4E0B\u53EF\u4EE5\u66FF\u4EE3 BFC
3. **\u6D4F\u89C8\u5668\u517C\u5BB9**\uFF1A\u5927\u591A\u6570 BFC \u89E6\u53D1\u5C5E\u6027\u5728\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E2D\u652F\u6301\u826F\u597D\uFF0C\u4F46\u5728\u65E7\u7248 IE \u4E2D\u53EF\u80FD\u6709\u5DEE\u5F02
4. **\u9009\u62E9\u5408\u9002\u89E6\u53D1\u65B9\u5F0F**\uFF1A\u6839\u636E\u5177\u4F53\u573A\u666F\u9009\u62E9\u6700\u5408\u9002\u7684 BFC \u89E6\u53D1\u65B9\u5F0F\uFF08\u5982\u6E05\u9664\u6D6E\u52A8\u5E38\u7528 overflow: hidden\uFF09
`}}]);
