import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import React, { useContext } from 'react'
import './CheckoutSideMenu.scss';

const CheckoutSideMenu = () => {
    const { closeCheckoutSideMenu, isCheckoutSideMenuOpen } = useContext(ShoppingCartContext)

    return (
        <aside className={`${isCheckoutSideMenuOpen ? 'checkout_side_menu' : ''}`}>
            <div className='checkout_side_menu_content'>
                <header className='checkout_side_menu_title'>
                    <h2>My Order</h2>
                </header>
                <div className='checkout_side_menu_close' onClick={() => closeCheckoutSideMenu()}><XMarkIcon /></div>
            </div>

        </aside>
    )
}

export default CheckoutSideMenu
