"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[3662],{70834:function(e,n,t){t.r(n),n.default=`\u5173\u4E8E js \u6D6E\u70B9\u6570\u7684\u8BA1\u7B97\u95EE\u9898\uFF0C\u867D\u7136\u6709\u65F6\u5019\u53EF\u4EE5\u8F6C\u6210\u5B57\u7B26\u4E32\u518D\u8C03\u7528 toFixed(x) \u505A\u7B80\u5355\u5904\u7406\uFF0C\u4F46\u662F\u4F1A\u4EA7\u751F\u4E24\u4E2A\u95EE\u9898\uFF1A

1. \u8BA1\u7B97\u7ED3\u679C\u53EA\u80FD\u662F\u56FA\u5B9A\u7684 x \u4F4D\u5C0F\u6570
2. \u5728 pc \u7AEF\u4E0D\u540C\u6D4F\u89C8\u5668\u95F4\u53EF\u80FD\u5B58\u5728\u56DB\u820D\u4E94\u5165\u7684\u8BEF\u5DEE

\u53E6\u4E00\u79CD\u89E3\u51B3\u601D\u8DEF\u662F\u901A\u8FC7\u5C06\u5C0F\u6570\u6269\u5927 10(n) \u6B21\u65B9\u8F6C\u6362\u6210\u6574\u6570\u540E\u8BA1\u7B97\uFF0C\u8BA1\u7B97\u5B8C\u6210\u518D\u7F29\u5C0F 10(n) \u6B21\u65B9\uFF0C\u5F97\u5230\u8BA1\u7B97\u7ED3\u679C\u3002

\u4E0B\u9762\u662F\u6574\u7406\u7684\u52A0\u51CF\u4E58\u9664\u65B9\u6CD5\u548C\u90E8\u5206\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u6DF7\u5408\u8FD0\u7B97\u9700\u8981\u901A\u8FC7\u65B9\u6CD5\u7684\u7EC4\u5408\u5B8C\u6210\uFF1A

\`\`\`ts
// \u8BA1\u7B97\u5C0F\u6570\u4F4D\u6570
const getPrecision = (num: number) => {
  const str = num.toString();
  const decimalIndex = str.indexOf('.');
  return decimalIndex === -1 ? 0 : str.length - decimalIndex - 1;
};

const calcFloats = (a: number, b: number, operator: '+' | '-' | '*' | '/') => {
  const precision = Math.max(getPrecision(a), getPrecision(b));
  const factor = Math.pow(10, precision);
  switch (operator) {
    case '+':
      return (a * factor + b * factor) / factor;
    case '-':
      return (a * factor - b * factor) / factor;
    case '*':
      return (a * factor * b * factor) / Math.pow(factor, 2);
    case '/':
      return (a * factor) / (b * factor);
  }
};
\`\`\`

calculate.test.ts

\`\`\`ts
describe('calcFloats', () => {
  it('should add two numbers', () => {
    expect(calcFloats(1.2, 3, '+')).toBe(4.2);
  });
  it('should subtract two numbers', () => {
    expect(calcFloats(1.2, 3, '-')).toBe(-1.8);
  });
  it('should multiply two numbers', () => {
    expect(calcFloats(1.2, 3, '*')).toBe(3.6);
  });
  it('should divide two numbers', () => {
    expect(calcFloats(1.2, 3, '/')).toBe(0.4);
  });
  // 1.2/3-0.11
  it('should divide two numbers', () => {
    expect(calcFloats(calcFloats(1.2, 3, '/'), 0.11, '-')).toBe(0.29);
  });
});
\`\`\`
`}}]);
