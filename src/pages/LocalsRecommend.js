import React from "react";
import Locals from "../components/Locals";
import EatLikeALocal from "../components/Locals Recommend/EatLikeALocal";
import FeaturedArticle from "../components/FeaturedArticle";
import MyTopFive from "../components/Locals Recommend/MyTopFive";
import { localsData } from "../data/localsData";

const LocalsRecommend = () => {
  const featuedFoodArticles = [
    {
      image: require("../images/Locals Recommend/Food Articles/baklava.jpg"),
      heading: "Dessert Places You Have to Try in Cairo",
      classification: "restaurants",
      authorImage: require("../images/Locals/1.jpg"),
      authorName: "Amira Fathi",
      authorClassification: "Local in Cairo",
    },
    {
      image: require("../images/Locals Recommend/Food Articles/baklava.jpg"),
      heading: "Dessert Places You Have to Try in Cairo",
      classification: "restaurants",
      authorImage: require("../images/Locals/1.jpg"),
      authorName: "Amira Fathi",
      authorClassification: "Local in Cairo",
    },
    {
      image: require("../images/Locals Recommend/Food Articles/baklava.jpg"),
      heading: "Dessert Places You Have to Try in Cairo",
      classification: "restaurants",
      authorImage: require("../images/Locals/1.jpg"),
      authorName: "Amira Fathi",
      authorClassification: "Local in Cairo",
    },
  ];

  const topFiveData = [
    {
      title: "Muhammad Atallah: My Favorite Galleries",
      image: require("../images/Locals Recommend/My Top Five/1.jpg"),
      classification: "Attractions",
    },
    {
      title: "Muhammad Atallah: My Favorite Galleries",
      image: require("../images/Locals Recommend/My Top Five/2.jpg"),
      classification: "Attractions",
    },
    {
      title: "Muhammad Atallah: My Favorite Galleries",
      image: require("../images/Locals Recommend/My Top Five/3.jpg"),
      classification: "Attractions",
    },
    {
      title: "Muhammad Atallah: My Favorite Galleries",
      image: require("../images/Locals Recommend/My Top Five/4.jpg"),
      classification: "Attractions",
    },
    {
      title: "Muhammad Atallah: My Favorite Galleries",
      image: require("../images/Locals Recommend/My Top Five/5.jpg"),
      classification: "Attractions",
    },
    {
      title: "Muhammad Atallah: My Favorite Galleries",
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
        <EatLikeALocal featuedFoodArticles={featuedFoodArticles} />
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
