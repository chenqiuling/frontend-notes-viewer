"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[8118],{50359:function(e,n,o){o.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD\u4EE5\u4E0B\u4E24\u4E2A cordova \u70ED\u66F4\u65B0\u63D2\u4EF6\uFF1A

- **cordova-hot-code-push-plugin \u63D2\u4EF6**\uFF082018-09-30 \u8D77\u63D2\u4EF6\u4E0D\u518D\u66F4\u65B0\uFF09

- **cordova-plugin-code-push \u63D2\u4EF6**\uFF08Microsoft \u7684\uFF09

\u4E24\u8005\u7684\u5DEE\u522B\uFF1A  
\u4F7F\u7528 cordova-hot-code-push-plugin \u8D44\u6E90\u6587\u4EF6\u53EF\u4EE5\u5B58\u653E\u5728\u81EA\u5DF1\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u800C\u4F7F\u7528 cordova-plugin-code-push \u5219\u662F\u5B58\u653E\u4E8E code-push \u670D\u52A1\u5668\u4E0A\u3002

\u672C\u6587\u4EE5 Ionic3 \u9879\u76EE\u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u4E24\u4E2A\u63D2\u4EF6\u7684\u4F7F\u7528\u3002

### **cordova-hot-code-push-plugin \u63D2\u4EF6**

- \u5B89\u88C5\u53CA\u914D\u7F6E cordova-hot-code-push-plugin

- \u642D\u5EFA Apache \u670D\u52A1\u5668\u6A21\u62DF\u6D4B\u8BD5\uFF08\u63A8\u8350\uFF09

- \u4F7F\u7528 cordova-hot-code-push-local-dev-addon \u63D2\u4EF6\u6A21\u62DF\u6D4B\u8BD5

#### **\u5B89\u88C5\u53CA\u914D\u7F6E cordova-hot-code-push-plugin**

(1) \u6DFB\u52A0\u63D2\u4EF6

> \\$ cordova plugin add cordova-hot-code-push-plugin

(2) \u5B89\u88C5 cli

> \\$ npm install -g cordova-hot-code-push-cli

