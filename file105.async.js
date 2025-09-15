"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[7639],{53409:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

\u8282\u6D41\uFF08Throttle\uFF09\u548C\u9632\u6296\uFF08Debounce\uFF09\u7528\u4E8E\u63A7\u5236\u51FD\u6570\u7684\u6267\u884C\u9891\u7387\uFF0C\u63D0\u5347\u6027\u80FD\u548C\u7528\u6237\u4F53\u9A8C\u3002

## \u6838\u5FC3\u533A\u522B

| \u7279\u6027         | \u8282\u6D41 (Throttle)              | \u9632\u6296 (Debounce)                  |
| ------------ | ---------------------------- | -------------------------------- |
| **\u6267\u884C\u65F6\u673A** | \u56FA\u5B9A\u65F6\u95F4\u95F4\u9694\u6267\u884C             | \u4E8B\u4EF6\u505C\u6B62\u540E\u6267\u884C                   |
| **\u6267\u884C\u6B21\u6570** | \u5355\u4F4D\u65F6\u95F4\u5185\u6700\u591A\u6267\u884C\u4E00\u6B21       | \u5355\u4F4D\u65F6\u95F4\u5185\u53EA\u6267\u884C\u4E00\u6B21\uFF08\u6700\u540E\u4E00\u6B21\uFF09 |
| **\u7C7B\u6BD4**     | \u6C34\u9F99\u5934\u9650\u6D41\uFF08\u5300\u901F\u6EF4\u6C34\uFF09       | \u7535\u68AF\u5173\u95E8\uFF08\u7B49\u4EBA\u8FDB\u5B8C\u624D\u5173\u95E8\uFF09       |
| **\u5E94\u7528\u573A\u666F** | \u8FDE\u7EED\u9AD8\u9891\u89E6\u53D1\uFF08\u6EDA\u52A8\u3001\u62D6\u62FD\u7B49\uFF09 | \u7B49\u5F85\u7528\u6237\u64CD\u4F5C\u7ED3\u675F\uFF08\u8F93\u5165\u3001\u7F29\u653E\u7B49\uFF09 |

## \u8282\u6D41

1. \u6EDA\u52A8\u52A0\u8F7D\uFF1A\u6EDA\u52A8\u65F6\u5B9A\u671F\u68C0\u67E5\u4F4D\u7F6E\u52A0\u8F7D\u66F4\u591A\u5185\u5BB9
2. \u62D6\u62FD\u64CD\u4F5C\uFF1A\u63A7\u5236\u5143\u7D20\u79FB\u52A8\u7684\u66F4\u65B0\u9891\u7387
3. \u6309\u94AE\u9632\u91CD\u70B9\u51FB\uFF1A\u9632\u6B62\u7528\u6237\u5FEB\u901F\u591A\u6B21\u70B9\u51FB\u63D0\u4EA4
4. \u9F20\u6807\u79FB\u52A8\u4E8B\u4EF6\uFF1A\u63A7\u5236 mousemove \u4E8B\u4EF6\u5904\u7406\u9891\u7387

\`\`\`js
function throttle(fn, wait) {
  let timer = null;
  let lastRunTime;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRunTime) {
      fn.apply(context, args);
      lastRunTime = Date.now();
    } else {
      clearTimeout(timer);
      const duration = wait - (Date.now() - lastRunTime);
      timer = setTimeout(function() {
        if (duration <= 0) {
          fn.apply(context, args);
          lastRunTime = Date.now();
        }
      }, duration);
    }
  };
}

function getScrollTop(arg) {
  console.log('\u6EDA\u52A8\u6761\u4F4D\u7F6E\uFF1A' + document.documentElement.scrollTop, '\u53C2\u6570\uFF1A' + arg);
}

window.onscroll = throttle(function() {
  getScrollTop('hello');
}, 600);
\`\`\`

## \u9632\u6296

1. \u641C\u7D22\u6846\u8F93\u5165\uFF1A\u7B49\u5F85\u7528\u6237\u505C\u6B62\u8F93\u5165\u540E\u518D\u53D1\u8D77\u641C\u7D22\u8BF7\u6C42
2. \u7A97\u53E3\u5927\u5C0F\u8C03\u6574\uFF1A\u5728\u7528\u6237\u5B8C\u6210\u8C03\u6574\u540E\u518D\u8BA1\u7B97\u5E03\u5C40
3. \u8868\u5355\u9A8C\u8BC1\uFF1A\u7528\u6237\u505C\u6B62\u8F93\u5165\u540E\u8FDB\u884C\u9A8C\u8BC1
4. \u81EA\u52A8\u4FDD\u5B58\uFF1A\u5185\u5BB9\u4FEE\u6539\u505C\u6B62\u540E\u81EA\u52A8\u4FDD\u5B58

\`\`\`js
/**
 * immediate \u662F\u5426\u7ACB\u5373\u6267\u884C\u4E00\u6B21,\u518D\u7B49\u5F85
 */
function debounce(fn, wait, immediate = false) {
  let timer = null;
  return (...args) => {
    if (immediate && !timer) {
      fn(...args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      if (!immediate) {
        fn(...args);
      }
    }, wait);
  };
}

function getVal(e) {
  console.log('\u641C\u7D22\u5185\u5BB9\uFF1A', e.target.value);
}

document.getElementsByTagName('input')[0].oninput = debounce(getVal, 600);
\`\`\`

## \u95EE\u9898

**\u5982\u4F55\u9009\u62E9\uFF1F**

\u9700\u8981\u5373\u65F6\u53CD\u9988\uFF0C\u5219\u9009\u62E9\u8282\u6D41\uFF0C\u9700\u8981\u6700\u7EC8\u7ED3\u679C\uFF0C\u5219\u9009\u62E9\u9632\u6296\u3002

**\u9632\u6296\u548C\u8282\u6D41\u51FD\u6570\u4E2D\u4E3A\u4EC0\u4E48\u4F7F\u7528\u95ED\u5305\uFF1F**

\u4E3A\u4E86\u4FDD\u8BC1\u6BCF\u4E00\u6B21\u51FD\u6570\u8C03\u7528\u7684 timer \u59CB\u7EC8\u662F\u540C\u4E00\u4E2A\u53D8\u91CF\u3002
`}}]);
