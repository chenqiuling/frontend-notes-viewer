"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[8226],{98912:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u4E00\u3001\u6838\u5FC3\u6982\u5FF5

1. **Flex \u5BB9\u5668**\uFF1A\u8BBE\u7F6E \`display: flex\` \u7684\u5143\u7D20
2. **Flex \u9879\u76EE**\uFF1A\u5BB9\u5668\u5185\u7684**\u76F4\u63A5\u5B50\u5143\u7D20**
3. **\u4E24\u6839\u8F74\u7EBF**\uFF1A
   - **\u4E3B\u8F74**\uFF08main axis\uFF09\uFF1A\u9879\u76EE\u6392\u5217\u65B9\u5411
   - **\u4EA4\u53C9\u8F74**\uFF08cross axis\uFF09\uFF1A\u5782\u76F4\u4E8E\u4E3B\u8F74

## \u4E8C\u3001\u5BB9\u5668\u5C5E\u6027

\`\`\`css
.container {
  /* \u5F00\u542Fflex\u5E03\u5C40 */
  display: flex;

  /* \u4E3B\u8F74\u65B9\u5411, \u9ED8\u8BA4row: \u4E3B\u8F74\u6C34\u5E73\u65B9\u5411\uFF0C\u5DE6\u5230\u53F3 */
  flex-direction: row | row-reverse | column | column-reverse;

  /* \u6362\u884C\u63A7\u5236 */
  flex-wrap: nowrap | wrap | wrap-reverse;

  /* \u4E3B\u8F74\u5BF9\u9F50 */
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;

  /* \u4EA4\u53C9\u8F74\u5BF9\u9F50 */
  align-items: stretch | flex-start | flex-end | center | baseline;

  /* \u591A\u884C\u5BF9\u9F50\uFF08\u884C\u95F4\u8DDD\u63A7\u5236\uFF09 */
  justify-items: stretch | center | start | end | flex-start | flex-end | self-start | self-end;

  /* \u591A\u884C\u5BF9\u9F50\uFF08\u884C\u95F4\u8DDD\u63A7\u5236\uFF09 */
  align-content: stretch | flex-start | flex-end | center | space-between | space-around;
}
\`\`\`

## \u4E09\u3001\u9879\u76EE\u5C5E\u6027

\`\`\`css
.item {
  /* \u9879\u76EE\u653E\u5927\u6BD4\u4F8B */
  flex-grow: <number>; /* \u9ED8\u8BA40 */

  /* \u9879\u76EE\u7F29\u5C0F\u6BD4\u4F8B */
  flex-shrink: <number>; /* \u9ED8\u8BA41 */

  /* \u521D\u59CB\u5C3A\u5BF8\uFF08\u63A8\u8350\u4F7F\u7528\u4EE3\u66FFwidth\uFF09 */
  flex-basis: <length> | auto; /* \u9ED8\u8BA4auto */

  /* \u7B80\u5199 */
  flex: [grow] [shrink] [basis]; /* \u4F8B\uFF1Aflex: 1 0 200px */

  /* \u5355\u72EC\u5BF9\u9F50\u65B9\u5F0F\uFF08\u8986\u76D6align-items\uFF09 */
  align-self: auto | flex-start | flex-end | center | baseline | stretch;

  /* \u5355\u72EC\u5BF9\u9F50\u65B9\u5F0F\uFF08\u8986\u76D6ajustify-content\uFF09 */
  justify-self: stretch | center | start | end | flex-start | flex-end | self-start | self-end;

  /* \u663E\u793A\u987A\u5E8F */
  order: <integer>; /* \u9ED8\u8BA40 */
}
\`\`\`

---

### \u5E38\u7528\u573A\u666F

#### 1. \u6C34\u5E73\u5782\u76F4\u5C45\u4E2D

\`\`\`css
.container {
  display: flex;
  justify-content: center; /* \u4E3B\u8F74\u5C45\u4E2D */
  align-items: center; /* \u4EA4\u53C9\u8F74\u5C45\u4E2D */
}
\`\`\`

#### 2. \u81EA\u9002\u5E94\u7B49\u5206\u5E03\u5C40

\`\`\`css
.item {
  flex: 1; /* \u7B49\u4EF7\u4E8E flex: 1 1 0 */
}
/* \u4E0D\u7B49\u5206\u793A\u4F8B */
.item1 {
  flex: 2;
} /* \u53602\u4EFD */
.item2 {
  flex: 3;
} /* \u53603\u4EFD */
\`\`\`

#### 3. \u5723\u676F\u5E03\u5C40

\`\`\`css
.container {
  display: flex;
  flex-direction: column; /* \u5782\u76F4\u6392\u5217 */
}
header,
footer {
  height: 60px;
}
main {
  flex: 1; /* \u4E2D\u95F4\u533A\u57DF\u81EA\u9002\u5E94 */
  display: flex;
}
.sidebar {
  width: 200px;
}
.content {
  flex: 1;
}
\`\`\`

#### 4. \u6D41\u5F0F\u6362\u884C\u5E03\u5C40

\`\`\`css
.container {
  display: flex;
  flex-wrap: wrap; /* \u5141\u8BB8\u6362\u884C */
  gap: 10px; /* \u9879\u76EE\u95F4\u8DDD\uFF0C\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 */
}
.item {
  flex: 1 0 200px; /* \u6700\u5C0F\u5BBD\u5EA6200px */
}
\`\`\`

#### 5. \u5BFC\u822A\u680F

\`\`\`css
.nav {
  display: flex;
  justify-content: space-between;
}
.logo {
  margin-right: auto;
} /* \u81EA\u52A8\u63A8\u6324\u53F3\u4FA7\u5143\u7D20 */
.menu-item {
  padding: 0 15px;
}
\`\`\`

---

### \u26A0\uFE0F \u6CE8\u610F\u4E8B\u9879

1. **flex vs flex-grow**\uFF1A

   - \`flex-grow: 1\` \u2192 \u4EC5\u63A7\u5236\u653E\u5927
   - \`flex: 1\` \u2192 \u540C\u65F6\u8BBE\u7F6E \`flex-grow:1\` + \`flex-shrink:1\` + \`flex-basis:0%\`

2. **\u7F29\u5199\u89C4\u5219**\uFF1A

   - \`flex: 1\` = \`1 1 0%\`
   - \`flex: auto\` = \`1 1 auto\`
   - \`flex: none\` = \`0 0 auto\`

3. **\u5E38\u89C1\u95EE\u9898\u89E3\u51B3**\uFF1A

   - \u5185\u5BB9\u6EA2\u51FA\uFF1A\u6DFB\u52A0 \`min-width: 0\` \u5230\u5F39\u6027\u9879\u76EE
   - \u7B49\u9AD8\u5206\u680F\uFF1A\u5BB9\u5668\u8BBE\u7F6E \`align-items: stretch\`\uFF08\u9ED8\u8BA4\u503C\uFF09
   - \u5E95\u90E8\u5BF9\u9F50\uFF1A\u5BB9\u5668 \`align-items: flex-end\`

4. **\u6D4F\u89C8\u5668\u517C\u5BB9**\uFF1A
   - \u73B0\u4EE3\u6D4F\u89C8\u5668\u5168\u9762\u652F\u6301
   - IE10/11 \u9700\u8981 \`-ms-\` \u524D\u7F00
   \`\`\`css
   .container {
     display: -ms-flexbox;
     display: flex;
   }
   \`\`\`

> \u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C95%\u7684\u5E03\u5C40\u9700\u6C42\u53EF\u901A\u8FC7\u7EC4\u5408\u4F7F\u7528 \`justify-content\` + \`align-items\` + \`flex\` \u4E09\u4E2A\u5C5E\u6027\u5B9E\u73B0

### \u54CD\u5E94\u5F0F\u793A\u4F8B

\`\`\`css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px; /* \u6700\u5C0F\u5BBD\u5EA6300px */

  /* \u5927\u5C4F\u5E55\u6BCF\u884C3\u4E2A */
  @media (min-width: 1200px) {
    flex-basis: calc(33.33% - 20px);
  }

  /* \u5C0F\u5C4F\u5E55\u5355\u5217 */
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
}
\`\`\`
`}}]);
