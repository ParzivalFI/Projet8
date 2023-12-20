import React, { useEffect, useState } from "react";
import "./ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";
import { useApartments } from "./../use/useApartments.jsx";

function ApartmentGrid() {
  const apartments = useApartments();
  return (
    <div className="paddingg grid">
      {apartments.map((apartment) => (
        <ApartmentCard
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
          key={apartment.id}
        />
      ))}
    </div>
  );
}

export default ApartmentGrid;


