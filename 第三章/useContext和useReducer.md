## useContext 和 useReducer

#### useContext 用法

```jsx
// App.tsx
const UserContext = React.createContext({ name: '' })
function App() {
  return (
    <UserContext.Provider value={{ name: 'jack' }}>
      <div>
        <p>欢迎学习React后台课程</p>
        <Child1 />
      </div>
    </UserContext.Provider>
  )
}

function Child1() {
  return (
    <div>
      <p>
        <span>Child1</span>
      </p>
      <p>
        <Child2 />
      </p>
    </div>
  )
}

function Child2() {
  const { name } = useContext(UserContext)
  return <span>Child2{name}</span>
}
```

用 `createContext`  创建上下文对象，传递全局变量，在底层任意一个子组件可使用 `useContext` 获取该上下文对象，同时获取里面定义的全局变量值，进行渲染。



**解决问题**

当组件嵌套层级过多时，传递属性不方便。



#### useReducer 用法

```js
const [state, dispatch] = useReducer(reducer, initialArg);
```

#### useReducer 案例

```js

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```


