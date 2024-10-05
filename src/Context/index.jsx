import { createContext, useState } from "react";

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
            closeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}