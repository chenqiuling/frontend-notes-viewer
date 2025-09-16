"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[2012],{90769:function(e,n,a){a.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u6982\u5FF5
- [yarn](https://classic.yarnpkg.com/zh-Hans/docs/cli/config) Facebook \u63A8\u51FA\uFF0C\u89E3\u51B3 npm \u65E9\u671F\u7A33\u5B9A\u6027/\u901F\u5EA6\u95EE\u9898\uFF0C\u652F\u6301\u5E76\u884C\u4E0B\u8F7D\u3001\u79BB\u7EBF\u7F13\u5B58\u3001workspaces\u3002

## \u521D\u59CB\u5316
\u5728\u6839\u76EE\u5F55\u4E0B\u751F\u6210 package.json \u6587\u4EF6
\`\`\`bash
yarn init
\`\`\`

## \u5B89\u88C5\u4F9D\u8D56
\`\`\`bash
yarn                      # \u6839\u636E package.json \u4E2D\u7684 dependencies \u548C devDependencies \u5B89\u88C5\u5168\u90E8\u4F9D\u8D56
yarn add <package> --dev      # \u5199\u5165 package.json \u4E2D devDependencies \u91CC\uFF0C--dev \u7B80\u5199\u4E3A -D
yarn add <package>            # \u5199\u5165 package.json \u4E2D dependencies \u91CC
yarn global add <package>     # \u4F7F\u7528 global \u8868\u793A\u5168\u5C40\u5B89\u88C5
\`\`\`

## \u5378\u8F7D\u4F9D\u8D56
\`\`\`bash
yarn remove <package>
\`\`\`

\u5220\u9664 node_modules \u6587\u4EF6\u5939 \`rm -rf /node_modules\`\uFF0Cmac \u7CFB\u7EDF\u5982\u6D89\u53CA\u6743\u9650\u95EE\u9898\u9700\u52A0 sudo\uFF1A\`sudo rm -rf /node_modules\`

## \u66F4\u65B0\u4F9D\u8D56
\`\`\`bash
yarn upgrade <package>
\`\`\`

## \u67E5\u770B\u5168\u5C40\u6A21\u5757
\`\`\`bash
yarn global list --depth=0    # list \u53EF\u4EE5\u7B80\u5199\u4E3A ls
\`\`\`

## \u6E05\u9664\u7F13\u5B58
\`\`\`bash
yarn cache clean
\`\`\`

## \u67E5\u770B\u914D\u7F6E
\`\`\`bash
npm config list    # list \u53EF\u4EE5\u7B80\u5199\u4E3A ls
yarn config list   # list \u4E0D\u53EF\u4EE5\u7B80\u5199\u4E3A ls
\`\`\`

## \u8BBE\u7F6E\u914D\u7F6E
\`\`\`bash
yarn config get <key>
yarn config set <key> <value> [-g|--global]
\`\`\`

## \u5220\u9664\u914D\u7F6E
\`\`\`bash
yarn config delete <key>
\`\`\`

## \u4FEE\u6539\u5168\u5C40\u5305\u5B58\u653E\u8DEF\u5F84
\`\`\`bash
# \u67E5\u770B\u5F53\u524D\u8DEF\u5F84
yarn global dir

# \u4FEE\u6539
yarn config set global-folder "D:\\AppData\\yarn_global"
\`\`\`

## \u4FEE\u6539\u7F13\u5B58\u5B58\u653E\u8DEF\u5F84
\`\`\`bash
# \u67E5\u770B\u5F53\u524D\u8DEF\u5F84
yarn cache dir

# \u4FEE\u6539
yarn config set cache-folder "D:\\AppData\\yarn_cache"
\`\`\`
`}}]);
