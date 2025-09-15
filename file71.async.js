"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[9667],{71789:function(i,n,o){o.r(n),n.default=`\u6700\u8FD1\u5DE5\u4F5C\u4E2D\u9047\u5230\u4E86\u539F\u751F+\u6DF7\u5408\uFF08ionic\uFF09\u7684\u5F00\u53D1\u6A21\u5F0F\uFF0C\u4E0D\u5F97\u5DF2\u8D70\u4E86\u6BB5\u8E29\u5751+\u586B\u5751\u7684\u8DEF\u3002\u5E0C\u671B\u6B64\u6587\u53EF\u4EE5\u5E2E\u52A9\u548C\u6211\u4E00\u6837\u9047\u5230\u76F8\u540C\u95EE\u9898\u7684\u4F60\u4EEC\u3002

\`$ ionic info\`\uFF1A

\`\`\`
cli packages: (C:\\Users\\xxx\\AppData\\Roaming\\npm\\node_modules)

    @ionic/cli-utils  : 1.9.2
    ionic (Ionic CLI) : 3.9.2

global packages:

    Cordova CLI : 8.1.2 (cordova-lib@8.1.1)

local packages:

    @ionic/app-scripts : 3.1.1
    Cordova Platforms  : android 6.4.0
    Ionic Framework    : ionic-angular 3.9.2

System:

    Android SDK Tools : 25.2.5
    Node              : v8.12.0
    npm               : 5.6.0
    OS                : Windows 10
\`\`\`

### **\u4E00\u3001ionic \u9879\u76EE+Android \u539F\u751F\uFF1A**

#### **\uFF081\uFF09\u5C06\u7F16\u5199\u597D\u7684 ionic \u9879\u76EE\u6253\u5305\u6210 Android \u5DE5\u7A0B**

\`\`\`
$ ionic cordova platform add android
$ ionic cordova build android --prod --release
\`\`\`

#### **\uFF082\uFF09\u62F7\u8D1D ionic \u5DE5\u7A0B\u6587\u4EF6\u5230\u539F\u751F Android \u9879\u76EE\u4E2D**

\u4E3B\u8981\u6D89\u53CA\u6587\u4EF6\u6709 platforms/android \u76EE\u5F55\u4E0B\u7684\uFF1A

- CordovaLib \u6587\u4EF6\u5939
- src \u4E0B\u7684 com\u3001io\u3001org \u6587\u4EF6\u5939
- res/xml/config.xml \u6587\u4EF6
- assets/www \u6587\u4EF6\u5939

##### a. \u5728 Android Studio \u4E2D\uFF0C\u6253\u5F00 ionic \u9879\u76EE\u7684 platforms/android\uFF0C\u70B9\u51FB\u53F3\u4FA7\u8FB9\u680F\u7684 Gradle\uFF0C\u5C55\u5F00\u7ED3\u6784:CordovaLib->Tasks->build->\u70B9\u51FB assembleRelease\uFF08\u6216\u8005 assembleDebug\uFF09\uFF0C\u5C06\u751F\u6210\u7684 CordovaLib/build/outputs/aar/CordovaLib-release.aar \u62F7\u8D1D\u5230 Android \u9879\u76EE aars \u76EE\u5F55\u4E0B

ps: "AAR\uFF08Android Archive\uFF09\u5305\u662F\u4E00\u4E2A Android \u5E93\u9879\u76EE\u7684\u4E8C\u8FDB\u5236\u5F52\u6863\u6587\u4EF6\u3002"\u2014\u2014\u767E\u5EA6\u767E\u79D1

##### b. \u5C06 ionic \u9879\u76EE platforms/android/src/com\u3001io\u3001org \u4E09\u4E2A\u6587\u4EF6\u5939\u62F7\u8D1D\u5230 Android \u9879\u76EE src/main/java \u76EE\u5F55\u4E0B

##### c. \u5C06 ionic \u9879\u76EE platforms/android/assets/www\uFF0C\u62F7\u8D1D\u5230 Android \u9879\u76EE src/main/assets/www \u4E2D

##### d. \u5C06 ionic \u9879\u76EE platforms/android/res/xml/config.xml \u62F7\u8D1D\u5230 Android \u9879\u76EE src/main/res/xml \u76EE\u5F55\u4E0B

\u5982\u679C\u4E0D\u53D8\u66F4\u63D2\u4EF6\uFF08\u65B0\u589E\u6216\u79FB\u9664\uFF09\uFF0C\u53EA\u9700\u8981\u66FF\u6362 www \u6587\u4EF6\u5939\u4E2D\u7684\u6587\u4EF6\u3002

### **\u4E8C\u3001ionic \u9879\u76EE+iOS \u539F\u751F\uFF1A**

\u4E3B\u8981\u6D89\u53CA\u6587\u4EF6\u6709 platforms/ios \u76EE\u5F55\u4E0B\u7684\uFF1A

- CordovaLib \u6587\u4EF6\u5939
- \u5E94\u7528\u540D xxx/Classes \u6587\u4EF6\u5939
- \u5E94\u7528\u540D xxx/Plugins \u6587\u4EF6\u5939
- \u5E94\u7528\u540D xxx/config.xml \u6587\u4EF6
- www \u6587\u4EF6\u5939

\u5982\u679C\u4E0D\u53D8\u66F4\u63D2\u4EF6\uFF08\u65B0\u589E\u6216\u79FB\u9664\uFF09\uFF0C\u53EA\u9700\u8981\u66FF\u6362 www \u6587\u4EF6\u5939\u4E2D\u7684\u6587\u4EF6\u3002

### **\u4E09\u3001\u539F\u751F\u4E0E ionic \u4E4B\u95F4\u7684\u4EA4\u4E92**

\u9879\u76EE\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49\u7684 cordova \u63D2\u4EF6\uFF0C\u5728\u539F\u751F\u9879\u76EE\u548C ionic \u9879\u76EE\u4E2D\u4F20\u9012\u6216\u63A5\u6536\u53C2\u6570\u3002

#### **\uFF081\uFF09\u5B89\u88C5 plugman \u63D2\u4EF6**

\`\`\`
$ npm install -g plugman
\`\`\`

#### **\uFF082\uFF09\u521B\u5EFA cordova \u63D2\u4EF6**

\u547D\u4EE4\u683C\u5F0F:

\`\`\`
$ plugman create -name <plugmanName> --plugin_id <pluginID> --plugin_version <pluginVersion> [--path <directory>] [--variable NAME=VALUE]
\`\`\`

\u4F8B\u5B50\uFF1A

\`\`\`
\u63D2\u4EF6\u540D\uFF1AmyPlugin
\u63D2\u4EF6 ID\uFF1Acordova-plugin-my-plugin
\u7248\u672C\uFF1A1.0.0
\u63D2\u4EF6\u751F\u6210\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3A\u5F53\u524D\u8DEF\u5F84\uFF1AD:\\
\u63CF\u8FF0\uFF1A\u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u63D2\u4EF6
\u4F5C\u8005\uFF1Ame
\`\`\`

\`\`\`
$ plugman create -name myPlugin --plugin_id cordova-plugin-my-plugin --plugin_version 1.0.0 --path D:\\ --variable description="\u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u63D2\u4EF6" --variable author="me"
\`\`\`

\u6253\u5F00\u751F\u6210\u8DEF\u5F84 D:\uFF0C\u53EF\u4EE5\u770B\u5230\u65B0\u751F\u6210\u7684 myPlugin \u6587\u4EF6\u5939\uFF0C\u8FD9\u4E9B\u81EA\u5B9A\u4E49\u4FE1\u606F\u88AB\u5199\u5165\u4E86 myPlugin/plugin.xml \u4E2D\u3002
cmd \u4E2D\u8FDB\u5165 myPlugin \u76EE\u5F55\uFF0C\u6267\u884C npm init \u751F\u6210 package.json \u6587\u4EF6

\`\`\`
D:\\myPlugin>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help json\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg>\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (myplugin)
version: (1.0.0)
description: \u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u63D2\u4EF6
entry point: (index.js)
test command:
git repository:
keywords:
author: me
license: (ISC)
About to write to D:\\myPlugin\\package.json:

{
  "name": "myplugin",
  "version": "1.0.0",
  "description": "\u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u63D2\u4EF6",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "me",
  "license": "ISC"
}


Is this ok? (yes) y
\`\`\`

\u6B64\u65F6 myPlugin \u6587\u4EF6\u5939\u4E2D\u65B0\u589E\u4E86\u4E00\u4E2A package.json \u6587\u4EF6\uFF0C\u91CC\u9762\u5B9A\u4E49\u4E86\u63D2\u4EF6\u7684\u76F8\u5173\u4FE1\u606F\u3002

#### **\uFF083\uFF09\u4E3A\u63D2\u4EF6\u6DFB\u52A0\u5E73\u53F0**

\u547D\u4EE4\u683C\u5F0F\uFF1A

\`\`\`
$ plugman platform add -platform_name <ios|amazon-fireos|android|blackberry10|wp8>
\`\`\`

\u4F8B\u5B50\uFF1A

\`\`\`
$ plugman platform add -platform_name android
\`\`\`

#### **\uFF084\uFF09ionic \u9879\u76EE\u4E2D\u6DFB\u52A0/\u79FB\u9664\u81EA\u5B9A\u4E49\u63D2\u4EF6**

\u8FDB\u5165 ionic \u9879\u76EE\u76EE\u5F55\uFF0C\u6DFB\u52A0\u63D2\u4EF6\uFF1A

\`\`\`
$ cordova plugin add D:\\myplugin --save
\`\`\`

\u6B64\u65F6 ionic \u9879\u76EE\u4E2D plugins \u6587\u4EF6\u5939\u4E0B\u65B0\u589E cordova-plugin-my-plugin \u63D2\u4EF6\u3002
\u79FB\u9664\u63D2\u4EF6\uFF1A

\`\`\`
$ cordova plugin rm cordova-plugin-my-plugin
\`\`\`

\u66F4\u591A\u5185\u5BB9\u8BF7\u53C2\u8003\uFF1A[https://cordova.apache.org/docs/zh-tw/latest/plugin_ref/plugman.html](https://cordova.apache.org/docs/zh-tw/latest/plugin_ref/plugman.html)

#### **\uFF085\uFF09\u63D2\u4EF6\u7684\u4F7F\u7528**

\u5047\u8BBE\u6211\u4EEC\u7ED9\u63D2\u4EF6\u6DFB\u52A0 android \u548C ios \u5E73\u53F0\uFF08\u4EE5\u4E0A\u7B2C\u4E09\u6B65\uFF09\uFF0C\u6B64\u65F6\u4F60\u6253\u5F00\u63D2\u4EF6\u76EE\u5F55\uFF0C\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u76EE\u5F55\u7ED3\u6784\uFF1A

\`\`\`
myPlugin
|-src
|    |-android
|    |    |_myPlugin.java
|    |_ios
|         |_myPlugin.m
|-www
|    |_myPlugin.js
|-package.json
|_plugin.xml
\`\`\`

\u6253\u5F00 myPlugin.js \u53EF\u4EE5\u770B\u5230\u4E00\u4E2A\u9ED8\u8BA4\u7684 coolMethod \u65B9\u6CD5\uFF0C\u65B9\u6CD5\u540D\u53EF\u4EE5\u4FEE\u6539\uFF0C\u4F46\u6CE8\u610F\u5176\u4ED6\u5E73\u53F0\u7684\u6587\u4EF6\u90FD\u8981\u4E00\u8D77\u4FEE\u6539\u3002
\u5728 coolMethod \u4E2D\u9ED8\u8BA4\u4F20\u9012\u4E86\u4E00\u4E2A\u53C2\u6570\u3001\u6210\u529F\u548C\u5931\u8D25\u7684\u56DE\u8C03\u65B9\u6CD5\u3002

\`\`\`js
var exec = require('cordova/exec');

exports.coolMethod = function(arg0, success, error) {
  exec(success, error, 'myPlugin', 'coolMethod', [arg0]);
};
\`\`\`

\u5982\u679C\u4E0D\u9700\u8981\u4F20\u9012\u53C2\u6570\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A

\`\`\`js
var exec = require('cordova/exec');

exports.coolMethod = function(success, error) {
  exec(success, error, 'myPlugin', 'coolMethod', []); // \u7A7A\u6570\u7EC4
};
\`\`\`

\u5728 ionic \u9879\u76EE.ts \u6587\u4EF6\u4E2D\uFF0C\u5148\u58F0\u660E cordova \u53D8\u91CF\uFF0C\u518D\u8C03\u7528\u63D2\u4EF6\u65B9\u6CD5\uFF1A

\`\`\`js
import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';

declare const cordova: any;  // \u58F0\u660Ecordova\u53D8\u91CF

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  constructor(private _platform: Platform) {
  }
  useMyPlugin() {
	if (this._platform.is('cordova')) {
      cordova.plugins.myPlugin.coolMethod('myParam',
        res => {},
        err => {}
      );
    }
  }
}
\`\`\`

### **\u4E0B\u9762\u6765\u8BF4\u8BF4\u9879\u76EE\u4E2D\u8E29\u7684\u5751**

#### **\u95EE\u9898 1\uFF1Aionic \u7248\u672C\u95EE\u9898**

\u56E0\u4E3A\u662F\u65B0\u9879\u76EE\uFF0C\u6700\u5F00\u59CB\u51C6\u5907\u4F7F\u7528 ionic4 beta13\uFF08\u5199\u6B64\u6587\u65F6\u5DF2\u51FA beta15\uFF09\u6765\u5199\u9879\u76EE\uFF0C\u56E0\u4E3A\u5982\u679C\u4F7F\u7528 ionic3\uFF0C\u5C06\u6765\u5347\u7EA7\u5230 ionic4 \u5DE5\u4F5C\u91CF\u8FD8\u662F\u6BD4\u8F83\u5927\u7684\u3002
\u7136\u800C\u9879\u76EE\u5199\u5230\u4E00\u534A\u65F6\uFF0C\u53D1\u73B0\u4F4E\u7248\u672C\u5B89\u5353\u4E2D\u4F1A\u767D\u5C4F\uFF08\u6211\u6D4B\u8BD5\u4E86 android 8.0 \u6B63\u5E38\uFF0C7.1.0 \u5F00\u59CB\u767D\u5C4F\uFF0C\u7F51\u4E0A\u6709\u4EBA\u505A\u4E86\u6D4B\u8BD5\u8BF4\u662F 7.1.1 \u4EE5\u4E0B\u5F02\u5E38\uFF09\uFF0C\u8FDE\u63A5 Google \u6D4F\u89C8\u5668\u624B\u673A[\u8C03\u8BD5\u6A21\u5F0F](chrome://inspect/#devices)\uFF0C\u6211\u770B\u5230\u9879\u76EE\u672C\u8EAB\u6CA1\u6709\u4EFB\u4F55\u62A5\u9519\uFF0C\u4F46\u662F shadow dom \u90FD\u6CA1\u6709\u6E32\u67D3\u51FA\u6765\uFF0C\u800C\u5B98\u65B9\u4F3C\u4E4E\u4ECD\u5728\u52AA\u529B\u89E3\u51B3\u4F4E\u7248\u672C\u7684\u95EE\u9898\uFF0C\u6700\u540E\u53EA\u80FD **\u6682\u65F6\u653E\u5F03 ionic4 \u7248\u672C\uFF0C\u6539\u7528 ionic3**\u3002

#### **\u95EE\u9898 2\uFF1A\u5D4C\u5165 iOS \u539F\u751F\u9879\u76EE\u540E ionic \u7684\u8DE8\u57DF\u95EE\u9898**

\u5176\u5B9E\u5BF9\u4E8E ionic \u7684\u63A5\u53E3\u8DE8\u57DF\u95EE\u9898\uFF0C\u89E3\u51B3\u65B9\u6CD5\u6709\u591A\u79CD\uFF0C\u7136\u800C\u6700\u7B80\u5355\u7684\u89E3\u51B3\u65B9\u6CD5\u5D4C\u5165\u4E86 iOS \u9879\u76EE\u540E\u5C31\u5931\u6548\u4E86\u3002
\u5047\u8BBE\u6211\u4EEC\u7684\u540E\u7AEF api \u63A5\u53E3\u4E3A https://www.qdfuns.com/api/getSomething \uFF0C\u800C\u6211\u4EEC\u7684\u672C\u5730\u670D\u52A1\u4E3A http://localhost:8100 \uFF0C\u5728\u4E00\u4E9B\u5B89\u5168\u7B56\u7565\u6BD4\u8F83\u9AD8\u7684\u6D4F\u89C8\u5668\u4E2D\u5C31\u4F1A\u53D1\u751F\u8DE8\u57DF\u95EE\u9898\uFF0C\u539F\u751F\u5E94\u7528\u5728\u6E32\u67D3 ionic \u65F6\u7528\u7684 webview \u4E5F\u4F1A\u6709\u6B64\u95EE\u9898\u3002
\u5047\u8BBE\u4F60\u7684 api \u63A5\u53E3\u53EF\u4EE5\u62E6\u622A\u8DE8\u57DF\u653B\u51FB\u7B49\u6F5C\u5728\u5371\u5BB3\uFF0C\u90A3\u4E48\u8DE8\u57DF\u95EE\u9898\u53EF\u4EE5\u5728\u540E\u7AEF\u89E3\u51B3\uFF0C\u5982\u679C\u4E0D\u884C\uFF0C\u90A3\u63A5\u4E0B\u6765\u7684\u5185\u5BB9\u4E5F\u8BB8\u53EF\u4EE5\u5E2E\u52A9\u5230\u4F60\u3002

**\u65B9\u6CD5 1\uFF1A\u5173\u95ED\u8C37\u6B4C\u5B89\u5168\u7B56\u7565**\uFF08\u7B80\u5355\u7C97\u66B4\uFF0C\u4EC5\u9002\u7528\u4E8E\u672C\u5730\u8C03\u8BD5\uFF09
\u6253\u5F00 chrome \u5C5E\u6027-\u5FEB\u6377\u65B9\u5F0F-\u76EE\u6807\u540E\u9762\u6DFB\u52A0--disable-web-security --user-data-dir\uFF0C\u4F8B\u5982\uFF1A
"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe" --disable-web-security --user-data-dir
\u91CD\u542F chrome \u6D4F\u89C8\u5668\u5373\u53EF\u3002\u4E0D\u540C\u7248\u672C\u7684 chrome \u53C2\u6570\u53EF\u80FD\u4F1A\u6709\u53D8\u5316\u3002

**\u65B9\u6CD5 2\uFF1A\u4F7F\u7528\u5B98\u65B9\u63D0\u4F9B\u7684\u4EE3\u7406**
\u5728 ionic.config.json \u6587\u4EF6\u4E2D\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A

\`\`\`json
"proxies": [
  {
    "path": "/api",
    "proxyUrl": "https://www.qdfuns.com/api"
  }
]
\`\`\`

\u5728.ts \u6587\u4EF6\u4E2D\u4F7F\u7528

\`\`\`js
this._http.get('api/getSomething');
\`\`\`

\u914D\u7F6E\u4E86 proxy \u4EE3\u7406\uFF0C\u53EF\u4EE5\u770B\u5230\u5728 ionic serve \u4E2D\u4F1A\u6709\u8FD9\u4E48\u4E00\u884C\u8F93\u51FA\uFF1A
\`Proxy added:/api => https://www.qdfuns.com/api\`
\u5373\u901A\u8FC7\u4EE3\u7406\u5C06http://localhost/api/getSomething\u6307\u5411\u4E86https://www.qdfuns.com/api/getSomething\u3002

\u8BE6\u89C1\u5B98\u65B9\u6587\u6863\uFF1A[https://ionicframework.com/docs/cli/configuring.html](https://ionicframework.com/docs/cli/configuring.html)

\u7136\u800C\uFF0Cproxy \u7684\u65B9\u6848\u6216\u8BB8\u5BF9\u7EAF ionic \u9879\u76EE\u662F\u597D\u7528\u7684\uFF0C\u4F46\u662F\u5D4C\u5165\u539F\u751F iOS \u9879\u76EE\u540E\u5C31\u5931\u6548\u4E86\uFF0C\u539F\u751F Android \u6682\u672A\u51FA\u73B0\u8DE8\u57DF\u95EE\u9898\u3002\u4E8E\u662F\u6211\u4EEC\u5F00\u59CB\u5C1D\u8BD5\u7B2C\u4E09\u79CD\u65B9\u6848\u3002

**\u65B9\u6CD5 3\uFF1A\u4F7F\u7528 cordova-plugin-advanced-http \u8C03\u7528\u539F\u751F\u65B9\u5F0F\u8BF7\u6C42**\uFF08\u4E0D\u9002\u7528\u4E8E browser \u5E73\u53F0\uFF09
\u6DFB\u52A0 cordova-plugin-advanced-http \u63D2\u4EF6

\`\`\`
$ cordova plugin add cordova-plugin-advanced-http
\`\`\`

\u8FD9\u4E2A\u63D2\u4EF6\u4F1A\u9ED8\u8BA4\u7ED1\u5B9A\u4E00\u4E2A\u53EB cordova-plugin-file \u7684\u63D2\u4EF6\uFF0C\u8FD9\u91CC\u5F15\u51FA\u4E86\u4E2A\u65B0\u5751\uFF0C\u7A0D\u540E\u4ECB\u7ECD\u3002

get \u8BF7\u6C42\uFF1A

\`\`\`js
cordova.plugin.http.get(
  'https://google.com/',
  {
    id: '12',
    message: 'test',
  },
  { Authorization: 'OAuth2: token' },
  function(response) {
    console.log(response.status);
    // \u7ED3\u679C\u8FD4\u56DE\u7684\u662FJSON\u5B57\u7B26\u4E32\uFF0C\u9700\u8981\u8F6C\u8BD1
    console.log(JSON.parse(response.data));
  },
  function(response) {
    // \u7ED3\u679C\u8FD4\u56DE\u7684\u662F\u5B57\u7B26\u4E32\uFF0C\u9700\u8981\u5224\u65AD\uFF0C\u5982\u679C\u662FJSON\u5B57\u7B26\u4E32\uFF0C\u5219\u505AJSON.parse(\uFF09\u8F6C\u8BD1\uFF0C\u4E0D\u662F\u5219\u76F4\u63A5\u8F93\u51FA
    console.error(response.error);
  },
);
\`\`\`

\u5173\u4E8E\u5224\u65AD\u662F\u5426\u662F JSON \u5B57\u7B26\u4E32\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u65B9\u6CD5\uFF1A

\`\`\`js
isJsonString(str) {
  try {
    if (typeof JSON.parse(str) == "object") {
      return true;
    }
  } catch (e) {
  }
  return false;
}
\`\`\`

\u56E0\u4E3A\u6211\u4EEC\u7684 Android+ionic \u9879\u76EE\u6CA1\u6709\u8DE8\u57DF\u95EE\u9898\uFF0C\u5E76\u4E14\u672C\u5730\u4F7F\u7528\u6D4F\u89C8\u5668\u8C03\u8BD5\u65F6\uFF0C\u6CA1\u6709 cordova \u53D8\u91CF\uFF0C\u6240\u4EE5\u6211\u4EEC\u505A\u4E86\u5E73\u53F0\u533A\u5206\uFF0C\u5982\u679C\u662F ios \u9879\u76EE\u624D\u4F7F\u7528 cordova-plugin-advanced-http\uFF0C\u5426\u5219\u4F7F\u7528@angular/common/http \u7684 HttpClient \u8BF7\u6C42\u3002

\u63D2\u4EF6\u5B98\u65B9\u6587\u6863\uFF1A

[https://github.com/silkimen/cordova-plugin-advanced-http](https://github.com/silkimen/cordova-plugin-advanced-http)

ionic \u5B98\u65B9\u6587\u6863\uFF1A

[https://ionicframework.com/docs/native/http](https://ionicframework.com/docs/native/http)

#### **\u95EE\u9898 3\uFF1Acordova-plugin-file \u63D2\u4EF6\u5BFC\u81F4 Android \u624B\u673A\u7269\u7406\u8FD4\u56DE\u952E\u8FD4\u56DE\u8DEF\u5F84\u6709\u8BEF**

\u524D\u9762\u4E3A\u4E86\u89E3\u51B3 ios \u7684\u8DE8\u57DF\u95EE\u9898\uFF0C\u6211\u4EEC\u5728\u9879\u76EE\u4E2D\u6DFB\u52A0\u4E86 cordova-plugin-advanced-http \u63D2\u4EF6\uFF0C\u800C\u6B64\u63D2\u4EF6\u53C8\u95F4\u63A5\u5B89\u88C5\u4E0A\u4E86 cordova-plugin-file \u63D2\u4EF6\uFF0C\u5728 cordova-plugin-file \u91CC\u6709\u4E00\u90E8\u5206\u5173\u4E8E fileSystemPaths \u7684\u4EE3\u7801\uFF0C\u4F1A\u5BFC\u81F4 ionic \u76D1\u542C android \u7269\u7406\u8FD4\u56DE\u952E\u8FD4\u56DE\u7684\u8DEF\u5F84\u9519\u8BEF\u3002
\u4F8B\u5982 ionic \u9879\u76EE\u4E2D\u6709 A\uFF0CB\uFF0CC \u4E09\u4E2A\u9875\u9762\uFF0C\u6B63\u5E38\u7684\u7269\u7406\u8FD4\u56DE\u662F C->B->A->\u539F\u751F\u9875\u9762
\u4F46\u662F\u56E0\u4E3A cordova-plugin-file \u7684 fileSystemPaths \u5F71\u54CD\uFF0C\u53D8\u6210\u4E86 C->\u539F\u751F\u9875\u9762\uFF0CB->\u539F\u751F\u9875\u9762\uFF0CA->\u539F\u751F\u9875\u9762\uFF0C\u6240\u6709 ionic \u7684\u9875\u9762\u7269\u7406\u8FD4\u56DE\u90FD\u76F4\u63A5\u9000\u51FA\u4E86 ionic \u9879\u76EE\u3002

**\u89E3\u51B3\u65B9\u6CD5\uFF1A**
\u6CE8\u91CA\u6389 platforms/android/assets/www/cordova_plugins.js \u6587\u4EF6\u7684\u4EE5\u4E0B\u4EE3\u7801\uFF0C\u7136\u540E\u4E00\u5207\u6062\u590D\u6B63\u5E38\uFF1A

\`\`\`js
{
  "id": "cordova-plugin-file.fileSystemPaths",
  "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
  "pluginId": "cordova-plugin-file",
  "merges": [
    "cordova"
  ],
  "runs": true
},
\`\`\`

\u8FD9\u91CC\u63D0\u5230\u4E86 Android \u624B\u673A\u7684\u7269\u7406\u8FD4\u56DE\u952E\uFF0C\u90A3\u4E48 ionic \u9879\u76EE\u4E2D\u5982\u4F55\u76D1\u542C\u8FD9\u4E2A\u8FD4\u56DE\u952E\u5462\uFF1F
\u5728\u9996\u9875.ts \u6587\u4EF6\u4E2D

\`\`\`js
export class HomePage {
  restoreDeviceBackBtn: Function = () => {};

  constructor(private _platform: Platform) {
  }

  ionViewWillEnter() {
    this._platform.ready().then(() => {
      this.restoreDeviceBackBtn = this._platform.registerBackButtonAction(() => this.goBack())
    });
  }

  ionViewWillLeave() {
    this.restoreDeviceBackBtn && this.restoreDeviceBackBtn();
  }

  goBack() {
    // \u901A\u8FC7\u81EA\u5B9A\u4E49\u7684cordova\u63D2\u4EF6\u8C03\u7528\u539F\u751F\u5199\u7684\u8FD4\u56DE\u65B9\u6CD5
  }
}
\`\`\`

#### **\u95EE\u9898 4\uFF1A\u539F\u751F\u9879\u76EE\u542F\u52A8 ionic \u9879\u76EE\u6162**

\u5BF9 ionic \u9879\u76EE\u8FDB\u884C\u4F18\u5316\uFF0C\u4F7F\u7528 ionic3 \u63D0\u4F9B\u7684\u61D2\u52A0\u8F7D\u548C\u9884\u52A0\u8F7D\u529F\u80FD\u3002

**\u65B9\u6CD5 1\uFF1Aionic \u61D2\u52A0\u8F7D**

\u5728 app.module.ts \u6587\u4EF6\u4E2D

\`\`\`js
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp, // \u53EA\u58F0\u660E\u5165\u53E3
  ],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, // \u53EA\u8C03\u7528\u5165\u53E3\u7EC4\u4EF6
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ],
})
export class AppModule {}
\`\`\`

\u5728\u9875\u9762\u7684 xxx.module.ts \u6587\u4EF6\u4E2D

\`\`\`js
import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';
import { HomePage } from './index';

@NgModule({
  declarations: [HomePage],
  imports: [
    IonicPageModule.forChild(HomePage), // \u5173\u952E
  ],
})
export class HomePageModule {}
\`\`\`

\u5728\u9875\u9762\u7684 xxx.ts \u6587\u4EF6\u4E2D

\`\`\`js
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage() // \u5173\u952E
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {}
\`\`\`

\u5728\u4F7F\u7528\u61D2\u52A0\u8F7D\u524D\uFF0C\u6240\u6709\u7684\u9875\u9762\u7684 ts \u4EE3\u7801\u4F1A\u88AB\u8F6C\u6210 js \u4EE3\u7801\uFF0C\u5199\u5728 main.js \u4E2D\uFF0C\u5728\u4F7F\u7528\u4E86\u61D2\u52A0\u8F7D\u4E4B\u540E\uFF0C\u9875\u9762\u7684 ts \u4EE3\u7801\u8F6C\u6210\u7684 js \u4F1A\u88AB\u5206\u6563\u5230 1.js\uFF0C2.js\uFF0C3.js\u2026\u2026\u6587\u4EF6\u4E2D\u3002\u5E94\u7528\u542F\u52A8\u65F6\u8C03\u7528\u7684 main.js \u6587\u4EF6\u5927\u5927\u7F29\u5C0F\uFF0C\u800C\u9875\u9762\u52A0\u8F7D\u65F6\u4E5F\u53EA\u8C03\u7528\u5176\u5BF9\u5E94\u7684 js \u6587\u4EF6\u3002

**\u65B9\u6CD5 2\uFF1Aionic \u9884\u52A0\u8F7D**

\u5728 app.module.ts \u6587\u4EF6\u4E2D\uFF0C\u8BBE\u7F6E preloadModules: true

\`\`\`js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true, // \u5173\u952E
    }),
  ],
})
export class AppModule {}
\`\`\`

\u5BF9\u5E94\u7684 xxx.ts \u6587\u4EF6\u4E2D\uFF0C\u8BBE\u7F6E\u4F18\u5148\u7EA7 priority: 'high'

\`\`\`js
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  priority: 'high', // \u5173\u952E
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {}
\`\`\`

\u53EF\u80FD\u9879\u76EE\u5185\u5BB9\u8F83\u5C11\uFF0C\u9884\u52A0\u8F7D\u7684\u6548\u679C\u76EE\u524D\u8FD8\u6CA1\u770B\u51FA\u6765\u2026\u2026

\u5B98\u65B9\u53C2\u8003\u6587\u6863\uFF1A[https://ionicframework.com/docs/api/navigation/IonicPage](https://ionicframework.com/docs/api/navigation/IonicPage)

**\u65B9\u6CD5 3\uFF1A\u6253 prod \u5305\uFF0C\u538B\u7F29 css \u548C js \u4EE3\u7801**

\`\`\`
$ ionic cordova build android --prod --release
\`\`\`

\u7ECF\u6D4B\u8BD5 prod \u5305\u7684\u542F\u52A8\u65F6\u95F4\u6BD4 dev \u5305\u5FEB\u4E86\u5C06\u8FD1\u4E00\u500D\u3002
`}}]);
