import React from "react";
import ItinerarySubsection from "./ItinerarySubsection";

const ItinerarySection = ({ favoriteSpots, day }) => {
  return (
    <div className="max-w-[1000px] m-auto p-2 h-[100%] flex flex-col gap-10">
      <h1 className="text-center text-xl font-bold text-[#FFACAC]">{day}</h1>
      <ItinerarySubsection favoriteSpots={favoriteSpots} timeOfDay="Morning" />
      <ItinerarySubsection
        favoriteSpots={favoriteSpots}
        timeOfDay="Afternoon"
      />
      <ItinerarySubsection favoriteSpots={favoriteSpots} timeOfDay="Evening" />
    </div>
  );
};

export default ItinerarySection;
