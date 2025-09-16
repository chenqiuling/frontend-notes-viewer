"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[1366],{65952:function(r,e,n){n.r(e),e.default=`\u9759\u6001\u65B9\u6CD5\u548C\u5B9E\u4F8B\u65B9\u6CD5\u7684\u533A\u522B\u4E3B\u8981\u4F53\u73B0\u5728\u4E24\u4E2A\u65B9\u9762:

\u5728\u5916\u90E8\u8C03\u7528\u9759\u6001\u65B9\u6CD5\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u201C\u7C7B\u540D.\u65B9\u6CD5\u540D\u201D\u7684\u65B9\u5F0F,\u4E5F\u53EF\u4EE5\u4F7F\u7528\u201C\u5BF9\u8C61\u540D.\u65B9\u6CD5\u540D\u201D\u7684\u65B9\u5F0F\u3002

\u800C\u5B9E\u4F8B\u65B9\u6CD5\u53EA\u6709\u540E\u9762\u8FD9\u79CD\u65B9\u5F0F\u3002

\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8C03\u7528\u9759\u6001\u65B9\u6CD5\u53EF\u4EE5\u65E0\u9700\u521B\u5EFA\u5BF9\u8C61\u3002

\u901A\u8FC7\u8C37\u6B4C\u63A7\u5236\u53F0\u9762\u677F\uFF0C\u5982\u679C\u4F60\u8F93\u5165 window.Promise. \u6216\u8005 Promise. \u63A7\u5236\u53F0\u81EA\u52A8\u7ED9\u51FA\u6765\u7684\u63D0\u793A\u90FD\u662F\u9759\u6001\u65B9\u6CD5\uFF0C\u800C\u8F93\u5165 Promise.prototype. \u63A7\u5236\u53F0\u81EA\u52A8\u7ED9\u51FA\u6765\u7684\u63D0\u793A\u90FD\u662F\u5B9E\u4F8B\u65B9\u6CD5

Promise \u7684\u9759\u6001\u65B9\u6CD5\uFF1A

- all \u6240\u6709\u90FD\u6210\u529F\u65F6\u8FD4\u56DE\u6240\u6709\u7ED3\u679C\uFF0C\u6216\u6709\u4E00\u4E2A\u5931\u8D25\u65F6\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u5931\u8D25\u7684\u7ED3\u679C
- allSettled \u6240\u6709\u90FD\u5B8C\u6210\u8FD4\u56DE\u6240\u6709\u7ED3\u679C
- any \u53EA\u8981\u6709\u4E00\u4E2A\u6210\u529F\u5C31\u8FD4\u56DE\uFF0C\u5426\u5219\u8FD4\u56DE\u9519\u8BEF
- race \u8FD4\u56DE\u7B2C\u4E00\u4E2A\u5B8C\u6210\u7684\u7ED3\u679C
- reject
- resolve

Promise \u5B9E\u4F8B\u7684\u5B9E\u4F8B\u65B9\u6CD5\uFF1A

- then
- catch
- finally

\`\`\`js
const promise1 = new Promise((resolve, reject) => {
  resolve(1);
});
const promise2 = new Promise((resolve, reject) => {
  resolve(2);
});
const promise3 = new Promise((resolve, reject) => {
  reject(3);
});
const promise4 = new Promise((resolve, reject) => {
  reject(4);
});

// \u6240\u6709\u90FD\u6210\u529F\u65F6\u8FD4\u56DE\u6240\u6709\u7ED3\u679C success\uFF1A[1, 2]
Promise.all([promise1, promise2])
  .then(res => {
    console.log('success\uFF1A', res);
  })
  .catch(err => console.log('error\uFF1A', err));

// \u6709\u4E00\u4E2A\u5931\u8D25\u65F6\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u5931\u8D25\u7684\u7ED3\u679C error\uFF1A3
Promise.all([promise2, promise3, promise4])
  .then(res => {
    console.log('success\uFF1A', res);
  })
  .catch(err => console.log('error\uFF1A', err));

// \u6240\u6709\u90FD\u5B8C\u6210\u8FD4\u56DE\u6240\u6709\u7ED3\u679C [{"status": "fulfilled","value": 1},{"status": "rejected","reason": 3}]
Promise.allSettled([promise1, promise3])
  .then(res => {
    console.log('success\uFF1A', res);
  })
  .catch(err => console.log('error\uFF1A', err));

// \u8FD4\u56DE\u7B2C\u4E00\u4E2A\u5B8C\u6210\u7684\u7ED3\u679C success\uFF1A1
Promise.race([promise1, promise3])
  .then(res => {
    console.log('success\uFF1A', res);
  })
  .catch(err => console.log('error\uFF1A', err));

// \u8FD4\u56DE\u7B2C\u4E00\u4E2A\u5B8C\u6210\u7684\u7ED3\u679C error\uFF1A3
Promise.race([promise3, promise4])
  .then(res => {
    console.log('success\uFF1A', res);
  })
  .catch(err => console.log('error\uFF1A', err));

// \u53EA\u8981\u6709\u4E00\u4E2A\u6210\u529F\u5C31\u8FD4\u56DE success\uFF1A1
Promise.any([promise1, promise2, promise3])
  .then(res => {
    console.log('success\uFF1A', res);
  })
  .catch(err => console.log('error\uFF1A', err));

// \u8FD4\u56DE\u9519\u8BEF error\uFF1A AggregateError: All promises were rejected
Promise.any([promise3, promise4])
  .then(res => {
    console.log('success\uFF1A', res);
  })
  .catch(err => console.log('error\uFF1A', err));
\`\`\`

async/await

\`\`\`js
async function func() {
  try {
    const res = await Promise.resolve(1);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
func();
\`\`\`
`}}]);
