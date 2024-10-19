import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import React, { useContext } from 'react'
import './ProductDetail.scss'

const ProductDetail = () => {

    const { closeProductDetail, isProductDetailOpen, productToShow } = useContext(ShoppingCartContext)

    return (
        <aside className={`${isProductDetailOpen ? 'product_detail' : 'product_detail_none'}`}>
            <div className='product_detail_content'>
                <header className='product_detail_title'>
                    <h2>Detail</h2>
                </header>
                <div className='product_detail_close' onClick={() => closeProductDetail()}><XMarkIcon /></div>
            </div>

            <div className='product_detail_content_images'>
                <figure>
                    <img src={productToShow.images} alt={productToShow.title} />
                </figure>
            </div>

            <div className='product_detail_content_text'>
                <p><b>Titulo:</b> {productToShow.title}</p>
                <p><b>Precio:</b> {productToShow.price}$</p>
                <p><b>Descripción:</b> {productToShow.description}</p>
            </div>
        </aside>
    )
}

export default ProductDetail
