"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[2420],{32493:function(e,n,t){t.r(n),n.default=`## \u521B\u5EFA\u9879\u76EE

\`\`\`bash
npx create-next-app@latest
\`\`\`

nextjs \u9ED8\u8BA4\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF0C\u5728\u5F00\u53D1\u73AF\u5883\u4E0B\uFF0C\u4F1A\u6A21\u62DF\u7EC4\u4EF6\u6302\u8F7D\u548C\u5378\u8F7D\u7684\u8FC7\u7A0B\uFF0C\u51FA\u73B0\u6253\u5370\u4E24\u6B21\u5185\u5BB9\u7684\u60C5\u51B5\u3002

\u5982\u60F3\u5173\u95ED\uFF0C\u53EF\u4EE5\u5728 next.config.ts \u4E2D\u4FEE\u6539\u914D\u7F6E\uFF1A

\`\`\`ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
};

export default nextConfig;
\`\`\`

## Layout/Template

\u7ED3\u6784\u7C7B\u4F3C\uFF0C\u4F46\u662F Layout.tsx(.jsx/.js)\u91CC\u7684\u72B6\u6001\u5728\u5207\u6362\u8DEF\u7531\u65F6\u662F\u7F13\u5B58\u7684\uFF0C\u800C Template.tsx(.jsx/.js)\u91CC\u7684\u72B6\u6001\u5728\u5207\u6362\u8DEF\u7531\u65F6\u4F1A\u88AB\u91CD\u7F6E\u3002

## app/layout.tsx

\u9ED8\u8BA4\u662F\u8FD0\u884C\u5728\u670D\u52A1\u7AEF\uFF0C\u5982\u679C\u8981\u8FD0\u884C\u5728\u5BA2\u6237\u7AEF\uFF08\u5982\u4F7F\u7528 useState \u7B49\uFF09\uFF0C\u9700\u8981\u5728\u6587\u4EF6\u9876\u90E8\u52A0\u4E0A \`"use client"\` \u6307\u4EE4\u3002

## \u5143\u6570\u636E

\`\`\`ts
import { Metadata } from 'next';

// \u6CE8\u610F metadata \u4E0D\u80FD\u6539\u6210\u5176\u4ED6\u7684\u5E38\u91CF\u540D
export const metadata: Metadata = {
  title: '\u6211\u7684\u7F51\u7AD9',
  description: '\u8FD9\u662F\u6211\u7684\u7F51\u7AD9\u63CF\u8FF0',
};
\`\`\`

## \u7F51\u7AD9 facicon

\u9ED8\u8BA4\u4F1A\u8BFB\u53D6 app/favicon.ico \u4F5C\u4E3A\u7F51\u7AD9\u7684\u56FE\u6807\uFF0C\u5982\u679C\u8981\u81EA\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u5728 metadata \u4E2D\u6DFB\u52A0\uFF1A

\`\`\`ts
export const metadata: Metadata = {
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};
\`\`\`

## not-found.tsx

\u5168\u5C40 404 \u9875\u9762\uFF0C\`app/not-found.tsx\`;

\u5C40\u90E8 404 \u9875\u9762\uFF0C\`test/not-found.tsx\`\uFF1A

- \u76F4\u63A5\u8BBF\u95EE\`/test\`\uFF0C\u4ECD\u4F1A\u663E\u793A\u5168\u5C40 404 \u9875\u9762\u3002
- \u5728 test \u4E2D\u521B\u5EFA page.tsx, \u5185\u90E8\u8C03\u7528\`import { notFound } from "next/navigation";\`\u7684\`notFound();\`\uFF0C\u518D\u8BBF\u95EE\`/test\`\uFF0C\u624D\u4F1A\u663E\u793A\u5C40\u90E8\u7684 404 \u9875\u9762\u3002

## \u8DEF\u7531\u7EC4

\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Cnextjs \u4F1A\u6839\u636E app \u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u7ED3\u6784\u81EA\u52A8\u751F\u6210\u8DEF\u7531\u3002

\u4F46\`(\u8BED\u4E49\u5316\u8DEF\u7531\u5206\u7EC4)\`\u5C0F\u62EC\u53F7\u5305\u88F9\u7684\u6587\u4EF6\u5939\u4F1A\u88AB\u89C6\u4E3A\u8DEF\u7531\u5206\u7EC4\uFF0C\u4E0D\u4F1A\u751F\u6210\u8DEF\u7531\u91CC\u7684\u8DEF\u5F84\u3002

\u4F5C\u7528\uFF1A

- \u8BED\u4E49\u5316\u5206\u7EC4
- \u5206\u7EC4\u4E0B\u7684\u9875\u9762\u53EF\u4EE5\u5171\u7528\u5E03\u5C40
- \u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A\u6839\u5E03\u5C40\uFF08Root Layout\uFF09

## \u7F51\u7AD9\u5B57\u4F53

Root Layout \u4E2D\u5F15\u5165\u5B57\u4F53\uFF1A

\`\`\`tsx
import { Geist } from 'next/font/google';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap', // \u5148\u4F7F\u7528\u9ED8\u8BA4\u5B57\u4F53\uFF0C\u52A0\u8F7D\u5B8C\u540E\u518D\u6362\u6210\u6700\u4F18\u5B57\u4F53
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className}>
      <body>{children}</body>
    </html>
  );
}
\`\`\`
`}}]);
