"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[8505],{92792:function(t,e,n){n.r(e),e.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u672C\u5730\u5B58\u50A8
\`\`\`js
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

// \u4F7F\u7528\uFF1A\u6301\u4E45\u5316\u7528\u6237\u4E3B\u9898\u8BBE\u7F6E
const [theme, setTheme] = useLocalStorage('theme', 'light');
\`\`\`

## \u9632\u6296
\`\`\`js
const useDebounce = (value, delay = 300) => {
  const [debounced, setDebounced] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
};

// \u4F7F\u7528\uFF1A\u641C\u7D22\u6846\u8F93\u5165\u9632\u6296
const [input, setInput] = useState('');
const debouncedInput = useDebounce(input, 500);
useEffect(() => {
  /* \u89E6\u53D1\u641C\u7D22 API */
}, [debouncedInput]);
\`\`\`

## \u8282\u6D41
\`\`\`js
const useThrottle = (value, limit = 300) => {
  const [throttled, setThrottled] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottled(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttled;
};

// \u4F7F\u7528\uFF1A\u6EDA\u52A8\u4E8B\u4EF6\u8282\u6D41
const scrollY = useThrottle(window.scrollY, 100);
\`\`\`

## \u70B9\u51FB\u4E0B\u62C9\u83DC\u5355\u5916\u90E8\u5173\u95ED
\`\`\`js
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

// \u4F7F\u7528\uFF1A\u70B9\u51FB\u4E0B\u62C9\u83DC\u5355\u5916\u90E8\u5173\u95ED
const dropdownRef = useRef();
useClickOutside(dropdownRef, () => setIsOpen(false));
\`\`\`

## \u5143\u7D20\u60AC\u505C\u68C0\u6D4B
\`\`\`js
const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler(e);
    };
    
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

// \u4F7F\u7528\uFF1A\u70B9\u51FB\u4E0B\u62C9\u83DC\u5355\u5916\u90E8\u5173\u95ED
const dropdownRef = useRef();
useClickOutside(dropdownRef, () => setIsOpen(false));
\`\`\`

## \u53EF\u63A7\u5B9A\u65F6\u5668
\`\`\`js
const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current?.();
    
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

// \u4F7F\u7528\uFF1A\u5012\u8BA1\u65F6\u7EC4\u4EF6
useInterval(() => setCount(c => c-1), isRunning ? 1000 : null);
\`\`\`

## \u952E\u76D8\u4E8B\u4EF6\u76D1\u542C
\`\`\`js
const useKeyPress = (targetKey) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const downHandler = ({ key }) => 
      key === targetKey && setIsPressed(true);
    
    const upHandler = ({ key }) => 
      key === targetKey && setIsPressed(false);

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKey]);

  return isPressed;
};

// \u4F7F\u7528\uFF1AESC\u952E\u5173\u95ED\u5F39\u7A97
const isEscPressed = useKeyPress('Escape');
useEffect(() => isEscPressed && onClose(), [isEscPressed]);
\`\`\``}}]);
