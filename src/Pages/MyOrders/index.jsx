import React, { useContext } from 'react'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import './MyOrders.scss';

const MyOrders = () => {

  const { order } = useContext(ShoppingCartContext)

  return (
    <Layout>
      <header className='title_primary'>
          <h1>My Orders</h1>
        {
          order.map((order, index) => (
            <Link key={index} to={`my-orders/${index}`}>
              <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
            </Link>
          ))
        }
      </header>
    </Layout>
  )
}

export default MyOrders