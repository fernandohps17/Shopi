import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import React, { useEffect, useState } from 'react'
import './Home.scss'

const Home = () => {

  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      Home
      <div className='card_flex'>
        {
          items?.map((item) => {
            return <Card key={item.id} data={item} />
          })
        }
      </div>
    </Layout>
  )
}

export default Home
