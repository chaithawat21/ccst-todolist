import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useContext } from 'react'
import Layout from '../layout/Layout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AuthContext from "../contexts/AuthContext";

const loginRouter = createBrowserRouter([{
  path : '/',
  element : <Layout />,
  children : [
    {path : '', element : <Login />},
    {path : '/register', element : <Register />}

  ]


}])

const guestRouter = createBrowserRouter([{
      path : '/',
      element : <Layout />,
      children : [
        {path : '', element : <Login />},
        {path : '/register', element : <Register />}

      ]


}])

function AppRounter() {
  
  const {isLogin} = useContext(AuthContext)
  
  return (
    <>
   <RouterProvider router={ isLogin ? loginRouter : guestRouter } />
    </>
  )
}

export default AppRounter
