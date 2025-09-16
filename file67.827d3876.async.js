"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[1513],{32398:function(t,n,e){e.r(n),n.default=`React Activation \u5B9E\u73B0\u8DEF\u7531\u7F13\u5B58\u7684\u6838\u5FC3\u539F\u7406\u5728\u4E8E\u7ED5\u8FC7 React \u7684\u5E38\u89C4\u5378\u8F7D\u673A\u5236\uFF0C\u901A\u8FC7\u5185\u5B58\u4FDD\u5B58\u7EC4\u4EF6\u72B6\u6001\u548C DOM \u7ED3\u6784\uFF0C\u518D\u914D\u5408 DOM \u64CD\u4F5C\u5B9E\u73B0\u201C\u4F2A\u6301\u4E45\u5316\u201D\u3002

1. AliveScope\uFF08\u7F13\u5B58\u5BB9\u5668\uFF09

- \u5305\u88F9\u5728\u5E94\u7528\u6839\u7EC4\u4EF6\uFF08\u5982 <Router>\uFF09\u5916\u5C42\uFF0C\u4F5C\u4E3A\u6240\u6709\u7F13\u5B58\u7EC4\u4EF6\u7684\u72B6\u6001\u5B58\u50A8\u6C60\u3002
- \u5185\u90E8\u7EF4\u62A4\u4E00\u4E2A Keeper \u7EC4\u4EF6\uFF0C\u8D1F\u8D23\u6E32\u67D3\u88AB\u7F13\u5B58\u7684\u7EC4\u4EF6\u6811\uFF0C\u81EA\u8EAB\u6C38\u4E0D\u5378\u8F7D\uFF0C\u4ECE\u800C\u907F\u514D\u5B50\u7EC4\u4EF6\u88AB\u9500\u6BC1\u3002

2. KeepAlive\uFF08\u7F13\u5B58\u89E6\u53D1\u5668\uFF09

- \u5305\u88F9\u9700\u8981\u7F13\u5B58\u7684\u7EC4\u4EF6\uFF08\u5982\u8DEF\u7531\u7EC4\u4EF6\uFF09\uFF0C\u901A\u8FC7 name \u5C5E\u6027\u63D0\u4F9B\u552F\u4E00\u6807\u8BC6\u3002
- \u5378\u8F7D\u65F6\uFF0C\u5C06\u5B50\u7EC4\u4EF6\u7684 React \u5143\u7D20\u548C DOM \u8282\u70B9\u8F6C\u79FB\u5230 AliveScope \u7684 Keeper \u4E2D\uFF0C\u800C\u975E\u771F\u6B63\u9500\u6BC1\u3002

| **\u673A\u5236**         | React Activation                | \u4F20\u7EDF React         |
| ---------------- | ------------------------------- | ------------------ |
| **\u7EC4\u4EF6\u5378\u8F7D**     | DOM \u79FB\u81F3\u9690\u85CF\u5BB9\u5668\uFF0C\u72B6\u6001\u4FDD\u7559      | DOM \u9500\u6BC1\uFF0C\u72B6\u6001\u4E22\u5931 |
| **\u751F\u547D\u5468\u671F**     | \u65B0\u589E\u6FC0\u6D3B/\u5931\u6D3B\u94A9\u5B50               | \u4EC5\u6709\u6302\u8F7D/\u5378\u8F7D\u94A9\u5B50  |
| **\u72B6\u6001\u6062\u590D\u6765\u6E90** | \u5185\u5B58\u7F13\u5B58\u6C60\uFF08\`AliveScope\`\uFF09      | \u91CD\u65B0\u521D\u59CB\u5316         |
| **\u8DEF\u7531\u5207\u6362\u5F71\u54CD** | \u89C6\u89C9\u201C\u65E0\u7F1D\u5207\u6362\u201D\uFF0C\u5B9E\u9645 DOM \u88AB\u8F6C\u79FB | \u7EC4\u4EF6\u5B8C\u5168\u91CD\u5EFA       |

\`\`\`jsx
// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { AliveScope, KeepAlive } from 'react-activation';
import Home from './Home';
import About from './About';
import User from './User';

function App() {
  return (
    <Router>
      {/* AliveScope \u5FC5\u987B\u5305\u88F9\u6574\u4E2A\u9700\u8981\u4F7F\u7528 KeepAlive \u7684\u533A\u57DF */}
      <AliveScope>
        <div>
          <nav>
            <Link to="/" className="mr-4">
              \u9996\u9875
            </Link>
            <Link to="/about" className="mr-4">
              \u5173\u4E8E
            </Link>
            <Link to="/user">\u7528\u6237</Link>
          </nav>

          <Switch>
            {/* \u7528 KeepAlive \u5305\u88F9\u9700\u8981\u7F13\u5B58\u7684\u8DEF\u7531\u7EC4\u4EF6 */}
            <Route
              path="/"
              exact
              render={() => (
                <KeepAlive when={true}>
                  <Home />
                </KeepAlive>
              )}
            />
            <Route
              path="/about"
              render={() => (
                <KeepAlive when={true}>
                  <About />
                </KeepAlive>
              )}
            />
            {/* \u4E0D\u7F13\u5B58 User \u7EC4\u4EF6 */}
            <Route path="/user" component={User} />
          </Switch>
        </div>
      </AliveScope>
    </Router>
  );
}

export default App;
\`\`\`

\`\`\`jsx
// Home.jsx
import React, { useState, useEffect } from 'react';
import { useActivate, useDeactivate } from 'react-activation';

const Home = () => {
  const [count, setCount] = useState(0);

  // \u7EC4\u4EF6\u88AB\u6FC0\u6D3B\u65F6\u89E6\u53D1\uFF08\u8FDB\u5165\u8DEF\u7531\uFF09
  useActivate(() => {
    console.log('Home \u7EC4\u4EF6\u88AB\u6FC0\u6D3B');
  });

  // \u7EC4\u4EF6\u88AB\u5931\u6D3B\u65F6\u89E6\u53D1\uFF08\u79BB\u5F00\u8DEF\u7531\uFF09
  useDeactivate(() => {
    console.log('Home \u7EC4\u4EF6\u88AB\u5931\u6D3B');
  });

  // \u53EA\u6709\u9996\u6B21\u52A0\u8F7D\u65F6\u4F1A\u6267\u884C
  useEffect(() => {
    console.log('Home \u7EC4\u4EF6\u6302\u8F7D');
    return () => console.log('Home \u7EC4\u4EF6\u5378\u8F7D');
  }, []);

  return (
    <div>
      <h2>\u9996\u9875</h2>
      <p>\u8BA1\u6570\u5668: {count}</p>
      <button onClick={() => setCount(count + 1)}>\u589E\u52A0</button>
    </div>
  );
};

export default Home;
\`\`\`
`}}]);
