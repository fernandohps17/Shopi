import { NavLink } from 'react-router-dom'
import './NavBar.scss'
import React from 'react'

const NavBar = () => {
    
    return (
        <nav className='nav'>
            <ul className='nav_items'>
                <li className='nav_items_li'><NavLink to='/'><span>Shopi</span></NavLink></li>
                <li><NavLink to='/'>All</NavLink></li>
                <li><NavLink to='/clothes'>Clothes</NavLink></li>
                <li><NavLink to='/electronics'>Electronics</NavLink></li>
                <li><NavLink to='/furnitures'>Furnitures</NavLink></li>
                <li><NavLink to='/toys'>Toys</NavLink></li>
                <li><NavLink to='/others'>Others</NavLink></li>
            </ul>

            <ul className='nav_items'>
                <li className='nav_items_email'>teff@plazit.com</li>
                <li><NavLink to='/my-orders'>My Orders</NavLink></li>
                <li><NavLink to='/my-account'>My Account</NavLink></li>
                <li><NavLink to='/sign-in'>Sing In</NavLink></li>
                <li><NavLink to='/'>🛒 0</NavLink></li>
            </ul>
        </nav>
    )
}
// video 6
export default NavBar
