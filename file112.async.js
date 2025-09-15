"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[386],{32869:function(a,n,r){r.r(n),n.default=`### \u65CB\u8F6C\u6570\u7EC4\u67E5\u6700\u5C0F\u503C

\u65CB\u8F6C\u6570\u7EC4\u5373\u628A\u4E00\u4E2A\u6570\u7EC4\u6700\u5F00\u59CB\u7684\u82E5\u5E72\u4E2A\u5143\u7D20\u642C\u5230\u6570\u7EC4\u7684\u672B\u5C3E\uFF0C\u6B64\u65F6\u6570\u7EC4\u7531\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4\u7EC4\u6210\u3002

\`\`\`js
function minRotateArray(array) {
  var len = array.length;
  var low = 0;
  var high = len - 1;
  while (low < high) {
    var mid = low + Math.floor((high - low) / 2);
    if (array[mid] > array[high]) {
      low = mid + 1;
    } else if (array[mid] === array[high]) {
      high = high - 1;
    } else {
      high = mid;
    }
  }
  return array[low];
}
\`\`\`
`}}]);
