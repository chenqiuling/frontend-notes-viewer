"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[8702],{49728:function(e,n,r){r.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## [Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

### \u6570\u7EC4\u7684\u65B9\u6CD5

func(start, end)\u683C\u5F0F\u7684\uFF0C\u57FA\u672C\u90FD\u662F\u5305\u62EC start\uFF0C\u4E0D\u5305\u62EC end\uFF0Cstart \u9ED8\u8BA4\u4E3A 0\uFF0Cend \u9ED8\u8BA4\u4E3A\u6570\u7EC4\u957F\u5EA6\u3002start\uFF0Cend \u53EF\u4EE5\u7F3A\u7701\u3002

const arr = [1, 2, 3];

| \u65B9\u6CD5                      | \u5E38\u89C1\u7528\u6CD5                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| \u8FD4\u56DE\u65B0\u6570\u7EC4\uFF0C\u6D45\u62F7\u8D1D        | \u4E0D\u6539\u53D8\u539F\u6570\u7EC4                                                                               |
| from()                    | \`Array.from(arr, (x) => x + x);\` // [2, 4, 6]                                              |
| of()                      | \`Array.of('foo', 2, 'bar', true);\` // ['foo', 2, 'bar', true]                               |
| map()                     | \`arr.map((ele, index) => ele + 1);\` // [2, 3, 4]                                             |
| filter()                  | \`arr.filter((ele, index) => ele > 1);\` // [2, 3]                                             |
| slice()                   | \`arr.slice(0, 1);\` // [1]                                                                    |
| concat()                  | \`arr.concat(arr1, arr2, ...); \`                                                              |
| flat()                    | \`arr.flat(depth);\` // depth \u9ED8\u8BA4\u4E3A 1\uFF0C\u8868\u793A\u62C9\u5E73\u7684\u5C42\u6570                                         |
| flatMap()                 | \`arr.flatMap((ele) => ele === 1 ? [1, 1] : ele);\` // [1, 1, 2, 3]                            |
| \u8FD4\u56DE\u5E03\u5C14\u503C                |
| isArray()                 | \`Array.isArray(arr);\` // true                                                                |
| every()                   | \`arr.every((ele, index) => ele > 1);\` // false                                               |
| some()                    | \`arr.some((ele, index) => ele > 1);\` // true                                                 |
| includes()                | \`arr.includes(2);\` // true                                                                   |
| \u8FD4\u56DE\u5B57\u7B26\u4E32                |
| join()                    | \`arr.join('\u3001');\` // '1\u30012\u30013'                                                               |
| toLocaleString()          | \`arr.toLocaleString(locales, opts);\` // '1,2,3'                                               |
| toString()                | \`arr.toString();\` // '1,2,3'                                                                  |
| \u8FD4\u56DE\u7D22\u5F15 \u6216 -1            |
| findIndex()               | \`arr.findIndex((ele, index) => ele > 1);\` // 1                                               |
| findLastIndex()           | \`arr.findLastIndex((ele, index) => ele > 1);\` // 2                                           |
| indexOf()                 | \`arr.indexOf(1);\` // 0                                                                       |
| lastIndexOf()             | \`arr.lastIndexOf(1);\` // 0                                                                   |
| \u8FD4\u56DE\u5143\u7D20 \u6216 undefined     |
| at()                      | \`arr.at();\` // 3                                                                             |
| find()                    | \`arr.find((ele, index) => ele > 1);\` // 2                                                    |
| findLast()                | \`arr.findLast((ele, index) => ele > 1);\` // 3                                                |
| \u8FD4\u56DE\u6570\u7EC4\u957F\u5EA6              | \u4F1A\u6539\u53D8\u539F\u6570\u7EC4                                                                               |
| push()                    | \`arr.push(-1, 0);\` // 5, arr-> [1, 2, 3, -1, 0]                                              |
| unshift()                 | \`arr.unshift(-1, 0);\` // 5, arr-> [-1, 0, 1, 2, 3]                                           |
| \u8FD4\u56DE\u88AB\u5220\u5143\u7D20 \u6216 undefined | \u4F1A\u6539\u53D8\u539F\u6570\u7EC4                                                                               |
| pop()                     | \`arr.pop();\` // 3, arr-> [1, 2]                                                              |
| shift()                   | \`arr.shift();\` // 1, arr-> [2, 3]                                                            |
| \u8FD4\u56DE\u6570\u7EC4                  | \u4F1A\u6539\u53D8\u539F\u6570\u7EC4                                                                               |
| splice()                  | \`arr.splice(start, deleteCount, addEle1, addEle2, ...);\`                                     |
| \u8FD4\u56DE\u6570\u7EC4                  | \u4F1A\u6539\u53D8\u539F\u6570\u7EC4\uFF0C\u4F46\u4E0D\u6539\u53D8\u957F\u5EA6                                                                 |
| copyWithin()              | \`arr.copyWithin(target, start, end);\`                                                        |
| fill()                    | \`arr.fill(value, start, end);\`                                                               |
| \u8FD4\u56DE\u6570\u7EC4                  | \u4F1A\u6539\u53D8\u539F\u6570\u7EC4\u987A\u5E8F                                                                           |
| sort()                    | \`arr.sort()\u3001arr.sort((a, b) => b - a);\`                                                     |
| reverse()                 | \`arr.reverse();\` // [3, 2, 1]                                                                |
| \u8FD4\u56DE\u65B0\u7684\u6570\u7EC4\u8FED\u4EE3\u5668        |
| entries()                 | \`arr.entries();\` // \u904D\u5386-> [0, 1], [1, 2], [2, 3]                                             |
| keys()                    | \`arr.keys();\` // \u904D\u5386->0, 1, 2                                                               |
| values()                  | \`arr.values();\` // \u904D\u5386->1, 2, 3                                                             |
| \u8FD4\u56DE\u7C7B\u578B\u4E0E\u521D\u59CB\u503C\u7C7B\u578B\u6709\u5173  |
| reduce()                  | \`arr.reduce((acc, cur)=> acc + cur, 0);\` // \u4ECE\u5DE6\u81F3\u53F3\u30026                                      |
| reduceRight()             | \`[[1, 2], [2, 3]].reduceRight((acc, cur) => acc.concat(cur), []);\` // \u4ECE\u53F3\u81F3\u5DE6\u3002[2, 3, 1, 2] |
| \u6CA1\u6709\u8FD4\u56DE\u503C                |
| forEach()                 | \`arr.forEach((ele, index) => console.log(ele));\` // 1, 2, 3                                  |

### \u6570\u7EC4\u7684\u521B\u5EFA

#### \u521B\u5EFA\u503C 0-99\u3001\u957F\u5EA6 100 \u7684\u6570\u7EC4

> arr.keys() \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u7D22\u5F15\u952E\u7684 Array Iterator \u5BF9\u8C61\u3002

\`\`\`js
[...new Array(100).keys()];
\`\`\`

#### \u521B\u5EFA\u503C\u5747\u4E3A''\u3001\u957F\u5EA6 100 \u7684\u6570\u7EC4

> arr.fill(value[, start[, end]])

\`\`\`js
new Array(100).fill('');
\`\`\`

> Array.from(arrayLike[, mapFn[, thisArg]])

\`\`\`js
Array.from({ length: 100 }).fill('');
\`\`\`

#### \u6570\u7EC4\u5BF9\u8C61\u6309\u67D0\u4E2A\u5C5E\u6027\u7684\u6307\u5B9A\u987A\u5E8F\u6392\u5E8F

> arr.sort([compareFunction])

\`\`\`js
function getOrderMenu(menus, keys, attr) {
  var newMenus = menus.sort((a, b) => keys.indexOf(a[attr]) - keys.indexOf(b[attr]));
  return newMenus;
}

var keys = ['\u9996\u9875', '\u5546\u54C1\u7BA1\u7406', '\u7528\u6237\u7BA1\u7406', '\u6743\u9650\u7BA1\u7406'];
var menus = [
  { router: '/', name: '\u9996\u9875' },
  { router: '/permission-manage', name: '\u6743\u9650\u7BA1\u7406' },
  { router: '/user-manage', name: '\u7528\u6237\u7BA1\u7406' },
  { router: '/product-manage', name: '\u5546\u54C1\u7BA1\u7406' },
];
getOrderMenu(menus, keys, 'name');
\`\`\`

### \u6570\u7EC4\u7684\u62C6\u5206

\u6309 N \u4E2A\u5143\u7D20\u4E00\u7EC4\u8FDB\u884C\u62C6\u5206

\`\`\`js
function splitArray(array, n) {
  const newArr = [];
  for (var i = 0; i < array.length; i += n) {
    newArr.push(array.slice(i, i + n));
  }
  return newArr;
}
\`\`\`

### \u6570\u7EC4\u53BB\u91CD

\`\`\`js
Array.from(new Set(arr));
// \u6216
[...new Set(arr)];
\`\`\`

\`\`\`js
var arr = [1, 2, 2, 3, 2];
arr.filter((v, i) => arr.indexOf(v) === i);
\`\`\`

\`\`\`js
function uniqueArray(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
uniqueArray([1, 2, 2, 3, 2]);
\`\`\`

### \u7D2F\u8BA1\u5668

\u8BA1\u7B97 1+2+3+\u2026\u2026+100 \u7684\u503C

> arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

\`\`\`js
[...new Array(101).keys()].reduce((a, b) => a + b); // 5050
\`\`\`

## [Infinity](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity)

\u221E \u4EE3\u8868\u65E0\u7A77\u5927

\`\`\`js
console.log(1 / 0); // Expected output: Infinity
\`\`\`

## [Intl](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl)

> Intl \u5BF9\u8C61\u662F JavaScript \u7684\u56FD\u9645\u5316 API \u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5185\u7F6E\u7684\u683C\u5F0F\u5316\u65E5\u671F\u3001\u65F6\u95F4\u3001\u6570\u5B57\u548C\u8D27\u5E01\u7684\u65B9\u6CD5\u3002

### \u8D27\u5E01\u7B26+\u5343\u5206\u4F4D\u5206\u5272

\`\`\`js
const amount = 654321.987;
const options = { style: 'currency', currency: 'USD' };
const numberFormat = new Intl.NumberFormat('en-US', options);
console.log(numberFormat.format(amount));
// Expected output: "$654,321.99"
\`\`\`

### \u683C\u5F0F\u5316\u65E5\u671F

\`\`\`js
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
console.log(new Intl.DateTimeFormat('en-US').format(date));
// Expected output: "12/20/2020"
\`\`\`

\u3010\u517C\u5BB9\u95EE\u9898\uFF01\uFF01\u3011\u76EE\u524D\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B89\u5353\u7248\u4E0D\u652F\u6301 Intl \u5BF9\u8C61\uFF0C\u4F1A\u62A5\u9519 Intl is not defined\uFF0C\u5BFC\u81F4\u9875\u9762\u767D\u5C4F\u3002

## [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### \u5343\u5206\u4F4D\u5206\u5272

\`\`\`js
// input: 9999.99  output: "9,999.99"
Number(number).toLocaleString();
Number(number).toLocaleString('en-US');
Number(number).toLocaleString('zh-CN');

// input: 9999.994  output: "\xA59,999.99"
Number(number).toLocaleString('zh-CN', {
  style: 'currency', // \u6570\u5B57\u524D\u4F1A\u52A0\u4E0A\u8D27\u5E01\u7B26\u53F7
  currency: 'CNY', // \u53D6\u503C\u53C2\u8003 https://www.iban.hk/currency-codes
  minimumFractionDigits: 2, // \u6700\u5C11\u51E0\u4F4D\u5C0F\u6570\uFF0C\u4E0D\u8DB3\u4F1A\u88650
  maximumFractionDigits: 2, // \u6700\u591A\u51E0\u4F4D\u5C0F\u6570\uFF0C\u8D85\u51FA\u4F1A\u56DB\u820D\u4E94\u5165
});
\`\`\`

\u3010\u517C\u5BB9\u95EE\u9898\u3011\u76EE\u524D\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B89\u5353\u7AEF\u4E0D\u652F\u6301 Number().toLocaleString() \u505A\u6570\u5B57\u5206\u5272\uFF0C\u4E0D\u4F1A\u62A5\u9519\uFF0C\u4F46\u4E5F\u6CA1\u6709\u9884\u671F\u6548\u679C\u3002

## [String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)

- \u8FD4\u56DE\u5B57\u7B26\uFF08\u627E\u4E0D\u5230\u8FD4\u56DE undefined\uFF09\uFF1A

  at()

- \u8FD4\u56DE\u5B57\u7B26\uFF08\u627E\u4E0D\u5230\u8FD4\u56DE \u7A7A\u5B57\u7B26\u4E32\uFF09\uFF1A

  charAt()

- \u8FD4\u56DE ASCII \u5B57\u7B26\u7F16\u7801\uFF08\u627E\u4E0D\u5230\u8FD4\u56DE NaN\uFF09\uFF1A

  charCodeAt()\u3001codePointAt()

- \u8FD4\u56DE\u65B0\u5B57\u7B26\u4E32\uFF1A

  concat()\u3001fromCharCode()\u3001fromCodePoint()\u3001slice()\u3001substring()\u3001toLocaleLowerCase()\u3001toLocaleUpperCase()\u3001toLowerCase()\u3001toUpperCase()\u3001toString()\u3001trim()\u3001trimEnd()\u3001trimStart()\u3001valueOf()

- \u8FD4\u56DE\u5E03\u5C14\u503C\uFF1A

  endsWith()\u3001includes()\u3001startsWith()

- \u8FD4\u56DE\u7D22\u5F15\uFF08\u627E\u4E0D\u5230\u8FD4\u56DE -1\uFF09\uFF1A

  indexOf()\u3001lastIndexOf()

- \u8FD4\u56DE\u6570\u7EC4\uFF1A

  split()

\u5B9E\u73B0\u4E00\u4E2A trim()\u65B9\u6CD5

\`\`\`js
function trimFunc(str) {
  return str.replace(/(^\\s+)|(\\s+$)/g, '');
}
\`\`\`

### \u67E5\u627E\u5B57\u7B26\u4E32\u4E2D\u7B2C n \u6B21\u51FA\u73B0\u6307\u5B9A\u503C\u7684\u7D22\u5F15

> str.indexOf(searchValue [, fromIndex])

\`\`\`js
function findIndex(str, searchVal, count) {
  var index = str.indexOf(searchVal);
  for (var i = 1; i < count; i++) {
    index = str.indexOf(searchVal, index + 1);
  }
  return index;
}

findIndex('hello world', 'o', 2); // 7
\`\`\`

### \u8FD4\u56DE\u5B57\u7B26\u7684 Unicode \u503C

> str.charCodeAt(index) index \u9ED8\u8BA4 0

### replace

> str.replace(regexp|substr, newSubStr|function)

\u5F53\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u51FD\u6570\u65F6\uFF0C\u63A5\u6536\u7684\u53C2\u6570\u4F9D\u6B21\u4E3A\uFF1A

match \u5339\u914D\u7684\u5B50\u4E32\uFF1B

p1,p2, ... \u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A RegExp \u5BF9\u8C61\uFF0C\u5219\u4EE3\u8868\u7B2C n \u4E2A\u62EC\u53F7\u5339\u914D\u7684\u5B57\u7B26\u4E32\uFF1B

offset \u5339\u914D\u5230\u7684\u5B50\u5B57\u7B26\u4E32\u5728\u539F\u5B57\u7B26\u4E32\u4E2D\u7684\u504F\u79FB\u91CF\uFF1B

string \u88AB\u5339\u914D\u7684\u539F\u5B57\u7B26\u4E32\uFF1B

NamedCaptureGroup \u547D\u540D\u6355\u83B7\u7EC4\u5339\u914D\u7684\u5BF9\u8C61\u3002

\`\`\`js
'rgb(255,255,255)'.replace(/^rgb\\((\\d+),\\s*(\\d+),\\s*(\\d+)\\)$/gi, function(m, r, g, b) {
  console.log(m, r, g, b); // rgb(255,255,255) 255 255 255
});
\`\`\`

### \u5343\u5206\u4F4D\u5206\u5272

\`\`\`js
number.toString().replace(/\\B(?=(\\d{3})+\\b)/g, ',');
\`\`\`

**\u517C\u5BB9\u95EE\u9898\uFF01\uFF01** \u4F4E\u7248\u672C ios\uFF08<=16.x\uFF09\u4E0D\u652F\u6301\u96F6\u5BBD\u65AD\u8A00 ?=\u3001?<= ...\u62A5\u9519\uFF1ASyntaxError: Invalid regular expression: invalid group specifier name\uFF0C\u4F1A\u5BFC\u81F4\u9875\u9762\u767D\u5C4F
`}}]);
