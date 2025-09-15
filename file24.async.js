"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[3326],{87933:function(l,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

\u5173\u4E8E\u4E8B\u4EF6\u6D41\uFF0C\u6700\u521D\u7F51\u666F\u4E3B\u5F20\u6355\u83B7\u65B9\u5F0F\uFF0C\u5FAE\u8F6F\u4E3B\u5F20\u5192\u6CE1\u65B9\u5F0F\u3002\u540E\u6765 w3c \u91C7\u7528\u6298\u4E2D\u7684\u65B9\u5F0F\uFF0C\u5236\u5B9A\u4E86\u7EDF\u4E00\u7684\u6807\u51C6\u2014\u2014\u5148\u6355\u83B7\u518D\u5192\u6CE1\u3002

## \u4E8B\u4EF6\u6D41

\u4E8B\u4EF6\u6D41\u7684\u4E09\u4E2A\u9636\u6BB5\uFF1A

- \u6355\u83B7\u9636\u6BB5
- \u76EE\u6807\u9636\u6BB5
- \u5192\u6CE1\u9636\u6BB5

\`\`\`
    \u250C\u2500\u2500\u3010window\u3011\u2190\u2500\u2510
    \u2502      \u2193      \u2502
    \u2514\u2192\u3010document\u3011\u2190\u2510
    \u2502      \u2193      \u2502
    \u2514\u2500\u2500\u2192\u3010html\u3011\u2190\u2500\u2500\u2510
\u6355\u83B7\u2502      \u2193      \u2502\u5192\u6CE1
    \u2514\u2500\u2500\u2192\u3010body\u3011\u2190\u2500\u2500\u2510
    \u2502      \u2193      \u2502
    \u2514\u2500\u2500\u2500\u2192\u3010ul\u3011\u2190\u2500\u2500\u2500\u2510
    \u2502      \u2193      \u2502
    \u2514\u2500\u2500\u2500\u2192\u3010li\u3011\u2500\u2500\u2500\u2500\u2518
          \u76EE\u6807
\`\`\`

## \u4E8B\u4EF6\u6355\u83B7\uFF08Event Capturing\uFF09

\u4E8B\u4EF6\u4ECE\u6700\u4E0A\u5C42\u5143\u7D20\u5F00\u59CB\uFF0C\u76F4\u5230\u4E0B\u7EA7\u5177\u4F53\u76EE\u6807\u5143\u7D20\u3002

## \u4E8B\u4EF6\u5192\u6CE1\uFF08Event Bubbling\uFF09

\u4E8B\u4EF6\u4ECE\u76EE\u6807\u5143\u7D20\u5F00\u59CB\u4E00\u7EA7\u7EA7\u5F80\u4E0A\u4F20\u9012\uFF0C\u76F4\u5230\u6700\u4E0A\u7EA7(document)\u5143\u7D20\u3002

### \u4E8B\u4EF6\u59D4\u6258\uFF08\u4E8B\u4EF6\u4EE3\u7406/Event Delegation\uFF09

\u539F\u7406\uFF1A\u5229\u7528\u4E8B\u4EF6\u7684\u5192\u6CE1\u673A\u5236\uFF0C\u5C06\u539F\u672C\u9700\u5728\u5B50\u5143\u7D20\u7684\u89E6\u53D1\u4E8B\u4EF6\u7ED1\u5B9A\u5230\u5176\u7236\u7EA7\u5143\u7D20\u4E0A\u3002

\u4F5C\u7528\uFF1A

- \u51CF\u5C11\u4E8B\u4EF6\u6CE8\u518C\uFF0C\u8282\u7701\u5185\u5B58\u5360\u7528
- \u52A8\u6001\u589E\u5220\u4E8B\u4EF6\u5BF9\u8C61\u65F6\u4E0D\u9700\u8981\u91CD\u65B0\u7ED1\u5B9A

\u5E38\u89C1\u4F8B\u5B50\uFF1A

\`\`\`html
<ul>
  <li>item1</li>
  <li>item2</li>
  <li>item3</li>
</ul>

<script>
  var ul = document.getElementsByTagName('ul')[0];
  // \u672A\u4F7F\u7528\u4E8B\u4EF6\u59D4\u6258
  var lis = ul.children;
  for (var i = 0; i < lis.length; i++) {
    (function(j) {
      lis[j].onclick = function() {
        console.log('click', lis[j].innerText);
      };
    })(i);
  }

  // \u4F7F\u7528\u4E8B\u4EF6\u59D4\u6258(\u517C\u5BB9IE8)
  ul.onclick = function(e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;
    if (target.nodeName.toLowerCase() === 'li') {
      console.log('click', target.innerText);
    }
  };

  // \u65B0\u589E\u4E00\u884Cli\uFF0C\u70B9\u51FB\u65B0li\uFF0C\u4F20\u7EDF\u65B9\u6CD5\u65E0\u8F93\u51FA\uFF0C\u4E8B\u4EF6\u59D4\u6258\u65B9\u6CD5\u8F93\u51FA 'new item'
  var newLi = document.createElement('li');
  newLi.innerText = 'new item';
  ul.appendChild(newLi);
<\/script>
\`\`\`

### \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1

- event.stopPropagation(); // \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u5230\u7236\u8282\u70B9
- event.stopImmediatePropagation(); // \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1\u5230\u7236\u8282\u70B9\uFF0C\u4E5F\u963B\u6B62\u5F53\u524D\u8282\u70B9\u4E0A\u5176\u4ED6\u540C\u7C7B\u578B\u4E8B\u4EF6\u7684\u89E6\u53D1
- event.cancelBubble = true; // IE8 \u53CA\u4EE5\u4E0B

\u5E38\u89C1\u7684\u4F7F\u7528\u573A\u666F\uFF1A

- \u89E3\u51B3\u5F39\u51FA\u5C42\u70B9\u51FB\u7A7F\u900F\u95EE\u9898

\u5982\u4E0A\u4E00\u4E2A\u4F8B\u5B50\u4E2D\u7684 ul \u548C li\uFF1A

\`\`\`js
var li = ul.children[0];

ul.onclick = function() {
  console.log('click ul');
};

// \u9ED8\u8BA4\u4E8B\u4EF6\u5192\u6CE1
li.onclick = function() {
  console.log('click item1');
};
// \u70B9\u51FBitem1\uFF0C\u4F1A\u89E6\u53D1log('click item1')\u548Clog('click ul')

// \u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1
li.onclick = function(e) {
  e.stopPropagation();
  console.log('click item1');
};
// \u70B9\u51FBitem1\uFF0C\u4F1A\u89E6\u53D1log('click item1')\uFF0C\u4F46\u4E0D\u4F1A\u89E6\u53D1log('click ul')
\`\`\`

### \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A

\u6D4F\u89C8\u5668\u9ED8\u8BA4\u884C\u4E3A\uFF1A

- \u70B9\u51FB\u94FE\u63A5\u9ED8\u8BA4\u4F1A\u89E6\u53D1\u8DF3\u8F6C
- \u8868\u5355\u4E2D\u70B9\u51FB\u63D0\u4EA4\u6309\u94AE\u9ED8\u8BA4\u4F1A\u63D0\u4EA4\u8868\u5355\u7B49\u3002
- \u6D4F\u89C8\u5668\u4E2D\u70B9\u51FB\u53F3\u952E\u5F39\u51FA\u5FEB\u6377\u83DC\u5355

\u4EE5\u4E0B\u65B9\u5F0F\u80FD\u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u4F46**\u4E0D\u80FD\u963B\u6B62\u4E8B\u4EF6\u5192\u6CE1**\uFF1A

- event.preventDefault(); \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u53EF\u4EE5\u7528\u4E8E\u76D1\u542C\u4E8B\u4EF6\u3002
- return false; \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u4F46\u662F\u53EA\u5BF9\u4F20\u7EDF\u7684\u6CE8\u518C\u65B9\u5F0F\u751F\u6548\uFF0C\u5BF9\u76D1\u542C\u4E8B\u4EF6\u65E0\u6548\u3002
- event.returnValue = false; IE8 \u53CA\u4EE5\u4E0B

\`\`\`html
<a href="1.html#">\u94FE\u63A5</a>
<script>
  var a = document.getElementsByTagName('a')[0];

  // \u4F20\u7EDF\u6CE8\u518C
  a.onclick = function(e) {
    console.log('click a');
    // e.preventDefault() // \u6709\u6548
    // return false // \u6709\u6548
  };

  // \u76D1\u542C\u4E8B\u4EF6
  a.addEventListener('click', function(e) {
    console.log('click a');
    e.preventDefault(); // \u6709\u6548
    // return false // \u65E0\u6548
  });
<\/script>
\`\`\`

### \u4E8B\u4EF6\u76D1\u542C

> target.addEventListener(type, listener, options);

> target.addEventListener(type, listener, useCapture);

\`\`\`ts
options: {
  capture: boolean; // \u6355\u83B7\u9636\u6BB5\u89E6\u53D1
  once: boolean; // \u53EA\u8C03\u7528\u4E00\u6B21listener
  passive: boolean; // \u4E0D\u4F1A\u8C03\u7528preventDefault()
}
useCapture: boolean; // \u9ED8\u8BA4false\uFF0Ctrue\u4E3A\u6355\u83B7parent-child | false\u4E3A\u5192\u6CE1child-parent
\`\`\`

\u76D1\u542C\u4E8B\u4EF6\u4E0E\u666E\u901A\u4E8B\u4EF6\u7684\u533A\u522B\uFF1A

\u540C\u65F6\u7ED9\u76F8\u540C\u5143\u7D20\u6CE8\u518C\u591A\u4E2A\u666E\u901A\u4E8B\u4EF6\uFF0C\u53EA\u4F1A\u89E6\u53D1\u6700\u540E\u4E00\u6B21\u6CE8\u518C\u7684\u4E8B\u4EF6\uFF1B\u4F46\u76D1\u542C\u4E8B\u4EF6\u90FD\u4F1A\u88AB\u89E6\u53D1\uFF1B

\`\`\`js
var li = ul.children[0];

function func1() {
  console.log('do func1');
}
function func2() {
  console.log('do func2');
}
// li.onclick = func1
// li.onclick = func2
// onclick\u53EA\u4F1A\u89E6\u53D1log("do func2")

li.addEventListener('click', func1);
li.addEventListener('click', func2);
// addEventListener\u4F1A\u89E6\u53D1log("do func1")\u548Clog("do func2")
\`\`\`

useCapture \u53D6\u503C\u4E0D\u540C\uFF0C\u6267\u884C\u987A\u5E8F\u4E0D\u540C

\`\`\`js
var ul = document.getElementsByTagName('ul')[0];
var li = ul.children[0];

function func(e) {
  console.log('do func', this.nodeName);
}

// \u6355\u83B7\uFF1A\u4F9D\u6B21\u8F93\u51FA"do func UL"\u3001"do func LI"
ul.addEventListener('click', func, true);
li.addEventListener('click', func, true);

// \u5192\u6CE1\uFF1A\u4F9D\u6B21\u8F93\u51FA"do func LI"\u3001"do func UL"
ul.addEventListener('click', func, false);
li.addEventListener('click', func, false);
\`\`\`
`}}]);
