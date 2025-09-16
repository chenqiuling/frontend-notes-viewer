"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[2693],{75303:function(i,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

JSBridge\uFF08JavaScript Bridge\uFF09\u662F\u4E00\u79CD**\u5B9E\u73B0 JavaScript \u4E0E\u539F\u751F\u5E94\u7528\uFF08\u5982 Android/iOS\uFF09\u53CC\u5411\u901A\u4FE1\u7684\u673A\u5236**\uFF0C\u4E3B\u8981\u7528\u4E8E\u6DF7\u5408\u5F00\u53D1\uFF08Hybrid App\uFF09\u4E2D Web \u9875\u9762\uFF08H5\uFF09\u4E0E\u539F\u751F\u529F\u80FD\u7684\u4EA4\u4E92\u3002\u5176\u6838\u5FC3\u539F\u7406\u662F\u901A\u8FC7 WebView \u4F5C\u4E3A\u6865\u6881\uFF0C\u5EFA\u7ACB JS \u4E0E Native \u4EE3\u7801\u7684\u901A\u4FE1\u901A\u9053\u3002

---

### **\u4E00\u3001JSBridge \u7684\u6838\u5FC3\u4F5C\u7528**

1. **JavaScript \u8C03\u7528 Native**  
   H5 \u9875\u9762\u89E6\u53D1\u539F\u751F\u529F\u80FD\uFF08\u5982\u6444\u50CF\u5934\u3001\u5B9A\u4F4D\u3001\u672C\u5730\u5B58\u50A8\u7B49\uFF09\u3002
2. **Native \u8C03\u7528 JavaScript**  
   \u539F\u751F\u4EE3\u7801\u5411 H5 \u4F20\u9012\u6570\u636E\u6216\u6267\u884C JS \u51FD\u6570\uFF08\u5982\u7528\u6237\u767B\u5F55\u72B6\u6001\u66F4\u65B0\uFF09\u3002

---

### **\u4E8C\u3001\u5B9E\u73B0\u539F\u7406**

JSBridge \u57FA\u4E8E **WebView \u7684\u901A\u4FE1\u80FD\u529B**\u5B9E\u73B0\uFF0C\u5177\u4F53\u5206\u4E3A\u4E24\u79CD\u4E3B\u6D41\u65B9\u6848\uFF1A

#### **1. \u62E6\u622A URL Scheme\uFF08\u6700\u5E38\u7528\uFF09**

