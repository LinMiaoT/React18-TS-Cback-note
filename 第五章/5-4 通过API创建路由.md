## API创建路由（推荐方式）

###### useRoutes

```jsx
function Router(){
  let element = useRoutes([
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/vite",
        element: <Vite />,
      },
      {
        path: "/react",
        element: <ReactDemo />
      },
      {
        path: "*",
        element: <NotFound />
      },
  ]);
}
export default Router;

// 在main.tsx中加载
import BaseRouter from './router2'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <BaseRouter />
  </BrowserRouter>
)
```

###### createBrowserRouter

```js
import { createBrowserRouter, RouterProvider} from "react-router-dom";

// 创建路由
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/vite",
    element: <Vite />,
  },
  {
    path: "/react",
    element: <ReactDemo />
  },
  {
    path: "*",
    element: <NotFound />
  },
]);

// 传递给RouterProvider
<RouterProvider router={router} />
```

###### createHashRouter

用法同上。


