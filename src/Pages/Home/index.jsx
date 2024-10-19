import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import ProductDetail from '../../Components/ProductDetail'
import Loader from '../../Components/Loaders'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import './Home.scss'

const Home = () => {

  const { loader, setSearchByTitle, filteredItems } = useContext(ShoppingCartContext)

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return (
        filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div className='mensaje_alerta'>We don't have anything</div>
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
