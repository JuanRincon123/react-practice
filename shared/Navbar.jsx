import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
