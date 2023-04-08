import React, { useState } from "react";
import ItinerarySection from "../components/ItinerarySection";
import { favoriteSpots } from "../data/itinerariesData";

const ItinerarayPage = ({ numberOfDays }) => {
  const [activeButton, setActiveButton] = useState(1);
  const handleActiveButton = (item) => {
    setActiveButton(item);
  };
  return (
    <div className="max-w-[1600px] m-auto border-b-2 px-2 py-10 sm:pb-14 sm:px-14">
      <h1 className="text-center text-2xl font-bold mb-10">
        A Perfect Day in Cairo
      </h1>
      <div className="flex gap-5 justify-center">
        {numberOfDays.length > 1 &&
          numberOfDays.map((item) => (
            <h1
              onClick={() => handleActiveButton(item)}
              className={
                activeButton === item
                  ? "text-center text-sm p-2 text-white bg-[#fc7070] border-2 rounded-xl cursor-pointer -translate-y-2 transition duration-500 ease-in-out"
                  : "text-center text-sm p-2 text-white bg-[#f79797] border-2 rounded-xl cursor-pointer"
              }
            >{`Day ${item}`}</h1>
          ))}
      </div>
      <ItinerarySection favoriteSpots={favoriteSpots} day="Day 1" />
    </div>
  );
};

export default ItinerarayPage;
