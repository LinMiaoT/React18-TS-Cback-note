## useEffect语法讲解

#### 用法

```js
useEffect(effectFn, deps)
```

#### 能力

`useEffect` Hook 相当于 `componentDidMount`，`componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合。

可以模拟渲染后、更新后、销毁三个动作。

#### 案例演示

1. 渲染后更新标题

```js
useEffect(()=>{
    document.title = 'React后台课程'
},[])
```

2. 渲染后更新Count值

```js
const [count, setCount] = useState(0)

useEffect(()=>{
    setCount(count+1)
},[])
```

3. 点击按钮，更新name值

```js
const [total, setTotal] = useState(0)
const [count, setCount] = useState(0)
useEffect(()=>{
    setTotal(count*5)
},[count])
```

4. 销毁定时器

```js
const [count, setCount] = useState(0)

useEffect(() => {
  const T = setInterval(() => {
    setCount(count => count + 1)
  }, 3000)
  return () => {
    clearInterval(T)
  }
}, [])
```

5. 自定义Hook（获取浏览器宽高）

```js
export function useWindowSize() {

    const [size,setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
    })

    const onResize = useCallback((node)=>{
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        })
    },[])

    useEffect(()=>{
        window.addEventListener('resize',onResize)
        return()=>{
            window.removeEventListener('resize',onResize)
        }
    },[])


    return [size]
}
```


