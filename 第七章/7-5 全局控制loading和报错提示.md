## 局部控制loading和报错提示

本次课程实现的是全局loading和全局报错，通过拦截器封装实现的，那我们如何实现单个接口的loading和报错呢？

### 实现思路

- 直接通过data参数控制

- 开关添加到RequestConfig中

### 实现过程

1. 给get和post添加第三个参数options作为扩展项
   
   ```ts
   interface IConfig {
     showLoading?: boolean
     showError?: boolean
   }
   
   export default {
     get<T>(url: string, params?: object, options: IConfig = { showLoading: true, showError: true }) {
       return instance.get<T>(url, { params, ...options })
     },
     post<T>(url: string, params?: object, options: IConfig = { showLoading: true, showError: true }): Promise<T> {
       return instance.post(url, params, { ...options })
     }
   }
   ```

2. 定义typings.d.ts文件，给AxiosRequestConfig扩展字段
   
   ```ts
   import { AxiosRequestConfig } from 'axios'
   
   declare module 'axios' {
     interface AxiosRequestConfig {
       showLoading?: boolean
       showError?: boolean
     }
   }
   ```

3. 在请求拦截器中控制loading显示
   
   ```ts
   instance.interceptors.request.use(
     config => {
       if (config.showLoading) showLoading()
     }
   )
   ```

4. 在响应拦截器中控制错误显示
   
   ```ts
   instance.interceptors.response.use(
     response => {
       const data: Result = response.data
       hideLoading()
       if (data.code === 500001) {
         message.error(data.msg)
         storage.remove('token')
         // location.href = '/login'
       } else if (data.code != 0) {
         if (response.config.showError === false) {
           return Promise.resolve(data)
         } else {
           message.error(data.msg)
           return Promise.reject(data)
         }
       }
       return data.data
     },
     error => {
       hideLoading()
       message.error(error.message)
       return Promise.reject(error.message)
     }
   )
   ```

5. 控制登录按钮的loading效果
   
   ```ts
   const [loading, setLoading] = useState(false)
   
   <Button type='primary' block htmlType='submit' loading={loading}>
        登录
   </Button>
   ```
