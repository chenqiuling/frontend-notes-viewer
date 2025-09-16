"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[1039],{19502:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## DOM \u64CD\u4F5C

### \`querySelector()\`/\`querySelectorAll()\`

\u83B7\u53D6\u5143\u7D20

\`\`\`js
const header = document.querySelector('#header'); // \u83B7\u53D6\u5355\u4E2A\u5143\u7D20
const buttons = document.querySelectorAll('.btn'); // \u83B7\u53D6\u5143\u7D20\u96C6\u5408
\`\`\`

### \`createElement()\`\u548C\`appendChild()\`

\u52A8\u6001\u521B\u5EFA\u6216\u63D2\u5165\u5143\u7D20

\`\`\`js
const newDiv = document.createElement('div');
newDiv.textContent = '\u52A8\u6001\u521B\u5EFA\u7684\u5185\u5BB9';
document.body.appendChild(newDiv);
\`\`\`

### \`classList\`

\u64CD\u4F5C\u5143\u7D20\u7C7B\u540D

\`\`\`js
const element = document.getElementById('myElement');
element.classList.add('active'); // \u6DFB\u52A0\u7C7B
element.classList.remove('old-class'); // \u79FB\u9664\u7C7B
element.classList.toggle('hidden'); // \u5207\u6362\u7C7B
\`\`\`

## \u4E8B\u4EF6\u5904\u7406

### \`addEventListener()\`\u548C\`removeEventListener()\`

\u7ED1\u5B9A/\u79FB\u9664\u4E8B\u4EF6\u76D1\u542C\u5668

> target.addEventListener(type, listener, options);
> target.addEventListener(type, listener, useCapture);

- options:
  - capture: boolean; // \u6355\u83B7\u9636\u6BB5\u89E6\u53D1
  - once: boolean; // \u53EA\u8C03\u7528\u4E00\u6B21 listener
  - passive: boolean; // \u4E0D\u4F1A\u8C03\u7528 preventDefault()
- useCapture: boolean; // \u9ED8\u8BA4 false\uFF0Ctrue \u4E3A\u6355\u83B7 parent-child | false \u4E3A\u5192\u6CE1 child-parent

\`\`\`js
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    console.log('\u6309\u4E0B\u4E86\u56DE\u8F66\u952E');
  }
});
\`\`\`

1. \u76D1\u542C\u4E8B\u4EF6\u4E0E\u666E\u901A\u4E8B\u4EF6\u7684\u533A\u522B\uFF1A

\u540C\u65F6\u7ED9\u76F8\u540C\u5143\u7D20\u6CE8\u518C\u591A\u4E2A\u666E\u901A\u4E8B\u4EF6\uFF0C\u53EA\u4F1A\u89E6\u53D1\u6700\u540E\u4E00\u6B21\u6CE8\u518C\u7684\u4E8B\u4EF6\uFF1B\u4F46\u76D1\u542C\u4E8B\u4EF6\u90FD\u4F1A\u88AB\u89E6\u53D1\uFF1B

\`\`\`js
var li = ul.children[0];

function func1() {
  console.log('do func1');
}
function func2() {
  console.log('do func2');
}
// li.onclick = func1
// li.onclick = func2
// onclick\u53EA\u4F1A\u89E6\u53D1log("do func2")

li.addEventListener('click', func1);
li.addEventListener('click', func2);
// addEventListener\u4F1A\u89E6\u53D1log("do func1")\u548Clog("do func2")
\`\`\`

2. useCapture \u53D6\u503C\u4E0D\u540C\uFF0C\u6267\u884C\u987A\u5E8F\u4E0D\u540C

\`\`\`js
var ul = document.getElementsByTagName('ul')[0];
var li = ul.children[0];

function func(e) {
  console.log('do func', this.nodeName);
}

// \u6355\u83B7\uFF1A\u4F9D\u6B21\u8F93\u51FA"do func UL"\u3001"do func LI"
ul.addEventListener('click', func, true);
li.addEventListener('click', func, true);

// \u5192\u6CE1\uFF1A\u4F9D\u6B21\u8F93\u51FA"do func LI"\u3001"do func UL"
ul.addEventListener('click', func, false);
li.addEventListener('click', func, false);
\`\`\`

## \u7F51\u7EDC\u8BF7\u6C42

### \`fetch()\`

\u53D1\u8D77 HTTP \u8BF7\u6C42

\`\`\`js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('\u8BF7\u6C42\u5931\u8D25:', error));
\`\`\`

### \`XMLHttpRequest()\`

\u65E7\u7248\u8BF7\u6C42\u65B9\u5F0F

\`\`\`js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.onload = () => console.log(xhr.responseText);
xhr.send();
\`\`\`

## \u6570\u636E\u5B58\u50A8

### \`localStorage\`

\u672C\u5730\u5B58\u50A8\uFF08\u65E0\u8FC7\u671F\u65F6\u95F4\uFF09

\`\`\`js
localStorage.setItem('theme', 'dark'); // \u5B58\u50A8
const theme = localStorage.getItem('theme'); // \u8BFB\u53D6
localStorage.removeItem('theme'); // \u5220\u9664
localStorage.clear(); // \u6E05\u9664\u6240\u6709
\`\`\`

### \`sessionStorage\`

\u4F1A\u8BDD\u7EA7\u5B58\u50A8\uFF08\u5173\u95ED\u6807\u7B7E\u9875\u540E\u6E05\u9664\uFF09

\`\`\`js
sessionStorage.setItem('sessionID', 'abc123');
const sessionID = sessionStorage.getItem('sessionID'); // \u8BFB\u53D6
sessionStorage.removeItem('sessionID'); // \u5220\u9664
sessionStorage.clear(); // \u6E05\u9664\u6240\u6709
\`\`\`

### \`IndexedDB\`

\u5927\u578B\u7ED3\u6784\u5316\u6570\u636E\u5B58\u50A8\uFF08\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF09

\`\`\`js
// \u6253\u5F00\u6570\u636E\u5E93\u5E76\u5B58\u50A8\u5BF9\u8C61
const request = indexedDB.open('myDatabase', 1);
request.onsuccess = event => {
  const db = event.target.result;
  const transaction = db.transaction('storeName', 'readwrite');
  const store = transaction.objectStore('storeName');
  store.add({ id: 1, name: 'Alice' });
};
\`\`\`

## \u8BBE\u5907\u4E0E\u786C\u4EF6

### Geolocation API

\u83B7\u53D6\u7528\u6237\u5730\u7406\u4F4D\u7F6E\uFF0C\u9700\u8981\u7528\u6237\u6388\u6743\uFF0C\u5FC5\u987B\u5728 HTTPS \u6216 localhost \u73AF\u5883\u4E0B\u4F7F\u7528

\`\`\`js
navigator.geolocation.getCurrentPosition(
  position => {
    console.log('\u7EAC\u5EA6:', position.coords.latitude);
    console.log('\u7ECF\u5EA6:', position.coords.longitude);
  },
  error => console.error('\u5B9A\u4F4D\u5931\u8D25:', error),
);
\`\`\`

### DeviceOrientation API

\u8BBF\u95EE\u8BBE\u5907\u65B9\u5411\uFF08\u9640\u87BA\u4EEA\uFF09

\`\`\`js
window.addEventListener('deviceorientation', event => {
  console.log('Alpha\uFF08\u7ED5Z\u8F74\uFF09:', event.alpha);
  console.log('Beta\uFF08\u7ED5X\u8F74\uFF09:', event.beta);
});
\`\`\`

### MediaDevices API

\u8BBF\u95EE\u6444\u50CF\u5934/\u9EA6\u514B\u98CE\uFF0C\u9700\u8981\u7528\u6237\u6388\u6743\uFF0C\u5FC5\u987B\u5728 HTTPS \u6216 localhost \u73AF\u5883\u4E0B\u4F7F\u7528

\`\`\`js
navigator.mediaDevices
  .getUserMedia(
    { video: true, audio: true },
    // \u66F4\u7CBE\u7EC6\u7684\u63A7\u5236
    // {
    //   video: { width: 1280, height: 720, facingMode: 'user' },
    //   audio: { sampleRate: 44100 }
    // }
  )
  .then(stream => {
    const videoElement = document.querySelector('video');
    videoElement.srcObject = stream; // \u76F8\u5F53\u4E8EvideoElement.src = URL.createObjectURL(stream)\uFF09
  })
  .catch(error => {
    console.error('\u83B7\u53D6\u5A92\u4F53\u6D41\u5931\u8D25:', error); // \u53EF\u80FD\u7684\u9519\u8BEF\u539F\u56E0\uFF1A\u7528\u6237\u62D2\u7EDD\u3001\u8BBE\u5907\u4E0D\u53EF\u7528\u7B49
  });
\`\`\`

## \u56FE\u5F62\u4E0E\u591A\u5A92\u4F53

### Canvas API

\u52A8\u6001\u7ED8\u5236 2D \u56FE\u5F62

\`\`\`js
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 100); // \u7ED8\u5236\u7EA2\u8272\u77E9\u5F62
\`\`\`

### Web Audio API

\u5904\u7406\u97F3\u9891

\`\`\`js
const audioCtx = new AudioContext();
// \u521B\u5EFA\u97F3\u9891\u6E90
const oscillator = audioCtx.createOscillator();
// \u6B63\u5F26\u6CE2\uFF08sine\uFF09\u3001square\uFF08\u65B9\u6CE2\uFF09\u3001sawtooth\uFF08\u952F\u9F7F\u6CE2\uFF09\u548Ctrianle\uFF08\u4E09\u89D2\u6CE2\uFF09
oscillator.type = 'sine';
// audioCtx.destination\uFF1A\u7CFB\u7EDF\u7684\u9ED8\u8BA4\u97F3\u9891\u8F93\u51FA\u8BBE\u5907\uFF08\u5982\u626C\u58F0\u5668\uFF09
oscillator.connect(audioCtx.destination);
// \u5F00\u59CB\u751F\u6210\u97F3\u9891\u4FE1\u53F7\u3002\u9ED8\u8BA4\u751F\u6210 440Hz\uFF08A4 \u97F3\u9AD8\uFF0C\u5373\u6807\u51C6\u97F3\uFF09\u7684\u6B63\u5F26\u6CE2
oscillator.start();
// \u57282\u79D2\u540E\u505C\u6B62\u64AD\u653E
oscillator.stop(audioCtx.currentTime + 2);
\`\`\`

## \u5F02\u6B65\u4E0E\u6027\u80FD

### Web Workers

\u5728\u540E\u53F0\u7EBF\u7A0B\u8FD0\u884C\u811A\u6B65

\`\`\`js
// \u4E3B\u7EBF\u7A0B
const worker = new Worker('worker.js');
worker.postMessage('\u5F00\u59CB\u8BA1\u7B97');
worker.onmessage = e => console.log('\u7ED3\u679C:', e.data);

// worker.js
self.onmessage = e => {
  const result = heavyCalculation(); // \u8017\u65F6\u64CD\u4F5C
  self.postMessage(result);
};
\`\`\`

### \`requestAnimationFrame()\`

\u4F18\u5316\u52A8\u753B\u6027\u80FD

\`\`\`js
function animate() {
  element.style.left = (pos += 2) + 'px';
  if (pos < 100) requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
\`\`\`

## \u5176\u4ED6

### Intersection Observer API

\u76D1\u6D4B\u5143\u7D20\u53EF\u89C1\u6027\uFF08\u5982\u7528\u4E8E\u61D2\u52A0\u8F7D\uFF09

\`\`\`html
<img class="lazy-img" data-src="real-image.jpg" src="placeholder.jpg" />
\`\`\`

\`\`\`js
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      // \u662F\u5426\u53EF\u89C1
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        // \u505C\u6B62\u5BF9\u8BE5\u5143\u7D20\u7684\u89C2\u5BDF\uFF0C\u907F\u514D\u91CD\u590D\u52A0\u8F7D
        observer.unobserver(entry.target);
      }
    });
  },
  {
    rootMargin: '200px 0px', // \u89C6\u53E3\u5916200px\u5904\u63D0\u524D\u89E6\u53D1
  },
);
document.querySelectorAll('.lazy-img').forEach(img => {
  observer.observe(img);
});
\`\`\`

### Clipboard API

\u64CD\u4F5C\u526A\u8D34\u677F

\`\`\`js
navigator.clipboard
  .writeText('\u8981\u590D\u5236\u7684\u6587\u672C')
  .then(() => console.log('\u590D\u5236\u6210\u529F'))
  .catch(err => console.error('\u590D\u5236\u5931\u8D25:', err));
\`\`\`

## Drag/Drop API

\u5B9E\u73B0\u62D6\u62FD\u529F\u80FD

\`\`\`html
<div id="draggable" draggable="true">
  \u62D6\u52A8\u6211
</div>

<div id="droptarget">
  \u653E\u7F6E\u533A\u57DF
</div>
\`\`\`

\`\`\`js
const draggable = document.getElementById('draggable');
const droptarget = document.getElementById('droptarget');

// \u8BBE\u7F6E\u62D6\u52A8\u6570\u636E
draggable.addEventListener('dragstart', e => {
  e.dataTransfer.setData('text/plain', '\u8FD9\u662F\u88AB\u62D6\u52A8\u7684\u6570\u636E');
});

// \u62D6\u52A8\u8FC7\u7A0B\u4E2D
draggable.addEventListener('drag', () => {
  // \u53EF\u6DFB\u52A0\u89C6\u89C9\u53CD\u9988\uFF0C\u5982\u6539\u53D8\u900F\u660E\u5EA6
});

// \u8FDB\u5165\u653E\u7F6E\u533A\u57DF
droptarget.addEventListener('dragover', e => {
  e.preventDefault(); // \u5FC5\u987B\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\u624D\u80FD\u653E\u7F6E
});

// \u79BB\u5F00\u653E\u7F6E\u533A\u57DF
droptarget.addEventListener('dragleave', () => {});

// \u653E\u7F6E\u64CD\u4F5C
droptarget.addEventListener('drop', e => {
  e.preventDefault();

  // \u83B7\u53D6\u62D6\u52A8\u6570\u636E
  const data = e.dataTransfer.getData('text/plain');

  // \u66F4\u65B0\u653E\u7F6E\u533A\u57DF\u5185\u5BB9
  droptarget.innerHTML = \`\u5DF2\u653E\u7F6E: \${data}\`;
});
\`\`\`
`}}]);
