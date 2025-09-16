"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[7376],{98474:function(t,n,e){e.r(n),n.default=`\u8BBE\u5907\u7C7B\u578B(media type):

- all \u6240\u6709\u8BBE\u5907
- screen \u7535\u8111\u663E\u793A\u5668
- print \u6253\u5370\u7528\u7EB8\u6216\u6253\u5370\u9884\u89C8\u89C6\u56FE
- handheld \u4FBF\u643A\u8BBE\u5907
- tv \u7535\u89C6\u673A\u7C7B\u578B\u7684\u8BBE\u5907
- speech \u8BED\u610F\u548C\u97F3\u9891\u76D2\u6210\u5668
- braille \u76F2\u4EBA\u7528\u70B9\u5B57\u6CD5\u89E6\u89C9\u56DE\u9988\u8BBE\u5907
- embossed \u76F2\u6587\u6253\u5370\u673A
- projection \u5404\u79CD\u6295\u5F71\u8BBE\u5907
- tty \u4F7F\u7528\u56FA\u5B9A\u5BC6\u5EA6\u5B57\u6BCD\u6805\u683C\u7684\u5A92\u4ECB\uFF0C\u6BD4\u5982\u7535\u4F20\u6253\u5B57\u673A\u548C\u7EC8\u7AEF

\u8BBE\u5907\u7279\u6027(media feature):

- width \u6D4F\u89C8\u5668\u5BBD\u5EA6
- height \u6D4F\u89C8\u5668\u9AD8\u5EA6
- device-width \u8BBE\u5907\u5C4F\u5E55\u5206\u8FA8\u7387\u7684\u5BBD\u5EA6\u503C
- device-height \u8BBE\u5907\u5C4F\u5E55\u5206\u8FA8\u7387\u7684\u9AD8\u5EA6\u503C
- orientation \u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u65B9\u5411\u7EB5\u5411\u8FD8\u662F\u6A2A\u5411\uFF0C\u5F53\u7A97\u53E3\u7684\u9AD8\u5EA6\u503C\u5927\u4E8E\u7B49\u4E8E\u5BBD\u5EA6\u65F6\u8BE5\u7279\u6027\u503C\u4E3A portrait\uFF0C\u5426\u5219\u4E3A landscape
- aspect-ratio \u6BD4\u4F8B\u503C\uFF0C\u6D4F\u89C8\u5668\u7684\u7EB5\u6A2A\u6BD4
- device-aspect-ratio \u6BD4\u4F8B\u503C\uFF0C\u5C4F\u5E55\u7684\u7EB5\u6A2A\u6BD4

\u4E0D\u540C\u8BBE\u5907\u5BBD\u5EA6\u663E\u793A\u4E0D\u540C\u56FE\u7247\uFF1A

\`\`\`html
<img
  src="image.jpg"
  alt="\u54CD\u5E94\u5F0F\u5E03\u5C40\u8BBE\u8BA1"
  data-src-600px="image-600px.jpg"
  data-src-800px="image-800px.jpg"
/>
<style>
  @media (min-device-width: 600px) {
    img[data-src-600px] {
      content: attr(data-src-600px, \xA0url);
    }
  }
  @media (min-device-width: 800px) {
    img[data-src-800px] {
      content: attr(data-src-800px, \xA0url);
    }
  }
</style>
\`\`\`

\`\`\`css
/**\xA0iPad\xA0**/
@media only screen and (min-width: 768px) and (max-width: 1024px) {
}
/**\xA0iPhone\xA0**/
@media only screen and (min-width: 320px) and (max-width: 767px) {
}
\`\`\`
`}}]);
