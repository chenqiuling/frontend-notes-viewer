"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[9421],{86679:function(e,n,t){t.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## umi + qiankun \u5FAE\u524D\u7AEF\u6A21\u5F0F

### \u73AF\u5883

- "umi": "^3.5.32"
- "@umijs/plugin-qiankun": "^2.39.2",

\u5907\u6CE8\uFF1A"umi": "^3.3.4" \u6DFB\u52A0 @umijs/plugin-qiankun \u65F6\u62A5\u9519\u201Capi.addMiddlewares is not a function\u201D

### \u4E3B\u5E94\u7528

\uFF081\uFF09\u521B\u5EFA\u4E3B\u5E94\u7528\uFF0C\u65B0\u5EFA\u6587\u4EF6\u5939 mainApp

\`\`\`
cd mainApp
yarn create @umijs/umi-app
yarn
yarn add @umijs/plugin-qiankun -D
\`\`\`

\uFF082\uFF09.umirc.ts \u4E2D

\`\`\`ts
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
    },
    // \u6DFB\u52A0\u5B50\u5E94\u7528\u8DEF\u7531
    { name: 'app1', path: '/app1', microApp: 'app1' },
  ],
  qiankun: {
    master: {
      // \u6CE8\u518C\u5B50\u5E94\u7528\u4FE1\u606F
      apps: [
        {
          name: 'app1', // \u552F\u4E00 id
          entry: '//localhost:8000', // \u5B50\u5E94\u7528\u5165\u53E3
        },
      ],
      jsSandbox: true,
    },
  },
  fastRefresh: {},
});
\`\`\`

### \u5B50\u5E94\u7528

\uFF081\uFF09\u521B\u5EFA\u5B50\u5E94\u7528\uFF0C\u65B0\u5EFA\u6587\u4EF6\u5939 microApp1

\`\`\`
cd microApp1
yarn create @umijs/umi-app
yarn
yarn add @umijs/plugin-qiankun -D
\`\`\`

\uFF082\uFF09package.json \u4E2D\u6DFB\u52A0 name \u5C5E\u6027

\`\`\`json
{
  "name": "app1"
}
\`\`\`

\uFF083\uFF09.umirc.ts \u4E2D

\`\`\`ts
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  // \u6CE8\u518Cqiankun\u63D2\u4EF6
  qiankun: {
    slave: {},
  },
});
\`\`\`

\uFF084\uFF09src \u4E0B\u521B\u5EFA app.ts\uFF08\u53EF\u9009\uFF09

\`\`\`ts
export const qiankun = {
  //\xA0\u5E94\u7528\u52A0\u8F7D\u4E4B\u524D
  async bootstrap(props: any) {
    console.log('app1 bootstrap', props);
  },
  //\xA0\u5E94\u7528\xA0render\xA0\u4E4B\u524D\u89E6\u53D1
  async mount(props: any) {
    console.log('app1 mount', props);
  },
  //\xA0\u5E94\u7528\u5378\u8F7D\u4E4B\u540E\u89E6\u53D1
  async unmount(props: any) {
    console.log('app1 unmount', props);
  },
};
\`\`\`

\uFF085\uFF09\u9ED8\u8BA4\u7AEF\u53E3\u53F7\u4E3A 8000\uFF0C\u5982\u9700\u4FEE\u6539\u7AEF\u53E3\u53F7\uFF0C\u5219\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA .env \u6587\u4EF6

\`\`\`
PORT=3000
\`\`\`

### \u9A8C\u8BC1

\u6267\u884C \`yarn start\` \u4F9D\u6B21\u542F\u52A8\u5B50\u5E94\u7528\u548C\u4E3B\u5E94\u7528\uFF0C\u5047\u8BBE\u4E3B\u5E94\u7528\u7AEF\u53E3\u53F7\u4E3A 8001\uFF0C\u5B50\u5E94\u7528\u7AEF\u53E3\u53F7\u4E3A 8000\uFF1B

\u8BBF\u95EE http://localhost:8000 \u6E32\u67D3\u5B50\u5E94\u7528\u5185\u5BB9\uFF1B

\u8BBF\u95EE http://localhost:8001 \u6E32\u67D3\u4E3B\u5E94\u7528\u5185\u5BB9\uFF1B

\u8BBF\u95EE http://localhost:8001/app1 \u6E32\u67D3\u5B50\u5E94\u7528\u5185\u5BB9\uFF1B

\u5219\u4E3A\u9A8C\u8BC1\u6210\u529F\u3002

### \u6570\u636E\u901A\u4FE1

- onGlobalStateChange \u7B2C\u4E8C\u4E2A\u53C2\u6570\u8BBE\u7F6E\u4E3A true\uFF0C\u4F1A\u89E6\u53D1\u7ACB\u5373\u6267\u884C

\u4E3B\u5E94\u7528\u4E2D\u521B\u5EFA store/index.ts

\`\`\`ts
import { initGlobalState, MicroAppStateActions } from 'qiankun';

// \u521D\u59CB\u5316 state
const actions: MicroAppStateActions = initGlobalState({
  count: 0,
});

// actions.onGlobalStateChange((state, prev) => {
//   // \u6DFB\u52A0\u76D1\u542C state: \u53D8\u66F4\u540E\u7684\u72B6\u6001; prev \u53D8\u66F4\u524D\u7684\u72B6\u6001
//   console.log(state, prev);
// });

// actions.offGlobalStateChange(); // \u79FB\u9664\u76D1\u542C
export default actions;
\`\`\`

\u5B50\u5E94\u7528\u901A\u8FC7 props \u83B7\u53D6\uFF0C\u5982\u5728 app.ts \u4E2D\uFF0C

\`\`\`ts
export const qiankun = {
  // ...
  //\xA0\u5E94\u7528\xA0render\xA0\u4E4B\u524D\u89E6\u53D1
  async mount(props: any) {
    console.log('app1 mount', props);
    props.onGlobalStateChange((state: Record<string, any>, prevState: Record<string, any>) => {
      console.log('\u5B50\u5E94\u7528\u5168\u5C40\u6570\u636E\u6539\u53D8\u540E\uFF1A', state, '\u6539\u53D8\u524D\uFF1A', prevState);
    }, true);
  },
  // ...
};
\`\`\`

\u5728 umi \u4E2D\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u5168\u5C40 model \u83B7\u53D6

\`\`\`ts
import { useModel } from 'umi';

export default function IndexPage() {
  const masterProps = useModel('@@qiankunStateFromMaster');
  masterProps.onGlobalStateChange((state: Record<string, any>, prevState: Record<string, any>) => {
    console.log('\u5B50\u5E94\u7528\u5168\u5C40\u6570\u636E\u6539\u53D8\u540E\uFF1A', state, '\u6539\u53D8\u524D\uFF1A', prevState);
  }, true);

  return <div>\u5B50\u5E94\u7528</div>;
}
\`\`\`

\u6CE8\u610F\uFF1A

\u5B50\u5E94\u7528\u4E2D\u4E0D\u8981\u91CD\u590D\u76D1\u542C\u5168\u5C40\u6570\u636E\uFF0C\u5426\u5219\u540E\u76D1\u542C\u7684\u4F1A\u8986\u76D6\u5148\u76D1\u542C\u7684

> [qiankun] Set window.event while sandbox destroyed or inactive in demo1!

\u5B98\u65B9\u8BA1\u5212\u5728 3.0 \u7248\u672C\u4E2D\u79FB\u9664 globalState\uFF0C\u4F46\u76EE\u524D\u8FD8\u6CA1\u6709 3.0 \u7248\u672C\u7684\u65F6\u95F4\u8BA1\u5212\u516C\u5E03\u3002

> [qiankun] globalState tools will be removed in 3.0, pls don't use it!
`}}]);
