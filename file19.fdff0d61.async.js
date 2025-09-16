"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[6664],{52301:function(e,n,t){t.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## this \u6307\u5411

1. \u9ED8\u8BA4\u7ED1\u5B9A
   \u5F53\u51FD\u6570\u72EC\u7ACB\u8C03\u7528\u65F6\uFF0Cthis \u6307\u5411\u5168\u5C40\u5BF9\u8C61\u3002

\`\`\`js
function show() {
  console.log(this); // \u6D4F\u89C8\u5668\u4E2D\uFF1AWindow\uFF0CNode.js\u4E2D\uFF1Aglobal
}
show();

('use strict');
function strictShow() {
  console.log(this); // undefined
}
strictShow();
\`\`\`

2. \u9690\u5F0F\u7ED1\u5B9A\uFF08 \u4E0A\u4E0B\u6587\u7ED1\u5B9A\uFF09
   \u5F53\u51FD\u6570\u4F5C\u4E3A\u5BF9\u8C61\u65B9\u6CD5\u8C03\u7528\u65F6\uFF0Cthis \u6307\u5411\u8C03\u7528\u5BF9\u8C61\uFF1A

\`\`\`js
const user = {
  name: 'abc',
  say: function() {
    console.log(this.name);
  },
};
user.say(); // abc, this -> user

const sayFunc = user.say;
sayFunc(); // undefined, this -> window/global
\`\`\`

3. \u663E\u5F0F\u7ED1\u5B9A\uFF08call/apply/bind\uFF09

\`\`\`js
function introduce(lang) {
  console.log(\`I code in \${lang}. I'm \${this.name}\`);
}

const dev = { name: 'Bob' };
introduce.call(dev, 'JavaScript'); // I code in JavaScript. I'm Bob

introduce.apply(dev, ['JAVA']); // I code in JAVA. I'm Bob

const bindFunc = introduce.bind(dev, 'C++');
bindFunc(); // I code in C++. I'm Bob
\`\`\`

4. new \u7ED1\u5B9A\uFF08\u6784\u9020\u51FD\u6570\uFF09
   \u5F53\u51FD\u6570\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u4F7F\u7528\u65F6\uFF0Cthis \u6307\u5411\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\uFF1A

\`\`\`js
function Person(name) {
  this.name = name;
  this.say = function() {
    console.log(\`I'm \${this.name}\`);
  };
}

const alice = new Person('Alice');
alice.say();
\`\`\`

5. \u7BAD\u5934\u51FD\u6570
   \u7BAD\u5934\u51FD\u6570\u6CA1\u6709\u81EA\u5DF1\u7684 this\uFF0C\u5B83\u7EE7\u627F\u5916\u5C42\u4F5C\u7528\u57DF\u7684 this\uFF1A

\`\`\`js
const timer = {
  seconds: 0,
  start() {
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  },
};
timer.start(); // 1, 2, 3...
\`\`\`

## call\u3001apply\u3001bind

<span style="color: #00b050">\u76F8\u540C\uFF1A</span>

\u90FD\u5C5E\u4E8E Function.prototype \u7684\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u6BCF\u4E2A function \u5B9E\u4F8B\u90FD\u6709 bind\u3001apply\u3001call \u5C5E\u6027\uFF1B

\u90FD\u53EF\u4EE5\u6539\u53D8\u51FD\u6570\u8FD0\u884C\u7684\u4E0A\u4E0B\u6587\u73AF\u5883\uFF0C\u4ECE\u800C\u6539\u53D8 this \u6307\u5411\uFF1B

<span style="color: #f00">\u533A\u522B\uFF1A</span>
| \u7279\u6027 | call | apply | bind |
|-----|-----|-----|-----|
| \u6267\u884C\u65B9\u5F0F | \u7ACB\u5373\u6267\u884C | \u7ACB\u5373\u6267\u884C | \u8FD4\u56DE\u7ED1\u5B9A\u51FD\u6570 |
| \u53C2\u6570\u5F62\u5F0F | \u9017\u53F7\u5206\u9694\u5217\u8868 | \u6570\u7EC4 | \u9017\u53F7\u5206\u9694\u5217\u8868 |
| \u4F7F\u7528\u573A\u666F | \u660E\u786E\u53C2\u6570\u4E2A\u6570 | \u52A8\u6001\u53C2\u6570\u4E2A\u6570 | \u5EF6\u8FDF\u6267\u884C |
| \u8FD4\u56DE\u503C | \u51FD\u6570\u8FD4\u56DE\u503C | \u51FD\u6570\u8FD4\u56DE\u503C | \u65B0\u51FD\u6570 |

- call \u4EE5\u5217\u8868\u5F62\u5F0F\u63A5\u6536\u53C2\u6570\uFF0C\u5373\`func.call(thisArg, arg1, arg2, ...)\`\uFF1B
- apply \u4EE5\u6570\u7EC4\u5F62\u5F0F\u63A5\u6536\u53C2\u6570\uFF0C\u5373\`func.apply(thisArg, [argsArray])\`\uFF1B
- bind \u4E0D\u4F1A\u7ACB\u5373\u6267\u884C\uFF0C\u53EF\u9884\u8BBE\u90E8\u5206\u53C2\u6570\uFF08\u67EF\u91CC\u5316\uFF09\uFF0C\u5373\`func.bind(thisArg[, arg1[, arg2[, ...]]])\`\uFF1B

\u5982\u679C\u6CA1\u6709\u63D0\u4F9B thisArg \u53C2\u6570\uFF0C\u90A3\u4E48 Global \u5BF9\u8C61\u88AB\u7528\u4F5C thisArg\u3002

\`\`\`js
var o = { a: 1, b: 2 };
function add(c, d) {
  return this.a + this.b + c + d;
}
console.log(add.call(o, 10, 20)); // 1 + 2 + 10 + 20 = 33
console.log(add.apply(o, [10, 30])); // 1 + 2 + 10 + 30 = 43
var addFunc = add.bind(o, 10, 40);
console.log(addFunc()); // 1 + 3 + 10 + 40 = 53
\`\`\`

\u6A21\u62DF\u5B9E\u73B0\u4E00\u4E2A call\u3001apply \u548C bind \u65B9\u6CD5\uFF1A

\`\`\`js
Function.prototype.myCall = function(context) {
  const args = [...arguments].slice(1);
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.myApply = function(context) {
  const args = arguments[1] || [];
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.myBind = function(context) {
  const args = [...arguments].slice(1);
  context.fn = this;
  return function() {
    const result = context.fn(...args);
    delete context.fn;
    return result;
  };
};

function greet(...args) {
  return \`\${args}, \${this.name}!\`;
}
greet.myCall({ name: 'ABC' }, 1, 2, 3); // '1,2,3, ABC!'
greet.myApply({ name: 'ABC' }, [1, 2, 3]); // '1,2,3, ABC!'
greet.myBind({ name: 'ABC' }, 1, 2, 3)(); // '1,2,3, ABC!'
\`\`\`
`}}]);
