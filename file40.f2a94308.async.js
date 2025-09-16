"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[502],{33646:function(e,n,t){t.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## 1. \u6A21\u5757\u6A21\u5F0F (Module Pattern)
\u5C01\u88C5\u79C1\u6709\u53D8\u91CF\u548C\u65B9\u6CD5\uFF0C\u66B4\u9732\u516C\u6709\u63A5\u53E3\u3002
\`\`\`js
const Counter = (() => {
  let count = 0;

  return {
    increment: () => ++count,
    getCount: () => count
  };
})();
\`\`\`

## 2. \u5355\u4F8B\u6A21\u5F0F (Singleton Pattern)
\u786E\u4FDD\u7C7B\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\u3002\u53EF\u4EE5\u7528\u4E8E\u5168\u5C40\u72B6\u6001\u7BA1\u7406\u3001\u5171\u4EAB\u8D44\u6E90\u3002
\`\`\`js
class Logger {
  constructor() {
    if(!Logger.instance) {
      Logger.instance = this;
    }
    return Logger.instance;
  }
  log(message) {
    console.log(message);
  }
}
const logger = new Logger();
\`\`\`

## 3. \u5DE5\u5382\u6A21\u5F0F (Factory Pattern)
\u7B80\u5355\u5DE5\u5382\uFF1A\u751F\u4EA7\u5355\u4E00\u7C7B\u578B\u4EA7\u54C1\uFF08\u5982\u4E0D\u540C\u6837\u5F0F\u7684\u6309\u94AE\uFF09\u3002
\`\`\`js
// 1. \u4EA7\u54C1\u57FA\u7C7B
class Button {
  render() {}
}

// 2. \u5177\u4F53\u4EA7\u54C1
class PrimaryButton extends Button {
  render() { return "\u84DD\u8272\u4E3B\u6309\u94AE" }
}

class SecondaryButton extends Button {
  render() { return "\u7070\u8272\u6B21\u6309\u94AE" }
}

// 3. \u5355\u4E00\u5DE5\u5382\u7C7B
class ButtonFactory {
  createButton(type) {
    switch(type) {
      case 'primary': return new PrimaryButton();
      case 'secondary': return new SecondaryButton();
      default: throw new Error('\u672A\u77E5\u6309\u94AE\u7C7B\u578B');
    }
  }
}

// \u4F7F\u7528\u793A\u4F8B
const factory = new ButtonFactory();
const btn1 = factory.createButton('primary');
console.log(btn1.render()); // "\u84DD\u8272\u4E3B\u6309\u94AE"
\`\`\`

\u62BD\u8C61\u5DE5\u5382\uFF1A\u751F\u4EA7\u591A\u4E2A\u5173\u8054\u4EA7\u54C1\uFF08\u5982\u6309\u94AE+\u56FE\u6807+\u8F93\u5165\u6846\u7684\u5B8C\u6574\u5957\u4EF6\uFF09\u3002
\`\`\`js
// 1. \u62BD\u8C61\u4EA7\u54C1\u63A5\u53E3
class Button {
  render() {}
}

class Icon {
  display() {}
}

// 2. \u5177\u4F53\u4EA7\u54C1\u65CFA\uFF1AMaterial Design
class MaterialButton extends Button {
  render() { return "Material\u98CE\u683C\u6309\u94AE" }
}

class MaterialIcon extends Icon {
  display() { return "Material\u56FE\u6807" }
}

// 3. \u5177\u4F53\u4EA7\u54C1\u65CFB\uFF1AiOS\u8BBE\u8BA1
class IOSButton extends Button {
  render() { return "iOS\u98CE\u683C\u6309\u94AE" }
}

class IOSIcon extends Icon {
  display() { return "iOS\u56FE\u6807" }
}

// ======== \u5DE5\u5382\u4F53\u7CFB ========
// 1. \u62BD\u8C61\u5DE5\u5382\u63A5\u53E3
class UIFactory {
  createButton() {}
  createIcon() {}
}

// 2. \u5177\u4F53\u5DE5\u5382A
class MaterialFactory extends UIFactory {
  createButton() { return new MaterialButton() }
  createIcon() { return new MaterialIcon() }
}

// 3. \u5177\u4F53\u5DE5\u5382B
class IOSFactory extends UIFactory {
  createButton() { return new IOSButton() }
  createIcon() { return new IOSIcon() }
}

// \u4F7F\u7528\u793A\u4F8B
function createUI(factory) {
  return {
    button: factory.createButton(),
    icon: factory.createIcon()
  }
}

// \u521B\u5EFAMaterial\u98CE\u683CUI\u5957\u4EF6
const materialUI = createUI(new MaterialFactory());
console.log(materialUI.button.render()); // "Material\u98CE\u683C\u6309\u94AE"

// \u521B\u5EFAiOS\u98CE\u683CUI\u5957\u4EF6
const iosUI = createUI(new IOSFactory());
console.log(iosUI.icon.display()); // "iOS\u56FE\u6807"
\`\`\`

## 4. \u89C2\u5BDF\u8005\u6A21\u5F0F (Observer Pattern)
\u4E00\u5BF9\u591A\u4F9D\u8D56\u5173\u7CFB\uFF08Subject \u2192 Observers\uFF09\u3002
\`\`\`js
class Subject {
  constructor() {
    this.observers = [];
  }
  subscribe(obs) {
    this.observers.push(obs);
  }
  notify(data) {
    this.observers.forEach(obs => obs.update(data));
  }
}
\`\`\`

## 5. \u53D1\u5E03-\u8BA2\u9605\u6A21\u5F0F (Pub/Sub Pattern)
\u4E0E\u89C2\u5BDF\u8005\u533A\u522B\uFF1A\u901A\u8FC7\u6D88\u606F\u901A\u9053\u89E3\u8026
\`\`\`js
const pubsub = {
  events: {},
  subscribe(event, fn) {
    (this.events[event] || (this.events[event] = [])).push(fn);
  }
  publish(event, data) {
    (this.events[event] || []).forEach(fn => fn(data));
  }
};
\`\`\`

## 6. \u7B56\u7565\u6A21\u5F0F (Strategy Pattern)
\u5C06\u7B97\u6CD5\u7684\u4F7F\u7528\u548C\u5B9E\u73B0\u5206\u79BB\u5F00\uFF0C\u907F\u514D\u901A\u8FC7\u591A\u91CD\u5224\u65AD\u8C03\u7528\u4E0D\u540C\u65B9\u6CD5\u3002
\`\`\`js
const strategies = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};
const calculator = (strategy, a, b) => stategies[strategy](a, b);
\`\`\`

## 7. \u88C5\u9970\u8005\u6A21\u5F0F (Decorator Pattern)
\u52A8\u6001\u6269\u5C55\u529F\u80FD\u3002
\`\`\`js
function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class User {
  @readonly name = "John";
}
\`\`\`

## 8. \u4EE3\u7406\u6A21\u5F0F (Proxy Pattern)
Vue3\u4F7F\u7528Proxy\u5B9E\u73B0\u6570\u636E\u54CD\u5E94\u5F0F\uFF1B\u7F13\u5B58\u4EE3\u7406\uFF08\u8BA1\u7B97\u7F13\u5B58\uFF09\u3002

## 9. MVC\u3001MVP\u3001MVVM\uFF08\u67B6\u6784\u6A21\u5F0F\uFF09

- MVC\uFF1AController\u5904\u7406\u903B\u8F91\uFF0C\u66F4\u65B0Model\u548CView\uFF0C\u5982Backbone.js
- MVVM\uFF1A\u6570\u636E\u7ED1\u5B9A\u81EA\u52A8\u540C\u6B65View-Model\uFF0C\u5982Vue.js
Angular\uFF08MVC/MVVM\uFF09\u3001Vue\uFF08MVVM\uFF09\u3001React\uFF08\u901A\u5E38\u88AB\u8BA4\u4E3A\u662FView\u5C42\uFF0C\u4F46\u53EF\u4EE5\u914D\u5408Flux/Redux\u5B9E\u73B0\u7C7B\u4F3C\u6A21\u5F0F\uFF09\u3002
`}}]);
