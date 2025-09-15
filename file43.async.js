"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[797],{86189:function(e,n,t){t.r(n),n.default=`**\u77E5\u8BC6\u70B9\uFF1A**

**perspective** \u5C5E\u6027\u5B9A\u4E49 3D \u5143\u7D20\u8DDD\u89C6\u56FE\u7684\u8DDD\u79BB
[\u67E5\u770B\u6587\u6863](https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective)

**transform-style: preserve-3d;** \u6307\u793A\u5143\u7D20\u7684\u5B50\u5143\u7D20\u5E94\u4F4D\u4E8E 3D \u7A7A\u95F4\u4E2D

**-webkit-box-reflect** \u53CD\u6620\u4E00\u4E2A\u5143\u7D20\u5728\u4E00\u4E2A\u7279\u5B9A\u65B9\u5411\u4E0A\u7684\u5185\u5BB9
[\u67E5\u770B\u6587\u6863](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-box-reflect)

**linear-gradient()** \u7EBF\u6027\u6E10\u53D8\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u89D2\u5EA6\u6216\u8005\u65B9\u5411\uFF08\u8868\u793A\u65B9\u5411\u5411\u4E0B\u7528 to bottom\uFF0C\u5176\u4ED6\u65B9\u5411\u7C7B\u540C\uFF09\uFF0C\u4E4B\u540E\u7684\u53C2\u6570\u662F\u6E10\u53D8\u989C\u8272+\u6E10\u53D8\u8303\u56F4
[\u67E5\u770B\u6587\u6863](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient()>)

**-webkit-linear-gradient()** webkit \u5185\u6838\u7684\u7EBF\u6027\u6E10\u53D8\uFF0C\u53C2\u6570\u987A\u5E8F\u540C linear-gradient\uFF0C\u6CE8\u610F\u7B2C\u4E00\u4E2A\u53C2\u6570\u6709\u533A\u522B\uFF08\u8868\u793A\u65B9\u5411\u5411\u4E0B\u7528 top\uFF0C\u5176\u4ED6\u65B9\u5411\u7C7B\u540C\uFF09

**radial-gradient()** \u5F84\u5411\u6E10\u53D8\uFF0C\u53C2\u6570\u4F9D\u6B21\u4E3A\uFF1A\u6E10\u53D8\u4E2D\u5FC3\u3001\u6E10\u53D8\u5F62\u72B6\u3001\u6E10\u53D8\u5C3A\u5BF8\u3001\u6E10\u53D8\u989C\u8272+\u6E10\u53D8\u8303\u56F4\u3001\u8FB9\u7F18\u8F6E\u5ED3\u4F4D\u7F6E\uFF08closest-side | closest-corner | farthest-side | farthest-corner\uFF09
[\u67E5\u770B\u6587\u6863](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient()>)

**-webkit-radial-gradient()** \u6682\u672A\u67E5\u5230\u76F8\u5173\u6587\u6863

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>3D\u56FE\u7247\u65CB\u8F6C</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      body {
        height: 100%;
        overflow: hidden;
        background-color: #000;
        /* \u666F\u6DF1 \u9762\u7684 (\u5BBD+\u9AD8)*2 */
        perspective: 106.6vh;
      }

      #photos {
        margin: 15vh auto 0;
        width: 20vh;
        height: 33.3vh;
        transform: rotateX(-5deg) rotateY(0deg);
        /* \u8BBE\u7F6E3d\u73AF\u5883 */
        transform-style: preserve-3d;
      }

      #photos img {
        position: absolute;
        width: 100%;
        height: 100%;
        box-shadow: 1px -1px 6px #666;
        border-radius: 4px;
        cursor: pointer;
        /* \u8BBE\u7F6E\u6295\u5F71 */
        -webkit-box-reflect: below 3px -webkit-linear-gradient(top, rgba(
                0,
                0,
                0,
                0
              ) 40%, rgba(0, 0, 0, 0.5));
      }

      #photos .layer {
        /* \u5E95\u5C42\u6258\u76D8 */
        position: absolute;
        top: 100%;
        left: 50%;
        width: 100vh;
        height: 100vh;
        border-radius: 50%;
        transform: translate(-50%, -50%) rotateX(90deg);
        transform-origin: center;
        background-image: -webkit-radial-gradient(
          center center,
          100vh 100vh,
          rgba(158, 158, 222, 0.5),
          rgba(0, 0, 0, 0)
        );
      }
    </style>
  </head>

  <body>
    <div style="color: #fff;font-size: 10px;">
      <div>\u5C1D\u8BD5\u70B9\u51FB\u591A\u6B21\u64AD\u653E\uFF0C\u6EDA\u52A8\u901F\u5EA6\u4F1A\u8D8A\u6765\u8D8A\u5FEB~</div>
      <button onclick="play()">\u64AD\u653E</button>
      <button onclick="stop()">\u505C\u6B62</button>
    </div>
    <div id="photos">
      <img src="./images/cats/cat1.jpg" />
      <img src="./images/cats/cat2.jpg" />
      <img src="./images/cats/cat3.jpg" />
      <img src="./images/cats/cat4.jpg" />
      <img src="./images/cats/cat5.jpg" />
      <img src="./images/cats/cat6.jpg" />
      <img src="./images/cats/cat7.jpg" />
      <div class="layer"></div>
    </div>
  </body>
  <script>
    var photosDom = document.getElementById('photos');
    var images = photosDom.getElementsByTagName('img');
    // \u83B7\u53D6\u56FE\u7247\u6570\u91CF
    var len = images.length;
    // \u8BA1\u7B97\u6BCF\u5F20\u56FE\u7247\u6309Y\u8F74\u65CB\u8F6C\u7684\u89D2\u5EA6
    var deg = Math.floor(360 / len);
    for (var i = 0; i < len; i++) {
      images[i].style =
        'transform : rotateY(' + deg * i + 'deg) translateZ(35vh)';
    }

    var x = 0;
    var timers = [];

    function play() {
      var timer = setInterval(function() {
        photosDom.style.transform =
          'rotateX(-5deg) rotateY(' + x++ * 0.2 + 'deg)';
      }, 30);
      timers.push(timer);
    }

    function stop() {
      timers.forEach(function(t) {
        clearInterval(t);
      });
    }
    play();
  <\/script>
</html>
\`\`\`

\u539F\u6587\u6559\u7A0B\u5730\u5740\uFF1A

> \u4F5C\u8005\uFF1A \u527D\u608D\u4E00\u5C0F\u5154  
> \u94FE\u63A5\uFF1Ahttp://www.imooc.com/article/22632  
> \u6765\u6E90\uFF1A\u6155\u8BFE\u7F51
`}}]);
