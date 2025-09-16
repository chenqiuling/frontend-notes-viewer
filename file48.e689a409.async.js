"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[1885],{20724:function(e,n,t){t.r(n),n.default=`rAF \u56DE\u8C03\u4F1A\u5728\u6E32\u67D3\u524D\u4F18\u5148\u6267\u884C\uFF0C\u800C CSS \u52A8\u753B\u53EF\u80FD\u56E0\u4E3B\u7EBF\u7A0B\u963B\u585E\uFF08\u5982\u5927\u91CF\u8BA1\u7B97\uFF09\u800C\u5361\u987F\u3002

- DOM \u5143\u7D20\u52A8\u753B\uFF1A\u79FB\u52A8\u3001\u65CB\u8F6C\u3001\u7F29\u653E\u5143\u7D20
- Canvas \u52A8\u753B\uFF1A\u6E38\u620F\u3001\u6570\u636E\u53EF\u89C6\u5316
- SVG \u52A8\u753B\uFF1A\u590D\u6742\u77E2\u91CF\u56FE\u5F62\u52A8\u753B
- WebGL \u52A8\u753B\uFF1A3D \u573A\u666F\u6E32\u67D3
- \u6EDA\u52A8\u6548\u679C\uFF1A\u89C6\u5DEE\u6EDA\u52A8\u3001\u5E73\u6ED1\u6EDA\u52A8
- \u8FC7\u6E21\u6548\u679C\uFF1A\u81EA\u5B9A\u4E49\u7F13\u52A8\u51FD\u6570

