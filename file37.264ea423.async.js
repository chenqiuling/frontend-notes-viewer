"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[3582],{10091:function(c,n,r){r.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u67EF\u91CC\u5316 (currying)

> \u53EA\u4F20\u9012\u7ED9\u51FD\u6570\u4E00\u90E8\u5206\u53C2\u6570\u6765\u8C03\u7528\u5B83\uFF0C\u8BA9\u5B83\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\u53BB\u5904\u7406\u5269\u4E0B\u7684\u53C2\u6570\u3002\u2014\u2014\u300AMostly adequate guide\u300B

Currying \u4E3A\u5B9E\u73B0\u591A\u53C2\u51FD\u6570\u63D0\u4F9B\u4E86\u4E00\u4E2A\u9012\u5F52\u964D\u89E3\u7684\u5B9E\u73B0\u601D\u8DEF\u3002

\u4F5C\u7528\uFF1A\u5EF6\u8FDF\u8BA1\u7B97\u3001\u53C2\u6570\u590D\u7528\u3001\u52A8\u6001\u751F\u6210\u51FD\u6570

### \u5EF6\u8FDF\u8BA1\u7B97

\u4E00\u4E2A currying \u7684\u51FD\u6570\u9996\u5148\u4F1A\u63A5\u53D7\u4E00\u4E9B\u53C2\u6570\uFF0C\u63A5\u53D7\u4E86\u8FD9\u4E9B\u53C2\u6570\u540E\uFF0C\u8BE5\u51FD\u6570\u5E76\u4E0D\u4F1A\u7ACB\u5373\u6C42\u503C\uFF0C\u800C\u662F\u7EE7\u7EED\u8FD4\u56DE\u53E6\u5916\u4E00\u4E2A\u51FD\u6570\uFF0C\u521A\u624D\u4F20\u5165\u7684\u53C2\u6570\u5728\u51FD\u6570\u5F62\u6210\u7684\u95ED\u5305\u91CC\u88AB\u4FDD\u5B58\u8D77\u6765\u3002\u5F85\u5230\u51FD\u6570\u771F\u6B63\u9700\u8981\u6C42\u503C\u7684\u65F6\u5019\uFF0C\u4E4B\u524D\u4F20\u5165\u7684\u53C2\u6570\u90FD\u4F1A\u88AB\u4E00\u6B21\u6027\u7528\u4E8E\u6C42\u503C\u3002

\`\`\`js
// \u51FD\u6570\u5B9A\u4E49
function add(x, y) {
  return x + y;
}

// \u51FD\u6570\u8C03\u7528
console.log(add(3, 4)); // 7

// \u67EF\u91CC\u5316
function curryingAdd(x) {
  return function(y) {
    return x + y;
  };
}

console.log(curryingAdd(5)(2)); // 7
console.log(curryingAdd(10)(2)); // 12
\`\`\`

\u4E00\u4E2A\u901A\u7528\u7684\u67EF\u91CC\u51FD\u6570

\`\`\`js
function currying(fn, args) {
  var curArgs = args || [];

  return function() {
    var _args = Array.prototype.slice.call(arguments);
    Array.prototype.unshift.apply(_args, curArgs);

    // \u5982\u679C\u53C2\u6570\u4E2A\u6570\u5C11\u4E8E\u88AB\u8C03\u7528\u51FD\u6570\u6240\u9700\u7684\u53C2\u6570\u4E2A\u6570\uFF0C\u5219\u9012\u5F52\u6536\u96C6\u53C2\u6570
    if (_args.length < fn.length) {
      return currying.call(this, fn, _args);
    }

    return fn.apply(this, _args);
  };
}

var fn = currying(function(a, b, c) {
  console.log(a + b + c);
});

fn('a', 'b', 'c'); // abc
fn('a', 'b')('c'); // abc
fn('a')('b', 'c'); // abc
fn('a')('b')('c'); // abc
\`\`\`
`}}]);
