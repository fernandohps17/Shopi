import { ShoppingCartContext } from '../../Context'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {

    const {count, setSearchByCategory} = useContext(ShoppingCartContext)
    
    return (
        <nav className='nav'>
            <ul className='nav_items'>
                <li className='nav_items_li'><NavLink to='/'><span>Shopi</span></NavLink></li>
                <li><NavLink to='/' onClick={() => setSearchByCategory()}>All</NavLink></li>
                <li><NavLink to='/clothes' onClick={() => setSearchByCategory('clothes')}>Clothes</NavLink></li>
                <li><NavLink to='/electronics' onClick={() => setSearchByCategory('electronics')}>Electronics</NavLink></li>
                <li><NavLink to='/furnitures' onClick={() => setSearchByCategory('fornitures')}>Furnitures</NavLink></li>
                <li><NavLink to='/toys' onClick={() => setSearchByCategory('toys')}>Toys</NavLink></li>
                <li><NavLink to='/others' onClick={() => setSearchByCategory('others')}>Others</NavLink></li>
            </ul>

            <ul className='nav_items'>
                <li className='nav_items_email'>teff@plazit.com</li>
                <li><NavLink to='/my-orders'>My Orders</NavLink></li>
                <li><NavLink to='/my-account'>My Account</NavLink></li>
                <li><NavLink to='/sign-in'>Sing In</NavLink></li>
                <li><NavLink to='/'>🛒 {count}</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar
