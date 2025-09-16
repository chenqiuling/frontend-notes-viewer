"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[1853],{16934:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

ES6\uFF08ECMAScript 2015\uFF09\u662F JavaScript \u8BED\u8A00\u7684\u4E00\u6B21\u91CD\u5927\u66F4\u65B0\uFF0C\u5E76\u4E14\u81EA\u6B64\u4E4B\u540E\u6BCF\u5E74\u90FD\u6709\u65B0\u7684\u7248\u672C\u53D1\u5E03\uFF08ES2016, ES2017, ES2018 \u7B49\uFF09\uFF0C\u7EDF\u79F0\u4E3A ES6+ \u6216 ESNext\u3002

## ES6(ES2015)

\u4E3B\u8981\u65B0\u589E\u4E86\u4EE5\u4E0B\u7279\u6027\uFF1A

### 1. let \u548C const

- \u5757\u7EA7\u4F5C\u7528\u57DF\u53D8\u91CF\u58F0\u660E\u3002\u89E3\u51B3\u4E86 var \u7684\u53D8\u91CF\u63D0\u5347\u548C\u5168\u5C40\u6C61\u67D3\u95EE\u9898\u3002
- const \u7528\u4E8E\u58F0\u660E\u5E38\u91CF\uFF08\u4E0D\u53EF\u91CD\u65B0\u8D4B\u503C\uFF0C\u4F46\u5BF9\u8C61/\u6570\u7EC4\u7684\u5185\u5BB9\u53EF\u4EE5\u4FEE\u6539\uFF09\u3002

### 2. \u7BAD\u5934\u51FD\u6570(=>)

