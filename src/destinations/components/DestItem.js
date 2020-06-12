import React from "react";
import "./DestItem.css";
import Card from "../../shared/components/UIElements/Card";

const DestItem = (props) => {
  return (
    <li className="dest-item">
      <Card className="dest-item__content">
        <div className="dest-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="dest-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="dest-item__actions">
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
};

export default DestItem;
