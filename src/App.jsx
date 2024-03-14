import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/HomePage'
import ContactPages from './pages/ContactPages'
import PortfolioPages from './pages/PortfolioPages'
import Navbar from '../shared/Navbar'
import LocationInfo from './pages/LocationInfo'
import FooterRouters from './pages/FooterRouters'
import LoginPage from './pages/LoginPage'
import ProtactedRoutes from './pages/ProtactedRoutes'
import { useState } from 'react'

function App() {
  
  const [isLogged, setIsLogged] = useState(false)

  return (
    
      <div>
        <Navbar/>
        <Routes>

          <Route path='/login' element={<LoginPage setIsLogged={setIsLogged}/>}/>

          <Route element={<FooterRouters/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/portfolio" element={<PortfolioPages />}/> 
          </Route>

          <Route element={<ProtactedRoutes isLogged={isLogged}/>}>
          <Route path="/contact" element={<ContactPages />}/> 
          </Route>

          <Route path="/location/:id" element={<LocationInfo/>}/> 
          <Route path='*' element={<h1>✖️ 404 - Page not found😔</h1>}/>
        </Routes>
      </div>
  )
}

export default App
