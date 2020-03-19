import React from "react";
import TrekkersList from "../components/TrekkersList";
import "../../App.css";

const Trekkers = () => {
  const TREKKERS = [
    {
      id: "u1",
      name: "Frederick Smith",
      image:
        "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-1000w.JPG",
      destinations: "3"
    }
  ];

  return <TrekkersList items={TREKKERS} />;
};

export default Trekkers;
