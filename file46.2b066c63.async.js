"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[1712],{63204:function(t,n,e){e.r(n),n.default=`canvas \u5728\u505A\u89C6\u9891\u622A\u56FE\u65F6\u6700\u5E38\u89C1\u7684\u95EE\u9898\u662F\u8DE8\u57DF\u95EE\u9898\uFF0C\u4E0D\u540C\u57DF\u4F1A\u62A5\u9519\uFF1AUncaught DOMException: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported.

\u7F51\u4E0A\u63D0\u4F9B\u7684\u65B9\u6CD5 img.setAttribute("crossOrigin", 'anonymous')\uFF0C\u8BD5\u4E86\u65E0\u6548(\u731C\u6D4B\u9700\u8981\u670D\u52A1\u5668\u505A\u5141\u8BB8\u8DE8\u57DF\u8BF7\u6C42\u7684\u5904\u7406)\uFF1B

\u89E3\u6C7A\u529E\u6CD5\uFF1A\u5BF9\u4E8E\u4E0D\u540C\u57DF\u7684\u89C6\u9891\u53EF\u4EE5\u8003\u8651\u91C7\u7528\u5148\u5C06\u89C6\u9891\u8F6C\u6210 blob \u6587\u4EF6\u5BF9\u8C61\uFF0C\u518D\u505A\u622A\u56FE\u5904\u7406\u3002

\u5982\u793A\u4F8B\u4E2D\uFF0C\u901A\u8FC7\u67E5\u770B\u5143\u7D20\uFF0C\u53EF\u4EE5\u770B\u5230\u7F51\u7EDC\u89C6\u9891\u6700\u5F00\u59CB\u7684\u5730\u5740\u662F https://chimee.org/vod/1.mp4 \uFF0C\u76F4\u63A5\u70B9\u51FB\u622A\u56FE\uFF0C\u63A7\u5236\u53F0\u662F\u4F1A\u62A5\u9519\u7684\uFF0C\u5982\u679C\u5148\u5BF9\u89C6\u9891\u505A blob \u5904\u7406\uFF0C\u5C31\u53EF\u4EE5\u907F\u5F00\u8DE8\u57DF\u95EE\u9898\u3002

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Canvas \u89C6\u9891\u622A\u56FE</title>
  </head>

  <body>
    <p>\u4E0B\u9762\u662F\u4E00\u6BB5\u540C\u57DF\u540D\u89C6\u9891\uFF1A</p>
    <video id="video1" controls="controls" src="./assets/1.mp4"></video>
    <div>
      <button onclick="capture1()">\u672C\u5730\u89C6\u9891\u622A\u56FE</button>
    </div>
    <h5>\u622A\u56FE\u5C55\u793A:</h5>
    <div id="output1"></div>

    <p>\u4E0B\u9762\u662F\u4E00\u6BB5\u4E0D\u540C\u57DF\u540D\u89C6\u9891\uFF1A</p>
    <video
      id="video2"
      controls="controls"
      src="https://chimee.org/vod/1.mp4"
    ></video>
    <div>
      <p>
        1. \u5C1D\u8BD5\u70B9\u51FB\u201C\u7F51\u7EDC\u89C6\u9891\u622A\u56FE\u201D\uFF0C\u67E5\u770B\u63A7\u5236\u53F0\u62A5\u9519;<br />
        2.
        \u5C1D\u8BD5\u70B9\u51FB\u201C\u89C6\u9891\u8F6C\u6210blob\u201D\uFF0C\u7B49\u5F851-2s\u89C6\u9891\u5207\u6362\u5B8C\u6210\uFF08\u89C6\u9891\u8F6C\u6362\u540E\u5C06\u91CD\u8F7D\uFF09\uFF0C\u518D\u70B9\u51FB\u201C\u7F51\u7EDC\u89C6\u9891\u622A\u56FE\u201D
      </p>
      <button onclick="capture2()">\u7F51\u7EDC\u89C6\u9891\u622A\u56FE</button>
      <button onclick="changeBlob()">\u89C6\u9891\u8F6C\u6210blob</button>
    </div>
    <h5>\u622A\u56FE\u5C55\u793A:</h5>
    <div id="output2"></div>

    <script>
      var captureImage = function(video, outputElem) {
        var scale = 0.5;
        var img = document.createElement('img');
        var canvas = document.createElement('canvas');
        canvas.width = video.videoWidth * scale;
        canvas.height = video.videoHeight * scale;
        canvas
          .getContext('2d')
          .drawImage(video, 0, 0, canvas.width, canvas.height);
        img.src = canvas.toDataURL();
        outputElem.prepend(img);
      };
      var capture1 = function() {
        var video1 = document.getElementById('video1');
        var outputElem1 = document.getElementById('output1');
        captureImage(video1, outputElem1);
      };
      var capture2 = function() {
        var video2 = document.getElementById('video2');
        var outputElem2 = document.getElementById('output2');
        captureImage(video2, outputElem2);
      };

      var changeBlob = function() {
        ajax('https://chimee.org/vod/1.mp4', function(res) {
          const src = URL.createObjectURL(res);
          video2.src = src;
        });
      };

      function ajax(url, cb) {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.responseType = 'blob'; // "text"-\u5B57\u7B26\u4E32 "blob"-Blob\u5BF9\u8C61 "arraybuffer"-ArrayBuffer\u5BF9\u8C61
        xhr.onload = function() {
          cb(xhr.response);
        };
        xhr.send();
      }
    <\/script>
  </body>
</html>
\`\`\`
`}}]);
