"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[9220],{14527:function(e,n,o){o.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u6784\u9020\u51FD\u6570\u4E0E\u539F\u578B\u5BF9\u8C61

\u6BCF\u4E2A\u6784\u9020\u51FD\u6570\u90FD\u6709\u4E00\u4E2A\`prototype\`\u5C5E\u6027\uFF0C\u6307\u5411\u5176\u539F\u578B\u5BF9\u8C61\u3002\u539F\u578B\u5BF9\u8C61\u5305\u542B\u6240\u6709\u5B9E\u4F8B\u5171\u4EAB\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002

\`\`\`js
function Person(name) {
  this.name = name;
}

// \u5728\u539F\u578B\u4E0A\u6DFB\u52A0\u65B9\u6CD5
Person.prototype.greet = function() {
  console.log(\`Hello, I'm \${this.name}\`);
};

const alice = new Person('Alice');
alice.greet(); // Hello, I'm Alice
\`\`\`

## \u5B9E\u4F8B\u4E0E\u539F\u578B

\u6BCF\u4E2A\u5B9E\u4F8B\u90FD\u6709\u4E00\u4E2A\u5185\u90E8\u6307\u9488[[Prototype]]\uFF08\u53EF\u901A\u8FC7**proto**\u8BBF\u95EE\uFF09\u6307\u5411\u5176\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u3002

\`\`\`js
console.log(alice.__proto__ === Person.prototype); // true
\`\`\`

## \u539F\u578B\u4E0E\u539F\u578B\u94FE

\u5728 JavaScript \u4E2D\uFF0C\u4E00\u5171\u6709\u4E24\u79CD\u7C7B\u578B\u7684\u503C\uFF0C\u539F\u59CB\u503C\u548C\u5BF9\u8C61\u503C\u3002\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u6709\u4E00\u4E2A\u5185\u90E8\u5C5E\u6027[[prototype]]\uFF0C\u6211\u4EEC\u901A\u5E38\u79F0\u4E4B\u4E3A\u539F\u578B\u3002\u539F\u578B\u7684\u503C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u662F null\u3002\u5982\u679C\u5B83\u7684\u503C\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5219\u8FD9\u4E2A\u5BF9\u8C61\u4E5F\u4E00\u5B9A\u6709\u81EA\u5DF1\u7684\u539F\u578B\u3002\u8FD9\u6837\u5C31\u5F62\u6210\u4E86\u4E00\u6761\u7EBF\u6027\u7684\u94FE\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u539F\u578B\u94FE\u3002

![image](https://chenqiuling.github.io/frontend-notes-viewer/images/img_proto.png)

\u8BBF\u95EE\u4E00\u4E2A\u5BF9\u8C61\u7684\u539F\u578B\u53EF\u4EE5\u4F7F\u7528 ES5 \u4E2D\u7684 Object.getPrototypeOf \u65B9\u6CD5\uFF0C\u6216\u8005 ES6 \u4E2D\u7684 \`__proto__\` \u5C5E\u6027\u3002

\u539F\u578B\u94FE\u7684\u4F5C\u7528\u662F\u7528\u6765\u5B9E\u73B0\u7EE7\u627F\uFF0C\u6BD4\u5982\u6211\u4EEC\u65B0\u5EFA\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u7684\u65B9\u6CD5\u5C31\u662F\u4ECE\u6570\u7EC4\u7684\u539F\u578B\u4E0A\u7EE7\u627F\u800C\u6765\u7684\u3002

\`\`\`js
var arr = [];
arr.map === Array.prototype.map; // arr.map\u662F\u4ECEarr.__proto__\u4E0A\u7EE7\u627F\u4E0B\u6765\u7684\uFF0Carr.__proto__\u4E5F\u5C31\u662FArray.prototype
\`\`\`

## \u539F\u578B\u94FE\u673A\u5236

\u5F53\u8BBF\u95EE\u5BF9\u8C61\u5C5E\u6027\u65F6\uFF0CJavaScript \u4F1A\u6CBF\u7740\u539F\u578B\u94FE\u5411\u4E0A\u67E5\u627E\uFF1A

1. \u5728\u5BF9\u8C61\u81EA\u8EAB\u67E5\u627E
2. \u5728[[Prototype]]\u6307\u5411\u7684\u539F\u578B\u5BF9\u8C61\u67E5\u627E
3. \u5728\u539F\u578B\u5BF9\u8C61\u7684\u539F\u578B\u4E0A\u67E5\u627E\uFF0C\u76F4\u5230 Object.prototype
4. \u6700\u7EC8\u5230 null \u7ED3\u675F

\`\`\`
\u5B9E\u4F8Balice \u2014\u2014proto\u2014\u2014> Person.prototype \u2014\u2014proto\u2014\u2014> Object.prototype  \u2014\u2014proto\u2014\u2014> null
\`\`\`

\u6211\u4EEC\u6CA1\u6709\u529E\u6CD5\u904D\u5386\u5230\u6240\u6709\u4EE5\u67D0\u4E2A\u5BF9\u8C61\u4E3A\u539F\u578B\u7684\u5BF9\u8C61\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u5411\u4E0A\u904D\u5386\uFF0C\u83B7\u53D6\u5230\u4E00\u4E2A\u5BF9\u8C61\u6240\u6709\u7684\u4E0A\u5C42\u539F\u578B\uFF0C\u8FD9\u4E2A\u539F\u578B\u94FE\u5FC5\u5B9A\u662F\u7EBF\u6027\u7684\uFF0C\u5C3D\u5934\u662F null\u3002

\`\`\`js
function getPrototypeChain(object) {
  var protoChain = [];
  while ((object = object.__proto__)) {
    protoChain.push(object);
  }
  protoChain.push(null);
  return protoChain;
}

getPrototypeChain(alice); // [Person.prototype, Object.prototype, null]
\`\`\`

## \u6838\u5FC3\u5C5E\u6027\u548C\u65B9\u6CD5

1. prototype \u5C5E\u6027
   \u51FD\u6570\u7279\u6709\u7684\u5C5E\u6027\uFF0C\u6307\u5411\u8BE5\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\uFF1B

2. \`__proto__\`\u5C5E\u6027
   \u5B9E\u4F8B\u5BF9\u8C61\u7684\u5C5E\u6027\uFF08\u975E\u6807\u51C6\uFF09\uFF0C\u6709\u7684\u6D4F\u89C8\u5668\u662F[[proto]]\uFF0C\u6307\u5411\u5176\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\uFF1B

3. constructor \u5C5E\u6027
   \u539F\u578B\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027\uFF0C\u6307\u5411\u6784\u9020\u51FD\u6570\u672C\u8EAB\uFF1B

\`\`\`js
console.log(Person.prototype.constructor === Person); // true
\`\`\`

4. Object.getPrototypeOf()

- \u6807\u51C6\u65B9\u6CD5\u83B7\u53D6\u5BF9\u8C61\u7684\u539F\u578B
- \u66FF\u4EE3**proto**

\`\`\`js
console.log(Object.getPrototypeOf(alice) === Person.prototype); // true
\`\`\`

5. Object.setPrototypeOf()

- \u8BBE\u7F6E\u5BF9\u8C61\u7684\u539F\u578B\uFF08\u4E0D\u63A8\u8350\uFF0C\u6027\u80FD\u5DEE\uFF09
- \u66FF\u4EE3**proto**\u8D4B\u503C

\`\`\`js
const obj = {};
const parent = { x: 10 };
Object.setPrototypeOf(obj, parent);
console.log(obj.x); // 10
\`\`\`

6. Object.create()
   \u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u4F7F\u7528\u73B0\u6709\u5BF9\u8C61\u4F5C\u4E3A\u65B0\u5BF9\u8C61\u7684\u539F\u578B\u3002

\`\`\`js
const parent = { x: 10 };
const child = Object.create(parent);
console.log(child.x); // 10
\`\`\`

7. isPrototypeOf()
   \u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u5B58\u5728\u4E8E\u53E6\u4E00\u4E2A\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A\u3002

\`\`\`js
console.log(Person.prototype.isPrototypeOf(alice)); // true
\`\`\`

8. instanceof \u64CD\u4F5C\u7B26
   \u68C0\u6D4B\u6784\u9020\u51FD\u6570\u7684 prototype \u5C5E\u6027\u662F\u5426\u51FA\u73B0\u5728\u5B9E\u4F8B\u7684\u539F\u578B\u94FE\u4E0A\u3002

\`\`\`js
console.log(alice instanceof Person); // true
\`\`\`

## \u539F\u578B\u94FE\u7EE7\u627F

\`\`\`js
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function() {
  console.log(\`say name \${this.name}\`);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = new Parent();

// \u6216\u8005
// Child.prototype = Object.create(Parent.prototype);
// \u4FEE\u590Dconstructor\u6307\u5411
// Child.prototype.constructor = Child;

Child.prototype.sayAge = function() {
  console.log(\`say age \${this.age}\`);
};

const child = new Child('alice', 18);
child.sayName();
child.sayAge();
\`\`\`

\u6269\u5C55\uFF1AObject.create(null)\u548C Object.create({})\u7684\u533A\u522B\uFF1A

- Object.create(null) \u521B\u5EFA\u7684\u5BF9\u8C61\u4E0D\u5177\u6709\u4EFB\u4F55\u5C5E\u6027\u548C\u65B9\u6CD5
- Object.create({}) \u521B\u5EFA\u7684\u5BF9\u8C61\u5177\u6709\u539F\u578B\u94FE\u5C5E\u6027\u548C\u65B9\u6CD5

## ES6 \u7C7B\u4E0E\u539F\u578B

ES6 \u7684 class \u672C\u8D28\u4E0A\u662F\u539F\u578B\u7EE7\u627F\u7684\u8BED\u6CD5\u7CD6\u3002

\`\`\`js
class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log('My name is', this.name);
  }
}

// \u7B49\u4EF7\u4E8E
function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function() {
  console.log('My name is', this.name);
};
\`\`\`

## \u539F\u578B\u6C61\u67D3

1. \u6076\u610F\u4FEE\u6539 Object.prototype \u4F1A\u5F71\u54CD\u6240\u6709\u5BF9\u8C61\u3002

\`\`\`js
Object.prototype.isAdmin = true;

const user = {};
console.log(user.isAdmin); // true
\`\`\`

2. \u9632\u6B62\u539F\u578B\u6C61\u67D3

- \u51BB\u7ED3 Object.prototype
- \u907F\u514D\u4F7F\u7528**proto**
- \u4F7F\u7528 Object.create(null)\u521B\u5EFA\u65E0\u539F\u578B\u5BF9\u8C61

## \u4F18\u5316

\u5C06\u65B9\u6CD5\u653E\u5728\u539F\u578B\u4E0A\u53EF\u8282\u7701\u5185\u5B58\uFF0C\u6240\u6709\u5B9E\u4F8B\u5171\u4EAB\u540C\u4E00\u65B9\u6CD5\u5F15\u7528\u3002

\`\`\`js
// \u63A8\u8350\uFF1A\u65B9\u6CD5\u653E\u5728\u539F\u578B\u4E0A
function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function() {
  /*...*/
};

// \u4E0D\u63A8\u8350\uFF1A\u65B9\u6CD5\u653E\u5728\u6784\u9020\u51FD\u6570\u5185
function Person(name) {
  this.name = name;
  this.sayName = function() {
    /*...*/
  }; // \u6BCF\u4E2A\u5B9E\u4F8B\u90FD\u521B\u5EFA\u65B0\u51FD\u6570
}
\`\`\`

## \u7EC3\u4E60

\u9898\u4E00\uFF1A\u539F\u578B\u94FE\u5173\u7CFB

\`\`\`js
function Foo() {}
function Bar() {}

Bar.prototype = Object.create(Foo.prototype);
const bar = new Bar();

console.log(bar instanceof Bar); // true
console.log(bar instanceof Foo); // true
console.log(Bar.prototype instanceof Foo); // true
\`\`\`

\u9898\u4E8C\uFF1A

\`\`\`js
const parent = { x: 10 };
const child = Object.create(parent);
child.x = 20;

console.log(child.x); // 20
delete child.x;
console.log(child.x); // 10
delete parent.x;
console.log(child.x); // undefined
\`\`\`

\u9898\u4E09\uFF1A

\`\`\`js
function Person() {}
Person.prototype.constructor = function Other() {};

const p = new Person();
console.log(p.constructor === Other); // true
console.log(p instanceof Person); // true
\`\`\`

\u9898\u56DB\uFF1A\u539F\u578B\u4E0E\u5B9E\u4F8B\u65B9\u6CD5\u4F18\u5148\u7EA7

\`\`\`js
function Foo() {
  // \u9759\u6001\u65B9\u6CD5
  Foo.func = function() {
    console.log(1);
  };
  // \u5B9E\u4F8B\u65B9\u6CD5
  this.func = function() {
    console.log(2);
  };
}
Foo.prototype.func = function() {
  console.log(3);
};
Foo.func = function() {
  console.log(4);
};

Foo.func(); // 4
let obj = new Foo(); // \u521B\u5EFA\u5B9E\u4F8B\uFF0C\u5B9E\u4F8B\u5BF9\u8C61\u4E0A\u7684\u65B9\u6CD5\u4F1A\u8986\u76D6\u539F\u578B\u94FE\u4E0A\u7684\u540C\u540D\u65B9\u6CD5
obj.func(); // 2
Foo.func(); // 1
\`\`\`

\u9898\u4E94\uFF1A\u539F\u578B\u5C5E\u6027\u4FEE\u6539

\`\`\`js
function Person() {}

Person.prototype.friends = [];

let p1 = new Person();
let p2 = new Person();

p1.friends.push('Alice');

console.log(p1.friends); // \u8F93\u51FA['Alice']
console.log(p2.friends); // \u8F93\u51FA['Alice']
\`\`\`

\u9898\u516D\uFF1A

\`\`\`js
function Counter() {
  this.count = 0;
  this.increment = function() {
    this.count++;
    console.log(this.count);
  };
}

Counter.prototype.increment = function() {
  this.count += 2;
  console.log(this.count);
};

let c1 = new Counter();
c1.increment(); // \u8F93\u51FA1

let c2 = new Counter();
Counter.prototype.increment.call(c2); // \u8F93\u51FA2
\`\`\`
`}}]);
