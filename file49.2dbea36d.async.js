"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[3498],{7843:function(r,n,e){e.r(n),n.default=`**\u77E5\u8BC6\u70B9\uFF1A**

svg \u5C5E\u6027\u53C2\u8003\u6587\u6863\uFF1Ahttps://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Fills_and_Strokes

\u90E8\u5206 svg \u5C5E\u6027\u53EF\u4EE5\u7528\u6837\u5F0F\u8BBE\u7F6E\u3002

**fill** \u8BBE\u7F6E\u5BF9\u8C61\u5185\u90E8\u7684\u989C\u8272\uFF1B

**stroke** \u8BBE\u7F6E\u7ED8\u5236\u5BF9\u8C61\u7684\u7EBF\u6761\u7684\u989C\u8272\uFF1B

**stroke-width** \u8BBE\u7F6E\u7ED8\u5236\u5BF9\u8C61\u7684\u7EBF\u6761\u7684\u5BBD\u5EA6\uFF1B

**stroke-linecap** \u8BBE\u7F6E\u7ED8\u5236\u5BF9\u8C61\u7684\u7EBF\u6761\u7EC8\u70B9\u7684\u5F62\u72B6\uFF1A

- butt \u7528\u76F4\u8FB9\u7ED3\u675F\u7EBF\u6BB5\uFF0C\u5B83\u662F\u5E38\u89C4\u505A\u6CD5\uFF0C\u7EBF\u6BB5\u8FB9\u754C 90 \u5EA6\u5782\u76F4\u4E8E\u63CF\u8FB9\u7684\u65B9\u5411\u3001\u8D2F\u7A7F\u5B83\u7684\u7EC8\u70B9\uFF1B
- square \u548C butt \u7684\u6548\u679C\u5DEE\u4E0D\u591A\uFF0C\u4F46\u662F\u4F1A\u7A0D\u5FAE\u8D85\u51FA\u5B9E\u9645\u8DEF\u5F84\u7684\u8303\u56F4\uFF0C\u8D85\u51FA\u7684\u5927\u5C0F\u7531 stroke-width \u63A7\u5236\uFF1B
- round \u8868\u793A\u8FB9\u6846\u7684\u7EC8\u70B9\u662F\u5706\u89D2\uFF0C\u5706\u89D2\u7684\u534A\u5F84\u4E5F\u662F\u7531 stroke-width \u63A7\u5236\u7684\u3002

**stroke-linejoin** \u63A7\u5236\u8FDE\u63A5\u5904\u7684\u6837\u5F0F\uFF1A

- miter \u662F\u9ED8\u8BA4\u503C\uFF0C\u8868\u793A\u7528\u65B9\u5F62\u753B\u7B14\u5728\u8FDE\u63A5\u5904\u5F62\u6210\u5C16\u89D2\uFF1B
- round \u8868\u793A\u7528\u5706\u89D2\u8FDE\u63A5\uFF0C\u5B9E\u73B0\u5E73\u6ED1\u6548\u679C\uFF1B
- bevel \u8FDE\u63A5\u5904\u4F1A\u5F62\u6210\u4E00\u4E2A\u659C\u63A5\u3002

**stroke-dasharray** \u6307\u5B9A\u77ED\u5212\u7EBF\u548C\u7F3A\u53E3\u7684\u957F\u5EA6\uFF0C\u5982\u679C\u63D0\u4F9B\u4E86\u5947\u6570\u4E2A\u503C\uFF0C\u5219\u8FD9\u4E2A\u503C\u7684\u6570\u5217\u91CD\u590D\u4E00\u6B21\uFF0C\u4ECE\u800C\u53D8\u6210\u5076\u6570\u4E2A\u503C\uFF1B

**stroke-dashoffset** \u6307\u5B9A\u77ED\u5212\u7EBF\u8DDD\u8D77\u70B9\u7684\u957F\u5EA6\uFF1B

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>svg\u5B9E\u73B0\u5B8C\u6574/\u4E0D\u5B8C\u6574\u5706\u73AF\u8FDB\u5EA6\u6761</title>
    <style>
      .circle-progress-bar {
        width: 190px;
        height: 190px;
        margin: 45px auto;
      }
      .circle-progress-bar-text {
        text-align: center;
        margin-top: -60%;
      }
      .circle-progress-bar-point {
        font-size: 30px;
      }
      .circle-svg {
        transform: translateX(109px) rotate(-230deg) translateY(-109px);
      }
      .circle-svg-bottom,
      .circle-svg-top {
        stroke-dasharray: 471.23889803846896; /*\u5706\u73AF\u5468\u957F*/
        transition: stroke-dashoffset 1200ms cubic-bezier(0.99, 0.01, 0.62, 0.94);
      }
      .circle-svg-bottom {
        stroke-dashoffset: 105; /*\u7F3A\u53E3\u5F27\u957F*/
      }
      .circle-svg-top {
        stroke-dashoffset: 471.23889803846896; /*\u5706\u73AF\u5468\u957F*/
      }
    </style>
  </head>
  <body>
    <div class="circle-progress-bar">
      <svg width="100%" height="100%" viewBox="0 0 160 160">
        <g class="circle-svg">
          <circle
            class="circle-svg-bottom"
            r="75"
            cy="80"
            cx="80"
            fill="none"
            stroke-width="9"
            stroke="#F3F6F7"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
          <circle
            class="circle-svg-top"
            r="75"
            cy="80"
            cx="80"
            fill="none"
            stroke-width="9"
            stroke="#7E46AA"
            stroke-linejoin="round"
            stroke-linecap="round"
            id="progressCircle"
          />
        </g>
      </svg>
      <div class="circle-progress-bar-text">
        <div class="circle-progress-bar-point" id="progressVal">0</div>
        <div>Points</div>
      </div>
    </div>
    <script>
      /**
       *
       * @param point // \u5F53\u524D\u8FDB\u5EA6
       * @param limitProgress // \u603B\u8FDB\u5EA6
       * @param radius // \u5706\u73AF\u534A\u5F84
       * @param missingCircle // \u7F3A\u53E3\u5F27\u957F
       */
      function drawCircle(point, limitProgress, radius, missingCircle) {
        var calcDashOffset = function() {
          if (point > limitProgress) {
            return missingCircle; // \u82E5\u5F53\u524D\u8FDB\u5EA6\u8D85\u8FC7\u603B\u989D\u8FDB\u5EA6\uFF0C\u5219\u663E\u793A\u7F3A\u53E3\u5F27\u957F
          } else {
            var circumference = Math.PI * (2 * radius); // \u5706\u73AF\u5468\u957F
            return (
              circumference -
              (point / limitProgress) * (circumference - missingCircle)
            ); // \u8BA1\u7B97\u5F53\u524D\u8FDB\u5EA6\u5360\u603B\u989D\u8FDB\u5EA6\u7684\u5F27\u957F
          }
        };
        var createCSS = function() {
          document.getElementById(
            'progressCircle',
          ).style.strokeDashoffset = calcDashOffset();
        };
        var updateText = function() {
          document.getElementById('progressVal').innerText = point;
        };
        setTimeout(function() {
          createCSS();
          updateText();
        }, 300);
      }

      drawCircle(66, 100, 75, 105);
    <\/script>
  </body>
</html>
\`\`\`
`}}]);
