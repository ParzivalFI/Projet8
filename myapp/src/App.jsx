import React from 'react';
import Navbar from './composants/Navbar.jsx';
import Banner from './composants/Banner.jsx';
import GalerieLocation from './composants/ApartmentGrid.jsx';
import "./App.scss";
import Footer from './composants/Footer.jsx'

function app() {
  return (
    <div>
      <Navbar />
      <Banner />
      <GalerieLocation />
      <Footer />
    </div>
  )
}

export default app