"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[4681],{58578:function(o,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u56FE\u7247

\`\`\`html
<!-- \u57FA\u672C\u56FE\u7247\u5D4C\u5165 -->
<img src="image.jpg" alt="\u56FE\u7247\u63CF\u8FF0" width="800" height="600" />

<!-- \u4F7F\u7528loading="lazy"\u5C5E\u6027\uFF0C\u5141\u8BB8\u6D4F\u89C8\u5668\u5EF6\u8FDF\u52A0\u8F7D\u5C4F\u5E55\u5916\u7684\u56FE\u50CF -->
<img src="image.jpg" alt="\u56FE\u7247\u63CF\u8FF0" width="800" height="600" loading="lazy" />

<!-- \u54CD\u5E94\u5F0F\u56FE\u7247\uFF08\u6839\u636E\u8BBE\u5907\u50CF\u7D20\u5BC6\u5EA6\u9009\u62E9\uFF09 -->
<img src="image.jpg" srcset="image-1x.jpg 1x, image-2x.jpg 2x, image-3x.jpg 3x" alt="\u56FE\u7247\u63CF\u8FF0" />

<!-- \u54CD\u5E94\u5F0F\u56FE\u7247\uFF08\u6839\u636E\u89C6\u53E3\u5BBD\u5EA6\u9009\u62E9\uFF09 -->
<img
  src="small.jpg"
  srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 400px, 800px"
  alt="\u56FE\u7247\u63CF\u8FF0"
/>

<!-- \u73B0\u4EE3\u56FE\u7247\u683C\u5F0F\u9009\u62E9 -->
<picture>
  <source type="image/avif" srcset="photo.avif" />
  <source type="image/webp" srcset="photo.webp" />
  <img src="photo.jpg" alt="\u73B0\u4EE3\u56FE\u7247\u683C\u5F0F\u793A\u4F8B" />
</picture>
\`\`\`

## \u97F3\u9891

\`\`\`html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  <source src="audio.wav" type="audio/wav" />
  \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u97F3\u9891\u64AD\u653E\u3002
</audio>
\`\`\`

## \u89C6\u9891

\`\`\`html
<video controls width="800" poster="video-poster.jpg">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u89C6\u9891\u64AD\u653E\u3002
  <track kind="captions" src="captions.vtt" srclang="en" label="English" />
</video>
\`\`\`

## iframe

\`\`\`js
var iframe = document.createElement('iframe');
iframe.src = 'https://chenqiuling.github.io/frontend-notes-viewer';

if (iframe.attachEvent) {
  // attachEvent\u5728IE9\u4EE5\u4E0B\u7684\u7248\u672C\u4E2D\u53D7\u5230\u652F\u6301
  iframe.attachEvent('onload', function() {
    console.log('Local iframe is now loaded.');
  });
} else {
  iframe.onload = function() {
    console.log('Local iframe is now loaded.');
  };
}

document.body.appendChild(iframe);

// \u5224\u65AD\u9875\u9762\u662F\u5426\u88AB\u5D4C\u5165 iframe \u91CC\u9762
console.log(window.self === window.top); // \u5982\u679C\u8FD4\u56DEfalse \u2013> \u5219\u9875\u9762\u88AB\u5D4C\u5957\u5728iframe\u4E2D
\`\`\`
`}}]);
