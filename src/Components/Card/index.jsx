import { ShoppingCartContext } from '../../Context'
import React, { useContext } from 'react'
import './Card.scss'

const Card = (data) => {

    const { count, setCount, openProductDetail, setProductToShow } = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        openProductDetail()
        setProductToShow(productDetail)
    }

    return (
        <div className='card' onClick={() => showProduct(data.data)}>
            <figure className='card_content'>
                <img src={data.data.images[0]} alt={data.data.title} />
                <div className='card_content_add' onClick={() => setCount(count + 1)}>+</div>
                <span className='card_content_category'>{data.data.category.name}</span>
            </figure>
            <p className='card_content_text'>
                <span>{data.data.title}</span>
                <span><b>{data.data.price}$</b></span>
            </p>
            <p className='card_content_description'>
                <p>{data.data.description}</p>
            </p>
        </div>
    )
}

export default Card
