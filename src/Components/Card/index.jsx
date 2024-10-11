import { CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import React, { useContext } from 'react'
import './Card.scss'

const Card = (data) => {

    const { count, setCount, openProductDetail, setProductToShow, cartProducts, setCartProducts, openCheckoutSideMenu, closeProductDetail } = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        openProductDetail()
        setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        setCount(count + 1)
        setCartProducts([...cartProducts, productData])
        openCheckoutSideMenu()
        closeProductDetail()
    }

    const renderIcons = (id) => {

        const isInCart = cartProducts.filter(product => product.id === id).length > 0

        if(isInCart) {
            return (
                <div className='card_content_add_check'>\</div>
            )
        } else{
            return (
                <div className='card_content_add' onClick={(event) => addProductsToCart(event, data.data)}>+</div>
            )
        }
    }

    return (
        <div className='card' onClick={() => showProduct(data.data)}>
            <figure className='card_content'>
                <img src={data.data.images[0]} alt={data.data.title} />


                {renderIcons(data.data.id)}


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
