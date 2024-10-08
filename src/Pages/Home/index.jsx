import React, { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../Context'
import ProductDetail from '../../Components/ProductDetail'
import Loader from '../../Components/Loaders'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import './Home.scss'

const Home = () => {

  const [items, setItems] = useState(null)
  const { loader, setLoader } = useContext(ShoppingCartContext)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
      setLoader(false)
  }, [])

  return (
    <Layout>
      <header className='title_primary'>
        <h1>Home</h1>
      </header>

        {
          loader ? (
            <Loader />
          ) : (
            <div className='card_flex'>
              {
                items?.map((item) => {
                  return <Card key={item.id} data={item} />
                })
              }
            </div>
          )
        }

      <ProductDetail />
    </Layout>
  )
}

export default Home
