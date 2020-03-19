import React from "react";
import { Link } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";
import "../../App.css";
import Avatar from "../../shared/components/UIElements/Avatar";

const TrekkerItem = props => {
  return (
    <li className="trekker-item">
      <Card className="trekker-item__content">
        <Link to={`/${props.id}/destinations`}>
          <div className="trekker-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="trekker-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.destCount}{" "}
              {props.destCount === 1 ? "Destination" : "Destinations"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default TrekkerItem;
