"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[2472],{94593:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

[Vue \u4E2D\u6587\u6587\u6863](https://cn.vuejs.org)
[\u89C6\u9891\u6559\u7A0B](https://learning.dcloud.io)

## \u521B\u5EFA\u9879\u76EE

[Vue cli](https://cli.vuejs.org/guide/creating-a-project.html#vue-create)

\`\`\`
npm install -g @vue/cli \u6216 yarn global add @vue/cli
vue create project-name
\`\`\`

## \u6A21\u677F\u6E32\u67D3

\`{{}}\` \u4E24\u4E2A\u53CC\u5927\u62EC\u53F7\u4E2D\u53EF\u4EE5\u653E\u53D8\u91CF\uFF0C\u8868\u8FBE\u5F0F\uFF0C\u8C03\u7528 js \u539F\u751F\u65B9\u6CD5\u3002

\u4F8B\u5982\uFF0C\`{{ a }}\`\u3001\`{{ a + 1 }}\`\u3001\`{{ a.toFixed(2) }}\`

## \u5E38\u7528\u6307\u4EE4

\`\`\`js
new Vue({
  el: '#app',
  data: {
    a: 'text',
    b: <h1>text</h1>,
    url: 'https://cn.vuejs.org',
    isActive: true,
  },
  methods: {
    click1: function() {},
  },
});
\`\`\`

\`\`\`
v-once \u53EA\u6267\u884C\u4E00\u6B21\uFF0C\u5373\u4F7F\u6570\u636E\u66F4\u65B0\u4E5F\u4E0D\u83B7\u53D6\u65B0\u503C\uFF0C\u4F8B<span v-once>{{ a }}</span>
v-html \u8F93\u51FA\u5E76\u89E3\u6790 html \u6807\u7B7E\uFF0C\u4F8B<div v-html="b">
v-bind:\u5C5E\u6027\u540D="\u5C5E\u6027\u503C"\uFF0C\u4F8B<a v-bind:href="url" v-bind:class="{ active: isActive, red: isActive }"></a>
\`\`\`

\u6837\u5F0F\u6E32\u67D3\uFF1A

\`\`\`
v-bind:class="{ active: isActive, red: isActive }"
v-bind:class="[isActive ? 'active' : '', isActive ? 'red' : '']"
:style="{color: red, fontSize: '10px'}"
\`\`\`

\u6761\u4EF6\u6E32\u67D3\uFF1A

\`\`\`
v-if \u6839\u636E\u6761\u4EF6\u53BB\u5224\u65AD\u662F\u5426\u6E32\u67D3\uFF0C\u4F8B<div v-if="isActive"></div>
v-else-if
v-else

v-show \u4F1A\u6E32\u67D3\u5230 dom \u4E2D\uFF0C\u4F46\u662F\u4F1A\u6839\u636E\u6761\u4EF6\u5224\u65AD\u662F\u5426\u8BBE\u7F6E display: none;\u6837\u5F0F\uFF0C\u9002\u5408\u9891\u7E41\u5207\u6362\u663E\u793A\u9690\u85CF\u65F6\u4F7F\u7528\u3002
\`\`\`

\u5217\u8868\u6E32\u67D3\uFF1A

\`\`\`
v-for \u904D\u5386\u6570\u7EC4\u6216\u8005\u5BF9\u8C61\u6570\u636E\uFF0C\u4F8B<div v-for="item, index in list" :key="index">
\`\`\`

\u4E8B\u4EF6\u7ED1\u5B9A\uFF1A

\`\`\`
v-on:click \u7ED1\u5B9Aclick\u4E8B\u4EF6\uFF0C\u4F8B<div v-on:click="click1"></div> <div v-on:click="click('abc', $event)></div>
@click \u7ED1\u5B9Aclick\u4E8B\u4EF6\uFF0C\u4F8B<div @click="click1"></div>

\u4E8B\u4EF6\u4FEE\u9970\u7B26\uFF1A

<!-- \u963B\u6B62\u5355\u51FB\u4E8B\u4EF6\u7EE7\u7EED\u4F20\u64AD -->
<a v-on:click.stop="doThis"></a>

<!-- \u63D0\u4EA4\u4E8B\u4EF6\u4E0D\u518D\u91CD\u8F7D\u9875\u9762 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- \u4FEE\u9970\u7B26\u53EF\u4EE5\u4E32\u8054 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- \u53EA\u6709\u4FEE\u9970\u7B26 -->
<form v-on:submit.prevent></form>

<!-- \u6DFB\u52A0\u4E8B\u4EF6\u76D1\u542C\u5668\u65F6\u4F7F\u7528\u4E8B\u4EF6\u6355\u83B7\u6A21\u5F0F -->
<!-- \u5373\u5185\u90E8\u5143\u7D20\u89E6\u53D1\u7684\u4E8B\u4EF6\u5148\u5728\u6B64\u5904\u7406\uFF0C\u7136\u540E\u624D\u4EA4\u7531\u5185\u90E8\u5143\u7D20\u8FDB\u884C\u5904\u7406 -->
<div v-on:click.capture="doThis">...</div>

<!-- \u53EA\u5F53\u5728 event.target \u662F\u5F53\u524D\u5143\u7D20\u81EA\u8EAB\u65F6\u89E6\u53D1\u5904\u7406\u51FD\u6570 -->
<!-- \u5373\u4E8B\u4EF6\u4E0D\u662F\u4ECE\u5185\u90E8\u5143\u7D20\u89E6\u53D1\u7684 -->
<div v-on:click.self="doThat">...</div>
\`\`\`

## \u53CC\u5411\u7ED1\u5B9A

v-model

\`\`\`vue
<template>
  <input v-model="a" />
  <div>\u8F93\u5165\u5185\u5BB9\uFF1A{{ a }}</div>
</template>
<script>
export default {
  data: {
    a: '',
  },
};
<\/script>
\`\`\`

## \u7EC4\u4EF6\u7684\u6CE8\u518C

### \u5168\u5C40\u6CE8\u518C

\u53EF\u4EE5\u5728\u7EC4\u4EF6\u4E2D\u5D4C\u5165\u4E00\u4E2A\u63D2\u69FD\uFF0C\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002

\`\`\`js
Vue.component('child-comp', {
  props: ['name'],
  data: {
    count: 1,
  },
  template: \`<div @click="clickCom"><h1>text</h1><slot></slot></div>\`,
  methods: {
    clickCom: function() {
      console.log(this.$emit('click1', this.count));
    },
  },
});

var vm = new Vue({
  el: '#app',
  methods: {
    click1: function(e) {
      console.log('\u63A5\u6536\u5230\u7684\u5B50\u7EC4\u4EF6\u7684count\u503C', e);
    },
  },
});

<child-comp :name="\u6570\u91CF" @click="click1"></child-comp>
\`\`\`

### \u5C40\u90E8\u6CE8\u518C

\`\`\`js
var vm = new Vue({
  el: '#app',
  methods: {
    click1: function(e) {
      console.log('\u63A5\u6536\u5230\u7684\u5B50\u7EC4\u4EF6\u7684count\u503C', e);
    },
  },
  components: {}, // \u5C40\u90E8\u6CE8\u518C
});
\`\`\`

## Vue \u7684\u5199\u6CD5\u4E00\uFF08.vue\uFF09

\`\`\`vue
<template>
  <!--
    \u5224\u65AD v-if="condition1" v-else-if="condition2" v-else
    \u904D\u5386 v-for="(item, index) in list" :key="index"
    \u6570\u636E\u53CC\u5411\u7ED1\u5B9A v-model="value"
    \u5E38\u91CF\u5C5E\u6027 attrName="title" \u4F8B\u5982\uFF0Csrc="https://cn.Vuejs.org/images/logo.png"
    \u53D8\u91CF\u5C5E\u6027 :attrName="title" \u4F8B\u5982\uFF0C:src="require('./a.png')"
    \u65B9\u6CD5\u8C03\u7528 v-on="funcA" \u4E5F\u53EF\u4EE5\u5199\u6210 @click="funcA" @load @input \u7B49\u7B49
    \u5176\u4ED6\uFF1AVue\u4E2D\u7EC4\u4EF6\u4F7F\u7528\u4E60\u60EF\u7528\u5C0F\u5199+\u6A2A\u6760\uFF0C\u5982\u5BFC\u5165\u65F6\u662FChildComp\uFF0Ctemplate\u4E2D\u4F7F\u7528\u4E3A<child-comp></child-comp>\uFF0C\u5728ts\u4E2D\u9047\u5230\u8FC7\u4F7F\u7528\u65F6\u7528\u5927\u5199\u4F1A\u6821\u9A8C\u7C7B\u578B\u9519\u8BEF
    \u66F4\u591A\u5185\u5BB9\u67E5\u770B\u5B98\u65B9\u6587\u6863
  -->
</template>

// lang \u8FD8\u53EF\u4EE5\u662F
sass\u7B49\uFF0Cscoped\u4F1A\u9650\u5236\u6837\u5F0F\u53EA\u5728\u5F53\u524D\u7EC4\u4EF6\u5185\u751F\u6548\uFF0C\u901A\u8FC7\u8C03\u8BD5\u5DE5\u5177\u67E5\u770B\u5143\u7D20\uFF0C\u53EF\u4EE5\u770B\u5230\u5143\u7D20\u4E2D\u88AB\u6DFB\u52A0\u4E86\u5C5E\u6027data-v-62be66ba\uFF0C\u5E76\u4E14\u6837\u5F0F.warp\u4F1A\u88AB\u7F16\u8BD1\u6210.wrap[data-v-62be66ba]
<style lang="less" scoped>
// \u9700\u8981\u8986\u76D6\u5F15\u7528\u7684\u5916\u90E8\u7EC4\u4EF6\u6837\u5F0F
/deep/ .\u7EC4\u4EF6\u6837\u5F0F\u540D {
}
</style>

<script>
export default {
  name: 'component-name',
  components: {
    // \u5BFC\u5165\u7684\u7EC4\u4EF6
  },
  props: {
    // \u68C0\u6D4B\u7C7B\u578B
    dataA: Number, // String\u3001Number\u3001Boolean\u3001Array\u3001Object\u3001Date\u3001Function\u3001Symbol
    // \u68C0\u6D4B\u7C7B\u578B + \u5176\u4ED6\u9A8C\u8BC1
    dataB: {
      type: Number,
      default: 0,
      required: true,
      validator: function (value) {
        return value >= 0
      }
    }
  }
  // \u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u5B9A\u4E49data()\u65B9\u6CD5\uFF0Creturn\u5C5E\u6027
  // data: {
  //   dataC: 1,
  // },
  // data: function(){
  //   return {
  //     dataC: 1,
  //   }
  // },
  data() {
    // \u8FD9\u91CC\u53EF\u4EE5\u5BF9\u6570\u636E\u505A\u5176\u4ED6\u58F0\u660E\u64CD\u4F5C
    return {
      dataC: 1, // \u9875\u9762\u5C5E\u6027
      dataD: {
        a: '',
        b: ''
      },
      dataE: '',
    }
  }
  computed: {
    dataF: dataA * 2, // \u8BA1\u7B97\u7684\u9875\u9762\u5C5E\u6027
  },
  watch: {
    dataC: function (newVal, oldVal) {},
    dataD: {
      handler: function (newVal, oldVal) {}, // dataD\u6539\u53D8\u65F6\u6267\u884C
      deep: true // \u591A\u5C42\u7EA7\u5D4C\u5957\u65F6\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5982\u5BF9\u8C61\u7ED3\u6784
    },
    dataE: {
      handler: 'functionName',
      immediate: true // \u76D1\u542C\u5F00\u59CB\u5373\u6267\u884C
    }
  },
  methods: {
    funcA () {},
    funcB () {}
  },
  // \u751F\u547D\u5468\u671F
  beforeCreate() {},
  created() {},
  beforeMounted() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {}, // \u88AB keep-alive \u7F13\u5B58\u7684\u7EC4\u4EF6\u6FC0\u6D3B\u65F6\u8C03\u7528
  deactivated() {}, // \u88AB keep-alive \u7F13\u5B58\u7684\u7EC4\u4EF6\u505C\u7528\u65F6\u8C03\u7528
  beforeDestroy() {},
  destroyed() {},
  // \u5F53\u6355\u83B7\u4E00\u4E2A\u6765\u81EA\u5B50\u5B59\u7EC4\u4EF6\u7684\u9519\u8BEF\u65F6\u88AB\u8C03\u7528\u3002\u6B64\u94A9\u5B50\u4F1A\u6536\u5230\u4E09\u4E2A\u53C2\u6570\uFF1A\u9519\u8BEF\u5BF9\u8C61\u3001\u53D1\u751F\u9519\u8BEF\u7684\u7EC4\u4EF6\u5B9E\u4F8B\u4EE5\u53CA\u4E00\u4E2A\u5305\u542B\u9519\u8BEF\u6765\u6E90\u4FE1\u606F\u7684\u5B57\u7B26\u4E32\u3002\u6B64\u94A9\u5B50\u53EF\u4EE5\u8FD4\u56DE false \u4EE5\u963B\u6B62\u8BE5\u9519\u8BEF\u7EE7\u7EED\u5411\u4E0A\u4F20\u64AD\u3002
  errorCaptured(err: Error, vm: Component, info: string) => ?boolean
}
<\/script>
\`\`\`

### \u7EC4\u4EF6\u95F4\u4F20\u503C/\u65B9\u6CD5

**\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u503C**

parent.vue

\`\`\`vue
<template>
  <child data="list" />
</template>
<script>
import Child from './child';

export default {
  name: 'parent-component',
  components: {
    Child,
  },
  data() {
    return {
      list: [],
    };
  },
};
<\/script>
\`\`\`

child.vue

\`\`\`vue
<script>
export default {
  name: 'child-component',
  props: {
    data: Array,
  },
};
<\/script>
\`\`\`

**\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u65B9\u6CD5**

\u5B50\u7EC4\u4EF6\u4E2D\u4F7F\u7528 \`vm.$emit(eventName, [\u2026args])\` , \u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EF\u9009\uFF0C\u4E3A\u65B9\u6CD5\u7684\u53C2\u6570

\u5982\u65B9\u6CD5\u4E3A\u53EF\u4F20\u53EF\u4E0D\u4F20\uFF0C\u53EF\u4EE5\u5728\u5B50\u7EC4\u4EF6\u4E2D\u4F7F\u7528 \`vm.$listeners\` \u76D1\u542C\u7236\u7EC4\u4EF6\u662F\u5426\u6709\u4F20\u65B9\u6CD5

parent.vue

\`\`\`vue
<template>
  <child @itemClick="funcA" />
</template>
<script>
import Child from './child';

export default {
  name: 'parent-component',
  components: {
    Child,
  },
  methods: {
    funcA() {
      // TODO
    },
  },
};
<\/script>
\`\`\`

child.vue

\`\`\`vue
<template>
  <div @click="itemClick"></div>
</template>
<script>
export default {
  name: 'child-component',
  methods: {
    itemClick() {
      if (this.$listeners.itemClick) {
        this.$emit('itemClick', 'any params');
      } else {
        // do something if no func from parent
      }
    },
  },
};
<\/script>
\`\`\`

**\u7236\u7EC4\u4EF6\u8C03\u7528\u5B50\u7EC4\u4EF6\u7684\u5C5E\u6027\u3001\u65B9\u6CD5**

\u901A\u8FC7 \`vm.$refs\` \u8C03\u7528\u5B50\u7EC4\u4EF6\u7684\u5C5E\u6027\u548C\u65B9\u6CD5

parent.vue

\`\`\`vue
<template>
  <child ref="childRef" />
</template>
<script>
import Child from './child';

export default {
  name: 'parent-component',
  components: {
    Child,
  },
  mounted() {
    // $refs\u4E0D\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u53EA\u5728\u7EC4\u4EF6\u6E32\u67D3\u5B8C\u6210\u540E\u624D\u586B\u5145\uFF0C\u6240\u4EE5\u5728created()\u4E2D\u8FD8\u662Fundefined
    this.$refs.childRef.funcA();
    console.log(this.$refs.childRef.data);
  },
};
<\/script>
\`\`\`

child.vue

\`\`\`vue
<script>
export default {
  name: 'child-component',
  data() {
    return {
      data: [],
    };
  },
  methods: {
    funcA() {
      // TODO
    },
  },
};
<\/script>
\`\`\`

### computed \u4E0E watch \u7684\u533A\u522B

- computed \u662F\u8BA1\u7B97\u4E00\u4E2A\u65B0\u7684\u5C5E\u6027\uFF1Bwatch \u662F\u76D1\u542C\u4E00\u4E2A\u5DF2\u5B58\u5728\u7684\u5C5E\u6027\uFF1B
- computed \u53EA\u6709\u4F9D\u8D56\u66F4\u65B0\uFF0C\u624D\u4F1A\u8BA1\u7B97\u65B0\u7684\u503C\uFF1Bwatch \u6570\u636E\u53D8\u5316\u4FBF\u4F1A\u8C03\u7528\u6267\u884C\u51FD\u6570\uFF1B
- computed \u9002\u7528\u4E8E\u4E00\u4E2A\u6570\u636E\u88AB\u591A\u4E2A\u6570\u636E\u5F71\u54CD\uFF1Bwatch \u9002\u7528\u4E8E\u4E00\u4E2A\u6570\u636E\u5F71\u54CD\u591A\u4E2A\u6570\u636E\u3002

## Vue \u7684\u5199\u6CD5\u4E8C\uFF08.jsx\uFF09

\u4F7F\u7528\u4E86[\u88C5\u9970\u5668](https://github.com/kaorun343/vue-property-decorator)+render \u51FD\u6570\uFF0C\u4EE5\u7C7B\u5F62\u5F0F\u521B\u5EFA\u7EC4\u4EF6

\`\`\`tsx
// pageA.tsx
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({
  components: {}, // \u540C\u65B9\u6CD5\u4E00\u4E2Dcomponents: {}
})
export default class PageA extends Vue {
  @Prop(Object)
  dataA!: {
    a: string;
  };
  @Prop(String) // \u540C\u65B9\u6CD5\u4E00\u4E2D\u7684props: {}
  posterType!: string;

  list: []; // \u540C\u65B9\u6CD5\u4E00\u4E2Ddata()\u91CC\u5B9A\u4E49\u7684\u5C5E\u6027

  // \u751F\u547D\u5468\u671F\u51FD\u6570
  created() {
    console.log(this.list);
  }

  // \u540C\u65B9\u6CD5\u4E00\u4E2D\u7684watch: {}
  @Watch('dataA', { deep: true })
  onDataAChange(newVal, oldVal) {}

  // \u66FF\u4EE3\u4E86\u65B9\u6CD5\u4E00\u4E2D\u7684template\u6807\u7B7E
  render(h: any) {
    return (
      <div>
        {true ? <div>con1</div> : <div>con2</div>}
        {this.list.map(item => (
          <div></div>
        ))}
        {this.list.length}
        {/*
        \u5224\u65AD \u76F4\u63A5\u5728\u5927\u62EC\u53F7\u4E2D\u4F7F\u7528\u4E09\u5143\u8FD0\u7B97\u7B26"()?:"\u6216\u8005&&
        \u904D\u5386 \u76F4\u63A5\u5728\u5927\u62EC\u53F7\u4E2D\u4F7F\u7528map\u65B9\u6CD5
        \u53D8\u91CF \u76F4\u63A5\u5728\u5927\u62EC\u53F7\u4E2D\u4F7F\u7528
        \u65B9\u6CD5\u8C03\u7528 on-click="funcA" \u6216 onClick \u4E0D\u80FD\u4F7F\u7528@click
      */}
      </div>
    );
  }
}
\`\`\`

### \u7EC4\u4EF6\u95F4\u4F20\u503C/\u65B9\u6CD5

**\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u503C**

parent.tsx

\`\`\`tsx
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import Child from './child';

@Component({
  components: { Child },
})
export default class Parent extends Vue {
  render(h: any) {
    return <child dataA="" />;
  }
}
\`\`\`

child.tsx

\`\`\`tsx
import { Component, Vue, Prop } from 'vue-property-decorator';

export default class Child extends Vue {
  @Prop(String) // \u540C\u65B9\u6CD5\u4E00\u4E2D\u7684props: {}
  dataA!: string;
}
\`\`\`

**\u7236\u7EC4\u4EF6\u83B7\u53D6\u5B50\u7EC4\u4EF6\u7684\u5C5E\u6027**
parent.tsx

\`\`\`tsx
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import Child from './child';

@Component({
  components: { Child },
})
export default class Parent extends Vue {
  data = '';

  funcA(data) {
    this.data = data;
  }

  render(h: any) {
    return <child on-getChildEmit="funcA" />;
  }
}
\`\`\`

child.tsx

\`\`\`tsx
import { Component, Vue, Emit } from 'vue-property-decorator';

export default class Child extends Vue {
  @Emit('getChildEmit')
  funcB(data) {
    return data;
  }

  render(h: any) {
    return <div on-click="funcB" />;
  }
}
\`\`\`

## \u8DEF\u7531

vue \u7684\u4E00\u5927\u4EAE\u70B9\u9664\u4E86\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\uFF0C\u8FD8\u6709\u5C31\u662F\u8DEF\u7531\u5B88\u536B\u3002

\u6BCF\u4E2A\u5B88\u536B\u63A5\u6536\u4E09\u4E2A\u53C2\u6570\uFF1A

- to: Route\uFF0C\u5373\u5C06\u8981\u8FDB\u5165\u7684\u76EE\u6807\u8DEF\u7531
- from: Route\uFF0C\u5F53\u524D\u5BFC\u822A\u8981\u79BB\u5F00\u7684\u8DEF\u7531
- next: Function\uFF0C\u4E00\u5B9A\u8981\u8C03\u7528\u8BE5\u65B9\u6CD5\u6765 resolve \u8FD9\u4E2A\u94A9\u5B50\u3002

route.ts

\`\`\`ts
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/:id?', // \u8DEF\u7531\u53C2\u6570\uFF0C\u95EE\u53F7\u8868\u793A\u53EF\u4F20\u53EF\u4E0D\u4F20
      name: 'Home',
      component: () => import('../views/home.vue'),
      meta: { title: '\u81EA\u5B9A\u4E49\u9875\u9762title' },
    },
    // 404
    {
      path: '*',
      component: () => import('../views/not-found.vue'),
    },
  ],
});

// \u524D\u7F6E\u5B88\u536B
router.beforeEach((to, from, next) => {
  /* \u8DEF\u7531\u53D1\u751F\u53D8\u5316\u4FEE\u6539\u9875\u9762title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

// \u540E\u7F6E\u5B88\u536B
router.afterEach((to, from) => {
  // ...
});

// \u4E5F\u53EF\u4EE5\u8C03\u7528\u6B64\u65B9\u6CD5\u65B0\u589E\uFF0C\u5982\u7528\u4E8E\u8DEF\u7531\u5BFC\u5165\u60C5\u51B5\u4E0B
router.addRoutes([]);

export default router;
\`\`\`

App.vue

\`\`\`vue
<template>
  <router-view />
</template>
\`\`\`

main.ts

\`\`\`ts
import App from './App.vue';
import router from './router';

new Vue({ router, render: h => h(App) }).$mount('#app');
\`\`\`

\u8DEF\u7531\u8DF3\u8F6C

\`\`\`js
this.$router.push('/');
this.$router.push(\`/\${id}\`);
this.$router.push({
  path: '/',
  query: {
    id: 1,
  }, // url?id='1'
});
this.$router.replace('/');
this.$router.back();
this.$router.go(-2);
\`\`\`

\u83B7\u53D6\u8DEF\u7531\u53C2\u6570

\`\`\`js
// path/:id
this.$route.params.id;

// url?id=xx
this.$route.query.id;
\`\`\`

## \u6570\u636E\u7BA1\u7406

[Vuex](https://vuex.vuejs.org/api/)

store.ts

\`\`\`js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    setLoading1({ commit }, newState) {
      commit('setLoading', newState);
    },
  },
  modules: {},
});
\`\`\`

main.ts

\`\`\`ts
import App from './App.vue';
import store from './store';

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
\`\`\`

\u9875\u9762\u8C03\u7528\u548C\u83B7\u53D6\u503C\uFF1A

\`\`\`tsx
this.$store.state.loading;
this.$store.commit('setLoading', true);
this.$store.dispatch('setLoading1', true);
\`\`\`

state: \u72B6\u6001\uFF0C\u5B9A\u4E49\u6211\u4EEC\u5B58\u50A8\u7BA1\u7406\u7684\u6570\u636E\u7ED3\u6784

\`\`\`ts
type mutations = { [type: string]: (state, payload) => void };

type actions = {
  [type: string]: (
    { state, rootState, commit, dispatch, getters, rootGetters },
    payload,
  ) => void;
};
\`\`\`

\u5176\u4E2D action \u7C7B\u4F3C\u4E8E mutation\uFF0C\u533A\u522B\u5728\u4E8E\uFF1A

mutation \u901A\u8FC7 commit \u8C03\u7528

action \u53EF\u4EE5\u8C03\u7528\u5F02\u6B65 API \u548C\u5206\u53D1\u591A\u91CD mutation

action \u901A\u8FC7 dispatch \u5206\u53D1\uFF0C\u5185\u90E8\u53EF\u4EE5\u6267\u884C\u591A\u4E2A commit

\u8C03\u8BD5\u5DE5\u5177\uFF1A
\u8C37\u6B4C\u6269\u5C55\u7A0B\u5E8F [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-CN)
`}}]);
