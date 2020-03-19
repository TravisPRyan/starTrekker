import React from "react";

const TrekkerItem = props => {
  return (
    <li className="trekker-item">
      <div className="trekker-item__content">
        <div className="trekker-item__image">
          <img src={props.image} alt={props.name}></img>
        </div>
        <div classsName="trekker-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.destCount}{" "}
            {props.destCount === 1 ? "Destination" : "Destinations"}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default TrekkerItem;
