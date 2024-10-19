import React from 'react'
import './Layout.scss'
import Footer from '../Footer'

const Layout = ({ children }) => {
    return (
        <div className='container'>
            <div className='content'>
                {children}
            </div>
        </div>
    )
}

export default Layout