"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[1195],{56567:function(t,n,e){e.r(n),n.default=`![image](https://chenqiuling.github.io/frontend-notes-viewer/images/img_dist_offset.webp)
![image](https://chenqiuling.github.io/frontend-notes-viewer/images/img_dist_client.webp)
![image](https://chenqiuling.github.io/frontend-notes-viewer/images/img_dist_scroll.webp)

> Element.scrollLeft \u53EF\u8BFB\u53D6\u6216\u8BBE\u7F6E\u5143\u7D20\u6EDA\u52A8\u6761\u5230\u5143\u7D20\u5DE6\u8FB9\u7684\u8DDD\u79BB\u3002
> Element.offsetLeft \u4E3A\u53EA\u8BFB\u5C5E\u6027\uFF0C\u8FD4\u56DE\u5F53\u524D\u5143\u7D20\u5DE6\u4E0A\u89D2\u76F8\u5BF9\u4E8E Element.offsetParent \u8282\u70B9\u7684\u5DE6\u8FB9\u754C\u504F\u79FB\u7684\u50CF\u7D20\u503C\u3002
> Element.offsetWidth \u4E3A\u53EA\u8BFB\u5C5E\u6027\uFF0C\u5305\u62EC\u8FB9\u6846\u548C\u6EDA\u52A8\u6761\u5BBD\u5EA6\uFF08\u5982\u679C\u5B58\u5728\uFF09\u3002
> Element.clientWidth \u4E3A\u53EA\u8BFB\u5C5E\u6027\uFF0C\u53EA\u5305\u542B\u5143\u7D20\u5185\u8FB9\u8DDD\u548C\u5143\u7D20\u5185\u5BB9\u3002
> Element.scrollWidth \u4E3A\u53EA\u8BFB\u5C5E\u6027\uFF0C\u53EA\u5305\u542B\u5143\u7D20\u5185\u8FB9\u8DDD\u548C\u5143\u7D20\u5185\u5BB9\uFF0C\u8C37\u6B4C\u83B7\u53D6\u7684 Element.scrollWidth \u548C IE\uFF0C\u706B\u72D0\u4E0B\u83B7\u53D6\u7684 Element.scrollWidth \u5E76\u4E0D\u76F8\u540C\u3002

\u4E0A\u8FF0\u53EA\u8BFB\u5C5E\u6027\u4F1A\u88AB\u56DB\u820D\u4E94\u5165\u4E3A\u4E00\u4E2A\u6574\u6570\uFF0C\u5982\u679C\u4F60\u9700\u8981\u4E00\u4E2A\u5C0F\u6570\u503C\uFF0C\u53EF\u4F7F\u7528 Element.getBoundingClientRect()\u3002

Element.getBoundingClientRect() \u65B9\u6CD5\u8FD4\u56DE\u5143\u7D20\u7684\u5927\u5C0F\u53CA\u5176\u76F8\u5BF9\u4E8E\u89C6\u53E3\u7684\u4F4D\u7F6E\u3002
\u8FD4\u56DE\u683C\u5F0F\u5982\u4E0B\uFF1A

\`\`\`js
document.body.getBoundingClientRect()
// return DOMRect
{
  "x": 0,
  "y": 0,
  "width": 140,
  "height": 15180.396484375,
  "top": 0,
  "right": 140,
  "bottom": 15180.396484375,
  "left": 0
}
\`\`\`

\`\`\`js
calc(); // \u8FD4\u56DE\u503C\u5747\u4E0D\u5E26\u5355\u4F4D

function calc() {
  console.log(
    '\u5C4F\u5E55\u5206\u8FA8\u7387\u5BBD\uFF1A',
    window.screen.width + '\\n',
    '\u5C4F\u5E55\u5206\u8FA8\u7387\u9AD8\uFF1A',
    window.screen.height + '\\n',
    '\u5C4F\u5E55\u53EF\u7528\u533A\u57DF\u5BBD\uFF1A',
    window.screen.availWidth + '\\n',
    '\u5C4F\u5E55\u53EF\u7528\u533A\u57DF\u9AD8\uFF1A',
    window.screen.availHeight + '\\n',
    '\u7F51\u9875\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u7684\u4F4D\u7F6E\uFF1A',
    \`x\u8F74: \${window.screenLeft}, y\u8F74: \${window.screenTop}\` + '\\n',

    '\u7F51\u9875\u53EF\u89C1\u533A\u57DF\u5BBD\uFF1A',
    document.documentElement.clientWidth + '\\n',
    '\u7F51\u9875\u53EF\u89C1\u533A\u57DF\u9AD8\uFF1A',
    document.documentElement.clientHeight + '\\n',
    '\u7F51\u9875\u5BBD(\u5305\u62EC\u8FB9\u6846)\uFF1A',
    document.documentElement.offsetWidth + '\\n',
    '\u7F51\u9875\u9AD8(\u5305\u62EC\u8FB9\u6846)\uFF1A',
    document.documentElement.offsetHeight + '\\n',
    '\u7F51\u9875\u5BBD(\u5305\u62EC\u6EDA\u52A8\u6761)\uFF1A',
    document.documentElement.scrollWidth + '\\n',
    '\u7F51\u9875\u9AD8\uFF1A',
    document.documentElement.scrollHeight + '\\n',
    '\u7F51\u9875\u6C34\u5E73\u6EDA\u52A8\u8DDD\u79BB\uFF1A',
    document.documentElement.scrollLeft + '\\n',
    '\u7F51\u9875\u5782\u76F4\u6EDA\u52A8\u8DDD\u79BB\uFF1A',
    document.documentElement.scrollTop + '\\n',

    '\u7F51\u9875\u5185\u5BB9\u533A\u57DF\u5BBD\uFF1A',
    document.body.clientWidth + '\\n',
    '\u7F51\u9875\u5185\u5BB9\u533A\u57DF\u9AD8\uFF1A',
    document.body.clientHeight + '\\n',
    '\u7F51\u9875\u5185\u5BB9\u533A\u57DF\u5BBD(\u5305\u62EC\u8FB9\u6846)\uFF1A',
    document.body.offsetWidth + '\\n',
    '\u7F51\u9875\u5185\u5BB9\u533A\u57DF\u9AD8(\u5305\u62EC\u8FB9\u6846)\uFF1A',
    document.body.offsetHeight + '\\n',
    '\u7F51\u9875\u5185\u5BB9\u533A\u57DF\u5BBD(\u5305\u62EC\u6EDA\u52A8\u6761)\uFF1A',
    document.body.scrollWidth + '\\n',
    '\u7F51\u9875\u5185\u5BB9\u533A\u57DF\u9AD8\uFF1A',
    document.body.scrollHeight + '\\n',
  );
}
// event.clientX\xA0\u76F8\u5BF9\u6587\u6863\u7684\u6C34\u5E73\u5EA7\u6807
// event.clientY\xA0\u76F8\u5BF9\u6587\u6863\u7684\u5782\u76F4\u5EA7\u6807
// event.offsetX\xA0\u76F8\u5BF9\u5BB9\u5668\u7684\u6C34\u5E73\u5750\u6807
// event.offsetY\xA0\u76F8\u5BF9\u5BB9\u5668\u7684\u5782\u76F4\u5750\u6807
\`\`\`

\`\`\`js\xA0\xA0
//\xA0\u90E8\u5206jQuery\u51FD\u6570
$(window).height(); //\u6D4F\u89C8\u5668\u65F6\u4E0B\u7A97\u53E3\u53EF\u89C6\u533A\u57DF\u9AD8\u5EA6
$(document).height(); //\u6D4F\u89C8\u5668\u65F6\u4E0B\u7A97\u53E3\u6587\u6863\u7684\u9AD8\u5EA6
$(document.body).height(); //\u6D4F\u89C8\u5668\u65F6\u4E0B\u7A97\u53E3\u6587\u6863body\u7684\u9AD8\u5EA6
$(document.body).outerHeight(true); //\u6D4F\u89C8\u5668\u65F6\u4E0B\u7A97\u53E3\u6587\u6863body\u7684\u603B\u9AD8\u5EA6\xA0\u5305\u62ECborder padding margin
$(window).width(); //\u6D4F\u89C8\u5668\u65F6\u4E0B\u7A97\u53E3\u53EF\u89C6\u533A\u57DF\u5BBD\u5EA6
$(document).width(); //\u6D4F\u89C8\u5668\u65F6\u4E0B\u7A97\u53E3\u6587\u6863\u5BF9\u4E8E\u8C61\u5BBD\u5EA6
$(document.body).width(); //\u6D4F\u89C8\u5668\u65F6\u4E0B\u7A97\u53E3\u6587\u6863body\u7684\u5BBD\u5EA6
$(document.body).outerWidth(true); //\u6D4F\u89C8\u5668\u65F6\u4E0B\u7A97\u53E3\u6587\u6863body\u7684\u603B\u5BBD\u5EA6\xA0\u5305\u62ECborder padding
\`\`\`
`}}]);
