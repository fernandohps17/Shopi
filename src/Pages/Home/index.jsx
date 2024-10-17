import React, { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../Context'
import ProductDetail from '../../Components/ProductDetail'
import Loader from '../../Components/Loaders'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import './Home.scss'

const Home = () => {

  const { loader, setLoader, setItems, items, searchByTitle, setSearchByTitle, filteredItems } = useContext(ShoppingCartContext)

  const renderView = () => {
    if (searchByTitle?.length > 0) {
      if (filteredItems?.length > 0) {
        return (
          filteredItems?.map((item) => {
            return <Card key={item.id} data={item} />
          })
        )
      } else {
        return (
          <div className='mensaje_alerta'>We don't have anything</div>
        )
      }
    } else {
      return (
        items?.map((item) => {
          return <Card key={item.id} data={item} />
        })
      )
    }
  }

  return (
    <Layout>
      <header className='title_primary'>
        <h1>Exclusive Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam accusantium</p>
        <br />
        <div className='search_input_content'>
          <input type="text" className='search_input' placeholder='Search a products' onChange={(event) => setSearchByTitle(event.target.value)} />
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg> */}
        </div>

      </header>

      {
        loader ? (
          <Loader />
        ) : (
          <div className='card_flex'>
            {renderView()}
          </div>
        )
      }

      <ProductDetail />
    </Layout>
  )
}

export default Home
