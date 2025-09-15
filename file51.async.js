"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[6257],{22242:function(t,n,e){e.r(n),n.default=`\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>\u5012\u8BA1\u65F6</title>
  </head>

  <body>
    <div id="countTime"></div>
    <script>
      var timer = null;
      /**
       * setTimeout \u5B9E\u73B0\u5012\u8BA1\u65F6
       * @param {number} restTime \u5012\u8BA1\u65F6\u65F6\u95F4(\u5355\u4F4D\uFF1A\u79D2)
       * @param {function} onTimeUp \u5012\u8BA1\u65F6\u7ED3\u675F\u56DE\u8C03\u65B9\u6CD5
       */
      function countDown(restTime, onTimeUp) {
        if (restTime > 1) {
          restTime -= 1;
          timer = setTimeout(() => countDown(restTime, onTimeUp), 1000);
        } else {
          restTime = 0;
          clearTimeout(timer);
          onTimeUp();
        }
        const h = Math.floor(restTime / 3600);
        const m = Math.floor((restTime - h * 3600) / 60);
        const s = Math.floor(restTime - h * 3600 - m * 60);
        const getFull = d => (d < 10 ? \`0\${d}\` : d);
        const displayTime = \`\${getFull(h)}\u65F6\${getFull(m)}\u5206\${getFull(s)}\u79D2\`;
        document.getElementById('countTime').innerText =
          '\u5012\u8BA1\u65F6\uFF1A' + displayTime;
      }

      countDown(3660, () => {
        document.getElementById('countTime').innerText = '\u8BA1\u65F6\u7ED3\u675F\uFF01';
      });
    <\/script>
  </body>
</html>
\`\`\`
`}}]);
