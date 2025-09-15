"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[7697],{69873:function(e,n,t){t.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

\u524D\u7AEF\u7ADE\u6001\u6761\u4EF6\uFF08Race Condition\uFF09\u662F\u6307**\u5F53\u591A\u4E2A\u5F02\u6B65\u64CD\u4F5C\uFF08\u5982\u7F51\u7EDC\u8BF7\u6C42\u3001\u5B9A\u65F6\u5668\u3001\u4E8B\u4EF6\u56DE\u8C03\u7B49\uFF09\u7684\u6267\u884C\u987A\u5E8F\u4E0D\u786E\u5B9A\u65F6\uFF0C\u7A0B\u5E8F\u7684\u884C\u4E3A\u56E0\u6267\u884C\u987A\u5E8F\u4E0D\u540C\u800C\u4EA7\u751F\u9519\u8BEF\u6216\u4E0D\u53EF\u9884\u6D4B\u7ED3\u679C\u7684\u73B0\u8C61**\u3002\u5B83\u672C\u8D28\u4E0A\u662F\u5E76\u53D1\u7F16\u7A0B\u4E2D\u7684\u7ECF\u5178\u95EE\u9898\uFF0C\u5728\u524D\u7AEF\u5F00\u53D1\u4E2D\u56E0\u5927\u91CF\u5F02\u6B65\u64CD\u4F5C\u800C\u5C24\u4E3A\u5E38\u89C1\u3002

\u9AD8\u9891\u573A\u666F: \u641C\u7D22\u6846\u3001\u9009\u9879\u5361\u5207\u6362\u3001\u8868\u5355\u63D0\u4EA4\u3001\u9875\u9762\u5FEB\u901F\u5BFC\u822A\u3002

---

## \u6838\u5FC3\u539F\u56E0

\u524D\u7AEF\u7ADE\u6001\u6761\u4EF6\u7684\u6839\u6E90\u5728\u4E8E **\u201C\u64CD\u4F5C\u7684\u65F6\u5E8F\u4F9D\u8D56\u201D**\uFF1A

