"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[6432],{31297:function(e,n,t){t.r(n),n.default=`\u7B14\u8BB0\u53C2\u8003\uFF1Ahttp://caibaojian.com/canvas
\u83DC\u9E1F\u6559\u7A0B\uFF1Ahttp://www.runoob.com

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Canvas\u5B66\u4E60\u7B14\u8BB0</title>
    <style>
      canvas {
        border: 1px solid #d3d3d3;
        margin-right: 10px;
        margin-bottom: 20px;
      }
    </style>
  </head>
  <body>
    <canvas id="my-canvas" width="750" height="1200">
      \u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301canvas!
    </canvas>
    <div style="display: inline-block; vertical-align: top;">
      <h5>\u6839\u636E\u8D77/\u7EC8\u89D2\u548C\u7ED8\u5236\u5706\u5F27</h5>
      <img
        src="http://www.runoob.com/wp-content/uploads/2013/11/img_arc.gif"
        alt=""
      />
      <h5>\u6839\u636E\u5207\u70B9\u7ED8\u5236\u5706\u5F27</h5>
      <img
        src="http://www.runoob.com/wp-content/uploads/2013/11/img_canvas_arcto.png"
        alt=""
      />
      <h5>\u76F8\u5173\u5DE5\u5177\uFF1A</h5>
      <p>
        <a
          href="http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html"
        >
          \u4E8C\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF\u4EE3\u7801\u751F\u6210\u5DE5\u5177
        </a>
      </p>
      <p>
        <a
          href="http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html"
        >
          \u4E09\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF\u4EE3\u7801\u751F\u6210\u5DE5\u5177
        </a>
      </p>
      <h5>context.globalCompositeOperation\u53D6\u503C\u5BF9\u5E94\u6548\u679C\uFF1A</h5>
      <div id="globalCompositeOperation"></div>
    </div>
    <script>
      draw();
      function draw() {
        // 1. \u83B7\u53D6\u753B\u5E03\uFF0C\u753B\u5E03\u9ED8\u8BA4\u662F\u900F\u660E\u7684
        var canvas = document.getElementById('my-canvas');

        // 2. \u83B7\u53D6\u753B\u7B14
        var context = canvas.getContext('2d');

        // 3. \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u6B21\u8C03\u7528\u7ED8\u5236\u65B9\u6CD5\uFF0C\u90FD\u4F1A\u5728\u539F\u57FA\u7840\u4E0A\u91CD\u7ED8\u753B\u5E03\u4E0A\u7684\u6240\u6709\u72B6\u6001\uFF0C\u5373\u8986\u76D6\u7ED8\u5236\uFF0C
        // \u82E5\u8981\u907F\u514D\u91CD\u590D\u7ED8\u5236\u4E4B\u524D\u7684\u72B6\u6001\uFF0C\u53EF\u4EE5\u5728\u65B0\u7ED8\u5236\u524D\u8C03\u7528beginPath()
        context.beginPath();

        // 4. \u79FB\u52A8\u753B\u7B14\u81F3\u7ED8\u5236\u8D77\u70B9\uFF0C\u4F8B\u5982x = 50px, y = 50px
        // \u7B1B\u5361\u5C14\u5750\u6807\u7CFB\uFF0C\u5DE6\u4E0A\u89D2\u4E3A\u539F\u70B9\uFF0C\u53F3x+\uFF0C\u4E0By+
        context.moveTo(50, 50);

        // 5. \u786E\u5B9A\u7ED8\u5236\u7EC8\u70B9
        context.lineTo(250, 50);
        context.lineTo(250, 150);
        context.lineTo(50, 150);

        // \u7ED8\u5236\u6700\u540E\u4E00\u7B14\u4F7F\u56FE\u50CF\u95ED\u5408\uFF0C\u6216\u8C03\u7528\u95ED\u5408\u65B9\u6CD5closePath()
        // context.lineTo(150,50);
        // 6. \u8C03\u7528closePath()\u95ED\u5408\u56FE\u5F62\uFF0C\u975E\u95ED\u5408\u56FE\u5F62\u65F6\u53EF\u9009\u62E9\u4E0D\u8C03\u7528
        context.closePath();

        // 7. \u9009\u62E9\u753B\u7B14\uFF08\u63CF\u8FB9\u7C97\u7EC6\uFF0C\u989C\u8272\u7B49\uFF09\u6216\u6CB9\u6F06\u6876\u989C\u8272\uFF08\u586B\u5145\uFF09

        // \u63CF\u8FB9\u7C97\u7EC6\uFF0C\u9ED8\u8BA4\u4E3A1px
        context.lineWidth = 5;
        // \u63CF\u8FB9\u7AEF\u70B9\uFF0Cbutt\uFF08\u9ED8\u8BA4\u503C\uFF0C\u5E73\u76F4\u7AEF\u70B9\uFF09\uFF0Cround\uFF08\u63CF\u8FB9\u5BBD\u4E3A\u76F4\u5F84\u7684\u5706\u6ED1\u7AEF\u70B9\uFF09\uFF0Csquare\uFF08\u4EE5\u63CF\u8FB9\u5BBD\u4E3A\u957F\u3001\u4EE5\u4E00\u534A\u63CF\u8FB9\u5BBD\u4E3A\u5BBD\u7684\u77E9\u5F62\u7AEF\u70B9\uFF09
        // \u6CE8\u610F\uFF1Around \u548C square \u90FD\u4F1A\u4F7F\u5F97\u63CF\u8FB9\u88AB\u589E\u957F
        context.lineCap = 'round';
        // \u8BBE\u7F6E\u4E24\u6761\u63CF\u8FB9\u7684\u62D0\u89D2\uFF08\u8FDE\u63A5\u89D2\uFF09\uFF0Cmiter\uFF08\u9ED8\u8BA4\u503C\uFF0C\u5C16\u89D2\uFF09\uFF0Cbevel\uFF08\u659C\u89D2\uFF09\uFF0Cround\uFF08\u5706\u89D2\uFF09
        context.lineJoin = 'round';
        // \u6CE8\u610F\uFF1A\u53D6\u503Cmiter\u65F6\uFF0C\u53EF\u8BBE\u7F6EmiterLimit\u7684\u503C\uFF0C\u6B63\u6570\uFF0C\u89C4\u5B9A\u6700\u5927\u659C\u63A5\u957F\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A10\u3002\u5982\u679C\u659C\u63A5\u957F\u5EA6\u8D85\u8FC7 miterLimit \u7684\u503C\uFF0C\u62D0\u89D2\u6548\u679C\u4E3A bevel
        // context.miterLimit = 5;

        // \u63CF\u8FB9\u53EF\u9009\u62E9\u989C\u8272\u3001\u6E10\u53D8\uFF08\u7EBF\u6027\u6216\u5F84\u5411\uFF09\u3001\u56FE\u6848
        // \u63CF\u8FB9\u989C\u8272\uFF0C\u9ED8\u8BA4\u4E3A\u9ED1\u8272
        context.strokeStyle = '#000';

        // \u586B\u5145\u53EF\u9009\u62E9\u989C\u8272\u3001\u6E10\u53D8\uFF08\u7EBF\u6027\u6216\u5F84\u5411\uFF09\u3001\u56FE\u6848\uFF0C\u89C2\u5BDF\u53D1\u73B0: \u586B\u5145\u4F1A\u8986\u76D61/2*lineWidth\u7684\u63CF\u8FB9
        // \u586B\u5145\u989C\u8272\uFF0C\u9ED8\u8BA4\u4E3A\u9ED1\u8272
        // context.fillStyle = '#aaa';

        // \u5B9A\u4E49\u6E10\u53D8
        // \u6CE8\u610F\uFF1A\u6E10\u53D8\u7EBF\u7684\u8D77\u70B9\u548C\u7EC8\u70B9\u3001\u989C\u8272\u7684\u65AD\u70B9\u4E0D\u4E00\u5B9A\u8981\u5728\u56FE\u50CF\u5185\u3002\u4F46\u662F\u5982\u679C\u56FE\u50CF\u7684\u8303\u56F4\u5927\u4E8E\u6E10\u53D8\u7EBF\uFF0C\u90A3\u4E48\u5728\u6E10\u53D8\u7EBF\u8303\u56F4\u4E4B\u5916\uFF0C\u5C31\u4F1A\u81EA\u52A8\u586B\u5145\u79BB\u7AEF\u70B9\u6700\u8FD1\u7684\u65AD\u70B9\u7684\u989C\u8272
        // \u6DFB\u52A0\u7EBF\u6027\u6E10\u53D8\uFF0CcreateLinearGradient(startX, startY, endX, endY)
        var grad = context.createLinearGradient(0, 0, 500, 0);

        // \u6DFB\u52A0\u5F84\u5411\u6E10\u53D8\uFF0CcreateRadialGradient(startX, startY, r1, endX, endY, r2)
        // var grad = context.createRadialGradient(200, 200, 100, 300, 300, 300);

        // \u6DFB\u52A0\u6E10\u53D8\u7EBF\u7AEF\u70B9\u7684\u989C\u8272\uFF0CaddColorStop(stop, color)\uFF0Cstop\u53D6\u503C\u8303\u56F40~1\u7684\u6D6E\u70B9\u6570\uFF0C\u8868\u793A\u65AD\u70B9\u5230\u8D77\u70B9\u7684\u8DDD\u79BB\u5360\u6E10\u53D8\u957F\u5EA6\u7684\u6BD4\u4F8B
        grad.addColorStop(0, '#f00');
        grad.addColorStop(0.5, '#ff0');
        grad.addColorStop(1, '#fa0');
        context.fillStyle = grad;

        // \u5B9A\u4E49\u56FE\u6848\uFF0CcreatePattern(img, repeat-style)\uFF0Crepeat-style\u53D6\u503Crepeat\u3001repeat-x\u3001repeat-y\u3001no-repeat
        var img = new Image();
        img.src = 'https://www.baidu.com/favicon.ico';
        // \u6CE8\u610F\uFF1A\u9700\u5F85\u56FE\u7247\u52A0\u8F7D\u5B8C\u6210\u540E\u518D\u586B\u5145\uFF0C\u56FE\u7247\u4ECE\u5750\u6807\u539F\u70B9\uFF08\u5DE6\u4E0A\u89D2\uFF09\u6309\u539F\u56FE\u5927\u5C0F\u5F00\u59CB\u663E\u793A\uFF0C\u5982\u679C\u56FE\u7247\u8FC7\u5C0F\u4E14\u4E0D\u91CD\u590D\u586B\u5145\uFF0C\u6B64\u65F6\u82E5\u586B\u5145\u5BB9\u5668\u4E0D\u5728\u56FE\u7247\u663E\u793A\u8303\u56F4\u5185\u5219\u770B\u4E0D\u5230\u586B\u5145\u6548\u679C
        img.onload = function() {
          context.save();
          var pattern = context.createPattern(img, 'repeat');
          context.fillStyle = pattern;
          context.fillRect(300, 50, 200, 100);
          context.restore();
        };

        // 8. \u8C03\u7528\u7ED8\u5236\u65B9\u6CD5\uFF08\u63CF\u8FB9 stroke \u6216\u586B\u5145 fill\uFF09
        context.stroke();
        // \u53EA\u6709\u7EBF\u6761\u4EA4\u53C9\u5F62\u6210\u9510\u89D2\uFF080\xB0< \u03B1< 90\xB0\uFF09\uFF0C\u76F4\u89D2\uFF08\u03B1= 90\xB0\uFF09\uFF0C\u949D\u89D2\uFF0890\xB0< \u03B1< 180\xB0\uFF09\u65F6\u586B\u5145\u6709\u6548
        context.fill();

        context.beginPath();
        context.arc(100, 300, 50, 0, 1.5 * Math.PI);
        context.stroke();

        /** Canvas API\u5C01\u88C5\u7684\u5E38\u7528\u65B9\u6CD5\u8FD8\u6709\uFF1A
         * context.rect(x, y, width, height); \u5B9A\u4E49\u77E9\u5F62\uFF0C\u4F46\u672A\u7ED8\u5236
         * context.fillRect(x, y, width, height); \u7ED8\u5236\u586B\u5145\u77E9\u5F62
         * context.strokeRect(x, y, width, height); \u7ED8\u5236\u63CF\u8FB9\u77E9\u5F62
         * \u9AD8\u7EA7\u8DEF\u5F84\uFF1A
         * context.arc(x, y, radius, startAngle, endAngle, anticlockwise); \u5B9A\u4E49\u5706\u5F27\uFF0C\u4F46\u672A\u7ED8\u5236
         * @params {
         *   (x, y): \u5706\u5FC3\u70B9
         *   radius: \u534A\u5F84
         *   startAngle, endAngle:
         *      \u5F27\u5EA6\u503C\uFF0C\u6B63\u503C\uFF0C\u8D77\u59CB\u89D2\u4E3A\u65F6\u949F\u4E09\u70B9\u65B9\u5411:
         *      \u4E2D\u5FC3\uFF1Aarc(100, 75, 50, 0*Math.PI, 1.5*Math.PI)
         *      \u8D77\u59CB\u89D2\uFF1Aarc(100, 75, 50, 0, 1.5*Math.PI)
         *      \u7ED3\u675F\u89D2\uFF1Aarc(100, 75, 50, 0*Math.PI, 1.5*Math.PI)
         *                    1.5*Math.PI
         *                         |
         *                         |
         *      1*Math.PI -----0*Math.PI-----0
         *                         |
         *                         |
         *                    0.5*Math.PI
         *   anticlockwise\uFF1A\u7ED8\u56FE\u65B9\u5411\uFF0Cfalse\u4E3A\u987A\u65F6\u9488\uFF0Ctrue\u4E3A\u9006\u65F6\u9488\uFF0C\u9ED8\u8BA4\u4E3Afalse
         * }
         *
         * context.arcTo(x1, y1, x2, y2, radius); \u6839\u636E\u5207\u70B9\u5B9A\u4E49\u5706\u5F27\uFF0C\u4F46\u672A\u7ED8\u5236
         * @params {
         *   (x1, y1)\uFF1A\u4E24\u6761\u5207\u7EBF\u7684\u4EA4\u70B9
         *   (x2, y2)\uFF1A\u5207\u7EBF2\u4E0A\u4EFB\u610F\u4E00\u70B9
         *   radius: \u534A\u5F84
         *   \u5207\u70B91\uFF1A\u5706\u5F27\u7684\u8D77\u70B9\uFF0CmoveTo()\u4E2D\u5B9A\u4E49\u7684\u8D77\u70B9\u4E0E\u70B9(x1, y1)\u786E\u5B9A\u5207\u7EBF1
         *   \u5207\u70B92\uFF1A\u5706\u5F27\u7684\u7EC8\u70B9\uFF0C\u70B9(x1, y1)\u4E0E\u70B9(x2, y2)\u786E\u5B9A\u5207\u7EBF2
         *   \u6CE8\u610F\uFF1A\u5706\u5F27\u7684\u8D77\u70B9\u548C\u7EC8\u70B9\u662F\u6307\u5706\u5F27\u6240\u5728\u5706\u4E0E\u4E24\u6761\u5207\u7EBF\u76F8\u4EA4\u5F62\u6210\u7684\u5207\u70B9\uFF0C\u800C\u5B9E\u9645\u7ED8\u5236\u51FA\u6765\u7684\u5706\u5F27\u7684\u8D77\u7EC8\u70B9\u4F1A\u5206\u522B\u4E0EmoveTo()\u3001(x2, y2)\u8FDE\u63A5
         * }
         * \u901A\u5E38\u4E0EmoveTo()\u3001lineTo()\u7ED3\u5408\u4F7F\u7528
         *
         * \u8D77\u59CB\u70B9\uFF0C\u63A7\u5236\u70B9\uFF0C\u7EC8\u6B62\u70B9\u53EF\u786E\u5B9A\u4E00\u6761\u66F2\u7EBF\uFF0Cn\u9636\u8D1D\u585E\u5C14\u66F2\u7EBF\u5C31\u6709n-1\u4E2A\u63A7\u5236\u70B9
         * context.quadraticCurveTo(cpx, cpy, x, y); \u4E8C\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF
         * @params {
         *   (cpx, cpy)\uFF1A\u63A7\u5236\u70B9
         *   (x, y)\uFF1A\u7EC8\u6B62\u70B9
         * }
         * \u901A\u5E38\u4E0EmoveTo()\u3001lineTo()\u7ED3\u5408\u4F7F\u7528
         *
         * context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y); \u4E09\u6B21\u8D1D\u585E\u5C14\u66F2\u7EBF
         * @params {
         *   (cp1x, cp1y)\uFF1A\u63A7\u5236\u70B91
         *   (cp2x, cp2y)\uFF1A\u63A7\u5236\u70B92
         *   (x, y)\uFF1A\u7EC8\u6B62\u70B9
         * }
         * \u901A\u5E38\u4E0EmoveTo()\u3001lineTo()\u7ED3\u5408\u4F7F\u7528
         *
         * context.translate(x,y); \u5E73\u79FB\u53D8\u6362
         * \u6CE8\u610F\uFF1A\u8868\u9762\u4E0A\u770B\u662F\u56FE\u5F62\u7684\u79FB\u52A8\uFF0C\u5B9E\u9645\u4E0A\u662F\u5C06\u6574\u4E2A\u5750\u6807\u7CFB\u76F8\u5BF9\u4E8E\u753B\u5E03\u8FDB\u884C\u4E86\u79FB\u52A8\uFF0C\u5373\u5E73\u79FB\u540E\u5750\u6807\u7CFB\u539F\u70B9\u5B9E\u9645\u5728\u76F8\u5BF9\u753B\u5E03\u7684\u70B9(x, y)\u5904
         * \u4E3A\u4E86\u4FDD\u6301\u5750\u6807\u7CFB\u539F\u70B9\u59CB\u7EC8\u4F4D\u4E8E\u753B\u5E03\u6700\u5DE6\u4E0A\u89D2\uFF0C\u5728\u5E73\u79FB\u524D\u9700\u8C03\u7528context.save()\uFF0C\u5E73\u79FB\u540E\u518D\u8C03\u7528context.restore()\uFF0C\u5426\u5219\u4F1A\u5F71\u54CD\u4E4B\u540E\u7ED8\u5236\u7684\u6240\u6709\u56FE\u5F62
         *
         * context.rotate(deg); \u65CB\u8F6C\u53D8\u6362
         * \u9ED8\u8BA4\u662F\u56F4\u7ED5\u5750\u6807\u539F\u70B9\u8FDB\u884C\u65CB\u8F6C\uFF0C\u5982\u679C\u9700\u8981\u5207\u6362\u65CB\u8F6C\u57FA\u70B9\uFF0C\u53EF\u4EE5\u7ED3\u5408translate()\u4F7F\u7528
         * \u591A\u6B21\u65CB\u8F6C\uFF0C\u540E\u4E00\u6B21\u65CB\u8F6C\u662F\u5728\u4E0A\u4E00\u6B21\u65CB\u8F6C\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u7684\u65CB\u8F6C\uFF0C
         * \u6240\u4EE5\u4E3A\u4E86\u91CD\u7F6E\u65CB\u8F6C\u7684\u8D77\u59CB\u89D2\u548C\u5750\u6807\u7CFB\u539F\u70B9\uFF0C\u5728\u65CB\u8F6C\u524D\u9700\u8C03\u7528context.save()\uFF0C\u65CB\u8F6C\u540E\u518D\u8C03\u7528context.restore()
         *
         * context.scale(sx, sy); \u7F29\u653E\u53D8\u6362
         * @params {
         *   sx\uFF1A\u6C34\u5E73\u7F29\u653E\u500D\u6570\uFF0C\u5C0F\u4E8E1\u7F29\u5C0F\uFF0C\u5927\u4E8E1\u653E\u5927
         *   sy\uFF1A\u5782\u76F4\u7F29\u653E\u500D\u6570\uFF0C\u5C0F\u4E8E1\u7F29\u5C0F\uFF0C\u5927\u4E8E1\u653E\u5927
         * }
         * \u6CE8\u610F\uFF1A\u4E0D\u4EC5\u4F1A\u7F29\u653E\u56FE\u5F62\uFF0C\u63CF\u8FB9\u7684\u7C97\u7EC6\u548C\u5750\u6807\u7CFB\u90FD\u4F1A\u88AB\u7F29\u653E\uFF0C\u5373\u7F29\u653E\u540E\u7684x, y\u662F\u539F\u6765\u7684x, y\u7684n\u500D
         *
         * context.transform(a,b,c,d,e,f); \u5728\u4E0A\u4E00\u4E2A\uFF08\u5982\u679C\u6709\u4E0A\u4E00\u4E2A\uFF09\u77E9\u9635\u57FA\u7840\u4E0A\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u7684\u53D8\u6362\u77E9\u9635
         * @params {
         *   a: \u6C34\u5E73\u7F29\u653E 1
         *   b\uFF1A\u6C34\u5E73\u503E\u659C 0
         *   c\uFF1A\u5782\u76F4\u503E\u659C 0
         *   d\uFF1A\u5782\u76F4\u7F29\u653E 1
         *   e\uFF1A\u6C34\u5E73\u4F4D\u79FB 0
         *   f\uFF1A\u5782\u76F4\u4F4D\u79FB 0
         * }
         * \u77E9\u9635:          ->    \u5355\u4F4D\u77E9\u9635\uFF1A
         * | a  c  e |          | 1  0  0 |
         * | b  d  f |    ->    | 0  1  0 |   ->    \u5373\u9ED8\u8BA4\u7F29\u653E\u5747\u4E3A1
         * | 0  0  1 |          | 0  0  1 |
         *
         * context.setTransform(a,b,c,d,e,f); \u91CD\u7F6E\u5E76\u521B\u5EFA\u4E00\u4E2A\u53D8\u6362\u77E9\u9635
         * \u53C2\u6570\u540Ctransform();\u533A\u522B\u5728\u4E8E\uFF1AsetTransform\u4F1A\u91CD\u7F6E\u524D\u4E00\u4E2A\u53D8\u6362\u77E9\u9635\u7136\u540E\u6784\u5EFA\u65B0\u7684\u77E9\u9635\uFF0C\u800Ctransform\u4E0D\u4F1A\u5F71\u54CD\u4E0A\u4E00\u4E2A\u53D8\u6362\u77E9\u9635
         *
         *
         *
         * \u6587\u672C\uFF1A\u7C7B\u4F3Ccss
         * context.font = "[font-style] [font-variant] [font-weight] [font-size/line-height] [font-family]";
         * context.textAlign = "center|end|left|right|start"; \u9ED8\u8BA4\u4E3Astart
         * context.textBaseline = "alphabetic|top|hanging|middle|ideographic|bottom";
         *
         * context.fillText(text, x, y, maxWidth); \u586B\u5145\u6587\u5B57
         * @params {
         *   text\uFF1A\u6587\u672C\u5185\u5BB9, string
         *   x, y\uFF1A\u6587\u672C\u4F4D\u7F6E
         *   maxWidth: \u53EF\u9009\u53C2\u6570\uFF0C\u6587\u672C\u6700\u5927\u5BBD\u5EA6\uFF0C\u5355\u4F4Dpx
         * }
         * context.strokeText(text, x, y, maxWidth); \u63CF\u8FB9\u6587\u5B57\uFF0C\u53C2\u6570\u540C\u4E0A
         * context.measureText(text).width; \u6587\u5B57\u5BBD\u5EA6
         *
         * \u9634\u5F71\uFF1A
         * context.shadowColor = '';
         * context.shadowOffsetX = '';
         * context.shadowOffsetY = '';
         * context.shadowBlur = '';
         *
         *
         * \u5168\u5C40\u5C5E\u6027\uFF1A
         * context.globalAlpha = [number]; \u5168\u5C40\u900F\u660E\u5EA6\uFF0C0~1.0
         * context.globalCompositeOperation = ''; \u5B9A\u4E49\u5982\u4F55\u5408\u5E76\u56FE\u50CF\uFF0C\u5373\u5982\u4F55\u5C06\u4E00\u4E2A\u6E90\uFF08\u65B0\u7684\uFF09\u56FE\u50CF\u7ED8\u5236\u5230\u76EE\u6807\uFF08\u5DF2\u6709\u7684\uFF09\u7684\u56FE\u50CF\u4E0A
         *  |_ source-over  \u9ED8\u8BA4\u3002\u5728\u76EE\u6807\u56FE\u50CF\u4E0A\u663E\u793A\u6E90\u56FE\u50CF\u3002
         *  |_ source-atop  \u5728\u76EE\u6807\u56FE\u50CF\u9876\u90E8\u663E\u793A\u6E90\u56FE\u50CF\u3002\u6E90\u56FE\u50CF\u4F4D\u4E8E\u76EE\u6807\u56FE\u50CF\u4E4B\u5916\u7684\u90E8\u5206\u662F\u4E0D\u53EF\u89C1\u7684\u3002
         *  |_ source-in \u5728\u76EE\u6807\u56FE\u50CF\u4E2D\u663E\u793A\u6E90\u56FE\u50CF\u3002\u53EA\u6709\u76EE\u6807\u56FE\u50CF\u4E4B\u5185\u7684\u6E90\u56FE\u50CF\u90E8\u5206\u4F1A\u663E\u793A\uFF0C\u76EE\u6807\u56FE\u50CF\u662F\u900F\u660E\u7684\u3002
         *  |_ source-out  \u5728\u76EE\u6807\u56FE\u50CF\u4E4B\u5916\u663E\u793A\u6E90\u56FE\u50CF\u3002\u53EA\u6709\u76EE\u6807\u56FE\u50CF\u4E4B\u5916\u7684\u6E90\u56FE\u50CF\u90E8\u5206\u4F1A\u663E\u793A\uFF0C\u76EE\u6807\u56FE\u50CF\u662F\u900F\u660E\u7684\u3002
         *  |_ destination-over  \u5728\u6E90\u56FE\u50CF\u4E0A\u663E\u793A\u76EE\u6807\u56FE\u50CF\u3002
         *  |_ destination-atop  \u5728\u6E90\u56FE\u50CF\u9876\u90E8\u663E\u793A\u76EE\u6807\u56FE\u50CF\u3002\u76EE\u6807\u56FE\u50CF\u4F4D\u4E8E\u6E90\u56FE\u50CF\u4E4B\u5916\u7684\u90E8\u5206\u662F\u4E0D\u53EF\u89C1\u7684\u3002
         *  |_ destination-in  \u5728\u6E90\u56FE\u50CF\u4E2D\u663E\u793A\u76EE\u6807\u56FE\u50CF\u3002\u53EA\u6709\u6E90\u56FE\u50CF\u4E4B\u5185\u7684\u76EE\u6807\u56FE\u50CF\u90E8\u5206\u4F1A\u88AB\u663E\u793A\uFF0C\u6E90\u56FE\u50CF\u662F\u900F\u660E\u7684\u3002
         *  |_ destination-out  \u5728\u6E90\u56FE\u50CF\u4E4B\u5916\u663E\u793A\u76EE\u6807\u56FE\u50CF\u3002\u53EA\u6709\u6E90\u56FE\u50CF\u4E4B\u5916\u7684\u76EE\u6807\u56FE\u50CF\u90E8\u5206\u4F1A\u88AB\u663E\u793A\uFF0C\u6E90\u56FE\u50CF\u662F\u900F\u660E\u7684\u3002
         *  |_ lighter  \u663E\u793A\u6E90\u56FE\u50CF + \u76EE\u6807\u56FE\u50CF\u3002
         *  |_ copy  \u663E\u793A\u6E90\u56FE\u50CF\u3002\u5FFD\u7565\u76EE\u6807\u56FE\u50CF\u3002
         *  |_ xor  \u4F7F\u7528\u5F02\u6216\u64CD\u4F5C\u5BF9\u6E90\u56FE\u50CF\u4E0E\u76EE\u6807\u56FE\u50CF\u8FDB\u884C\u7EC4\u5408\u3002
         *
         *
         *  context.clip(); \u88C1\u526A
         *  \u88C1\u526A\u662F\u5BF9\u753B\u5E03\u7684\u88C1\u526A\uFF0C\u8981\u60F3\u4FDD\u6301\u5176\u540E\u7684\u7ED8\u56FE\u7684\u7ED8\u5236\u533A\u57DF\u753B\u5E03\u5927\u5C0F\u4E0D\u53D8\uFF0C\u9700\u8981\u7ED3\u5408save()\u548Crestore()\u4F7F\u7528\u3002
         *  \u548C\u6211\u4EEC\u6B63\u5E38\u7684\u56FE\u7247\u7F16\u8F91\u4E00\u6837\uFF0C\u9700\u8981\u5148\u7528\u9009\u62E9\uFF08\u77E9\u5F62\u9009\u62E9/\u81EA\u7531\u56FE\u5F62\u9009\u62E9\uFF09\u4E00\u4E2A\u533A\u57DF\uFF0C\u7136\u540E\u624D\u80FD\u4F7F\u7528\u88C1\u526A\u529F\u80FD\u3002
         *
         *
         * context.drawImage(); \u7ED8\u5236\u56FE\u50CF
         * context.drawImage(img, x, y); \u5B9A\u4F4D\u56FE\u50CF
         * context.drawImage(img, x, y, width, height); \u5B9A\u4F4D\u56FE\u50CF\u5E76\u8BBE\u7F6E\u5BBD\u9AD8
         * context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height); \u526A\u5207\u56FE\u50CF\uFF0C\u5E76\u5B9A\u4F4D\u88AB\u526A\u5207\u90E8\u5206
         * @params {
         *   img: \u56FE\u50CF\uFF0C\u753B\u5E03\u6216\u89C6\u9891
         *   sx, sy\uFF1A\u53EF\u9009\uFF0C\u5F00\u59CB\u88C1\u526A\u7684\u6A2A\u7EB5\u5750\u6807
         *   swidth, sheight\uFF1A\u53EF\u9009\uFF0C\u88AB\u88C1\u526A\u7684\u5BBD\u9AD8
         *   x, y\uFF1A\u653E\u7F6E\u56FE\u50CF\u7684\u6A2A\u7EB5\u5750\u6807
         *   width, height: \u7ED8\u5236\u7684\u56FE\u50CF\u7684\u5BBD\u9AD8\uFF0C\u4F38\u5C55\u6216\u7F29\u5C0F\u56FE\u50CF
         * }
         *
         * context.clearRect(x, y, width, height); \u6A61\u76AE\u64E6
         * context.isPointInPath(x, y); \u5982\u679C\u70B9(x, y)\u4F4D\u4E8E\u5F53\u524D\u8DEF\u5F84\u4E2D\uFF0C\u8FD4\u56DE true\uFF0C\u5426\u5219\u8FD4\u56DE false\u3002
         *
         *
         *
         * canvas.toDataURL(type, encoderOptions); \u8FD4\u56DE\u56FE\u50CFURI
         * @params {
         *   type: \u53EF\u9009\uFF0C\u56FE\u50CF\u683C\u5F0F\uFF0C\u9ED8\u8BA4image/png\uFF0C\u53EF\u9009\u503C\u8FD8\u6709image/jpeg\u3001image/webp\u7B49
         *   encoderOptions\uFF1A\u6709\u635F\u538B\u7F29\uFF0C\u503C\u8303\u56F40~1\uFF0C\u9ED8\u8BA40.92
         * }
         * */

        /*------------ \u7B14\u8BB0\u5230\u6B64\u7ED3\u675F\uFF0C\u4EE5\u4E0B\u662F\u6D4B\u8BD5\u4EE3\u7801\uFF0C\u6CE8\u91CA\u6240\u6709beginPath()\u4EE3\u7801\uFF0C\u67E5\u770B\u7ED8\u5236\u8986\u76D6\u6548\u679C ------------*/
        // \u65B0\u7ED8\u5236\u72B6\u6001
        context.beginPath();
        context.moveTo(300, 250);
        context.lineTo(400, 200);
        context.lineTo(500, 250);
        context.lineWidth = 15;
        context.strokeStyle = '#f00';
        context.stroke();
        // \u65B0\u7ED8\u5236\u72B6\u6001
        context.beginPath();
        context.moveTo(300, 300);
        context.lineTo(400, 250);
        context.lineTo(500, 300);
        context.lineWidth = 9;
        context.strokeStyle = '#0f0';
        context.stroke();
        // \u65B0\u7ED8\u5236\u72B6\u6001
        context.beginPath();
        context.moveTo(300, 350);
        context.lineTo(400, 300);
        context.lineTo(500, 350);
        context.lineWidth = 3;
        context.strokeStyle = '#00f';
        context.stroke();

        drawRect(context, 50, 400, 200, 100);
        drawRoundRect(context, 300, 400, 200, 100, 10);
        drawArcByTangentLine(context, 120, 200, 250, 180, 250, 300, 50);
        drawFlower(context);
        drawScale(context);
        drawTransform(context);
        drawSetTransform(context);
        drawText(context, grad);
        drawTextAlign(context);
        drawTextBaseline(context);
        drawShadow(context);
        drawGlobalAlpha(context);
        drawGlobalCompositeOperation();
        drawClip(context);
      }

      // \u5C01\u88C5\u6210\u65B9\u6CD5\uFF0C\u51CF\u5C11\u91CD\u590D\u4EE3\u7801
      // \u7ED8\u5236\u77E9\u5F62
      function drawRect(ctx, x, y, width, height) {
        ctx.beginPath();
        // ctx.moveTo(x, y);
        // ctx.lineTo(x + width, y);
        // ctx.lineTo(x + width, y + height);
        // ctx.lineTo(x, y + height);
        // ctx.closePath();
        ctx.rect(x, y, width, height);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#000';
        ctx.fillStyle = '#aaa';
        ctx.stroke();
        ctx.fill();
      }

      // \u7ED8\u5236\u5706\u89D2\u77E9\u5F62
      function drawRoundRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.arc(x + radius, y + radius, radius, Math.PI, 1.5 * Math.PI); //\u5DE6\u4E0A\u89D2
        ctx.lineTo(width - radius + x, y);
        ctx.arc(
          width - radius + x,
          radius + y,
          radius,
          1.5 * Math.PI,
          2 * Math.PI,
        ); //\u53F3\u4E0A\u89D2
        ctx.lineTo(width + x, height + y - radius);
        ctx.arc(
          width - radius + x,
          height - radius + y,
          radius,
          0,
          0.5 * Math.PI,
        ); // \u53F3\u4E0B\u89D2
        ctx.lineTo(radius + x, height + y);
        ctx.arc(
          radius + x,
          height - radius + y,
          radius,
          0.5 * Math.PI,
          Math.PI,
        ); //\u5DE6\u4E0B\u89D2
        ctx.closePath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#000';
        ctx.fillStyle = '#aaa';
        ctx.stroke();
        ctx.fill();
      }

      // \u6839\u636E\u5207\u7EBF\u7ED8\u5236\u5706\u5F27
      function drawArcByTangentLine(ctx, x0, y0, x1, y1, x2, y2, radius) {
        // \u5706\u5F27\u6240\u5728\u5706
        ctx.beginPath();
        ctx.arc(200, 238, radius, 0, 2 * Math.PI);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#aaa';
        ctx.stroke();
        // \u5706\u5F27\u7684\u4E24\u6761\u5207\u7EBF
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // \u5706\u5F27
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.arcTo(x1, y1, x2, y2, radius);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = '#000';
        ctx.stroke();
      }

      // \u7C7B\u4F3C\u4E07\u82B1\u5C3A\u7684\u6548\u679C
      function drawFlower(ctx) {
        ctx.fillText(
          'context.translate()+context.rotate()\u6D4B\u8BD5\u6548\u679C\u5982\u4E0B\uFF1A',
          540,
          30,
          200,
        );
        for (var i = 1; i <= 20; i++) {
          ctx.save();
          ctx.translate(600, 100);
          ctx.rotate((18 * i * Math.PI) / 180);
          ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
          ctx.fillRect(0, -50, 50, 50);
          ctx.restore();
        }
      }

      function drawScale(ctx) {
        ctx.fillText('context.scale()\u6D4B\u8BD5\u6548\u679C\u5982\u4E0B\uFF1A', 540, 185);
        for (var i = 1; i < 4; i++) {
          ctx.save();
          ctx.translate(600, 160);
          ctx.rotate(0.25 * Math.PI);
          ctx.scale(i, i);
          ctx.strokeRect(20, 20, 20, 20);
          ctx.restore();
        }
      }

      function drawTransform(ctx) {
        ctx.save();
        ctx.fillText('context.transform()\u6D4B\u8BD5\u6548\u679C\u5982\u4E0B\uFF1A', 540, 345);
        ctx.translate(550, 350);
        ctx.fillStyle = '#ff0';
        ctx.fillRect(0, 0, 150, 50);

        ctx.transform(1, 0.5, -0.5, 1, 0, 0);
        ctx.fillStyle = '#f00';
        ctx.fillRect(0, 0, 150, 50);

        // \u5728\u4E0A\u4E00\u4E2A\u77E9\u9635\u57FA\u7840\u4E0A\u6DFB\u52A0\u4E86\u4E00\u4E2A\u65B0\u7684\u53D8\u6362\u77E9\u9635\uFF0C\u4E0D\u5F71\u54CD\u7EA2\u8272\u77E9\u5F62\u7684\u53D8\u6362\u77E9\u9635
        ctx.transform(1, 0.5, -0.5, 1, 0, 0);
        ctx.fillStyle = '#00f';
        ctx.fillRect(0, 0, 150, 50);
        ctx.restore();
      }

      function drawSetTransform(ctx) {
        ctx.save();
        ctx.fillText('context.transform()\u6D4B\u8BD5\u6548\u679C\u5982\u4E0B\uFF1A', 540, 545);
        ctx.fillStyle = '#ff0';
        ctx.fillRect(550, 550, 150, 50);

        ctx.setTransform(1, 0.5, -0.5, 1, 550, 550);
        ctx.fillStyle = '#f00';
        ctx.fillRect(0, 0, 150, 50);

        // \u91CD\u7F6E\u4E86\u524D\u4E00\u4E2A\u53D8\u6362\u77E9\u9635\uFF0C\u6B64\u65F6\u7EA2\u8272\u77E9\u5F62\u548C\u84DD\u8272\u77E9\u5F62\u7684\u53D8\u6362\u77E9\u9635\u4E00\u81F4
        ctx.setTransform(1, 0.5, -0.5, 1, 550, 550);
        ctx.fillStyle = '#00f';
        ctx.fillRect(0, 0, 150, 50);
        ctx.restore();
      }

      function drawText(ctx, grad) {
        ctx.save();
        ctx.fillText('\u9ED8\u8BA4fillText\u6548\u679C', 50, 520);
        ctx.strokeText('\u9ED8\u8BA4strokeText\u6548\u679C', 50, 550);
        ctx.font = '30px Arial';
        ctx.fillStyle = grad;
        ctx.strokeStyle = grad;
        ctx.fillText('30px Arial\uFF0CfillText\u6548\u679C', 50, 600);
        ctx.strokeText('30px Arial\uFF0CstrokeText\u6548\u679C', 50, 650);
        ctx.strokeText(
          '30px Arial\uFF0CstrokeText\u6548\u679C, \u8BBE\u7F6E\u4E86maxWidth->300px',
          50,
          690,
          300,
        );
        ctx.restore();
      }

      function drawTextAlign(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#f00';
        ctx.moveTo(150, 710);
        ctx.lineTo(150, 810);
        ctx.stroke();

        ctx.textAlign = 'start';
        ctx.fillText('textAlign=start', 150, 720);
        ctx.textAlign = 'end';
        ctx.fillText('textAlign=end', 150, 740);
        ctx.textAlign = 'left';
        ctx.fillText('textAlign=left', 150, 760);
        ctx.textAlign = 'center';
        ctx.fillText('textAlign=center', 150, 780);
        ctx.textAlign = 'right';
        ctx.fillText('textAlign=right', 150, 800);
        ctx.restore();
      }

      function drawTextBaseline(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#f00';
        ctx.moveTo(280, 720);
        ctx.lineTo(680, 720);
        ctx.stroke();

        ctx.textBaseline = 'top';
        ctx.fillText('Top', 300, 720);
        ctx.textBaseline = 'bottom';
        ctx.fillText('Bottom', 380, 720);
        ctx.textBaseline = 'middle';
        ctx.fillText('Middle', 460, 720);
        ctx.textBaseline = 'alphabetic';
        ctx.fillText('Alphabetic', 540, 720);
        ctx.textBaseline = 'hanging';
        ctx.fillText('Hanging', 620, 720);

        var text = 'measureText().width\u8BA1\u7B97\u6587\u5B57\u5BBD\u5EA6';
        ctx.fillText(
          '\u4E0B\u9762\u4E00\u884C\u5B57\u7684\u5BBD\u5EA6\u4E3A\uFF1A' + ctx.measureText(text).width + 'px',
          280,
          760,
        );
        ctx.fillText(text, 280, 780);
        ctx.restore();
      }

      function drawShadow(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.fillText('shadow\u9634\u5F71\u6548\u679C\uFF1A', 50, 825);
        ctx.shadowColor = '#000';
        ctx.shadowOffsetX = 15;
        ctx.shadowOffsetY = 10;
        ctx.shadowBlur = 5;
        ctx.fillStyle = '#f00';
        ctx.fillRect(50, 830, 100, 50);
        ctx.restore();
      }

      function drawGlobalAlpha(ctx) {
        ctx.save();
        ctx.fillText('globalAlpha\u6548\u679C\uFF1A', 200, 825);
        ctx.globalAlpha = 0.5;
        for (var i = 0; i <= 50; i++) {
          var R = Math.floor(Math.random() * 255);
          var G = Math.floor(Math.random() * 255);
          var B = Math.floor(Math.random() * 255);

          ctx.save();
          ctx.beginPath();
          ctx.fillStyle = 'rgb(' + R + ',' + G + ',' + B + ')';
          ctx.translate(200, 830);
          ctx.arc(
            Math.random() * 500,
            Math.random() * 50,
            Math.random() * 15,
            0,
            Math.PI * 2,
          );
          ctx.fill();
          ctx.restore();
        }
        ctx.restore();
      }

      function drawGlobalCompositeOperation() {
        var gco = new Array();
        gco.push('source-atop');
        gco.push('source-in');
        gco.push('source-out');
        gco.push('source-over');
        gco.push('destination-atop');
        gco.push('destination-in');
        gco.push('destination-out');
        gco.push('destination-over');
        gco.push('lighter');
        gco.push('copy');
        gco.push('xor');
        for (var n = 0; n < gco.length; n++) {
          var newElement = document.createElement('div');
          newElement.innerHTML =
            "<div id='p_" +
            n +
            "' style='float:left;'>" +
            gco[n] +
            ':<br></div>';
          document
            .getElementById('globalCompositeOperation')
            .appendChild(newElement);
          var c = document.createElement('canvas');
          c.width = 120;
          c.height = 100;
          document.getElementById('p_' + n).appendChild(c);
          var ctx = c.getContext('2d');
          ctx.fillStyle = '#00f';
          ctx.fillRect(10, 10, 50, 50);
          ctx.globalCompositeOperation = gco[n];
          ctx.beginPath();
          ctx.fillStyle = '#f00';
          ctx.arc(50, 50, 30, 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      function drawClip(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.fillText('\u6CA1\u6709\u88C1\u526Aclip()\u6548\u679C\uFF1A', 50, 910);
        ctx.rect(50, 920, 200, 100);
        ctx.stroke();
        ctx.fillStyle = '#f00';
        ctx.fillRect(0, 920, 150, 50);
        ctx.restore();

        ctx.save();
        ctx.fillText('\u6709\u88C1\u526Aclip()\u6548\u679C\uFF1A', 50, 1055);
        ctx.rect(50, 1060, 200, 100);
        ctx.stroke();
        ctx.clip();
        ctx.fillStyle = '#f00';
        ctx.fillRect(0, 1060, 150, 50);
        ctx.restore();
      }
    <\/script>
  </body>
</html>
\`\`\`
`}}]);
