"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[2563],{28429:function(t,n,o){o.r(n),n.default=`100 \u74F6\u6C34\u4E2D\u5305\u542B 1 \u74F6\u65E0\u8272\u65E0\u5473\u7684\u6BD2\u836F\uFF0C\u7528\u5B9E\u9A8C\u9F20\u6765\u8BD5\u836F\uFF0C\u6BD2\u836F 24 \u5C0F\u65F6\u540E\u624D\u4F1A\u53D1\u4F5C\uFF0C\u6700\u5C11\u9700\u8981\u591A\u5C11\u53EA\u5B9E\u9A8C\u9F20\u624D\u80FD\u5728 24 \u5C0F\u65F6\u5185\u627E\u51FA\u8FD9\u74F6\u6BD2\u836F\uFF1F

\u6BCF\u53EA\u5B9E\u9A8C\u9F20\u6709\u4E24\u79CD\u72B6\u6001\uFF1A\u751F\u6216\u8005\u6B7B\uFF0C\u6240\u4EE5n\u53EA\u5B9E\u9A8C\u9F20\u67092^n\u79CD\u72B6\u6001\u3002

2^6=64<100, 2^7=128>100, \u6240\u4EE5\u7406\u8BBA\u4E0A\u9700\u89817\u53EA\u5B9E\u9A8C\u9F20\u3002

\u5C06100\u74F6\u6C34\u6309\u4E8C\u8FDB\u5236\u7F16\u53F7\uFF080-99\uFF09
\`\`\`
// parseInt(num).toString(2)
0000000
0000001 
...
1100011
\`\`\`
- \u5982\u679C\u7F16\u53F7\u7684\u7B2C k \u4F4D\u662F 1\uFF0C\u5219\u5582\u7ED9\u7B2C k \u53EA\u5B9E\u9A8C\u9F20\uFF1B
- 24\u5C0F\u65F6\u540E\uFF0C\u89C2\u5BDF\u54EA\u4E9B\u5B9E\u9A8C\u9F20\u6B7B\u4E86\u3002\u6B7B\u7684\u5B9E\u9A8C\u9F20\u5BF9\u5E94\u7684\u4F4D\u4E3A1\uFF0C\u6D3B\u7684\u5BF9\u5E94\u7684\u4F4D\u4E3A0\uFF1B
- \u7EC4\u5408\u8D77\u6765\u7684\u4E8C\u8FDB\u5236\u6570\u5BF9\u5E94\u7684\u5C31\u662F\u6BD2\u836F\u7684\u4E8C\u8FDB\u5236\u7F16\u53F7\u3002

\`\`\`js
function findMinMice(bottles) {
    return Math.ceil(Math.log2(bottles));
}

function simulateExperiment(totalBottles) {
    const minMice = findMinMice(totalBottles);
    const poisonIndex = Math.floor(Math.random() * totalBottles);
    
    console.log(\`\u603B\u74F6\u5B50\u6570: \${totalBottles}\`);
    console.log(\`\u6BD2\u836F\u74F6\u7F16\u53F7: \${poisonIndex}\`);
    console.log(\`\u6240\u9700\u5B9E\u9A8C\u9F20\u6570\u91CF: \${minMice}\`);
    
    // \u5C06\u6BD2\u836F\u74F6\u7F16\u53F7\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u5B57\u7B26\u4E32\uFF08\u9AD8\u4F4D\u8865\u96F6\uFF09
    const binaryPoison = poisonIndex.toString(2).padStart(minMice, '0');
    console.log(\`\u6BD2\u836F\u74F6\u7684\u4E8C\u8FDB\u5236\u8868\u793A: \${binaryPoison}\`);
    
    // \u6A21\u62DF\u5B9E\u9A8C\u9F20\u6B7B\u4EA1\u60C5\u51B5\uFF08\u4E8C\u8FDB\u5236\u4F4D\u4E3A1\u5219\u6B7B\u4EA1\uFF09
    const miceDeath = Array.from(binaryPoison).map(bit => bit === '1');
    console.log(\`\u5B9E\u9A8C\u9F20\u6B7B\u4EA1\u60C5\u51B5: [\${miceDeath.map(status => status ? '\u6B7B' : '\u6D3B').join(', ')}]\`);
    
    // \u6839\u636E\u6B7B\u4EA1\u60C5\u51B5\u91CD\u5EFA\u6BD2\u836F\u74F6\u7F16\u53F7
    let calculatedPoison = 0;
    for (let i = 0; i < minMice; i++) {
        calculatedPoison = (calculatedPoison << 1) | (miceDeath[i] ? 1 : 0);
    }
    
    console.log(\`\u91CD\u5EFA\u7684\u6BD2\u836F\u74F6\u7F16\u53F7: \${calculatedPoison}\`);
    console.log(\`\u7ED3\u679C: \${calculatedPoison === poisonIndex ? '\u6210\u529F \u2705' : '\u5931\u8D25 \u274C'}\`);
    
    return {
        totalBottles,
        minMice,
        poisonIndex,
        calculatedPoison,
        success: calculatedPoison === poisonIndex
    };
}

// \u6D4B\u8BD5 100 \u74F6\u6C34
simulateExperiment(100);
\`\`\``}}]);
