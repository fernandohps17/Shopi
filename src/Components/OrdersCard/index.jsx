import { XMarkIcon } from '@heroicons/react/24/solid'
import './OrdersCard.scss'
import React from 'react'

const OrdersCard = (props) => {

    const { totalPrice, totalProducts } = props

    return (
        <div className='orders_card'>
            <div className='orders_card_content'>
                <p><span>01.02.23</span></p>
                <p><span>{totalProducts}</span></p>
                <p><span>{totalPrice}</span></p>
            </div>
        </div>
    )
}

export default OrdersCard
