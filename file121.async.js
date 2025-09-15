"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[3109],{85528:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

### \u83B7\u53D6\u672C\u5730\u65F6\u95F4

\`\`\`js
var date = new Date();
console.log('\u672C\u5730\u65F6\u95F4\uFF1A', date.toLocaleString('zh', { hour12: false }));
\`\`\`

### \u83B7\u53D6\u670D\u52A1\u5668\u65F6\u95F4

\u901A\u8FC7\u53D1\u9001\u8BF7\u6C42\u83B7\u53D6\u54CD\u5E94\u5934\u65F6\u95F4\u5373\u4E3A\u670D\u52A1\u5668\u65F6\u95F4\u3002

\`\`\`js
getServerTime();

function getServerTime() {
  var xhr = null;
  if (window.XMLHttpRequest) {
    xhr = new window.XMLHttpRequest();
  } else {
    // ie
    xhr = new ActiveObject('Microsoft');
  }
  // \u901A\u8FC7get\u7684\u65B9\u5F0F\u8BF7\u6C42\u5F53\u524D\u6587\u4EF6
  xhr.open('get', '/');
  xhr.send(null);
  // \u76D1\u542C\u8BF7\u6C42\u72B6\u6001\u53D8\u5316
  xhr.onreadystatechange = function() {
    var time = null,
      curDate = null;
    if (xhr.readyState === 2) {
      // \u83B7\u53D6\u54CD\u5E94\u5934\u91CC\u7684\u65F6\u95F4\u6233\uFF0C\u6CE8\u610F\u65F6\u533A\uFF0C\u4E3A\u683C\u6797\u5A01\u6CBB\u65F6\u95F4\uFF0C\u6BD4\u5317\u4EAC\u65F6\u95F4\u5C118\u4E2A\u5C0F\u65F6
      time = xhr.getResponseHeader('Date');
      console.log('\u5B8C\u6574\u54CD\u5E94\u5934\uFF1A\\n', xhr.getAllResponseHeaders());
      curDate = new Date(time);
      console.log('\u670D\u52A1\u5668\u65F6\u95F4\uFF1A', curDate.toLocaleString('zh', { hour12: false }));
    }
  };
}
\`\`\`
`}}]);
