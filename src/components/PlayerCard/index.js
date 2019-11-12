import React from "react";
import "./style.css";

function PlayerCard(props) {
  return (
    <div className="player" onClick={() => props.playerSelect(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default PlayerCard;
