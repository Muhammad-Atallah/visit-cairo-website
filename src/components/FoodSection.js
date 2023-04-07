import React, { useState } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Button from "./Button";
import Slider from "./Slider";

export const FoodSection = () => {
  const [position, setPosition] = useState(0);

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
      image: require("../images/Food/1.jpg"),
      title: "Traditional Egyptian Food in Cairo",
      classification: "Restaurants",
      key: 1,
    },
    {
      image: require("../images/Food/2.jpg"),
      title: "Traditional Egyptian Food in Cairo",
      classification: "Restaurants",
      key: 2,
    },
    {
      image: require("../images/Food/3.jpg"),
      title: "Traditional Egyptian Food in Cairo",
      classification: "Restaurants",
      key: 3,
    },
    {
      image: require("../images/Food/4.jpg"),
      title: "Traditional Egyptian Food in Cairo",
      classification: "Restaurants",
      key: 4,
    },
    {
      image: require("../images/Food/5.jpg"),
      title: "Traditional Egyptian Food in Cairo",
      classification: "Restaurants",
      key: 5,
    },
    {
      image: require("../images/Food/6.jpg"),
      title: "Traditional Egyptian Food in Cairo",
      classification: "Restaurants",
      key: 6,
    },
    {
      image: require("../images/Food/7.jpg"),
      title: "Traditional Egyptian Food in Cairo",
      classification: "Restaurants",
      key: 7,
    },
    {
      image: require("../images/Food/8.jpg"),
      title: "Traditional Egyptian Food in Cairo",
      classification: "Restaurants",
      key: 8,
    },
    {
      image: require("../images/Food/9.jpg"),
      title: "Traditional Egyptian Food in Cairo",
      classification: "Restaurants",
      key: 9,
    },
    {
      image: require("../images/Food/10.jpg"),
      title: "Traditional Egyptian Food in Cairo",
      classification: "Restaurants",
      key: 10,
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
            <h1 className="mb-4 text-sm">Find Cairo's most sustainable food</h1>
            <p className="text-xs mb-4">
              Experts and Cairo representatives who are passionate about food
              and sustainability guide you to their hidden gems. Find their best
              tips from the city’s range of good food and join in on a delicious
              journey!
            </p>
            <Button buttonText="More" />
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
              Egyptian cuisine might be best known for its meatballs and pickled
              herring, but in recent years Cairo has made huge gastronomic
              leaps. Here you'll find award-winning chefs and restaurants
              serving fresh local ingredients and leading the way in food
              sustainability.
            </p>
          </div>
          <Slider sliderData={data} />
        </div>
      </div>
    </div>
  );
};
