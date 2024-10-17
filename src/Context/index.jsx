// import { createContext, useEffect, useState } from "react";
import React, { createContext, useEffect, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0)
    const [loader, setLoader] = useState(true)

    //  Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

        //  Cjeckout Side Menu - Open/Close
        const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
        const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
        const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //  Product Detail - Show product
    const [productToShow, setProductToShow] = useState({})

    // ShoppingCart - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart - Order
    const [order, setOrder] = useState([])

    // Get Products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
  
    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
        setLoader(false)
    }, [])

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])

    console.log(filteredItems)
    

    return (
        <ShoppingCartContext.Provider value={{
            setCount,
            count,
            loader,
            setLoader,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}