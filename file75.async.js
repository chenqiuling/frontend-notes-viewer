"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[7757],{49121:function(a,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u6982\u5FF5

- [npm](https://docs.npmjs.com/) Node.js \u5B98\u65B9\u5305\u7BA1\u7406\u5668\uFF0C\u751F\u6001\u6700\u6210\u719F\uFF0C\u901F\u5EA6\u8F83\u6162\uFF0C\u4F9D\u8D56\u5E73\u94FA\u7ED3\u6784\u6613\u5BFC\u81F4\u4F9D\u8D56\u91CD\u590D\u3002
- npx \u662F npm5.2 \u4E4B\u540E\u53D1\u5E03\u7684\u4E00\u4E2A\u547D\u4EE4\u3002\u65E0\u9700\u5168\u5C40\u5B89\u88C5\u4F9D\u8D56\u5305\uFF0C\u800C\u662F\u4E34\u65F6\u4E0B\u8F7D\u4F9D\u8D56\u5305\uFF0C\u4F7F\u7528\u5B8C\u4FBF\u5378\u8F7D\u4F9D\u8D56\u5305\u3002\u5E38\u7528\u4E8E react-cli\u3001vue-cli \u7B49\u521B\u5EFA\u9879\u76EE\u3002
- cnpm \u6DD8\u5B9D\u56E2\u961F\u505A\u7684\u56FD\u5185\u955C\u50CF\uFF0C\u9700\u8981\u8BBE\u7F6E\u6DD8\u5B9D\u955C\u50CF \`npm config set registry https://registry.npm.taobao.org\` \u3002
- [pnpm](https://www.pnpm.cn/) \u901F\u5EA6\u5FEB\u3001\u8282\u7701\u78C1\u76D8\u7A7A\u95F4\u7684\u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\uFF0C\u901A\u8FC7\u786C\u94FE\u63A5+\u7B26\u53F7\u94FE\u63A5\u5171\u4EAB\u4F9D\u8D56\uFF0C\u8282\u7701\u7A7A\u95F4\uFF0C\u63D0\u5347\u5B89\u88C5\u901F\u5EA6\uFF0C\u4E25\u683C\u9694\u79BB\u4F9D\u8D56\u3002

## \u521D\u59CB\u5316

\u5728\u6839\u76EE\u5F55\u4E0B\u751F\u6210 package.json \u6587\u4EF6

\`\`\`bash
npm init
npm init -y               # \u5FEB\u901F\u521D\u59CB\u5316\uFF0C\u9ED8\u8BA4\u5168\u90E8\u4E3A yes
\`\`\`

## \u5B89\u88C5\u4F9D\u8D56

\`\`\`bash
npm install               # \u6839\u636E package.json \u4E2D\u7684 dependencies \u548C devDependencies \u5B89\u88C5\u5168\u90E8\u4F9D\u8D56
npm install <package> --save-dev  # \u5199\u5165 package.json \u4E2D devDependencies \u91CC\uFF0C--save-dev \u7B80\u5199\u4E3A -D
npm install <package> --save      # \u5199\u5165 package.json \u4E2D dependencies \u91CC\uFF0C--save \u7B80\u5199\u4E3A -S
npm install <package>             # \u5B89\u88C5\u4F9D\u8D56\uFF0C\u4F46\u4E0D\u4F1A\u5199\u5165package.json \u4E2D\uFF0Cinstall \u7B80\u5199\u4E3A i
npm install <package> --global    # \u5168\u5C40\u5B89\u88C5\uFF0C--global \u7B80\u5199\u4E3A -g

npm install node@latest -g    # @\u540E\u52A0\u7248\u672C\u53F7\uFF0Clatest \u8868\u793A\u6700\u65B0\u7248\u672C, \u4E5F\u53EF\u4EE5\u662F\u67D0\u4E00\u5177\u4F53\u7248\u672C\u53F7
npm install yarn -g
npm install npm -g
npm install cnpm -g --registry=https://registry.npm.taobao.org
\`\`\`

## \u5378\u8F7D\u4F9D\u8D56

\`\`\`bash
npm uninstall <package>
\`\`\`

## \u66F4\u65B0\u4F9D\u8D56

\`\`\`bash
npm update <package>
\`\`\`

## \u67E5\u770B\u5168\u5C40\u6A21\u5757

\`\`\`bash
npm list -g --depth 0         # list \u53EF\u4EE5\u7B80\u5199\u4E3A ls
\`\`\`

## \u6E05\u9664\u7F13\u5B58

\`\`\`bash
npm cache clean
npm cache clean -df
\`\`\`

## \u67E5\u770B\u914D\u7F6E

\`\`\`bash
npm config list    # list \u53EF\u4EE5\u7B80\u5199\u4E3A ls
\`\`\`

## \u8BBE\u7F6E\u914D\u7F6E

\`\`\`bash
npm config get <key>
npm config set <key> <value>
# \u4F8B\u5982\uFF1A
npm config set registry https://registry.npm.taobao.org
\`\`\`

## \u5220\u9664\u914D\u7F6E

\`\`\`bash
npm config delete <key>
\`\`\`

## \u4FEE\u6539\u5168\u5C40\u5305\u5B58\u653E\u8DEF\u5F84

\`\`\`bash
# \u9ED8\u8BA4\u5B89\u88C5\u8DEF\u5F84
C:\\Users\\XXX\\AppData\\Roaming\\npm

# \u4FEE\u6539
npm config set prefix "D:\\AppData\\npm_global"
\`\`\`

## \u4FEE\u6539\u7F13\u5B58\u5B58\u653E\u8DEF\u5F84

\`\`\`bash
# \u9ED8\u8BA4\u5B89\u88C5\u8DEF\u5F84
C:\\Users\\XXX\\AppData\\Roaming\\npm-cache

# \u4FEE\u6539
npm config set cache "D:\\AppData\\npm_cache"
\`\`\`

## npm \u53D1\u5305

\`\`\`bash
npm adduser
npm publish --access public
\`\`\`

## install \u62A5\u9519

1. \u62A5\u9519 \`getaddrinfo ENOENT raw.githubusercontent.com\`

\u539F\u56E0\uFF1A\u7531\u4E8E\u8FD1\u671F Github \u7684 raw \u6587\u4EF6\u8BFB\u53D6\u5730\u5740\u906D\u53D7 DNS \u6C61\u67D3\uFF0C\u5BFC\u81F4\u6587\u4EF6\u4E0B\u8F7D\u56F0\u96BE\u3002

\u89E3\u51B3\uFF1A\u4FEE\u6539 hosts \u6587\u4EF6\uFF08\u4F4D\u7F6E\uFF1Awindows \u7CFB\u7EDF C:\\WINDOWS\\system32\\drivers\\etc\uFF09

\uFF081\uFF09\u8FDB\u5165\u8FD9\u4E2A\u7F51\u5740\uFF1Ahttps://www.ipaddress.com\uFF0C\u5728\u5176\u4E2D\u8F93\u5165\u57DF\u540D raw.githubusercontent.com\uFF0C\u7136\u540E\u70B9\u51FB\u67E5\u8BE2\uFF0C\u83B7\u53D6\u5176\u5BF9\u5E94\u7684\u771F\u5B9E IP\uFF1B

\uFF082\uFF09\u6253\u5F00 hosts \u6587\u4EF6\uFF08windows \u4E0B\u76EE\u5F55\uFF1AC:/Windows/System32/drivers/etc/\uFF09\uFF0C\u5982\u67E5\u8BE2\u5230\u7684\u771F\u5B9E IP \u4E3A 199.232.96.133\uFF0C\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A

\`\`\`bash
199.232.96.133 raw.githubusercontent.com
\`\`\`

2. \u62A5\u9519\`unable to verify the first certificate\`

\u539F\u56E0\uFF1A\u7F51\u7EDC\u95EE\u9898\uFF0C\u6BD4\u5982\u5185\u7F51\u9650\u5236\u4E86 raw.githubusercontent.com \u7684\u8BBF\u95EE\uFF0C\u800C\u4F9D\u8D56\u5305\u91CC\u67D0\u4E2A\u4F9D\u8D56\u662F\u4ECE\u8FD9\u4E2A\u57DF\u4E0B\u8F7D\u7684\uFF0C\u76EE\u524D\u9047\u5230\u8FD9\u7C7B\u95EE\u9898\u7684\u5305\u6709 gulp-imagemin\uFF0C\u6B64\u5305\u4F9D\u8D56\u7684 imagemin-gifsicle\u3001imagemin-mozjpeg\u3001magemin-optipng \u4F1A\u4EA7\u751F\u6B64\u95EE\u9898\u3002

\u89E3\u51B3\uFF1A\u4F7F\u7528\u81EA\u5DF1\u7684\u70ED\u70B9\u6216\u5176\u4ED6\u975E\u9650\u5236\u7684\u7F51\u7EDC\u4E0B\u8F7D\u4F9D\u8D56\u3002

3. \u62A5\u9519\`error An unexpected error occurred: "EPERM: operation not permitted"\`

\u89E3\u51B3\uFF1A

\`\`\`bash
npm cache clean --force
\`\`\`

4. \u62A5\u9519\`npm WARN tar ENOENT: no such file or directory, open "xxxx"\`

\u89E3\u51B3\uFF1A\u5220\u9664\u6587\u4EF6 package-lock.json
`}}]);