- \`const funcA = (params) => { ... }\` \u6216 \`const funcA = param => expression\`
- \u5982\u7BAD\u5934\u540E\u9762\u6CA1\u6709\u5927\u62EC\u53F7\uFF0C\u53EA\u80FD\u6267\u884C\u4E00\u884C\u64CD\u4F5C\uFF0C\u9ED8\u8BA4\u6267\u884C return \u64CD\u4F5C\uFF1B\u5982\u7BAD\u5934\u540E\u9762\u6709\u5927\u62EC\u53F7\uFF0C\u53EF\u4EE5\u5728\u5927\u62EC\u53F7\u91CC\u5199\u591A\u884C\u64CD\u4F5C\uFF0C\u4F46\u9700\u53E6\u5916\u5199 return \u8BED\u53E5\uFF1B
- \u8BCD\u6CD5\u7ED1\u5B9A this\uFF1A\u7EE7\u627F\u81EA\u5B9A\u4E49\u65F6\u7684\u4E0A\u4E0B\u6587\uFF0C\u4E0D\u518D\u9700\u8981 \`bind(this)\` \u6216 \`that = this\`\uFF1B
- \u7BAD\u5934\u51FD\u6570\u6CA1\u6709 arguments\uFF0C\u9700\u8981\u901A\u8FC7\`...args\`\u83B7\u53D6\u53C2\u6570\u3002

### 3. \u6A21\u677F\u5B57\u7B26\u4E32

- \u4F7F\u7528\u53CD\u5F15\u53F7 (\`) \u6765\u521B\u5EFA\u5B57\u7B26\u4E32\uFF1B
- \u652F\u6301\u591A\u884C\u5B57\u7B26\u4E32\uFF1B
- \u5B57\u7B26\u4E32\u91CC\u53EF\u5305\u542B\u7531\u7F8E\u5143\u7B26\u53F7\u52A0\u82B1\u62EC\u53F7\u5305\u88F9\u7684\u53D8\u91CF\`\${variable}\`\u6216\u8868\u8FBE\u5F0F\`\${expression}\`\u3002

\`\`\`js
const name = 'Linda';
console.log(\`Hello, \${name}.\`); // Hello, Linda.
\`\`\`

#### \u5E26\u6807\u7B7E\u7684\u6A21\u677F\u5B57\u7B26\u4E32

\u7531\u6807\u7B7E\u51FD\u6570\u548C\u88AB\u53CD\u5F15\u53F7 (\`) \u5305\u88F9\u7684\u5B57\u7B26\u4E32\u6784\u6210\u3002

1. \u5B57\u7B26\u4E32\u7684\u56FD\u9645\u5316\u5904\u7406\uFF08i18n\uFF09

\`\`\`js
function i18n(strings, ...values) {
  // \u4ECE\u7FFB\u8BD1\u5B57\u5178\u4E2D\u83B7\u53D6\u5BF9\u5E94\u7684\u7FFB\u8BD1\u5185\u5BB9
  const translation = {
    'Hello, ': '\u4F60\u597D, ',
    '! You are ': '\uFF01\u4F60\u4ECA\u5E74',
    ' years old.': '\u5C81\u4E86\u3002',
  };

  return strings
    .map((str, i) => {
      const translated = translation[str] || str;
      return i < values.length ? translated + values[i] : translated;
    })
    .join('');
}

const name = '\u5F20\u4E09';
const age = 25;
console.log(i18n\`Hello, \${name}! You are \${age} years old.\`); // \u8F93\u51FA: "\u4F60\u597D, \u5F20\u4E09\uFF01\u4F60\u4ECA\u5E7425\u5C81\u4E86\u3002"
\`\`\`

2. HTML \u8F6C\u4E49\uFF08\u9632\u6B62 XSS \u653B\u51FB\uFF09

\`\`\`js
function htmlEscape(strings, ...values) {
  return strings
    .map((str, i) => {
      const escapedValue =
        i < values.length
          ? String(values[i])
              .replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;')
          : '';
      return str + escapedValue;
    })
    .join('');
}

const userInput = '<script>alert("XSS");<\/script>';
console.log(htmlEscape\`<div>\${userInput}</div>\`); // \u8F93\u51FA: "<div>&lt;script&gt;alert(\\"XSS\\");&lt;/script&gt;</div>"
\`\`\`

### 4. \u89E3\u6784\u8D4B\u503C

\u4ECE\u6570\u7EC4\u6216\u5BF9\u8C61\u4E2D\u63D0\u53D6\u503C\u5E76\u8D4B\u7ED9\u53D8\u91CF\u3002

\`\`\`js
// \u6570\u7EC4\u89E3\u6784
const [a, b] = [1, 2]; // a=1, b=2

// \u8D4B\u9ED8\u8BA4\u503C
const [a = 1, b = 2] = [3]; // a=3, b=2

// \u5FFD\u7565\u90E8\u5206\u503C
const [a, , c] = [1, 2, 3]; // a=1, c=3

// \u5BF9\u8C61\u7ED3\u6784
const { a, b } = { a: 1, b: 2 }; // a=1, b=2

// \u522B\u540D\u3001\u8D4B\u9ED8\u8BA4\u503C
const { a: a1, b: b1 = 0 } = { a: 1, b: undefined}; // a1=1, b1=0

// \u51FD\u6570\u53C2\u6570
function greet({ name, age }) { ... }
\`\`\`

### 5. \u51FD\u6570\u53C2\u6570\u9ED8\u8BA4\u503C

\`\`\`js
function abc(a = 1, b = 2) {
  return a + b;
}

abc(); // 3 \u6CA1\u6709\u4F20\u53C2\u6570\uFF0C\u5219\u4F7F\u7528\u9ED8\u8BA4\u503C
abc(3, 4); // 7 \u6709\u4F20\u53C2\u6570\uFF0C\u5219\u4F7F\u7528\u53C2\u6570\u503C
\`\`\`

### 6. \u5269\u4F59\u53C2\u6570

\u4F7F\u7528\`...\`\u5C06\u51FD\u6570\u7684\u591A\u4F59\u53C2\u6570\u6536\u96C6\u5230\u4E00\u4E2A\u6570\u7EC4\u4E2D\u3002

\`\`\`js
function abc(a, b, ...c) {
  console.log(a, b, c);
}

abc(1, 2, 3, 4, 5); // 1, 2, [3, 4, 5]
\`\`\`

\u4E0D\u5B9A\u6570\u76EE\u7684\u53C2\u6570\uFF1A

\`\`\`js
// \u5C06\u6240\u6709\u53C2\u6570\u76F8\u52A0\u7684\u51FD\u6570
function sum(...x) {
  return x.reduce((m, n) => m + n);
}

// \u4F20\u9012\u4EFB\u610F\u4E2A\u6570\u7684\u53C2\u6570
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// \u5728 ES5 \u4E2D\u5982\u679C\u9700\u8981\u4F20\u5165\u6570\u7EC4\u4F5C\u53C2\u6570\uFF0C\u9700\u8981\u4F7F\u7528 apply \u65B9\u6CD5
console.log(sum.apply(null, [1, 2, 3, 4, 5])); // 15
\`\`\`

### 7. \u5C55\u5F00\u8BED\u6CD5

\u4F7F\u7528\`...\`\u5C06\u53EF\u8FED\u4EE3\u5BF9\u8C61\uFF08\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u7B49\uFF09\u5C55\u5F00\u3002

\`\`\`js
const newArr = [...arr1, ...arr2];
const values = [99, 100, -1, 48, 16];
console.log(Math.max(...values)); // 100
\`\`\`

### 8. \u589E\u5F3A\u7684\u5BF9\u8C61\u5B57\u9762\u91CF

- \u5C5E\u6027\u7B80\u5199\uFF1A\`{ name, age }\` \u7B49\u4EF7\u4E8E \`{ name: name, age: age }\`
- \u65B9\u6CD5\u7B80\u5199\uFF1A\`{ sayHello() { ... } }\`\uFF0C\u5B9A\u4E49\u65B9\u6CD5\u53EF\u4EE5\u4E0D\u7528 function \u5173\u952E\u5B57\uFF1B
- \u8BA1\u7B97\u5C5E\u6027\u540D\uFF1A\`{ ['prop' + i]: value }\`

\`\`\`js
//\u901A\u8FC7\u5BF9\u8C61\u5B57\u9762\u91CF\u521B\u5EFA\u5BF9\u8C61
var human = {
  breathe() {
    console.log('breathing...');
  },
};
var worker = {
  __proto__: human, //\u8BBE\u7F6E\u6B64\u5BF9\u8C61\u7684\u539F\u578B\u4E3Ahuman,\u76F8\u5F53\u4E8E\u7EE7\u627Fhuman
  company: 'freelancer',
  work() {
    console.log('working...');
  },
};
human.breathe(); //\u8F93\u51FA \u2018breathing...\u2019
//\u8C03\u7528\u7EE7\u627F\u6765\u7684breathe\u65B9\u6CD5
worker.breathe(); //\u8F93\u51FA \u2018breathing...\u2019
\`\`\`

### 9. \u7C7B(Classes)

- \u57FA\u4E8E\u539F\u578B\u7684\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u7684\u8BED\u6CD5\u7CD6\uFF1B
- \u63D0\u4F9B class\u3001constructor\u3001extends\u3001super\u3001static \u7B49\u5173\u952E\u5B57\u3002

\`\`\`js
// \u7C7B\u7684\u5B9A\u4E49
class Person {
  // ES6\u4E2D\u6784\u9020\u5668
  constructor(name) {
    this.name = name;
  }

  // \u5B9E\u4F8B\u65B9\u6CD5
  sayName() {
    console.log('My name is ' + this.name);
  }
}

// \u7C7B\u7684\u7EE7\u627F
class Programmer extends Person {
  constructor(name) {
    // \u76F4\u63A5\u8C03\u7528\u7236\u7C7B\u6784\u9020\u5668\u8FDB\u884C\u521D\u59CB\u5316
    super(name);
  }

  doWork() {
    console.log("I'm coding...");
  }
}

// \u5B9E\u4F8B\u5316 Person
var people = new Person('Lily');
var programmer = new Programmer('Linda');
people.sayName(); // My name is Lily
programmer.sayName(); // My name is Linda
programmer.doWork(); // I'm coding...
console.log(people.hasOwnProperty('name')); // true
console.log(people.hasOwnProperty('sayName')); // false
console.log(people.__proto__.hasOwnProperty('sayName')); // true
console.log(programmer instanceof Programmer); // true
console.log(programmer instanceof Person); // true
\`\`\`

\u901A\u5E38\u6211\u4EEC\u4E0D\u60F3\u5B8C\u5168\u66FF\u4EE3\u7236\u65B9\u6CD5\uFF0C\u800C\u662F\u5728\u7236\u65B9\u6CD5\u7684\u57FA\u7840\u4E0A\u8C03\u6574\u6216\u6269\u5C55\u5176\u529F\u80FD\u3002\u6211\u4EEC\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u8BA9\u5B83\u4E4B\u524D/\u4E4B\u540E\u6216\u5728\u8FC7\u7A0B\u4E2D\u8C03\u7528\u7236\u65B9\u6CD5\u3002

Class \u4E3A\u6B64\u63D0\u4F9B super \u5173\u952E\u5B57\u3002

- \u4F7F\u7528 \`super.method(...)\` \u8C03\u7528\u7236\u65B9\u6CD5\u3002
- \u4F7F\u7528 \`super(...)\` \u8C03\u7528\u7236\u6784\u9020\u51FD\u6570\uFF08\u4EC5\u5728 constructor \u51FD\u6570\u4E2D\uFF09\u3002

super \u7528\u6765\u65B0\u5EFA\u7236\u7C7B\u7684 this \u5BF9\u8C61\u3002\u5B50\u7C7B\u5FC5\u987B\u5728 constructor \u65B9\u6CD5\u4E2D\u8C03\u7528 super \u65B9\u6CD5\uFF0C\u5426\u5219\u65B0\u5EFA\u5B9E\u4F8B\u65F6\u4F1A\u62A5\u9519\u3002\u8FD9\u662F\u56E0\u4E3A\u5B50\u7C7B\u81EA\u5DF1\u7684 this \u5BF9\u8C61\uFF0C\u5FC5\u987B\u5148\u901A\u8FC7\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\u5B8C\u6210\u5851\u9020\uFF0C\u5F97\u5230\u4E0E\u7236\u7C7B\u540C\u6837\u7684\u5B9E\u4F8B\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u7136\u540E\u518D\u5BF9\u5176\u8FDB\u884C\u52A0\u5DE5\uFF0C\u52A0\u4E0A\u5B50\u7C7B\u81EA\u5DF1\u7684\u5B9E\u4F8B\u5C5E\u6027\u548C\u65B9\u6CD5\u3002\u5982\u679C\u4E0D\u8C03\u7528 super \u65B9\u6CD5\uFF0C\u5B50\u7C7B\u5C31\u5F97\u4E0D\u5230 this \u5BF9\u8C61\u3002

### 10. \u6A21\u5757\u5316

- \u539F\u751F\u652F\u6301\u6A21\u5757\u7CFB\u7EDF\uFF0C\u53D6\u4EE3\u4E86 CommonJS \u548C AMD \u7B49\u975E\u539F\u751F\u65B9\u6848\u3002
- \u5BFC\u51FA\uFF1A\`export\`, \`export default\`
- \u5BFC\u5165\uFF1A\`import\`, \`import ... from ...\`

**export \u5BFC\u51FA**

\`\`\`js
// \u5BFC\u51FA\u5E38\u91CF\u3001\u53D8\u91CF
export const A = 1;

// \u5BFC\u51FA\u591A\u4E2A\u53D8\u91CF
let name = 'Rainbow';
let age = '24';
export { name, age };

const myModule = someArg => {};
// \u9ED8\u8BA4\u5BFC\u51FA\uFF0C\u4E00\u4E2A\u6587\u4EF6\u53EA\u80FD\u6709\u4E00\u4E2A\u9ED8\u8BA4\u5BFC\u51FA
export default myModule;
\`\`\`

**import \u5BFC\u5165**

\`\`\`js
// \u5BFC\u5165\u9ED8\u8BA4\u7684\u5BFC\u51FA
import myModule from './test';
// \u5BFC\u5165\u975E\u9ED8\u8BA4\u7684\u5BFC\u51FA
import { name, age } from './test';
// \u5C06\u5168\u90E8\u5BFC\u51FA\u5E76\u547D\u540D\u4E3AtestModule
import * as testModule from './test';
// \u5BFC\u5165\u67D0\u4E2A\u6587\u4EF6
import 'index.css';
\`\`\`

### 11. Promise

- Promise \u662F\u5F02\u6B65\u7F16\u7A0B\u7684\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\uFF0C\u6BD4\u4F20\u7EDF\u7684\u56DE\u8C03\u65B9\u5F0F\u66F4\u52A0\u7684\u4F18\u96C5\u3002
- \u63D0\u4F9B .then(), .catch(), .finally() \u65B9\u6CD5\u94FE\u5F0F\u8C03\u7528\u3002

ES5 \u4E2D\uFF1A

\`\`\`js
var waitSecond = function() {
  setTimeout(function() {
    console.log('Hello'); // 1\u79D2\u540E\u8F93\u51FA"Hello"
    setTimeout(function() {
      console.log('Hi'); // 2\u79D2\u540E\u8F93\u51FA"Hi"
    }, 1000);
  }, 1000);
};
\`\`\`

ES6 \u4E2D\uFF1A

\`\`\`js
var waitSecond = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000);
});

waitSecond
  .then(function() {
    console.log('Hello'); // 1\u79D2\u540E\u8F93\u51FA"Hello"
  })
  .then(function() {
    console.log('Hi'); // \u8F93\u51FA"Hello"\u540E\u8F93\u51FA"Hi"
  });
\`\`\`

### 12. \u65B0\u7684\u6570\u636E\u7ED3\u6784

- \`Map\`: \u952E\u503C\u5BF9\u96C6\u5408\uFF0C\u952E\u53EF\u4EE5\u662F\u4EFB\u610F\u503C\uFF08\u5BF9\u8C61\u3001\u51FD\u6570\u7B49\uFF09\u3002
- \`Set\`: \u552F\u4E00\u503C\u7684\u96C6\u5408\u3002
- \`WeakMap\`: \u952E\u53EA\u80FD\u662F\u5BF9\u8C61\uFF0C\u5F31\u5F15\u7528\uFF0C\u952E\u88AB\u56DE\u6536\u5219\u503C\u4E5F\u56DE\u6536\u3002
- \`WeakSet\`: \u503C\u53EA\u80FD\u662F\u5BF9\u8C61\uFF0C\u5F31\u5F15\u7528\u3002

### 13. \u8FED\u4EE3\u5668\u548C\u751F\u6210\u5668 (Iterators & Generators)\u3001for...of

- \u8FED\u4EE3\u5668 (Iterator): \u5B9A\u4E49\u4E86\u5982\u4F55\u904D\u5386\u6570\u636E\u7ED3\u6784\u7684\u534F\u8BAE\uFF08[Symbol.iterator], next() \u65B9\u6CD5\uFF09\u3002
- \u751F\u6210\u5668 (Generator): \u4F7F\u7528 function\\* \u548C yield \u5173\u952E\u5B57\u521B\u5EFA\u7684\u7279\u6B8A\u51FD\u6570\uFF0C\u53EF\u4EE5\u6682\u505C\u548C\u6062\u590D\u6267\u884C\uFF0C\u7B80\u5316\u8FED\u4EE3\u5668\u7684\u521B\u5EFA\u3002
- for...of \u5FAA\u73AF\uFF1A\u7528\u4E8E\u904D\u5386\u53EF\u8FED\u4EE3\u5BF9\u8C61\uFF08\u6570\u7EC4\u3001Map\u3001Set\u3001\u5B57\u7B26\u4E32\u7B49\uFF09\uFF1B\u4E0E for in \u7528\u6CD5\u7C7B\u4F3C\uFF0C\u4F46\u662F for in \u8F93\u51FA\u7684\u662F\u4E0B\u6807\uFF0Cfor of \u8F93\u51FA\u7684\u662F\u503C\u3002

\`\`\`js
var someArray = ['a', 'b', 'c'];

for (v of someArray) {
  console.log(v); // \u8F93\u51FA a,b,c
}
\`\`\`

### 14. Symbol

- \u65B0\u7684\u539F\u59CB\u6570\u636E\u7C7B\u578B\uFF0C\u8868\u793A\u552F\u4E00\u7684\u3001\u4E0D\u53EF\u53D8\u7684\u503C
- \u5E38\u7528\u4E8E\u521B\u5EFA\u5BF9\u8C61\u552F\u4E00\u7684\u5C5E\u6027\u952E\uFF08\u907F\u514D\u547D\u540D\u51B2\u7A81\uFF09

### 15. \u4E8C\u8FDB\u5236\u548C\u516B\u8FDB\u5236\u5B57\u9762\u91CF

- \u4E8C\u8FDB\u5236\uFF1A0b1010\u3002
- \u516B\u8FDB\u5236\uFF1A0o755\u3002

### 16. String/Object \u65B0\u589E\u65B9\u6CD5

- \u5B57\u7B26\u4E32\u65B0\u589E includes(), startsWith(), endsWith(), repeat()
- \u5BF9\u8C61\u65B0\u589E is()\u3001assign()

**startsWith()**: \`str.startsWith(searchString[, position])\`

\`\`\`js
const str = 'Hello World!';

console.log(str.startsWith('Hel')); // true
console.log(str.startsWith('HEL')); // false
console.log(str.startsWith('Hel', 0)); // true
console.log(str.startsWith('Hel', 3)); // false
\`\`\`

**endsWith()**: \`str.endsWith(searchString[, length])\`

\`\`\`js
const str = 'Hello World!';

console.log(str.endsWith('World', 11)); // true
console.log(str.endsWith('?')); // false
\`\`\`

**\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u76F8\u7B49**: \`Object.is(value1, value2)\`

== \u548C === \u5224\u65AD\u4E0D\u51C6\u786E\u7684\u60C5\u51B5\uFF1A

\`\`\`js
(+0 ==
  -0 + // true
    0) ===
  -0; // true
NaN === NaN; // false
\`\`\`

\u4F7F\u7528 Object.is() \u53EF\u4EE5\u51C6\u786E\u5224\u65AD\uFF1A

\`\`\`js
Object.is(+0, -0); // false
Object.is(NaN, NaN); // true
\`\`\`

**\u5BF9\u8C61\u7684\u590D\u5236(\u6D45\u62F7\u8D1D)**: \`Object.assign(target, ...sources)\`

clone object

\`\`\`js
let a = {};
Object.assign(a, { b: 1 }); // { b: 1 }
\`\`\`

merge object

\`\`\`js
let a = { a1: 1 },
  b = { b1: 2 },
  c = { c1: 3 };
let abc = Object.assign(a, b, c);
// abc->{a1: 1, b1: 2, c1: 3}
// a->{a1: 1, b1: 2, c1: 3}
// b->{b1: 2}  \u76EE\u6807\u5BF9\u8C61\u88AB\u6539\u53D8
\`\`\`

Object.assign() \u662F\u4E00\u79CD\u6D45\u62F7\u8D1D\uFF0C\u5B83\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u62F7\u8D1D\u5230\u7684\u76EE\u6807\u5BF9\u8C61\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u88AB\u62F7\u8D1D\u7684\u6E90\u5BF9\u8C61\u3002

- \u6D45\u62F7\u8D1D\u5982\u679C\u91CD\u65B0\u8D4B\u503C\u4F1A\u628A\u62F7\u8D1D\u524D\u7684\u4E5F\u91CD\u65B0\u8D4B\u503C
- \u6DF1\u62F7\u8D1D\u5982\u679C\u91CD\u65B0\u8D4B\u503C\u4E0D\u4F1A\u628A\u62F7\u8D1D\u524D\u7684\u4E5F\u91CD\u65B0\u8D4B\u503C

<br />

## ES7(ES2016)

### 1. Array.prototype.includes()

\`arr.includes(valueToFind[, fromIndex])\`

\`\`\`js
var arr = ['hello', 'world'];

console.log(arr.includes('hello')); // true
console.log(arr.includes('hello', 1)); // false
console.log(arr.includes('he')); // false
\`\`\`

### 2. \u6C42\u5E42\u8FD0\u7B97\u7B26\`**\`

\`base ** exponent\`\u5177\u6709\u4E0E\`Math.pow(base, exponent)\`\u7B49\u6548\u7684\u8BA1\u7B97\u7ED3\u679C\u3002

\`\`\`js
function calculateExponent(base, exponent) {
  if (exponent === 1) {
    return base;
  } else {
    return base * calculateExponent(base, exponent - 1);
  }
}

console.log(calculateExponent(2, 10)); // 1024
console.log(Math.pow(2, 10)); // 1024
console.log(2 ** 10); // 1024
\`\`\`

<br />

## ES8(ES2017)

### 1. async/await

\u5F02\u6B65\u51FD\u6570

\`\`\`js
function login(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('1001');
    }, 600);
  });
}

function getData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === '1001') {
        resolve('Success');
      } else {
        reject('Fail');
      }
    }, 600);
  });
}

// \u4E0D\u4F7F\u7528async/await ES7
function doLogin(userName) {
  this.login(userName)
    .then(this.getData)
    .then(result => {
      console.log(result);
    });
}

// \u4F7F\u7528async/await ES8
async function doLogin2(userName) {
  const userId = await this.login(userName);
  const result = await this.getData(userId);
  console.log(result);
}

this.doLogin(); // Success
this.doLogin2(); // Success
\`\`\`

\u5E94\u7528\u573A\u666F\uFF1A

- \u83B7\u53D6\u5F02\u6B65\u51FD\u6570\u8FD4\u56DE\u503C

\u5F02\u6B65\u51FD\u6570\u8FD4\u56DE\u7684\u662F Promise \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u901A\u8FC7 then \u83B7\u53D6\u5F02\u6B65\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u3002

\`\`\`js
function charCount(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.length);
    }, 1000);
  });
}
async function charCountAdd(data1, data2) {
  const d1 = await charCount(data1);
  const d2 = await charCount(data2);
  return d1 + d2;
}

charCountAdd('Hello', 'Hi').then(res => console.log(res)); // \u901A\u8FC7then\u83B7\u53D6\u5F02\u6B65\u51FD\u6570\u7684\u8FD4\u56DE\u503C
\`\`\`

- \u901A\u8FC7 Promise.all \u5904\u7406\u5E76\u53D1\u573A\u666F

Promise.all()\u63A5\u6536\u6570\u7EC4

\`\`\`js
function charCount(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.length);
    }, 1000);
  });
}
async function charCountAdd(data1, data2) {
  const [d1, d2] = await Promise.all([charCount(data1), charCount(data2)]);
  return d1 + d2;
}

charCountAdd('Hello', 'Hi').then(console.log);
\`\`\`

- \u6355\u83B7\u62A5\u9519

\`\`\`js
function charCount(data) {
  return new Promise((resolve, reject) => {
    // \u5982\u679C\u6570\u636E\u662F 'error'\uFF0C\u5219\u629B\u51FA\u9519\u8BEF
    if (typeof data !== 'string') {
      reject(new Error('\u63A5\u6536\u5230\u9519\u8BEF\u6570\u636E'));
    } else {
      setTimeout(() => {
        resolve(data.length);
      }, 1000);
    }
  });
}

async function charCountAdd(data1, data2) {
  try {
    let d1, d2;
    d1 = await charCount(data1);
    d2 = await charCount(data2);
    return d1 + d2;
  } catch (e) {
    console.log(e);
  }
}

charCountAdd('hh').then(console.log); // Error: \u63A5\u6536\u5230\u9519\u8BEF\u6570\u636E
\`\`\`

### 2. Object.values()

\u8FD4\u56DE\u5BF9\u8C61\u81EA\u8EAB\u53EF\u679A\u4E3E**\u5C5E\u6027\u503C**\u7684\u6570\u7EC4\u3002

\`\`\`js
const obj = { a: 1, b: 2, c: 3 };
const values1 = Object.keys(obj).map(key => obj[key]);
console.log(values1); // [1, 2, 3]
const values2 = Object.values(obj);
console.log(values2); // [1, 2, 3]
\`\`\`

### 3. Object.entries()

\u8FD4\u56DE\u5BF9\u8C61\u81EA\u8EAB\u53EF\u679A\u4E3E\u5C5E\u6027**\u952E\u503C\u5BF9**\u6570\u7EC4 [[key1, value1], [key2, value2]]\u3002

\`\`\`js
const obj = { a: 1, b: 2, c: 3 };
Object.entries(obj); // [["a",1],["b",2],["c",3]]

for (let [key, value] of Object.entries(obj)) {
  console.log(\`key:\${key} value:\${value}\`);
}
// \u7B49\u4EF7\u4E8E
Object.keys(obj).forEach(key => {
  console.log('key:' + key + ' value:' + obj[key]);
});
// key:a value:1
// key:b value:2
// key:c value:3
\`\`\`

### 4. String.prototype.padStart() / String.prototype.padEnd()

\u7528\u6307\u5B9A\u5B57\u7B26\u4E32\u586B\u5145\u5F53\u524D\u5B57\u7B26\u4E32\u5230\u76EE\u6807\u957F\u5EA6\u3002

- \`str.padStart(targetLength [, padString]);\`
- \`str.padEnd(targetLength [, padString]);\`

- targetLength: \u5F53\u524D\u5B57\u7B26\u4E32\u9700\u8981\u586B\u5145\u5230\u7684\u76EE\u6807\u957F\u5EA6\u3002\u5982\u679C\u8FD9\u4E2A\u6570\u503C\u5C0F\u4E8E\u5F53\u524D\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u5219\u8FD4\u56DE\u5F53\u524D\u5B57\u7B26\u4E32\u672C\u8EAB\u3002
- padString: (\u53EF\u9009)\u586B\u5145\u5B57\u7B26\u4E32\u3002\u5982\u679C\u5B57\u7B26\u4E32\u592A\u957F\uFF0C\u4F7F\u586B\u5145\u540E\u7684\u5B57\u7B26\u4E32\u957F\u5EA6\u8D85\u8FC7\u4E86\u76EE\u6807\u957F\u5EA6\uFF0C\u5219\u53EA\u4FDD\u7559\u6700\u5DE6\u4FA7\u7684\u90E8\u5206\uFF0C\u5176\u4ED6\u90E8\u5206\u4F1A\u88AB\u622A\u65AD\uFF0C\u6B64\u53C2\u6570\u7684\u7F3A\u7701\u503C\u4E3A " "\uFF1B

\`\`\`js
console.log('0.0'.padStart(4, '12')); // 10.0
console.log('0.0'.padStart(5, '12')); // 120.0
console.log('0.0'.padEnd(4, '12')); // 0.01
console.log('0.0'.padEnd(5, '12')); // 0.012
\`\`\`

### 5. Object.getOwnPropertyDescriptors()

\u83B7\u53D6\u5BF9\u8C61\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26\uFF08\u5305\u62EC get/set\uFF09\uFF0C\u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u81EA\u8EAB\u5C5E\u6027\uFF0C\u5219\u8FD4\u56DE\u7A7A\u5BF9\u8C61\u3002

\`\`\`js
const obj2 = {
  name: 'Jine',
  get age() {
    return '18';
  },
};
Object.getOwnPropertyDescriptors(obj2);
// {
//   age: {
//     configurable: true,
//     enumerable: true,
//     get: function age(){},
//     set: undefined
//   },
//   name: {
//     configurable: true,
//     enumerable: true,
//     value: "Jine",
//     writable: true
//   }
// }
\`\`\`

### 6. \u51FD\u6570\u53C2\u6570\u5217\u8868\u7ED3\u5C3E\u5141\u8BB8\u9017\u53F7

\u5C3E\u540E\u9017\u53F7\uFF08\u6709\u65F6\u53EB\u505A\u201C\u7EC8\u6B62\u9017\u53F7\u201D\uFF09\u5728\u5411 JavaScript \u4EE3\u7801\u6DFB\u52A0\u5143\u7D20\u3001\u53C2\u6570\u3001\u5C5E\u6027\u65F6\u5341\u5206\u6709\u7528\u3002\u5982\u679C\u4F60\u60F3\u8981\u6DFB\u52A0\u65B0\u7684\u5C5E\u6027\uFF0C\u5E76\u4E14\u4E0A\u4E00\u884C\u5DF2\u7ECF\u4F7F\u7528\u4E86\u5C3E\u540E\u9017\u53F7\uFF0C\u4F60\u53EF\u4EE5\u4EC5\u4EC5\u6DFB\u52A0\u65B0\u7684\u4E00\u884C\uFF0C\u800C\u4E0D\u9700\u8981\u4FEE\u6539\u4E0A\u4E00\u884C\u3002\u8FD9\u4F7F\u5F97\u7248\u672C\u63A7\u5236\u7684\u6BD4\u8F83\u66F4\u52A0\u6E05\u6670\uFF0C\u4EE5\u53CA\u4EE3\u7801\u4FBF\u5668\u7684\u9EBB\u70E6\u66F4\u5C11\u3002

JavaScript \u4E00\u5F00\u59CB\u5C31\u652F\u6301\u6570\u7EC4\u5B57\u9762\u503C\u4E2D\u7684\u5C3E\u540E\u9017\u53F7\uFF0C\u968F\u540E\u5411\u5BF9\u8C61\u5B57\u9762\u503C\uFF08ES5\uFF09\u4E2D\u6DFB\u52A0\u4E86\u5C3E\u540E\u9017\u53F7\u3002\u6700\u8FD1\uFF08ES8\uFF09\uFF0C\u53C8\u5C06\u5176\u6DFB\u52A0\u5230\u51FD\u6570\u53C2\u6570\u4E2D\u3002

\u4F46\u662F JSON \u4E0D\u652F\u6301\u5C3E\u540E\u9017\u53F7\u3002

\`\`\`js
// \u5728ES8\u4EE5\u524D\uFF0C\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u540E\u7684\u9017\u53F7\u4F1A\u5BFC\u81F4\u8BED\u6CD5\u9519\u8BEF\u3002
function f(a, b) {}
// \u8981\u6DFB\u52A0\u4E00\u4E2A\u53C2\u6570c
function f(
  a,
  b, // \u53D8\u66F4\u884C
  c, // \u53D8\u66F4\u884C
) {}

// \u5728ES8\u4E2D
function f(a, b) {}
// \u8981\u6DFB\u52A0\u4E00\u4E2A\u53C2\u6570c
function f(
  a,
  b,
  c, // \u53D8\u66F4\u884C
) {}
\`\`\`

\u4EC5\u4EC5\u5305\u542B\u9017\u53F7\u7684\u51FD\u6570\u53C2\u6570\u5B9A\u4E49\u6216\u8005\u51FD\u6570\u8C03\u7528\u4F1A\u629B\u51FA SyntaxError\u3002\u800C\u4E14\uFF0C\u5F53\u4F7F\u7528\u5269\u4F59\u53C2\u6570\u7684\u65F6\u5019\uFF0C\u5E76\u4E0D\u652F\u6301\u5C3E\u540E\u9017\u53F7\uFF1A

\`\`\`js
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
\`\`\`

### 7. ShareArrayBuffer/Atomics

\`new SharedArrayBuffer(length)\`
\u5171\u4EAB\u5185\u5B58\u7F13\u51B2\u533A

- \u53C2\u6570\uFF1Alength
- \u6240\u521B\u5EFA\u7684\u6570\u7EC4\u7F13\u51B2\u533A\u7684\u5927\u5C0F\uFF0C\u4EE5\u5B57\u8282(byte)\u4E3A\u5355\u4F4D\u3002
- \u8FD4\u56DE\u503C\uFF1A\u4E00\u4E2A\u5927\u5C0F\u6307\u5B9A\u7684\u65B0 SharedArrayBuffer \u5BF9\u8C61\uFF0C\u5176\u5185\u5BB9\u88AB\u521D\u59CB\u5316\u4E3A 0\u3002

\`\`\`js
// \u521B\u5EFA\u4E00\u4E2A 1024 \u5B57\u8282\u7684\u5171\u4EAB\u7F13\u51B2\u533A
const buffer = new SharedArrayBuffer(1024);

// \u521B\u5EFA\u89C6\u56FE\u64CD\u4F5C\u5171\u4EAB\u5185\u5B58\uFF08\u5982 Int32Array\uFF09
const sharedArray = new Int32Array(buffer);
\`\`\`

> \u8BF7\u6CE8\u610F\uFF0C\u7531\u4E8E\u80FD\u591F\u8F7B\u6613\u5730\u5229\u7528\u300A[\u8FB9\u4FE1\u9053\uFF08side-channel\uFF09\u8BFB\u53D6\u672A\u6388\u6743\u5185\u5B58\u7684\u653B\u51FB\u6280\u672F](https://googleprojectzero.blogspot.com/2018/01/reading-privileged-memory-with-side.html)\u300B\u4E2D\u63D0\u5230\u7684 Spectre \u6F0F\u6D1E\u2014\u2014\u4E00\u79CD\u5229\u7528\u73B0\u4EE3 CPU \u4F7F\u7528\u7684\u6267\u884C\u4F18\u5316\u529F\u80FD\u7684\u65B0\u653B\u51FB\u6280\u672F\uFF0C SharedArrayBuffer \u529F\u80FD\u5C06\u5728 Chrome \u548C FireFox \u7684\u65B0\u7248\u672C\u4E2D\u7981\u7528\uFF0C\u5E76\u5C06\u9010\u6E10\u88AB\u6240\u6709\u6D4F\u89C8\u5668\u7981\u7528\u3002

> \u4F46\u8BE5 API \u5E76\u4E0D\u4F1A\u88AB\u5E9F\u5F03\uFF0Cchrome \u56E2\u961F\u58F0\u660E\u5728\u672A\u6765\u89E3\u51B3\u56E0 web \u65F6\u949F\u5BFC\u81F4\u7684\u5B89\u5168\u95EE\u9898\u540E\uFF0C\u8BE5 API \u5C06\u4F1A\u6062\u590D\u3002

\`Atomics[Symbol.toStringTag]\`
\u539F\u5B50\u64CD\u4F5C API

\`\`\`js
// \u7EBF\u7A0B 1: \u5B89\u5168\u8BFB\u53D6
const value = Atomics.load(sharedArray, 0);

// \u7EBF\u7A0B 2: \u5B89\u5168\u5199\u5165
Atomics.store(sharedArray, 0, 42);
\`\`\`

<br />

## ES9(ES2018)

### 1. \u5F02\u6B65\u8FED\u4EE3

- \`for await...of\` \u5FAA\u73AF
- \u5F02\u6B65\u751F\u6210\u5668 (async function\\*)

\`\`\`js
// \u5F02\u6B65\u751F\u6210\u5668\u51FD\u6570\uFF0C\u6A21\u62DF\u5206\u6279\u4ECE API \u83B7\u53D6\u6570\u636E
async function* fetchDataBatches() {
  yield await Promise.resolve([1, 2, 3]); // \u7B2C\u4E00\u6279\u6570\u636E
  yield await Promise.resolve([4, 5, 6]); // \u7B2C\u4E8C\u6279\u6570\u636E
  yield await Promise.resolve([7, 8, 9]); // \u7B2C\u4E09\u6279\u6570\u636E
}

// \u4F7F\u7528 for await...of \u5FAA\u73AF\u5904\u7406\u5F02\u6B65\u6570\u636E\u6D41
async function processBatches() {
  for await (const batch of fetchDataBatches()) {
    console.log('\u5904\u7406\u6279\u6B21:', batch);
  }
}

processBatches();
// \u8F93\u51FA:
// \u5904\u7406\u6279\u6B21: [1, 2, 3]
// \u5904\u7406\u6279\u6B21: [4, 5, 6]
// \u5904\u7406\u6279\u6B21: [7, 8, 9]
\`\`\`

\u4F7F\u7528\u573A\u666F\uFF0C\u5982\u5904\u7406\u6587\u4EF6\u6D41\u6216\u7F51\u7EDC\u6D41\uFF1A

\`\`\`js
// \u6A21\u62DF\u4ECE\u6587\u4EF6\u6D41\u4E2D\u8BFB\u53D6\u6570\u636E\uFF08Node.js \u793A\u4F8B\uFF09
const fs = require('fs').promises;

async function readFileLineByLine() {
  const stream = fs.createReadStream('data.txt', { encoding: 'utf8' });

  for await (const chunk of stream) {
    console.log('\u8BFB\u53D6\u5230\u6570\u636E\u5757:', chunk.length, '\u5B57\u8282');
    // \u5904\u7406\u6570\u636E\u5757...
  }
}

readFileLineByLine();
\`\`\`

### 2. Rest/Spread \u5C5E\u6027(...)

\u5728 ES6 \u4E2D\uFF0C\u65B0\u589E\u4E86\u6570\u7EC4 Spread \u5C5E\u6027\u548C\u51FD\u6570\u53C2\u6570\u7684 Rest \u5C5E\u6027\uFF0C\u5728 ES9 \u4E2D\uFF0C\u65B0\u589E\u4E86\u5BF9\u5BF9\u8C61\u7684\u652F\u6301\u3002

**\u5BF9\u8C61\u89E3\u6784\u4E2D Reset \u64CD\u4F5C**

\`\`\`js
const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

const { a, ...rest } = myObject;
// a = 1
// rest = { b: 2, c: 3 }
\`\`\`

**\u4F7F\u7528 Spread \u5BF9\u5BF9\u8C61\u8FDB\u884C\u6D45\u62F7\u8D1D**

\`\`\`js
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1, z: 26 };
// obj2 = { a: 1, b: 2, c: 3, z: 26 }
\`\`\`

### 3. Promise.prototype.finally()

\u4E00\u4E2A Promise \u8C03\u7528\u94FE\u6210\u529F\u89E6\u53D1 then() \uFF0C\u5931\u8D25\u89E6\u53D1 catch() \u3002\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4F60\u60F3\u8981\u5728\u65E0\u8BBA Promise \u8FD0\u884C\u6210\u529F\u8FD8\u662F\u5931\u8D25\uFF0C\u90FD\u6267\u884C\u67D0\u4E9B\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u4F7F\u7528 finally() \u3002

finally()\u5141\u8BB8\u6307\u5B9A\u6700\u7EC8\u7684\u903B\u8F91\uFF1A

\`\`\`js
let loading = true;
function doSomething() {
  doSomething1()
    .then(doSomething2)
    .then(doSomething3)
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      loading = false;
    });
}
\`\`\`

### 4. tagged \u6A21\u677F\u5B57\u7B26\u4E32\u4E0E \u8F6C\u4E49\u5E8F\u5217

\u4ECE ES7 \u5F00\u59CB\uFF0Ctagged \u6A21\u677F\u5B57\u7B26\u4E32\u4F1A\u5BF9\u4EE5\\u\u3001\\u{}\u3001\\x \u5F00\u5934\u6216\u8005\\\u52A0\u6570\u5B57\u5F00\u5934\u7684\u5B57\u7B26\u4E32\u8FDB\u884C\u8F6C\u4E49\u3002\u4F46\u662F\u5982\u679C\u5728\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u4EE5\u4E0A\u8FF0\u5B57\u7B26\u5F00\u5934\u7684\u975E\u8F6C\u4E49\u5B57\u7B26\u7684\u8BDD\uFF0C\u4F1A\u62A5\u8BED\u6CD5\u9519\u8BEF\u3002

ES9 \u4E2D\u53D6\u6D88\u4E86 tagged \u6A21\u677F\u4E2D\u5BF9\u4E8E\u8F6C\u4E49\u5B57\u7B26\u7684\u9650\u5236\uFF0C\u6B63\u5E38\u89E3\u6790\u7684\u8BDD\u53EF\u4EE5\u6B63\u5E38\u83B7\u53D6\u8F6C\u4E49\u5B57\u7B26\u7684\u503C\uFF0C\u5426\u5219\u7684\u8BDD\u8FD4\u56DE undefined\u3002

\`\`\`js
function latex(str) {
  return { cooked: str[0], raw: str.raw[0] };
}

latex\`\\unicode\`;
// { cooked: undefined, raw: "\\\\unicode"}
\`\`\`

### 5. \u6B63\u5219\u8868\u8FBE\u5F0F\u76F8\u5173\u65B0\u7279\u6027

#### s (dotAll)\u6A21\u5F0F

\u5143\u5B57\u7B26.\u65E0\u6CD5\u5339\u914D\\r \\n \\u{2048} \\u{2049}\u7B49\u6362\u884C\u7B26\u3002

\u5728 ES2018 \u4E2D\u4E3A\u6B63\u5219\u8868\u8FBE\u5F0F\u589E\u52A0\u4E86\u4E00\u4E2A\u65B0\u7684\u6807\u5FD7 s \u7528\u6765\u8868\u793A\u5C5E\u6027 dotAll\u3002\u4EE5\u4F7F .\u53EF\u4EE5\u5339\u914D\u4EFB\u610F\u5B57\u7B26, \u5305\u62EC\u6362\u884C\u7B26\u3002

\`\`\`js
const re = /foo.bar/s;
re.test('foo\\nbar');
// \u2192 true
re.dotAll;
// \u2192 true
re.flags;
// \u2192 's'
\`\`\`

#### \u547D\u540D\u6355\u83B7\u7EC4

\u901A\u8FC7(\`?<name>...\`)\u8BED\u6CD5\u7ED9\u6355\u83B7\u7EC4\u547D\u540D:

\`\`\`js
const reDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/,
  match = reDate.exec('2018-04-30'),
  year = match[1], // 2018
  month = match[2], // 04
  day = match[3]; // 30

const reDate = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/,
  match = reDate.exec('2018-04-30'),
  year = match.groups.year, // 2018
  month = match.groups.month, // 04
  day = match.groups.day; // 30
\`\`\`

#### \u540E\u884C\u65AD\u8A00\uFF08\u53CD\u5411\u65AD\u8A00\uFF09

\`?<=\`, \`?<!\` \u5339\u914D\u524D\u9762/\u540E\u9762\u6EE1\u8DB3\u6216\u4E0D\u6EE1\u8DB3\u6761\u4EF6\u7684\u90E8\u5206

\u5148\u884C\u65AD\u8A00\uFF08lookahead\uFF09\uFF1A

\`\`\`js
const reLookahead = /\\D(?=\\d+)/,
  match = reLookahead.exec('$123.89');

console.log(match[0]); // $
\`\`\`

\u53CD\u5411\u65AD\u8A00\uFF08lookbehind\uFF09\uFF1A

\`\`\`js
const reLookbehind = /(?<=\\D)\\d+/,
  match = reLookbehind.exec('$123.89');

console.log(match[0]); // 123.89
\`\`\`

#### Unicode \u5C5E\u6027\u8F6C\u4E49

ES2018 \u6DFB\u52A0\u4E86 Unicode \u5C5E\u6027\u8F6C\u4E49\u2014\u2014\u5F62\u5F0F\u4E3A\`\\p{...}\`\u548C\`\\P{...}\`\uFF0C\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u6807\u8BB0 u (Unicode) \u8BBE\u7F6E\uFF0C\u5728\\p \u5757\u513F\u5185\uFF0C\u53EF\u4EE5\u4EE5\u952E\u503C\u5BF9\u7684\u65B9\u5F0F\u8BBE\u7F6E\u9700\u8981\u5339\u914D\u7684\u5C5E\u6027\u800C\u975E\u5177\u4F53\u5185\u5BB9\u3002

\`\`\`js
const regexGreekSymbol = /\\p{Script_Extensions=Greek}/u;
regexGreekSymbol.test('\u03C0'); // true
\`\`\`

<br />

## ES10(ES2019)

### 1. Array.prototype.flat() / Array.prototype.flatMap()

\u6570\u7EC4\u964D\u7EF4\uFF0C\u9012\u5F52\u5730\u5C06\u6570\u7EC4\u5C55\u5E73\u5230\u6307\u5B9A\u7684\u6DF1\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 1\u3002

\`\`\`js
const array = [1, [2, [3]]];
array.flat();
// [1, 2, [3]]

array.flat(Infinity);
// [1, 2, 3]

[2, 3, 4].flatMap(x => [x, x * 2]);
// [2, 4, 3, 6, 4, 8]

[2, 3, [2]].flatMap(x => x + 1);
// [3, 4, "21"] , [2] + 1 \u4F1A\u8F6C\u5316\u4E3A "2" + 1 === "21"\u3002

[2, 3, [2]].flatMap(x => (Array.isArray(x) ? x.map(num => num + 1) : x + 1));
// [3, 4, 3]
\`\`\`

### 2. Object.fromEntries()

\u5C06\u952E\u503C\u5BF9\u5217\u8868\uFF08\u5982 Map, Array<[key, value]>\uFF09\u8F6C\u6362\u4E3A\u5BF9\u8C61\u3002\u662F Object.entries() \u7684\u9006\u64CD\u4F5C\u3002

### 3. String.prototype.trimStart() / String.prototype.trimEnd()

\u5206\u522B\u79FB\u9664\u5B57\u7B26\u4E32\u5F00\u5934\u548C\u7ED3\u5C3E\u7684\u7A7A\u767D\u5B57\u7B26

### 4. Symbol.prototype.description

\u83B7\u53D6 Symbol \u521B\u5EFA\u65F6\u4F20\u5165\u7684\u53EF\u9009\u63CF\u8FF0\u5B57\u7B26\u4E32

### 5. \u53EF\u9009\u7684 cache \u53C2\u6570

\u5141\u8BB8 catch \u5728\u6CA1\u4F7F\u7528\u53C2\u6570\u7684\u60C5\u51B5\u4E0B\u7701\u7565\u62EC\u53F7

\`\`\`js
try {
  // try to use a web feature which may not be implemented
} catch {
  // \u7701\u7565catch\u540E\u7684\u51FD\u6570\u62EC\u53F7
}
\`\`\`

### 6. JSON.stringify() \u589E\u5F3A

\u5904\u7406 \\u2028 (\u884C\u5206\u9694\u7B26) \u548C \\u2029 (\u6BB5\u843D\u5206\u9694\u7B26) \u66F4\u5B89\u5168\u3002

\`\`\`js
const LS = '\\u2028';
const PS = eval("'\\\\u2029'");
\`\`\`

### 7. stable Array#sort

ES2019 \u6B63\u5F0F\u8981\u6C42 sort()\u5FC5\u987B\u662F\u7A33\u5B9A\u6392\u5E8F\uFF0C\u5373\u76F8\u7B49\u5143\u7D20\u7684\u539F\u59CB\u987A\u5E8F\u4FDD\u6301\u4E0D\u53D8\u3002

### 8. Function.prototype.toString() \u6539\u8FDB

\u8FD4\u56DE\u51FD\u6570\u6E90\u4EE3\u7801\u7684\u7CBE\u786E\u5B57\u7B26\u4E32\uFF08\u5305\u62EC\u6CE8\u91CA\u548C\u7A7A\u767D\uFF09

<br />

## ES11(ES2020)

### 1. \u53EF\u9009\u94FE\u8FD0\u7B97\u7B26\`?.\`

\u5B89\u5168\u5730\u8BBF\u95EE\u6DF1\u5C42\u5D4C\u5957\u7684\u5BF9\u8C61\u5C5E\u6027\uFF1A\`obj?.prop?.subProp\`\u3002\u5982\u679C\u4E2D\u95F4\u67D0\u4E2A\u503C\u4E3A null \u6216 undefined\uFF0C\u5219\u7ACB\u5373\u8FD4\u56DE undefined\u3002

\`\`\`js
const city = user?.address?.city;
\`\`\`

### 2. \u7A7A\u503C\u5408\u5E76\u8FD0\u7B97\u7B26\`??\`

\u63D0\u4F9B\u9ED8\u8BA4\u503C\uFF1A\`value ?? defaultValue\`\u3002\u4EC5\u5728 value \u4E3A null \u6216 undefined \u65F6\u4F7F\u7528\u9ED8\u8BA4\u503C\uFF08\u4E0D\u540C\u4E8E || \u4F1A\u5BF9\u5047\u503C\u751F\u6548\uFF09\u3002

\`\`\`js
const value = 0 ?? 'default'; // 0
const value1 = 0 || 'default'; // default
\`\`\`

### 3. Promise.allSettled()

\u63A5\u6536\u4E00\u4E2A Promise \u6570\u7EC4\uFF0C\u5728\u6240\u6709 Promise \u90FD\u5B8C\u6210\uFF08\u65E0\u8BBA\u662F fulfilled \u8FD8\u662F rejected\uFF09\u540E\u8FD4\u56DE\u4E00\u4E2A\u7ED3\u679C\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u7ED3\u679C\u63CF\u8FF0\u5BF9\u5E94\u7684 Promise \u72B6\u6001\u3002

### 4. \u52A8\u6001\u5BFC\u5165 (import())

\u51FD\u6570\u5F62\u5F0F\u7684 import\uFF0C\u8FD4\u56DE\u4E00\u4E2A Promise\u3002\u7528\u4E8E\u6309\u9700\u52A0\u8F7D\u6A21\u5757\uFF1A\`const module = await import('./module.mjs');\`

### 5. BigInt

\u65B0\u7684\u539F\u59CB\u6570\u636E\u7C7B\u578B\uFF0C\u7528\u4E8E\u8868\u793A\u4EFB\u610F\u7CBE\u5EA6\u7684\u6574\u6570\u3002\u5B57\u9762\u91CF\u52A0 n \u540E\u7F00\uFF1A12345678901234567890n

### 6. globalThis

\u6807\u51C6\u65B9\u5F0F\u83B7\u53D6\u5168\u5C40\u5BF9\u8C61\uFF08\u6D4F\u89C8\u5668\u4E2D\u662F window\uFF0CNode.js \u4E2D\u662F global\uFF0CWeb Workers \u4E2D\u662F self\uFF09\u3002

### 7. String.prototype.matchAll()

\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u6B63\u5219\u8868\u8FBE\u5F0F\u6240\u6709\u5339\u914D\u7ED3\u679C\u7684\u8FED\u4EE3\u5668\uFF08\u5305\u62EC\u6355\u83B7\u7EC4\u4FE1\u606F\uFF09\uFF0C\u6BD4\u591A\u6B21\u8C03\u7528 exec \u66F4\u65B9\u4FBF\u3002

<br />

## ES12(ES2021)

### 1. String.prototype.replaceAll()

\u66FF\u6362\u5B57\u7B26\u4E32\u4E2D\u6240\u6709\u5339\u914D\u7684\u5B50\u4E32\uFF1A\`str.replaceAll('old', 'new')\`

### 2. Promise.any()

\u63A5\u6536\u4E00\u4E2A Promise \u6570\u7EC4\uFF0C\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u6210\u529F (fulfilled) \u7684 Promise \u7684\u7ED3\u679C\u3002\u5982\u679C\u6240\u6709\u90FD\u5931\u8D25 (rejected)\uFF0C\u5219\u629B\u51FA\u4E00\u4E2A\u5305\u542B\u6240\u6709\u62D2\u7EDD\u539F\u56E0\u7684 AggregateError\u3002

### 3. \u903B\u8F91\u8D4B\u503C\u8FD0\u7B97\u7B26

- &&=: \`x &&= y\` \u7B49\u4EF7\u4E8E \`x = x && y\`
- ||=: \`x ||= y\` \u7B49\u4EF7\u4E8E \`x = x || y\`\u3002
- ??=: \`x ??= y\` \u7B49\u4EF7\u4E8E \`x = x ?? y\`\uFF08\u4EC5\u5728 x \u4E3A null/undefined \u65F6\u8D4B\u503C\uFF09

### 4. \u6570\u5B57\u5206\u9694\u7B26

\u5728\u6570\u5B57\u5B57\u9762\u91CF\u4E2D\u4F7F\u7528\u4E0B\u5212\u7EBF \\_ \u63D0\u9AD8\u53EF\u8BFB\u6027\uFF1A1_000_000, 0b1010_0001\u3002

### 5. WeakRef \u548C FinalizationRegistry

- WeakRef: \u521B\u5EFA\u5BF9\u5BF9\u8C61\u7684\u5F31\u5F15\u7528\uFF08\u4E0D\u4F1A\u963B\u6B62\u5783\u573E\u56DE\u6536\uFF09\u3002
- FinalizationRegistry: \u5141\u8BB8\u5728\u5BF9\u8C61\u88AB\u5783\u573E\u56DE\u6536\u540E\u6267\u884C\u6E05\u7406\u56DE\u8C03\uFF08\u9700\u8C28\u614E\u4F7F\u7528\uFF09\u3002

<br />

## ES13(ES2022)

### 1. \u9876\u5C42 await (Top-Level await)

- \u5141\u8BB8\u5728\u6A21\u5757\u7684\u9876\u5C42\u4F5C\u7528\u57DF\uFF08\u4E0D\u5728 async \u51FD\u6570\u5185\u90E8\uFF09\u4F7F\u7528 await\u3002
- \u9876\u5C42 await \u4F1A\u963B\u585E\u6A21\u5757\u7684\u52A0\u8F7D\uFF0C\u56E0\u6B64\u5E94\u8C28\u614E\u4F7F\u7528\uFF0C\u907F\u514D\u5F71\u54CD\u5E94\u7528\u6027\u80FD\u3002
- \u9876\u5C42 await \u9700\u8981\u5728\u652F\u6301 ES2022 \u7684\u73AF\u5883\u4E2D\u4F7F\u7528\uFF0C\u5E76\u4E14\u8981\u6C42\u6A21\u5757\u4EE5 ESM\uFF08ES Modules\uFF09\u65B9\u5F0F\u52A0\u8F7D\u3002

\`\`\`js
// \u7B49\u5F85\u67D0\u4E2A\u5E93\u521D\u59CB\u5316\u5B8C\u6210\u540E\u518D\u5BFC\u51FA\u5DE5\u5177\u51FD\u6570
const utils = await import('./utils-library.mjs');
export const processData = utils.processData;

// \u4ECE\u8FDC\u7A0B\u914D\u7F6E\u670D\u52A1\u83B7\u53D6\u5E94\u7528\u914D\u7F6E
const config = await fetch('/config.json').then(res => res.json());
export const apiKey = config.apiKey;

// \u521D\u59CB\u5316\u6570\u636E\u5E93\u8FDE\u63A5
const db = await initializeDatabase();
export { db };
\`\`\`

### 2. \u7C7B\u5B57\u6BB5\u58F0\u660E

- \u53EF\u4EE5\u5728\u7C7B\u4E2D\u76F4\u63A5\u58F0\u660E\u5B9E\u4F8B\u5B57\u6BB5\uFF08\u516C\u5171\u7684\u3001\u79C1\u6709\u7684\uFF09\u3001\u9759\u6001\u5B57\u6BB5\uFF08\u516C\u5171\u7684\u3001\u79C1\u6709\u7684\uFF09\u3002
- \u79C1\u6709\u5B57\u6BB5\u548C\u65B9\u6CD5\u4F7F\u7528 # \u524D\u7F00\uFF1A#privateField, #privateMethod()\u3002
- \u516C\u5171\u5B9E\u4F8B\u5B57\u6BB5\uFF1Acount = 0;\u3002
- \u9759\u6001\u516C\u5171\u5B57\u6BB5\uFF1Astatic version = '1.0';\u3002
- \u9759\u6001\u79C1\u6709\u5B57\u6BB5\uFF1Astatic #internalCount = 0;\u3002

### 3. Object.hasOwn()

\u66F4\u5B89\u5168\u5730\u68C0\u67E5\u5BF9\u8C61\u81EA\u8EAB\u662F\u5426\u62E5\u6709\u67D0\u4E2A\u5C5E\u6027\uFF08\u66FF\u4EE3 obj.hasOwnProperty(prop)\uFF0C\u907F\u514D obj \u4E3A null \u6216\u8986\u76D6\u4E86 hasOwnProperty \u7684\u95EE\u9898\uFF09\u3002

### 4. Array.prototype.at()

\u901A\u8FC7\u7D22\u5F15\u8BBF\u95EE\u6570\u7EC4\u5143\u7D20\uFF0C\u652F\u6301\u8D1F\u7D22\u5F15\uFF08\u4ECE\u672B\u5C3E\u5F00\u59CB\u8BA1\u6570\uFF09\uFF1A\`arr.at(-1)\` \u83B7\u53D6\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u3002

### 5. Error.prototype.cause

\u5728\u521B\u5EFA Error \u5BF9\u8C61\u65F6\u53EF\u4EE5\u6307\u5B9A\u5BFC\u81F4\u8BE5\u9519\u8BEF\u7684\u539F\u59CB\u9519\u8BEF\uFF1A\`new Error('Message', { cause: originalError });\`\uFF0C\u65B9\u4FBF\u9519\u8BEF\u94FE\u8FFD\u8E2A\u3002

### 6. \u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u7D22\u5F15 (/d \u6807\u5FD7)

\u4F7F\u7528 /d \u6807\u5FD7\u65F6\uFF0Cexec() \u548C match() \u8FD4\u56DE\u7684\u7ED3\u679C\u4F1A\u5305\u542B\u4E00\u4E2A indices \u5C5E\u6027\uFF0C\u6307\u793A\u6BCF\u4E2A\u6355\u83B7\u7EC4\u7684\u5F00\u59CB\u548C\u7ED3\u675F\u7D22\u5F15\u3002

<br />

## ES14(ES2023)

### 1. Array.prototype.findLast() / Array.prototype.findLastIndex()

\u4ECE\u6570\u7EC4\u672B\u5C3E\u5F00\u59CB\u67E5\u627E\u5143\u7D20\u6216\u7D22\u5F15\uFF1A\`arr.findLast(item => item > 5)\`, \`arr.findLastIndex(item => item > 5)\`

### 2. Hashbang \u8BED\u6CD5\u6B63\u5F0F\u6807\u51C6\u5316

\u5C06 #!/usr/bin/env node \u8FD9\u6837\u7684 shebang/hashbang \u5728 JS \u5F15\u64CE\u4E2D\u89C6\u4E3A\u6CE8\u91CA\uFF08\u5B9E\u8DF5\u4E2D\u65E9\u5DF2\u652F\u6301\uFF09\u3002

### 3. Symbol \u4F5C\u4E3A WeakMap \u952E

\u5141\u8BB8\u4F7F\u7528 Symbol \u503C\u4F5C\u4E3A WeakMap \u7684\u952E\uFF08\u4EE5\u524D\u53EA\u5141\u8BB8\u5BF9\u8C61\uFF09\u3002

<br />

## ES15(ES2024)

### 1. Array.prototype.group() / Array.prototype.groupToMap()

\u6309\u51FD\u6570\u5206\u7EC4\u6570\u7EC4\u5143\u7D20\u3002

### 2. Promise.withResolvers()

\u521B\u5EFA\u4E00\u4E2A Promise \u5E76\u540C\u65F6\u8FD4\u56DE\u5176 resolve \u548C reject \u51FD\u6570\u3002

### 3. Object.groupBy() / Map.groupBy()

\u7C7B\u4F3C Array.group\uFF0C\u4F46\u76F4\u63A5\u4F5C\u7528\u4E8E\u53EF\u8FED\u4EE3\u5BF9\u8C61\u3002
`}}]);
