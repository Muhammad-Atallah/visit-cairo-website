import React from "react";
import FoodParadise from "../../components/Where to Eat/FoodParadise";
import FeaturedArticle from "../../components/FeaturedArticle";
import FeaturedBlockOfArticles from "../../components/FeaturedBlockOfArticles";

const EatPageInFocus = () => {
  const inFocusfeaturedArticleData = {
    image: require("../../images/Where to Eat/Featured Article/sustainable-food.jpg"),
    heading: "Sustainable Eating in Cairo",
    description:
      "There is a new food empire cooking in Cairo and it is putting delicious, local, and organic products into the hands of a new generation of Egyptians.",
  };

  const aNightOnTheTownData = {
    mainHeader: "A night on the town",
    mainParagraph:
      "Innovative drinks, a great concert, a night of clubbing, or all of the above? Start planing your evening in Stockholm here!",
    data: [
      {
        image: require("../../images/Where to Eat/Bars & NIghtlife/1.jpg"),
        title: "Bars And Clubs That Offers Amazing Cairo Nightlife Experience",
        classification: "Bars & Nightclubs",
      },
      {
        image: require("../../images/Where to Eat/Bars & NIghtlife/2.jpg"),
        title: "Bars And Clubs That Offers Amazing Cairo Nightlife Experience",
        classification: "Bars & Nightclubs",
      },
      {
        image: require("../../images/Where to Eat/Bars & NIghtlife/3.jpg"),
        title: "Bars And Clubs That Offers Amazing Cairo Nightlife Experience",
        classification: "Bars & Nightclubs",
      },
    ],
  };

  const FoodParadiseData = [
    {
      image: require("../../images/Where to Eat/Food Paradise/1.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Food Paradise/2.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Food Paradise/3.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Food Paradise/4.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Food Paradise/5.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Food Paradise/6.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Food Paradise/7.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Food Paradise/8.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
  ];

  return (
    <div>
      <div>
        <FoodParadise FoodParadiseData={FoodParadiseData} />
      </div>
      <div>
        <FeaturedArticle {...inFocusfeaturedArticleData} />
      </div>
      <div>
        <FeaturedBlockOfArticles {...aNightOnTheTownData} />
      </div>
    </div>
  );
};

export default EatPageInFocus;
