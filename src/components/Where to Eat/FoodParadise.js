import React, { useState } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Slider from "../Slider";

const FoodParadise = ({ FoodParadiseData }) => {
  const [position, setPosition] = useState(0);

  const myStyle = {
    right: position + "%",
    transition: "0.5s",
  };
  const handleMovementLeft = () => {
    if (position < 150 && position >= 0) {
      setPosition(position + 20);
    } else {
      setPosition(0);
    }
  };

  const handleMovementRight = () => {
    if (position < 150 && position >= 0) {
      setPosition(position - 20);
    } else {
      setPosition(0);
    }
  };

  return (
    <div className="max-w-[1600px] m-auto border-b-2 px-2 py-10 sm:pb-14 sm:px-14">
      <div className="max-w-[1600px] m-auto h-[100%] flex flex-col gap-2 overflow-hidden">
        <div className="flex flex-col items-start">
          <h1 className="text-m sm:text-2xl mb-4 font-semibold px-2 sm:px-0">
            Foodie paradise
          </h1>
          <p className="text-xs sm:text-sm text-justify px-2 sm:px-0">
            Diverse and innovative, Stockholm's culinary scene grows more
            exciting by the year. From Michelin-starred New Nordic restaurants
            to hole-in-the-wall falafel joints, there's something in the city to
            suit every taste.
          </p>
        </div>
        <Slider sliderData={FoodParadiseData} />
      </div>
    </div>
  );
};

export default FoodParadise;
