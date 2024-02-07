## 类型声明 declare 使用

给没有类型定义的模块、变量添加声明类型，一般使用`xxx.d.ts`定义文件，建议在src下面创建声明文件

### 给 window 对象扩展字段

```ts
declare interface Window {
  baidu: any;
  app: string;
  getUser: () => { name: string; age: number };
}
```

### 声明全局方法和变量

```ts
declare function jQuery(selector: string): any

declare interface String {
  getLen(): number
}


'Tom'.getLen();
```

### 给 axios 模块扩展属性

```ts
import axios from 'axios'

declare module 'axios' {
  interface AxiosRequestConfig {
    showLoading?: boolean
    showError?: boolean
  }
}
```

### 给 vue3 模块扩展对象

```ts
app.config.globalProperties.$axios = axios;
```

```ts
// 声明要扩充@vue/runtime-core包的声明.
// 这里扩充"ComponentCustomProperties"接口, 因为他是vue3中实例的属性的类型.
declare module '@vue/runtime-core' {

  // 给`this.$http`提供类型
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}
```

### 通配符类型定义

给vue组件添加类型

```ts
declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const ComponentOptions: ComponentOptions;
  export default ComponentOptions;
}
```
