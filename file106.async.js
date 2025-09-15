"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[4107],{73717:function(t,n,e){e.r(n),n.default=`## \u4E8C\u5206\u67E5\u627E

\u7ED9\u5B9A\u4E00\u4E2A \xA0n\xA0 \u4E2A\u5143\u7D20**\u6709\u5E8F**\u7684\uFF08\u5347\u5E8F\uFF09\u6574\u578B\u6570\u7EC4 \xA0nums \u548C\u4E00\u4E2A\u76EE\u6807\u503C \xA0target \xA0\uFF0C\u5199\u4E00\u4E2A\u51FD\u6570\u641C\u7D22 \xA0nums\xA0 \u4E2D\u7684 target\uFF0C\u5982\u679C\u76EE\u6807\u503C\u5B58\u5728\u8FD4\u56DE\u4E0B\u6807\uFF0C\u5426\u5219\u8FD4\u56DE -1\u3002

\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09
\u94FE\u63A5\uFF1Ahttps://leetcode-cn.com/problems/binary-search

\u6D4B\u8BD5\u7528\u4F8B\uFF1A

\`\`\`js
search([-1, 0, 3, 5, 9, 12], 9);
search([-1, 0, 3, 5, 9, 12], 2);
\`\`\`

[\u65F6\u95F4\u590D\u6742\u5EA6 O(logN)](https://www.cnblogs.com/my_life/articles/11510146.html)

\u5BF9\u4E8E\u6570\u636E\u91CF\u5927\u7684\u6709\u5E8F\u6570\u7EC4\uFF0C\u4E8C\u5206\u67E5\u627E\u53EF\u4EE5\u63D0\u9AD8\u6548\u7387\uFF0C\u6570\u636E\u91CF\u5C0F\u7684\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 indexOf()

\u975E\u9012\u5F52\u5B9E\u73B0\uFF1A

\`\`\`js
var search = function(nums, target) {
  var low = 0;
  var high = nums.length - 1;
  while (low <= high) {
    var mid = parseInt((low + high) / 2);
    if (nums[mid] > target) {
      // \u5982\u679C \u4E2D\u95F4\u503C \u5927\u4E8E \u76EE\u6807\u503C\uFF0C\u5219\u5728\u6570\u7EC4\u7684\u5DE6\u534A\u90E8\u5206\u7EE7\u7EED\u67E5\u627E\uFF0C\u4E14\u4E2D\u95F4\u503C\u7684\u524D\u4E00\u4E2A\u503C\u53EF\u80FD\u4E3A\u76EE\u6807\u503C\uFF0C\u6240\u4EE5\u6700\u5927\u4E0B\u6807\u4E3A mid - 1
      high = mid - 1;
    } else if (nums[mid] < target) {
      // \u5982\u679C \u4E2D\u95F4\u503C \u5C0F\u4E8E \u76EE\u6807\u503C\uFF0C\u5219\u5728\u6570\u7EC4\u7684\u53F3\u534A\u90E8\u5206\u7EE7\u7EED\u67E5\u627E\uFF0C\u4E14\u4E2D\u95F4\u503C\u7684\u540E\u4E00\u4E2A\u503C\u53EF\u80FD\u4E3A\u76EE\u6807\u503C\uFF0C\u6240\u4EE5\u6700\u5C0F\u4E0B\u6807\u4E3A mid + 1
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
\`\`\`

\u9012\u5F52\u5B9E\u73B0\uFF1A

\`\`\`js
var search = function(nums, target, low, high) {
  if (low === undefined) low = 0;
  if (high === undefined) high = nums.length - 1;
  if (low > high) return -1;
  var mid = parseInt((low + high) / 2);
  if (nums[mid] > target) {
    return search(nums, target, low, mid - 1);
  } else if (nums[mid] < target) {
    return search(nums, target, mid + 1, high);
  } else {
    return mid;
  }
};
\`\`\`
`}}]);