- **\u539F\u7406**\uFF1A  
  JS \u901A\u8FC7\u4FEE\u6539 \`iframe.src\` \u6216 \`location.href\` \u53D1\u9001\u4E00\u4E2A**\u81EA\u5B9A\u4E49\u534F\u8BAE**\u7684 URL \u8BF7\u6C42\uFF08\u5982 \`jsbridge://methodName?params=xxx\`\uFF09\uFF0CWebView \u62E6\u622A\u8BE5\u8BF7\u6C42\u5E76\u89E3\u6790\u51FA\u6307\u4EE4\uFF0C\u6267\u884C\u5BF9\u5E94\u7684\u539F\u751F\u529F\u80FD\u3002
- **\u793A\u4F8B\u6D41\u7A0B**\uFF1A
  \`\`\`javascript
  // JS \u53D1\u9001\u8BF7\u6C42
  const iframe = document.createElement('iframe');
  iframe.src = 'jsbridge://getLocation?lat=30.11&lng=120.22'; // \u81EA\u5B9A\u4E49\u534F\u8BAE
  document.body.appendChild(iframe);
  setTimeout(() => document.body.removeChild(iframe), 0);
  \`\`\`
  \`\`\`java
  // Android \u62E6\u622A\u8BF7\u6C42\uFF08WebViewClient\uFF09
  public boolean shouldOverrideUrlLoading(WebView view, String url) {
      if (url.startsWith("jsbridge://")) {
          parseCommand(url); // \u89E3\u6790\u5E76\u6267\u884C\u539F\u751F\u65B9\u6CD5
          return true; // \u62E6\u622A\u8BF7\u6C42
      }
      return false;
  }
  \`\`\`

#### **2. \u6CE8\u5165\u5168\u5C40 API**

- **\u539F\u7406**\uFF1A  
  \u539F\u751F\u7AEF\u5411 WebView \u7684 JS \u4E0A\u4E0B\u6587\u6CE8\u5165\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61\uFF08\u5982 \`window.JSBridge\`\uFF09\uFF0CJS \u76F4\u63A5\u8C03\u7528\u8BE5\u5BF9\u8C61\u7684\u65B9\u6CD5\u3002
- **\u793A\u4F8B\u6D41\u7A0B**\uFF1A
  \`\`\`javascript
  // JS \u8C03\u7528\u539F\u751F\u65B9\u6CD5
  window.JSBridge.getLocation(params, result => {
    console.log('\u4F4D\u7F6E\u7ED3\u679C:', result);
  });
  \`\`\`
  \`\`\`swift
  // iOS (WKWebView) \u6CE8\u5165\u5BF9\u8C61
  class JSBridgeHandler: NSObject, WKScriptMessageHandler {
      func userContentController(_ controller: WKUserContentController, didReceive message: WKScriptMessage) {
          if message.name == "JSBridge" {
              handleMessage(message.body) // \u5904\u7406 JS \u8BF7\u6C42
          }
      }
  }
  // \u6CE8\u5165\u5230 WebView
  webView.configuration.userContentController.add(JSBridgeHandler(), name: "JSBridge")
  \`\`\`

---

### **\u4E09\u3001\u5B8C\u6574\u53CC\u5411\u901A\u4FE1\u6D41\u7A0B**

\u4EE5 **JS \u8C03\u7528 Native \u5E76\u63A5\u6536\u56DE\u8C03** \u4E3A\u4F8B\uFF1A

1. **JS \u53D1\u8D77\u8BF7\u6C42**\uFF1A  
   JS \u751F\u6210\u552F\u4E00 \`callbackId\`\uFF0C\u5C06\u8BF7\u6C42\u548C\u56DE\u8C03\u51FD\u6570\u6682\u5B58\uFF0C\u901A\u8FC7 URL Scheme \u6216\u5168\u5C40 API \u53D1\u9001\u7ED9 Native\u3002
   \`\`\`javascript
   window.JSBridge.callNative('scanQRCode', { type: 'login' }, data => {
     alert('\u626B\u63CF\u7ED3\u679C: ' + data);
   });
   \`\`\`
2. **Native \u5904\u7406\u8BF7\u6C42**\uFF1A  
   \u89E3\u6790\u53C2\u6570\uFF0C\u6267\u884C\u626B\u7801\u529F\u80FD\uFF0C\u5B8C\u6210\u540E\u901A\u8FC7 WebView \u6267\u884C JS \u56DE\u8C03\u51FD\u6570\u3002
   \`\`\`java
   // Android \u6267\u884C\u56DE\u8C03
   webView.evaluateJavascript("window.JSBridge.invokeCallback('callbackId123', '\u626B\u7801\u7ED3\u679C');", null);
   \`\`\`
3. **JS \u6267\u884C\u56DE\u8C03**\uFF1A  
   \u6839\u636E \`callbackId\` \u627E\u5230\u6682\u5B58\u7684\u56DE\u8C03\u51FD\u6570\u5E76\u6267\u884C\u3002

---

### **\u56DB\u3001\u5B89\u5168\u4E0E\u4F18\u5316**

1. **\u534F\u8BAE\u767D\u540D\u5355**\uFF1A  
   \u907F\u514D\u4EFB\u610F URL \u88AB\u62E6\u622A\uFF0C\u53EA\u5904\u7406\u6307\u5B9A\u534F\u8BAE\uFF08\u5982 \`jsbridge://\`\uFF09\u3002
2. **\u9632\u91CD\u590D\u6CE8\u5165**\uFF1A  
   \u901A\u8FC7 \`window.JSBridge\` \u662F\u5426\u5DF2\u5B58\u5728\u5224\u65AD\u6CE8\u5165\u72B6\u6001\u3002
3. **\u901A\u4FE1\u683C\u5F0F\u89C4\u8303**\uFF1A  
   \u4F7F\u7528 JSON-RPC \u7B49\u6807\u51C6\u683C\u5F0F\u4F20\u9012\u6570\u636E\uFF1A
   \`\`\`json
   {
     "method": "getUserInfo",
     "callbackId": "cb_16383456789",
     "params": {}
   }
   \`\`\`
4. **\u517C\u5BB9\u6027\u5904\u7406**\uFF1A  
   \u540C\u65F6\u652F\u6301 URL Scheme \u548C\u5168\u5C40 API\uFF0C\u964D\u7EA7\u65B9\u6848\uFF08\u5982 Android 4.4 \u4EE5\u4E0B\u7528 \`prompt()\` \u901A\u4FE1\uFF09\u3002

---

### **\u4E94\u3001\u5F00\u6E90\u5E93\u63A8\u8350**

- **DSBridge**\uFF08Android/iOS\uFF09\uFF1A  
  \u652F\u6301\u540C\u6B65/\u5F02\u6B65\u8C03\u7528\uFF0C\u65E0\u56DE\u8C03 ID \u7BA1\u7406\u3002  
  [GitHub: dsbridge](https://github.com/wendux/DSBridge-Android)
- **WebViewJavascriptBridge**\uFF08iOS\uFF09\uFF1A  
  \u6210\u719F\u7684 iOS \u901A\u4FE1\u65B9\u6848\u3002  
  [GitHub: WebViewJavascriptBridge](https://github.com/marcuswestin/WebViewJavascriptBridge)

---

### **\u603B\u7ED3**

| **\u5173\u952E\u70B9**         | **\u8BF4\u660E**                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------- |
| **\u6838\u5FC3\u76EE\u7684**       | \u6253\u901A H5 \u4E0E\u539F\u751F\u529F\u80FD\uFF0C\u5B9E\u73B0\u6DF7\u5408\u5F00\u53D1\u3002                                                       |
| **JS \u8C03\u7528 Native** | \u901A\u8FC7 URL Scheme \u62E6\u622A\u6216\u6CE8\u5165\u5168\u5C40 API\u3002                                                     |
| **Native \u8C03\u7528 JS** | \u901A\u8FC7 \`webView.evaluateJavascript()\`\uFF08Android\uFF09\u6216 \`stringByEvaluatingJavaScript\`\uFF08iOS\uFF09\u3002 |
| **\u901A\u4FE1\u672C\u8D28**       | \u57FA\u4E8E\u5B57\u7B26\u4E32\u534F\u8BAE\u4F20\u9012\u6307\u4EE4\u548C\u56DE\u8C03 ID\u3002                                                        |
| **\u4F18\u5316\u65B9\u5411**       | \u534F\u8BAE\u5B89\u5168\u3001\u683C\u5F0F\u6807\u51C6\u5316\u3001\u517C\u5BB9\u6027\u3001\u6027\u80FD\u3002                                                     |

\u901A\u8FC7 JSBridge\uFF0C\u5F00\u53D1\u8005\u53EF\u5728\u4FDD\u6301 Web \u52A8\u6001\u66F4\u65B0\u7684\u540C\u65F6\uFF0C\u7075\u6D3B\u8C03\u7528\u539F\u751F\u80FD\u529B\uFF0C\u662F Hybrid App \u7684\u6838\u5FC3\u6280\u672F\u57FA\u7840\u3002
`}}]);
