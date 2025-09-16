"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[628],{37230:function(o,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u6D45\u62F7\u8D1D

### Object.assign(target, source)

\`\`\`js
var obj = { a: 1 };
var obj1 = obj;

// \u6D45\u62F7\u8D1D\uFF0C\u4E24\u4E2A\u5F15\u7528\u5730\u5740\u6307\u5411\u540C\u4E00\u4E2A\u5F15\u7528\uFF0C\u5C5E\u6027\u503C\u4E92\u76F8\u5F71\u54CD

obj1.a = 2;
console.log(obj); // { a: 2 }
console.log(obj1); // { a: 2 }

var arr = [1, 2, 3, 4, 5];
var arr1 = arr;
arr1[4] = 6;
console.log(arr); // [1, 2, 3, 4, 6]
console.log(arr1); // [1, 2, 3, 4, 6]
\`\`\`

\u4E3A\u4EC0\u4E48\u8BF4 Object.assign \u662F\u6D45\u62F7\u8D1D\uFF1F

\`\`\`js
// \u662F\u6D45\u62F7\u8D1D\uFF0C\u4F46\u4E0D\u662F\u6DF1\u62F7\u8D1D\uFF0C\u53EA\u6709\u7B2C\u4E00\u5C42\u5C5E\u6027\u503C\u4E92\u4E0D\u5F71\u54CD
var obj = { a: 1, b: { c: 1 } };
var obj1 = Object.assign({}, obj);
obj1.a = 2;
obj1.b.c = 2;
console.log(obj); // { a: 1, b: { c: 2} }
console.log(obj1); // { a: 2, b: { c: 2} }

var arr = [1, 2, 3, [4, 5]];
var arr1 = Object.assign([], arr);
arr1[0] = 0;
arr1[3][1] = 6;
console.log(arr); // [1, 2, 3, [4, 6]]
console.log(arr1); // [0, 2, 3, [4, 6]]
\`\`\`

### Array.from()

\`\`\`js
var arr = [1, 2, 3, [4, 5]];
var arr1 = Array.from(arr);
arr1[0] = 0;
arr1[3][1] = 6;
console.log(arr); // [1, 2, 3, [4, 6]]
console.log(arr1); // [0, 2, 3, [4, 6]]
\`\`\`

## \u6DF1\u62F7\u8D1D

### JSON.stringify(obj)

\u5C40\u9650\u6027\uFF1A\u53EA\u9002\u5408\u62F7\u8D1D\u53EA\u5305\u542B\u5B57\u7B26\u4E32\u3001\u6570\u5B57\u3001\u5E03\u5C14\u503C\u3001\u6570\u7EC4\u548C\u666E\u901A\u5BF9\u8C61\u7684\u4E14\u6CA1\u6709\u5FAA\u73AF\u5F15\u7528\u7684\u6570\u636E\u3002

\u7F3A\u70B9\uFF1A

- \u51FD\u6570\u3001undefined \u548C Symbol \u503C\u5728\u5E8F\u5217\u5316\u65F6\u4F1A\u88AB\u5FFD\u7565\uFF08\u5728\u6570\u7EC4\u4E2D\u4F1A\u88AB\u8F6C\u6362\u6210 null\uFF0C\u5728\u5BF9\u8C61\u4E2D\u4F1A\u88AB\u5FFD\u7565\uFF09\u3002
- \u65E5\u671F\u5BF9\u8C61\u4F1A\u88AB\u8F6C\u6362\u6210 ISO \u683C\u5F0F\u7684\u5B57\u7B26\u4E32\uFF08\u4F46\u53CD\u5E8F\u5217\u5316\u540E\u4ECD\u7136\u662F\u5B57\u7B26\u4E32\uFF0C\u800C\u4E0D\u662F\u65E5\u671F\u5BF9\u8C61\uFF09\u3002
- \u6B63\u5219\u8868\u8FBE\u5F0F\u3001Map\u3001Set \u7B49\u7279\u6B8A\u5BF9\u8C61\u5728\u5E8F\u5217\u5316\u540E\u53D8\u6210\u7A7A\u5BF9\u8C61 {}\u3002
- \u5FAA\u73AF\u5F15\u7528\u4F1A\u5BFC\u81F4\u5E8F\u5217\u5316\u5931\u8D25\uFF08\u629B\u51FA TypeError\uFF09\u3002
- NaN\u3001Infinity \u548C -Infinity \u4F1A\u88AB\u8F6C\u6362\u6210 null\u3002
- \u53EA\u80FD\u5E8F\u5217\u5316\u5BF9\u8C61\u7684\u53EF\u679A\u4E3E\u5C5E\u6027\uFF0C\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u4F1A\u88AB\u5FFD\u7565\u3002
- \u539F\u578B\u94FE\u4E22\u5931\uFF0C\u53CD\u5E8F\u5217\u5316\u540E\u5BF9\u8C61\u7684\u539F\u578B\u6307\u5411 Object.prototype\u3002

\`\`\`js
var obj = { a: 1, b: { c: 1 } };
var obj1 = JSON.parse(JSON.stringify(obj));

// \u662F\u6DF1\u62F7\u8D1D\uFF0C\u62F7\u8D1D\u4E0E\u88AB\u62F7\u8D1D\u5BF9\u8C61\u6240\u6709\u5C5E\u6027\u503C\u4E92\u4E0D\u5F71\u54CD

obj1.a = 2;
obj1.b.c = 2;
console.log(obj); // { a: 1, b: { c: 1} }
console.log(obj1); // { a: 2, b: { c: 2} }

var arr = [1, 2, 3, [4, 5]];
var arr1 = JSON.parse(JSON.stringify(arr));
arr1[3][1] = 6;
console.log(arr); // [1, 2, 3, [4, 5]]
console.log(arr1); // [1, 2, 3, [4, 6]]
\`\`\`

### \u5B9E\u73B0\u6DF1\u62F7\u8D1D

\u601D\u8DEF\uFF1A

- \u57FA\u672C\u7C7B\u578B\uFF08number, string, boolean, null, undefined, bigint\uFF09: \u76F4\u63A5\u8FD4\u56DE\u3002
- Symbol: \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Symbol(\u56E0\u4E3A Symbol \u7684\u503C\u662F\u552F\u4E00\u7684)\uFF0C\u4F7F\u7528\u539F Symbol \u7684\u63CF\u8FF0\u3002
- \u6B63\u5219\u8868\u8FBE\u5F0F\uFF1A\u590D\u5236\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5305\u62EC\u5176\u6807\u5FD7\u3002
- \u65E5\u671F\uFF1A\u590D\u5236\u65E5\u671F\u5BF9\u8C61\u3002
- \u51FD\u6570\uFF1A\u76F4\u63A5\u8FD4\u56DE\uFF08\u6216\u8005\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u65B0\u51FD\u6570\uFF0C\u4F46\u901A\u5E38\u6CA1\u5FC5\u8981\uFF0C\u800C\u4E14\u4FDD\u6301\u51FD\u6570\u5F15\u7528\u4E00\u81F4\u53EF\u80FD\u66F4\u91CD\u8981\uFF09\u3002
- \u6570\u7EC4\uFF1A\u521B\u5EFA\u65B0\u6570\u7EC4\uFF0C\u5E76\u9012\u5F52\u62F7\u8D1D\u6BCF\u4E2A\u5143\u7D20\u3002
- \u666E\u901A\u5BF9\u8C61\uFF1A\u521B\u5EFA\u65B0\u5BF9\u8C61\uFF0C\u5E76\u9012\u5F52\u62F7\u8D1D\u6240\u6709\u53EF\u679A\u4E3E\u5C5E\u6027\uFF08\u5305\u62EC Symbol \u5C5E\u6027\uFF09\u3002
- Map\uFF1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Map\uFF0C\u7136\u540E\u904D\u5386\u539F Map\uFF0C\u9012\u5F52\u62F7\u8D1D\u5176\u952E\u548C\u503C\u3002
- Set\uFF1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Set\uFF0C\u7136\u540E\u904D\u5386\u539F Set\uFF0C\u9012\u5F52\u62F7\u8D1D\u5176\u5143\u7D20\u3002
- \u89E3\u51B3\u5FAA\u73AF\u5F15\u7528\u95EE\u9898\uFF1A\u4F7F\u7528\u4E00\u4E2A Map \u6765\u8BB0\u5F55\u5DF2\u7ECF\u62F7\u8D1D\u8FC7\u7684\u5BF9\u8C61\uFF0C\u5982\u679C\u9047\u5230\u76F8\u540C\u7684\u5BF9\u8C61\u5219\u76F4\u63A5\u8FD4\u56DE\u8BE5\u5BF9\u8C61\u7684\u514B\u9686\u3002

\`\`\`js
function deepClone(target, map = new WeakMap()) {
  // \u5904\u7406\u57FA\u672C\u7C7B\u578B\u548C\u51FD\u6570
  if (target === null || typeof target !== 'object') {
    if (typeof target === 'symbol') {
      return Symbol(target.description);
    }
    if (typeof target === 'function') {
      return target;
    }
    return target;
  }

  // \u9632\u6B62\u5FAA\u73AF\u5F15\u7528
  if (map.has(target)) {
    return map.get(target);
  }

  // \u5904\u7406\u6B63\u5219\u8868\u8FBE\u5F0F
  if (target instanceof RegExp) {
    const cloned = new RegExp(target.source, target.flags);
    map.set(target, cloned); // \u5B58\u50A8\u514B\u9686\u5BF9\u8C61\uFF0C\u9632\u6B62\u5FAA\u73AF\u5F15\u7528
    return cloned;
  }

  // \u5904\u7406\u65E5\u671F
  if (target instanceof Date) {
    const cloned = new Date(target.getTime());
    map.set(target, cloned);
    return cloned;
  }

  // \u5904\u7406Map
  if (target instanceof Map) {
    const cloned = new Map();
    map.set(target, cloned);
    target.forEach((value, key) => {
      cloned.set(deepClone(key, map), deepClone(value, map));
    });
    return cloned;
  }

  // \u5904\u7406Set
  if (target instanceof Set) {
    const cloned = new Set();
    map.set(target, cloned);
    target.forEach(value => {
      cloned.add(deepClone(value, map));
    });
    return cloned;
  }

  // \u5904\u7406\u6570\u7EC4\u548C\u666E\u901A\u5BF9\u8C61
  const cloned = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
  map.set(target, cloned);
  const keys = Reflect.ownKeys(target);
  for (const key of keys) {
    cloned[key] = deepClone(target[key], map);
  }

  return cloned;
}
\`\`\`

\u9A8C\u8BC1\uFF1A

\`\`\`js
const obj = {
  num: 123,
  str: 'abc',
  bool: true,
  null: null,
  undef: undefined,
  sym: Symbol('foo'),
  arr: [1, 2, { inner: 'value' }],
  date: new Date(),
  reg: /test/gi,
  map: new Map([['key', { value: 'map value' }]]),
  set: new Set([1, 2, 3]),
  func: function() {
    return 'original';
  },
};

// \u6DFB\u52A0\u5FAA\u73AF\u5F15\u7528
obj.self = obj;
obj.arr.push(obj.arr);

// \u6267\u884C\u6DF1\u62F7\u8D1D
const cloned = deepClone(obj);

// \u9A8C\u8BC1\u7ED3\u679C
console.log(cloned); // \u7ED3\u6784\u76F8\u540C
console.log(cloned.arr !== obj.arr); // true - \u6570\u7EC4\u5DF2\u514B\u9686
console.log(cloned.date.getTime() === obj.date.getTime()); // true - \u65E5\u671F\u503C\u76F8\u540C
console.log(cloned.reg.source === obj.reg.source); // true - \u6B63\u5219\u76F8\u540C
console.log(cloned.map !== obj.map); // true - Map\u5DF2\u514B\u9686
console.log(cloned.map.get('key') !== obj.map.get('key')); // true - Map\u503C\u5DF2\u514B\u9686
console.log(cloned.sym === obj.sym); // false - Symbol\u662F\u65B0\u521B\u5EFA\u7684
console.log(cloned.func() === 'original'); // true - \u51FD\u6570\u529F\u80FD\u76F8\u540C
console.log(cloned.self === cloned); // true - \u5FAA\u73AF\u5F15\u7528\u4FDD\u6301
\`\`\`

## \u3010\u6269\u5C55\u3011\u6DF1\u5EA6\u5408\u5E76

\`\`\`js
function deepMerge(target, ...sources) {
  // \u5982\u679C\u6CA1\u6709\u6E90\u5BF9\u8C61\uFF0C\u76F4\u63A5\u8FD4\u56DE\u76EE\u6807\u5BF9\u8C61
  if (!sources.length) return target;

  // \u521B\u5EFA\u7ED3\u679C\u7684\u526F\u672C
  const output = Array.isArray(target) ? [...target] : { ...target };

  for (const source of sources) {
    if (source === null || typeof source !== 'object') continue;

    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        // \u5904\u7406undefined\u503C
        if (source[key] === undefined) {
          continue;
        }

        // \u5982\u679C\u6E90\u503C\u662F\u6570\u7EC4
        if (Array.isArray(source[key])) {
          if (Array.isArray(output[key])) {
            // \u5408\u5E76\u6570\u7EC4
            output[key] = [...output[key], ...source[key]];
          } else {
            // \u8986\u76D6\u6570\u7EC4
            output[key] = [...source[key]];
          }
        }
        // \u5982\u679C\u6E90\u503C\u662F\u5BF9\u8C61
        else if (source[key] !== null && typeof source[key] === 'object') {
          // \u9012\u5F52\u5408\u5E76
          if (output[key] !== null && typeof output[key] === 'object') {
            output[key] = deepMerge(output[key], source[key]);
          } else {
            output[key] = { ...source[key] };
          }
        }
        // \u539F\u59CB\u503C
        else {
          output[key] = source[key];
        }
      }
    }
  }

  return output;
}
\`\`\`
`}}]);
