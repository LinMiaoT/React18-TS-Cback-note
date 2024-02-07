## memo、 useMemo 和 useCallback

#### useMemo 语法

```SCSS

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), deps);


```

1. 传入一个函数进去，会返回一个 `memoized` 值，需要注意的是，函数内必须有返回值

2. 第二个参数会依赖值，当依赖值更新时，会从新计算。

#### useMemo 优化

我们定义了一个`total`函数，内部使用 1 填充了100次，通过 `reduce` 计算总和，经过测试发现点击 `Increase`按钮后，只会执行 `total1` ，不会执行 `total2`，假设`total`计算量巨大，就会造成内存的浪费，通过 `useMemo` 可以帮我们缓存计算值。

```JavaScript
function App(){    
    console.log('Demo1 Parent')    
    let [count,setCount] = useState(0)    
    const handleClick = ()=>{        
        setCount(count+1)    
    }    
    const total1 = ()=>{        
        console.log('计算求和1')        
        let arr = Array.from({ length:100 }).fill(1)        
        return arr.reduce((prev,next)=>prev+next,0)    
    }    
    // 缓存对象值    
    const total2 = useMemo(()=>{        
        console.log('计算求和2')        
        let arr = Array.from({ length:100 }).fill(1)        
        return arr.reduce((prev,next)=>prev+next,0)    
    },[count]) 
    return (        
        <div>            
            <div>                
                <label>Count：{count}</label>             
                <button onClick={handleClick}>Increase</button>            
            </div>            
            <div>                
                <label>总和：</label>                
                <span>{total1()}</span>                
                <span>{total2}</span>            
            </div>        
        </div>    
    )
}
```

#### useCallback 语法

```JavaScript
useCallback(callback, deps)
```

1. `useCallback` 接收 2 个参数，第一个为缓存的函数，第二个为依赖值

2. 主要用于缓存函数，第二次会返回同样的结果。

#### useCallback 优化

```js
import { memo, useCallback, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = useCallback(() => {
    console.log('子节点点击...')
  }, [])
  return (
    <div className='App'>
      <p>欢迎学习React后台课程</p>
      <p>
        <span>Count: {count}</span>
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          按钮
        </button>
      </p>
      <Child handleClick={handleClick} />
    </div>
  )
}

const Child = memo(function Child(props: any) {
  console.log('child...')
  return (
    <p>
      我是子节点 <button onClick={props.handleClick}>按钮</button>
    </p>
  )
})
```

#### useCallback 和 useMemo 区别

他们都用于缓存，`useCallback` 主要用于缓存函数，返回一个 缓存后 函数，而 `useMemo` 主要用于缓存值，返回一个缓存后的值。
