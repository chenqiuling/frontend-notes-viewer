"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[6149],{75016:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

[\u4E2D\u6587\u6587\u6863](https://www.webpackjs.com/)

## \u6784\u5EFA\u6D41\u7A0B

Webpack \u57FA\u4E8E\u6253\u5305\uFF08Bundle\uFF09\uFF0C\u9012\u5F52\u5206\u6790\u4F9D\u8D56\u751F\u6210\u5355\u4E00/\u591A\u4E2A Bundle \u6587\u4EF6\u3002

\u5206\u56DB\u9636\u6BB5\uFF1A

- \u521D\u59CB\u5316\uFF1A\u8BFB\u53D6\u914D\u7F6E\uFF0C\u521B\u5EFA Compiler \u5BF9\u8C61\u3002
- \u7F16\u8BD1\uFF1A\u4ECE\u5165\u53E3\u9012\u5F52\u89E3\u6790\u4F9D\u8D56\uFF0C\u751F\u6210\u4F9D\u8D56\u56FE\u3002
- \u6253\u5305\uFF1A\u8C03\u7528 Loader \u8F6C\u8BD1\u8D44\u6E90\uFF0CPlugin \u4F18\u5316\u4EE3\u7801\uFF08\u5982 Tree Shaking\uFF09\u3002
- \u8F93\u51FA\uFF1A\u751F\u6210 Chunk\uFF0C\u5199\u5165 Bundle \u6587\u4EF6\u3002

## Babel \u5DE5\u4F5C\u539F\u7406

\u8F6C\u8BD1\u8FC7\u7A0B\uFF1A

1. \u89E3\u6790\uFF08Parsing\uFF09: \u4EE3\u7801 -> AST\uFF08\u62BD\u8C61\u8BED\u6CD5\u6811\uFF09
2. \u8F6C\u6362\uFF08Transforming\uFF09\uFF1A\u63D2\u4EF6\u5904\u7406 AST
3. \u751F\u6210\uFF08Generation\uFF09: AST -> \u65B0\u4EE3\u7801

\u6838\u5FC3\u914D\u7F6E\uFF1A

1. presets: \u9884\u8BBE\u63D2\u4EF6\u96C6\u5408
2. plugins: \u5355\u4E2A\u8F6C\u6362\u63D2\u4EF6
3. polyfill: \u517C\u5BB9\u6027\u8865\u4E01\u5305\uFF0C\u5982 core-js

### Babel \u5982\u4F55\u5B9E\u73B0 JSX \u8F6C\u6362

1. @babel/plugin-transform-react-jsx \u63D2\u4EF6
2. \u5C06 JSX \u8F6C\u6362\u4E3A React.createElement \u8C03\u7528

## Loader

\u6587\u4EF6\u52A0\u8F7D\u5668\uFF0C\u7528\u4E8E\u5904\u7406\u6587\u4EF6\uFF0C\u5982\u4EE3\u7801\u8F6C\u6362\u3001\u6587\u4EF6\u7684\u538B\u7F29\u7B49\u3002\u94FE\u5F0F\u8C03\u7528: \u4ECE\u4E0B\u5230\u4E0A\u3001\u4ECE\u53F3\u5230\u5DE6\uFF08compose \u51FD\u6570 reduceRight \u65B9\u6CD5\uFF09\uFF0C\u6240\u4EE5 style-loader \u9700\u8981\u5728 css-loader \u4E0A\u9762\u3002

### \u5E38\u7528\u7684 Loader

- babel-loader\u3001babel-core\uFF1A\u8F6C\u8BD1 ES6+ \u8BED\u6CD5\u3002
- ts-loader: \u5C06 TypeScript \u8F6C\u4E3A JavaScript\u3002
- css-loader: \u8F6C\u6362 import\u3001require() \u548C @import \u5F15\u5165\u7684\u5185\u5BB9\u3002\u5373\u5904\u7406 css \u6587\u4EF6\u7684\u4F9D\u8D56\u5173\u7CFB\u3002
- style-loader: \u521B\u5EFA style \u6807\u7B7E\uFF0C\u5B58\u653E\u6837\u5F0F\u3002
- url-loader: \u5904\u7406\u56FE\u7247\u3001\u97F3\u9891\u7B49\u6587\u4EF6\uFF0C\u5185\u90E8\u5C01\u88C5\u4E86 file-loader\uFF0C\u5982\u6587\u4EF6\u5C0F\u4E8E\u67D0\u4E2A\u9608\u503C\u65F6\u8F6C\u6210 Data URL\uFF0C\u5927\u4E8E\u65F6\u4F20\u7ED9 file-loader \u5904\u7406\u3002
- file-loader: \u5904\u7406\u6587\u4EF6\u5F15\u7528\u3002
- image-webpack-loader\uFF1A \u56FE\u7247\u538B\u7F29\uFF0C\u51CF\u5C0F\u8D44\u6E90\u4F53\u79EF\u3002

\`\`\`js
var baseConfig = {
  rules: [
    {
      test: /\\.(js|jsx)$/,
      use: 'babel-loader',
    },
    {
      test: /\\.ts$/,
      use: 'ts-loader',
    },
    {
      test: /\\.css$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
      ],
    },
    {
      test: /\\.(png|svg|jpe?g)$/i,
      loader: 'url-loader',
      options: {
        esModule: false,
      },
    },
    {
      test: /\\.(woff|woff2|eot|ttf|otf)$/i,
      loader: 'file-loader',
      options: {
        esModule: false,
      },
    },
  ],
};
\`\`\`

## plugin

\u6269\u5C55\u63D2\u4EF6\uFF0C\u4ECB\u5165\u6253\u5305\u5168\u8FC7\u7A0B\uFF0C\u4F18\u5316\u6253\u5305\u548C\u538B\u7F29\u3001\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF\u7B49\u3002

- CommonChunkPlugin \u7528\u4E8E\u63D0\u53D6\u7B2C\u4E09\u65B9\u5E93\u548C\u516C\u5171\u6A21\u5757\uFF0C\u907F\u514D\u52A0\u8F7D\u7684 bundle \u6587\u4EF6\u4F53\u79EF\u8FC7\u5927\uFF0C\u5BFC\u81F4\u52A0\u8F7D\u65F6\u95F4\u8FC7\u957F\u3002
- HtmlWebpackPlugin \u5B8C\u6210 html \u6587\u4EF6\u7684\u6253\u5305\u548C\u62F7\u8D1D\uFF0C\u5C06\u6253\u5305\u597D\u7684 js \u6587\u4EF6\u63D2\u5165 html\u3002

\`\`\`js
var HTMLWebpackPlugin = require('html-webpack-plugin');
var baseConfig = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      chunks: [],
      inject: true, // \u8D44\u6E90\u52A0\u5165\u5E95\u90E8
    }),
  ],
};
\`\`\`

## \u591A\u5165\u53E3\u914D\u7F6E

\`\`\`js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    page1: './src/page1.js',
    page2: './src/page2.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
\`\`\`

## \u4F18\u5316\u7B56\u7565

\u6784\u5EFA\u901F\u5EA6\u4F18\u5316\uFF1A

1. \u7F13\u5B58\uFF1Acache-loader \u5982\u679C\u6587\u4EF6\u6CA1\u6709\u53D8\u5316\uFF0C\u5C31\u4E0D\u4F7F\u7528 loader\uFF0C\u76F4\u63A5\u4F7F\u7528\u7F13\u5B58, HardSourceWebpackPlugin
2. \u591A\u7EBF\u7A0B\uFF1Athread-loader, happypack \u5E76\u884C\u5904\u7406
3. \u7F29\u5C0F\u8303\u56F4\uFF1Aexclude/include, resolve.modules, \u9650\u5B9A Loader \u4F5C\u7528\u57DF

\u8F93\u51FA\u8D28\u91CF\u4F18\u5316\uFF1A

1. \u4EE3\u7801\u5206\u5272\uFF1ASplitChunksPlugin \u62C6\u5206\u516C\u5171\u4EE3\u7801

\`\`\`js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    another: './src/another-module.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // \u5173\u952E
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\\/]node_modules[\\\\/]/,
          minChunks: 5,
          priority: -9, // \u6570\u5B57\u8D8A\u5927\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8
          chunks: 'all',
          reuseExistingChunk: true, // \u5141\u8BB8\u5728\u6A21\u5757\u5B8C\u5168\u5339\u914D\u65F6\u91CD\u7528\u73B0\u6709\u6A21\u5757\uFF0C\u800C\u4E0D\u662F\u521B\u5EFA\u65B0\u6A21\u5757
        },
        common: {
          name: 'chunk-common',
          test(module) {
            return module.resource && !module.resource.includes('node_modules');
          },
          minChunks: 2,
          priority: -10,
          chunks: 'all',
          reuseExistingChunk: true,
        },
      },
    },
  },
};
\`\`\`

2. \u6309\u9700\u5F15\u5165\uFF1ATree Shaking\uFF0C\u79FB\u9664\u672A\u4F7F\u7528\u4EE3\u7801

\u9700 ES Module \u8BED\u6CD5+sideEffects

Tree Shaking\uFF1A\u6307\u6211\u4EEC\u6253\u5305\u6A21\u5757\u65F6\u53EF\u4EE5\u53BB\u9664\u672A\u4F7F\u7528\u7684\u4EE3\u7801\uFF0C\u53EA\u5F15\u5165\u4F7F\u7528\u7684\u4EE3\u7801\u3002

Side Effect\uFF1A\u526F\u4F5C\u7528\uFF0C\u662F\u6307\u51FD\u6570\u6216\u8005\u8868\u8FBE\u5F0F\u7684\u884C\u4E3A\u4F9D\u8D56\u4E8E\u5916\u90E8\u4E16\u754C\u3002\u6240\u5904\u73AF\u5883\u6539\u53D8\u7ED3\u679C\u4F1A\u4E0D\u4E00\u81F4\u3002

Pure Module\uFF1A\u7EAF\u6A21\u5757\uFF0C\u662F\u6307\u4E0D\u4EA7\u751F\u526F\u4F5C\u7528\u7684\u6A21\u5757\u4EE3\u7801\uFF0C\u5176\u7ED3\u679C\u603B\u662F\u4E00\u81F4\u7684\u3002

- usedExports

  \u8BE5\u9009\u9879\u7684\u9ED8\u8BA4\u503C\u5728 production \u73AF\u5883\u4E0B\u4E3A true\uFF0C\u5176\u5B83\u73AF\u5883\u4E0B\u4E3A false\uFF1B

webpack.config.js \u4E2D

\`\`\`js
module.exports = {
  mode: 'development',
  optimization: {
    usedExports: true,
  },
};
\`\`\`

\u4F7F\u7528 usedExports \u4E4B\u540E\uFF0C webpack \u6253\u5305\u4E2D\u4F1A\u5728\u6CA1\u88AB\u4F7F\u7528\u7684\u4EE3\u7801\u524D\u52A0\u4E0A \`unused harmony export xxx\` \u6CE8\u91CA\uFF0C\u7528\u6765\u544A\u77E5 Terser \u5728\u4F18\u5316\u65F6\uFF0C\u53EF\u4EE5\u5220\u9664\u6389\u8FD9\u6BB5\u4EE3\u7801\u3002

\u4F7F\u7528 usedExports \u65F6\uFF1A

\`\`\`js
'use strict';
/* unused harmony export UseRequestProvider */
/* unused harmony export UseAPIProvider */
\`\`\`

\u672A\u4F7F\u7528 usedExports \u65F6\uFF1A

\`\`\`js
'use strict';
__webpack_require__.r(__webpack_exports__);
// prettier-ignore
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseRequestProvider", function() { return UseRequestProvider; });
// prettier-ignore
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseAPIProvider", function() { return UseAPIProvider; });
\`\`\`

- sideEffects

package.json \u4E2D

\`\`\`json
{
  // \u5BF9\u4F1A\u4EA7\u751F\u526F\u4F5C\u7528\u7684\u6587\u4EF6\u4E0D\u4F7F\u7528tree shaking\uFF0C\u5982\u679C\u6240\u6709\u6587\u4EF6\u90FD\u4E0D\u4EA7\u751F\u526F\u4F5C\u7528\uFF0C\u8BBE\u7F6E\u4E3Afalse
  "sideEffects": ["*.css"]
}
\`\`\`

sideEffects \u548C usedExports\uFF08\u66F4\u591A\u88AB\u8BA4\u4E3A\u662F tree shaking\uFF09\u662F\u4E24\u79CD\u4E0D\u540C\u7684\u4F18\u5316\u65B9\u5F0F\u3002

sideEffects \u66F4\u4E3A\u6709\u6548\u662F\u56E0\u4E3A\u5B83\u5141\u8BB8\u8DF3\u8FC7\u6574\u4E2A\u6A21\u5757/\u6587\u4EF6\u548C\u6574\u4E2A\u6587\u4EF6\u5B50\u6811\u3002

usedExports \u4F9D\u8D56\u4E8E terser \u53BB\u68C0\u6D4B\u8BED\u53E5\u4E2D\u7684\u526F\u4F5C\u7528\u3002

3. \u4F5C\u7528\u57DF\u63D0\u5347\uFF1AModuleConcatenationPlugin

## \u6587\u4EF6\u4F53\u79EF\u538B\u7F29

\`\`\`js
// webpack.optimized.config.js
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\\.js(\\?.*)?$/i, // \u9700\u8981\u538B\u7F29\u7684\u6587\u4EF6
        parallel: true, // \u4F7F\u7528\u591A\u8FDB\u7A0B\u5E76\u53D1\u8FD0\u884C\u4EE5\u63D0\u9AD8\u6784\u5EFA\u901F\u5EA6
        terserOptions: {
          compress: {
            drop_console: true, // \u79FB\u9664 console \u8BED\u53E5
            drop_debugger: true, // \u79FB\u9664 debugger \u8BED\u53E5
          },
          format: {
            comments: false, // \u79FB\u9664\u6240\u6709\u6CE8\u91CA
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
};
\`\`\`

## \u8054\u90A6\u6A21\u5757

\u6A21\u5757\u8054\u90A6\u662F\u4E00\u79CD\u5FAE\u524D\u7AEF\u67B6\u6784\u65B9\u6848\uFF0C\u5141\u8BB8\u5C06\u5E94\u7528\u62C6\u5206\u4E3A\u72EC\u7ACB\u6A21\u5757\uFF08Host/Remote\uFF09\uFF0C\u652F\u6301\u8DE8\u5E94\u7528\u52A8\u6001\u52A0\u8F7D\u5171\u4EAB\u4EE3\u7801\u3002\u6838\u5FC3\u4F18\u52BF\u5305\u62EC\uFF1A

- \u72EC\u7ACB\u5F00\u53D1\u4E0E\u90E8\u7F72\uFF1A\u56E2\u961F\u53EF\u81EA\u6CBB\u7BA1\u7406\u6A21\u5757\uFF0C\u964D\u4F4E\u534F\u4F5C\u6210\u672C 14\u3002
- \u4F9D\u8D56\u5171\u4EAB\uFF1A\u907F\u514D\u91CD\u590D\u6253\u5305\uFF08\u5982 React/Vue \u5E93\uFF09\uFF0C\u51CF\u5C11\u4EA7\u7269\u4F53\u79EF 29\u3002
- \u6280\u672F\u6808\u65E0\u5173\uFF1A\u6DF7\u5408\u4F7F\u7528 Angular\u3001React\u3001Vue \u7B49\u6846\u67B6 18\u3002

Webpack 5+ \u5185\u7F6E ModuleFederationPlugin\uFF0C\u65E0\u9700\u989D\u5916\u63D2\u4EF6\u3002

\`\`\`js
// \u4E3B\u5E94\u7528\u914D\u7F6E
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'hostApp',
      remotes: {
        // \u5F15\u7528\u8FDC\u7A0B\u5E94\u7528
        remoteApp: 'remoteApp@http://localhost:3001/remoteEntry.js',
        // \u52A8\u6001\u8FDC\u7A0B\u52A0\u8F7D\uFF08Dynamic Remotes\uFF09
        // dynamicRemote: \`promise new Promise(resolve => {
        //   const url = fetchRemoteUrl(); // \u81EA\u5B9A\u4E49\u903B\u8F91
        //   const script = document.createElement("script");
        //   script.src = url;
        //   script.onload = () => resolve(window.dynamicRemote);
        //   document.head.appendChild(script);
        // })\`,
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.0.0' }, // \u5355\u4F8B\u6A21\u5F0F\uFF0C\u7248\u672C\u5F3A\u6821\u9A8C
      },
    }),
  ],
};

// \u4F7F\u7528\u8FDC\u7A0B\u6A21\u5757
const RemoteButton = React.lazy(() => import('remoteApp/Button'));

// \u5B50\u5E94\u7528\uFF08Remote\uFF09\u914D\u7F6E
new ModuleFederationPlugin({
  name: 'remoteApp',
  filename: 'remoteEntry.js', // \u5165\u53E3\u6587\u4EF6\u540D
  exposes: {
    './Button': './src/components/Button', // \u66B4\u9732\u6A21\u5757\u8DEF\u5F84
  },
  shared: ['react', 'react-dom'], // \u58F0\u660E\u5171\u4EAB\u4F9D\u8D56
});
\`\`\`
`}}]);
