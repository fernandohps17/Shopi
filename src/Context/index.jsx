import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0)
    const [loader, setLoader] = useState(true)

    //  Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //  Product Detail - Show product
    const [productToShow, setProductToShow] = useState({})
    


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
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}