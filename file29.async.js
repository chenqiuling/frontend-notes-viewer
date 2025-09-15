"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[7273],{46484:function(o,n,t){t.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

[\u6587\u6863 1](https://www.runoob.com/regexp/regexp-syntax.html)
[\u6587\u6863 2](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

### \u5E38\u7528\u7684\u6B63\u5219\u7B26\u53F7\u53CA\u5176\u542B\u4E49

- \`^\` \u4EE5\u4EC0\u4E48\u5F00\u5934\uFF0C\u5982\u679C\u5728\u65B9\u62EC\u53F7\u4E2D\u4F7F\u7528\u8868\u793A\u903B\u8F91\u975E\uFF0C\u4E0D\u5339\u914D\u65B9\u62EC\u53F7\u91CC\u7684\u96C6\u5408\u3002\u5982 \`^A\`\uFF0C\u5339\u914D AB\u3001ABC \u7B49\uFF1B\u5982 \`[^(AB)]\`\uFF0C\u5339\u914D ABC\uFF0C\u4E0D\u5339\u914D A\u3001AB
- \`$\` \u4EE5\u4EC0\u4E48\u7ED3\u5C3E\uFF0C\u5982 \`Z$\`\uFF0C\u5339\u914D YZ\u3001XYZ \u7B49
- \`?\` \u96F6\u6B21\u6216\u4E00\u6B21\uFF0C\u5982 \`(AB)?\`\uFF0C\u5339\u914D ABC\u3001CD \u7B49\uFF0C\u6CE8\u610F\u8FD9\u91CC\u5982\u679C\u8981\u5339\u914D\u7684\u662F AB\uFF0C\u662F\u9700\u8981\u5C06 AB \u7528\u5C0F\u62EC\u53F7\u62EC\u8D77\u6765\u7684
- \`{0,1}\` \u96F6\u6B21\u6216\u4E00\u6B21\uFF0C\u5982 \`(AB)?\`\uFF0C\u5339\u914D ABC\u3001CD \u7B49\uFF0C\u7B49\u4EF7\u4E8E \`?\`\uFF0C\u8FD9\u91CC\u7684 0 \u548C 1 \u4E4B\u95F4\u7684\u82F1\u6587\u9017\u53F7\u540E\u9762\u4E0D\u80FD\u52A0\u7A7A\u683C
- \`+\` \u4E00\u6B21\u6216\u591A\u6B21\uFF0C\u5982 \`A+\`\uFF0C\u5339\u914D A\u3001AA \u7B49
- \`{1,}\` \u4E00\u6B21\u6216\u591A\u6B21\uFF0C\u7B49\u4EF7\u4E8E \`+\`
- \`*\` \u96F6\u6B21\u6216\u591A\u6B21\uFF0C\u5982 \`A*\`\uFF0C\u5339\u914D B\u3001AA \u7B49
- \`{n}\` \u5339\u914D n \u6B21
- \`{n,}\` \u5339\u914D n \u6B21\u6216\u591A\u6B21
- \`{n,m}\` \u6700\u5C11\u5339\u914D n \u6B21\uFF0C\u6700\u591A\u5339\u914D m \u6B21
- \`[A-Z]\` \u5339\u914D\u5927\u5199\u5B57\u6BCD\u533A\u95F4\u5185
- \`[a-z]\` \u5339\u914D\u5C0F\u5199\u5B57\u6BCD\u533A\u95F4\u5185
- \`[0-9]\` \u6570\u5B57\u533A\u95F4
- \`\\b\` \u5339\u914D\u8FB9\u754C\u5B57\u7B26\uFF0C\`rd\\b\`\u53EF\u4EE5\u5339\u914D "word" \u4E2D\u7684 "rd"
- \`\\B\` \u5339\u914D\u975E\u8FB9\u754C\u5B57\u7B26\uFF0C\`rd\\B\`\u4E0D\u53EF\u4EE5\u5339\u914D "word" \u4E2D\u7684 "rd"
- \`\\d\` \u76F8\u5F53\u4E8E \`[0-9]\`
- \`\\D\` \u76F8\u5F53\u4E8E \`[^0-9]\`
- \`\\w\` \u76F8\u5F53\u4E8E\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF \`[A-Za-z0-9_]\`
- \`\\W\` \u76F8\u5F53\u4E8E\u975E\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF \`[^A-Za-z0-9_]\`
- \`\\s\` \u5339\u914D\u6240\u6709\u7A7A\u767D\u7B26\uFF0C\u5305\u62EC\u6362\u884C
- \`\\S\` \u5339\u914D\u6240\u6709\u975E\u7A7A\u767D\u7B26\uFF0C\u4E0D\u5305\u62EC\u6362\u884C
- \`.\` \u5339\u914D\u9664\u6362\u884C\u7B26\uFF08\\n\u3001\\r\uFF09\u4E4B\u5916\u7684\u4EFB\u4F55\u5355\u4E2A\u5B57\u7B26\uFF0C\u76F8\u5F53\u4E8E \`[^\\n\\r]\`
- \`|\` \u903B\u8F91\u6216
- \`\\\` \u8F6C\u8BD1\u7B26\uFF0C\u5982\u6362\u884C\u7B26 \`\\n\`\u3001\u53CD\u659C\u6760 \`\\\\\`
- \`(?:pattern)\` \u5339\u914D\u4F46\u4E0D\u83B7\u53D6\u7ED3\u679C\uFF0C\u5982 "industr(?:y|ies)" \u5C31\u662F\u4E00\u4E2A\u6BD4 "industry|industries" \u66F4\u7B80\u7565\u7684\u8868\u8FBE\u5F0F\u3002
- \`(?=pattern)\` \u6B63\u5411\u80AF\u5B9A\u9884\u67E5\uFF0C\u5982 "Windows(?=95|98|NT|2000)" \u80FD\u5339\u914D "Windows2000" \u4E2D\u7684 "Windows"\uFF0C\u4F46\u4E0D\u80FD\u5339\u914D "Windows3.1" \u4E2D\u7684 "Windows"\u3002
- \`(?!pattern)\` \u6B63\u5411\u5426\u5B9A\u9884\u67E5\uFF0C\u5982 "Windows(?!95|98|NT|2000)" \u80FD\u5339\u914D "Windows3.1" \u4E2D\u7684 "Windows"\uFF0C\u4F46\u4E0D\u80FD\u5339\u914D "Windows2000" \u4E2D\u7684 "Windows"\u3002
- \`(?<=pattern)\` \u53CD\u5411\u80AF\u5B9A\u9884\u67E5\uFF0C\u5982 "(?<=95|98|NT|2000)Windows" \u80FD\u5339\u914D "2000Windows" \u4E2D\u7684 "Windows"\uFF0C\u4F46\u4E0D\u80FD\u5339\u914D "3.1Windows" \u4E2D\u7684 "Windows"\u3002
- \`(?<!pattern)\` \u53CD\u5411\u5426\u5B9A\u9884\u67E5\uFF0C\u5982 "(?<!95|98|NT|2000)Windows" \u80FD\u5339\u914D "3.1Windows" \u4E2D\u7684 "Windows"\uFF0C\u4F46\u4E0D\u80FD\u5339\u914D "2000Windows" \u4E2D\u7684 "Windows"\u3002

\u4FEE\u9970\u7B26

- i \u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C/regexp/i
- g \u5168\u5C40\u5339\u914D\uFF0C/regexp/g
- m \u591A\u884C\u5339\u914D\uFF0C/str\\nstr/m
- s \u4F7F\`.\`\u80FD\u5339\u914D\`\\n\`

\u4F8B\u5B50\uFF1A\`/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^0-9a-zA-Z]).{8,}/\`

\u5206\u6790\uFF1A

- \`(?=.*[0-9])\`: \u4FDD\u8BC1\u81F3\u5C11\u6709\u6570\u5B57
- \`(?=.*[a-zA-Z])\`: \u4FDD\u8BC1\u81F3\u5C11\u6709\u5B57\u6BCD
- \`(?=.*[^0-9a-zA-Z])\`: \u4FDD\u8BC1\u81F3\u5C11\u6709\u975E\u6570\u5B57\u548C\u5B57\u6BCD\u7684\u5B57\u7B26
- \`.{8,}\`: \u4FDD\u8BC1\u81F3\u5C11 8 \u4F4D

### \u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5E94\u7528

\`\`\`js
/**
 * \u5C06\u4E00\u4E2A\u5B57\u7B26\u4E32\u6309\u5927\u5199\u5B57\u6BCD\u5F00\u5934\u62C6\u5206
 * \u8F93\u5165'PascalCaseTest'
 * \u8F93\u51FA'Pascal Case Test'
 */
export const splitWord = str => {
  return str.split(/(?=[A-Z])/).join(' ');
};

/**
 * \u4E0B\u5212\u7EBF\u8F6C\u9A7C\u5CF0
 * \u8F93\u5165'house_name'
 * \u8F93\u51FA'houseName'
 */
export const underscoreToHump = str => {
  if (!str || typeof str !== 'string' || !/_(\\w)/.test(str)) return str;
  return str.replace(/_(\\w)/g, function(m, l) {
    return l.toUpperCase();
  });
};

/**
 * \u9A7C\u5CF0\u8F6C\u4E0B\u5212\u7EBF
 * \u8F93\u5165'houseName'
 * \u8F93\u51FA'house_name'
 */
export const humpToUnderscore = str => {
  if (!str || typeof str !== 'string' || !/[A-Z]/.test(str)) return str;
  return str.replace(/[A-Z]/g, function(m) {
    return '_' + m.toLowerCase();
  });
};
\`\`\`

\`\`\`ts
// \u7535\u8BDD\u53F7\u7801
export const TEL = /((\\d{3,4})-(\\d{7,8}))|((\\d{3,4})-(\\d{7,8})-(\\d{1,4}))/;
// \u624B\u673A\u53F7\u7801
export const MOBILE = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
// \u7EAF\u6570\u5B57
export const LOOSE_TEL = /^[0-9]*$/;
// \u7EAF\u6570\u5B57+\u7EAF\u5B57\u6BCD
export const NUMBER_LETTER = /^[0-9a-zA-Z]*$/;
// \u7EAF\u4E2D\u6587+\u7EAF\u6570\u5B57+\u7EAF\u5B57\u6BCD
export const STORE_NAME = /^[\\u4e00-\\u9fa50-9a-zA-Z]*$/;
// \u4E2D\u6587\u5B57\u7B26
export const CHINESE_CHAR = /^([\\u4e00-\\u9fa5]|\\u2022|\\.){1,}$/;
// \u4E2D\u6587\u540D
export const CHINESE_NAME = /^([\\u4e00-\\u9fa5]|[A-Za-z]|\\u2022|\\.){1,}$/;
// \u8EAB\u4EFD\u8BC1\u53F7\u7801\u4E3A15\u4F4D\u6216\u800518\u4F4D\uFF0C15\u4F4D\u65F6\u5168\u4E3A\u6570\u5B57\uFF0C18\u4F4D\u524D17\u4F4D\u4E3A\u6570\u5B57\uFF0C\u6700\u540E\u4E00\u4F4D\u662F\u6821\u9A8C\u4F4D\uFF0C\u53EF\u80FD\u4E3A\u6570\u5B57\u6216\u5B57\u7B26X
export const CHINESE_ID_CARD = /(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)/;
export const HKMO_ID_CARD = /(^[hm]\\d{8,10}$)/i;
export const TW_ID_CARD = /^\\d{8,10}$/;
export const HMTLIVE_ID_CARD = /^8[1-3]\\d{15}[x\\d]$/i;
// \u8425\u4E1A\u6267\u7167
export const BUSINESS_LICENSE_NO = /(^(?:(?![IOZSV])[\\dA-Z]){2}\\d{6}(?:(?![IOZSV])[\\dA-Z]){10}$)|(^\\d{15}$)/;
// \u90AE\u7BB1
export const MAIL = /^[a-z0-9]+([._\\\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
// \u5C0F\u4E8E1\u7684\u91D1\u989D
export const MONEY_WITHIN_ONE = /(^0(\\.([1-9]{1,2})?|\\.0[1-9]?)?$)/;
// \u91D1\u989D\uFF08\u6700\u591A2\u4F4D\u5C0F\u6570\uFF09
export const MONEY = /((^0(\\.([1-9]{1,2})?|\\.0[1-9]?)?$)|(^[1-9](\\d+)?(\\.(\\d{1,2})?)?$))/;
// \u5BC6\u7801\u81F3\u5C118\u4F4D\uFF0C\u5305\u542B\u6570\u5B57\uFF0C\u5B57\u6BCD\u548C\u7279\u6B8A\u5B57\u7B26
export const PASSWORD = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^0-9a-zA-Z]).{8,}/;
/*
 * \u6B63\u5219\u601D\u8DEF\uFF1A
 *   \u7B2C\u4E00\u4F4D\u4E0D\u53EF\u80FD\u662F0
 *   \u7B2C\u4E8C\u4F4D\u5230\u7B2C\u516D\u4F4D\u53EF\u4EE5\u662F0-9
 *   \u7B2C\u4E03\u4F4D\u5230\u7B2C\u5341\u4F4D\u662F\u5E74\u4EFD\uFF0C\u6240\u4EE5\u4E03\u516B\u4F4D\u4E3A19\u6216\u800520
 *   \u5341\u4E00\u4F4D\u548C\u5341\u4E8C\u4F4D\u662F\u6708\u4EFD\uFF0C\u8FD9\u4E24\u4F4D\u662F01-12\u4E4B\u95F4\u7684\u6570\u503C
 *   \u5341\u4E09\u4F4D\u548C\u5341\u56DB\u4F4D\u662F\u65E5\u671F\uFF0C\u662F\u4ECE01-31\u4E4B\u95F4\u7684\u6570\u503C
 *   \u5341\u4E94\uFF0C\u5341\u516D\uFF0C\u5341\u4E03\u90FD\u662F\u6570\u5B570-9
 *   \u5341\u516B\u4F4D\u53EF\u80FD\u662F\u6570\u5B570-9\uFF0C\u4E5F\u53EF\u80FD\u662FX
 * */
export function verifyIDCard(cardNo: string) {
  if (typeof cardNo !== 'string') {
    return false;
  }
  const idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;
  // \u5224\u65AD\u683C\u5F0F\u662F\u5426\u6B63\u786E
  const format = idcard_patter.test(cardNo);
  if (!format) {
    return false;
  }
  // \u52A0\u6743\u56E0\u5B50
  const weight_factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  // \u6821\u9A8C\u7801
  const check_code = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  const last = cardNo[17]; // \u6700\u540E\u4E00\u4F4D
  const seventeen = cardNo.substring(0, 17);
  // ISO 7064:1983.MOD 11-2
  // \u5224\u65AD\u6700\u540E\u4E00\u4F4D\u6821\u9A8C\u7801\u662F\u5426\u6B63\u786E
  const arr = seventeen.split('');
  const len = arr.length;
  let num = 0;
  for (let i = 0; i < len; i++) {
    num += Number(arr[i]) * weight_factor[i];
  }
  // \u83B7\u53D6\u4F59\u6570
  const remainder = num % 11;
  const last_no = check_code[remainder];
  // \u8FD4\u56DE\u9A8C\u8BC1\u7ED3\u679C\uFF0C\u6821\u9A8C\u7801\u548C\u683C\u5F0F\u540C\u65F6\u6B63\u786E\u624D\u7B97\u662F\u5408\u6CD5\u7684\u8EAB\u4EFD\u8BC1\u53F7\u7801
  return last === last_no;
}

/* \u6E2F\u6FB3\u56DE\u4E61\u8BC1 \u6E2F\u6FB3\u8EAB\u4EFD\u8BC1 \u6B63\u5219\u8868\u8FBE\u5F0F */
export function verifyHongKongAndMacaoIdentityCards(cardNo: string) {
  // \u6E2F\u6FB3\u5C45\u6C11\u6765\u5F80\u5185\u5730\u901A\u884C\u8BC1 \u6E2F\u6FB3\u56DE\u4E61\u8BC1
  // \u89C4\u5219\uFF1A H/M + 10\u4F4D\u62166\u4F4D\u6570\u5B57
  // \u6837\u672C\uFF1A H1234567890
  const HongKongAndMacaoHomeVisitPermit = /^([A-Z]\\d{6,10}(\\(\\w{1}\\))?)$/;

  const HongKongIdentityCards = /^[A-Z]{1,2}[0-9]{6}\\([0-9A]\\)/;

  const MacaoIdentityCards = /^[157][0-9]{6}\\([0-9]\\)/;

  return (
    HongKongAndMacaoHomeVisitPermit.test(cardNo) ||
    !HongKongIdentityCards.test(cardNo) ||
    !MacaoIdentityCards.test(cardNo)
  );
}

/* \u53F0\u6E7E\u8BC1\u4EF6\u6821\u9A8C */
export function verifyTaiwanIdentityVerification(cardNo: string) {
  /**
   \u53F0\u6E7E\u8EAB\u4EFD\u8BC1 \u4E00\u4E2A\u5B57\u6BCD+\u4E5D\u4E2A\u6570\u5B57

   \u53C2\u8003 https://tw.51240.com/?tdsourcetag=s_pcqq_aiomsg

   \u65E7\u7248\u53F0\u80DE\u8BC1\u662F\u5341\u4F4D\u6570\u5B57+\u82F1\u6587\u5B57\u6BCD\u4E00\u4E2A
   \u65B0\u7248\u53F0\u80DE\u8BC1\u662F\u516B\u4F4D\u6570\u5B57 \u4E09\u5F00\u5934

   \u53F0\u6E7E\u62A4\u7167\u662F\u4E5D\u4F4D\u6570\u5B57

   \u53C2\u8003 https://blog.csdn.net/sktechcom/article/details/45258285
   */
  return (
    /^[a-zA-Z][0-9]{9}$/.test(cardNo) ||
    /^[0-9]{10}\\([a-zA-Z]\\)$/.test(cardNo) ||
    /^[0-9]{10}[a-zA-Z]$/.test(cardNo) ||
    /^\\d{8}$/.test(cardNo) ||
    /^\\d{9}$/.test(cardNo)
  );
}
\`\`\`
`}}]);
