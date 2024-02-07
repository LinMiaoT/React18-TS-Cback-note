import { Navigate, createBrowserRouter } from 'react-router-dom'

import Welcome from '@/views/Welcome'
import Login from '@/views/Login'
import Error404 from '@/views/404'
import Error403 from '@/views/403'

const routes = [
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/404',
    element: <Error404 />
  },
  {
    path: '/403',
    element: <Error403 />
  }
]

const router = createBrowserRouter(routes)

export default router
