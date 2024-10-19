import './OrdersCard.scss'
import React from 'react'

const OrdersCard = (props) => {

    const { totalPrice, totalProducts } = props

    return (
        <div className='orders_card_detalle'>
            <div className='orders_card_content_detalle'>
                <p><span>Fecha: 01.02.23</span></p>
                <p><span>Producto: {totalProducts}</span></p>
                <p><span>Precio: {totalPrice}</span></p>
            </div>
        </div>
    )
}

export default OrdersCard
