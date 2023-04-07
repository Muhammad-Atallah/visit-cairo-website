import React from "react";
import ACoffeeLoverParadise from "../../components/Where to Eat/Cafes/ACoffeeLoverParadise";
import FeaturedArticle from "../../components/FeaturedArticle";
import FeaturedBlockOfArticles from "../../components/FeaturedBlockOfArticles";

const Cafes = () => {
  const cafesFeaturedArticleData = {
    image: require("../../images/Where to Eat/A Coffee Lover's Paradise/fishawy.png"),
    heading: "5 Historic Cafés to Visit in Cairo",
    description:
      "Some of the cairo's coffee shops date as far back as the 15th century and the days of the Ottoman Empire, yet still remain popular amongst locals and tourists alike to this day.",
  };

  const hitYourSweetSpotData = {
    mainHeader: "Hit Your Sweet Tooth's Sweet Spot",
    mainParagraph:
      "Cairo boasts an array of indulgent desserts that will have you feeling on top of the world.",
    data: [
      {
        image: require("../../images/Where to Eat/A Coffee Lover's Paradise/Desserts/1.jpg"),
        title: "Dessert Places You Have to Try in Cairo",
        classification: "Cafés",
      },
      {
        image: require("../../images/Where to Eat/A Coffee Lover's Paradise/Desserts/2.jpg"),
        title: "Dessert Places You Have to Try in Cairo",
        classification: "Cafés",
      },
      {
        image: require("../../images/Where to Eat/A Coffee Lover's Paradise/Desserts/3.jpg"),
        title: "Dessert Places You Have to Try in Cairo",
        classification: "Cafés",
      },
    ],
  };

  const aCoffeeLoverParadiseData = [
    {
      image: require("../../images/Where to Eat/A Coffee Lover's Paradise/1.jpg"),
      title: "5 Historic Cafés to Visit in Cairo",
      classification: "Cafés",
    },
    {
      image: require("../../images/Where to Eat/A Coffee Lover's Paradise/2.jpg"),
      title: "5 Historic Cafés to Visit in Cairo",
      classification: "Cafés",
    },
    {
      image: require("../../images/Where to Eat/A Coffee Lover's Paradise/3.jpg"),
      title: "5 Historic Cafés to Visit in Cairo",
      classification: "Cafés",
    },
    {
      image: require("../../images/Where to Eat/A Coffee Lover's Paradise/4.jpg"),
      title: "5 Historic Cafés to Visit in Cairo",
      classification: "Cafés",
    },
    {
      image: require("../../images/Where to Eat/A Coffee Lover's Paradise/5.jpg"),
      title: "5 Historic Cafés to Visit in Cairo",
      classification: "Cafés",
    },
    {
      image: require("../../images/Where to Eat/A Coffee Lover's Paradise/6.jpg"),
      title: "5 Historic Cafés to Visit in Cairo",
      classification: "Cafés",
    },
    {
      image: require("../../images/Where to Eat/A Coffee Lover's Paradise/7.jpg"),
      title: "5 Historic Cafés to Visit in Cairo",
      classification: "Cafés",
    },
  ];

  return (
    <div>
      <div>
        <ACoffeeLoverParadise sliderData={aCoffeeLoverParadiseData} />
      </div>
      <div>
        <FeaturedArticle {...cafesFeaturedArticleData} />
      </div>
      <div>
        <FeaturedBlockOfArticles {...hitYourSweetSpotData} />
      </div>
    </div>
  );
};

export default Cafes;
