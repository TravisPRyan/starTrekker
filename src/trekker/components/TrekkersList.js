import React from "react";
import TrekkerItem from "./TrekkerItem";
import "./TrekkersList.css";

const TrekkersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No trekkers found.</h2>
      </div>
    );
  }
  return (
    <ul className="trekkers-list">
      {props.items.map(trekker => (
        <TrekkerItem
          key={trekker.id}
          id={trekker.id}
          image={trekker.image}
          name={trekker.name}
          destCount={trekker.destinations}
        />
      ))}
    </ul>
  );
};

export default TrekkersList;
