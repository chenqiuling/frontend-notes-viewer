"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[2023],{2159:function(e,n,t){t.r(n),n.default=`\u901A\u5E38\u914D\u5408 husky \u6216\u8005 yorkie \u4F7F\u7528\u3002

husky \u4E0E yorkie \u7684\u4E0D\u540C\uFF1A

- husky v7 \u7248\u672C\u4EC5\u652F\u6301\u4FEE\u6539 .husky/xxx \u76EE\u5F55\u4E0B\u7684\u914D\u7F6E\u811A\u672C\uFF0Cv4 \u7248\u672C\u652F\u6301 package.json \u4E2D\u901A\u8FC7 \`"husky": {"hooks": {"pre-commit": "xxx"}}\` \u7684\u65B9\u5F0F\u66F4\u65B0\u811A\u672C\uFF1B
- yorkie \u652F\u6301\u5728 package.json \u4E2D\u901A\u8FC7 \`"gitHooks": {"pre-commit": "xxx"}\` \u7684\u65B9\u5F0F\u66F4\u65B0\u811A\u672C\u3002

## commitlint

\`\`\`
yarn add @commitlint/cli -D
yarn add @commitlint/config-conventional -D
\`\`\`

.commitlintrc.js

\`\`\`js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'confict'],
    ],
  },
};
\`\`\`

git commit \u7684\u524D\u7F00\u5B9A\u4E49\uFF1A

- feat: \u65B0\u589E feature
- fix: \u4FEE\u590D bug
- docs: \u4EC5\u4EC5\u4FEE\u6539\u4E86\u6587\u6863\uFF0C\u5982 readme.md
- style: \u4EC5\u4EC5\u662F\u5BF9\u683C\u5F0F\u8FDB\u884C\u4FEE\u6539\uFF0C\u5982\u9017\u53F7\u3001\u7F29\u8FDB\u3001\u7A7A\u683C\u7B49\u3002\u4E0D\u6539\u53D8\u4EE3\u7801\u903B\u8F91\u3002
- refactor: \u4EE3\u7801\u91CD\u6784\uFF0C\u6CA1\u6709\u65B0\u589E\u529F\u80FD\u6216\u4FEE\u590D bug
- perf: \u4F18\u5316\u76F8\u5173\uFF0C\u5982\u63D0\u5347\u6027\u80FD\u3001\u7528\u6237\u4F53\u9A8C\u7B49
- test: \u6D4B\u8BD5\u7528\u4F8B\uFF0C\u5305\u62EC\u5355\u5143\u6D4B\u8BD5\u3001\u96C6\u6210\u6D4B\u8BD5
- chore: \u6539\u53D8\u6784\u5EFA\u6D41\u7A0B\u3001\u6216\u8005\u589E\u52A0\u4F9D\u8D56\u5E93\u3001\u5DE5\u5177\u7B49
- revert: \u7248\u672C\u56DE\u6EDA
- confict: \u89E3\u51B3\u51B2\u7A81

## lint-staged

\`\`\`
yarn add lint-staged -D
\`\`\`

husky package.json \u4E2D\u6DFB\u52A0\u914D\u7F6E\uFF1A

\`\`\`json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {}
}
\`\`\`

\u6216\u8005\uFF1A

yorkie package.json \u4E2D\u6DFB\u52A0\u914D\u7F6E\uFF1A

\`\`\`json
{
  "gitHooks": {
    "pre-commit": "lint-staged"
  },
  "lint-staged": {}
}
\`\`\`

## husky \u4E3A\u4F8B

\`\`\`
yarn add husky -D
husky install
\`\`\`

\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u751F\u6210 .husky \u6587\u4EF6\u5939

\u521B\u5EFA commit-msg \u6587\u4EF6

\`\`\`
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit \${1}
\`\`\`

\u521B\u5EFA pre-commit \u6587\u4EF6

\`\`\`
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn lint-staged
\`\`\`

package.json

\`\`\`json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -e $HUSKY_GIT_PARAMS",
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,json,less}": "prettier --write",
    "*.ts?(x)": "prettier --parser=typescript --write",
    "*.{js,jsx,json,ts?(x)}": "eslint --fix",
    "*.less": "stylelint --fix"
  }
}
\`\`\`
`}}]);
