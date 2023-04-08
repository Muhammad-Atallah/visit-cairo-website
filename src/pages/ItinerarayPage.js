import React from "react";
import ItinerarySection from "../components/ItinerarySection";
import { favoriteSpots } from "../data/itinerariesData";

const ItinerarayPage = () => {
  return (
    <div className="max-w-[1600px] m-auto border-b-2 px-2 py-10 sm:pb-14 sm:px-14">
      <h1 className="text-center text-2xl font-bold mb-10">
        A Perfect Day in Cairo
      </h1>
      <ItinerarySection favoriteSpots={favoriteSpots} day="Day 1" />
    </div>
  );
};

export default ItinerarayPage;
