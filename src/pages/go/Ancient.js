import React from "react";
import AttractionsPage from "../../components/AttractionsPage";

const Ancient = () => {
  const ancientAttractionsData = {
    mainHeader: "Discover Egypt's Ancient World in Cairo",
    mainParagraph:
      "Cairo is a charming city whose streets tell the history of Egypt’s ancient civilization that influenced other cultures throughout the ages.  It is home to a variety of monuments and landmarks representing the diversity of Egyptian culture.",
    data: [
      {
        image: require("../../images/Where to Go/Ancient Attractions/serapeum.jpg"),
        title: "Pyramid of Djoser",
        classification: "Attractions",
      },
      {
        image: require("../../images/Where to Go/Ancient Attractions/step-pyramid.jpg"),
        title: "The Serapeum",
        classification: "Attractions",
      },
      {
        image: require("../../images/Where to Go/Ancient Attractions/serapeum.jpg"),
        title: "Pyramid of Djoser",
        classification: "Attractions",
      },
      {
        image: require("../../images/Where to Go/Ancient Attractions/step-pyramid.jpg"),
        title: "The Serapeum",
        classification: "Attractions",
      },
      {
        image: require("../../images/Where to Go/Ancient Attractions/serapeum.jpg"),
        title: "Pyramid of Djoser",
        classification: "Attractions",
      },
      {
        image: require("../../images/Where to Go/Ancient Attractions/step-pyramid.jpg"),
        title: "The Serapeum",
        classification: "Attractions",
      },
      {
        image: require("../../images/Where to Go/Ancient Attractions/serapeum.jpg"),
        title: "Pyramid of Djoser",
        classification: "Attractions",
      },
      {
        image: require("../../images/Where to Go/Ancient Attractions/step-pyramid.jpg"),
        title: "The Serapeum",
        classification: "Attractions",
      },
      {
        image: require("../../images/Where to Go/Ancient Attractions/serapeum.jpg"),
        title: "Pyramid of Djoser",
        classification: "Attractions",
      },
      {
        image: require("../../images/Where to Go/Ancient Attractions/step-pyramid.jpg"),
        title: "The Serapeum",
        classification: "Attractions",
      },
    ],
  };
  return (
    <div>
      <AttractionsPage {...ancientAttractionsData} />
    </div>
  );
};

export default Ancient;
