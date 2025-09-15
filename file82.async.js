"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[3438],{52762:function(s,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

Gulp\u3001Webpack\u3001Vite \u548C Rollup \u56DB\u5927\u524D\u7AEF\u6784\u5EFA\u5DE5\u5177\u5BF9\u6BD4\uFF1A

### \u67B6\u6784\u4E0E\u5DE5\u4F5C\u539F\u7406\u5BF9\u6BD4
| **\u5DE5\u5177** | **\u6784\u5EFA\u6A21\u5F0F**                     | **\u5F00\u53D1\u670D\u52A1\u5668\u539F\u7406**              | **\u751F\u4EA7\u6784\u5EFA\u539F\u7406**       |
|----------|----------------------------------|---------------------------------|------------------------|
| **Gulp** | \u6D41\u5F0F\u4EFB\u52A1\u5904\u7406                     | \u9700\u914D\u5408BrowserSync\u7B49\u5DE5\u5177         | \u624B\u52A8\u914D\u7F6E\u4F18\u5316\u4EFB\u52A1       |
| **Webpack** | \u9012\u5F52\u4F9D\u8D56\u5206\u6790 + \u6253\u5305             | \u5185\u5B58\u7F16\u8BD1 + HMR                  | \u81EA\u8EAB\u6253\u5305 + \u4F18\u5316        |
| **Rollup** | ES\u6A21\u5757\u9759\u6001\u5206\u6790                  | \u9700\u63D2\u4EF6\u652F\u6301                      | \u9AD8\u6548Tree Shaking\u6253\u5305   |
| **Vite** | \u5F00\u53D1/\u751F\u4EA7\u53CC\u5F15\u64CE                  | \u539F\u751FESM + \u6309\u9700\u52A0\u8F7D              | Rollup\u751F\u4EA7\u6253\u5305         |

---

### \u6027\u80FD\u5BF9\u6BD4\u6570\u636E\uFF08\u57FA\u4E8EReact 18\u9879\u76EE\uFF09
| **\u6307\u6807**             | Gulp       | Webpack     | Vite        | Rollup      |
|----------------------|------------|-------------|-------------|-------------|
| **\u51B7\u542F\u52A8\u65F6\u95F4**       | 4.2s       | 12.8s       | < 0.5s      | N/A         |
| **HMR\u66F4\u65B0\u65F6\u95F4**      | 1.1s       | 850ms       | 50-100ms    | \u4E0D\u652F\u6301      |
| **\u751F\u4EA7\u6784\u5EFA\u65F6\u95F4**     | 8.5s       | 15.2s       | 9.8s        | 6.7s        |
| **\u751F\u4EA7\u5305\u4F53\u79EF**       | 142KB      | 138KB       | 136KB       | 129KB       |
| **Tree Shaking\u6548\u679C** | \u4E0D\u652F\u6301     | \u826F\u597D        | \u4F18\u79C0        | \u6700\u4F18        |
| **\u914D\u7F6E\u590D\u6742\u5EA6**       | \u2605\u2605\u2606        | \u2605\u2605\u2605\u2605\u2605       | \u2605\u2605\u2606         | \u2605\u2605\u2605\u2606        |

> \u6D4B\u8BD5\u73AF\u5883\uFF1A100\u7EC4\u4EF6React\u9879\u76EE\uFF0CNode 18\uFF0CSSD\u786C\u76D8

---

### \u751F\u6001\u4E0E\u6269\u5C55\u6027
| **\u5DE5\u5177** | **\u63D2\u4EF6\u751F\u6001**       | **\u4E3B\u8981\u52A0\u8F7D\u5668/\u63D2\u4EF6**                          | **\u6846\u67B6\u652F\u6301**                     |
|----------|-------------------|---------------------------------------------|----------------------------------|
| Gulp     | \u4E30\u5BCC(4k+\u63D2\u4EF6)     | gulp-babel, gulp-sass                       | \u65E0\u5185\u7F6E\u6846\u67B6\u652F\u6301                   |
| Webpack  | \u975E\u5E38\u4E30\u5BCC(20k+)    | babel-loader, css-loader                    | \u5168\u6846\u67B6\u652F\u6301(React/Vue/Angular)    |
| Rollup   | \u826F\u597D(1k+\u63D2\u4EF6)     | @rollup/plugin-node-resolve                 | \u5E93\u5F00\u53D1\u4F18\u5148                      |
| Vite     | \u5FEB\u901F\u589E\u957F          | \u5185\u7F6E\u652F\u6301TS/JSX/CSS\uFF0C\u517C\u5BB9Rollup\u63D2\u4EF6          | Vue/React/Svelte/Lit\u539F\u751F\u4F18\u5316     |

---

### \u5178\u578B\u4F7F\u7528\u573A\u666F
**Gulp**\uFF1A  
\`\`\`js
// \u4F20\u7EDF\u4EFB\u52A1\u81EA\u52A8\u5316
const { src, dest } = require('gulp');
const sass = require('gulp-sass');

function compileSass() {
  return src('src/scss/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'));
}
\`\`\`

**Webpack**\uFF1A  
\`\`\`js
// \u590D\u6742SPA\u914D\u7F6E
module.exports = {
  entry: './src/index.js',
  output: { filename: '[name].[contenthash].js' },
  module: {
    rules: [
      { test: /\\.js$/, use: 'babel-loader' },
      { test: /\\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }
}
\`\`\`

**Vite**\uFF1A  
\`\`\`js
// \u96F6\u914D\u7F6E\u542F\u52A8
// vite.config.js
export default {
  plugins: [vue()],
  build: {
    rollupOptions: { output: { manualChunks: { ... } } }
  }
}
\`\`\`

**Rollup**\uFF1A  
\`\`\`js
// \u5E93\u6253\u5305\u914D\u7F6E
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/library.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [terser()]
};
\`\`\``}}]);
