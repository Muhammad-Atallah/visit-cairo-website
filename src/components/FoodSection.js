import React, { useState, useContext } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Button from "./Button";
import Slider from "./Slider";
import { NavLink } from "react-router-dom";
import scrollUp from "../data/scrollUpFunction";
import PageContext from "../contexts/PageContext";

export const FoodSection = () => {
  const [position, setPosition] = useState(0);
  const { page, setPage } = useContext(PageContext);

  const handlePage = (page) => {
    setPage(page);
  };

  const myStyle = {
    right: position + "%",
    transition: "0.5s",
  };
  const handleMovementLeft = () => {
    if (position < 300 && position >= 0) {
      setPosition(position + 20);
    } else {
      setPosition(0);
    }
  };

  const handleMovementRight = () => {
    if (position < 300 && position >= 0) {
      setPosition(position - 20);
    } else {
      setPosition(0);
    }
  };

  const mainImage = require("../images/Food/egyptian-food.jpg");
  const data = [
    {
      image: require("../images/articles/Food Articles/Uncovering the Hidden Gems/main-image.jpg"),
      title: "Uncovering the Hidden Gems",
      classification: "Restaurants",
      path: "UncoveringTheHiddenGems",
      id: 1,
    },
    {
      image: require("../images/articles/Food Articles/Exploring the Best Local Street Food in Cairo/main-image.jpg"),
      title: "Exploring the Best Local Street Food",
      classification: "Restaurants",
      path: "ExploringTheBestStreetFood",
      id: 2,
    },
    {
      image: require("../images/articles/Food Articles/The Ultimate Guide to Egyptian Breakfast/main-image.jpg"),
      title: "The Ultimate Guide to Egyptian Breakfast",
      classification: "Restaurants",
      path: "TheUltimateGuideToEgyptianBreakfast",
      id: 3,
    },
    {
      image: require("../images/articles/Food Articles/The Sweetest Treats in Cairo/main-image.jpg"),
      title: " The Sweetest Treats in Cairo",
      classification: "Restaurants",
      path: "TheSweetestTreatsInCairo",
      id: 4,
    },
    {
      image: require("../images/articles/Food Articles/A Culinary Tour of Historic Cairo/main-image.jpg"),
      title: "A Culinary Tour of Historic Cairo",
      classification: "Restaurants",
      path: "ACulinaryTour",
      id: 5,
    },
    {
      image: require("../images/articles/Food Articles/A Vegetarian's Guide to Eating in Cairo/main-image.jpg"),
      title: "A Vegetarian's Guide to Eating in Cairo",
      classification: "Restaurants",
      path: "AVegetariansGuide",
      id: 6,
    },
    {
      image: require("../images/articles/Food Articles/Cairo's Best Seafood/main-image.jpg"),
      title: "Cairo's Best Seafood Restaurants",
      classification: "Restaurants",
      path: "CairoBestSeafood",
      id: 7,
    },
    {
      image: require("../images/articles/Food Articles/Inside Cairo's Food Markets/main-image.jpg"),
      title: "Inside Cairo's Food Markets",
      classification: "Restaurants",
      path: "CairoFoodMarkets",

      id: 8,
    },
  ];
  return (
    <div className="max-w-[1600px] m-auto border-b-2 px-2 py-10 sm:pb-14 sm:px-14">
      <div className="max-w-[1600px] m-auto h-[100%] mb-14">
        <div
          style={{ backgroundImage: `url(${mainImage})` }}
          className="w-full sm:h-[80%] sm:max-w-[800px] max-h[300px] min-w-[250px] m-auto p-4 sm:p-14 bg-no-repeat mb-4 sm:mb-10 sm:bg-cover sm:bg-right"
        >
          <div className="bg-white p-2 sm:p-10 min-w-[11rem] max-w-xs rounded shadow-md shadow-black relative opacity-[0.85] sm:opacity-100">
            <h3 className="text-xs sm:text:sm mb-2">CAIRO'S FOOD GUIDE</h3>
            <p className="text-xs mb-4">
              Egyptian cuisine is a feast for the senses, with flavorful dishes
              like koshari, ful medames, and shawarma. Street food and tea
              culture are also an integral part of the culinary experience.
            </p>
            <NavLink
              to="what to eat"
              onClick={() => {
                scrollUp();
                handlePage("what to eat");
              }}
            >
              <Button buttonText="More" />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] m-auto">
        <div className="max-w-[1600px] m-auto h-[100%] flex flex-col gap-2 overflow-hidden">
          <div className="flex flex-col items-start">
            <h1 className="text-m sm:text-2xl mb-4 font-semibold px-2 sm:px-0">
              A Diversity in Great Cuisine
            </h1>
            <p className="text-xs sm:text-sm text-justify px-2 sm:px-0">
              Egyptian cuisine is as diverse as its history and culture, with
              flavors and ingredients that have been shaped by trade and
              cultural exchange for centuries. The food scene in Egypt is a
              melting pot of Mediterranean, Middle Eastern, and African
              influences, resulting in a delicious array of dishes that reflect
              the country's rich culinary heritage.
            </p>
          </div>
          <Slider sliderData={data} />
        </div>
      </div>
    </div>
  );
};
