"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[1251],{66570:function(o,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

\u201C\u4E16\u754C\u4E0A\u6CA1\u6709\u4E24\u7247\u5B8C\u5168\u76F8\u540C\u7684\u53F6\u5B50\u3002\u201D \u2014\u2014\u2014\u2014\u83B1\u5E03\u5C3C\u8328

## \u6982\u5FF5

### \u7BAD\u5934\u51FD\u6570\u4E0E\u666E\u901A\u51FD\u6570\u7684\u533A\u522B

<span style="color: #00b050">\u76F8\u540C\uFF1A</span>

\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570

<span style="color: #f00">\u533A\u522B\uFF1A</span>

- \u7BAD\u5934\u51FD\u6570\u4E2D this \u6307\u5411\u51FD\u6570\u5B9A\u4E49\u65F6\u6240\u5728\u7684\u5BF9\u8C61\uFF1B\u666E\u901A\u51FD\u6570\u7684 this \u6307\u5411\u51FD\u6570\u8C03\u7528\u65F6\u6240\u5728\u7684\u5BF9\u8C61\u3002
- \u7BAD\u5934\u51FD\u6570\u4E2D\u901A\u8FC7 ...args \u83B7\u53D6\u51FD\u6570\u53C2\u6570\uFF1B\u666E\u901A\u51FD\u6570\u901A\u8FC7\u81EA\u5E26\u7684 arguments \u83B7\u53D6\u51FD\u6570\u53C2\u6570\u3002
- \u7BAD\u5934\u51FD\u6570\u4E0D\u80FD\u7528\u4F5C\u6784\u9020\u51FD\u6570\uFF08\u5373\u4E0D\u80FD\u4F7F\u7528 new \u64CD\u4F5C\u7B26\uFF09\uFF0C\u56E0\u4E3A\u5176\u81EA\u8EAB\u6CA1\u6709 this\uFF0C\u6CA1\u6709 prototype \u5C5E\u6027\uFF1B\u666E\u901A\u51FD\u6570\u53EF\u4EE5\u3002
- \u7BAD\u5934\u51FD\u6570\u4E0D\u80FD\u7528 yield \u547D\u4EE4\uFF0C\u4E0D\u80FD\u7528\u4F5C Generator \u51FD\u6570\uFF1B\u666E\u901A\u51FD\u6570\u53EF\u4EE5\u3002

\u4F8B 1:

