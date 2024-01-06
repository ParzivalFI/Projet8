import React from "react";
import "./ApartmentHeader.scss";

export function ApartmentHeader({ logement }) {
  const { name } = logement.host;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="appartementHeader">
      <div className="appartementTitle">
        <h1>{logement.title}</h1>
        <h2>{logement.location}</h2>
        <div className="appartementTags">
          {logement.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="appartementOwner">
        <div className="appartementOwnerDetails">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="appartementOwner__badge">
            <img src={logement.host.picture} alt="" />
          </div>
        </div>
        <div className="appartementEtoile">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={logement.rating >= num ? "on" : ""}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
