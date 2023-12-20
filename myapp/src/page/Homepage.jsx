import React from "react";
import "./Homepage.scss";
import Banner from "../composants/Banner.jsx";
import ApartmentGrid from "../composants/ApartmentGrid.jsx";

function HomePage() {
  return (
    <>
      <Banner />
      <ApartmentGrid />
    </>
  );
}

export default HomePage;

