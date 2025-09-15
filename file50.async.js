"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[2019],{8919:function(i,e,n){n.r(e),e.default=`![image](https://chenqiuling.github.io/frontend-notes-viewer/images/img_base64.png)

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>input file \u56FE\u7247\u9884\u89C8\uFF08base64\uFF09</title>
  </head>

  <body>
    <input type="file" multiple="multiple" onchange="getFile(this)" />
    <h5>\u56FE\u7247\u9884\u89C8\uFF1A</h5>
    <div id="preview"></div>
    <h5>\u751F\u6210\u7684base64\uFF1A</h5>
    <div id="base64" style="word-break: break-all;"></div>
    <script>
      function getFile(source) {
        var base64Ele = document.getElementById('base64');
        if (window.FileReader) {
          var previewEle = document.getElementById('preview');
          var allFiles = source.files;
          for (var i in allFiles) {
            var oFileReader = new FileReader();
            var file = allFiles[i];
            if (!isNaN(i)) {
              // \u8FC7\u6EE4\u975E\u56FE\u7247\u6587\u4EF6
              if (/^image*/.test(file.type)) {
                (function(f, j) {
                  oFileReader.onloadend = function(e) {
                    var img = document.createElement('img');
                    img.style = 'max-height: 100px; margin-right: 5px;';
                    img.src = e.target.result;
                    previewEle.appendChild(img);
                    base64Ele.innerHTML +=
                      '\u7B2C' +
                      (+j + 1) +
                      '\u5F20\u56FE\uFF1A' +
                      f.name +
                      '<br />' +
                      '<textarea style="width: 100%; height: 50px;">' +
                      e.target.result +
                      '</textarea>' +
                      '<br />';
                  };
                })(file, i);
                // \u5C06\u56FE\u7247\u8F6C\u4E3Abase64\u683C\u5F0F
                oFileReader.readAsDataURL(file);
              } else {
                base64Ele.innerHTML = '\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6!';
                previewEle.innerHTML = '';
              }
            }
          }
        } else {
          base64Ele.innerHTML = '\u60A8\u5F53\u524D\u4F7F\u7528\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u8BFB\u53D6\u6587\u4EF6\u529F\u80FD';
        }
      }
    <\/script>
  </body>
</html>
\`\`\`
`}}]);