(3) \u6267\u884C\`$ cordova-hcp init\`\uFF0C\u751F\u6210 cordova-hcp.json \u6587\u4EF6

> D:\\workspaces\\hot-code-push-demo>cordova-hcp init  
> Running init  
> Please provide: Enter project name (required): hot-code-push-demo  
> Please provide: Amazon S3 Bucket name (required for cordova-hcp deploy):  
> Please provide: Path in S3 bucket (optional for cordova-hcp deploy):  
> Please provide: Amazon S3 region (required for cordova-hcp deploy): (us-east-1)  
> Please provide: IOS app identifier:  
> Please provide: Android app identifier:  
> Please provide: Update method (required): (resume)  
> Please provide: Enter full URL to directory where cordova-hcp build result will be uploaded: \u670D\u52A1\u5668\u5730\u5740/chcp.json  
> Project initialized and cordova-hcp.json file created.  
> If you wish to exclude files from being published, specify them in .chcpignore  
> Before you can push updates you need to run "cordova-hcp login" in project directory

\u542B required \u7684\u662F\u5FC5\u586B\u9879\uFF0C\u5176\u4ED6\u7684\u53EF\u4EE5\u8DF3\u8FC7\u6216\u4F7F\u7528\u9ED8\u8BA4\u3002IOS app ID \u548C Android app ID \u662F app \u4E0A\u4F20\u5230\u5E94\u7528\u5546\u5E97\u7684\u5BF9\u5E94 ID\uFF0C\u7528\u4E8E\u5F53\u65E0\u6CD5\u70ED\u66F4\u65B0\u9700\u8DF3\u8F6C\u5E94\u7528\u5546\u5E97\u4E0B\u8F7D\u65F6\u4F7F\u7528\uFF0C\u6D4B\u8BD5 Demo \u53EF\u4EE5\u8DF3\u8FC7\u3002

(4) \u6267\u884C\`$ cordova-hcp build\`\uFF0C\u5728\u6839\u76EE\u5F55\u7684 www \u6587\u4EF6\u5939\u4E2D\u751F\u6210 chcp.json \u548C chcp.mainfest \u6587\u4EF6

> D:\\workspaces\\hot-code-push-demo>cordova-hcp build  
> Running build  
> Config { name: 'hot-code-push-demo',  
>  ios_identifier: '',  
>  android_identifier: '',  
>  update: 'resume',  
>  content_url: '\u670D\u52A1\u5668\u5730\u5740/chcp.json',  
>  release: '2018.11.15-11.32.25' }  
> Build 2018.11.15-11.32.25 created in D:\\workspaces\\hot-code-push-demo\\www

(5) \u914D\u7F6E config.xml \u6587\u4EF6

\`\`\`xml
<chcp>
  <config-file url="\u670D\u52A1\u5668\u5730\u5740/chcp.json"/>
</chcp>
\`\`\`

<span style="color: #f00">\u6BCF\u6B21\u9700\u8981\u70ED\u66F4\u65B0\u524D\u5FC5\u987B\u6267\u884C\`$ cordova-hcp build\`\uFF0C\u4E3B\u8981\u76EE\u7684\u662F\u66F4\u65B0 chcp.json \u91CC\u7684 release \u503C\u548C chcp.mainfest \u91CC\u76F8\u5173\u53D8\u52A8\u7684\u6587\u4EF6\u7684 hash \u503C\u3002</span>

#### **\u642D\u5EFA Apache \u670D\u52A1\u5668\u6A21\u62DF\u6D4B\u8BD5**

\uFF081\uFF09\u4E0B\u8F7D\u5E76\u5B89\u88C5 Apache \u670D\u52A1\u5668[https://www.apachelounge.com/download/](https://www.apachelounge.com/download/)\uFF1B

\uFF082\uFF09\u975E\u9ED8\u8BA4\u5B89\u88C5\u8DEF\u5F84\uFF0C\u9700\u4FEE\u6539 httpd.conf \u914D\u7F6E\u6587\u4EF6\uFF0C\u5982\u679C\u662F\u9ED8\u8BA4\u5B89\u88C5\u8DEF\u5F84\uFF08c:/\uFF09\u5219\u65E0\u9700\u4FEE\u6539\u914D\u7F6E\u3002
\u4FEE\u6539 Apache \u5B89\u88C5\u76EE\u5F55/conf \u4E0B\u7684 httpd.conf \u6587\u4EF6 SRVROOT \u7684\u503C\uFF0CLine37\uFF1A

> Define SRVROOT "c:/Apache24"

\uFF083\uFF09\u542F\u52A8\uFF1A\u4F9D\u6B21\u53CC\u51FB\u6267\u884C httpd.exe \u548C ApacheMonitor.exe

\uFF084\uFF09\u6D4F\u89C8\u5668\u5730\u5740\u680F\u8F93\u5165\u672C\u673A ip\uFF08\u67E5\u770B Wifi-\u5C5E\u6027-IPv4 \u5730\u5740\uFF09\uFF0C\u56DE\u8F66\uFF0C\u53EF\u4EE5\u6253\u5F00\u7F51\u9875\uFF0C\u663E\u793A\u201CIt works!\u201D\uFF0C\u8BF4\u660E\u670D\u52A1\u5668\u642D\u5EFA\u6210\u529F\u3002

\uFF085\uFF09\u4FEE\u6539\u9879\u76EE\u7684 config.xml \u4E2D config-file \u7684 url \u503C\uFF0C\u6539\u4E3A\u670D\u52A1\u5668\u4E0A chcp.json \u7684\u5730\u5740\u3002

\uFF086\uFF09\u6D4B\u8BD5\uFF1A

\u5148\u8FDE\u63A5\u771F\u673A\u8C03\u8BD5\u6A21\u5F0F\u6216\u6253\u5F00\u6A21\u62DF\u5668\uFF0C\u6267\u884C\u9879\u76EE\`$ ionic cordova run android\`\uFF08\u6CE8\u610F\u547D\u4EE4\u4E0D\u8981\u52A0-l \u6216-livereload\uFF09\uFF0C\u5B8C\u6210\u540E app \u4F1A\u5B89\u88C5\u5230\u771F\u673A\u6216\u6A21\u62DF\u5668\u4E0A\uFF1B

\u7136\u540E\u62F7\u8D1D\u9879\u76EE platforms/android/assets/www \u6587\u4EF6\u5939\u5230 Apache24/htdocs \u76EE\u5F55\u4E0B\uFF1B

\u518D\u4FEE\u6539\u67D0\u4E2A\u9879\u76EE\u6587\u4EF6\uFF0C\u8FD9\u91CC\u4E3A\u4E86\u6D4B\u8BD5\u65B9\u4FBF\u53EF\u4EE5\u76F4\u63A5\u6267\u884C\`$ ionic serve\`\uFF0C\u7136\u540E\u6267\u884C\`$ cordova-hcp build\`\uFF0C\u62F7\u8D1D\u6839\u76EE\u5F55\u4E0B\u65B0\u7684 www\uFF0C\u8986\u76D6\u670D\u52A1\u5668\u4E0A\u7684 www\uFF0C\u91CD\u65B0\u542F\u52A8 app\uFF0C\u8FC7\u4E00\u4F1A\u5C31\u53EF\u4EE5\u770B\u5230 app \u9875\u9762\u5237\u65B0\u6210\u4E86\u6700\u65B0\u7684\u3002

#### **\u4F7F\u7528 cordova-hot-code-push-local-dev-addon \u63D2\u4EF6\u6A21\u62DF\u6D4B\u8BD5**

\uFF081\uFF09\u6DFB\u52A0\u672C\u5730\u670D\u52A1\u63D2\u4EF6

> \\$ cordova plugin add cordova-hot-code-push-local-dev-addon

\uFF082\uFF09\u6267\u884C\`$ cordova-hcp server\`\uFF0C\u542F\u52A8\u672C\u5730\u670D\u52A1\uFF0C\u6CE8\u610F\u6BCF\u6B21\u542F\u52A8\uFF0C\u90FD\u4F1A\u751F\u6210\u4E00\u4E2A\u968F\u673A\u7684\u670D\u52A1\u5668\u5730\u5740\uFF0C\u9700\u8981\u66F4\u65B0 config.xml \u4E2D config-file \u7684 url \u503C\u3002

> D:\\workspaces\\hot-code-push-demo>cordova-hcp server  
> Running server  
> Checking: D:\\workspaces\\hot-code-push-demo\\www  
> local_url http://localhost:31284  
> Warning: .chcpignore does not exist.  
> Build 2018.11.15-11.53.39 created in D:\\workspaces\\hot-code-push-demo\\www  
> cordova-hcp local server available at: http://localhost:31284  
> cordova-hcp public server available at: https://33960159.ngrok.io

\u6B64\u547D\u4EE4\u4F1A\u68C0\u6D4B\u672C\u5730\u914D\u7F6E\uFF0C\u5982\u679C\u9879\u76EE\u6CA1\u6709\u6267\u884C\`cordova-hcp init\`\uFF0C\u751F\u6210 cordova-hcp.json \u6587\u4EF6\uFF0C\u6267\u884C\u6B64\u547D\u4EE4\u4F1A\u63D0\u793A\`Warning: .chcpignore does not exist.\`\uFF0C\u5E76\u5728 www \u4E2D\u751F\u6210 chcp.json \u548C chcp.mainfest \u6587\u4EF6\uFF0C\u5982\u679C\u5DF2\u7ECF\u751F\u6210\u4E86 cordova-hcp.json \u6587\u4EF6\uFF0C\u5219\u63D0\u793A\`Config {cordova-hcp.json\u6587\u4EF6\u7684\u5185\u5BB9}\`

\uFF083\uFF09\u6267\u884C\u9879\u76EE\`$ cordova run\`\uFF0C\u4FEE\u6539\u9879\u76EE\u6587\u4EF6\uFF0C\u91CD\u65B0\u542F\u52A8 app\uFF0C\u8FC7\u4E00\u4F1A\u5C31\u53EF\u4EE5\u770B\u5230 app \u9875\u9762\u5237\u65B0\u6210\u4E86\u6700\u65B0\u7684\u3002

### **cordova-plugin-code-push \u63D2\u4EF6**

\uFF081\uFF09\u4E0B\u8F7D cli

> \\$ npm install -g code-push-cli

\uFF082\uFF09\u767B\u5F55 code-push \u670D\u52A1\u5668\uFF0C\u6267\u884C\`$ code-push login\`

> D:\\workspaces\\code-push-demo>code-push login
> Please login to Mobile Center in the browser window we've just opened.

> Enter your token from the browser:

\u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u6253\u5F00\u670D\u52A1\u5668\u767B\u5F55\u754C\u9762\uFF0C\u53EF\u4EE5\u9009\u62E9\u7684\u767B\u5F55\u65B9\u5F0F\u6709\uFF1AGithub\u3001Microsoft\u3001Facebook\u3001Google\u3001\u6CE8\u518C\u65B0\u8D26\u6237\uFF0C\u767B\u5F55\u6210\u529F\u9875\u9762\u4F1A\u8FD4\u56DE Authentication token\uFF0C\u590D\u5236\u5230\u547D\u4EE4\u884C\u4E2D\uFF1A

> D:\\workspaces\\code-push-demo>code-push login
> Please login to Mobile Center in the browser window we've just opened.

> Enter your token from the browser: c59xxxxxxxxxxxxxxxxxxxxxxxx

> Successfully logged-in. Your session file was written to C:\\Users\\xxx\\AppData\\Local\\.code-push.config. You can run the code-push logout command at any time to delete this file and terminate your session.

\u9000\u51FA\u767B\u5F55\uFF1A\u6267\u884C\`$ code-push logout\`

> D:\\workspaces\\code-push-demo>code-push logout
> Successfully logged-out. The session file located at C:\\Users\\xxx\\AppData\\Local\\.code-push.config has been deleted.

\uFF083\uFF09\u521B\u5EFA\u5E94\u7528\u5230\u670D\u52A1\u5668\uFF0C\u6267\u884C\`$ code-push app add code-push-demo-android android cordova\`

\`\`\`
D:\\workspaces\\code-push-demo>code-push app add code-push-demo-android android cordova
Successfully added the "code-push-demo-android" app, along with the following default deployments:
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 Name       \u2502 Deployment Key             \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Production \u2502 YOUR-PRODUCTION-PUBLIC-KEY \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Staging    \u2502 YOUR-STAGING-PUBLIC-KEY    \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\`\`\`

\u6B64\u65F6\u6253\u5F00\u5E94\u7528\u4E2D\u5FC3[https://appcenter.ms/apps](https://appcenter.ms/apps)\uFF0C\u53EF\u4EE5\u67E5\u770B app \u76F8\u5173\u4FE1\u606F

\u66F4\u591A code-push \u547D\u4EE4\uFF1A

\`\`\`
Usage: code-push app <command>

Commands:
  add     Add a new app to your account
  remove  Remove an app from your account
  rm      Remove an app from your account
  rename  Rename an existing app
  list    Lists the apps associated with your account
  ls      Lists the apps associated with your account

Options:
  -v, --version  Show version number  [boolean]
\`\`\`

\uFF084\uFF09\u6DFB\u52A0\u63D2\u4EF6

> $ ionic cordova plugin add cordova-plugin-code-push
$ npm install --save @ionic-native/code-push

\uFF085\uFF09\u6267\u884C\`$ cordova plugin list\`\u68C0\u67E5\u9879\u76EE\u662F\u5426\u5B89\u88C5\u767D\u540D\u5355\u63D2\u4EF6 cordova-plugin-whitelist\uFF0C\u6CA1\u6709\u5B89\u88C5\u5219\u9700\u8981\u6DFB\u52A0\`cordova plugin add cordova-plugin-whitelist\`\u3002

> D:\\workspaces\\code-push-demo>cordova plugin list
> code-push 2.0.6 "CodePushAcquisition"
> cordova-plugin-code-push 1.11.13 "CodePush"
> cordova-plugin-compat 1.2.0 "Compat"
> cordova-plugin-device 1.1.4 "Device"
> cordova-plugin-dialogs 2.0.1 "Notification"
> cordova-plugin-file 4.3.3 "File"
> cordova-plugin-file-transfer 1.6.3 "File Transfer"
> cordova-plugin-ionic-webview 1.2.1 "cordova-plugin-ionic-webview"
> cordova-plugin-splashscreen 4.0.3 "Splashscreen"
> <span style="color: #ff4753">cordova-plugin-whitelist 1.3.1 "Whitelist"</span>
> cordova-plugin-zip 3.1.0 "cordova-plugin-zip"
> ionic-plugin-keyboard 2.2.1 "Keyboard"

\uFF086\uFF09\u68C0\u67E5 config.xml \u4E2D\u662F\u5426\u914D\u7F6E\uFF0C\u82E5\u6CA1\u6709\uFF0C\u5219\u52A0\u4E0A

\`\`\`xml
<access origin="*" />
\`\`\`

\u6216\u8005\u914D\u7F6E\u4E3A\uFF1A

\`\`\`xml
<access origin="https://codepush.azurewebsites.net" />
<access origin="https://codepush.blob.core.windows.net" />
<access origin="https://codepushupdates.azureedge.net" />
\`\`\`

\uFF087\uFF09\u914D\u7F6E public key\uFF0C\u5373\u670D\u52A1\u5668\u7AEF\u521B\u5EFA\u5E94\u7528\u65F6\u751F\u6210\u7684 key\uFF0C\u9ED8\u8BA4\u662F Staging

\`\`\`xml
<platform name="android">
   ...
   <preference name="CodePushStagingPublicKey" value="YOUR-STAGING-PUBLIC-KEY" />
</platform>
\`\`\`

\u4E0D\u914D\u7F6E key \u4F1A\u62A5\u9519\uFF1A

> [CodePush] Deployment key not found.. StackTrace: Error: Deployment key not found.

    at deploymentError (file:///android_asset/www/plugins/cordova-plugin-code-push/bin/www/nativeAppInfo.js:38:67)
    at Object.callbackFromNative (file:///android_asset/www/cordova.js:293:52)
    at processMessage (file:///android_asset/www/cordova.js:1114:17)
    at processMessages (file:///android_asset/www/cordova.js:1137:9)
    at t.invoke (file:///android_asset/www/build/polyfills.js:3:14976)
    at Object.onInvoke (file:///android_asset/www/build/vendor.js:4930:33)
    at t.invoke (file:///android_asset/www/build/polyfills.js:3:14916)
    at r.run (file:///android_asset/www/build/polyfills.js:3:10143)
    at file:///android_asset/www/build/polyfills.js:3:20242
    at t.invokeTask (file:///android_asset/www/build/polyfills.js:3:15660)

\uFF088\uFF09\u5728 app.module.ts \u4E2D\u58F0\u660E CodePush\uFF0C

\`\`\`js
...
import { CodePush } from "@ionic-native/code-push";

@NgModule({
  ...
  providers: [
    ...
    CodePush
  ]
})
export class AppModule {}
\`\`\`

\u5728 app.component.ts \u4E2D\u8C03\u7528\u540C\u6B65\u65B9\u6CD5 codePush.sync()\uFF1A

\`\`\`js
...
import { CodePush } from '@ionic-native/code-push';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
  	...
  	codePush: CodePush
  ) {
    platform.ready().then(() => {
      ...
      codePush.sync().subscribe(syncStatus => {
        console.log(syncStatus);
      });
    });
  }
}
\`\`\`

\u5B89\u88C5 app\uFF0C\u4FEE\u6539\u9879\u76EE\u6587\u4EF6\uFF0C\u6267\u884C\`ionic serve\`\u66F4\u65B0 www\uFF0C\u6267\u884C\`$ code-push release-cordova code-push-demo-android android --des "\u4FEE\u6539Page\u6587\u5B57"\`\u53D1\u5E03\u66F4\u65B0\u3002

\uFF089\uFF09\u67E5\u770B\u66F4\u65B0\u4FE1\u606F\uFF1A\`$ code-push deployment list code-push-demo-android\`

\`\`\`
D:\\workspaces\\code-push-demo>code-push deployment list code-push-demo-android
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 Name       \u2502 Update Metadata           \u2502 Install Metrics       \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Production \u2502 No updates released       \u2502 No installs recorded  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Staging    \u2502 Label: v1                 \u2502 Active: 100% (1 of 1) \u2502
\u2502            \u2502 App Version: 0.0.1        \u2502 Total: 1              \u2502
\u2502            \u2502 Mandatory: No             \u2502                       \u2502
\u2502            \u2502 Release Time: 3 days ago  \u2502                       \u2502
\u2502            \u2502 Released By:              \u2502                       \u2502
\u2502            \u2502 Description: \u4FEE\u6539Page\u6587\u5B57  \u2502                       \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\`\`\`

\u76F8\u5173\u6587\u6863:

https://github.com/nordnet/cordova-hot-code-push

https://github.com/nordnet/cordova-hot-code-push-cli

https://github.com/Microsoft/cordova-plugin-code-push

\u793A\u4F8B\u4EE3\u7801\uFF1A

https://github.com/chenqiuling/code-push-demo

https://github.com/chenqiuling/hot-code-push-demo
`}}]);
