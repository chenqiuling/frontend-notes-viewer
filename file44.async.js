"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[2385],{34264:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

\u4F7F\u7528 Web Worker \u5904\u7406\u590D\u6742\u8BA1\u7B97\uFF0C\u907F\u514D\u963B\u585E\u4E3B\u7EBF\u7A0B\uFF0C\u4FDD\u6301\u9875\u9762\u6D41\u7545\u54CD\u5E94\u3002

## Web Worker \u6838\u5FC3\u6982\u5FF5

### 1. Web Worker \u7684\u521B\u5EFA

\`\`\`javascript
// \u521B\u5EFA Web Worker
const worker = new Worker(URL.createObjectURL(
  new Blob([workerCode], {type: 'text/javascript'})
);
\`\`\`

### 2. \u4E3B\u7EBF\u7A0B\u4E0E Worker \u901A\u4FE1

**\u4E3B\u7EBF\u7A0B\u53D1\u9001\u6D88\u606F\uFF1A**
\`\`\`javascript
worker.postMessage({
  type: 'process',
  imageData: imageData,
  intensity: 50
});
\`\`\`

**Worker \u63A5\u6536\u6D88\u606F\uFF1A**
\`\`\`javascript
self.onmessage = function(e) {
  const data = e.data;
  // \u5904\u7406\u6570\u636E...
};
\`\`\`

**Worker \u53D1\u9001\u7ED3\u679C\uFF1A**
\`\`\`javascript
self.postMessage({
  type: 'result',
  processedData: result
});
\`\`\`

**\u4E3B\u7EBF\u7A0B\u63A5\u6536\u7ED3\u679C\uFF1A**
\`\`\`javascript
worker.onmessage = function(e) {
  if (e.data.type === 'result') {
    // \u66F4\u65B0UI
  }
};
\`\`\`

### 3. \u6570\u636E\u4F20\u8F93\u4F18\u5316

\u4F7F\u7528 Transferable Objects \u907F\u514D\u6570\u636E\u62F7\u8D1D\uFF1A
\`\`\`javascript
// \u4E3B\u7EBF\u7A0B\u53D1\u9001\u6570\u636E
worker.postMessage(
  { imageData: imageData }, 
  [imageData.data.buffer] // \u4F20\u8F93 ArrayBuffer
);
\`\`\`

### 4. \u9519\u8BEF\u5904\u7406

\`\`\`javascript
// Worker \u9519\u8BEF\u5904\u7406
worker.onerror = function(error) {
  console.error('Worker \u9519\u8BEF:', error);
  updateWorkerStatus(false);
};
\`\`\`

## \u4F7F\u7528 Web Worker \u7684\u6700\u4F73\u5B9E\u8DF5

### 1. \u9002\u5408\u4F7F\u7528 Worker \u7684\u573A\u666F

| \u573A\u666F | \u8BF4\u660E | \u793A\u4F8B |
|------|------|------|
| **\u56FE\u50CF/\u89C6\u9891\u5904\u7406** | \u50CF\u7D20\u7EA7\u64CD\u4F5C | \u6EE4\u955C\u3001\u8F6C\u6362\u3001\u4EBA\u8138\u8BC6\u522B |
| **\u5927\u578B\u6570\u636E\u96C6\u5904\u7406** | \u6570\u636E\u5206\u6790 | CSV/JSON \u89E3\u6790\u3001\u6570\u636E\u805A\u5408 |
| **\u590D\u6742\u7B97\u6CD5** | \u8BA1\u7B97\u5BC6\u96C6\u578B\u4EFB\u52A1 | \u52A0\u5BC6\u3001\u7269\u7406\u6A21\u62DF\u3001\u8DEF\u5F84\u67E5\u627E |
| **\u5B9E\u65F6\u6570\u636E\u5904\u7406** | \u9AD8\u9891\u8BA1\u7B97 | \u4F20\u611F\u5668\u6570\u636E\u3001\u97F3\u9891\u5904\u7406 |
| **\u673A\u5668\u5B66\u4E60** | \u6A21\u578B\u63A8\u7406 | TensorFlow.js \u6A21\u578B\u8FD0\u7B97 |

### 2. Worker \u4F7F\u7528\u6CE8\u610F\u4E8B\u9879

1. **\u6570\u636E\u4F20\u8F93\u6210\u672C**\uFF1A
   - \u907F\u514D\u9891\u7E41\u53D1\u9001\u5927\u91CF\u6570\u636E
   - \u4F7F\u7528 Transferable Objects \u51CF\u5C11\u62F7\u8D1D

2. **\u8D44\u6E90\u7BA1\u7406**\uFF1A
   - \u53CA\u65F6\u7EC8\u6B62\u4E0D\u518D\u9700\u8981\u7684 Worker
   \`\`\`javascript
   worker.terminate();
   \`\`\`

3. **\u4F9D\u8D56\u52A0\u8F7D**\uFF1A
   - \u5728 Worker \u4E2D\u4F7F\u7528 \`importScripts()\` \u52A0\u8F7D\u5916\u90E8\u811A\u672C
   \`\`\`javascript
   importScripts('library.js');
   \`\`\`

4. **\u9519\u8BEF\u5904\u7406**\uFF1A
   - \u59CB\u7EC8\u5904\u7406 Worker \u9519\u8BEF
   - \u6DFB\u52A0\u8D85\u65F6\u673A\u5236

### 3. \u9AD8\u7EA7\u6A21\u5F0F

**Worker \u6C60\u6A21\u5F0F\uFF1A**
\`\`\`javascript
class WorkerPool {
  constructor(poolSize, workerScript) {
    this.pool = [];
    this.queue = [];
    
    for (let i = 0; i < poolSize; i++) {
      const worker = new Worker(workerScript);
      worker.busy = false;
      this.pool.push(worker);
    }
  }
  
  execute(task) {
    return new Promise((resolve) => {
      const worker = this.getAvailableWorker();
      
      if (worker) {
        this.runTask(worker, task, resolve);
      } else {
        this.queue.push({ task, resolve });
      }
    });
  }
  
  getAvailableWorker() {
    return this.pool.find(worker => !worker.busy);
  }
  
  runTask(worker, task, resolve) {
    worker.busy = true;
    
    worker.onmessage = (e) => {
      worker.busy = false;
      resolve(e.data);
      
      if (this.queue.length > 0) {
        const nextTask = this.queue.shift();
        this.runTask(worker, nextTask.task, nextTask.resolve);
      }
    };
    
    worker.postMessage(task);
  }
}

// \u4F7F\u7528
const pool = new WorkerPool(4, 'worker.js');
pool.execute({ data: largeDataSet }).then(result => {
  // \u5904\u7406\u7ED3\u679C
});
\`\`\`

## \u6027\u80FD\u5BF9\u6BD4\uFF1A\u4E3B\u7EBF\u7A0B vs Web Worker

| \u6307\u6807 | \u4E3B\u7EBF\u7A0B | Web Worker |
|------|--------|------------|
| **UI \u54CD\u5E94\u6027** | \u963B\u585E | \u65E0\u5F71\u54CD |
| **\u8BA1\u7B97\u901F\u5EA6** | \u53D7UI\u5F71\u54CD | \u7A33\u5B9A |
| **CPU \u5229\u7528\u7387** | \u5355\u6838 | \u591A\u6838 |
| **\u5185\u5B58\u4F7F\u7528** | \u5171\u4EAB | \u9694\u79BB |
| **\u590D\u6742\u4EFB\u52A1** | \u5361\u987F | \u6D41\u7545 |

## Web Worker \u7684\u6D4F\u89C8\u5668\u652F\u6301

\u6240\u6709\u73B0\u4EE3\u6D4F\u89C8\u5668\u90FD\u652F\u6301 Web Worker\uFF1A

- Chrome 4+ (2010)
- Firefox 3.5+ (2009)
- Safari 4+ (2009)
- Edge 12+ (2015)
- Opera 10.6+ (2010)


## \u5B8C\u6574\u793A\u4F8B\uFF1A\u56FE\u50CF\u5904\u7406\u5E94\u7528

\`\`\`html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Worker \u56FE\u50CF\u5904\u7406\u6F14\u793A</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1a2a6c, #b21f1f, #1a2a6c);
            color: white;
            min-height: 100vh;
            padding: 20px;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 30px;
            background: rgba(0, 0, 0, 0.6);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }
        
        header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        }
        
        h1 {
            font-size: 2.8rem;
            margin-bottom: 15px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 40px;
        }
        
        @media (max-width: 768px) {
            .content {
                grid-template-columns: 1fr;
            }
        }
        
        .panel {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .panel h2 {
            font-size: 1.8rem;
            margin-bottom: 20px;
            color: #ffcc00;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .image-container {
            position: relative;
            height: 300px;
            border-radius: 8px;
            overflow: hidden;
            margin: 20px 0;
            background: #000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        canvas {
            max-width: 100%;
            max-height: 100%;
        }
        
        .controls {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
        .btn {
            background: #ff5722;
            color: white;
            padding: 12px;
            border-radius: 8px;
            text-decoration: none;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        
        .btn:hover {
            background: #ff7043;
            transform: translateY(-2px);
        }
        
        .btn:active {
            transform: translateY(1px);
        }
        
        .btn-secondary {
            background: #2196f3;
        }
        
        .btn-success {
            background: #4caf50;
        }
        
        .btn-disabled {
            background: #666;
            cursor: not-allowed;
        }
        
        .slider-container {
            margin: 15px 0;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
        }
        
        input[type="range"] {
            width: 100%;
            height: 8px;
            border-radius: 4px;
            background: #444;
            outline: none;
        }
        
        .status {
            display: flex;
            justify-content: space-between;
            margin-top: 5px;
            font-size: 0.9rem;
            color: #aaa;
        }
        
        .progress-container {
            height: 8px;
            background: #333;
            border-radius: 4px;
            overflow: hidden;
            margin: 20px 0;
        }
        
        .progress-bar {
            height: 100%;
            background: #4caf50;
            width: 0%;
            transition: width 0.3s ease;
        }
        
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        
        .stat-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 20px;
            text-align: center;
        }
        
        .stat-value {
            font-size: 2.5rem;
            font-weight: bold;
            margin: 10px 0;
            color: #4caf50;
        }
        
        .explanation {
            margin-top: 30px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
        }
        
        .explanation h2 {
            margin-bottom: 15px;
            color: #ffcc00;
        }
        
        .comparison {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 20px;
        }
        
        .comparison-box {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 20px;
        }
        
        .comparison-box h3 {
            margin-bottom: 10px;
            color: #ffcc00;
        }
        
        .highlight {
            color: #ffcc00;
            font-weight: bold;
        }
        
        .worker-status {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
            padding: 10px;
            border-radius: 8px;
            background: rgba(0, 0, 0, 0.3);
        }
        
        .status-indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #666;
        }
        
        .status-indicator.active {
            background: #4caf50;
            box-shadow: 0 0 8px #4caf50;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Web Worker \u590D\u6742\u8BA1\u7B97\u6F14\u793A</h1>
            <p class="subtitle">\u4F7F\u7528 Web Worker \u5904\u7406\u56FE\u50CF\u5904\u7406\u7B49\u5BC6\u96C6\u578B\u8BA1\u7B97\uFF0C\u907F\u514D\u963B\u585E\u4E3B\u7EBF\u7A0B</p>
        </header>
        
        <div class="content">
            <div class="panel">
                <h2>\u{1F5BC}\uFE0F \u539F\u59CB\u56FE\u50CF</h2>
                <div class="image-container">
                    <canvas id="original-canvas" width="400" height="300"></canvas>
                </div>
                <div class="controls">
                    <input type="file" id="image-upload" accept="image/*" class="btn btn-secondary">
                    <button id="generate-btn" class="btn btn-success">\u751F\u6210\u968F\u673A\u56FE\u50CF</button>
                </div>
            </div>
            
            <div class="panel">
                <h2>\u{1F3A8} \u5904\u7406\u540E\u7684\u56FE\u50CF</h2>
                <div class="image-container">
                    <canvas id="processed-canvas" width="400" height="300"></canvas>
                </div>
                <div class="slider-container">
                    <label for="effect-intensity">\u6548\u679C\u5F3A\u5EA6: <span id="intensity-value">50</span>%</label>
                    <input type="range" id="effect-intensity" min="0" max="100" value="50">
                </div>
                <div class="controls">
                    <button id="process-main-btn" class="btn">\u4E3B\u7EBF\u7A0B\u5904\u7406</button>
                    <button id="process-worker-btn" class="btn btn-secondary">Worker \u5904\u7406</button>
                </div>
                <div class="progress-container">
                    <div class="progress-bar" id="progress-bar"></div>
                </div>
                <div class="worker-status">
                    <div class="status-indicator" id="worker-status"></div>
                    <div id="status-text">Worker \u672A\u542F\u52A8</div>
                </div>
            </div>
        </div>
        
        <div class="stats">
            <div class="stat-card">
                <div>\u5904\u7406\u65F6\u95F4 (\u4E3B\u7EBF\u7A0B)</div>
                <div class="stat-value" id="main-time">0ms</div>
                <div>UI \u54CD\u5E94\u6027: <span id="main-responsiveness">\u826F\u597D</span></div>
            </div>
            
            <div class="stat-card">
                <div>\u5904\u7406\u65F6\u95F4 (Worker)</div>
                <div class="stat-value" id="worker-time">0ms</div>
                <div>UI \u54CD\u5E94\u6027: <span id="worker-responsiveness">\u4F18\u79C0</span></div>
            </div>
            
            <div class="stat-card">
                <div>\u50CF\u7D20\u5904\u7406\u901F\u5EA6</div>
                <div class="stat-value" id="pixel-rate">0</div>
                <div>\u767E\u4E07\u50CF\u7D20/\u79D2</div>
            </div>
            
            <div class="stat-card">
                <div>Worker \u72B6\u6001</div>
                <div class="stat-value" id="worker-state">\u7A7A\u95F2</div>
                <div>\u4F7F\u7528\u5185\u5B58: <span id="memory-usage">0MB</span></div>
            </div>
        </div>
        
        <div class="explanation">
            <h2>\u{1F4DA} Web Worker \u5DE5\u4F5C\u539F\u7406</h2>
            <p>Web Worker \u5141\u8BB8\u5728\u540E\u53F0\u7EBF\u7A0B\u4E2D\u8FD0\u884C JavaScript\uFF0C\u4E0D\u963B\u585E\u4E3B\u7EBF\u7A0B\uFF1A</p>
            
            <div class="comparison">
                <div class="comparison-box">
                    <h3>\u4E3B\u7EBF\u7A0B\u5904\u7406\u7684\u95EE\u9898</h3>
                    <ul>
                        <li>\u590D\u6742\u8BA1\u7B97\u4F1A<span class="highlight">\u963B\u585E UI \u6E32\u67D3</span></li>
                        <li>\u7528\u6237\u4EA4\u4E92<span class="highlight">\u65E0\u54CD\u5E94</span></li>
                        <li>\u52A8\u753B<span class="highlight">\u5361\u987F\u6389\u5E27</span></li>
                        <li>\u65E0\u6CD5\u5145\u5206\u5229\u7528<span class="highlight">\u591A\u6838 CPU</span></li>
                    </ul>
                </div>
                
                <div class="comparison-box">
                    <h3>Web Worker \u7684\u4F18\u52BF</h3>
                    <ul>
                        <li>\u4FDD\u6301\u4E3B\u7EBF\u7A0B<span class="highlight">\u54CD\u5E94\u6D41\u7545</span></li>
                        <li>\u5145\u5206\u5229\u7528<span class="highlight">\u591A\u6838\u5904\u7406\u5668</span></li>
                        <li>\u540E\u53F0\u6267\u884C<span class="highlight">\u957F\u65F6\u95F4\u4EFB\u52A1</span></li>
                        <li>\u901A\u8FC7<span class="highlight">\u6D88\u606F\u4F20\u9012</span>\u4E0E\u4E3B\u7EBF\u7A0B\u901A\u4FE1</li>
                    </ul>
                </div>
            </div>
            
            <h3 style="margin-top: 20px;">\u901A\u4FE1\u673A\u5236</h3>
            <pre style="background: #2d2d2d; padding: 15px; border-radius: 8px; margin-top: 10px; overflow-x: auto;">
// \u4E3B\u7EBF\u7A0B\u53D1\u9001\u6D88\u606F\u7ED9 Worker
worker.postMessage({
  type: 'process',
  imageData: imageData,
  intensity: 50
});

// Worker \u63A5\u6536\u6D88\u606F
self.onmessage = function(e) {
  const data = e.data;
  // \u5904\u7406\u6570\u636E...
  
  // \u53D1\u9001\u7ED3\u679C\u56DE\u4E3B\u7EBF\u7A0B
  self.postMessage({
    type: 'result',
    processedData: result
  });
};

// \u4E3B\u7EBF\u7A0B\u63A5\u6536\u7ED3\u679C
worker.onmessage = function(e) {
  if (e.data.type === 'result') {
    // \u66F4\u65B0UI
  }
};</pre>
        </div>
    </div>

    <script>
        // \u521D\u59CB\u5316\u53D8\u91CF
        const originalCanvas = document.getElementById('original-canvas');
        const processedCanvas = document.getElementById('processed-canvas');
        const originalCtx = originalCanvas.getContext('2d');
        const processedCtx = processedCanvas.getContext('2d');
        const intensitySlider = document.getElementById('effect-intensity');
        const intensityValue = document.getElementById('intensity-value');
        const progressBar = document.getElementById('progress-bar');
        const workerStatus = document.getElementById('worker-status');
        const statusText = document.getElementById('status-text');
        
        // \u521B\u5EFAWeb Worker
        const worker = new Worker(URL.createObjectURL(new Blob([\`
            // \u56FE\u50CF\u5904\u7406\u51FD\u6570 - \u4F7F\u7528\u50CF\u7D20\u64CD\u4F5C\u521B\u5EFA\u7279\u6548
            function applyEffect(imageData, intensity) {
                const data = imageData.data;
                const intensityFactor = intensity / 100;
                
                for (let i = 0; i < data.length; i += 4) {
                    // \u83B7\u53D6\u50CF\u7D20\u7684RGB\u503C
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];
                    
                    // \u5E94\u7528\u7279\u6548 - \u8FD9\u91CC\u4F7F\u7528\u591A\u79CD\u6548\u679C\u7EC4\u5408
                    let nr = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189));
                    let ng = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168));
                    let nb = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131));
                    
                    // \u6DFB\u52A0\u68D5\u8910\u8272\u8C03
                    const sepiaR = Math.min(255, (r * 0.3588) + (g * 0.7044) + (b * 0.1368));
                    const sepiaG = Math.min(255, (r * 0.2990) + (g * 0.5870) + (b * 0.1140));
                    const sepiaB = Math.min(255, (r * 0.2392) + (g * 0.4696) + (b * 0.0912));
                    
                    // \u6DF7\u5408\u6548\u679C
                    nr = nr * intensityFactor + r * (1 - intensityFactor);
                    ng = ng * intensityFactor + g * (1 - intensityFactor);
                    nb = nb * intensityFactor + b * (1 - intensityFactor);
                    
                    // \u66F4\u65B0\u50CF\u7D20\u6570\u636E
                    data[i] = nr;     // \u7EA2\u8272\u901A\u9053
                    data[i + 1] = ng; // \u7EFF\u8272\u901A\u9053
                    data[i + 2] = nb; // \u84DD\u8272\u901A\u9053
                    
                    // \u6BCF\u5904\u74061000\u4E2A\u50CF\u7D20\u62A5\u544A\u4E00\u6B21\u8FDB\u5EA6
                    if (i % 4000 === 0) {
                        const progress = Math.floor((i / data.length) * 100);
                        self.postMessage({
                            type: 'progress',
                            progress: progress
                        });
                    }
                }
                
                return imageData;
            }
            
            // \u76D1\u542C\u6765\u81EA\u4E3B\u7EBF\u7A0B\u7684\u6D88\u606F
            self.onmessage = function(e) {
                const data = e.data;
                
                if (data.type === 'process') {
                    const startTime = performance.now();
                    
                    // \u5904\u7406\u56FE\u50CF
                    const processedData = applyEffect(data.imageData, data.intensity);
                    
                    const endTime = performance.now();
                    const duration = endTime - startTime;
                    const pixelCount = data.imageData.width * data.imageData.height;
                    const rate = Math.round((pixelCount / (duration / 1000)) / 1000000);
                    
                    // \u53D1\u9001\u7ED3\u679C\u56DE\u4E3B\u7EBF\u7A0B
                    self.postMessage({
                        type: 'result',
                        processedData: processedData,
                        duration: duration,
                        pixelRate: rate
                    });
                }
            };
        \`], { type: 'text/javascript' })));
        
        // \u66F4\u65B0Worker\u72B6\u6001\u663E\u793A
        function updateWorkerStatus(active) {
            workerStatus.classList.toggle('active', active);
            statusText.textContent = active ? 'Worker \u5904\u7406\u4E2D...' : 'Worker \u7A7A\u95F2';
        }
        
        // \u5904\u7406Worker\u6D88\u606F
        worker.onmessage = function(e) {
            const data = e.data;
            
            if (data.type === 'progress') {
                progressBar.style.width = data.progress + '%';
            }
            else if (data.type === 'result') {
                // \u663E\u793A\u5904\u7406\u540E\u7684\u56FE\u50CF
                processedCtx.putImageData(data.processedData, 0, 0);
                
                // \u66F4\u65B0\u7EDF\u8BA1\u4FE1\u606F
                document.getElementById('worker-time').textContent = 
                    Math.round(data.duration) + 'ms';
                document.getElementById('pixel-rate').textContent = 
                    data.pixelRate;
                document.getElementById('worker-responsiveness').textContent = '\u4F18\u79C0';
                document.getElementById('worker-state').textContent = '\u7A7A\u95F2';
                
                // \u66F4\u65B0\u5185\u5B58\u4F7F\u7528\uFF08\u6A21\u62DF\uFF09
                const memory = Math.round(Math.random() * 50) + 10;
                document.getElementById('memory-usage').textContent = memory + 'MB';
                
                updateWorkerStatus(false);
                progressBar.style.width = '100%';
                
                // \u77ED\u6682\u5EF6\u8FDF\u540E\u91CD\u7F6E\u8FDB\u5EA6\u6761
                setTimeout(() => {
                    progressBar.style.width = '0%';
                }, 1000);
            }
        };
        
        // \u751F\u6210\u968F\u673A\u56FE\u50CF
        function generateRandomImage() {
            const width = 400;
            const height = 300;
            const imageData = originalCtx.createImageData(width, height);
            const data = imageData.data;
            
            // \u521B\u5EFA\u968F\u673A\u50CF\u7D20
            for (let i = 0; i < data.length; i += 4) {
                // \u968F\u673A\u989C\u8272
                data[i] = Math.floor(Math.random() * 256);     // R
                data[i + 1] = Math.floor(Math.random() * 256); // G
                data[i + 2] = Math.floor(Math.random() * 256); // B
                data[i + 3] = 255; // Alpha
            }
            
            originalCtx.putImageData(imageData, 0, 0);
            processedCtx.clearRect(0, 0, processedCanvas.width, processedCanvas.height);
            
            return imageData;
        }
        
        // \u52A0\u8F7D\u4E0A\u4F20\u7684\u56FE\u50CF
        function loadUploadedImage(file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    // \u8C03\u6574\u753B\u5E03\u5C3A\u5BF8
                    originalCanvas.width = img.width;
                    originalCanvas.height = img.height;
                    processedCanvas.width = img.width;
                    processedCanvas.height = img.height;
                    
                    // \u7ED8\u5236\u56FE\u50CF
                    originalCtx.drawImage(img, 0, 0);
                    processedCtx.clearRect(0, 0, processedCanvas.width, processedCanvas.height);
                };
                img.src = e.target.result;
            };
            
            reader.readAsDataURL(file);
        }
        
        // \u5728\u4E3B\u7EBF\u7A0B\u4E2D\u5904\u7406\u56FE\u50CF
        function processInMainThread() {
            const startTime = performance.now();
            
            // \u83B7\u53D6\u539F\u59CB\u56FE\u50CF\u6570\u636E
            const imageData = originalCtx.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
            const intensity = parseInt(intensitySlider.value);
            const data = imageData.data;
            
            // \u6A21\u62DFUI\u963B\u585E
            document.getElementById('main-responsiveness').textContent = '\u963B\u585E\u4E2D';
            document.body.style.cursor = 'wait';
            
            // \u5E94\u7528\u6548\u679C\uFF08\u540CWorker\u4E2D\u7684\u7B97\u6CD5\uFF09
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                const intensityFactor = intensity / 100;
                
                let nr = Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189));
                let ng = Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168));
                let nb = Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131));
                
                nr = nr * intensityFactor + r * (1 - intensityFactor);
                ng = ng * intensityFactor + g * (1 - intensityFactor);
                nb = nb * intensityFactor + b * (1 - intensityFactor);
                
                data[i] = nr;
                data[i + 1] = ng;
                data[i + 2] = nb;
            }
            
            // \u663E\u793A\u5904\u7406\u540E\u7684\u56FE\u50CF
            processedCtx.putImageData(imageData, 0, 0);
            
            const endTime = performance.now();
            const duration = endTime - startTime;
            
            // \u66F4\u65B0\u7EDF\u8BA1\u4FE1\u606F
            document.getElementById('main-time').textContent = Math.round(duration) + 'ms';
            document.getElementById('main-responsiveness').textContent = '\u6062\u590D';
            document.body.style.cursor = 'default';
            
            // \u8BA1\u7B97\u50CF\u7D20\u5904\u7406\u901F\u7387
            const pixelCount = originalCanvas.width * originalCanvas.height;
            const rate = Math.round((pixelCount / (duration / 1000)) / 1000000);
            document.getElementById('pixel-rate').textContent = rate;
        }
        
        // \u5728Worker\u4E2D\u5904\u7406\u56FE\u50CF
        function processInWorker() {
            // \u83B7\u53D6\u539F\u59CB\u56FE\u50CF\u6570\u636E
            const imageData = originalCtx.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
            const intensity = parseInt(intensitySlider.value);
            
            // \u66F4\u65B0\u72B6\u6001
            updateWorkerStatus(true);
            document.getElementById('worker-state').textContent = '\u5904\u7406\u4E2D';
            document.getElementById('worker-responsiveness').textContent = '\u4F18\u79C0';
            
            // \u53D1\u9001\u5904\u7406\u8BF7\u6C42\u7ED9Worker
            worker.postMessage({
                type: 'process',
                imageData: imageData,
                intensity: intensity
            }, [imageData.data.buffer]);
        }
        
        // \u4E8B\u4EF6\u76D1\u542C\u5668
        document.getElementById('image-upload').addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                loadUploadedImage(e.target.files[0]);
            }
        });
        
        document.getElementById('generate-btn').addEventListener('click', () => {
            generateRandomImage();
        });
        
        document.getElementById('process-main-btn').addEventListener('click', processInMainThread);
        document.getElementById('process-worker-btn').addEventListener('click', processInWorker);
        
        intensitySlider.addEventListener('input', () => {
            intensityValue.textContent = intensitySlider.value;
        });
        
        // \u521D\u59CB\u751F\u6210\u968F\u673A\u56FE\u50CF
        generateRandomImage();
        
        // \u521B\u5EFAUI\u54CD\u5E94\u6027\u6D4B\u8BD5
        setInterval(() => {
            const indicator = document.createElement('div');
            indicator.style.position = 'fixed';
            indicator.style.top = '10px';
            indicator.style.right = '10px';
            indicator.style.width = '10px';
            indicator.style.height = '10px';
            indicator.style.backgroundColor = '#4caf50';
            indicator.style.borderRadius = '50%';
            indicator.style.opacity = '0.8';
            document.body.appendChild(indicator);
            
            setTimeout(() => {
                document.body.removeChild(indicator);
            }, 1000);
        }, 100);
    <\/script>
</body>
</html>
\`\`\``}}]);
