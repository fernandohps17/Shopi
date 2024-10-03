import { BrowserRouter } from "react-router-dom"
import AppRoutes from "../../Components/AppRoutes"
import NavBar from "../../Components/NavBar"
import './App.scss'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <div className='spacing_nav'></div>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App