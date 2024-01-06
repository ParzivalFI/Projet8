import React from 'react'
import "./Footer.scss"
import Logo from "../Image/logo2.png"

function Footer() {
  return (
    <div className='footer'>
        <div className='footerlogo'>
        <img src= {Logo} alt="logo" />
    </div>
    <div className='logoText'>
        © 2020 Kasa. All rights reserved
    </div></div>
  )
}

export default Footer