import React from "react";
import DestList from "../components/DestList";

const TEMP_DEST_ARRAY = [
  {
    id: "D1",
    title: "The Louvre",
    description: "Imperial Galactic Center",
    imageUrl:
      "https://www.louvre.fr/sites/default/files/imagecache/940x500/medias/medias_images/images/louvre-carrousel-cour-napoleon-et-pyramide.jpg?1591976224",
    address: "Rue de Rivoli, 75001 Paris, France",
    location: {
      lat: 48.8606111,
      lng: 2.337644,
    },
    creator: "U1",
  },
  {
    id: "D2",
    title: "The Louvre",
    description: "Imperial Galactic Center",
    imageUrl:
      "https://www.louvre.fr/sites/default/files/imagecache/940x500/medias/medias_images/images/louvre-carrousel-cour-napoleon-et-pyramide.jpg?1591976224",
    address: "Rue de Rivoli, 75001 Paris, France",
    location: {
      lat: 48.8606111,
      lng: 2.337644,
    },
    creator: "U2",
  },
];

const TrekkerDest = () => {
  return <DestList items={TEMP_DEST_ARRAY} />;
};

export default TrekkerDest;
