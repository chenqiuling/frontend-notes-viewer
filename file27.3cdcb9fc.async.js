"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[4285],{73676:function(t,n,e){e.r(n),n.default=`**1. \u8FD0\u7B97\u7B26\u7684\u9690\u5F0F\u8F6C\u6362**

<span style="color: #00b050">\u793A\u4F8B\uFF1A</span>

\`\`\`js
console.log(1 + '2'); //"12"
console.log(1 + +'2'); //3
console.log('11' + 2 - '1'); //111
console.log(01 + '01'); //"101"
console.log(010 + '010'); //"8010"
console.log('A' - 'B' + '2'); //"NaN2"
console.log('A' - 'B' + 2); //NaN
\`\`\`

<span style="color: #ffc000">\u5206\u6790|\u603B\u7ED3\uFF1A</span>

1. \u6570\u5B57\u4E0E\u5B57\u7B26\u4E32\u76F8\u52A0\uFF0C\u6570\u5B57\u9690\u5F0F\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\uFF08\u6B64\u65F6\u7684\u201C+\u201D\u7406\u89E3\u4E3A\u8FDE\u63A5\u7B26\uFF09\u3002
2. \u9664\u4E86\u201C+\u201D\uFF0C\u6570\u5B57\u4E0E\u5B57\u7B26\u4E32\u6216\u5B57\u7B26\u4E32\u4E0E\u5B57\u7B26\u4E32\u8FDB\u884C\u5176\u4ED6\u8FD0\u7B97\uFF0C\u5B57\u7B26\u4E32\u9690\u5F0F\u8F6C\u6362\u6210\u6570\u5B57\u3002
3. +"2"\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u4E00\u5143\u52A0\u64CD\u4F5C\u7B26\uFF0C\u5B57\u7B26\u4E32"2"\u4F1A\u53D8\u6210\u6570\u5B57\u7C7B\u578B 2\u3002

**2. \u8FDE\u7B49\u5B9A\u4E49\u53D8\u91CF\uFF0C\u540E\u8005\u4E3A\u5168\u5C40\u53D8\u91CF**

<span style="color: #00b050">\u793A\u4F8B\uFF1A</span>

\`\`\`js
(function() {
  // prettier-ignore
  var a = b = 5;
})();
console.log(b); //5
console.log(a); //undefind
\`\`\`

<span style="color: #ffc000">\u5206\u6790|\u603B\u7ED3\uFF1A</span>
var a = b = 5; \u5373 var a=5;b=5;\u6240\u4EE5 a \u4E3A\u5C40\u90E8\u53D8\u91CF\uFF0Cb \u4E3A\u5168\u5C40\u53D8\u91CF\uFF0C\u5728\u51FD\u6570\u4F53\u4EE5\u5916\u8F93\u51FA a\uFF0C\u5219 a \u662F\u672A\u5B9A\u4E49\u3002

**3. setTimeout \u7684\u6267\u884C\u53C2\u6570**

<span style="color: #00b050">\u793A\u4F8B\uFF1A</span>

\`\`\`js
function test() {
  alert('\u6267\u884CsetTimeout');
}
window.setTimeout(test, 5000); // \u6B63\u786E\u5199\u6CD5\uFF0C5s\u540E\u6267\u884C
// window.setTimeout("test()", 5000);  // \u6B63\u786E\u5199\u6CD5\uFF0C5s\u540E\u6267\u884C\uFF0C\u4F46\u4E0D\u63A8\u8350
// window.setTimeout(test(), 5000); // \u9519\u8BEF\u5199\u6CD5\uFF0C\u4F1A\u7ACB\u5373\u6267\u884C
\`\`\`

**4.\u5BF9\u8C61\u7C7B\u578B\u4E3A true**

<span style="color: #00b050">\u793A\u4F8B\uFF1A</span>

\`\`\`js
var x = new Boolean(false);
if (x) {
  console.log('new Boolean(false)\u7C7B\u578B', typeof x); //\u4F1A\u6253\u5370
}
var y = Boolean(false);
if (y) {
  console.log('Boolean(false)\u7C7B\u578B', typeof y); //\u4E0D\u4F1A\u6253\u5370
}
\`\`\`

<span style="color: #ffc000">\u5206\u6790|\u603B\u7ED3\uFF1A</span>
x \u4E3A object\uFF0Cy \u4E3A boolean\uFF0C\u4F5C\u4E3A\u5BF9\u8C61\uFF0Cif \u4F1A\u76F4\u63A5\u5224\u65AD\u4E3A true\u3002

**5. \u4F5C\u7528\u57DF\u95EE\u9898**

<span style="color: #00b050">\u793A\u4F8B\uFF1A</span>

\`\`\`html
<ul>
  <li>click me</li>
  <li>click me</li>
  <li>click me</li>
  <li>click me</li>
</ul>
<script>
  var elements = document.getElementsByTagName('li');
  var length = elements.length;
  for (var i = 0; i < length; i++) {
    elements[i].onclick = function() {
      alert(i); //\u4F9D\u6B21\u5F39\u51FA4\uFF0C4\uFF0C4\uFF0C4
    };
  }
<\/script>
\`\`\`

<span style="color: #ffc000">\u5206\u6790|\u603B\u7ED3\uFF1A</span>
\u6BCF\u4E2A li \u6807\u7B7E\u7684 onclick \u4E8B\u4EF6\u6267\u884C\u65F6\uFF0C\u672C\u8EAB onclick \u7ED1\u5B9A\u7684 function \u7684\u4F5C\u7528\u57DF\u4E2D\u6CA1\u6709\u53D8\u91CF i\uFF0Ci \u4E3A undefined,\u5219\u89E3\u6790\u5F15\u64CE\u4F1A\u5BFB\u627E\u7236\u7EA7\u4F5C\u7528\u57DF\uFF0C\u53D1\u73B0\u7236\u7EA7\u4F5C\u7528\u57DF\u4E2D\u6709 i\uFF0C\u4E14 for \u5FAA\u73AF\u7ED1\u5B9A\u4E8B\u4EF6\u7ED3\u675F\u540E\uFF0Ci \u5DF2\u7ECF\u8D4B\u503C\u4E3A 4\uFF0C\u6240\u4EE5\u6BCF\u4E2A li \u6807\u7B7E\u7684 onclick \u4E8B\u4EF6\u6267\u884C\u65F6\uFF0Calert \u7684\u90FD\u662F\u7236\u4F5C\u7528\u57DF\u4E2D\u7684 i\uFF0C\u4E5F\u5C31\u662F 4\u3002\u8FD9\u662F\u4F5C\u7528\u57DF\u7684\u95EE\u9898\u3002

<span style="color: #00b0f0">\u62D3\u5C55\uFF1A</span>

\`\`\`html
<ul>
  <li>click me</li>
  <li>click me</li>
  <li>click me</li>
  <li>click me</li>
</ul>
<script>
  var elements = document.getElementsByTagName('li');
  var length = elements.length;
  for (var i = 0; i < length; i++) {
    (function(j) {
      elements[i].onclick = function() {
        alert(j); //\u4F9D\u6B21\u5F39\u51FA0\uFF0C1\uFF0C2\uFF0C3
      };
    })(i);
  }
<\/script>
\`\`\`

**6. for \u5FAA\u73AF\u4E0E setTimeout**

<span style="color: #00b050">\u793A\u4F8B\uFF1A</span>

\`\`\`js
var a = [100, 3000, 5000];
for (var i = 0; i < a.length; i++) {
  setTimeout('console.log(a[i])', i);
}
//undefined undefined undefined
\`\`\`

\`\`\`js
var a = [100, 3000, 5000];
for (var i = 0; i < a.length; i++) {
  setTimeout('console.log(a[i-1])', i);
}
//5000 5000 5000
\`\`\`

<span style="color: #ffc000">\u5206\u6790|\u603B\u7ED3\uFF1A</span>
\u548C\uFF085\uFF09\u4E2D\u4F5C\u7528\u57DF\u7684\u95EE\u9898\u7C7B\u4F3C\uFF0C\u5E76\u4E14 setTimeout \u65B9\u6CD5\u6267\u884C\u65F6\uFF0C\u5DF2\u7ECF\u5B8C\u6210\u4E86 i++\uFF0C\u90A3\u4E48 a[4]\u5C31\u662F undefined

**7. \u95ED\u5305**

<span style="color: #00b050">\u793A\u4F8B\uFF1A</span>

\`\`\`js
function Foo() {
  var i = 0;
  return function() {
    console.log(i++);
  };
}
var f1 = Foo(),
  f2 = Foo();
f1();
f1();
f2();
\`\`\`

<span style="color: #ffc000">\u5206\u6790|\u603B\u7ED3\uFF1A</span>
\u95ED\u5305\u6700\u5927\u7528\u5904\u6709\u4E24\u4E2A\uFF1A\u4E00\u4E2A\u662F\u53EF\u4EE5\u8BFB\u53D6\u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF\uFF0C\u53E6\u4E00\u4E2A\u5C31\u662F\u8BA9\u8FD9\u4E9B\u53D8\u91CF\u7684\u503C\u59CB\u7EC8\u4FDD\u6301\u5728\u5185\u5B58\u4E2D\u3002
\u8FD9\u91CC\u7684\u5C40\u90E8\u53D8\u91CF i\uFF0C\u5BF9 f1()\u6765\u8BF4\u662F\u5168\u5C40\u53D8\u91CF\uFF0C\u5BF9 f2()\u6765\u8BF4\u4E5F\u662F\u5168\u5C40\u53D8\u91CF\uFF0C\u4F46\u662F f1()\u7684 i \u8DDF f2()\u7684 i \u53C8\u662F\u76F8\u4E92\u72EC\u7ACB\u76F8\u4E92\u4E0D\u53EF\u89C1\u7684\uFF0Cf1()\u6BCF\u6267\u884C\u4E00\u6B21\uFF0Cf1()\u7684 i \u5C31\u52A0 1\uFF0Cf2()\u6BCF\u6B21\u6267\u884C\u4E00\u6B21\uFF0Cf2()\u7684 i \u5C31\u52A0 1\uFF0C\u4F46\u662F\u76F8\u4E92\u4E4B\u95F4\u4E0D\u5F71\u54CD\uFF0C\u56E0\u6B64\u7ED3\u679C\u662F 010\u3002

**8. JS \u4E2D\u7684\u8BA1\u7B97\u8BEF\u5DEE**

<span style="color: #00b050">\u793A\u4F8B 1\uFF1A\u6D6E\u70B9\u578B\u8BA1\u7B97\u8BEF\u5DEE</span>

\`\`\`js
//\u731C\u731C\u7ED3\u679C\u662F\u591A\u5C11
console.log(1.2 * 3);
console.log(1.2 / 3);
\`\`\`

<span style="color: #ffc000">\u5206\u6790|\u603B\u7ED3\uFF1A</span>
1.2*3=3.6\uFF1B1.2/3=0.4 \u8FD9\u662F\u5F88\u7B80\u5355\u7684\u6570\u5B66\u8BA1\u7B97\uFF0C\u7136\u800C\u5728 JS \u4E2D 1.2*3=3.5999999999999996\uFF0C1.2/3=0.39999999999999997(6)\uFF08\u5927\u90E8\u5206\u8BA1\u7B97\u673A\u8BED\u8A00\u90FD\u5B58\u5728\u8FD9\u79CD\u8BEF\u5DEE\uFF09

\u539F\u56E0\uFF1A\u8BA1\u7B97\u673A\u5728\u8FDB\u884C\u8BA1\u7B97\u65F6\u4F1A\u5148\u5C06\u6570\u503C\u8F6C\u6362\u6210\u4E8C\u8FDB\u5236\uFF0C1.2\uFF08\u5341\u8FDB\u5236\uFF09\u8F6C\u6210 1.001100110011...\uFF08\u4E8C\u8FDB\u5236\uFF09\u5F97\u5230\u4E00\u4E2A\u65E0\u9650\u5FAA\u73AF\u7684\u6570\uFF0C\u8F6C\u6362\u65B9\u6CD5\uFF1A\u6574\u6570\u90E8\u5206\u201C\u9664 2 \u53D6\u4F59\u3001\u9006\u5E8F\u6392\u5217\u201D\uFF0C\u5C0F\u6570\u90E8\u5206\u201C\u4E58 2 \u53D6\u6574\u3001\u987A\u5E8F\u6392\u5217\u201D\u3002

\u89E3\u51B3\u65B9\u6CD5\uFF1A\u5C06\u6D6E\u70B9\u6570\u4E58\u4EE5 10 \u7684 n \u6B21\u5E42\u5316\u4E3A\u6574\u6570(n \u4E3A\u5C0F\u6570\u4F4D\u6570)\uFF0C\u518D\u8FDB\u884C\u8BA1\u7B97\uFF0C\u4E4B\u540E\u518D\u9664\u4EE5 10 \u7684 m \u6B21\u5E42(m \u4E3A\u5C0F\u6570\u4F4D\u6570\u4E4B\u548C)\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u6211\u4EEC\u60F3\u8981\u7684\u6570\u503C\u3002\u5373\uFF1A1.2*3 = 12*3/10 = 3.6\u3002

\u5199\u4E2A\u901A\u7528\u7684\u65B9\u6CD5\uFF1A

\`\`\`js
// \u7531\u4E8E\u90E8\u5206\u6D6E\u70B9\u6570\u65E0\u6CD5\u8F6C\u6362\u6210\u6709\u9650\u4F4D\u6570\u7684\u4E8C\u8FDB\u5236\u6570\uFF0C\u9700\u8981\u8F6C\u6210\u6574\u6570\u5904\u7406

const { isArray } = Array;
const symbolEnum = {
  add: '+',
  sub: '-',
  mul: '*',
  div: '/',
};

// \u8BA1\u7B97\u53C2\u4E0E\u8FD0\u7B97\u7684\u6570\u503C\u91CC\u6700\u591A\u7684\u5C0F\u6570\u4F4D\u6570\uFF0C\u7528\u4E8E\u5C0F\u6570\u8F6C\u6574\u6570\u8BA1\u7B97
const getDecimalCount = numbers => {
  if (isArray(numbers) && numbers.every(v => typeof v === 'number')) {
    const lens = numbers.map(n => {
      const str = String(n);
      if (str.lastIndexOf('.') === -1) {
        return 0;
      }
      return str.slice(str.lastIndexOf('.') + 1).length;
    });
    return Math.max(...lens);
  }
  return 0;
};

const calc = (numbers, type) => {
  if (isArray(numbers)) {
    const temp = 10 ** getDecimalCount(numbers);
    let res = numbers[0];
    switch (type) {
      case symbolEnum.add:
        return numbers.reduce((r, v) => {
          return (r * temp + v * temp) / temp;
        }, 0);
      case symbolEnum.sub:
        numbers.slice(1).forEach(n => {
          res = (res * temp - n * temp) / temp;
        });
        return res;
      case symbolEnum.mul:
        numbers.slice(1).forEach(n => {
          res = (res * temp * n * temp) / temp ** 2;
        });
        return res;
      case symbolEnum.div:
        numbers.slice(1).forEach(n => {
          res = (res * temp) / (n * temp);
        });
        return res;
      default:
        return 0;
    }
  }
  return 0;
};

/**
 * @param numbers number[]
 * \u4F8B\u5B50\uFF1A1+2+3 calcAdd([1, 2, 3])
 */
export const calcAdd = numbers => calc(numbers, symbolEnum.add);
export const calcSubtract = numbers => calc(numbers, symbolEnum.sub);
export const calcMultiply = numbers => calc(numbers, symbolEnum.mul);
export const calcDivide = numbers => calc(numbers, symbolEnum.div);
\`\`\`

<span style="color: #00b050">\u793A\u4F8B 2\uFF1AIE8 \u53CA\u66F4\u4F4E\u7248\u672C\u4E2D\u51FA\u73B0\u6574\u578B\u8BA1\u7B97\u8BEF\u5DEE</span>

\`\`\`js
// IE8\u6A21\u5F0F\u4E0B\u63A7\u5236\u53F0\u4E2D\u8FD0\u884C\u67E5\u770B\u7ED3\u679C
console.log(parseInt('08') - parseInt('03')); //\u7ED3\u679C\u4E3A\u8D1F,\u6539\u4E3AparseInt("08",10)
console.log(parseInt('09') - parseInt('03')); //\u7ED3\u679C\u4E3A\u8D1F,\u6539\u4E3AparseInt("09",10)
\`\`\`

<span style="color: #ffc000">\u5206\u6790|\u603B\u7ED3\uFF1A</span>
\u95EE\u9898\u7684\u539F\u56E0\u5728\u4E8E\u524D\u9762\u7684"0"\uFF0CparseInt \u65B9\u6CD5\u6709\u4E00\u4E2A\u53EF\u9009\u53C2\u6570\u6765\u8868\u793A\u6570\u5B57\u7684\u8FDB\u5236\uFF0C\u4EE5"0"\u4F5C\u4E3A\u9996\u5B57\u7B26\u7684\u5B57\u7B26\u4E32\u4F1A\u88AB JS \u8BC6\u522B\u4E3A\u516B\u8FDB\u5236\u6570\u5E76\u5C06\u6CA1\u6709\u6307\u5B9A\u6570\u5B57\u8FDB\u5236\u53C2\u6570\u7684\u53C2\u6570\u503C\u9ED8\u8BA4\u4E3A 8\uFF0C\u4ECE\u800C\u4EE5\u516B\u8FDB\u5236\u6765\u89E3\u6790\u5B57\u7B26\u4E32\uFF0C\u800C"08"\u548C"09"\u90FD\u4E0D\u662F\u5408\u6CD5\u7684\u516B\u8FDB\u5236\u6570\uFF0C\u6240\u4EE5\u88AB\u89E3\u6790\u4E3A 0\u3002
\u5B9E\u9645\u4E0A\uFF0C\u8FD9\u662F\u4E2A\u4E0D\u6CE8\u610F\u7EC6\u8282\u5F15\u8D77\u7684\u95EE\u9898\uFF0C\u663E\u5F0F\u8BBE\u7F6E\u8FDB\u5236\u53C2\u6570\u7684 parseInt \u6839\u672C\u4E0D\u4F1A\u51FA\u73B0\u8FD9\u4E2A\u95EE\u9898\uFF0CparseInt("08",10)\u6216 parseInt("09",10)\u90FD\u80FD\u8FD4\u56DE\u6B63\u786E\u7684\u6570\u503C\u3002\u53E6\u5916\uFF0CparseFloat \u4E0D\u4F1A\u5B58\u5728\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5E76\u4E14\u73B0\u4EE3\u6D4F\u89C8\u5668\u5E94\u8BE5\u662F\u9ED8\u8BA4\u4E3A\u5341\u8FDB\u5236\u4E86\uFF0C\u56E0\u6B64<span style="color: #ff0000">\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E2D\u4E0D\u4F1A\u6709\u6B64\u8BEF\u5DEE</span>\u3002

**9. \u5B57\u7B26\u4E32\u4E2D\u7684\u53D8\u91CF\u6709\u53EF\u80FD\u4E3A null \u548C undefined**

\u5E38\u89C1\u5982\u6A21\u677F\u5B57\u7B26\u4E32\uFF0C\u7528\u201C+\u201D\u62FC\u63A5\u7684\u5B57\u7B26\u4E32\uFF0C\u8FD8\u6709\u8DEF\u7531\u91CC\u62FC\u63A5\u7684\u53C2\u6570\uFF08\u5BB9\u6613\u88AB\u5FFD\u7565\uFF09

\u770B\u5230\u8FC7\u4E0D\u5C11\u4EE3\u7801\u83B7\u53D6\u5230\u8DEF\u7531\u53C2\u6570\u540E\u76F4\u63A5\u5224\u7A7A\uFF0C\u5982

\`\`\`js
var mobile = null;
var url = \`https://xxx.xx.com?mobile=\${mobile}\`;
// \u901A\u8FC7\u5404\u79CD\u65B9\u6CD5\u83B7\u53D6\u5230\u8DEF\u7531\u53C2\u6570\uFF0C\u5982 const { mobile } = useRouter().params
// \u63A5\u4E0B\u6765\u76F4\u63A5\u7528 if(mobile) {}\u505A\u5224\u65AD\uFF0C\u5B9E\u9645\u4E0A\u6B64\u65F6\u7684mobile\u4E3A\u5B57\u7B26\u4E32'null'\uFF0C\u4E3Atrue
// \u907F\u514D\u53D6\u53C2\u5224\u65AD\u9519\u8BEF\uFF0C\u5E94\u5199\u6210\`https://xxx.xx.com?mobile=\${mobile || ''}\`
\`\`\`

**10. input \u4E2D\u7684 reset \u662F\u201C\u91CD\u7F6E\u201D\u800C\u4E0D\u662F\u201C\u6E05\u7A7A\u201D**

<span style="color: #00b050">\u793A\u4F8B 1\uFF1A</span>
\u4EE5\u4E0B\u4EE3\u7801\u4E2D\uFF0Cinput \u6CA1\u6709\u8BBE\u7F6E\u9ED8\u8BA4 value\uFF0C\u8F93\u5165\u4EFB\u610F\u5185\u5BB9\uFF0C\u518D\u70B9\u51FB\u201Creset\u201D\u6309\u94AE\uFF0C\u8F93\u5165\u6846\u5185\u5BB9\u88AB\u6E05\u7A7A\u3002

\`\`\`html
<form>
  <input type="text" />
  <input type="reset" />
</form>
\`\`\`

<form>
  <input type="text" />
  <input type="reset" />
</form>

<span style="color: #00b050">\u793A\u4F8B 2\uFF1A</span>
\u4EE5\u4E0B\u4EE3\u7801\u4E2D\uFF0Cinput \u8BBE\u7F6E\u9ED8\u8BA4 value \u4E3A\u201Cinit text\u201D\uFF0C\u8F93\u5165\u4EFB\u610F\u5185\u5BB9\uFF0C\u518D\u70B9\u51FB\u201Creset\u201D\u6309\u94AE\uFF0C\u8F93\u5165\u6846\u5185\u5BB9\u88AB\u91CD\u7F6E\u56DE\u201Cinit text\u201D

\`\`\`html
<form>
  <input type="text" value="init text" />
  <input type="reset" />
</form>
\`\`\`

<form>
  <input type="text" value="init text" />
  <input type="reset" />
</form>

**11. \u5BF9\u8C61\u9ED8\u8BA4\u7684 key \u503C\u6392\u5E8F**

\u9075\u5FAA ES6 \u7684\u6D4F\u89C8\u5668\uFF0C\u8F93\u51FA\u7684 Object \u7684 key \u5C06\u4F1A\u6309\u4EE5\u4E0B\u89C4\u5219\u8FDB\u884C\u904D\u5386\uFF1A

\u6570\u5B57\u4ECE\u5C0F\u5230\u5927 -> \u5B57\u7B26\u4E32\u521B\u5EFA\u987A\u5E8F -> Symbol \u521B\u5EFA\u987A\u5E8F\u3002

\u540C\u6837\u7684\u987A\u5E8F\u4E5F\u9002\u7528\u4E8E for in \u548C Object.keys()\u3002

\u6B64\u5916\uFF0C\u5BF9\u8C61\u7684 key \u503C\u53EA\u80FD\u662F\u5B57\u7B26\u4E32\u6216 Symbol \u7C7B\u578B\uFF0C\u4F7F\u7528\u5176\u4ED6\u7C7B\u578B\u505A key \u4F1A\u81EA\u52A8\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B\u3002

\u7EFC\u4E0A\u53EF\u77E5 Object \u662F\u65E0\u5E8F\u7684\uFF0C\u4E0D\u80FD\u81EA\u5B9A\u4E49\u987A\u5E8F\u3002

\u5982\u679C\u5E0C\u671B\u83B7\u53D6\u6709\u5E8F\u7684\uFF0C\u4F7F\u7528 Map \u66FF\u4EE3 Object\u3002

\`\`\`js
const common = new Map([
  [1, '\u662F'],
  [0, '\u5426'],
]); // {1 => '\u662F', 0 => '\u5426'}

// \u53D6\u503C
common.get(1); // \u662F
// \u6539\u503C
common.set(1, '\u662F\u5426');
\`\`\`
`}}]);
