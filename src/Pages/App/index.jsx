import { ShoppingCartProvider } from "../../Context"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "../../Components/AppRoutes"
import NavBar from "../../Components/NavBar"
import './App.scss'
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"

function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App