\`\`\`js
function Person() {
  this.age = 0;

  setInterval(function growUp() {
    // \u8FD9\u91CC\u7684 this \u6307\u5411\u5168\u5C40\u5BF9\u8C61\uFF08\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF09\u6216 undefined\uFF08\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF09
    this.age++;
    console.log('LOG1', this.age); // NaN
  }, 1000);

  setInterval(() => {
    // \u8FD9\u91CC\u7684 this \u7EE7\u627F\u81EA\u5916\u56F4\u4F5C\u7528\u57DF\uFF0C\u5373 Person \u6784\u9020\u51FD\u6570\u7684\u4F5C\u7528\u57DF
    this.age++;
    console.log('LOG2', this.age); // 1, 2, 3 ...
  }, 1000);
}

const p = new Person();
\`\`\`

\u4F8B 2:

\`\`\`js
function sum() {
  for (let i = 0; i < arguments.length; i++) {
    console.log('sum', arguments[i]); // 1, 2, 3
  }
}

sum(1, 2, 3);

const sum1 = (...args) => {
  for (let i = 0; i < args.length; i++) {
    console.log('sum1', args[i]); // 1, 2, 3
  }
};

sum1(1, 2, 3);
\`\`\`

\u4F8B 3:

\`\`\`js
function Person(name) {
  this.name = name;
}

console.log(Person.prototype); // \u8F93\u51FA: {constructor: \u0192}
const p = new Person('Alice');
console.log(p.name); // \u8F93\u51FA: Alice

const Person1 = name => {
  this.name = name;
};

console.log(Person1.prototype); // \u8F93\u51FA: undefined
const p1 = new Person1('Alice'); // \u629B\u51FA\u9519\u8BEF\uFF1APerson1 is not a constructor
\`\`\`

\u4F8B 4:

\`\`\`js
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next().value); // \u8F93\u51FA: 1
console.log(gen.next().value); // \u8F93\u51FA: 2
console.log(gen.next().value); // \u8F93\u51FA: 3

const generator1 = () => {
    yield 1; // SyntaxError: Unexpected identifier
};
\`\`\`

- \u7BAD\u5934\u51FD\u6570\u4E2D this \u6307\u5411\u51FD\u6570\u5B9A\u4E49\u65F6\u6240\u5728\u7684\u5BF9\u8C61\uFF1B
- \u666E\u901A\u51FD\u6570\u7684 this \u6307\u5411\u51FD\u6570\u8C03\u7528\u65F6\u6240\u5728\u7684\u5BF9\u8C61\uFF1B
- \u7BAD\u5934\u51FD\u6570\u672C\u8EAB\u6CA1\u6709 this\uFF0C\u5176\u5BF9 this \u7684\u8BBF\u95EE\u7EE7\u627F\u81EA\u5916\u90E8\u4E0A\u4E0B\u6587\u3002

\`\`\`js
var foo = () => {
  console.log('\u7BAD\u5934\u51FD\u6570\uFF1A', this.box);
};
var bar = function() {
  console.log('\u666E\u901A\u51FD\u6570\uFF1A', this.box);
};
var box = 10;

foo.call({ box: 20 }); // \u7BAD\u5934\u51FD\u6570\uFF1A10
bar.call({ box: 20 }); // \u666E\u901A\u51FD\u6570\uFF1A20
bar(); // \u666E\u901A\u51FD\u6570\uFF1A10
foo(); // \u7BAD\u5934\u51FD\u6570\uFF1A10
\`\`\`

\u6B64\u4F8B\u4E2D\uFF0C\u7BAD\u5934\u51FD\u6570\u5B9A\u4E49\u5728 window \u5BF9\u8C61\u4E2D\uFF0Cthis \u6307\u5411 window \u5BF9\u8C61\u3002

\`\`\`js
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 1;

foo.call({ id: 2 }); // id: 2
\`\`\`

\u6B64\u4F8B\u4E2D\uFF0C\u7BAD\u5934\u51FD\u6570\u5B9A\u4E49\u5728 foo \u51FD\u6570\u4E2D\uFF0C\u800C foo \u662F\u4E00\u4E2A\u666E\u901A\u51FD\u6570\uFF0Cfoo \u8C03\u7528\u65F6\u7684\u5BF9\u8C61\u662F{ id: 2 }\uFF0C\u6240\u4EE5\u7BAD\u5934\u51FD\u6570\u4E2D this \u6307\u5411 { id: 2 }\u3002

\`\`\`js
function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}

var id = 0;

var f = foo.call({ id: 1 });

var t1 = f.call({ id: 2 })()(); // id: 1
var t2 = f().call({ id: 3 })(); // id: 1
var t3 = f()().call({ id: 4 }); // id: 1
\`\`\`

\u6B64\u4F8B\u4E2D\uFF0C\u53EF\u4EE5\u770B\u51FA\uFF0C\u666E\u901A\u51FD\u6570\u53EF\u4EE5\u901A\u8FC7 \`call()\` \u6539\u53D8 this \u6307\u5411\uFF0C\u4F46\u5728\u7BAD\u5934\u51FD\u6570\u4E2D\u5E76\u4E0D\u80FD\u901A\u8FC7 \`call()\` \u6539\u53D8 this \u7684\u6307\u5411\u3002

### this \u6307\u5411

\u4EE3\u7801\u4E00\uFF1A

\`\`\`js
var name = 'The Window';
var object = {
  name: 'My Object',
  getNameFunc: function() {
    return function() {
      return this.name;
    };
  },
};
console.log(object.getNameFunc()()); // The Window
\`\`\`

\u4EE3\u7801\u4E8C\uFF1A

\`\`\`js
var name = 'The Window';
var object = {
  name: 'My Object',
  getNameFunc: function() {
    var that = this;
    return function() {
      return that.name;
    };
  },
};
console.log(object.getNameFunc()()); // My Object
\`\`\`

\u5206\u6790\uFF1A

this \u5BF9\u8C61\u662F\u5728\u8FD0\u884C\u65F6\u57FA\u4E8E\u51FD\u6570\u7684\u6267\u884C\u73AF\u5883\u7ED1\u5B9A\u7684\u3002

\u7B2C\u4E00\u6BB5\u4EE3\u7801\u4E2D\uFF0Cthis \u5173\u952E\u5B57\u6307\u5411\u7684\u662F\u5168\u5C40\u5BF9\u8C61\uFF08\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\u662F window\uFF09\uFF0C\u56E0\u6B64 this.name \u8FD4\u56DE\u7684\u662F\u5168\u5C40\u53D8\u91CF name \u7684\u503C\uFF0C\u5373 'The Window'

\u7B2C\u4E8C\u6BB5\u4EE3\u7801\u4E2D\uFF0C\u901A\u8FC7\u5F15\u5165 that \u53D8\u91CF\u6765\u4FDD\u5B58\u5BF9 object \u7684\u5F15\u7528\uFF0C\u4ECE\u800C\u786E\u4FDD\u5185\u90E8\u51FD\u6570\u80FD\u591F\u8BBF\u95EE\u5230 object \u7684 name \u5C5E\u6027\u503C\uFF0C\u5373 'My Object'

### DOMContentLoaded \u548C onload \u7684\u533A\u522B

DOMContentLoaded \u6587\u6863\u52A0\u8F7D\u548C\u89E3\u6790\u5B8C\u6210\u540E\uFF0C\u4E8B\u4EF6\u88AB\u89E6\u53D1\uFF0C\u4E0D\u9700\u8981\u7B49\u5F85\u6837\u5F0F\u3001\u56FE\u50CF\u3001\u5B50\u6846\u67B6\u7684\u52A0\u8F7D\uFF1B

onload \u662F\u5728\u6240\u6709\u8D44\u6E90\u90FD\u52A0\u8F7D\u5B8C\u6210\u540E\u624D\u4F1A\u89E6\u53D1\u3002

JQuery \u4E2D\u7684\`$(document).ready()\`\u662F\u5728 DOMContentLoaded \u4E0A\u5C01\u88C5\u5B9E\u73B0\u7684\u3002

## \u7B26\u53F7

### \u903B\u8F91\u6216\uFF08||\uFF09\u4E0E\u7A7A\u503C\u5408\u5E76\uFF08??\uFF09

<span style="color: #00b050">\u76F8\u540C\uFF1A</span>

\u90FD\u80FD\u8FC7\u6EE4\u4E00\u4E9B\u8868\u73B0\u4E3A false \u7684\u503C\u3002

<span style="color: #f00">\u533A\u522B\uFF1A</span>

\u903B\u8F91\u6216\uFF08||\uFF09\uFF1A\u5982\u5DE6\u4FA7\u4E3A\u771F\u503C\uFF0C\u8FD4\u56DE\u5DE6\u4FA7\uFF0C\u5426\u5219\u8FD4\u56DE\u53F3\u4FA7\u64CD\u4F5C\u6570\u3002

\u771F\u503C\u5305\u62EC\u6240\u6709\u975E\u5047\u503C\uFF08falsy\uFF09\u7684\u503C\uFF0C\u5982\u975E\u96F6\u6570\u5B57\u3001\u975E\u7A7A\u5B57\u7B26\u4E32\u3001\u975E null \u548C\u975E undefined \u7684\u5BF9\u8C61\u7B49\u3002

\u7A7A\u503C\u5408\u5E76\uFF08??\uFF09\uFF1A\u4EC5\u8003\u8651 null \u548C undefined\u3002

\`\`\`js
var a = 0 || 123; // a \u4E3A 123
var b = null || 123; // b \u4E3A 123
var c = 0 ?? 123; // c \u4E3A 0
var d = null ?? 123; // d \u4E3A 123
\`\`\`

## \u65B9\u6CD5

### \u6570\u7EC4/\u5BF9\u8C61\u904D\u5386\u65B9\u6CD5

| \u65B9\u6CD5   | \u7528\u9014/\u533A\u522B                      |
| ------ | ------------------------------ |
| for of | \u904D\u5386\u6570\u7EC4\u7684\u503C                   |
| for in | \u904D\u5386\u6570\u7EC4\u7684\u7D22\u5F15\u3001\u904D\u5386\u5BF9\u8C61\u7684\u5C5E\u6027 |

\`\`\`js
var myArray = ['a', 'b', 'c', 'd'];
for (var value of myArray) {
  console.log(value); // a, b, c, d
}
for (var index in myArray) {
  console.log(index); // 0, 1, 2, 3
}
\`\`\`

| \u65B9\u6CD5                 | \u7528\u9014/\u533A\u522B                    |
| -------------------- | ---------------------------- |
| for(let k in obj) {} | \u904D\u5386\u5BF9\u8C61\u7684\u53EF\u679A\u4E3E\u5C5E\u6027         |
| Object.keys(obj)     | \u8FD4\u56DE\u5C5E\u6027\u540D\u7684\u6570\u7EC4             |
| Object.values(obj)   | \u8FD4\u56DE\u5C5E\u6027\u503C\u7684\u6570\u7EC4             |
| Object.entries(obj)  | \u8FD4\u56DE\u5C5E\u6027\u540D\u4E0E\u5C5E\u6027\u503C\u7EC4\u6210\u7684\u6570\u7EC4 |

\`\`\`js
const person = {
  name: 'Alice',
  age: 30,
  city: 'New York',
  occupation: 'Engineer',
};

for (let key in person) {
  // \u786E\u4FDD\u53EA\u5904\u7406\u5BF9\u8C61\u81EA\u8EAB\u7684\u5C5E\u6027\uFF0C\u4E0D\u5305\u62EC\u539F\u578B\u94FE\u4E0A\u7684\u5C5E\u6027
  if (person.hasOwnProperty(key)) {
    console.log(\`Key: \${key}, Value: \${person[key]}\`);
  }
}
// \u8F93\u51FA:
// Key: name, Value: Alice
// Key: age, Value: 30
// Key: city, Value: New York
// Key: occupation, Value: Engineer

const keys = Object.keys(person);
console.log(keys);
// \u8F93\u51FA: [ 'name', 'age', 'city', 'occupation' ]

const values = Object.values(person);
console.log(values);
// \u8F93\u51FA: [ 'Alice', 30, 'New York', 'Engineer' ]

const entries = Object.entries(person);
console.log(entries);
// \u8F93\u51FA: [ [ 'name', 'Alice' ], [ 'age', 30 ], [ 'city', 'New York' ], [ 'occupation', 'Engineer' ] ]
\`\`\`

| \u65B9\u6CD5    | \u7528\u9014/\u533A\u522B                                          |
| ------- | -------------------------------------------------- |
| while   | \u9002\u7528\u4E8E\u672A\u77E5\u5FAA\u73AF\u6B21\u6570\u7684\u573A\u666F\uFF0C\u8981\u6709\u7ED3\u675F\u6761\u4EF6\uFF0C\u80FD\u7EC8\u6B62\u5FAA\u73AF |
| for     | \u9002\u7528\u4E8E\u5DF2\u77E5\u5FAA\u73AF\u6B21\u6570\u7684\u573A\u666F\uFF0C\u80FD\u7EC8\u6B62\u5FAA\u73AF               |
| for of  | \u80FD\u7EC8\u6B62\u5FAA\u73AF                                         |
| forEach | \u4E0D\u80FD\u7EC8\u6B62\u5FAA\u73AF                                       |
| map     | \u8FD4\u56DE\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u539F\u6570\u7EC4\u4E0D\u4F1A\u88AB\u4FEE\u6539                   |

\u7EC8\u6B62\u5FAA\u73AF\uFF1Abreak\uFF08\u8DF3\u51FA\u6574\u4E2A\u5FAA\u73AF\uFF09\u3001continue\uFF08\u8DF3\u51FA\u672C\u6B21\u5FAA\u73AF\uFF09\u3001return\uFF08\u4E0D\u4EC5\u4F1A\u8DF3\u51FA\u5FAA\u73AF\uFF0C\u8FD8\u4F1A\u7EC8\u6B62\u6574\u4E2A\u51FD\u6570\uFF09

\`\`\`js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // \u5F53 i \u7B49\u4E8E 5 \u65F6\u8DF3\u51FA\u5FAA\u73AF
  }
  console.log(i);
}
// \u8F93\u51FA: 0 1 2 3 4

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // \u5F53 i \u7B49\u4E8E 5 \u65F6\u8DF3\u8FC7\u672C\u6B21\u5FAA\u73AF\u7684\u5269\u4F59\u90E8\u5206
  }
  console.log(i);
}
// \u8F93\u51FA: 0 1 2 3 4 6 7 8 9 \uFF08\u6CE8\u610F\u6CA1\u6709\u8F93\u51FA 5\uFF09

function findNumber(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // \u627E\u5230\u76EE\u6807\u6570\u5B57\u65F6\u8FD4\u56DE\u5176\u7D22\u5F15\uFF0C\u5E76\u7ED3\u675F\u51FD\u6570\u6267\u884C
    }
  }
  return -1; // \u5982\u679C\u6CA1\u6709\u627E\u5230\u76EE\u6807\u6570\u5B57\uFF0C\u8FD4\u56DE -1
}

const numbers = [1, 2, 3, 4, 5];
const target = 3;
const index = findNumber(numbers, target);
console.log(index); // \u8F93\u51FA: 2\uFF0C\u56E0\u4E3A 3 \u5728\u6570\u7EC4\u4E2D\u7684\u7D22\u5F15\u662F 2
\`\`\`

### escape\u3001encodeURI \u4E0E encodeURIComponent

<span style="color: #00b050">\u76F8\u540C\uFF1A</span>

js \u4E2D\u7684\u7F16\u7801\u51FD\u6570\uFF0C\u53EF\u4EE5\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u52A0\u5BC6\u8F6C\u7801

<span style="color: #f00">\u533A\u522B\uFF1A</span>

\u4F8B\u5982\uFF0C\u5BF9\u5B57\u7B26\u4E32\u201C\`<Hello+World>\`\u201D\u52A0\u5BC6\uFF1A

| \u52A0\u5BC6\u65B9\u5F0F           | \u52A0\u5BC6\u7ED3\u679C            | \u5BF9\u5E94\u89E3\u7801\u51FD\u6570       |
| ------------------ | ------------------- | ------------------ |
| escape\uFF08\u5DF2\u5E9F\u5F03\uFF09   | %3CHello+World%3E   | unescape           |
| encodeURI          | %3CHello+World%3E   | decodeURI          |
| encodeURIComponent | %3CHello%2BWorld%3E | decodeURIComponent |

escape \u4E0D\u7F16\u7801\u7684\u5B57\u7B26\u6709 69 \u4E2A\uFF1A

\\*\u3001+\u3001-\u3001.\u3001/\u3001@\u3001\\_\u30010 \uFF5E 9\u3001a \uFF5E z\u3001A \uFF5E Z

\u800C\u4E14 escape \u5BF9 0 \uFF5E 255 \u4EE5\u5916\u7684 unicode \u503C\u8FDB\u884C\u7F16\u7801\u65F6\u8F93\u51FA%u\\*\\*\\*\\*\u683C\u5F0F\u3002

encodeURI \u4E0D\u7F16\u7801\u7684\u5B57\u7B26\u6709 82 \u4E2A\uFF1A

!\u3001#\u3001\\$\u3001&\u3001'\u3001(\u3001)\u3001\\*\u3001+\u3001,\u3001-\u3001.\u3001/\u3001:\u3001;\u3001=\u3001?\u3001@\u3001\\_\u3001~\u30010 \uFF5E 9\u3001a \uFF5E z\u3001A \uFF5E Z

encodeURIComponent \u4E0D\u7F16\u7801\u7684\u5B57\u7B26\u6709 71 \u4E2A\uFF1A

!\u3001'\u3001(\u3001)\u3001\\*\u3001-\u3001.\u3001\\_\u3001~\u30010 \uFF5E 9\u3001a \uFF5E z\u3001A \uFF5E Z

<span style="color: #e36c09">tips\uFF1A</span>ECMAScript v3 \u53CD\u5BF9\u4F7F\u7528 unescape()\uFF0C\u63A8\u8350\u4F7F\u7528 decodeURI() \u548C decodeURIComponent() \u66FF\u4EE3\u5B83\u3002

### Math.ceil()\u3001Math.floor()\u3001Math.round()\u4E0E(num).toFixed()

<span style="color: #00b050">\u76F8\u540C\uFF1A</span>

Math \u5BF9\u8C61\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5BF9\u6570\u503C\u53D6\u6574\u3002

<span style="color: #f00">\u533A\u522B\uFF1A</span>

| \u65B9\u6CD5                 | \u533A\u522B                                                 |
| -------------------- | ---------------------------------------------------- |
| Math.ceil()          | \u5411\u4E0A\u53D6\u6574\uFF0C\u5373\u5C06\u6570\u503C\u5411\u4E0A\u820D\u5165\u4E3A\u6700\u63A5\u8FD1\u7684\u6574\u6570             |
| Math.floor()         | \u5411\u4E0B\u53D6\u6574\uFF0C\u5373\u5C06\u6570\u503C\u5411\u4E0B\u820D\u5165\u4E3A\u6700\u63A5\u8FD1\u7684\u6574\u6570             |
| Math.round()         | \u56DB\u820D\u4E94\u5165\uFF0C\u5373\u5C06\u6570\u503C\u56DB\u820D\u4E94\u5165\u4E3A\u6700\u63A5\u8FD1\u7684\u6574\u6570             |
| (num).toFixed(digit) | \u56DB\u820D\u4E94\u5165\uFF0C\u53EF\u4EE5\u4F20\u5165\u5C0F\u6570\u4F4D\uFF08\u7F3A\u7701\u4E3A 0\uFF09\uFF0C\u8FD4\u56DE\u503C\u4E3A\u5B57\u7B26\u4E32 |

\uFF08\u8BB0\u5FC6\u65B9\u6CD5\uFF1Aceil \u6709\u5929\u82B1\u677F\u7684\u610F\u601D\uFF0C\u6240\u4EE5\u662F\u5411\u4E0A\u53D6\u6574\uFF1Bfloor \u6709\u5730\u677F\u7684\u610F\u601D\uFF0C\u6240\u4EE5\u662F\u5411\u4E0B\u53D6\u6574\uFF1Bround \u6709\u5927\u7EA6\u7684\u610F\u601D\uFF0C\u6240\u4EE5\u662F\u7EA6\u7B49\u4E8E\uFF08\u56DB\u820D\u4E94\u5165\uFF09\uFF09

\`\`\`js
console.log(Math.ceil(4.5)); // 5
console.log(Math.floor(4.5)); // 4
console.log(Math.round(4.5)); // 5
console.log((4.5).toFixed()); // '5'
\`\`\`

### window.onload \u548C window.addEventListener('load', Func) \u7684\u533A\u522B

window.onload \u662F\u4E00\u4E2A\u5C5E\u6027\uFF0C\u5982\u679C\u591A\u6B21\u8D4B\u503C\uFF0C\u540E\u9762\u7684\u8D4B\u503C\u4F1A\u8986\u76D6\u524D\u9762\u7684\u8D4B\u503C\uFF0C\u8FD9\u610F\u5473\u7740\u53EA\u6709\u6700\u540E\u4E00\u4E2A\u8D4B\u503C\u7684\u51FD\u6570\u4F1A\u88AB\u6267\u884C\u3002

window.addEventListener('load', Func) \u662F\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7\u591A\u6B21\u8C03\u7528\u5B83\u6765\u6DFB\u52A0\u591A\u4E2A\u4E8B\u4EF6\u76D1\u542C\u5668\u3002\u6BCF\u4E2A\u76D1\u542C\u5668\u90FD\u4F1A\u6309\u6DFB\u52A0\u7684\u987A\u5E8F\u72EC\u7ACB\u6267\u884C\uFF0C\u4E0D\u4F1A\u56E0\u4E3A\u540E\u7EED\u6DFB\u52A0\u7684\u76D1\u542C\u5668\u800C\u88AB\u8986\u76D6\u3002

\u6269\u5C55\uFF1A\u7C7B\u4F3C\u7684\u5982 window.onclick\u3001window.addEventListener('click', Func)

### isNaN \u548C Number.isNaN \u7684\u533A\u522B

isNaN \u5728\u5904\u7406\u975E\u6570\u5B57\u7C7B\u578B\u7684\u503C\u65F6\uFF0C\u4F1A\u5148\u5C1D\u8BD5\u5C06\u8FD9\u4E2A\u503C\u8F6C\u6362\u6210\u6570\u5B57\uFF0C\u7136\u540E\u518D\u5224\u65AD\u5176\u662F\u5426\u4E3A NaN\u3002\u5982\u679C\u8F6C\u6362\u5931\u8D25\uFF0C\u5219\u7ED3\u679C\u4E3A **true**\u3002

Number.isNaN \u4E0D\u4F1A\u5C1D\u8BD5\u8F6C\u6362\uFF0C\u53EA\u68C0\u67E5\u4E00\u4E2A\u503C\u662F\u5426\u662F NaN\u3002

\`\`\`js
console.log(isNaN('abc')); // \u8F93\u51FA: true\uFF0C\u56E0\u4E3A "abc" \u4E0D\u80FD\u88AB\u8F6C\u6362\u4E3A\u6570\u5B57
console.log(Number.isNaN('abc')); // \u8F93\u51FA: false\uFF0C\u56E0\u4E3A "abc" \u4E0D\u7B49\u4E8E NaN
\`\`\`

### Object.is() \u548C === \u7684\u533A\u522B

\u5176\u4ED6\u60C5\u51B5\u5B8C\u5168\u4E00\u81F4\uFF0C\u4F46\u662F\u6709\u4EE5\u4E0B\u4E24\u70B9\u4E0D\u540C\uFF1A

\`\`\`js
// NaN \u7684\u5904\u7406
Object.is(NaN, NaN) \u2192 true
NaN === NaN \u2192 false

// +0 \u548C -0 \u7684\u5904\u7406
Object.is(+0, -0) \u2192 false
+0 === -0 \u2192 true
\`\`\`

### Reflect.has \u548C hasOwnProperty \u7684\u533A\u522B

hasOwnProperty \u662F Object.prototype \u4E0A\u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u7528\u4E8E\u68C0\u67E5\u5BF9\u8C61**\u81EA\u8EAB**\uFF08\u800C\u4E0D\u662F\u539F\u578B\u94FE\u4E0A\uFF09\u662F\u5426\u5177\u6709\u6307\u5B9A\u7684\u5C5E\u6027\u3002\u5B83\u662F\u4E00\u4E2A\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u53EA\u80FD\u88AB\u5BF9\u8C61\u5B9E\u4F8B\u8C03\u7528\u3002

Reflect.has \u662F ES6 \u5F15\u5165\u7684 Reflect \u5BF9\u8C61\u4E0A\u7684\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5\uFF0C\u7528\u4E8E\u68C0\u67E5\u5BF9\u8C61\uFF08\u5305\u62EC\u5176\u539F\u578B\u94FE\uFF09\u4E0A\u662F\u5426\u5B58\u5728\u67D0\u4E2A\u5C5E\u6027\u3002\u5B83\u662F\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u901A\u8FC7 Reflect \u5BF9\u8C61\u76F4\u63A5\u8C03\u7528\u3002

\`\`\`js
let parent = { inheritedProp: 'I am inherited' };
let child = Object.create(parent);
child.ownProp = 'I am own';

console.log(child.hasOwnProperty('inheritedProp')); // \u8F93\u51FA: false\uFF0C\u56E0\u4E3A 'inheritedProp' \u662F\u4ECE\u539F\u578B\u7EE7\u627F\u7684
console.log(Reflect.has(child, 'inheritedProp')); // \u8F93\u51FA: true\uFF0C\u56E0\u4E3A 'inheritedProp' \u5B58\u5728\u4E8E\u539F\u578B\u94FE\u4E0A
console.log(child.hasOwnProperty('ownProp')); // \u8F93\u51FA: true\uFF0C\u56E0\u4E3A 'ownProp' \u662F\u5BF9\u8C61\u81EA\u8EAB\u7684\u5C5E\u6027
console.log(Reflect.has(child, 'ownProp')); // \u8F93\u51FA: true\uFF0C\u56E0\u4E3A 'ownProp' \u662F\u5BF9\u8C61\u81EA\u8EAB\u7684\u5C5E\u6027
\`\`\`

### Reflect.ownKeys \u548C Object.keys \u7684\u533A\u522B

Object.keys \u662F ES5 \u5F15\u5165\u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u7528\u4E8E\u8FD4\u56DE\u4E00\u4E2A\u7531\u7ED9\u5B9A\u5BF9\u8C61\u81EA\u8EAB\u53EF\u679A\u4E3E\u5C5E\u6027\u7EC4\u6210\u7684\u6570\u7EC4\u3002\u5B83\u53EA\u8FD4\u56DE\u5BF9\u8C61\u81EA\u8EAB\u7684**\u53EF\u679A\u4E3E**\u5C5E\u6027\u952E\uFF0C\u4E0D\u5305\u62EC\u7EE7\u627F\u7684\u5C5E\u6027\uFF0C\u4E5F\u4E0D\u5305\u62EC\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u952E\u6216 Symbol \u7C7B\u578B\u7684\u5C5E\u6027\u952E\u3002

Reflect.ownKeys \u662F ES6 \u5F15\u5165\u7684 Reflect \u5BF9\u8C61\u4E0A\u7684\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5\uFF0C\u7528\u4E8E\u8FD4\u56DE\u4E00\u4E2A\u7531\u76EE\u6807\u5BF9\u8C61\u81EA\u8EAB\u7684\u6240\u6709\u5C5E\u6027\u952E\u7EC4\u6210\u7684\u6570\u7EC4\u3002\u5B83\u4E0D\u4EC5\u8FD4\u56DE\u5BF9\u8C61\u81EA\u8EAB\u7684\u53EF\u679A\u4E3E\u5C5E\u6027\u952E\uFF0C\u8FD8\u8FD4\u56DE\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u952E\u4EE5\u53CA Symbol \u7C7B\u578B\u7684\u5C5E\u6027\u952E\u3002

\`\`\`js
const obj = { a: 1, b: 2 };
Object.defineProperty(obj, 'c', { value: 3, enumerable: false });
obj[Symbol('d')] = 4;

console.log(Reflect.ownKeys(obj)); // \u8F93\u51FA: ['a', 'b', 'c', Symbol(d)]
console.log(Object.keys(obj)); // \u8F93\u51FA: ['a', 'b']
\`\`\`

### performance.now() \u4E0E Date.now()

- \u8D77\u59CB\u65F6\u95F4\uFF1Aperformance.now() \u7684\u8D77\u70B9\u662F\u9875\u9762\u52A0\u8F7D\u65F6\u95F4\uFF0C\u800C Date.now() \u7684\u8D77\u70B9\u662F Unix \u65F6\u95F4\u7EAA\u5143\u3002
- \u7CBE\u5EA6\uFF1Aperformance.now() \u63D0\u4F9B\u5FAE\u79D2\u7EA7\u7CBE\u5EA6\uFF0C\u800C Date.now() \u4EC5\u63D0\u4F9B\u6BEB\u79D2\u7EA7\u7CBE\u5EA6\u3002
- \u7CFB\u7EDF\u65F6\u95F4\u5F71\u54CD\uFF1Aperformance.now() \u4E0D\u53D7\u7CFB\u7EDF\u65F6\u95F4\u8C03\u6574\u5F71\u54CD\uFF0C\u800C Date.now() \u4F1A\u53D7\u5230\u5F71\u54CD\u3002
- \u517C\u5BB9\u6027\uFF1ADate.now() \u662F JavaScript \u7684\u6807\u51C6\u65B9\u6CD5\uFF0C\u9002\u7528\u4E8E\u6240\u6709\u73AF\u5883\uFF1Bperformance.now() \u662F Web API\uFF0C\u652F\u6301\u8F83\u65B0\u7248\u672C\u7684\u6D4F\u89C8\u5668\u548C Node.js\u3002

\u4F7F\u7528\u573A\u666F\uFF1A

- \u5982\u679C\u9700\u8981\u4E0E\u5B9E\u9645\u65F6\u95F4\u76F8\u5173\u8054\uFF0C\u8BF7\u4F7F\u7528 Date.now()\u3002
- \u5982\u679C\u9700\u8981\u9AD8\u7CBE\u5EA6\u7684\u65F6\u95F4\u6D4B\u91CF\uFF0C\u5C24\u5176\u662F\u6027\u80FD\u5206\u6790\uFF0C\u8BF7\u9009\u62E9 performance.now()\u3002
- \u5728\u8DE8\u9875\u9762\u6216\u8DE8\u4E0A\u4E0B\u6587\u6BD4\u8F83\u65F6\u95F4\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 performance.timeOrigin + performance.now() \u6765\u8FD1\u4F3C\u7B49\u6548\u4E8E Date.now()\u3002

### WeakMap\u3001Map\u3001Object

| \u7C7B\u578B          | \u952E\u7C7B\u578B                       | \u503C\u7C7B\u578B   | \u53EF\u8FED\u4EE3 | \u5F31\u5F15\u7528 | \u7279\u70B9                                                             |
| ------------- | ---------------------------- | -------- | ------ | ------ | ---------------------------------------------------------------- |
| **\`Map\`**     | **\u4EFB\u610F\u7C7B\u578B**\uFF08\u5BF9\u8C61\u3001\u539F\u59CB\u503C\uFF09 | \u4EFB\u610F\u7C7B\u578B | \u2705     | \u274C     | \u4FDD\u6301\u63D2\u5165\u987A\u5E8F\uFF0C\u652F\u6301\u904D\u5386\u3001\`size\` \u5C5E\u6027                              |
| **\`WeakMap\`** | **\u4EC5\u5BF9\u8C61**\uFF08\u975E\u539F\u59CB\u503C\uFF09       | \u4EFB\u610F\u7C7B\u578B | \u274C     | \u2705     | \u952E\u662F\u5F31\u5F15\u7528\uFF08\u4E0D\u963B\u6B62\u5783\u573E\u56DE\u6536\uFF09\uFF0C\u4E0D\u53EF\u904D\u5386\uFF0C\u65E0 \`size\`                |
| **\`Object\`**  | **\u5B57\u7B26\u4E32\u6216 Symbol**          | \u4EFB\u610F\u7C7B\u578B | \u2705     | \u274C     | \u4F20\u7EDF\u952E\u503C\u5B58\u50A8\uFF0C\u4F46\u952E\u53D7\u9650\uFF1B\u539F\u578B\u53EF\u80FD\u5E72\u6270\u5C5E\u6027\uFF0C\u65E0\u4E13\u7528\u65B9\u6CD5\uFF08\u5982 \`has\`\uFF09 |

### WeakSet\u3001Set

| \u7C7B\u578B          | \u503C\u7C7B\u578B                 | \u53EF\u8FED\u4EE3 | \u5F31\u5F15\u7528 | \u7279\u70B9                                                   |
| ------------- | ---------------------- | ------ | ------ | ------------------------------------------------------ |
| **\`Set\`**     | **\u4EFB\u610F\u7C7B\u578B**           | \u2705     | \u274C     | \u5B58\u50A8\u552F\u4E00\u503C\uFF0C\u4FDD\u6301\u63D2\u5165\u987A\u5E8F\uFF0C\u652F\u6301\u904D\u5386\uFF0C\`size\` \u5C5E\u6027        |
| **\`WeakSet\`** | **\u4EC5\u5BF9\u8C61**\uFF08\u975E\u539F\u59CB\u503C\uFF09 | \u274C     | \u2705     | \u503C\u662F\u5F31\u5F15\u7528\uFF08\u4E0D\u963B\u6B62\u5783\u573E\u56DE\u6536\uFF09\uFF0C\u4E0D\u53EF\u904D\u5386\uFF0C\u65E0 \`size\` \u5C5E\u6027 |
| **\`Array\`**   | **\u4EFB\u610F\u7C7B\u578B**           | \u2705     | \u274C     | \u5141\u8BB8\u91CD\u590D\u503C\uFF0C\u7D22\u5F15\u987A\u5E8F\uFF0C\u652F\u6301\u904D\u5386\uFF0C\`length\` \u5C5E\u6027          |
`}}]);
