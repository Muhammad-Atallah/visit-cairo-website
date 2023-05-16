import React from "react";
import Locals from "../components/Locals";
import FeaturedArticle from "../components/FeaturedArticle";
import MyTopFive from "../components/Locals Recommend/MyTopFive";
import { localsData } from "../data/localsData";
import FeaturedBlockOfArticles from "../components/FeaturedBlockOfArticles";

const LocalsRecommend = () => {
  const featuedFoodArticles = {
    mainHeader: "Eat Like a Local",
    mainParagraph: "The people of Cairo reveal their favorite restaurants!",
    data: [
      {
        image: require("../images/Locals Recommend/Food Articles/1-Traditional-Egyptian-Food-jintravel.com.jpg"),
        title: "Dessert Places You Have to Try in Cairo",
        classification: "Bars & Clubs",
      },
      {
        image: require("../images/Locals Recommend/Food Articles/Egyptian-Koshari-in-a-Plate.png"),
        title: "Dessert Places You Have to Try in Cairo",
        classification: "Bars & Clubs",
      },
      {
        image: require("../images/Locals Recommend/Food Articles/egyptian-food-falafel.jpg.webp"),
        title: "Dessert Places You Have to Try in Cairo",
        classification: "Bars & Clubs",
      },
    ],
  };

  const topFiveData = [
    {
      title: "Ganna Sayed: My Favorite Galleries",
      image: require("../images/Locals Recommend/My Top Five/1.jpg"),
      classification: "Attractions",
    },
    {
      title: "Wessam Kady: My Favorite Social Clubs",
      image: require("../images/Locals Recommend/My Top Five/2.jpg"),
      classification: "Activities",
    },
    {
      title: "Ahmad Fathi: My Favorite Night Clubs",
      image: require("../images/Locals Recommend/My Top Five/3.jpg"),
      classification: "Bars & Clubs",
    },
    {
      title: "Mahmoud Sobhy: My Favorite Parks",
      image: require("../images/Locals Recommend/My Top Five/4.jpg"),
      classification: "Attractions",
    },
    {
      title: "Sameh Shaheen: My Favorite Museums",
      image: require("../images/Locals Recommend/My Top Five/5.jpg"),
      classification: "Attractions",
    },
    {
      title: "Youmna Souliman: My Favorite Palaces",
      image: require("../images/Locals Recommend/My Top Five/1.jpg"),
      classification: "Attractions",
    },
  ];

  const featuredArticle = {
    image: require("../images/Locals Recommend/Featured Article/MedrarGallery_Roznama_4.jpg"),
    heading: "An Insider’s Guide to Cairo’s Hidden Art Scene",
    description:
      "Cairo feels more like a universe than a city, and it’s easy enough to walk past its arts scene without knowing it’s even there. This guide will take you to inner worlds too many travelers miss and into an art scene that will change the way you see Cairo forever.",
  };

  const mainImage = require("../images/Locals Recommend/locals-recommend.jpg");
  return (
    <>
      <div className="w-full h-[70vh]">
        <img className="w-full h-full object-cover" src={mainImage} alt="" />
      </div>
      <div className="max-w-[1600px] m-auto pt-10 px-2 sm:pt-14 sm:px-14">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
          Locals Recommend
        </h1>
        <p className="sm:px-0 sm:pr-24 text-xs sm:text-lg">
          Find your way off the beaten path with personal guides and tips from
          the people living here.
        </p>
      </div>
      <div>
        <FeaturedBlockOfArticles {...featuedFoodArticles} />
      </div>
      <div>
        <Locals />
      </div>
      <div>
        <FeaturedArticle {...featuredArticle} />
      </div>
      <div>
        <MyTopFive topFiveData={topFiveData} />
      </div>
    </>
  );
};

export default LocalsRecommend;
