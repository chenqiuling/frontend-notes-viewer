"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[1686],{51912:function(t,n,e){e.r(n),n.default=`\u7ED8\u5236\u4E09\u89D2\u5F62\uFF1A\u539F\u7406\u662F\u76F8\u90BB\u8FB9\u6846\u8FDE\u63A5\u5904\u662F\u5747\u5206\u7684\u3002

[\u67E5\u770B\u66F4\u591A 1](https://www.webhek.com/post/40-css-shapes.html)

[\u67E5\u770B\u66F4\u591A 2](https://www.shejidaren.com/pure-css-icons.html)

[\u67E5\u770B\u66F4\u591A 3](https://blog.csdn.net/liu_jiachen/article/details/78634457)

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>css\u7ED8\u5236\u56FE\u5F62</title>
    <style>
      body > div {
        display: inline-block;
        margin: 10px;
        min-width: 100px;
        vertical-align: text-top;
        white-space: nowrap;
      }
      .sector,
      .triangle {
        /* \u53E3\u8BC0\uFF1A\u4E09\u89D2\u5F62\uFF1A\u76D2\u5B50\u5BBD\u9AD8\u5747\u4E3A0\uFF0C\u4E09\u6761\u8FB9\u6846\u5747\u900F\u660E */
        width: 0;
        height: 0;
        border-width: 20px;
        border-style: solid;
        border-color: transparent transparent red transparent;
      }
      .sector {
        border-radius: 50%;
      }
      .circle {
        width: 40px;
        height: 40px;
        background: red;
        border-radius: 50%;
      }
      .oval {
        width: 60px;
        height: 40px;
        background: red;
        border-radius: 60px / 40px;
      }
      .container {
        width: 5vw;
      }
      .square {
        padding-bottom: 100%;
        background-color: red;
      }
    </style>
  </head>

  <body>
    <div>
      \u4E09\u89D2\u5F62\uFF1A
      <div class="triangle"></div>
    </div>
    <div>
      \u6247\u5F62\uFF1A
      <div class="sector"></div>
    </div>
    <div>
      \u5706\u5F62\uFF1A
      <div class="circle"></div>
    </div>
    <div>
      \u692D\u5706\uFF1A
      <div class="oval"></div>
    </div>
    <div>
      \u968F\u5BB9\u5668\u5BBD\u5EA6\u81EA\u9002\u5E94\u7684\u6B63\u65B9\u5F62\uFF1A
      <div class="container">
        <div class="square"></div>
      </div>
    </div>
  </body>
</html>
\`\`\`
`}}]);
