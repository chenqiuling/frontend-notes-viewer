"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[8969],{6756:function(e,n,u){u.r(n),n.default=`\u8BA1\u7B97 1 + 2 + ... + 100 = 5050

## \u5FAA\u73AF

\`\`\`js
function sum(num) {
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += i;
  }
  return total;
}
sum(100);
\`\`\`

## \u9012\u5F52

\`\`\`js
function sum(num) {
  if (num <= 1) return num;
  return sum(num - 1) + num;
}

sum(100);
\`\`\`

\`\`\`js
function sum(start, end) {
  if (end <= start) return end;
  return sum(start, end - 1) + end;
}

sum(1, 100);
\`\`\`

\`\`\`js
function sum(num1, num2) {
  const num = num1 + num2;
  if (num2 + 1 > 100) {
    return num;
  } else {
    return sum(num, num2 + 1);
  }
}

sum(1, 2);
\`\`\`

\`\`\`js
function sum(num, res) {
  let n = num;
  let r = res;
  if (n < 100) {
    n++;
    r += n;
    return sum(n, r);
  } else {
    return r;
  }
}

sum(0, 0);
\`\`\`

## \u6570\u7EC4+reduce()

\`\`\`js
function sum(num) {
  return [...new Array(num).keys()].reduce((sum, cur) => sum + cur, 0);
}

sum(101);
\`\`\`
`}}]);
