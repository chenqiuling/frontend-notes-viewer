"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[5865],{3698:function(e,n,r){r.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## Sass/SCSS
- Sass \u91C7\u7528\u7684\u662F\u7F29\u8FDB\u5F0F\u8BED\u6CD5\uFF0C\u800C SCSS \u91C7\u7528\u7684\u662F\u7C7B\u4F3C\u4E8E CSS \u7684\u5927\u62EC\u53F7\u548C\u5206\u53F7\u8BED\u6CD5\u3002
- Sass \u672C\u8EAB\u4E0D\u76F4\u63A5\u652F\u6301 :global\uFF0C\u4F46\u5728\u6A21\u5757\u5316\u73AF\u5883\u4E2D\uFF08\u5982\u914D\u5408 Webpack \u7684 css-loader\uFF09\u53EF\u4EE5\u4F7F\u7528\u3002

\`\`\`scss
// \u53D8\u91CF
$primary: #3498db;
button {
  background: $primary;
}

// \u6DF7\u5408\uFF08@mixin\u5B9A\u4E49\u65B9\u6CD5\uFF0C@include\u5F15\u7528\u65B9\u6CD5\uFF09
@mixin center($axis: both) {
  display: flex;
  @if $axis == both {
    justify-content: center;
    align-items: center;
  } @else if $axis == horizontal {
    justify-content: center;
  }
}
.modal {
  @include center; // @include(horizontal);
}

// \u51FD\u6570\u4E0E\u5FAA\u73AF\uFF08\u5F15\u7528\u65F6\u53D8\u91CF\u7528#{}\u62EC\u8D77\u6765\uFF09
@function contrast-color($color) {
  @if (lightness($color) > 50%) {
    @return #000;
  } @else {
    @return #fff;
  }
}

@for $i from 1 through 12 {
  .col-#{$i} {
    width: percentage($i/12);
  }
}

$headerHeight: 50px;
$footerHeight: 50px;
main {
  height: calc(100vh - #{$headerHeight} - #{$footerHeight});
}
\`\`\`

## Less
- Less \u539F\u751F\u652F\u6301 :global \u4F2A\u7C7B\uFF1B
- \u5728 Webpack \u4E2D\u914D\u5408 less-loader \u4F7F\u7528\u6548\u679C\u6700\u4F73\u3002

\`\`\`less
// \u53D8\u91CF
@primary: #3498db;
button {
  background: @primary;
}

// \u6DF7\u5408(Mixins)
.bordered(@color: #ccc, @width: 1px) {
  border: @width solid @color;
  border-radius: 4px;
}

.card {
  .bordered(#3498db, 2px);
}

// \u989C\u8272\u64CD\u4F5C
@primary-color: #4285f4; // \u84DD\u8272

.button {
  background: @primary-color;
  &:hover {
    background: lighten(@primary-color, 10%); // \u60AC\u505C\u65F6\u53D8\u4EAE
  }
}

:global(.ant-button) {
  background: #3498db;
}
:global {
  .ant-button {}
  .ant-input {}
}
\`\`\`

## Stylus
- \u53EF\u4EE5\u7701\u7565 css \u4E2D\u7684\u4EE5\u4E0B\u7B26\u53F7\u201C{}\u201D\u3001\u201C:\u201D\u3001\u201C;\u201D\uFF0C\u901A\u8FC7\u7F29\u8FDB\u4EE3\u66FF\u201C{}\u201D\uFF1B
- Stylus \u539F\u751F\u652F\u6301 :global \u8BED\u6CD5\uFF1B
- \u5728 Webpack \u4E2D\u9700\u8981 stylus-loader\u3002

\`\`\`stylus
// \u53D8\u91CF
primary = #9b59b6

nav
  background primary

// \u6DF7\u5408(Mixins)
gradient(angle=90deg)
  background linear-gradient(angle, #1e5799, #7db9e8)

header
  gradient()
  color white

// JS\u96C6\u6210
js-red = #f00
getColor()
  js-red

.error
  color getColor()

// \u591A\u53C2\u6570
border-radius()
\xA0\xA0-webkit-border-radius\xA0arguments
\xA0\xA0-moz-border-radius\xA0arguments
\xA0 border-radius\xA0arguments

button
\xA0 border-radius\xA05px 10px
\`\`\`
`}}]);
