import { useRoutes } from 'react-router-dom'
import React from 'react'
import Home from '../../Pages/Home'
import MyAccount from '../../Pages/MyAccount'
import MyOrder from '../../Pages/MyOrder'
import SingIn from '../../Pages/SignIn'
import NotFound from '../../Pages/NotFound'
import MyOrders from '../../Pages/MyOrders'

const AppRoutes = () => {

    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/my-account', element: <MyAccount /> },
        { path: '/my-order', element: <MyOrder /> },
        { path: '/my-orders', element: <MyOrders /> },
        { path: '/sign-in', element: <SingIn /> },
        { path: '*', element: <NotFound /> }
    ])

    return routes

}

export default AppRoutes
