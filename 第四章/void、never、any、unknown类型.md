## void、never、any、unknown类型

#### void类型

`void`表示没有任何类型，不能直接赋值。

```js
let a: void; 
let b: number = a; // 报错
```

> 给变量赋值为void是没有意义的。

如果一个函数没有返回值，此时我们可以定义为`void`

```js
function fn():void {
    console.log('今天天气不错')
}


<a href="javascript:void;"></a>
```

#### never类型

`never`类型表示永不存在的值的类型。

```js
// 抛出异常
function error(): never {
  throw new Error('我是一个Error'); 
}

// 死循环
function loop(): never {
  while (true) {
    console.log('这里是死循环')
  };
}
```

#### any类型

`any`类型表示任意类型。

```js
let num:number = 1000;
num = "jack" // 报错


let num:any = 1000;
num = "jack" // 不报错


// 调用方法，依然不报错
num.setName('jack')
```

> 虽然any不做任何约束，但是非常不推荐这样使用，这样会带来隐患。

我们在开发组件、模块、定义函数、调用接口时，如果类型很难定义出来、不知道属于什么类型等场景，可以适当使用any类型。

#### unknown类型

`unknown`与`any`一样，所有类型都可以分配给`unknown`，反之把`unknown` 赋值给其它类型会报错。

```js
// unknown 可以接收任意类型
let name:string = "jack"
let user:unknown = name;

// unknown 不可以赋值给其它类型，any除外，下面会报错
let name:unknown = "jack"
let user:string = name;
```

#### 总结：

- 能确定类型的，尽量定义类型。

- 无法确定类型的，可以使用 any 进行兜底。

- 当函数没有返回值时，可以使用void定义。

- any和unknown可以接收任意类型值，any可以赋值给任意类型，但unknown不可以赋值给任意类型。

- ###### void和any在项目中是比较常见的，never和unknown不常用。
