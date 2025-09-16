"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[8326],{1285:function(s,n,t){t.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u76D2\u6A21\u578B
\u6BCF\u4E2A\u5143\u7D20\u90FD\u88AB\u89C6\u4E3A\u4E00\u4E2A\u77E9\u5F62\u76D2\u5B50\uFF0C\u7531\u56DB\u90E8\u5206\u7EC4\u6210
\`\`\`css
div {
  width: 300px;           /* \u5185\u5BB9\u533A\u5BBD\u5EA6 */
  padding: 20px;          /* \u5185\u8FB9\u8DDD\uFF08\u5185\u5BB9\u4E0E\u8FB9\u6846\u7684\u95F4\u8DDD\uFF09 */
  border: 5px solid #000; /* \u8FB9\u6846 */
  margin: 30px;           /* \u5916\u8FB9\u8DDD\uFF08\u76D2\u5B50\u4E0E\u5176\u4ED6\u5143\u7D20\u7684\u95F4\u8DDD\uFF09*/
}
\`\`\`

- \u6807\u51C6\u76D2\u6A21\u578B\uFF1A\u603B\u5BBD\u5EA6 = width + padding + border
- IE \u76D2\u6A21\u578B\uFF1A\u603B\u5BBD\u5EA6 = width\uFF08\u5305\u542Bpadding\u548Cborder\uFF09
- \`box-sizing: content-box;\` \u4E3A\u9ED8\u8BA4\u503C\uFF0C\u5373\u6807\u51C6\u76D2\u6A21\u578B\uFF1B
- \`box-sizing: border-box;\` IE \u76D2\u6A21\u578B\u3002

## \u9009\u62E9\u5668
\`\`\`css
/* \u57FA\u7840\u9009\u62E9\u5668 */
* { }                   /* \u901A\u914D\u7B26\u9009\u62E9\u5668 */
p { }                   /* \u5143\u7D20\u9009\u62E9\u5668 */
.class { }              /* \u7C7B\u9009\u62E9\u5668 */
#id { }                 /* ID\u9009\u62E9\u5668 */
[type="text"] { }       /* \u5C5E\u6027\u9009\u62E9\u5668 */

/* \u7EC4\u5408\u9009\u62E9\u5668 */
div > p { }             /* \u76F4\u63A5\u5B50\u5143\u7D20 */
div + p { }             /* \u76F8\u90BB\u5144\u5F1F */
div ~ p { }             /* \u540E\u7EED\u5144\u5F1F */
.class1.class2 { }      /* \u540C\u65F6\u62E5\u6709\u4E24\u4E2A\u7C7B */

/* \u4F2A\u7C7B/\u4F2A\u5143\u7D20 */
a:hover { }             /* \u4EA4\u4E92\u72B6\u6001 */
li:nth-child(2n) { }    /* \u5076\u6570\u884C */
p::first-line { }       /* \u9996\u884C\u6587\u672C */
\`\`\`
- \u6837\u5F0F\u4F18\u5148\u7EA7
  - \u901A\u914D\u7B26\u9009\u62E9\u5668 < \u5143\u7D20/\u4F2A\u5143\u7D20\u9009\u62E9\u5668 < \u7C7B/\u5C5E\u6027/\u4F2A\u7C7B\u9009\u62E9\u5668 < ID\u9009\u62E9\u5668 < \u5185\u8054\u6837\u5F0F < !important;
  - \u6743\u91CD\u662F\u53EF\u4EE5\u7D2F\u52A0\u7684
  - \u76F8\u540C\u6743\u91CD\u65F6\uFF0C\u540E\u58F0\u660E\u7684\u89C4\u5219\u4F18\u5148

- \u4F2A\u5143\u7D20\u4E0E\u4F2A\u7C7B
<div style="color: #00b050">\u76F8\u540C\uFF1A</div>
\u90FD\u7528\u4E8E\u7ED9\u67D0\u4E9B\u9009\u62E9\u5668\u6DFB\u52A0\u7279\u6B8A\u7684\u6548\u679C

<div style="color: #ff0000">\u533A\u522B\uFF1A</div>
\u4F2A\u7C7B\u7684\u6548\u679C\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0\u4E00\u4E2A\u5B9E\u9645\u7684\u7C7B\u6765\u8FBE\u5230\uFF0C\u800C\u4F2A\u5143\u7D20\u7684\u6548\u679C\u5219\u9700\u8981\u901A\u8FC7\u6DFB\u52A0\u4E00\u4E2A\u5B9E\u9645\u7684\u5143\u7D20\u624D\u80FD\u8FBE\u5230\u3002

\u5E38\u89C1\u7684\u4F2A\u7C7B\u79CD\u7C7B\uFF1A
![\u4F2A\u7C7B](https://chenqiuling.github.io/frontend-notes-viewer/images/img_css1.png)
\u5E38\u89C1\u7684\u4F2A\u5143\u7D20\u79CD\u7C7B\uFF1A
![\u4F2A\u5143\u7D20](https://chenqiuling.github.io/frontend-notes-viewer/images/img_css2.png)

<div style="color: #e36c09">tips\uFF1A</div>
CSS \u89C4\u8303\u4E2D\u7528\u53CC\u5192\u53F7:: \u8868\u793A\u4F2A\u5143\u7D20\uFF0C\u7528\u5355\u5192\u53F7: \u8868\u793A\u4F2A\u7C7B\u3002\u4F46\u5927\u90E8\u5206\u6D4F\u89C8\u5668\u4E5F\u53EF\u4EE5\u517C\u5BB9\u8BC6\u522B\u5355\u5192\u53F7\u7684\u4F2A\u5143\u7D20\u3002

## \u6837\u5F0F\u6587\u4EF6\u5F15\u5165
\`\`\`html
<link rel="stylesheet" href="styles.css" />
<!-- \u6761\u4EF6\u52A0\u8F7D -->
<link rel="stylesheet" href="mobile.css" media="screen and (max-width: 600px)">
<style>
  @import url("styles.css");
</style>
\`\`\`

\u5728 CSS \u6587\u4EF6\u5185\u90E8\u5F15\u5165\u5176\u4ED6 CSS \u6587\u4EF6
\`\`\`css
@import url("styles.css");

@media screen and (max-width: 600px) {
  @import url("mobile.css");
}
\`\`\`

| \u7279\u6027	| \`<link>\` \u6807\u7B7E	| @import \u89C4\u5219 |
|------|---------------|-------------|
| \u52A0\u8F7D\u987A\u5E8F | \u5E76\u884C\u52A0\u8F7D\uFF0C\u4E0D\u963B\u585E\u5176\u4ED6\u8D44\u6E90 |	\u4E32\u884C\u52A0\u8F7D\uFF0C\u5FC5\u987B\u7B49\u5F85\u5F53\u524D CSS \u52A0\u8F7D\u5B8C\u6210\u540E\u518D\u52A0\u8F7D |
| \u517C\u5BB9\u6027 | \u6240\u6709\u6D4F\u89C8\u5668\u652F\u6301 | IE5+ \u652F\u6301\uFF0C\u4F46\u8001\u7248\u672C\u6709\u517C\u5BB9\u6027\u95EE\u9898 |
| \u4F4D\u7F6E\u9650\u5236 | \u53EA\u80FD\u653E\u5728 \`<head>\` \u4E2D | \u53EF\u653E\u5728 CSS \u6587\u4EF6\u6216 \`<style>\` \u6807\u7B7E\u5185\uFF0C\u4F46\u5FC5\u987B\u51FA\u73B0\u5728\u6240\u6709\u5176\u4ED6 CSS \u89C4\u5219\u4E4B\u524D |
| \u6027\u80FD | \u66F4\u4F18\uFF08\u5E76\u884C\u52A0\u8F7D\uFF09 |	\u8F83\u5DEE\uFF08\u4E32\u884C\u52A0\u8F7D\uFF0C\u53EF\u80FD\u5BFC\u81F4\u9875\u9762\u95EA\u70C1\uFF09 |
| \u6761\u4EF6\u52A0\u8F7D | \u53EF\u901A\u8FC7 media \u5C5E\u6027\u5B9E\u73B0\u6761\u4EF6\u52A0\u8F7D | \u4E0D\u652F\u6301\u76F4\u63A5\u6761\u4EF6\u52A0\u8F7D\uFF08\u9700\u914D\u5408 @media\uFF09 |
| JavaScript \u64CD\u4F5C |	\u53EF\u901A\u8FC7 DOM \u52A8\u6001\u64CD\u4F5C | \u65E0\u6CD5\u76F4\u63A5\u64CD\u4F5C |

--- 

- \u63A8\u8350\u4F7F\u7528\`<link>\`
- \u8003\u8651\u4F7F\u7528 @import
    - \u5FC5\u987B\u5728 CSS \u5185\u90E8\u5F15\u5165\u5176\u4ED6\u6837\u5F0F\uFF08\u5982 Sass/LESS \u7F16\u8BD1\u540E\u7684\u5D4C\u5957\u5BFC\u5165\uFF09\u3002
- \u907F\u514D\u5D4C\u5957 @import
    - \u591A\u5C42\u5D4C\u5957\u4F1A\u5BFC\u81F4\u7011\u5E03\u5F0F\u52A0\u8F7D\uFF0C\u4E25\u91CD\u5F71\u54CD\u6027\u80FD\u3002

## 7\u9636\u5C42\u53E0\u6C34\u5E73
![image](https://chenqiuling.github.io/frontend-notes-viewer/images/img_css.png)

1. \u5F62\u6210\u5806\u53E0\u4E0A\u4E0B\u6587\u73AF\u5883\u7684\u5143\u7D20\u7684\u80CC\u666F\u4E0E\u8FB9\u6846
2. \u62E5\u6709\u8D1F z-index\xA0\u7684\u5B50\u5806\u53E0\u4E0A\u4E0B\u6587\u5143\u7D20\uFF08\u8D1F\u7684\u8D8A\u9AD8\u8D8A\u5806\u53E0\u5C42\u7EA7\u8D8A\u4F4E\uFF09
3. \u6B63\u5E38\u6D41\u5F0F\u5E03\u5C40\uFF0C\u975E\xA0inline-block\uFF0C\u65E0\xA0position\xA0\u5B9A\u4F4D\uFF08static \u9664\u5916\uFF09\u7684\u5B50\u5143\u7D20
4. \u65E0 position \u5B9A\u4F4D\uFF08static \u9664\u5916\uFF09\u7684 float \u6D6E\u52A8\u5143\u7D20
5. \u6B63\u5E38\u6D41\u5F0F\u5E03\u5C40\uFF0Cinline-block \u5143\u7D20\uFF0C\u65E0 position \u5B9A\u4F4D\uFF08static \u9664\u5916\uFF09\u7684\u5B50\u5143\u7D20\uFF08\u5305\u62EC display:table \u548C display:inline\uFF09
6. \u62E5\u6709\xA0z-index:0\xA0\u7684\u5B50\u5806\u53E0\u4E0A\u4E0B\u6587\u5143\u7D20
7. \u62E5\u6709\u6B63\xA0z-index\xA0\u7684\u5B50\u5806\u53E0\u4E0A\u4E0B\u6587\u5143\u7D20\uFF08\u6B63\u7684\u8D8A\u4F4E\u8D8A\u5806\u53E0\u5C42\u7EA7\u8D8A\u4F4E\uFF09

## \u54CD\u5E94\u5F0F
1. \u5A92\u4F53\u67E5\u8BE2
\`\`\`css
@media (max-width: 768px) {
  .sidebar { display: none; }
}
\`\`\`

2. \u54CD\u5E94\u5F0F\u5355\u4F4D
- \`vw/vh\`: \u89C6\u53E3\u5BBD/\u9AD8\u767E\u5206\u6BD4\uFF081vw = 1%\u89C6\u53E3\u5BBD\uFF09
- \`rem\`: \u57FA\u4E8E\u6839\u5B57\u4F53\u5927\u5C0F\uFF08\`html { font-size: 16px }\` \u2192 1rem=16px\uFF09
- \`%\`: \u76F8\u5BF9\u7236\u5143\u7D20\u5C3A\u5BF8

## \u89C6\u89C9\u6548\u679C
1. \u8FC7\u6E21\uFF08Transition\uFF09
\`\`\`css
button {
  background-color: blue;
  transition: background-color 0.5s ease;
}

button:hover {
  background-color: red;
}
\`\`\`

2. \u52A8\u753B\uFF08Animation\uFF09
\`\`\`css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.element {
  animation: fadeIn 1s forwards;
}
\`\`\`

3. \u53D8\u6362\uFF08Transform\uFF09
\`\`\`css
.card {
  transform: translate(10px, 10px) rotate(15deg) scale(1.1);
}
\`\`\`

4. \u900F\u89C6
\`\`\`css
.perspective {
  perspective: 1000px;
}
\`\`\`

## CSS\u53D8\u91CF
\`\`\`css
:root {
  --primary-color: #3498db;
}
button {
  background: var(--primary-color);
}
\`\`\`

## CSS\u51FD\u6570
- \`calc()\`: \u52A8\u6001\u8BA1\u7B97\u503C
\`\`\`css
.box {
  width: calc(100% - 40px);
}
\`\`\`

- \`clamp\`: \u9650\u5236\u503C\u5728\u8303\u56F4\u5185

\u6D41\u4F53\u6392\u7248
\`\`\`css
h1 {
  font-size: clamp(12px, 3vw, 40px); /* \u6700\u5C0F24px\uFF0C\u968F\u89C6\u53E3\u53D8\u5316\uFF0C\u6700\u592740px */
}
\`\`\`

- \`min()\`\u548C\`max()\`
\`\`\`css
.card {
  width: min(500px, 100%); /* \u53D6\u8F83\u5C0F\u503C */
}
\`\`\`

## \u5E38\u7528\u6548\u679C
### \u5143\u7D20\u5438\u9876
\u90E8\u5206 ios \u8BBE\u5907\u4F1A\u6709\u6389\u5E27\u3001\u95EA\u52A8\u5F02\u5E38\u3002
\`\`\`css
.tab {
  position: sticky;
  top: 0;
}
\`\`\`

### \u591A\u5C42\u9634\u5F71
\`\`\`css
.card {
  box-shadow: 
    0 4px 6px rgba(0,0,0,0.1),
    0 1px 3px rgba(0,0,0,0.08);
}
\`\`\`

### \u7EBF\u6027\u6E10\u53D8
\`\`\`css
.gradient {
  background: linear-gradient(to right, #ff5e62, #ff9966);
}
\`\`\`

### \u5F84\u5411\u6E10\u53D8
\`\`\`css
.circle {
  background: radial-gradient(circle, #3498db, #2980b9);
}
\`\`\`

### \u5168\u7AD9\u7F6E\u7070
\`\`\`css
html {
  filter: grayscale(0.95);
  -webkit-filter: grayscale(0.95);
}
\`\`\`

### \u9996\u5C4F\u7F6E\u7070
\`\`\`css
html::before {
  content: '';
  position: absolute;
  z-index: 10;
  inset: 0;
  backdrop-filter: grayscale(95%);
}
\`\`\`

### \u6BDB\u73BB\u7483\u6548\u679C
\`\`\`css
/* \u81EA\u8EAB */
.div1 {
  filter: blur(6px);
}
/* \u80CC\u666F */
.div2 {
  background-color: transparent;
  backdrop-filter: blur(6px);
}
\`\`\`

### \u56FA\u5B9A\u80CC\u666F\u56FE
\`\`\`css
body {
  background-image: url(img/bg.png);
  background-attachment: fixed;
}
\`\`\`

### \u9996\u5B57\u6BCD\u6837\u5F0F
::first-letter \u53EA\u9002\u5E94\u4E8E\u5757\u7EA7\u5143\u7D20\u3002
\`\`\`css
p::first-letter {
  font-size: 100px;
}
\`\`\`

### \u6253\u5B57\u6548\u679C
\`\`\`css
p {
  width: 110px;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
  animation: typing 2s steps(22), effect 0.5s step-end infinite alternate;
}
@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes effect {
  50% {
    border-color: transparent;
  }
}
\`\`\`

## \u6837\u5F0F\u76F8\u4E92\u5F71\u54CD\u95EE\u9898
1. \`transform: translateY()\`\u5BF9\u5B9A\u4F4D\u7684\u5F71\u54CD

- \u5BF9\`position: absolute;\`\u7684\u5F71\u54CD
\`\`\`css
.parent {
  transform: translateY(30px); /* \u521B\u5EFA\u65B0\u5305\u542B\u5757 */
}
.child {
  position: absolute;
  top: 0; /* \u73B0\u5728\u57FA\u4E8E.parent\u7684\u53D8\u6362\u540E\u4F4D\u7F6E */
}
\`\`\`

- \u5BF9\`position: fixed;\`\u7684\u5F71\u54CD
\`\`\`css
.transformed {
  transform: translateY(20px);
}
.fixed-child {
  position: fixed;  /* \u672C\u5E94\u76F8\u5BF9\u4E8E\u89C6\u53E3\u5B9A\u4F4D\uFF0C\u5B9E\u9645\u76F8\u5BF9\u4E8E.transformed\u5B9A\u4F4D */
}
\`\`\`

- \u5BF9\`z-index\`\u7684\u5F71\u54CD
\`\`\`css
.element {
  transform: translateZ(0); /* \u542F\u7528GPU\u52A0\u901F */
  z-index: 10; /* \u521B\u5EFA\u65B0\u5C42\u53E0\u4E0A\u4E0B\u6587 */
}
\`\`\`

\u89E3\u51B3\u65B9\u6CD5\uFF1A\u907F\u514D position \u7684\u7236\u7EA7\u6216\u8005\u7236\u8F88\u7EA7\u5143\u7D20\u6709\u4F7F\u7528\`transform: translateY()\`\u3002
`}}]);
