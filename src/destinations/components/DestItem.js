import React from "react";
import "./DestItem.css";
import Button from "../../shared/components/FormElements/Button";
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
          <Button inverse>VIEW ON MAP</Button>
          <Button inverse to={`/destinations/${props.id}`}>
            EDIT
          </Button>
          <Button inverse>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default DestItem;
