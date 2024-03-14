import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/HomePage'
import ContactPages from './pages/ContactPages'
import PortfolioPages from './pages/PortfolioPages'
import Navbar from '../shared/Navbar'
import LocationInfo from './pages/LocationInfo'

function App() {
  

  return (
    
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<ContactPages />}/> 
          <Route path="/portfolio" element={<PortfolioPages />}/> 
          <Route path="/location/:id" element={<LocationInfo/>}/> 
          <Route path='*' element={<h1>✖️ 404 - Page not found😔</h1>}/>
        </Routes>
      </div>
  )
}

export default App