1. **\u5F02\u6B65\u64CD\u4F5C\u7684\u975E\u963B\u585E\u7279\u6027**\uFF1A\u5982 \`fetch()\`\u3001\`setTimeout\`\u3001\`Promise\` \u4E0D\u4F1A\u963B\u585E\u4E3B\u7EBF\u7A0B\u3002
2. **\u64CD\u4F5C\u5B8C\u6210\u987A\u5E8F\u4E0D\u53EF\u63A7**\uFF1A\u5148\u53D1\u8D77\u7684\u64CD\u4F5C\u53EF\u80FD\u540E\u5B8C\u6210\uFF08\u5982\u6162\u7F51\u7EDC\u8BF7\u6C42\u540E\u8FD4\u56DE\uFF09\u3002
3. **\u5171\u4EAB\u72B6\u6001\u88AB\u7ADE\u4E89\u4FEE\u6539**\uFF1A\u591A\u4E2A\u64CD\u4F5C\u53EF\u80FD\u4FEE\u6539\u540C\u4E00\u6570\u636E\uFF08\u5982\u7EC4\u4EF6\u72B6\u6001\u3001\u5168\u5C40\u53D8\u91CF\u3001DOM\uFF09\u3002

---

## \u5178\u578B\u573A\u666F\u4E0E\u793A\u4F8B

### \u573A\u666F 1\uFF1A\u8FDE\u7EED\u641C\u7D22\uFF08Search Box\uFF09

**\u95EE\u9898\u63CF\u8FF0**\uFF1A  
\u7528\u6237\u5FEB\u901F\u8F93\u5165\u641C\u7D22\u8BCD\uFF08\u5982 "apple" \u2192 "app" \u2192 "ap"\uFF09\uFF0C\u89E6\u53D1\u591A\u4E2A\u8BF7\u6C42\u3002\u82E5\u540E\u53D1\u8D77\u7684\u8BF7\u6C42\uFF08"ap"\uFF09\u5148\u8FD4\u56DE\uFF0C\u800C\u6162\u7684\u8BF7\u6C42\uFF08"apple"\uFF09\u540E\u8FD4\u56DE\uFF0C\u6700\u7EC8\u663E\u793A\u7684\u662F\u8FC7\u65F6\u7ED3\u679C\u3002

\`\`\`javascript
function SearchBox() {
  const [results, setResults] = useState([]);

  const handleSearch = async query => {
    const data = await fetch(\`/api/search?q=\${query}\`);
    setResults(data); // \u540E\u5B8C\u6210\u7684\u8BF7\u6C42\u4F1A\u8986\u76D6\u65B0\u7ED3\u679C
  };

  // \u8F93\u5165\u53D8\u5316\u65F6\u89E6\u53D1\u641C\u7D22\uFF08\u672A\u505A\u9632\u6296\uFF09
  return <input onChange={e => handleSearch(e.target.value)} />;
}
\`\`\`

**\u7ADE\u6001\u8868\u73B0**\uFF1A  
\u8F93\u5165 "apple" \u2192 \u53D1\u9001\u8BF7\u6C42 A  
\u8F93\u5165 "ap" \u2192 \u53D1\u9001\u8BF7\u6C42 B  
\u8BF7\u6C42 B\uFF08"ap"\uFF09\u5148\u8FD4\u56DE \u2192 \u663E\u793A"ap"\u7ED3\u679C  
\u8BF7\u6C42 A\uFF08"apple"\uFF09\u540E\u8FD4\u56DE \u2192 **\u9519\u8BEF\u5730\u8986\u76D6\u4E3A"apple"\u7ED3\u679C**

---

### \u573A\u666F 2\uFF1A\u9009\u9879\u5361\u5207\u6362\uFF08Tab Switching\uFF09

**\u95EE\u9898\u63CF\u8FF0**\uFF1A  
\u7528\u6237\u5FEB\u901F\u5207\u6362\u9009\u9879\u5361\uFF0C\u6BCF\u4E2A\u9009\u9879\u5361\u89E6\u53D1\u6570\u636E\u8BF7\u6C42\u3002\u82E5\u65E7\u9009\u9879\u5361\u7684\u8BF7\u6C42\u5728\u65B0\u9009\u9879\u5361\u4E4B\u540E\u8FD4\u56DE\uFF0C\u65E7\u6570\u636E\u4F1A\u8986\u76D6\u65B0\u6570\u636E\u3002

\`\`\`javascript
function Tabs() {
  const [content, setContent] = useState('');

  const fetchTabData = async tabId => {
    const data = await fetch(\`/api/tab/\${tabId}\`);
    setContent(data);
  };

  return (
    <div>
      <button onClick={() => fetchTabData(1)}>Tab 1</button>
      <button onClick={() => fetchTabData(2)}>Tab 2</button>
      <div>{content}</div>
    </div>
  );
}
\`\`\`

**\u7ADE\u6001\u8868\u73B0**\uFF1A  
\u70B9\u51FB Tab1 \u2192 \u53D1\u9001\u8BF7\u6C42 A  
\u70B9\u51FB Tab2 \u2192 \u53D1\u9001\u8BF7\u6C42 B  
\u8BF7\u6C42 B\uFF08Tab2\uFF09\u5148\u8FD4\u56DE \u2192 \u663E\u793A Tab2 \u5185\u5BB9  
\u8BF7\u6C42 A\uFF08Tab1\uFF09\u540E\u8FD4\u56DE \u2192 **\u9519\u8BEF\u5730\u8986\u76D6\u4E3A Tab1 \u5185\u5BB9**

---

## \u89E3\u51B3\u65B9\u6848

### 1. \u53D6\u6D88\u8FC7\u671F\u8BF7\u6C42\uFF08AbortController\uFF09

\u4F7F\u7528 \`AbortController\` \u5728\u53D1\u8D77\u65B0\u8BF7\u6C42\u65F6\u53D6\u6D88\u4E0A\u4E00\u6B21\u672A\u5B8C\u6210\u7684\u8BF7\u6C42\u3002

\`\`\`javascript
let controller; // \u5B58\u50A8\u5F53\u524D\u8BF7\u6C42\u7684\u63A7\u5236\u5668

const handleSearch = async query => {
  if (controller) controller.abort(); // \u53D6\u6D88\u4E0A\u4E00\u4E2A\u8BF7\u6C42
  controller = new AbortController();

  try {
    const data = await fetch(\`/api/search?q=\${query}\`, {
      signal: controller.signal, // \u7ED1\u5B9A\u53D6\u6D88\u4FE1\u53F7
    });
    setResults(data);
  } catch (err) {
    if (err.name !== 'AbortError') console.error(err);
  }
};
\`\`\`

### 2. \u65F6\u5E8F\u6807\u8BC6\uFF08Request ID\uFF09

\u4E3A\u6BCF\u4E2A\u8BF7\u6C42\u9644\u52A0\u552F\u4E00\u6807\u8BC6\uFF0C\u53EA\u5904\u7406\u6700\u65B0\u8BF7\u6C42\u7684\u54CD\u5E94\u3002

\`\`\`javascript
let lastRequestId = 0;

const handleSearch = async query => {
  const currentId = ++lastRequestId; // \u751F\u6210\u552F\u4E00ID

  const data = await fetch(\`/api/search?q=\${query}\`);

  // \u53EA\u66F4\u65B0\u5F53\u524D\u6700\u65B0\u8BF7\u6C42\u7684ID\u5BF9\u5E94\u7684\u7ED3\u679C
  if (currentId === lastRequestId) {
    setResults(data);
  }
};
\`\`\`

### 3. \u72B6\u6001\u9501\uFF08Boolean Flag\uFF09

\u901A\u8FC7\u6807\u5FD7\u4F4D\u5FFD\u7565\u8FC7\u671F\u8BF7\u6C42\u7684\u54CD\u5E94\uFF08\u9002\u7528\u4E8E React \u7B49\u6846\u67B6\uFF09\u3002

\`\`\`javascript
function SearchBox() {
  const [isActive, setIsActive] = useState(true); // \u7EC4\u4EF6\u5378\u8F7D\u65F6\u8BBE\u4E3Afalse

  useEffect(() => {
    return () => setIsActive(false); // \u6E05\u7406\u51FD\u6570
  }, []);

  const handleSearch = async (query) => {
    const data = await fetch(...);
    if (isActive) setResults(data); // \u4EC5\u5F53\u7EC4\u4EF6\u6D3B\u8DC3\u65F6\u66F4\u65B0
  };
}
\`\`\`

### 4. \u4F7F\u7528\u5E93\u5DE5\u5177

- **\u9632\u6296/\u8282\u6D41**\uFF08\u5982 \`lodash.debounce\`\uFF09\uFF1A\u51CF\u5C11\u8BF7\u6C42\u9891\u7387\uFF0C\u95F4\u63A5\u907F\u514D\u7ADE\u6001\u3002
- **React Query / SWR**\uFF1A\u5185\u7F6E\u7ADE\u6001\u5904\u7406\uFF08\u81EA\u52A8\u53D6\u6D88\u8FC7\u671F\u67E5\u8BE2\uFF09\u3002

## React Query / SWR

\`\`\`javascript
// ========== React Query ==========
function UserTabs() {
  const [activeTab, setActiveTab] = useState('profile');

  const { data } = useQuery({
    queryKey: ['userData', activeTab], // Key\u968F\u9009\u9879\u5361\u53D8\u5316
    queryFn: () => fetch(\`/api/\${activeTab}\`).then(res => res.json()),
  });

  return (
    <div>
      <button onClick={() => setActiveTab('profile')}>\u7B80\u4ECB</button>
      <button onClick={() => setActiveTab('posts')}>\u6587\u7AE0</button>
      {data && <TabContent data={data} />}
    </div>
  );
}

// ========== SWR ==========
function UserTabs() {
  const [activeTab, setActiveTab] = useState('profile');

  const fetcher = (...args) => fetch(...args).then(res => res.json());

  const { data } = useSWR(
    \`/api/\${activeTab}\`, // Key\u968F\u9009\u9879\u5361\u53D8\u5316
    fetcher,
  );

  return (
    <div>
      <button onClick={() => setActiveTab('profile')}>\u7B80\u4ECB</button>
      <button onClick={() => setActiveTab('posts')}>\u6587\u7AE0</button>
      {data && <TabContent data={data} />}
    </div>
  );
}
\`\`\`
`}}]);
