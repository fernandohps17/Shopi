import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import React, { useContext } from 'react'
import './CheckoutSideMenu.scss';
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {
    const { closeCheckoutSideMenu, isCheckoutSideMenuOpen, cartProducts, setCartProducts } = useContext(ShoppingCartContext)
    
    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
    }

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'checkout_side_menu' : ''}`}>
            <div className='checkout_side_menu_content'>
                <header className='checkout_side_menu_title'>
                    <h2>My Order</h2>
                </header>
                <div className='checkout_side_menu_close' onClick={() => closeCheckoutSideMenu()}><XMarkIcon /></div>
            </div>

            <div className='order_card_container'>
                {
                    cartProducts.map((product => {
                        return (
                            <OrderCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imageUrl={product.images}
                                price={product.price}
                                handleDelete={handleDelete}
                            />
                        )
                    }))
                }
            </div>

        </aside>
    )
}

export default CheckoutSideMenu
