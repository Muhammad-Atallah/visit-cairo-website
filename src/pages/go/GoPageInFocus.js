import React from "react";
import CityOfAThousandMinarets from "../../components/Where To Go/CityOfAThousandMinarets";
import ThePyramids from "../../components/Where To Go/ThePyramids";
import FeaturedArticle from "../../components/FeaturedArticle";
import FeaturedBlockOfArticles from "../../components/FeaturedBlockOfArticles";

const GoPageInFocus = () => {
  const cityOfAThousandMinaretsData = [
    {
      image: require("../../images/Where to Go/City of a Thousand Minarets/1.jpg"),
      title: "Islamic History of Cairo",
      classification: "Attractions",
    },
    {
      image: require("../../images/Where to Go/City of a Thousand Minarets/2.jpg"),
      title: "Islamic History of Cairo",
      classification: "Attractions",
    },
    {
      image: require("../../images/Where to Go/City of a Thousand Minarets/3.jpg"),
      title: "Islamic History of Cairo",
      classification: "Attractions",
    },
    {
      image: require("../../images/Where to Go/City of a Thousand Minarets/4.jpg"),
      title: "Islamic History of Cairo",
      classification: "Attractions",
    },
    {
      image: require("../../images/Where to Go/City of a Thousand Minarets/5.jpg"),
      title: "Islamic History of Cairo",
      classification: "Attractions",
    },
    {
      image: require("../../images/Where to Go/City of a Thousand Minarets/6.jpg"),
      title: "Islamic History of Cairo",
      classification: "Attractions",
    },
    {
      image: require("../../images/Where to Go/City of a Thousand Minarets/7.jpg"),
      title: "Islamic History of Cairo",
      classification: "Attractions",
    },
  ];

  const saqqaraNecropolisFeaturedArticle = {
    image: require("../../images/Where to Go/The Step Pyramid/1.jpg"),
    heading: "The Saqqara Necropolis and the Oldest Pyramid in Egypt",
    description:
      "Located south of Cairo, Saqqara was the vast necropolis of the Ancient Egyptian capital, Memphis, and is home to the nation's oldest pyramid: the Step Pyramid of Djoser.",
  };

  const discoverCairoData = {
    mainHeader: "Discover Cairo",
    mainParagraph:
      "What strange phenomena we find in a great city, all we need do is stroll about with our eyes open. Life swarms with innocent monsters.",
    data: [
      {
        image: require("../../images/Where to Go/Discover Cairo/1.jpg"),
        title: "souvenirs to get from Khan el Khalili",
        classification: "Attractions",
      },
      {
        image: require("../../images/Where to Go/Discover Cairo/2.jpg"),
        title: "souvenirs to get from Khan el Khalili",
        classification: "Attractions",
      },
      {
        image: require("../../images/Where to Go/Discover Cairo/3.jpg"),
        title: "souvenirs to get from Khan el Khalili",
        classification: "Attractions",
      },
    ],
  };

  const theCopticMuseum = {
    image: require("../../images/Where to Go/The Coptic Museum/coptic-museum.png"),
    heading: "The Coptic Museum: Explore the Christian History of Egypt",
    description:
      "A prominent landmark of the history of Egypt and assurance of the immortality of Egyptian art. Its Great inheritance is for all generations.",
  };

  const thePyramidsData = [
    {
      image: require("../../images/Where to Go/Pyramids of Cairo/pyramid_of_userkaf.jpg"),
      title: "Pyramid of Userkaf",
      classification: "Attractions",
    },
    {
      image: require("../../images/Where to Go/Pyramids of Cairo/pyramid_of_teti.jpg"),
      title: "Pyramid of Teti",
      classification: "Attractions",
    },
    {
      image: require("../../images/Where to Go/Pyramids of Cairo/pyramid_of_unas.jpg"),
      title: "Pyramid of Unas",
      classification: "Attractions",
    },
    {
      image: require("../../images/Where to Go/Pyramids of Cairo/pyramid_of_menkaure.jpg"),
      title: "Pyramid of Menkaure",
      classification: "Attractions",
    },
    {
      image: require("../../images/Where to Go/Pyramids of Cairo/step_pyramid_of_djoser.jpg"),
      title: "Step Pyramid of Djoser",
      classification: "Attractions",
    },
    {
      image: require("../../images/Where to Go/Pyramids of Cairo/bent_pyramid.jpg"),
      title: "Bent Pyramid",
      classification: "Attractions",
    },
    {
      image: require("../../images/Where to Go/Pyramids of Cairo/red_pyramid.jpg"),
      title: "Red Pyramid",
      classification: "Attractions",
    },
    {
      image: require("../../images/Where to Go/Pyramids of Cairo/pyramid_of_khafre.jpg"),
      title: "Pyramid of Khafre",
      classification: "Attractions",
    },
    {
      image: require("../../images/Where to Go/Pyramids of Cairo/pyramid_of_khufu.jpg"),
      title: "Pyramid of Khufu",
      classification: "Attractions",
    },
  ];

  return (
    <div>
      <div>
        <CityOfAThousandMinarets sliderData={cityOfAThousandMinaretsData} />
      </div>
      <div>
        <FeaturedArticle {...saqqaraNecropolisFeaturedArticle} />
      </div>

      <div className="w-full border-b-2">
        <FeaturedBlockOfArticles {...discoverCairoData} />
      </div>
      <div>
        <FeaturedArticle reverse="true" {...theCopticMuseum} />
      </div>
      <div>
        <ThePyramids sliderData={thePyramidsData} />
      </div>
    </div>
  );
};

export default GoPageInFocus;
