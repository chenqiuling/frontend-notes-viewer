"use strict";(self.webpackChunkfrontend_notes=self.webpackChunkfrontend_notes||[]).push([[237],{69160:function(e,n,t){t.r(n),n.default=`[[toc]] <!-- \u63D2\u4EF6\u4F1A\u81EA\u52A8\u5728\u6B64\u4F4D\u7F6E\u63D2\u5165\u76EE\u5F55 -->

## \u4F20\u7EDF Redux

1. \u5B89\u88C5\u4F9D\u8D56

\`\`\`bash
npm install redux react-redux redux-thunk
\`\`\`

2. Action Types \u5B9A\u4E49

\`\`\`js
// actions/types.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
\`\`\`

3. Action Creators \u521B\u5EFA

\`\`\`js
// actions/counterActions.js
import { INCREMENT, DECREMENT } from './types';

export const increment = (amount = 1) => ({
  type: INCREMENT,
  payload: amount,
});

export const decrement = (amount = 1) => ({
  type: DECREMENT,
  payload: amount,
});

// actions/dataActions.js
import axios from 'axios';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './types';

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA_REQUEST });

    axios
      .get('https://api.example.com/data')
      .then(response => {
        dispatch({
          type: FETCH_DATA_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};
\`\`\`

4. Reducers \u5B9E\u73B0

\`\`\`js
// reducers/counterReducer.js
import { INCREMENT, DECREMENT } from '../actions/types';

const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

// reducers/dataReducer.js
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions/types';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
\`\`\`

5. \u5408\u5E76 Reducers

\`\`\`js
// reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  counter: counterReducer,
  data: dataReducer,
});
\`\`\`

6. \u521B\u5EFA Store \u5E76\u5E94\u7528\u4E2D\u95F4\u4EF6
   \u5E38\u7528\u4E2D\u95F4\u4EF6\u7684\u5F15\u5165\uFF1A

- \u5904\u7406\u5F02\u6B65\u64CD\u4F5C redux-thunk\u3001redux-saga
- \u5904\u7406\u6301\u4E45\u5316 redux-persist
- \u65E5\u5FD7\u8F93\u51FA redux-logger

\`\`\`js
// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// \u81EA\u5B9A\u4E49\u65E5\u5FD7\u4E2D\u95F4\u4EF6
const logger = store => next => action => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger), // \u5E94\u7528\u4E2D\u95F4\u4EF6
);

export default store;
\`\`\`

7. React \u7EC4\u4EF6\u4E2D\u4F7F\u7528

\`\`\`js
// components/Counter.js
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

const Counter = ({ count, increment, decrement }) => (
  <div>
    <h2>Count: {count}</h2>
    <button onClick={() => increment()}>+</button>
    <button onClick={() => decrement()}>-</button>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
});

export default connect(mapStateToProps, { increment, decrement })(Counter);

// components/DataFetcher.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/dataActions';

const DataFetcher = ({ loading, data, error, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.data.loading,
  data: state.data.data,
  error: state.data.error,
});

export default connect(mapStateToProps, { fetchData })(DataFetcher);
\`\`\`

\u4F20\u7EDF Redux \u75DB\u70B9:

- \u6837\u677F\u4EE3\u7801\u8FC7\u591A\uFF1A\u9700\u8981\u624B\u52A8\u521B\u5EFA action types/creators/reducers
- \u914D\u7F6E\u590D\u6742\uFF1Astore \u914D\u7F6E\u9700\u8981\u7EC4\u5408\u591A\u4E2A\u5DE5\u5177
- \u4E0D\u53EF\u53D8\u66F4\u65B0\u7E41\u7410\uFF1A\u9700\u624B\u52A8\u5904\u7406\u5BF9\u8C61/\u6570\u7EC4\u7684\u4E0D\u53EF\u53D8\u66F4\u65B0
- \u5F02\u6B65\u5904\u7406\u4F9D\u8D56\u4E2D\u95F4\u4EF6\uFF1A\u9700\u8981\u989D\u5916\u5B89\u88C5\u914D\u7F6E redux-thunk/redux-saga
- \u6A21\u5757\u5316\u56F0\u96BE\uFF1A\u5927\u578B\u9879\u76EE\u7ED3\u6784\u7EC4\u7EC7\u590D\u6742

## Redux Toolkit

1. \u5B89\u88C5\u4F9D\u8D56

\`\`\`bash
npm install @reduxjs/toolkit react-redux
\`\`\`

2. \u521B\u5EFA Slice

\`\`\`js
// features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    incremented: state => {
      state.value += 1; // \u4F7F\u7528 Immer \u5141\u8BB8"\u7A81\u53D8"
    },
    decremented: state => {
      state.value -= 1;
    },
    incrementedByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incremented, decremented, incrementedByAmount } = counterSlice.actions;
export default counterSlice.reducer;

// features/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// \u5F02\u6B65 Thunk
export const fetchData = createAsyncThunk('data/fetchData', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default dataSlice.reducer;
\`\`\`

3. \u914D\u7F6E Store

\`\`\`js
// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import dataReducer from '../features/dataSlice';

// \u81EA\u52A8\u7EC4\u5408 reducer\uFF0C\u542F\u7528 Redux DevTools\uFF0C\u5305\u542B thunk \u4E2D\u95F4\u4EF6
export default configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
  },
  // \u53EF\u9009\u7684\u4E2D\u95F4\u4EF6\u914D\u7F6E
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // \u7981\u7528\u5E8F\u5217\u5316\u68C0\u67E5\uFF08\u53EF\u9009\uFF09
    }),
});
\`\`\`

4. React \u7EC4\u4EF6\u4E2D\u4F7F\u7528

\`\`\`js
// components/RTKCounter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incremented, decremented } from '../features/counterSlice';

export function RTKCounter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(incremented())}>+</button>
      <button onClick={() => dispatch(decremented())}>-</button>
    </div>
  );
}

// components/RTKDataFetcher.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../features/dataSlice';

export function RTKDataFetcher() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.data);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

\u4F18\u52BF\uFF1A

- createSlice\uFF1A\u81EA\u52A8\u751F\u6210 action types \u548C creators
- Immer \u96C6\u6210\uFF1A\u7B80\u5316\u4E0D\u53EF\u53D8\u66F4\u65B0\u903B\u8F91
- createAsyncThunk\uFF1A\u5185\u7F6E\u5F02\u6B65\u5904\u7406\u65B9\u6848
- configureStore\uFF1A\u81EA\u52A8\u7EC4\u5408 reducer \u5E76\u8BBE\u7F6E\u4E2D\u95F4\u4EF6
- createEntityAdapter\uFF1A\u9AD8\u6548\u7BA1\u7406\u89C4\u8303\u5316\u6570\u636E
- RTK Query\uFF1A\u5185\u7F6E\u6570\u636E\u83B7\u53D6\u548C\u7F13\u5B58\u89E3\u51B3\u65B9\u6848

### \u4F20\u7EDF Redux \u4E0E Redux Toolkit \u6BD4\u8F83

| **\u7279\u6027**            | **\u4F20\u7EDF Redux**                 | **Redux Toolkit (RTK)**            |
| ------------------- | ------------------------------ | ---------------------------------- |
| **\u4EE3\u7801\u91CF**          | \u9AD8\uFF08\u5927\u91CF\u6837\u677F\u4EE3\u7801\uFF09             | \u51CF\u5C11\u7EA6 60-80% \u7684\u4EE3\u7801               |
| **\u914D\u7F6E\u590D\u6742\u5EA6**      | \u590D\u6742\uFF08\u624B\u52A8\u7EC4\u5408\uFF09               | \u7B80\u5355\uFF08\u81EA\u52A8\u914D\u7F6E\uFF09                   |
| **\u4E0D\u53EF\u53D8\u66F4\u65B0**      | \u624B\u52A8\u5904\u7406\uFF08\u6613\u51FA\u9519\uFF09             | \u81EA\u52A8\u5904\u7406\uFF08Immer \u96C6\u6210\uFF09             |
| **Action \u521B\u5EFA**     | \u624B\u52A8\u5B9A\u4E49 type/creator          | \u81EA\u52A8\u751F\u6210\uFF08createSlice\uFF09            |
| **\u5F02\u6B65\u5904\u7406**        | \u9700\u8981\u4E2D\u95F4\u4EF6\uFF08redux-thunk/saga\uFF09 | \u5185\u7F6E\uFF08createAsyncThunk\uFF09           |
| **DevTools \u96C6\u6210**   | \u9700\u8981\u624B\u52A8\u914D\u7F6E                   | \u81EA\u52A8\u542F\u7528                           |
| **\u9ED8\u8BA4\u4E2D\u95F4\u4EF6**      | \u65E0                             | \u5305\u542B redux-thunk \u548C\u5E8F\u5217\u5316\u68C0\u67E5      |
| **\u5B66\u4E60\u66F2\u7EBF**        | \u9661\u5CED\uFF08\u591A\u4E2A\u6982\u5FF5\uFF09               | \u5E73\u7F13\uFF08\u7B80\u5316\u6838\u5FC3\u6982\u5FF5\uFF09               |
| **TypeScript \u652F\u6301** | \u9700\u8981\u989D\u5916\u914D\u7F6E                   | \u4E00\u6D41\u7684\u7C7B\u578B\u652F\u6301                     |
| **\u9879\u76EE\u7ED3\u6784**        | \u81EA\u7531\u5EA6\u9AD8\uFF08\u6613\u6DF7\u4E71\uFF09             | \u63D0\u4F9B\u6700\u4F73\u5B9E\u8DF5\u6307\u5BFC                   |
| **\u6027\u80FD\u4F18\u5316**        | \u624B\u52A8\u5904\u7406                       | \u5185\u7F6E\u4F18\u5316\uFF08\u5982 createEntityAdapter\uFF09 |
| **\u6570\u636E\u8BF7\u6C42**        | \u9700\u8981\u989D\u5916\u5E93\uFF08axios + \u4E2D\u95F4\u4EF6\uFF09   | \u5185\u7F6E RTK Query\uFF08\u5B8C\u6574\u6570\u636E\u7F13\u5B58\u65B9\u6848\uFF09 |

## useReducer(React \u5185\u7F6E)

- React \u5185\u7F6E\uFF0C\u65E0\u9700\u989D\u5916\u4F9D\u8D56
- \u9002\u5408\u7EC4\u4EF6\u5185\u90E8\u72B6\u6001\u7BA1\u7406
- \u4E0E Redux \u7C7B\u4F3C\u7684\u5DE5\u4F5C\u6D41
- \u9700\u8981\u624B\u52A8\u4F20\u9012 dispatch \u7ED9\u5F02\u6B65\u64CD\u4F5C
- \u72B6\u6001\u5171\u4EAB\u9700\u914D\u5408 Context

\`\`\`jsx
// counterReducer.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// \u521B\u5EFA\u4E0A\u4E0B\u6587
const CounterContext = createContext();

export const initialState = {
  count: 0,
  loading: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0 };
    case 'loading':
      return { ...state, loading: action.payload };
    default:
      throw new Error();
  }
}

export async function incrementAsync(dispatch) {
  dispatch({ type: 'loading', payload: true });
  await new Promise(resolve => setTimeout(resolve, 1000));
  dispatch({ type: 'increment' });
  dispatch({ type: 'loading', payload: false });
}

// CounterProvider.jsx
import React, { useReducer } from 'react';
import { reducer, initialState, incrementAsync } from './counterReducer';

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // \u521B\u5EFA\u5DF2\u7ECF\u7ED1\u5B9A dispatch \u7684\u5F02\u6B65\u51FD\u6570
  const boundIncrementAsync = () => incrementAsync(dispatch);

  return (
    <CounterContext.Provider value={{ state, dispatch, incrementAsync: boundIncrementAsync }}>
      {children}
    </CounterContext.Provider>
  );
}

// useCounter.ts \u7B80\u5316\u4E0A\u4E0B\u6587\u8BBF\u95EE
export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter \u5FC5\u987B\u5728 CounterProvider \u5185\u4F7F\u7528');
  }
  return context;
}

// Counter.jsx
function Counter() {
  const { state, dispatch, incrementAsync } = useCounter();

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })} disabled={state.loading}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })} disabled={state.loading}>
        -
      </button>
      <button onClick={() => incrementAsync(dispatch)} disabled={state.loading}>
        {state.loading ? 'Loading...' : '+ Async'}
      </button>
    </div>
  );
}

// App.js
const App = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};
\`\`\`

## Dva (\u57FA\u4E8E Redux)

- Model\uFF1A\u5305\u542B state\u3001reducers\u3001effects
- Reducer\uFF1A\u540C\u6B65\u72B6\u6001\u66F4\u65B0
- Effect\uFF1A\u5904\u7406\u5F02\u6B65\u64CD\u4F5C
- Subscription\uFF1A\u8BA2\u9605\u6570\u636E\u6E90
- \u57FA\u4E8E Redux \u7684\u5C01\u88C5
- \u6574\u5408\u4E86 redux-saga
- \u7EA6\u5B9A\u5F0F\u76EE\u5F55\u7ED3\u6784

\`\`\`js
// models/counter.js
export default {
  namespace: 'counter',
  state: 0,
  reducers: {
    increment(state) {
      return state + 1;
    },
    decrement(state) {
      return state - 1;
    },
  },
  effects: {
    *incrementAsync(_, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: 'increment' });
    },
  },
};

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// App.js
import { connect } from 'dva';

const App = ({ counter, dispatch }) => {
  return (
    <div>
      <h2>Count: {counter}</h2>
      <button onClick={() => dispatch({ type: 'counter/increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'counter/decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'counter/incrementAsync' })}>+ Async</button>
    </div>
  );
};

export default connect(({ counter }) => ({ counter }))(App);
\`\`\`

## MobX

MobX \u7684\u6838\u5FC3\u601D\u60F3\u662F\u201C\u4E00\u5207\u72B6\u6001\u90FD\u662F\u53EF\u89C2\u5BDF\u7684\u201D\u3002

- Observable\uFF1A\u53EF\u89C2\u5BDF\u72B6\u6001
- Action\uFF1A\u72B6\u6001\u4FEE\u6539\u65B9\u6CD5
- Computed\uFF1A\u6D3E\u751F\u72B6\u6001
- Reaction\uFF1A\u72B6\u6001\u53D8\u5316\u54CD\u5E94
- \u54CD\u5E94\u5F0F\u7F16\u7A0B\u8303\u5F0F
- \u81EA\u52A8\u8FFD\u8E2A\u4F9D\u8D56\u5173\u7CFB

\`\`\`bash
npm install mobx mobx-react
\`\`\`

\`\`\`js
// store/counterStore.js
import { makeAutoObservable, reaction } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  // action methods
  increment = () => {
    this.count += 1;
  };

  decrement = () => {
    this.count -= 1;
  };

  get doubleCount() {
    return this.count * 2;
  }
}

const counter = new CounterStore();

reaction(
  () => counter.count,
  count => {
    console.log(\`count: \${count}\`);
  },
);

export default new CounterStore();

// App.js
import { observer } from 'mobx-react';
import counterStore from './store/counterStore';

const App = observer(() => {
  return (
    <div>
      <h2>Count: {counterStore.count}</h2>
      <p>Double: {counterStore.doubleCount}</p>
      <button onClick={counterStore.increment}>+</button>
      <button onClick={counterStore.decrement}>-</button>
    </div>
  );
});
\`\`\`

## Hox (\u8F7B\u91CF\u7EA7\u72B6\u6001\u5171\u4EAB)

- Model\uFF1A\u4F7F\u7528 Hook \u5B9A\u4E49\u72B6\u6001\u903B\u8F91
- createModel\uFF1A\u521B\u5EFA\u5168\u5C40\u5171\u4EAB\u72B6\u6001
- useModel\uFF1A\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u72B6\u6001
- \u57FA\u4E8E React Hook
- \u8F7B\u91CF\u7EA7\uFF08<1KB\uFF09

\`\`\`jsx
// models/counterModel.js
import { useState, useCallback } from 'react';
import { createModel } from 'hox';

function useCounter() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(c => c - 1);
  }, []);

  const incrementAsync = useCallback(async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setCount(c => c + 1);
    setLoading(false);
  }, []);

  return {
    count,
    loading,
    increment,
    decrement,
    incrementAsync,
  };
}

export default createModel(useCounter);

// App.js
import React from 'react';
import useCounterModel from './models/counterModel';

const App = () => {
  const counter = useCounterModel();

  return (
    <div>
      <h2>Count: {counter.count}</h2>
      <button onClick={counter.increment} disabled={counter.loading}>
        +
      </button>
      <button onClick={counter.decrement} disabled={counter.loading}>
        -
      </button>
      <button onClick={counter.incrementAsync} disabled={counter.loading}>
        {counter.loading ? 'Loading...' : '+ Async'}
      </button>
    </div>
  );
};
\`\`\`

**@umijs/plugin-model**

umi \u9879\u76EE\u4E2D\uFF0C\`src/models/**\`\uFF08\u5168\u5C40\uFF09 \u3001\`src/pages/**/models/**\`\uFF08\u9875\u9762\uFF09\u76EE\u5F55\u4E0B\u6709 model \u6587\u4EF6 \u65F6\u542F\u7528\u3002

model \u5199\u6CD5\u540C hox\uFF0C\u4F46\u65E0\u9700\u8C03\u7528 createModel();

\u9875\u9762\u4E2D\u4F7F\u7528\u65F6\uFF0C\u5F15\u5165 useModel\uFF0C\u4F20\u5165 model \u6587\u4EF6\u540D\uFF08\u5373 model \u547D\u540D\u7A7A\u95F4\uFF09

\`\`\`jsx
import React from 'react';
import { useModel } from 'umi';

export default () => {
  // useModel(namespace, [updater])\uFF0Cnamespace\u4E3Ahooks model\u6587\u4EF6\u7684\u6587\u4EF6\u540D\uFF0Cupdater\u51FD\u6570\u505A\u6027\u80FD\u4F18\u5316\u4F7F\u7528
  const { user } = useModel('user');
  return null;
};
\`\`\`

## Recoil (Facebook \u539F\u5B50\u72B6\u6001\u7BA1\u7406)

- Atom\uFF1A\u6700\u5C0F\u72B6\u6001\u5355\u5143
- Selector\uFF1A\u6D3E\u751F\u72B6\u6001
- RecoilRoot\uFF1A\u72B6\u6001\u63D0\u4F9B\u8005
- Hooks\uFF1AuseRecoilState, useRecoilValue \u7B49

\`\`\`js
// state/counterState.js
import { atom, selector } from 'recoil';

export const countState = atom({
  key: 'countState',
  default: 0,
});

export const loadingState = atom({
  key: 'loadingState',
  default: false,
});

export const doubleCountState = selector({
  key: 'doubleCountState',
  get: ({ get }) => {
    const count = get(countState);
    return count * 2;
  },
});

export const incrementAsync = selector({
  key: 'incrementAsync',
  get: () => {},
  set: ({ set, get }) => {
    set(loadingState, true);
    setTimeout(() => {
      set(countState, get(countState) + 1);
      set(loadingState, false);
    }, 1000);
  },
});

// App.js
import React from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countState, loadingState, doubleCountState, incrementAsync } from './state/counterState';

function Counter() {
  const [count, setCount] = useRecoilState(countState);
  const loading = useRecoilValue(loadingState);
  const doubleCount = useRecoilValue(doubleCountState);
  const asyncIncrement = useSetRecoilState(incrementAsync);

  return (
    <div>
      <h2>Count: {count}</h2>
      <p>Double: {doubleCount}</p>
      <button onClick={() => setCount(c => c + 1)} disabled={loading}>
        +
      </button>
      <button onClick={() => setCount(c => c - 1)} disabled={loading}>
        -
      </button>
      <button onClick={asyncIncrement} disabled={loading}>
        {loading ? 'Loading...' : '+ Async'}
      </button>
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}
\`\`\`
`}}]);
