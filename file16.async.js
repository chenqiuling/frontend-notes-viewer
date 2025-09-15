"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[8783],{95282:function(o,e,n){n.r(e),e.default=`## Cookie

| \u5C5E\u6027           | \u8BF4\u660E         | \u793A\u4F8B                                                        | \u91CD\u8981\u6027       |
| -------------- | ------------ | ----------------------------------------------------------- | ------------ |
| **Name/Value** | \u6570\u636E\u952E\u503C\u5BF9   | \`user_id=abc123\`                                            | \u5FC5\u9700         |
| **Domain**     | \u751F\u6548\u7684\u57DF\u540D   | \`.example.com\`                                              | \u63A7\u5236\u4F5C\u7528\u57DF   |
| **Path**       | \u751F\u6548\u7684\u8DEF\u5F84   | \`/products/\`                                                | \u7EC6\u5206\u4F5C\u7528\u57DF   |
| **Expires**    | \u8FC7\u671F\u65F6\u95F4     | \`Wed, 21 Oct 2025 07:28:00 GMT\`                             | \u6301\u4E45\u6027\u63A7\u5236   |
| **Max-Age**    | \u5B58\u6D3B\u79D2\u6570     | \`604800\` (7 \u5929)                                             | \u66FF\u4EE3 Expires |
| **Secure**     | \u4EC5 HTTPS     | \`Secure\`                                                    | \u5B89\u5168\u4F20\u8F93     |
| **HttpOnly**   | \u7981\u6B62 JS \u8BBF\u95EE | \`HttpOnly\`                                                  | \u9632 XSS       |
| **SameSite**   | \u8DE8\u7AD9\u63A7\u5236     | \`Lax\`\uFF08\u5141\u8BB8\u90E8\u5206\uFF09, \`Strict\`\uFF08\u5B8C\u5168\u7981\u6B62\uFF09, \`None\`\uFF08\u5141\u8BB8\u8DE8\u7AD9\uFF09 | \u9632 CSRF      |

\`\`\`js
// \u5B89\u5168 Cookie \u8BBE\u7F6E\u793A\u4F8B
res.cookie('auth', token, {
  httpOnly: true, // \u9632XSS
  secure: true, // \u4EC5HTTPS
  sameSite: 'Lax', // \u9632CSRF
  maxAge: 3600000, // \u53EF\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\uFF08\u9ED8\u8BA4\u4F1A\u8BDD\u5173\u95ED\u5931\u6548\uFF09
  path: '/', // \u5168\u7AD9\u6709\u6548
  domain: 'example.com', // \u6307\u5B9A\u57DF\u540D
});
\`\`\`

- \u5927\u5C0F\u9650\u5236\uFF1A4KB/\u6761
- \u6570\u91CF\u9650\u5236\uFF1A\u7EA6 150-180 \u6761/\u57DF\u540D
- \u6027\u80FD\u5F71\u54CD\uFF1A\u6BCF\u6B21\u8BF7\u6C42\u81EA\u52A8\u643A\u5E26
- \u9690\u79C1\u95EE\u9898\uFF1A\u7B2C\u4E09\u65B9 Cookie \u9010\u6B65\u88AB\u6DD8\u6C70
- \u8BFB\u53D6\uFF1A\`document.cookie\`\u8FD4\u56DE\u6240\u6709 Cookie\uFF08\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF0C\u5206\u53F7\u5206\u9694\uFF09\u3002
- \u5199\u5165\uFF1A\`document.cookie = "key=value; expires=...; path=...; domain=...; secure";\`\uFF08\u6CE8\u610F\uFF1A\u6BCF\u6B21\u8BBE\u7F6E\u53EA\u80FD\u5305\u542B\u4E00\u4E2A\u952E\u503C\u5BF9\uFF08\u5373\u4E00\u4E2A Cookie\uFF09\uFF0C\u4F46\u53EF\u4EE5\u540C\u65F6\u8BBE\u7F6E\u8BE5 Cookie \u7684\u5C5E\u6027\uFF08\u5982\u8FC7\u671F\u65F6\u95F4\u3001\u4F5C\u7528\u57DF\u7B49\uFF09\uFF09\u3002
`}}]);
