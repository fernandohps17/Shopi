import { ShoppingCartProvider } from "../../Context"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "../../Components/AppRoutes"
import NavBar from "../../Components/NavBar"
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"
import Footer from "../../Components/Footer"
import './App.scss'

function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
        <CheckoutSideMenu />
        <Footer />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App