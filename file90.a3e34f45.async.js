"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[1176],{4562:function(t,n,e){e.r(n),n.default=`1. \u521B\u5EFA\u6587\u4EF6\u5939 my-cli

2. \u6267\u884C\`npm init\`\u521D\u59CB\u5316

package.json

\`\`\`json
{
  "name": "my-cli",
  "version": "1.0.0",
  "description": "\u9879\u76EE\u751F\u6210\u5DE5\u5177",
  "type": "module",
  "main": "index.js",
  "bin": {
    "create-app": "bin/index.js"
  },
  "scripts": {},
  "author": "",
  "license": "ISC",
  "dependencies": {
    "execa": "^9.4.0",
    "inquirer": "^12.0.0"
  }
}
\`\`\`

3. \u5B89\u88C5\u5DE5\u5177[execa](https://github.com/sindresorhus/execa)\u548C[inquirer](https://github.com/SBoudrias/Inquirer.js)\uFF0C
   \u5EFA\u8BAE node \u7248\u672C>=18.20.4

4. \u521B\u5EFA\u95EE\u7B54\u6587\u4EF6

prompt/packageName.js

\`\`\`js
export default () => ({
  type: 'input',
  name: 'packageName',
  message: 'set package name:',
  validate(val) {
    if (!val) {
      return 'Please enter package name';
    }
    return true;
  },
});
\`\`\`

prompt/port.js

\`\`\`js
export default () => ({
  type: 'input',
  name: 'port',
  default: 3000,
  message: 'set port number:',
});
\`\`\`

prompt/installTool.js

\`\`\`js
export default () => ({
  type: 'list',
  name: 'installTool',
  message: 'select installation tool:',
  default: 'npm',
  choices: [{ name: 'npm' }, { name: 'yarn' }, { name: 'pnpm' }],
});
\`\`\`

prompt/index.js

\`\`\`js
import inquirer from 'inquirer';
import packageName from './packageName.js';
import installTool from './installTool.js';
import port from './port.js';

export default () => inquirer.prompt([packageName(), port(), installTool()]);
\`\`\`

5. \u521B\u5EFA\u6267\u884C\u811A\u672C

bin/index.js

\`\`\`js
#!/usr/bin/env node
import fs from 'fs';
import { execa } from 'execa';
import question from '../prompt/index.js';

const config = await question();

const projectPath = \`./\${config.packageName}\`;

// \u521B\u5EFA\u9879\u76EE\u76EE\u5F55
if (fs.existsSync(projectPath)) {
  // \u5220\u9664\u539F\u6709\u76EE\u5F55
  fs.rmSync(projectPath, { recursive: true });
}
fs.mkdirSync(projectPath);

// \u5B89\u88C5\u4F9D\u8D56
execa(config.installTool, ['install'], {
  cwd: projectPath,
  stdio: [2, 2, 2], // \u5C06\u6807\u51C6\u8F93\u5165\u3001\u8F93\u51FA\u548C\u9519\u8BEF\u90FD\u91CD\u5B9A\u5411\u5230\u5F53\u524D\u8FDB\u7A0B\u7684\u6807\u51C6\u8F93\u51FA\u4E2D
});
\`\`\`

6. \u6267\u884C\u811A\u672C

\u884C\u547D\u4EE4\`node bin/index.js\`\u6216 package.json \u7684 bin \u4E2D\u6DFB\u52A0\`"create-app": "node bin/index.js"\`\uFF0C\u6267\u884C\`npm link\`\u518D\u6267\u884C\`create-app\`

inquirer \u51FA\u73B0\u62A5\u9519

\`const last = items.findLastIndex(isSelectable);\`

\u5207\u6362 node \u7248\u672C\uFF0C[\u76F8\u5173\u95EE\u9898](https://github.com/SBoudrias/Inquirer.js/issues/1526)

execa \u51FA\u73B0\u62A5\u9519

\`SyntaxError: The requested module 'node:events' does not provide an export named 'addAbortListener'\`

\u5207\u6362 node \u7248\u672C\uFF0C[\u76F8\u5173\u95EE\u9898](https://github.com/sindresorhus/execa/issues/1064)

\u8FD0\u884C\u7ED3\u679C

\`\`\`
my-cli % create-app
\u2714 set package name: my-test
\u2714 set port number: 3000
\u2714 select installation tool: npm

up to date in 310ms

19 packages are looking for funding
  run \`npm fund\` for details
\`\`\`
`}}]);
