"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[971],{90712:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u9002\u914D\u5168\u9762\u5C4F

\`\`\`html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
/>
\`\`\`

viewport-fit \u503C auto | contain | cover\uFF0C\u9ED8\u8BA4 auto\uFF0C\u6548\u679C\u540C contain

## \u9002\u914D\u5B89\u5168\u533A\u57DF

\`\`\`css
body {
  padding-bottom: constant(safe-area-inset-bottom); /* \u517C\u5BB9 iOS < 11.2 */
  padding-bottom: env(safe-area-inset-bottom); /* \u517C\u5BB9 iOS >= 11.2 */
}
\`\`\`

constant()\u3001env() \u51FD\u6570\u5185\u90E8\u53EF\u4EE5\u662F\u56DB\u4E2A\u5E38\u91CF\uFF1A

- safe-area-inset-left\uFF1A\u5B89\u5168\u533A\u57DF\u8DDD\u79BB\u5DE6\u8FB9\u8FB9\u754C\u8DDD\u79BB
- safe-area-inset-right\uFF1A\u5B89\u5168\u533A\u57DF\u8DDD\u79BB\u53F3\u8FB9\u8FB9\u754C\u8DDD\u79BB
- safe-area-inset-top\uFF1A\u5B89\u5168\u533A\u57DF\u8DDD\u79BB\u9876\u90E8\u8FB9\u754C\u8DDD\u79BB
- safe-area-inset-bottom\uFF1A\u5B89\u5168\u533A\u57DF\u8DDD\u79BB\u5E95\u90E8\u8FB9\u754C\u8DDD\u79BB

\u6CE8\u610F\uFF1A\u5FC5\u987B\u6307\u5B9A viewport-fit\uFF0Cconstant()\u3001env()\u624D\u6709\u6548\u3002

## 1px \u8FB9\u6846\u95EE\u9898

\`\`\`css
.border-thin {
  position: relative;
}

.border-thin::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #ddd;
  transform: scale(0.5);
  transform-origin: 0 0;
  pointer-events: none;
}
\`\`\`

## rem

px\u3001em\u3001rem\u3001vw\u3001vh

- px \u662F\u76F8\u5BF9\u56FA\u5B9A\u5355\u4F4D\uFF0C\u5927\u5C0F\u4E0D\u53D7\u89C6\u53E3\u5BBD\u5EA6\u5F71\u54CD\u3002
- em \u662F\u76F8\u5BF9\u4E8E\u7236\u7EA7\u5143\u7D20\u7684 font-size \u8BA1\u7B97\u503C\u7684\u5927\u5C0F\uFF0C\u5982\u679C\u5143\u7D20\u81EA\u8EAB\u8BBE\u7F6E\u4E86\u5B57\u4F53\u5927\u5C0F\uFF0C\u5219 em \u662F\u76F8\u5BF9\u4E8E\u5143\u7D20\u81EA\u8EAB font-size \u8BA1\u7B97\u503C\u7684\u5927\u5C0F\u3002
- rem \u662F\u6307\u76F8\u5BF9\u4E8E\u6839\u5143\u7D20 html \u7684 font-size \u8BA1\u7B97\u503C\u7684\u5927\u5C0F\u3002\u9ED8\u8BA4 html \u7684 font-size \u4E3A 16px\uFF0C\u5982\u679C\u5E0C\u671B\u8BBE\u7F6E 12px \u7684\u5B57\u4F53\uFF0C\u5219 12px/16px = 0.75rem\u3002
- vw \u5C4F\u5E55\u89C6\u53E3\u5BBD\u5EA6\u3002
- vh \u5C4F\u5E55\u89C6\u53E3\u9AD8\u5EA6\u3002

lib-flexible + postcss-pxtorem

\u53EF\u4EE5\u4F7F\u7528 webpack \u7684 postcss-loader \u7684\u4E00\u4E2A\u63D2\u4EF6 postcss-px-to-viewport \u5B9E\u73B0\u5BF9 px \u5230 vw \u7684\u81EA\u52A8\u8F6C\u6362\u3002

\`\`\`js
import postcssPx2ViewPort from 'postcss-px-to-viewport';

export default defineConfig({
  //...
  extraPostCSSPlugins: [
    postcssPx2ViewPort({
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
    }),
  ],
});
\`\`\`

## flex \u5E03\u5C40

## \u5A92\u4F53\u67E5\u8BE2

\`\`\`css
body {
  font-size: 14px;
}
@media screen and (min-width: 1200px) {
  font-size: 16px;
}
\`\`\`

## \u56FE\u7247\u54CD\u5E94\u5F0F

\`\`\`html
<picture>
  <source media="(min-width: 650px)" srcset="large.jpg" />
  <source media="(min-width: 465px)" srcset="medium.jpg" />
  <img src="small.jpg" alt="" />
</picture>
\`\`\`
`}}]);
