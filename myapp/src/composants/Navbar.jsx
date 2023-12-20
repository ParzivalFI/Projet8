import React from 'react'
import "./Navbar.scss"
import {Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbarLogo'>
        <img className='logo' src="logo.png" alt="logo" />
      </div>
      <Link to="/">Accueil</Link>
      <Link to="/Propos">
      <div>A propos</div>
      </Link>
      
    </nav>
    
  )
}

export default Navbar