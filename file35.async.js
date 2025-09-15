"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[1960],{43678:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u53D8\u91CF

| \u5173\u952E\u5B57  | \u4F5C\u7528\u57DF | \u91CD\u590D\u58F0\u660E | \u63D0\u5347 | \u521D\u59CB\u503C    |
| ------- | ------ | -------- | ---- | --------- |
| \`var\`   | \u51FD\u6570\u7EA7 | \u5141\u8BB8     | \u662F   | undefined |
| \`let\`   | \u5757\u7EA7   | \u4E0D\u5141\u8BB8   | \u5426   | \u672A\u521D\u59CB\u5316  |
| \`const\` | \u5757\u7EA7   | \u4E0D\u5141\u8BB8   | \u5426   | \u5FC5\u987B\u8D4B\u503C  |

\u53D8\u91CF\u63D0\u5347\uFF1A\u51FD\u6570\u58F0\u660E\u548C\u53D8\u91CF\u58F0\u660E\u603B\u662F\u4F1A\u88AB\u89E3\u91CA\u5668\u6084\u6084\u5730\u88AB"\u63D0\u5347"\u5230\u65B9\u6CD5\u4F53\u7684\u6700\u9876\u90E8\u3002

\u53D8\u91CF\u63D0\u5347\u7684\u7ED3\u679C\uFF1A\u53D8\u91CF\u53EF\u4EE5\u5728\u4F7F\u7528\u540E\u58F0\u660E\uFF0C\u4E5F\u5C31\u662F\u53D8\u91CF\u53EF\u4EE5\u5148\u4F7F\u7528\u518D\u58F0\u660E\u3002

\u53EA\u6709\u58F0\u660E\u7684\u53D8\u91CF\u4F1A\u63D0\u5347\uFF0C\u521D\u59CB\u5316\u7684\u4E0D\u4F1A\u3002

## \u4F5C\u7528\u57DF

- \u5168\u5C40\u4F5C\u7528\u57DF\uFF1A\u5728\u51FD\u6570\u5916\u90E8\u58F0\u660E
- \u51FD\u6570\u4F5C\u7528\u57DF\uFF1Avar \u58F0\u660E\u7684\u53D8\u91CF
- \u5757\u7EA7\u4F5C\u7528\u57DF\uFF1Alet \u548C const \u58F0\u660E\u7684\u53D8\u91CF

## \u95ED\u5305

\u95ED\u5305\u7B80\u5355\u7406\u89E3\u6210\u201C\u5B9A\u4E49\u5728\u4E00\u4E2A\u51FD\u6570\u5185\u90E8\u7684\u51FD\u6570\u201D\u3002

1. \u4E00\u4E2A\u51FD\u6570\u5B9A\u4E49\u5728\u53E6\u4E00\u4E2A\u51FD\u6570\u7684\u5185\u90E8
2. \u5185\u90E8\u51FD\u6570\u5F15\u7528\u4E86\u5916\u90E8\u51FD\u6570\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF
3. \u5185\u90E8\u51FD\u6570\u88AB\u5BFC\u51FA

### \u95ED\u5305\u7684\u4F5C\u7528\u57DF

js \u4E2D\u4F5C\u7528\u57DF\u5728\u51FD\u6570\u5B9A\u4E49\u65F6\u786E\u5B9A\uFF08\u8BCD\u6CD5\u4F5C\u7528\u57DF\uFF09\uFF0C\u800C\u975E\u6267\u884C\u65F6\uFF08\u52A8\u6001\u4F5C\u7528\u57DF\uFF0C\u5982 bash\uFF09

\u95ED\u5305\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u94FE\u53EF\u5206\u4E3A\u5916\u90E8\u51FD\u6570\u4F5C\u7528\u57DF\u548C\u5168\u5C40\u4F5C\u7528\u57DF\u3002\u5F53\u8BBF\u95EE\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0Cjs \u5F15\u64CE\u4F1A\u6CBF\u7740\u4F5C\u7528\u57DF\u94FE\u5411\u4E0A\u67E5\u627E\u3002

\u95ED\u5305\u4FDD\u7559\u4E86\u5B8C\u6574\u7684\u4F5C\u7528\u57DF\u94FE\uFF0C\u4E14**\u5916\u90E8\u51FD\u6570\u7684\u53D8\u91CF\u59CB\u7EC8\u5B58\u5728\u5185\u5B58\u4E2D**\uFF0C\u4E0D\u4F1A\u88AB\u5783\u573E\u56DE\u6536\u673A\u5236\u56DE\u6536\u3002

\`\`\`js
function outer() {
  var n = 999;
  add = function() {
    n += 1;
  };
  function inner() {
    console.log(n); // \u5F15\u7528\u5916\u90E8\u53D8\u91CF
  }
  return inner; // \u5BFC\u51FA\u5185\u90E8\u51FD\u6570
}
var result = outer();
result(); // \u8F93\u51FA: 999
add();
result(); // \u8F93\u51FA: 1000
add(); // \u7531\u4E8E n \u4E00\u76F4\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u6240\u4EE5\u662Fn = 1000+1
result(); // \u8F93\u51FA: 1001
\`\`\`

### \u95ED\u5305\u7684\u5E94\u7528\u573A\u666F

1. \u6570\u636E\u5C01\u88C5

\`\`\`js
function addCounter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      return count;
    },
    getCount: function() {
      return count;
    },
  };
}
const counter = addCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount()); // 1
\`\`\`

2. \u51FD\u6570\u5DE5\u5382

\`\`\`js
function powerFactory(exponent) {
  return function(base) {
    return Math.pow(base, exponent);
  };
}

const square = powerFactory(2);
const cube = powerFactory(3);

console.log(square(3)); // 9 \u6216\u8005powerFactory(2)(3)
console.log(cube(3)); // 27
\`\`\`

3. \u6A21\u5757\u6A21\u5F0F

\`\`\`js
const testModule = (function() {
  const _variable = 'This is a private variable';

  function privateMethod() {
    console.log(_variable);
  }

  return {
    publicMethod: function() {
      privateMethod();
    },
  };
})();

testModule.publicMethod(); // This is a private variable
\`\`\`

4. \u56DE\u8C03\u51FD\u6570\u4E0E\u4E8B\u4EF6\u5904\u7406

\`\`\`js
function onClick(btnId) {
  const btnEle = document.getElementById(btnId);
  let clickCount = 0;

  btnEle.addEventListener('click', function() {
    clickCount++;
  });
}
\`\`\`

### \u95ED\u5305\u7684\u4F18\u70B9

1. \u5C01\u88C5\u79C1\u6709\u6570\u636E\uFF0C\u907F\u514D\u5168\u5C40\u6C61\u67D3
2. \u7EF4\u6301\u51FD\u6570\u8C03\u7528\u95F4\u7684\u72B6\u6001\uFF0C\u5982\u8BA1\u6570\u5668
3. \u5B9E\u73B0\u6A21\u5757\u5316\u5F00\u53D1\uFF0C\u521B\u5EFA\u9694\u79BB\u7684\u4F5C\u7528\u57DF
4. \u5C01\u88C5\u9AD8\u9636\u51FD\u6570\u3001\u67EF\u91CC\u5316

### \u95ED\u5305\u7684\u7F3A\u70B9

1. \u5916\u90E8\u51FD\u6570\u53D8\u91CF\u65E0\u6CD5\u91CA\u653E\uFF0C\u5BFC\u81F4\u5185\u5B58\u6CC4\u6F0F

   \u89E3\u51B3\u65B9\u6CD5\uFF1A

   - \u4E0D\u518D\u4F7F\u7528\u7684\u95ED\u5305\u8BBE\u4E3A null
   - \u907F\u514D\u521B\u5EFA\u4E0D\u5FC5\u8981\u7684\u95ED\u5305
   - \u6A21\u5757\u4E2D\u63D0\u4F9B\u6E05\u7406\u65B9\u6CD5\u91CA\u653E\u8D44\u6E90
   - \u4F7F\u7528\u4E8B\u4EF6\u59D4\u6258\u51CF\u5C11\u4E8B\u4EF6\u5904\u7406\u95ED\u5305

\u89E3\u51B3\u95ED\u5305\u5185\u5B58\u6CC4\u6F0F\uFF0C\u4F7F\u7528 WeakMap \u66FF\u4EE3 Map \u5B58\u50A8\u5173\u8054\u5BF9\u8C61\uFF1A

\`\`\`js
// \u4F7F\u7528Map\u7684\u60C5\u51B5\uFF08\u5B58\u5728\u5185\u5B58\u6CC4\u6F0F\u98CE\u9669\uFF09
function createCacheWithMap() {
  const cache = new Map();

  return {
    set(key, value) {
      const wrapper = { value };
      cache.set(key, wrapper);

      // \u95ED\u5305\u6355\u83B7wrapper\uFF0C\u5373\u4F7Fkey\u88AB\u5220\u9664\uFF0Cwrapper\u4E5F\u65E0\u6CD5\u88AB\u5783\u573E\u56DE\u6536
      return () => wrapper.value;
    },
    delete(key) {
      cache.delete(key);
    },
  };
}

// \u4F7F\u7528WeakMap\u7684\u60C5\u51B5\uFF08\u907F\u514D\u5185\u5B58\u6CC4\u6F0F\uFF09
function createCacheWithWeakMap() {
  const cache = new WeakMap();

  return {
    set(key, value) {
      const wrapper = { value };
      cache.set(key, wrapper);

      // WeakMap\u7684\u952E\u662F\u5F31\u5F15\u7528\uFF0Ckey\u88AB\u5220\u9664\u540E\uFF0Cwrapper\u53EF\u88AB\u5783\u573E\u56DE\u6536
      return () => cache.get(key)?.value;
    },
    delete(key) {
      cache.delete(key);
    },
  };
}

const weakCache = createCacheWithWeakMap();
const obj = {};

// \u8BBE\u7F6E\u7F13\u5B58
const getValue = weakCache.set(obj, 'cached value');
console.log(getValue()); // \u8F93\u51FA: cached value

// \u5220\u9664\u539F\u59CB\u5BF9\u8C61\u5F15\u7528
obj = null;

// \u4E00\u6BB5\u65F6\u95F4\u540E\uFF0CWeakMap\u4E2D\u7684\u6761\u76EE\u4F1A\u88AB\u81EA\u52A8\u5783\u573E\u56DE\u6536
\`\`\`

2. \u5FAA\u73AF\u4E2D\u521B\u5EFA\u95ED\u5305\u5BB9\u6613\u5BFC\u81F4\u53D8\u91CF\u5171\u4EAB\uFF0C\u9700\u8981\u4F7F\u7528\u7ACB\u5373\u6267\u884C\u51FD\u6570\u6216 let \u89E3\u51B3

\`\`\`js
// \u7ECF\u5178\u95EE\u9898\u793A\u4F8B
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // \u8F93\u51FA3\u6B213
  }, 100);
}

// \u89E3\u51B3\u65B9\u6848
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => {
      console.log(j); // 0,1,2
    }, 100);
  })(i);
}

// \u89E3\u51B3\u65B9\u6848
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 0,1,2
  }, 100);
}
\`\`\`
`}}]);
