import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import CurrentItineraryContext from "../contexts/CurrentItineraryContext";

const ItineraryLayout = () => {
  const {
    activeItinerary,
    setActiveItinerary,
    numberOfDays,
    setNumberOfDays,
    currentItineraryDay,
    setCurrentItineraryDay,
  } = useContext(CurrentItineraryContext);

  const handleActiveSection = (number = "oneDay") => {
    setActiveItinerary(number);
  };

  const handleNumberOfDays = (number) => {
    setNumberOfDays(number);
  };

  console.log("Active itinerary from layout " + activeItinerary);

  return (
    <div className="max-w-[1600px] m-auto border-b-2 px-2 py-10 sm:pb-14 sm:px-14 flex flex-col justify-center items-center">
      <div className="w-full sm:mb-5 md:mb-10">
        <h1 className="text-m sm:text-2xl mb-4 font-semibold px-2 sm:px-0">
          Plan your Perfect Journey
        </h1>
        <p className="text-xs sm:text-sm text-justify px-2 sm:px-0 mb-10">
          Cairo's full of hidden gems and has a dizzying amount of attractions
          for visitors. Make the most of your time with our perfect Cairo
          itineraries.
        </p>
        <div className="max-w-[1600px] text-xs sm:text-sm border-b-2 flex gap-10 sm:gap-16 justify-start">
          <h1
            onClick={() => {
              handleActiveSection("oneDay");
              handleNumberOfDays([1]);
              setCurrentItineraryDay(1);
            }}
            className={
              activeItinerary === "oneDay"
                ? "cursor-pointer py-3 border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out font-bold"
                : "cursor-pointer py-3 border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
            }
          >
            1 Day
          </h1>
          <h1
            onClick={() => {
              handleActiveSection("threeDays");
              handleNumberOfDays([1, 2, 3]);
              setCurrentItineraryDay(1);
            }}
            className={
              activeItinerary === "threeDays"
                ? "cursor-pointer py-3 border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out font-bold"
                : "cursor-pointer py-3 border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
            }
          >
            3 Days
          </h1>
          <h1
            onClick={() => {
              handleActiveSection("fiveDays");
              handleNumberOfDays([1, 2, 3, 4, 5]);
              setCurrentItineraryDay(1);
            }}
            className={
              activeItinerary === "fiveDays"
                ? "cursor-pointer py-3 border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out font-bold"
                : "cursor-pointer py-3 border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
            }
          >
            5 Days
          </h1>
          <h1
            onClick={() => {
              handleActiveSection("sevenDays");
              handleNumberOfDays([1, 2, 3, 4, 5, 6, 7]);
              setCurrentItineraryDay(1);
            }}
            className={
              activeItinerary === "sevenDays"
                ? "cursor-pointer py-3 border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out font-bold"
                : "cursor-pointer py-3 border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
            }
          >
            7 Days
          </h1>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ItineraryLayout;
