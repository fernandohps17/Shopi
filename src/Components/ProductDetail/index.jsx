import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import React, { useContext } from 'react'
import './ProductDetail.scss'

const ProductDetail = () => {

    const { closeProductDetail, isProductDetailOpen, productToShow} = useContext(ShoppingCartContext)
    console.log(productToShow)

    return (
        <aside className={`${isProductDetailOpen ? 'product_detail' : ''}`}>
            <div className='product_detail_content'>
                <header className='product_detail_title'>
                    <h2>Detail</h2>
                </header>
                <div className='product_detail_close' onClick={() => closeProductDetail()}><XMarkIcon /></div>
            </div>

            <div>
                <figure>
                    <img src="" alt="" />
                </figure>
            </div>
        </aside>
    )
}
// video 14
export default ProductDetail
