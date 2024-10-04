import { ShoppingCartProvider } from "../../Context"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "../../Components/AppRoutes"
import NavBar from "../../Components/NavBar"
import './App.scss'

function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App