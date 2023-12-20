import React, { useEffect, useState } from "react";
import { DescriptionPanel } from "../composants/DescriptionPanel";
import { DescriptionPanel2 } from "../composants/DescriptionPanel2";
import "./ApartmentPage.scss";
import { ImageBanner } from "../composants/ImageBanner";
import { ApartmentHeader } from "../composants/ApartmentHeader";
import { useParams } from "react-router-dom";
import jsonData from "../db.json"
import Error404 from "./Error404";

function ApartmentPage() {

  const parmas = useParams();
  console.log(parmas.id)
  const logement = jsonData.find(item => item.id === parmas.id);
  console.log(logement)
  if (logement == null) return <div> <Error404 /> </div>;
  return (
    <div className="apartment-page">
      <ImageBanner pictures={logement.pictures} />
      <ApartmentHeader logement={logement} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={logement.description} />
        <DescriptionPanel2
          title="Equipements"
          content={logement.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
