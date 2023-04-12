import React, { useContext } from "react";
import ItinerarySection from "../components/ItinerarySection";
import {
  oneDayData,
  threeDayData,
  fiveDayData,
  sevenDayData,
} from "../data/itinerariesData";
import CurrentItineraryContext from "../contexts/CurrentItineraryContext";

const ItinerarayPage = () => {
  const {
    activeItinerary,
    currentItineraryDay,
    setCurrentItineraryDay,
    numberOfDays,
    setNumberOfDays,
  } = useContext(CurrentItineraryContext);

  const handleActiveButton = (item) => {
    setCurrentItineraryDay(item);
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
                currentItineraryDay === item
                  ? "text-center text-sm p-2 text-white bg-[#fc7070] border-2 rounded-xl cursor-pointer -translate-y-2 transition duration-500 ease-in-out"
                  : "text-center text-sm p-2 text-white bg-[#f79797] border-2 rounded-xl cursor-pointer"
              }
            >{`Day ${item}`}</h1>
          ))}
      </div>

      {activeItinerary === "oneDay" && <ItinerarySection data={oneDayData} />}

      {activeItinerary === "threeDays" && (
        <ItinerarySection data={threeDayData[currentItineraryDay - 1]} />
      )}

      {activeItinerary === "fiveDays" && (
        <ItinerarySection data={fiveDayData[currentItineraryDay - 1]} />
      )}

      {activeItinerary === "sevenDays" && (
        <ItinerarySection data={sevenDayData[currentItineraryDay - 1]} />
      )}
    </div>
  );
};

export default ItinerarayPage;
