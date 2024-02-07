## 5-6 Data API

###### 前置条件

- [`createBrowserRouter`](https://reactrouter.com/en/main/routers/create-browser-router)
- [`createMemoryRouter`](https://reactrouter.com/en/main/routers/create-memory-router)
- [`createHashRouter`](https://reactrouter.com/en/main/routers/create-hash-router)
- [`createStaticRouter`](https://reactrouter.com/en/main/routers/create-static-router)

只有上面四个API创建的路由才有Data API功能

###### Loader、useLoaderData

数据加载器

```js
{
      path: '/order/:id',
      element: <Order />,
	  loader: orderLoader
}


function orderLoader({ params }: any) {
  return params.id;
}


function orderLoader({ params }: any) {
  if (!sessionStorage.token) return redirect('/login')
  return {
    token: sessionStorage.token
  }
}


function orderLoader({ params }: any) {
  if (!sessionStorage.token) return redirect('/login')
  return fetch(`/${params.id}.json`)
}
```

###### Action、useActionData

https://reactrouter.com/en/main/hooks/use-action-data


