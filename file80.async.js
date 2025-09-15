"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[5817],{69607:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

[\u4E2D\u6587\u6587\u6863](https://cn.vitejs.dev/guide/)

Vite \u9700\u8981 Node.js \u7248\u672C 14.18+\uFF0C16+\u3002

\u901A\u8FC7\`create-vite\`\u521B\u5EFA vite \u9879\u76EE

\`\`\`
npm create vite@latest
yarn create vite
pnpm create vite
\`\`\`

Vite \u57FA\u4E8E\u6D4F\u89C8\u5668\u539F\u751F ESM\uFF0C\u5F00\u53D1\u73AF\u5883\u4E0D\u6253\u5305\uFF0C\u6309\u9700\u7F16\u8BD1\uFF1B\u751F\u4EA7\u73AF\u5883\u7528 Rollup \u6253\u5305\u3002

## ts \u652F\u6301

[typescript \u914D\u7F6E](https://cn.vitejs.dev/guide/features.html#typescript)

\u5B98\u65B9\u5EFA\u8BAE tsconfig.json \u4E2D\u4EE5\u4E0B\u4E24\u9879\u914D\u7F6E\u4E3A true\uFF1A

\`\`\`json
{
  "isolatedModules": true,
  "useDefineForClassFields": true
}
\`\`\`

\u5BA2\u6237\u7AEF\u7C7B\u578B

\u521B\u5EFA vite-env.d.ts \u6587\u4EF6

\`\`\`ts
/// <reference types="vite/client" />
\`\`\`

\u4E09\u659C\u7EBF\u6307\u4EE4\u662F\u5305\u542B\u5355\u4E2A XML \u6807\u7B7E\u7684\u5355\u884C\u6CE8\u91CA\u3002\u6CE8\u91CA\u7684\u5185\u5BB9\u4F1A\u505A\u4E3A\u7F16\u8BD1\u5668\u6307\u4EE4\u4F7F\u7528\u3002\u4E09\u659C\u7EBF\u6307\u4EE4\u4EC5\u53EF\u653E\u5728\u5305\u542B\u5B83\u7684\u6587\u4EF6\u7684\u6700\u9876\u7AEF\u3002\u4E00\u4E2A\u4E09\u659C\u7EBF\u6307\u4EE4\u7684\u524D\u9762\u53EA\u80FD\u51FA\u73B0\u5355\u884C\u6216\u591A\u884C\u6CE8\u91CA\uFF0C\u8FD9\u5305\u62EC\u5176\u5B83\u7684\u4E09\u659C\u7EBF\u6307\u4EE4\u3002\u5982\u679C\u5B83\u4EEC\u51FA\u73B0\u5728\u4E00\u4E2A\u8BED\u53E5\u6216\u58F0\u660E\u4E4B\u540E\uFF0C\u90A3\u4E48\u5B83\u4EEC\u4F1A\u88AB\u5F53\u505A\u666E\u901A\u7684\u5355\u884C\u6CE8\u91CA\uFF0C\u5E76\u4E14\u4E0D\u5177\u6709\u7279\u6B8A\u7684\u6DB5\u4E49\u3002

\u5982\u679C\u6307\u5B9A\u4E86--noResolve \u7F16\u8BD1\u9009\u9879\uFF0C\u4E09\u659C\u7EBF\u5F15\u7528\u4F1A\u88AB\u5FFD\u7565\u3002

\u4F8B\u5982\uFF0C\u628A \`/// <reference types="node" />\` \u5F15\u5165\u5230\u58F0\u660E\u6587\u4EF6\uFF0C\u8868\u660E\u8FD9\u4E2A\u6587\u4EF6\u4F7F\u7528\u4E86 @types/node/index.d.ts \u91CC\u9762\u58F0\u660E\u7684\u540D\u5B57\uFF1B\u5E76\u4E14\u8FD9\u4E2A\u5305\u9700\u8981\u5728\u7F16\u8BD1\u9636\u6BB5\u4E0E\u58F0\u660E\u6587\u4EF6\u4E00\u8D77\u88AB\u5305\u542B\u8FDB\u6765\u3002

\u4E5F\u53EF\u4EE5\u5728 tsconfig.json \u4E2D

\`\`\`json
{
  "compilerOptions": {
    "types": ["vite/client"]
  }
}
\`\`\`

## global \u5BFC\u5165

[glob-import](https://cn.vitejs.dev/guide/features.html#glob-import)

\`\`\`js
const modules = import.meta.glob('./dir/*.js');
\`\`\`

\u8F6C\u8BD1\u4E3A\uFF1A

\`\`\`js
// vite \u751F\u6210\u7684\u4EE3\u7801
const modules = {
  './dir/foo.js': () => import('./dir/foo.js'),
  './dir/bar.js': () => import('./dir/bar.js'),
};
\`\`\`

\u5BFC\u5165\u7684\u6587\u4EF6\u9ED8\u8BA4\u662F\u61D2\u52A0\u8F7D\u7684\uFF0C\u52A8\u6001\u5BFC\u5165\uFF0C\u5728\u6784\u5EFA\u65F6\u4F1A\u5206\u79BB\u4E3A\u72EC\u7ACB\u7684 chunk\u3002

\u5982\u679C\u60F3\u76F4\u63A5\u5F15\u5165\u6240\u6709\u6A21\u5757\uFF1A

\`\`\`js
const modules = import.meta.glob('./dir/*.js', { eager: true });
\`\`\`

\u8F6C\u8BD1\u4E3A\uFF1A

\`\`\`js
// vite \u751F\u6210\u7684\u4EE3\u7801
import * as __glob__0_0 from './dir/foo.js';
import * as __glob__0_1 from './dir/bar.js';
const modules = {
  './dir/foo.js': __glob__0_0,
  './dir/bar.js': __glob__0_1,
};
\`\`\`

\u5339\u914D\u591A\u4E2A

\`\`\`js
const modules = import.meta.glob(['./dir/*.js', './another/*.js']);
\`\`\`

\u53CD\u5411\u5339\u914D

\`\`\`js
const modules = import.meta.glob(['./dir/*.js', '!**/bar.js']);
\`\`\`

## vite \u9ED8\u8BA4\u5F00\u542F\u7684\u914D\u7F6E

- CSS \u4EE3\u7801\u5206\u5272
- \u9884\u52A0\u8F7D\u6307\u4EE4\u751F\u6210\uFF0C\u5373\u81EA\u52A8\u5F15\u5165\`<link rel="modulepreload">\`
- \u5F02\u6B65 Chunk \u52A0\u8F7D\u4F18\u5316\uFF0C\u4F1A\u8DDF\u8E2A\u6240\u6709\u5BFC\u5165\uFF0C\u6D88\u9664\u4E0D\u5FC5\u8981\u7684\u7F51\u7EDC\u5F80\u8FD4

## \u9759\u6001\u8D44\u6E90\u5904\u7406

\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CTypeScript \u4E0D\u4F1A\u5C06\u9759\u6001\u8D44\u6E90\u5BFC\u5165\u89C6\u4E3A\u6709\u6548\u7684\u6A21\u5757\u3002\u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u9700\u8981\u6DFB\u52A0 vite/client\u3002

\u6839\u76EE\u5F55\u4E0B\u6307\u5B9A public \u76EE\u5F55\uFF0C\u5176\u5B58\u653E\u7684\u8D44\u6E90\u6587\u4EF6\uFF0C\u4F1A\u88AB\u5B8C\u6574\u590D\u5236\u6253\u5305\u5230\u76EE\u6807\u6839\u76EE\u5F55\u3002\u9879\u76EE\u4E2D\u5F15\u5165\u76F4\u63A5\u4F7F\u7528\`/xxx.xx\`\u3002

> public \u4E2D\u7684\u8D44\u6E90\u4E0D\u5E94\u8BE5\u88AB JavaScript \u6587\u4EF6\u5F15\u7528\u3002

\u56FE\u7247\u5BFC\u5165\u793A\u4F8B\uFF1A

\`\`\`js
import imgUrl from './img.png';

// \u6216\u8005\uFF0C\u4E0D\u652F\u6301ssr\u6A21\u5F0F
const imgUrl = new URL('./img.png', import.meta.url).href;
\`\`\`

## \u6253\u5305\u62C6\u5206

\`\`\`js
// vite 2.8\u53CA\u66F4\u65E9\u7248\u672C build.rollupOptions.output.manualChunks

// vite 2.9+ splitVendorChunkPlugin + build.rollupOptions.output.manualChunks
import { defineConfig, splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  plugins: [splitVendorChunkPlugin()],
});
\`\`\`

## \u591A\u9875\u9762\u5E94\u7528

\`\`\`js
// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html'),
      },
    },
  },
});
\`\`\`

## \u73AF\u5883\u53D8\u91CF

import.meta.env.MODE: {string} \u5E94\u7528\u8FD0\u884C\u7684\u6A21\u5F0F\u3002

import.meta.env.BASE_URL: {string} \u90E8\u7F72\u5E94\u7528\u65F6\u7684\u57FA\u672C URL\u3002\u4ED6\u7531 base \u914D\u7F6E\u9879\u51B3\u5B9A\u3002

import.meta.env.PROD: {boolean} \u5E94\u7528\u662F\u5426\u8FD0\u884C\u5728\u751F\u4EA7\u73AF\u5883\u3002

import.meta.env.DEV: {boolean} \u5E94\u7528\u662F\u5426\u8FD0\u884C\u5728\u5F00\u53D1\u73AF\u5883 (\u6C38\u8FDC\u4E0E import.meta.env.PROD \u76F8\u53CD)\u3002

import.meta.env.SSR: {boolean} \u5E94\u7528\u662F\u5426\u8FD0\u884C\u5728 server \u4E0A\u3002

.env \u6216\u8005.env.[mode] \u6587\u4EF6\u4E2D\u53EA\u6709\`VITE_\`\u5F00\u5934(\u9ED8\u8BA4)\u7684\u53D8\u91CF\u4F1A\u88AB\u7F16\u8BD1\u4E3A\`import.meta.env.xx\`\uFF0C\u624D\u80FD\u5728\u5BA2\u6237\u7AEF\u4F7F\u7528\u3002

\u914D\u7F6E\u9879 envPrefix \u53EF\u4EE5\u66F4\u6539\u524D\u7F00\uFF1A\u5982\`VITE_\`\u6539\u4E3A\`MY_VITE_\`\uFF0C\u5219\u5728\u5BA2\u6237\u7AEF\u4F7F\u7528\u65F6\u4E3A import.meta.env.MY_VITE_xxx\u3002

.env.[mode]\u6587\u4EF6\u53EF\u4EE5\u914D\u5408\`vite build --mode [mode]\`\u547D\u4EE4\u4F7F\u7528\u3002

\u5728 vite3 \u53CA\u4E4B\u524D\uFF0C\u82E5\u5C06 mode \u6539\u4E3A production \u4E4B\u5916\u7684\u6A21\u5F0F\u4F1A\u6784\u5EFA\u5F00\u53D1\u7248\u672C\u3002

\u5728 vite4 \u4E2D\uFF0C\u65E0\u8BBA--mode \u4F20\u4EC0\u4E48\u503C\uFF0C\`vite build\`\u603B\u662F\u6784\u5EFA\u751F\u4EA7\u7248\u672C\uFF0C\u5982\u679C\u60F3\u6784\u5EFA\u5F00\u53D1\u7248\u672C\uFF0C\u9700\u8981\u5728.env.[mode]\u4E2D\u5B9A\u4E49\`NODE_ENV=development\`\u3002

\u7ED9.env \u4E2D\u7684\u53D8\u91CF\u663E\u793A ts \u63D0\u793A\uFF1A

.env

\`\`\`
VITE_TEST=123
\`\`\`

\u521B\u5EFA vite-env.d.ts\uFF1A

\`\`\`ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEST: number;
  // \u66F4\u591A\u73AF\u5883\u53D8\u91CF...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
\`\`\`

**\u6CE8\u610F\uFF1A**Vite4 \u73B0\u5728\u4F7F\u7528 dotenv 16 \u548C dotenv-expand 9\uFF08\u4E4B\u524D\u662F dotenv 14 \u548C dotenv-expand 5\uFF09\u5982\u679C\u4F60\u6709\u4E00\u4E2A\u5305\u542B # \u6216\u8005 \` \u7684\u503C\uFF0C\u4F60\u5C06\u9700\u8981\u5C06\u5B83\u4EEC\u4EE5\u53CC\u5F15\u53F7\u5305\u88F9\u8D77\u6765\u3002

## vite.config.ts

\`\`\`ts
// \u5199\u6CD51\uFF1A
export default {};

// \u5199\u6CD52\uFF1A\u4E0E1\u7684\u4E0D\u540C\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u5F15\u5165ts\u7C7B\u578B\u6765\u663E\u793A\u8F85\u52A9\u63D0\u793A
import { defineConfig } from 'vite';
export default defineConfig({});

// \u5199\u6CD53\uFF1A\u53EF\u4EE5\u533A\u5206\u547D\u4EE4\u8BBE\u7F6E\u914D\u7F6E
import { defineConfig } from 'vite';
export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    return {};
  } else {
    return {};
  }
});

// \u652F\u6301\u5F02\u6B65\u5199\u6CD5\uFF1A
import { defineConfig } from 'vite';
export default defineConfig(async ({ command, mode }) => {
  const data = await func();
  return {};
});
\`\`\`

## package.json

\`\`\`json
{
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  }
}
\`\`\`

## \u914D\u7F6E\u9879\u7B80\u8981\u8BF4\u660E

\`\`\`ts
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import path from 'path';

export default defineConfig({
  root: './xx', // \u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u7EDD\u5BF9|\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3Aprocess.cwd()
  base: '/test/', // \u57FA\u7840\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3A/
  mode: 'development', // \u53EF\u9009 development | production | \u81EA\u5B9A\u4E49\uFF08\u9700\u4E0E.env.[mode]\uFF09\u5339\u914D
  define: {
    __APP_VERSION__: '0.0.1', // \u5B9A\u4E49\u5168\u5C40\u5E38\u91CF\u66FF\u6362\uFF0Cts \u9700\u5728vite-env.d.ts\u4E2D\u52A0 \`declare const __APP_VERSION__: string\`
  },
  plugins: [], // \u5F15\u5165\u7684\u5916\u90E8\u63D2\u4EF6
  publicDir: './xxx', // \u9759\u6001\u8D44\u6E90\u6587\u4EF6\uFF0C\u8BE5\u76EE\u5F55\u4F1A\u88AB\u539F\u5C01\u4E0D\u52A8\u590D\u5236\u5230\u76EE\u6807\u6839\u76EE\u5F55\u4E0B\uFF0Cstring | false\uFF0C\u7EDD\u5BF9|\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3Apublic
  cacheDir: './xxx', // \u7F13\u5B58\u6587\u4EF6\u5939\uFF0C\u7EDD\u5BF9|\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3A"node_modules/.vite"
  resolve: {
    alias: {
      // \u8BBE\u7F6E\u522B\u540D
      '@': path.resolve(__dirname, './src'),
    },
    dedupe: ['aa', 'bb'], // \u4FDD\u8BC1\u5B58\u5728\u76F8\u540C\u4F9D\u8D56\u65F6\uFF0C\u4F7F\u7528\u540C\u4E00\u7248\u672C\uFF1F
    conditions: ['aa', 'bb'], // \u89E3\u51B3\u7A0B\u5E8F\u5305\u4E2D \u60C5\u666F\u5BFC\u51FA\uFF08\u5305\u4E2Dpackage.json\u6709exports: {'x': {xx: ''}}\uFF09\u65F6\u7684\u5176\u4ED6\u5141\u8BB8\u6761\u4EF6\uFF1F
    mainFields: ['aa', 'bb'], // \u9ED8\u8BA4 ['module', 'jsnext:main', 'jsnext']\uFF0C\u4F18\u5148\u7EA7\u4F4E\u4E8E\u60C5\u666F\u5BFC\u51FA
    browserField: true, // \u662F\u5426\u542F\u7528\u5BF9browser\u5B57\u6BB5\u7684\u89E3\u6790\uFF0C\u9ED8\u8BA4true\uFF0C\u672A\u6765\u8BA1\u5212\u5E9F\u5F03\uFF0C\u7531 mainFields \u66FF\u6362\u6B64\u914D\u7F6E
    extensions: ['.aa', '.bb'], // \u5BFC\u5165\u65F6\u60F3\u8981\u7701\u7565\u7684\u6269\u5C55\u540D\u5217\u8868\uFF0C\u9ED8\u8BA4['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    preserveSymlinks: false, // \u901A\u8FC7\u539F\u59CB\u6587\u4EF6\u8DEF\u5F84\u786E\u5B9A\u6587\u4EF6\u8EAB\u4EFD\uFF0C\u9ED8\u8BA4false
  },
  css: {
    modules: {
      scopeBehaviour: 'global', // \u53EF\u9009\u503C'global' | 'local'
      globalModulePaths: [], // RegExp[]
      generateScopedName: '', //string | ((name: string, filename: string, css: string) => string)
      hashPrefix: '',
      localsConvention: 'camelCaseOnly', // \u9ED8\u8BA4null\uFF0C\u53EF\u9009 'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly' | null
    },
    postcss: {},
    preprocessorOptions: {
      scss: {
        additionalData: \`$injectedColor: orange;\`,
      },
    }, // \u6307\u5B9A\u4F20\u9012\u7ED9 CSS \u9884\u5904\u7406\u5668\u7684\u9009\u9879\u3002\u6587\u4EF6\u6269\u5C55\u540D\u7528\u4F5C\u9009\u9879\u7684\u952E
    devSourcemap: false, // \u662F\u5426\u5F00\u542Fsourcemap\uFF0C\u9ED8\u8BA4\u4E3Afalse
  },
  json: {
    namedExports: true, // \u662F\u5426\u652F\u6301\u4ECE .json \u6587\u4EF6\u4E2D\u8FDB\u884C\u6309\u540D\u5BFC\u5165\uFF0C\u9ED8\u8BA4\u4E3Atrue
    stringify: false, // \u662F\u5426\u5C06\u5BFC\u5165\u7684json\u8F6C\u4E3A export default JSON.parse("...")\uFF0C\u503C\u4E3Atrue\u65F6\uFF0C\u4F1A\u5173\u95EDnamedExports\u914D\u7F6E\u9879
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  assetsInclude: ['**/*.gltf'], // \u6307\u5B9A\u989D\u5916\u7684 picomatch \u6A21\u5F0F \u4F5C\u4E3A\u9759\u6001\u8D44\u6E90\u5904\u7406
  logLevel: 'info', // \u8C03\u6574\u63A7\u5236\u53F0\u8F93\u51FA\u7684\u7EA7\u522B\uFF0C\u9ED8\u8BA4\u4E3Ainfo\uFF0C'info' | 'warn' | 'error' | 'silent'
  clearScreen: true, // \u662F\u5426\u6E05\u5C4F\u7EC8\u7AEF\u7684\u6253\u5370\u4FE1\u606F\uFF0C\u9ED8\u8BA4\u4E3Atrue
  envDir: './xxx', // .env\u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF0C\u7EDD\u5BF9|\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3Aroot
  envPrefix: 'XXX_', // \u73AF\u5883\u53D8\u91CF\u524D\u7F00\uFF0C\u4EE5\u5176\u4E3A\u524D\u7F00\u7684\u7684\u53D8\u91CF\u4F1A\u88AB\u7F16\u8BD1\u4E3A\`import.meta.env.XX\`\uFF0C\u4F1A\u9ED8\u8BA4\u4E3AVITE_
  appType: 'spa', // \u7C7B\u578B\uFF0C'spa' | 'mpa' | 'custom'\uFF0C\u9ED8\u8BA4\u503C\u4E3Aspa
  server: {
    host: 'localhost', // \u5982\u679C\u5C06\u6B64\u8BBE\u7F6E\u4E3A 0.0.0.0 \u6216\u8005 true \u5C06\u76D1\u542C\u6240\u6709\u5730\u5740\uFF0C\u5305\u62EC\u5C40\u57DF\u7F51\u548C\u516C\u7F51\u5730\u5740\u3002
    port: 3000, // \u7AEF\u53E3\u53F7\uFF0C \u9ED8\u8BA4\u503C\uFF1A 5173
    strictPort: false, // \u7AEF\u53E3\u53F7\u88AB\u5360\u7528\u662F\u5426\u76F4\u63A5\u9000\u51FA
    https: false, // \u542F\u7528 TLS + HTTP/2\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86server.proxy\uFF0C\u4EC5\u542F\u7528TLS\uFF0Cboolean | https.ServerOptions
    open: true, // \u542F\u52A8\u540E\u662F\u5426\u81EA\u52A8\u5728\u6D4F\u89C8\u5668\u91CC\u6253\u5F00\u5E94\u7528\u7A0B\u5E8F\uFF0Cboolean | string\uFF08\u8DEF\u5F84\uFF09\uFF0C\u8BBE\u7F6Eprocess.env.BROWSER\u53EF\u4EE5\u6307\u5B9A\u6D4F\u89C8\u5668
    proxy: {
      '/test': {
        target: 'http://xx.xx.xx.xx:xxxx',
        ws: true,
        changeOrigin: true,
        rewrite: path => path.replace('^/test', ''),
      },
    }, // \u4EE3\u7406
    cors: true, // boolean | CorsOptions\uFF0C
    headers: {}, // \u6307\u5B9A\u670D\u52A1\u5668\u7684\u54CD\u5E94\u5934
    hmr: {}, // boolean | HmrOptions
    watch: {
      ignored: ['!**/node_modules/your-package-name/**'],
    },
    middlewareMode: 'html', // 'ssr' | 'html'\uFF0C\u7981\u7528\uFF08'ssr'\uFF09| \u542F\u7528\uFF08'html'\uFF09Vite \u81EA\u8EAB\u7684 HTML \u670D\u52A1\u903B\u8F91
    base: '/xx', // \u4EE3\u7406 Vite \u4F5C\u4E3A\u5B50\u6587\u4EF6\u5939\u65F6\u4F7F\u7528
    fs: {
      strict: true, // \u9650\u5236\u4E3A\u5DE5\u4F5C\u533A root \u8DEF\u5F84\u4EE5\u5916\u7684\u6587\u4EF6\u7684\u8BBF\u95EE\uFF0C\u81EA Vite 2.7 \u8D77\u9ED8\u8BA4\u542F\u7528
      allow: [
        // \u641C\u7D22\u5DE5\u4F5C\u533A\u7684\u6839\u76EE\u5F55
        searchForWorkspaceRoot(process.cwd()),
        // \u81EA\u5B9A\u4E49\u89C4\u5219
        '/path/to/custom/allow',
      ], // \u9650\u5236\u54EA\u4E9B\u6587\u4EF6\u53EF\u4EE5\u901A\u8FC7 /@fs/ \u8DEF\u5F84\u63D0\u4F9B\u670D\u52A1\u3002\u5F53 server.fs.strict \u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u8BBF\u95EE\u8FD9\u4E2A\u76EE\u5F55\u5217\u8868\u5916\u7684\u6587\u4EF6\u5C06\u4F1A\u8FD4\u56DE 403 \u7ED3\u679C\u3002
      deny: [], // \u7528\u4E8E\u9650\u5236 Vite \u5F00\u53D1\u670D\u52A1\u5668\u63D0\u4F9B\u654F\u611F\u6587\u4EF6\u7684\u9ED1\u540D\u5355\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8Eserver.fs.allow\uFF0C\u9ED8\u8BA4\u4E3A['.env', '.env.*', '*.{pem,crt}']
    },
    origin: 'http://127.0.0.1:8080', // \u8C03\u8BD5\u9636\u6BB5\u751F\u6210\u8D44\u4EA7\u7684 origin
  },
  build: {
    target: 'modules', // \u6D4F\u89C8\u5668\u7684\u517C\u5BB9\u76EE\u6807\uFF0C\u9ED8\u8BA4\u4E3Amodules\uFF08\u652F\u6301es\u3001import.meta\u7684\uFF09\uFF0Cmodules | esnext\uFF0C\u5982\u679C build.minify \u9009\u9879\u4E3A 'terser'\uFF0C'esnext' \u5C06\u4F1A\u5F3A\u5236\u964D\u7EA7\u4E3A 'es2021'
    modulePreload: true, // \u662F\u5426\u81EA\u52A8\u6CE8\u5165\u4E00\u4E2A \u6A21\u5757\u9884\u52A0\u8F7D polyfill\uFF0Cboolean | Options \u9ED8\u8BA4\u4E3Atrue
    outDir: '/xx', // \u6307\u5B9A\u8F93\u51FA\u8DEF\u5F84\uFF0C\u76F8\u5BF9\u4E8E\u9879\u76EE\u6839\u76EE\u5F55
    assetsDir: '/xx', // \u6307\u5B9A\u751F\u6210\u9759\u6001\u8D44\u6E90\u7684\u5B58\u653E\u8DEF\u5F84\uFF08\u76F8\u5BF9\u4E8E build.outDir\uFF09
    assetsInlineLimit: 4096, // \u751F\u6210\u5185\u8054base64\u7F16\u7801\u7684\u9608\u503C\uFF0C\u9ED8\u8BA44096 (4kb)
    cssCodeSplit: true, // \u542F\u7528/\u7981\u7528 CSS \u4EE3\u7801\u62C6\u5206\uFF0C\u9ED8\u8BA4\u4E3Atrue
    cssTarget: ['chrome61', 'xx'], // css\u7684\u6D4F\u89C8\u5668\u517C\u5BB9\u76EE\u6807
    sourcemap: false, // \u662F\u5426\u751F\u6210sourcemap\u6587\u4EF6\uFF0Cboolean | 'inline' | 'hidden'\uFF0C\u9ED8\u8BA4\u4E3Afalse
    rollupOptions: {},
    commonjsOptions: {}, // \u4F20\u9012\u7ED9 @rollup/plugin-commonjs \u63D2\u4EF6\u7684\u9009\u9879
    dynamicImportVarsOptions: {}, // \u4F20\u9012\u7ED9 @rollup/plugin-dynamic-import-vars \u7684\u9009\u9879
    lib: {
      entry: '',
    },
    manifest: false, // \u662F\u5426\u751F\u6210manifest\u6587\u4EF6\uFF0Cboolean | string\uFF08\u6587\u4EF6\u540D\uFF09\uFF0C\u9ED8\u8BA4\u503C\u4E3Afalse
    ssrManifest: false, // \u662F\u5426\u751F\u6210ssr\u7684manifest\u6587\u4EF6\uFF0Cboolean | string\uFF08\u6587\u4EF6\u540D\uFF09\uFF0C\u9ED8\u8BA4\u503C\u4E3Afalse
    ssr: false, // \u751F\u6210\u9762\u5411ssr\u7684\u6784\u5EFA
    minify: 'esbuild', // \u662F\u5426\u4F7F\u7528\u6216\u4F7F\u7528\u54EA\u79CD\u6700\u5C0F\u6DF7\u6DC6\uFF0Cboolean | 'terser' | 'esbuild'\uFF0C\u9ED8\u8BA4\u4E3Aesbuild
    terserOptions: {}, // \u4F20\u9012\u7ED9 Terser \u7684\u66F4\u591A minify \u9009\u9879
    write: true, // \u662F\u5426\u5141\u8BB8\u5C06\u6784\u5EFA\u540E\u7684\u6587\u4EF6\u5199\u5165\u78C1\u76D8\uFF0C\u9ED8\u8BA4\u4E3Atrue
    emptyOutDir: true, // \u6784\u5EFA\u65F6\u662F\u5426\u6E05\u7A7A\u8F93\u51FA\u76EE\u5F55\uFF0C\u82E5 outDir \u5728 root \u76EE\u5F55\u4E0B\uFF0C\u5219\u4E3A true
    copyPublicDir: true, // \u662F\u5426\u5C06 publicDir \u76EE\u5F55\u4E2D\u7684\u6240\u6709\u6587\u4EF6\u590D\u5236\u5230 outDir \u76EE\u5F55\u4E2D\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u5B9E\u9A8C\u6027\u7279\u6027
    reportCompressedSize: true, // \u662F\u5426\u542F\u7528 gzip \u538B\u7F29\u5927\u5C0F\u62A5\u544A\uFF0C\u9ED8\u8BA4\u4E3Atrue\uFF0C\u5927\u9879\u76EE\u7981\u7528\u80FD\u52A0\u5FEB\u6784\u5EFA
    chunkSizeWarningLimit: 500, // \u89C4\u5B9A\u89E6\u53D1\u8B66\u544A\u7684 chunk \u5927\u5C0F\uFF0C\u9ED8\u8BA4500\uFF08kbs\uFF09
    watch: null, // \u662F\u5426\u542F\u7528 rollup \u7684\u76D1\u542C\u5668\uFF0CWatcherOptions | null
  },
  optimizeDeps: {
    entries: '', // string | string[]
    // \u88AB\u76D1\u542C\u7684\u5305\u5FC5\u987B\u88AB\u6392\u9664\u5728\u4F18\u5316\u4E4B\u5916\uFF0C\u4EE5\u4FBF\u5B83\u80FD\u51FA\u73B0\u5728\u4F9D\u8D56\u5173\u7CFB\u56FE\u4E2D\u5E76\u89E6\u53D1\u70ED\u66F4\u65B0\u3002
    exclude: ['your-package-name'],
    include: ['xxx'],
    esbuildOptions: {},
    force: true, // \u8BBE\u7F6E\u4E3A true \u53EF\u4EE5\u5F3A\u5236\u4F9D\u8D56\u9884\u6784\u5EFA\uFF0C\u800C\u5FFD\u7565\u4E4B\u524D\u5DF2\u7ECF\u7F13\u5B58\u8FC7\u7684\u3001\u5DF2\u7ECF\u4F18\u5316\u8FC7\u7684\u4F9D\u8D56
  },
  preview: {},
  ssr: {},
  worker: {}, // \u6709\u5173\u4E8E Web Worker \u7684\u9009\u9879
});
\`\`\`

## \u8F6C\u6362\u5DE5\u5177

\u603B\u7ED3\uFF1A\u5BF9\u4E8E vue3 \u7684\u9879\u76EE\uFF0C\u56E0\u4E3A @vitejs/plugin-vue \u8981\u6C42 vue \u5728 3.2.25 \u7248\u672C\u4EE5\u4E0A\uFF0C\u6240\u4EE5\u5982\u679C\u662F 3.2.25 \u4E4B\u524D\u7684 vue3 \u9879\u76EE\uFF0C\u9700\u8981\u5148\u5347\u7EA7\uFF0C\u5426\u5219\u9879\u76EE\u542F\u52A8\u4F1A\u62A5\u9519\uFF1A

\`\`\`
Error: Failed to resolve vue/compiler-sfc.
@vitejs/plugin-vue requires vue (>=3.2.25) to be present in the dependency tree.
\`\`\`

vue2 \u7684\u9879\u76EE\u5BF9\u5E94\u4F7F\u7528\u7684\u662F vite-plugin-vue2\u3002

**\u5DE5\u5177\u4E00\uFF1A[webpack-to-vite](https://github.com/originjs/webpack-to-vite)**

\u8BE5\u5DE5\u5177\u4F1A\u6839\u636E\u9879\u76EE\u5DF2\u6709\u914D\u7F6E\u5C3D\u53EF\u80FD\u5339\u914D\u7684\u751F\u6210\u65B0\u7684 vite \u914D\u7F6E\uFF08\u65E0\u6CD5\u8F6C\u6362\u7684\u914D\u7F6E\u5C06\u88AB\u5FFD\u7565\uFF09\uFF0C\u5E76\u4E14\u5C06\u539F\u9879\u76EE\u5176\u4ED6\u6539\u52A8\u4E00\u5E76\u8C03\u6574\u540E\u5B8C\u6574\u590D\u523B\u5230\u65B0\u6587\u4EF6\u5939\u4E0B\u3002

\`\`\`
npx @originjs/webpack-to-vite <project path>
\`\`\`

\u5B9E\u8DF5\uFF1A\u76EE\u524D\u8BE5\u5E93\u662F v1.2.0 \u7248\u672C\uFF0C\u5728\u6BD4\u8F83\u7B80\u5355\u7684\u4E1A\u52A1\u9879\u76EE\uFF08vue cli \u521B\u5EFA\u7684 vue3.2.25 \u7248\u672C\uFF09\u4E2D\uFF0C\u5C1D\u8BD5\u4F7F\u7528\u8BE5\u5E93\u8FDB\u884C\u8F6C\u6362\uFF0C\u6709\u51E0\u4E2A\u95EE\u9898\uFF1A

1. \u539F\u9879\u76EE\u9700\u8981\u5148\u5B89\u88C5\u9879\u76EE\u4F9D\u8D56\uFF0C\u5426\u5219\u5F88\u591A\u914D\u7F6E\u90FD\u4F1A\u8F6C\u6362\u5931\u8D25\uFF1A

\`\`\`
Failed to parse vue config from default file path: XXXX
Module not found. Make sure the vue project dependencies have been installed before conversion.
\`\`\`

2. \u7531\u4E8E\u8BE5\u5E93\u4F7F\u7528\u4E86 vite-plugin-html \u63D2\u4EF6\uFF0C\u542F\u52A8\u9ED8\u8BA4\u8FD0\u884C public/index.html\uFF0C\u800C\u751F\u6210\u7684\u65B0\u9879\u76EE\u4E2D\u53EA\u6709\u62F7\u8D1D\u5230\u6839\u76EE\u5F55\u7684 index.html \u91CC\u79FB\u9664\u4E86 webpack \u76F8\u5173\u7684 ejs \u8BED\u6CD5\u7684\u4EE3\u7801\uFF0C\u800C public/index.html \u4EE3\u7801\u672A\u6539\u52A8\uFF0C\u5982\u679C\u751F\u4EA7\u6253\u5305\u4ECD\u4F7F\u7528 vue cli\uFF0C\u6B64\u5904\u5EFA\u8BAE\u6CE8\u91CA\u8BE5\u63D2\u4EF6\uFF0C\u624B\u52A8\u4FEE\u6539\u6839\u76EE\u5F55\u4E0B\u62F7\u8D1D\u7684 index.html\uFF08\u79FB\u9664 ejs \u76F8\u5173\u4EE3\u7801\uFF09\uFF1B

**\u5DE5\u5177\u4E8C\uFF1A[wp2vite](https://github.com/tnfe/wp2vite)**

\`\`\`
npx wp2vite --config=./vue.config.js
\`\`\`

\u611F\u53D7\uFF1A\u8BFB\u53D6\u5E76\u8F6C\u6362\u7684\u914D\u7F6E\u8F83\u5C11\uFF0C\u4F1A\u751F\u6210\u90E8\u5206\u914D\u7F6E\uFF08\u4F46\u8FD9\u4E9B\u914D\u7F6E\u4E0D\u4E00\u5B9A\u9700\u8981\u4F7F\u7528\uFF09

**\u901A\u7528\u914D\u7F6E**\uFF08Vue 3\uFF0C\u4EC5\u5217\u4E3E\u8F83\u901A\u7528\u7684\uFF09

\`\`\`js
import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import envCompatible from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // \u89E3\u51B3css url('~@/assets/xx.xx')\u8DEF\u5F84
      {
        find: /^~@/,
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  plugins: [
    // \u63D0\u4F9B Vue 3 \u5355\u6587\u4EF6\u7EC4\u4EF6\u652F\u6301
    vue(),
    // \u63D0\u4F9B Vue 3 JSX \u652F\u6301
    vueJsx(),
    // \u8BFB\u53D6.env.[mode]\u6587\u4EF6
    envCompatible(),
  ],
});
\`\`\`

**\u591A\u5165\u53E3\u9879\u76EE**

\u4F7F\u7528 vite-plugin-html \u63D2\u4EF6\u7ED3\u5408 \`build.rollupOptions.input\` \u914D\u7F6E\uFF1B

\u591A\u5165\u53E3\u914D\u7F6E\u793A\u4F8B\uFF1A

\`\`\`js
import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';
import { createHtmlPlugin } from 'vite-plugin-html';

const pages = [];
const input = {};

fs.readdirSync('src/pages').forEach(file => {
  pages.push({
    entry: \`../src/pages/\${file}/main.ts\`,
    filename: \`\${file}.html\`,
    template: \`public/\${file}.html\`,
    injectOptions: {
      data: {
        title: file,
      },
    },
  });
  Object.assign(input, { [file]: path.resolve(__dirname, \`public/\${file}.html\`) });
});

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      pages,
    }),
  ],
  build: {
    rollupOptions: {
      input,
    },
  },
});
\`\`\`

## \u95EE\u9898

vite \u8FD0\u884C\u7684\u9879\u76EE\uFF0C\u7EC8\u6B62\u670D\u52A1\u540E\uFF0C\u6D4F\u89C8\u5668\u7AEF\u4ECD\u4F1A\u4E00\u76F4\u5237\u65B0\u8BF7\u6C42\uFF0C\u5BFC\u81F4\u4E00\u76F4\u62A5\u9519\u3002

## \u8054\u90A6\u6A21\u5757

\u9700\u8981\u63D2\u4EF6\u652F\u6301@vitejs/plugin-federation\u3001@originjs/vite-plugin-federation\u3002

\`\`\`js
// \u5BBF\u4E3B\u5E94\u7528\uFF08Host\uFF09\u914D\u7F6E vite.config.js
federation({
  name: 'host_app',
  remotes: {
    remote_app: 'http://localhost:3001/assets/remoteEntry.js',
  },
  shared: ['vue'],
});

// \u4F7F\u7528\u8FDC\u7A0B\u6A21\u5757
<template>
  <RemoteButton />
</template>
<script setup>
import RemoteButton from "remote_app/Button";
<\/script>

// \u8FDC\u7A0B\u5E94\u7528\uFF08Remote\uFF09\u914D\u7F6E vite.config.js
import federation from '@originjs/vite-plugin-federation';
export default {
  plugins: [
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: { './Button': './src/Button.vue' },
      shared: ['vue'],
    }),
  ],
  build: { target: 'esnext' }, // \u5FC5\u9700
};
\`\`\`

\u5F00\u53D1\u6A21\u5F0F\uFF1ARemote \u9700\u5148\u6784\u5EFA\uFF08vite build --watch\uFF09\uFF0CHost \u624D\u80FD\u52A8\u6001\u52A0\u8F7D\uFF0C\u65E0\u6CD5\u53CC\u5F00\u53D1\u670D\u52A1\u5E76\u884C 610\u3002

\u751F\u4EA7\u90E8\u7F72\uFF1ARemote \u7684 remoteEntry.js \u9700\u6258\u7BA1\u81F3 CDN\uFF0CHost \u901A\u8FC7 URL \u5F15\u7528 49\u3002
`}}]);
