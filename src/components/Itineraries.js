import React from "react";
import Itinerary from "./Itinerary";

const Itineraries = () => {
  return (
    <div className="max-w-[1600px] m-auto border-b-2 px-2 py-10 sm:pb-14 sm:px-14 flex flex-col justify-center items-center">
      <div className="w-full sm:mb-5 md:mb-10">
        <h1 className="text-m sm:text-2xl mb-4 font-semibold px-2 sm:px-0">
          Plan your Perfect Journey
        </h1>
        <p className="text-xs sm:text-sm text-justify px-2 sm:px-0">
          Cairo's full of hidden gems and has a dizzying amount of attractions
          for visitors. Make the most of your time with our perfect Cairo
          itineraries.
        </p>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 w-full items-center">
        <Itinerary text="1 Day" />
        <Itinerary text="3 Days" />
        <Itinerary text="5 Days" />
        <Itinerary text="7 Days" />
      </div>
    </div>
  );
};

export default Itineraries;
