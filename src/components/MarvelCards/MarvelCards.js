import React from "react";
import "./MarvelCards.css";

const MarvelCard = props => (
  <div className="card">
    <div className="img-container">
      <img className="img" alt={props.name} src={props.image} onClick={() => props.sortCards(props.id)} />
    </div>
  </div>
);

export default MarvelCard;
