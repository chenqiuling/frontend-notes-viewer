"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[3898],{76843:function(e,n,t){t.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

\u4F18\u70B9\uFF1A\u5C40\u90E8\u4F5C\u7528\u57DF\u9694\u79BB\uFF0C\u81EA\u52A8\u751F\u6210\u552F\u4E00\u7C7B\u540D\uFF0C\u907F\u514D\u6837\u5F0F\u8986\u76D6\u95EE\u9898\u3002

## CSS Modules
\u7F16\u8BD1\u65F6\u5C06\u7C7B\u540D\u8F6C\u6362\u4E3A\u54C8\u5E0C\u5B57\u7B26\u4E32
\`\`\`css
/* IndexPage.module.css */
.container {
  padding: 12px 24px;

  :global(.ant-button) {
    background: #3498db;
  }
  /* \u6216\u8005 */
  :global {
    .ant-button {}
    .ant-input {}
  }
}
\`\`\`

\`\`\`jsx
// React\u4E2D\u4F7F\u7528
import styles from "./IndexPage.module.css";

function IndexPage() {
  return (
    <div className={styles.container}>
      <button className="ant-button">\u70B9\u51FB</button>
      <input className="ant-input" />
    </div>
  );
}

/*
\u8F93\u51FAHTML\uFF1A
<div class="IndexPage_container__dHfj9">
  <button class="ant-button">\u70B9\u51FB</button>
  <input class="ant-input" />
</div>
*/
\`\`\`
\u7EC4\u5408\u7C7B\u540D
\`\`\`jsx
import classNames from "classnames";
import styles from "./Button.module.css";

function ButtonGroup({ isDisabled }) {
  return (
    <div className={styles.container}>
      <button className={\`\${styles.btn} \${styles.primary}\`}>\u6682\u5B58</button>
      <button
        className={classNames(styles.btn, {
          [styles.disabled]: isDisabled,
        })}
      >
        \u4FDD\u5B58
      </button>
    </div>
  );
}
\`\`\`

## CSS-in-JS
\u5982 Styled-components

\`\`\`jsx
import styled from 'styled-components';

const PrimaryButton = styled.button\`
  background: \${props => props.theme.primary};
  padding: 12px 24px;
  border-radius: \${({ round }) => round ? '50px' : '4px'};
  
  &:hover {
    opacity: 0.9;
  }
\`;

// \u6837\u5F0F\u7EE7\u627F
const DangerButton = styled(PrimaryButton)\`
  background: #e74c3c;
\`;

function App() {
  return (
    <ThemeProvider theme={{ primary: '#3498db' }}>
      <PrimaryButton round>\u63D0\u4EA4</PrimaryButton>
      <DangerButton>\u5220\u9664</DangerButton>
    </ThemeProvider>
  );
}
\`\`\`

## \u539F\u5B50\u5316
\u5982 Tailwind CSS

\`\`\`html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  \u6309\u94AE
</button>
\`\`\`

## BEM + \u547D\u540D\u7A7A\u95F4
\`\`\`css
/* Block Element Modifier */
.search-form { /* \u5757 */ }
.search-form__input { /* \u5143\u7D20 */ }
.search-form__button--disabled { /* \u4FEE\u9970\u7B26 */ }
\`\`\`

## Shadow DOM
\u5982 Qiankun

## \u5DE5\u7A0B\u5316\u96C6\u6210
- Webpack\uFF08CSS Modules\uFF09
\`\`\`js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\\.module\\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          'sass-loader',
        ]
      }
    ]
  }
};
\`\`\`

- Vite\u539F\u751F\u652F\u6301
\`\`\`js
// vite.config.js
export default {
  css: {
    modules: {
      localsConvention: 'camelCase' // \u7C7B\u540D\u81EA\u52A8\u8F6C\u9A7C\u5CF0
    }
  }
};
\`\`\`
`}}]);
