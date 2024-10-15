import React, { useContext } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'

const MyOrder = () => {

  const {order} = useContext(ShoppingCartContext)

  return (
    <Layout>
      <header className='title_primary'>
        <h1>My Order</h1>
      </header>

      <div className='my_order_container'>
        {
          order?.slice(-1)[0].products.map((product => {
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
