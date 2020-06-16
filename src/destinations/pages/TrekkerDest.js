import React from "react";
import DestList from "../components/DestList";
import { useParams } from "react-router-dom";

const TEMP_DEST_ARRAY = [
  {
    id: "d1",
    title: "The Louvre",
    description: "Imperial Galactic Center",
    imageUrl:
      "https://www.louvre.fr/sites/default/files/imagecache/940x500/medias/medias_images/images/louvre-carrousel-cour-napoleon-et-pyramide.jpg?1591976224",
    address: "Rue de Rivoli, 75001 Paris, France",
    location: {
      lat: 48.8606111,
      lng: 2.337644,
    },
    creator: "u1",
  },
  {
    id: "d2",
    title: "The Louvre",
    description: "Imperial Galactic Center",
    imageUrl:
      "https://www.louvre.fr/sites/default/files/imagecache/940x500/medias/medias_images/images/louvre-carrousel-cour-napoleon-et-pyramide.jpg?1591976224",
    address: "Rue de Rivoli, 75001 Paris, France",
    location: {
      lat: 48.8606111,
      lng: 2.337644,
    },
    creator: "u2",
  },
];

const TrekkerDest = () => {
  const userId = useParams().userId;
  const loadedDest = TEMP_DEST_ARRAY.filter((dest) => dest.creator === userId);
  return <DestList items={loadedDest} />;
};

export default TrekkerDest;
