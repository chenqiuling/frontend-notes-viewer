"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[942],{72420:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

sleep \u51FD\u6570\u6307\u53EF\u4EE5\u4F7F\u8BA1\u7B97\u673A\u7A0B\u5E8F\u8FDB\u5165\u4E00\u6BB5\u65F6\u95F4\u7684\u4F11\u7720\u72B6\u6001\u7684\u51FD\u6570\u3002

## \u5B9E\u73B0

### Promise+setTimeout

\`\`\`js
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// \u63A8\u8350\uFF0C\u53EF\u4EE5\u907F\u514D\u5D4C\u5957\u5199\u6CD5
async function demo() {
  console.log('do start', new Date());
  await sleep(1000);
  console.log('do first', new Date());
  await sleep(2000);
  console.log('do twice', new Date());
}

// \u6216\u8005
function demo() {
  console.log('do start', new Date());
  sleep(1000).then(function() {
    console.log('do first', new Date());
    sleep(2000).then(function() {
      console.log('do twice', new Date());
    });
  });
}

demo();
\`\`\`

### \u56DE\u8C03\u51FD\u6570+setTimeout

\`\`\`js
function sleep(time, callback) {
  setTimeout(callback, time);
}

function demo() {
  console.log('do start', new Date());
  sleep(1000, function() {
    console.log('do first', new Date());
    sleep(2000, function() {
      console.log('do twice', new Date());
    });
  });
}

demo();
\`\`\`

### ES6 Generator \u51FD\u6570

\`\`\`js
function sleep(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
}

function* sleepGenerator() {
  console.log('do start', new Date());
  yield sleep(1000);
  console.log('do first', new Date());
  yield sleep(2000);
  console.log('do twice', new Date());
}

var run = sleepGenerator();
run.next().value.then(function() {
  run.next().value.then(function() {
    run.next();
  });
});
\`\`\`

## \u573A\u666F

1. \u6A21\u62DF\u5EF6\u8FDF/\u9650\u6D41

- \u9650\u5236\u9AD8\u9891\u64CD\u4F5C\uFF0C\u5982\u6309\u94AE\u91CD\u590D\u70B9\u51FB

\`\`\`js
async function handleClick() {
  await sleep(1000); // 1 \u79D2\u5185\u7981\u6B62\u91CD\u590D\u64CD\u4F5C
  // \u6267\u884C\u6838\u5FC3\u903B\u8F91
}
\`\`\`

2. \u8F6E\u8BE2\u64CD\u4F5C

- \u5B9A\u671F\u68C0\u67E5\u4EFB\u52A1\u72B6\u6001

\`\`\`js
async function waitForCompletion() {
  while (!isTaskDone) {
    await sleep(5000); // \u6BCF 5 \u79D2\u68C0\u67E5\u4E00\u6B21
    checkStatus();
  }
}
\`\`\`

3. \u52A8\u753B

- \u5B9E\u73B0\u5206\u6B65\u52A8\u753B\u6548\u679C\uFF0C\u5982\u6587\u5B57\u9010\u5B57\u663E\u793A

\`\`\`js
async function typewriter(text) {
  for (const char of text) {
    document.getElementsByTagName('body')[0].textContent += char;
    await sleep(100); // \u6BCF\u4E2A\u5B57\u7B26\u95F4\u9694 0.1 \u79D2
  }
}

typewriter(
  'padStart() \u65B9\u6CD5\u7528\u53E6\u4E00\u4E2A\u5B57\u7B26\u4E32\u586B\u5145\u5F53\u524D\u5B57\u7B26\u4E32\uFF08\u5982\u679C\u9700\u8981\u4F1A\u91CD\u590D\u586B\u5145\uFF09\uFF0C\u76F4\u5230\u8FBE\u5230\u7ED9\u5B9A\u7684\u957F\u5EA6\u3002\u586B\u5145\u662F\u4ECE\u5F53\u524D\u5B57\u7B26\u4E32\u7684\u5F00\u5934\u5F00\u59CB\u7684\u3002',
);
\`\`\`
`}}]);
