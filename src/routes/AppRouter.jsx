import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from '../layout/Layout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import useAuth from '../hooks/useAuth'
import TodoApp from '../pages/TodoApp'
import Profile from '../pages/Profile'

const userRouter = createBrowserRouter([{
  path : '/',
  element : <Layout />,
  children : [
    {path : '', element : <TodoApp />},
    {path : '/profile', element : <Profile />},
    {path : '*', element : <Navigate to='/' />}

  ]


}])

const guestRouter = createBrowserRouter([{
      path : '/',
      element : <Layout />,
      children : [
        {path : '', element : <Login />},
        {path : '/register', element : <Register />},
        {path : '*', element : <Navigate to='/' />}

      ]


}])

function AppRounter() {
  
  const {user} = useAuth()
  
  return (
    <>
   <RouterProvider router={ user ? userRouter : guestRouter } />
    </>
  )
}

export default AppRounter
