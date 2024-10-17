import React, { useContext } from 'react'
import Layout from '../../Components/Layout'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { Link } from 'react-router-dom'

const MyOrder = () => {

  const { order } = useContext(ShoppingCartContext)

  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = order?.length - 1

  return (
    <Layout>
      <header className='title_primary'>
        <div className='icon_orders_content'>
          <Link to='/my-orders'>
            <ChevronLeftIcon className='icon_orders' />
          </Link>
          <h1>My Order</h1>
        </div>
      </header>

      <div className='my_order_container'>
        {
          order?.[index]?.products.map((product => {
            return (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.images}
                price={product.price}
              />
            )
          }))
        }
      </div>
    </Layout>
  )
}

export default MyOrder
