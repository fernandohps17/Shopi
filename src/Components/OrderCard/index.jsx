import { XMarkIcon } from '@heroicons/react/24/solid'
import './OrderCard.scss'
import React from 'react'

const OrderCard = (props) => {

    const { id, title, imageUrl, price } = props
// clase 18
    return (
        <div className='order_card'>
            <div className='order_card_content'>
                <figure className='order_card_content_image'>
                    <img src={imageUrl} alt={title} />
                </figure>
                <div className='order_card_content_title'>
                    <p>{title}</p>
                </div>

                <div className='order_card_content_price'>
                    <p>{price}$</p>
                    <XMarkIcon className='order_card_content_icon' />
                </div>
            </div>
        </div>
    )
}

export default OrderCard
