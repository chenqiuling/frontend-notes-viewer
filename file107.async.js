"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[3620],{62850:function(r,n,e){e.r(n),n.default=`### \u4E8C\u7EF4\u6570\u7EC4\u67E5\u627E

\u7ED9\u5B9A**\u6709\u5E8F**\u7684\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u67E5\u627E\u503C\u4E3A target \u7684\u5143\u7D20\u7684\u4E0B\u6807\uFF0C\u627E\u4E0D\u5230\u8FD4\u56DE-1\u3002

\`\`\`
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
\`\`\`

\u4EE5\u5DE6\u4E0B\u89D2\u4E3A\u8D77\u70B9\uFF0C\u5C0F\u4E8E\u76EE\u6807\u53F3\u79FB\uFF0C\u5927\u4E8E\u76EE\u6807\u4E0A\u79FB

\`\`\`js
function find(target, array) {
  let i = array.length - 1; // y\u5750\u6807
  let j = 0; // x\u5750\u6807
  return compare(target, array, i, j);
}

function compare(target, array, i, j) {
  if (array[i] === undefined || array[i][j] === undefined) {
    return -1;
  }
  const temp = array[i][j];
  if (target === temp) {
    return \`[\${i}][\${j}]\`;
  } else if (target > temp) {
    return compare(target, array, i, j + 1);
  } else if (target < temp) {
    return compare(target, array, i - 1, j);
  }
}
\`\`\`
`}}]);
