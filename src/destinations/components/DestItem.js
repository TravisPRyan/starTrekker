import React, { useState } from "react";
import "./DestItem.css";
import Modal from "../../shared/components/UIElements/Modal";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";

const DestItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="dest-item__modal-content"
        footerClass="dest-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <h2>THE MAP</h2>
        </div>
      </Modal>
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
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button inverse to={`/destinations/${props.id}`}>
              EDIT
            </Button>
            <Button inverse>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default DestItem;
