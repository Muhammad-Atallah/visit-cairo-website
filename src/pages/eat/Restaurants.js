import React from "react";
import EatToYourHeartContent from "../../components/Where to Eat/Restaurants/EatToYourHeartContent";
import FeaturedArticle from "../../components/FeaturedArticle";
import FeaturedBlockOfArticles from "../../components/FeaturedBlockOfArticles";

const Restaurants = () => {
  const restaurantsFeaturedArticleData = {
    image: require("../../images/Where to Eat/Restaurants Tab/Featured Article/falafel.jpg"),
    heading: "10 Must-Try Dishes To Eat When Visiting Cairo",
    description:
      "Think of Egypt and images of the Nile and the pyramids spring to mind – but there’s far more to it than that, especially when it comes to food. If you’re planning a visit to Cairo, take a look at our pick of what to order when in the capital.",
  };

  const aGreatDinnerOnEachCornerData = {
    mainHeader: "A great dinner on every corner",
    mainParagraph:
      "Restaurants in Stockholm are as diverse as the districts themselves. Discover a local gem where you can grab a bite to eat and get to know the neighborhood while you're at it.",
    data: [
      {
        image: require("../../images/Where to Eat/A Great Dinner On Every Corner/1.jpg"),
        title: "Restaurants in Old Cairo",
        classification: "Restaurants",
      },
      {
        image: require("../../images/Where to Eat/A Great Dinner On Every Corner/2.jpg"),
        title: "Restaurants in Old Cairo",
        classification: "Restaurants",
      },
      {
        image: require("../../images/Where to Eat/A Great Dinner On Every Corner/3.jpg"),
        title: "Restaurants in Old Cairo",
        classification: "Restaurants",
      },
    ],
  };

  const eatToYourHeartContentData = [
    {
      image: require("../../images/Where to Eat/Restaurants Tab/Eat to your heart's content/6.jpg"),
      title: "Top Vegetarian-Friendly Restaurants in Cairo",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Restaurants Tab/Eat to your heart's content/7.jpg"),
      title: "Top Vegetarian-Friendly Restaurants in Cairo",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Restaurants Tab/Eat to your heart's content/3.jpg"),
      title: "Top Vegetarian-Friendly Restaurants in Cairo",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Restaurants Tab/Eat to your heart's content/4.jpg"),
      title: "Top Vegetarian-Friendly Restaurants in Cairo",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Restaurants Tab/Eat to your heart's content/5.jpg"),
      title: "Top Vegetarian-Friendly Restaurants in Cairo",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Restaurants Tab/Eat to your heart's content/1.jpg"),
      title: "Top Vegetarian-Friendly Restaurants in Cairo",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Restaurants Tab/Eat to your heart's content/2.jpg"),
      title: "Top Vegetarian-Friendly Restaurants in Cairo",
      classification: "Restaurants",
    },
  ];
  return (
    <div>
      <div>
        <EatToYourHeartContent sliderData={eatToYourHeartContentData} />
      </div>
      <div>
        <FeaturedArticle {...restaurantsFeaturedArticleData} />
      </div>
      <div>
        <FeaturedBlockOfArticles {...aGreatDinnerOnEachCornerData} />
      </div>
    </div>
  );
};

export default Restaurants;
