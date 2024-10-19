import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { totalPrice } from '../../Utils';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react'
import './CheckoutSideMenu.scss';
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {
    const { closeCheckoutSideMenu, setIsCheckoutSideMenuOpen, isCheckoutSideMenuOpen, cartProducts, setCartProducts, setCount, count, order, setOrder, setSearchByTitle } = useContext(ShoppingCartContext)
    
    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
        setCount(count - 1)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }
        
        setOrder([...order, orderToAdd])
        setCartProducts([])
        setCount(0)
        setSearchByTitle(null)
        closeCheckoutSideMenu()
    }

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'checkout_side_menu' : 'checkout_side_menu_none'}`}>
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

            <div className='total_price'>
                <p className='total_price_content'>
                    <span className='total_price_content_title'>Total:</span>
                    <span className='total_price_content_total'>{totalPrice(cartProducts)} $</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='btn_checkout' onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>

        </aside>
    )
}

export default CheckoutSideMenu
