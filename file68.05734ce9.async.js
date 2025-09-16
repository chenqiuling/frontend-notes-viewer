"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[4476],{32229:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u521B\u5EFA\u9879\u76EE

\u5B98\u65B9\u6784\u5EFA\u5DE5\u5177\uFF1A

- vue1\u3001vue2 \u7528 vue-cli
- vue3 \u7528 vite \u7684 create-vue

[vue-cli \u4E0E vite \u7684\u6BD4\u8F83](https://juejin.cn/post/7018754950498877471)

\`\`\`
npm init vue@latest
\`\`\`

> \u2714 Project name: \u2026 <your-project-name>  
> \u2714 Add TypeScript? \u2026 No / Yes  
> \u2714 Add JSX Support? \u2026 No / Yes  
> \u2714 Add Vue Router for Single Page Application development? \u2026 No / Yes  
> \u2714 Add Pinia for state management? \u2026 No / Yes  
> \u2714 Add Vitest for Unit testing? \u2026 No / Yes  
> \u2714 Add Cypress for both Unit and End-to-End testing? \u2026 No / Yes  
> \u2714 Add ESLint for code quality? \u2026 No / Yes  
> \u2714 Add Prettier for code formatting? \u2026 No / Yes
>
> Scaffolding project in ./<your-project-name>...  
> Done.

\u5176\u4E2D Pinia \u662F Vue \u7684\u5B58\u50A8\u5E93\uFF0C\u4E0E Vuex \u7C7B\u4F3C\u7684\u529F\u80FD\u3002

[Pinia \u4E0E Vuex \u7684\u6BD4\u8F83](https://pinia.web3doc.top/introduction.html#%E4%B8%8E-vuex-%E7%9A%84%E6%AF%94%E8%BE%83)

## \u7EC4\u4EF6\u5E93\u6309\u9700\u5F15\u5165

\u901A\u5E38\u9875\u9762\u4E2D import \u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u7ED3\u5408 babel-plugin-import \u5C06\u7EC4\u4EF6\u5E93\u7684\u6837\u5F0F\u4E5F\u6309\u9700\u5F15\u5165\u3002

\u6BD4\u5982 .babelrc

\`\`\`js
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "lib",
      "style": "css"
    }]
  ]
}
\`\`\`

\u6216\u8005 babel.config.js

\`\`\`js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'lib', // lib\u3001es
        style: 'css', // less|scss -> true\u3001css -> 'css'
      },
      'vant',
    ],
  ],
};
\`\`\`

\u5982\u679C\u662F\u901A\u8FC7 vite \u521B\u5EFA\u7684 vue3 \u9879\u76EE\uFF0C\u5219\u9700\u8981\u66F4\u6539 vite.config.ts \u7684\u914D\u7F6E

\`\`\`bash
yarn add vite-plugin-imp -D

# or
yarn add vite-plugin-style-import -D
yarn add consola -D
\`\`\`

vite.config.ts

\`\`\`ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vitePluginImp from 'vite-plugin-imp';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vitePluginImp({
      // \u7EC4\u4EF6\u6309\u9700\u5BFC\u5165
      libList: [
        {
          libName: 'vant',
          style(name: string) {
            return \`vant/es/\${name}/style/index\`;
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
\`\`\`

\u6216\u8005

\`\`\`ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    createStyleImportPlugin({
      resolves: [VantResolve()],
      libs: [
        {
          libraryName: 'vant',
          resolveStyle: name => {
            return \`vant/es/\${name}/style/index\`;
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
\`\`\`

### \u67E5\u770B\u6253\u5305\u914D\u7F6E

vue1\u3001vue2 \u901A\u8FC7 \`vue inspect --mode development > output.dev.js\` \u5C06 vue.config.js \u8F6C\u6362\u6210\u5BF9\u5E94\u73AF\u5883\u7684 webpack \u914D\u7F6E\u8F93\u51FA\u3002

vue3 \u597D\u50CF\u6CA1\u6709\u3002

### \u4F7F\u7528\u9884\u5904\u7406\u5668

Vite \u4E5F\u540C\u65F6\u63D0\u4F9B\u4E86\u5BF9 .scss, .sass, .less, .styl \u548C .stylus \u6587\u4EF6\u7684\u5185\u7F6E\u652F\u6301\u3002\u6CA1\u6709\u5FC5\u8981\u4E3A\u5B83\u4EEC\u5B89\u88C5\u7279\u5B9A\u7684 Vite \u63D2\u4EF6\uFF0C\u4F46\u5FC5\u987B\u5B89\u88C5\u76F8\u5E94\u7684\u9884\u5904\u7406\u5668\u4F9D\u8D56\u3002

\`\`\`bash
$ npm install less less-loader -D
# or
$ yarn add less less-loader -D
\`\`\`

### \u7F16\u8BD1\u6784\u5EFA

\u672C\u5730\u8FD0\u884C\u57FA\u4E8E \u539F\u751F ES \u6A21\u5757\uFF0C\u65E0\u9700\u7F16\u8BD1\uFF0C\u56E0\u6B64\u672C\u5730\u66F4\u65B0\u901F\u5EA6\u975E\u5E38\u5FEB\u3002

\u751F\u4EA7\u53D1\u5E03\u4F7F\u7528 rollup \u6253\u5305\uFF0C\u57FA\u672C\u8986\u76D6 webpack \u7684\u529F\u80FD\u3002

webpack \u4E0E rollup \u7684\u533A\u522B\uFF1A

- \u56E0\u4E3A webpack \u6BD4 rollup \u65E9\u51FA 2 \u5E74\uFF0C\u8BDE\u751F\u5728 esm \u6807\u51C6\u51FA\u6765\u524D\uFF0Ccommonjs \u51FA\u6765\u540E\uFF0C\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 cjs\uFF0C\u6240\u4EE5 webpack \u6253\u5305\u51FA\u6765\u7684\u6587\u4EF6\u4F1A\u6709\u5F88\u591A\u6CE8\u5165\u4EE3\u7801\uFF0C\u53BB\u517C\u5BB9\u5B9E\u73B0 require\u3001module.exports \u7B49\u3002

### \u9879\u76EE\u7ED3\u6784

model.ts \u5B9A\u4E49\u6570\u636E\u7ED3\u6784\uFF0C\u76F8\u5F53\u4E8E vue2 \u91CC\u7684 data() {}\u65B9\u6CD5\uFF1B
presenter.ts \u5B9A\u4E49\u65B9\u6CD5\u3001\u751F\u547D\u5468\u671F\u51FD\u6570\u3001\u6570\u636E\u76D1\u542C\u7B49\uFF1B
service.ts \u5B9A\u4E49\u63A5\u53E3\u8BF7\u6C42\u5904\u7406\uFF1B
index.tsx \u9875\u9762 UI\uFF0C\u901A\u8FC7\u5F15\u5165 presenter.ts \u53D6\u6570\u548C\u5F15\u7528\u65B9\u6CD5\uFF1B

model.ts

\`\`\`ts
export const useModel = () => {
  const visible = ref(false);
  const obj = reactive({
    data: {},
  });

  return {
    visible,
    obj,
  };
};
\`\`\`

presenter.ts

\`\`\`ts
import { watch, onMounted } from 'vue';

export const usePresenter = () => {
  const model = useModel();
  const service = new Service(model);

  onMounted(() => {
    service.onGetData();
  });

  watch(
    () => model.visible.value,
    () => {},
  );

  const handleFunc = () => {};

  return {
    model,
    service,
    handleFunc,
  };
};
\`\`\`

service.ts

\`\`\`ts
export default class Service {
  private model: Model;
  constructor(model: Model) {
    this.model = model;
  }

  async onGetData() {
    await xxx();
  }
}
\`\`\`

index.tsx

\`\`\`ts
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const presenter = usePresenter();
    const { model } = presenter;
    return {
      model,
      presenter,
    };
  },
  render() {
    return <div />;
  },
});
\`\`\`
`}}]);
