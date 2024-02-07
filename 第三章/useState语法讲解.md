## useState语法讲解

#### 语法定义

```js
const [state, dispatch] = useState(initData)
```

- state：定义的数据源，可视作一个函数组件内部的变量，但只在首次渲染被创造。
- dispatch：改变state的函数，推动函数渲染的渲染函数。dispatch有两种情况-**非函数和函数**。
- initData：state的初始值，initData有两种情况-**非函数和函数。**



#### 案例演示

1. 变量定义

```js
const [count, setCount] = useState('河畔一角');
```

2. 对象定义

```js
const [user, setUser] = useState({ name: '河畔一角', age: 30 });
```

3. 数组定义

```js
const [list, setList] = useState(['Tom', 'Jack']);
```

4. 异步执行

```js
const [count, setCount] = useState(0);

// 点击按钮，执行三次
setCount(count + 1)
setCount(count + 1)
setCount(count + 1)

// 点击按钮，异步执行
setTimeout(()=>{
    setCount(count + 1)
})
```

5. 函数执行

```js
const [count, setCount] = useState(0);
setCount(count => count + 1)
```
