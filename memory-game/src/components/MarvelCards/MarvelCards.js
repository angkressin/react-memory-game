import React from "react";
import "./MarvelCards.css";

const MarvelCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.removeFriend(props.id)} />
    </div>
  </div>
);

export default MarvelCard;
