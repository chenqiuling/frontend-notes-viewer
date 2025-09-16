"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[7612],{37995:function(t,n,e){e.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u5927\u6587\u4EF6 Gzip \u538B\u7F29

\u4F7F\u7528\u63D2\u4EF6 \`vite-plugin-compression\`\u5BF9\u5927\u6587\u4EF6\u8FDB\u884C\u6253\u5305\u538B\u7F29\uFF0C\u5F97\u5230\`.gz\`\u6587\u4EF6\u3002\u670D\u52A1\u7AEF\u5BF9\u5E94\u8BBE\u7F6E\u54CD\u5E94\u5934 \`Content-Encoding: gzip\`\u3002

\`\`\`js
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ command }) => {
  return {
    plugins: [viteCompression()],
  };
});
\`\`\`

## CDN \u52A0\u901F

CDN\uFF08\u5185\u5BB9\u5206\u53D1\u7F51\u7EDC\uFF09\u901A\u8FC7\u5168\u7403\u5206\u5E03\u5F0F\u8282\u70B9\u7F13\u5B58\u8D44\u6E90\uFF0C\u663E\u8457\u51CF\u5C11\u7528\u6237\u8BBF\u95EE\u5EF6\u8FDF\u3002\u56FD\u5185\u573A\u666F CDN \u63D0\u4F9B\u5546\u5982\u963F\u91CC\u4E91 CDN\uFF0C\u817E\u8BAF\u4E91 CDN\u3002

- **\u9759\u6001\u8D44\u6E90\u5206\u79BB**\uFF1A\u5C06\u9759\u6001\u8D44\u6E90\uFF08\u5982\u56FE\u7247\u3001CSS\u3001JS\u3001\u5B57\u4F53\u7B49\uFF09\u90E8\u7F72\u5230 CDN\uFF0C\u4E0E\u4E3B\u57DF\u5206\u79BB\uFF0C\u51CF\u5C11\u8BF7\u6C42\u4E3B\u57DF\u540D\u7684\u8D1F\u62C5\uFF0C\u540C\u65F6\u5229\u7528 CDN \u52A0\u901F\u3002
- **\u591A\u57DF\u540D\u5206\u53D1**\uFF1A\u4F46\u6CE8\u610F\u907F\u514D\u8FC7\u591A\u57DF\u540D\uFF08\u57DF\u540D\u53D1\u6563\uFF09\uFF0C\u56E0\u4E3A\u6BCF\u4E2A\u57DF\u540D\u90FD\u9700\u8981 DNS \u89E3\u6790\u548C TCP \u8FDE\u63A5\u3002\u901A\u5E38\u5EFA\u8BAE 1-3 \u4E2A CDN \u57DF\u540D\u3002
- \u5BF9\u4E8E\u9891\u7E41\u66F4\u65B0\u7684\u8D44\u6E90\uFF0C\u4F7F\u7528 hash \u6587\u4EF6\u540D\uFF08\u5982\`app.a3b4c5.js\`\uFF09\uFF0C\u8FD9\u6837\u53EF\u8BBE\u7F6E\u957F\u671F\u7F13\u5B58\uFF0C\u56E0\u4E3A\u5185\u5BB9\u53D8\u5316\u6587\u4EF6\u540D\u5C31\u4F1A\u53D8\u3002
- \u786E\u4FDD CDN \u652F\u6301\u5E76\u5F00\u542F HTTP/2 \u6216 HTTP/3\uFF0C\u591A\u8DEF\u590D\u7528\u3001\u5934\u90E8\u538B\u7F29\u7B49\uFF0C\u63D0\u9AD8\u591A\u4E2A\u8D44\u6E90\u7684\u52A0\u8F7D\u6548\u7387\u3002
- \u4F7F\u7528 CDN \u63D0\u4F9B\u7684 SSL \u8BC1\u4E66\uFF0C\u786E\u4FDD\u4F20\u8F93\u5B89\u5168\u3002
- CDN \u901A\u5E38\u652F\u6301\u81EA\u52A8\u538B\u7F29\uFF08\u5982 Gzip\u3001Brotli\uFF09\uFF0C\u786E\u4FDD\u5F00\u542F Brotli \u538B\u7F29\uFF08\u6BD4 Gzip \u66F4\u9AD8\u6548\uFF09\u3002

\`\`\`html
<!-- \u4F7F\u7528CDN\u52A0\u8F7D\u5B57\u4F53 -->
<link rel="stylesheet" href="https://fonts.cdn.example.com/fonts.css" />
\`\`\`

\u914D\u7F6E\u7F13\u5B58\u7B56\u7565

\`\`\`nginx
location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;  # \u8BBE\u7F6E\u7F13\u5B58\u65F6\u95F4\u4E3A1\u5E74
    add_header Cache-Control "public, no-transform";  # public\u8868\u793A\u53EF\u4EE5\u88AB\u4EFB\u4F55\u7F13\u5B58\u533A\u7F13\u5B58
}

# Nginx \u914D\u7F6E
location ~* \\.(js|css)$ {
  # \u4E1A\u52A1\u6587\u4EF6 - \u77ED\u7F13\u5B58
  if ($request_uri ~* "main\\.[a-z0-9]+\\.(js|css)") {
    add_header Cache-Control "public, max-age=3600";
  }

  # \u516C\u7528\u5E93 - \u957F\u7F13\u5B58
  if ($request_uri ~* "(vendors|runtime)\\.[a-z0-9]+\\.js") {
    add_header Cache-Control "public, max-age=31536000, immutable";
  }
}
\`\`\`

Vite \u914D\u7F6E CDN\uFF1A\u53EF\u4EE5\u4F7F\u7528\u63D2\u4EF6 \`vite-plugin-cdn-import\` \u5B9E\u73B0\u3002

\`\`\`js
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vitePluginCdnImport({
        modules: [
          {
            name: 'lodash', // \u5305\u540D
            var: '_', // \u5168\u5C40\u53D8\u91CF\u540D
            path: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js', // \u8DEF\u5F84
          },
        ],
      }),
    ],
  };
});
\`\`\`

## DNS \u9884\u89E3\u6790

\u5728\u9875\u9762\u9700\u8981\u4ECE\u591A\u4E2A\u4E0D\u540C\u57DF\u52A0\u8F7D\u8D44\u6E90\u7684\u60C5\u51B5\u4E0B\uFF0CDNS \u9884\u89E3\u6790\u901A\u8FC7\u63D0\u524D\u89E3\u6790\u57DF\u540D\u5BF9\u5E94\u7684 IP \u5730\u5740\uFF0C\u51CF\u5C11\u540E\u7EED\u8BF7\u6C42\u7684 DNS \u67E5\u627E\u65F6\u95F4\uFF08\u901A\u5E38\u9700\u8981 20-120ms\uFF09\uFF0C\u4ECE\u800C\u4F18\u5316\u8D44\u6E90\u52A0\u8F7D\u6027\u80FD\u3002

\`\`\`html
<!-- cdn\u57DF\u540D\u9884\u89E3\u6790 -->
<link rel="dns-prefetch" href="//cdn.example.com" />
<link rel="dns-prefetch" href="//fonts.googleapis.com" />
<link rel="dns-prefetch" href="//analytics.example.com" />

<!-- \u6D4F\u89C8\u5668\u4F1A\u81EA\u52A8\u89E3\u6790\u9875\u9762\u4E2D<a>\u6807\u7B7E\u7684\u57DF\u540D\uFF0C\u53EF\u901A\u8FC7 meta \u6807\u7B7E\u63A7\u5236\u5168\u5C40\u884C\u4E3A -->
<!-- \u542F\u7528\u6240\u6709\u94FE\u63A5\u7684\u9884\u89E3\u6790 -->
<meta http-equiv="x-dns-prefetch-control" content="on" />
<!-- \u5173\u95ED\u9884\u89E3\u6790\uFF08\u8C28\u614E\u4F7F\u7528\uFF09 -->
<meta http-equiv="x-dns-prefetch-control" content="off" />
\`\`\`

## \u5206\u5305\u7B56\u7565

\`\`\`js
import _ from 'lodash';
console.log(_.join(['a', 'b'], '&'));
\`\`\`

\u4E3A\u4EC0\u4E48\u9700\u8981\u5206\u5305\u7B56\u7565\uFF1F

- \u6301\u4E45\u7F13\u5B58\uFF1A\u516C\u7528\u5E93\u53D8\u66F4\u9891\u7387\u4F4E\uFF0C\u53EF\u8BBE\u7F6E\u957F\u6548\u7F13\u5B58\uFF08\u5185\u5BB9\u53D8\u5316\uFF0Chash \u4F1A\u66F4\u65B0\uFF0C\u6587\u4EF6\u4F1A\u91CD\u65B0\u52A0\u8F7D\uFF09
- \u5E76\u884C\u52A0\u8F7D\uFF1A\u6D4F\u89C8\u5668\u53EF\u540C\u65F6\u4E0B\u8F7D\u591A\u4E2A\u8D44\u6E90
- \u51CF\u5C11\u91CD\u590D\uFF1A\u907F\u514D\u591A\u9875\u9762\u91CD\u590D\u52A0\u8F7D\u76F8\u540C\u5E93
- \u907F\u514D\u8FC7\u5EA6\u62C6\u5206\uFF1A\u6BCF\u4E2A\u989D\u5916\u8BF7\u6C42\u589E\u52A0 100-500ms \u5F00\u9500\uFF0C\u63A8\u8350\u62C6\u5206\u6570\u91CF\uFF1A3-5 \u4E2A\u516C\u5171\u5305

\u5982 Vite \u6253\u5305\uFF0C \u4FEE\u6539 \`build.rollupOptions.ouput.manualChunks\`\u914D\u7F6E\uFF1A

\`\`\`js
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  return {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: '[name].[hash].[ext]',
          advancedChunks: {
            groups: [{ name: 'vendor', test: /\\/react(?:-dom)?/ }],
          }, // \u66FF\u6362manualChunks\uFF08\u6807\u8BB0\u8FC7\u65F6\uFF09\u914D\u7F6E\uFF0C\u624B\u52A8\u5206\u5272\u4EE3\u7801\u5757
          //   manualChunks: id => {
          //     if (id.includes('node_modules')) {
          //       return 'vendor'; // \u7B2C\u4E09\u65B9\u5E93\u6253\u5305\u6210\u4E00\u4E2Avendor.js\u6587\u4EF6
          //     }
          //   },
        },
      },
    },
  };
});
\`\`\`

\u6700\u65B0\u7684 Vite \u6253\u5305\u5185\u90E8\u505A\u4E86\u4F18\u5316\uFF0C\u53CA\u65F6\u4E0D\u505A\u4E0A\u9762\u7684\u914D\u7F6E\uFF0C\u91CD\u590D\u5F15\u5165\u7684\u7B2C\u4E09\u65B9\u5E93\uFF0C\u4E5F\u4E0D\u4F1A\u91CD\u590D\u6253\u5305\u3002

\`\`\`js
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        // \u63D0\u53D6node_modules\u4E2D\u7684\u5E93
        vendors: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
        },
        // \u63D0\u53D6\u5171\u7528\u4E1A\u52A1\u7EC4\u4EF6
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2, // \u81F3\u5C11\u88AB2\u4E2A\u5165\u53E3\u5F15\u7528
          minSize: 0,
        },
      },
    },
  },
};
\`\`\`

\`\`\`js
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // \u6309\u5305\u540D\u5206\u7EC4
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0];
          }
        },
      },
    },
  },
};
\`\`\`

Tree Shaking \u517C\u5BB9\uFF1A

\`\`\`js
// package.json \u914D\u7F6E
"sideEffects": false,
"module": "esm/index.js"
\`\`\`

## \u52A8\u6001\u5BFC\u5165

### \u8DEF\u7531\u61D2\u52A0\u8F7D

1. React Router v6

\`\`\`jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}
\`\`\`

2. Vue

\`\`\`js
const routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/about',
    component: () => import('./views/About.vue'),
  },
];
\`\`\`

## \u9996\u5C4F\u4F18\u5316

\u542F\u52A8\u65F6\u95F4\uFF1A\u5206\u4E3A\u51B7\u542F\u52A8\u548C\u70ED\u542F\u52A8

- \u51B7\u542F\u52A8\uFF1A\u7A0B\u5E8F\u7684\u9996\u6B21\u542F\u52A8\uFF0C\u8FDB\u7A0B\u9996\u6B21\u51FA\u73B0\uFF0C\u5E76\u52A0\u8F7D\u8D44\u6E90\u7684\u542F\u52A8
- \u70ED\u542F\u52A8\uFF1A\u5E94\u7528\u7A0B\u5E8F\u5728\u540E\u53F0\uFF0C\u5E76\u6CA1\u6709\u5B8C\u5168\u88AB\u6740\u6B7B\uFF0C\u518D\u6B21\u6253\u5F00\u7684\u542F\u52A8

## \u9875\u9762\u61D2\u52A0\u8F7D

### \u56FE\u7247\u61D2\u52A0\u8F7D

1. \u65B0\u7279\u6027\`loading="lazy"\`

\`\`\`html
<!-- \u4F7F\u7528 loading="lazy" \u5C5E\u6027, \u517C\u5BB9\u6027\uFF1AChrome 77+\u3001Firefox 75+\u3001Edge 79+ -->
<img
  src="placeholder.jpg"
  data-src="image.jpg"
  alt="\u63CF\u8FF0\u6587\u672C"
  loading="lazy"
  width="800"
  height="600"
/>
\`\`\`

2. Intersection Observer API\uFF08\u9AD8\u7EA7\u63A7\u5236\uFF09

\`\`\`js
const images = document.querySelectorAll('img[data-src]');

const imgObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const img = entry.target;
      img.src = img.dataset.src;
      img.onload = () => {
        img.removeAttribute('data-src');
        img.style.opacity = '1';
      };
      observer.unobserve(img);
    });
  },
  {
    rootMargin: '200px', // \u63D0\u524D200px\u89E6\u53D1\u52A0\u8F7D
    threshold: 0.01,
  },
);

images.forEach(img => imgObserver.observe(img));
\`\`\`

3. \u54CD\u5E94\u5F0F\u56FE\u7247\u61D2\u52A0\u8F7D

\`\`\`html
<picture>
  <source data-srcset="large.jpg" media="(min-width: 1200px)" />
  <source data-srcset="medium.jpg" media="(min-width: 768px)" />
  <img data-src="small.jpg" src="placeholder.jpg" loading="lazy" alt="\u54CD\u5E94\u5F0F\u56FE\u7247" />
</picture>
\`\`\`

## \u5360\u4F4D\u7B26\uFF08\u9AA8\u67B6\u5C4F/Loading\uFF09

\`\`\`css
/* \u9AA8\u67B6\u5C4F\u52A8\u753B */
.skeleton {
  width: 100%;
  height: 32px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
\`\`\`
`}}]);
