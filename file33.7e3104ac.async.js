"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[5265],{51516:function(o,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u7C7B\u7684\u58F0\u660E

ES5 \u4E2D\uFF1A

\`\`\`js
var Cat = function(name) {
  this.name = name;
};
\`\`\`

ES6 \u4E2D\uFF1A

\`\`\`js
class Cat {
  constructor(name) {
    this.name = name;
  }
}
\`\`\`

## \u7C7B\u7684\u5B9E\u4F8B\u5316

\`\`\`js
new Cat();
\`\`\`

## \u7C7B\u7684\u7EE7\u627F

ES5 \u4E2D\uFF1A

\`\`\`js
function Parent() {
  this.name = '\u5C0F\u9648';
  this.say = function() {
    return 'hello ' + this.name;
  };
}

function Child() {
  Parent.call(this);
  this.age = '18';
}

Child.prototype = Parent.prototype;

var child = new Child();
child.say(); // hello \u5C0F\u9648
\`\`\`

ES6 \u4E2D\uFF1A

\`\`\`js
class Person {
  // \u6784\u9020\u51FD\u6570
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // \u5B9E\u4F8B\u65B9\u6CD5
  introduce() {
    console.log(\`Hello, I'm \${this.name}, \${this.age} years old.\`);
  }

  // \u9759\u6001\u65B9\u6CD5
  static info() {
    console.log('This is a Person class');
  }
}

// \u4F7F\u7528\u7C7B
const alice = new Person('Alice', 30);
alice.introduce(); // Hello, I'm Alice, 30 years old.
Person.info(); // This is a Person class

class Employee extends Person {
  constructor(name, age, position) {
    super(name, age); // \u8C03\u7528\u7236\u7C7B\u6784\u9020\u51FD\u6570
    this.position = position;
  }

  work() {
    console.log(\`\${this.name} is working as \${this.position}\`);
  }

  // \u65B9\u6CD5\u91CD\u5199
  introduce() {
    super.introduce(); // \u8C03\u7528\u7236\u7C7B\u65B9\u6CD5
    console.log(\`I work as \${this.position}\`);
  }
}

const bob = new Employee('Bob', 35, 'Developer');
bob.introduce();
// Hello, I'm Bob, 35 years old.
// I work as Developer
bob.work(); // Bob is working as Developer
\`\`\`
`}}]);