\`\`\`html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>requestAnimationFrame vs CSS Transition</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
      }
      .demo-container {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
      }
      .panel {
        flex: 1;
        border: 1px solid #ddd;
        padding: 15px;
        border-radius: 5px;
      }
      .canvas {
        height: 300px;
        border: 1px solid #eee;
        position: relative;
        background: #f9f9f9;
      }
      .box {
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 4px;
      }
      .raf-box {
        background: #3498db;
      }
      .transition-box {
        background: #e74c3c;
      }
      .stats {
        margin-top: 10px;
        font-size: 14px;
      }
      .fps {
        color: #3498db;
      }
      .transition-fps {
        color: #e74c3c;
      }
      .buttons {
        display: flex;
        gap: 10px;
        margin-bottom: 15px;
      }
      button {
        padding: 8px 15px;
        cursor: pointer;
      }
      .stress-test {
        background: #f39c12;
        color: white;
        border: none;
      }
    </style>
  </head>
  <body>
    <h2>requestAnimationFrame vs CSS Transition \u6027\u80FD\u5BF9\u6BD4</h2>

    <div class="demo-container">
      <!-- requestAnimationFrame \u9762\u677F -->
      <div class="panel">
        <h3>requestAnimationFrame</h3>
        <div class="canvas" id="rafCanvas"></div>
        <div class="stats">
          <div class="fps">FPS: <span id="rafFps">0</span></div>
          <div>\u5B8C\u6210\u7387: <span id="rafProgress">0%</span></div>
        </div>
      </div>

      <!-- CSS Transition \u9762\u677F -->
      <div class="panel">
        <h3>CSS Transition</h3>
        <div class="canvas" id="transitionCanvas"></div>
        <div class="stats">
          <div class="transition-fps">
            FPS: <span id="transitionFps">0</span>
          </div>
          <div>\u5B8C\u6210\u7387: <span id="transitionProgress">0%</span></div>
        </div>
      </div>
    </div>

    <div class="buttons">
      <button id="startDemo">\u5F00\u59CB\u52A8\u753B</button>
      <button id="resetDemo">\u91CD\u7F6E</button>
      <button class="stress-test" id="stressTest">\u538B\u529B\u6D4B\u8BD5 (\u4F1A\u5361\u987F!)</button>
    </div>

    <script>
      // DOM \u5143\u7D20
      const rafCanvas = document.getElementById("rafCanvas");
      const transitionCanvas = document.getElementById("transitionCanvas");
      const rafFps = document.getElementById("rafFps");
      const transitionFps = document.getElementById("transitionFps");
      const rafProgress = document.getElementById("rafProgress");
      const transitionProgress = document.getElementById("transitionProgress");
      const startBtn = document.getElementById("startDemo");
      const resetBtn = document.getElementById("resetDemo");
      const stressBtn = document.getElementById("stressTest");

      // \u914D\u7F6E
      const BOX_COUNT = 50; // \u65B9\u5757\u6570\u91CF
      const ANIMATION_DURATION = 5000; // \u52A8\u753B\u6301\u7EED\u65F6\u95F4 (\u6BEB\u79D2)
      let isAnimating = false;
      let rafBoxes = [];
      let transitionBoxes = [];

      // \u521B\u5EFA\u65B9\u5757
      function createBoxes() {
        // \u6E05\u7A7A\u753B\u5E03
        rafCanvas.innerHTML = "";
        transitionCanvas.innerHTML = "";
        rafBoxes = [];
        transitionBoxes = [];

        // \u521B\u5EFA requestAnimationFrame \u65B9\u5757
        for (let i = 0; i < BOX_COUNT; i++) {
          const box = document.createElement("div");
          box.className = "box raf-box";
          box.style.left = "0px";
          box.style.top = \`\${i * 5 + 5}px\`;
          rafCanvas.appendChild(box);
          rafBoxes.push({
            element: box,
            progress: 0,
            speed: Math.random() * 0.01 + 0.005, // \u968F\u673A\u901F\u5EA6
          });
        }

        // \u521B\u5EFA CSS Transition \u65B9\u5757
        for (let i = 0; i < BOX_COUNT; i++) {
          const box = document.createElement("div");
          box.className = "box transition-box";
          box.style.left = "0px";
          box.style.top = \`\${i * 5 + 5}px\`;
          transitionCanvas.appendChild(box);
          transitionBoxes.push({
            element: box,
            progress: 0,
          });
        }
      }

      // \u8BA1\u7B97 FPS
      let lastTime = performance.now();
      let frameCount = 0;
      let rafCurrentFps = 0;

      function updateRafFps(timestamp) {
        frameCount++;
        if (timestamp - lastTime >= 1000) {
          rafCurrentFps = frameCount;
          frameCount = 0;
          lastTime = timestamp;
          rafFps.textContent = rafCurrentFps;
        }
        if (isAnimating) requestAnimationFrame(updateRafFps);
      }

      // requestAnimationFrame \u52A8\u753B
      function animateRafBoxes(timestamp) {
        let completed = 0;
        const canvasWidth = rafCanvas.clientWidth - 30;

        rafBoxes.forEach((box) => {
          // \u590D\u6742\u8FD0\u52A8\u8F68\u8FF9 (\u6B63\u5F26\u6CE2 + \u52A0\u901F)
          box.progress += box.speed;
          if (box.progress >= 1) {
            box.progress = 1;
            completed++;
          }

          // \u7F13\u52A8\u51FD\u6570 (\u52A0\u901F\u540E\u51CF\u901F)
          const easeProgress = easeInOutCubic(box.progress);

          // \u590D\u6742\u8FD0\u52A8\u8F68\u8FF9: \u5DE6\u53F3\u6446\u52A8 + \u4E0A\u4E0B\u6CE2\u52A8
          const xPos = canvasWidth * easeProgress;
          const yPos = Math.sin(easeProgress * Math.PI * 4) * 30; // \u4E0A\u4E0B\u6CE2\u52A8

          box.element.style.left = \`\${xPos}px\`;
          box.element.style.transform = \`translateY(\${yPos}px)\`;
        });

        // \u66F4\u65B0\u5B8C\u6210\u7387
        rafProgress.textContent = \`\${Math.round(
          (completed / BOX_COUNT) * 100
        )}%\`;

        if (completed < BOX_COUNT && isAnimating) {
          requestAnimationFrame(animateRafBoxes);
        }
      }

      // \u542F\u52A8 CSS Transition \u52A8\u753B
      function startTransitionAnimation() {
        const canvasWidth = transitionCanvas.clientWidth - 30;
        let completed = 0;

        transitionBoxes.forEach((box, index) => {
          // \u968F\u673A\u52A8\u753B\u5EF6\u8FDF\uFF0C\u6A21\u62DF\u4E0D\u540C\u6B65\u542F\u52A8
          const delay = index * 20;

          setTimeout(() => {
            box.element.style.transition = \`left 2s cubic-bezier(0.4, 0, 0.2, 1), transform 2s ease-in-out\`;

            // \u4E0E rAF \u76F8\u540C\u7684\u590D\u6742\u8FD0\u52A8\u8F68\u8FF9
            const animDuration = 2000 + Math.random() * 1000; // \u968F\u673A\u6301\u7EED\u65F6\u95F4
            const animTiming = "cubic-bezier(0.4, 0, 0.2, 1)";

            box.element.style.transition = \`left \${animDuration}ms \${animTiming}, transform \${animDuration}ms ease-in-out\`;

            // \u8BBE\u7F6E\u52A8\u753B\u7ED3\u675F\u56DE\u8C03
            box.element.addEventListener(
              "transitionend",
              () => {
                box.progress = 1;
                completed++;
                transitionProgress.textContent = \`\${Math.round(
                  (completed / BOX_COUNT) * 100
                )}%\`;
              },
              { once: true }
            );

            // \u5E94\u7528\u52A8\u753B
            const easeProgress = 1; // \u5B8C\u6574\u8FDB\u5EA6
            const xPos = canvasWidth * easeProgress;
            const yPos = Math.sin(easeProgress * Math.PI * 4) * 30;

            box.element.style.left = \`\${xPos}px\`;
            box.element.style.transform = \`translateY(\${yPos}px)\`;
          }, delay);
        });
      }

      // \u7F13\u52A8\u51FD\u6570
      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      // \u538B\u529B\u6D4B\u8BD5 (\u963B\u585E\u4E3B\u7EBF\u7A0B)
      function stressTest() {
        if (!isAnimating) return;

        // \u521B\u5EFA\u5927\u91CF\u8BA1\u7B97\u4EFB\u52A1\u963B\u585E\u4E3B\u7EBF\u7A0B
        const startTime = performance.now();
        while (performance.now() - startTime < 2000) {
          // \u6A21\u62DF 2 \u79D2\u7684\u5BC6\u96C6\u8BA1\u7B97
          let result = 0;
          for (let i = 0; i < 10000000; i++) {
            result += (Math.sqrt(i) * Math.sin(i)) / Math.cos(i);
          }
        }
      }

      // \u4E8B\u4EF6\u76D1\u542C
      startBtn.addEventListener("click", () => {
        if (isAnimating) return;

        isAnimating = true;
        createBoxes();

        // \u542F\u52A8 rAF \u52A8\u753B
        requestAnimationFrame(updateRafFps);
        requestAnimationFrame(animateRafBoxes);

        // \u542F\u52A8 CSS Transition \u52A8\u753B
        startTransitionAnimation();

        // \u542F\u52A8 CSS FPS \u76D1\u63A7
        monitorTransitionFPS();
      });

      resetBtn.addEventListener("click", () => {
        isAnimating = false;
        createBoxes();
        rafFps.textContent = "0";
        transitionFps.textContent = "0";
        rafProgress.textContent = "0%";
        transitionProgress.textContent = "0%";
      });

      stressBtn.addEventListener("click", stressTest);

      // \u76D1\u63A7 CSS Transition FPS
      function monitorTransitionFPS() {
        let lastFrameTime = performance.now();
        let frameCount = 0;
        let transitionCurrentFps = 0;

        function updateTransitionFps() {
          const now = performance.now();
          frameCount++;

          if (now - lastFrameTime >= 1000) {
            transitionCurrentFps = frameCount;
            frameCount = 0;
            lastFrameTime = now;
            transitionFps.textContent = transitionCurrentFps;
          }

          if (isAnimating) requestAnimationFrame(updateTransitionFps);
        }

        requestAnimationFrame(updateTransitionFps);
      }

      // \u521D\u59CB\u5316
      createBoxes();
    <\/script>
  </body>
</html>
\`\`\``}}]);
