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

  let itineraryTitle = "Cairo's Best in a Day";
  switch (activeItinerary) {
    case "oneDay":
      itineraryTitle = "Cairo's Best in a Day";
      break;
    case "threeDays":
      itineraryTitle = "Cairo's Best in 3 Days";
      break;
    case "fiveDays":
      itineraryTitle = "Cairo's Best in 5 Days";
      break;
    case "sevenDays":
      itineraryTitle = "Cairo's Best in 7 Days";
  }

  return (
    <div className="max-w-[1600px] m-auto border-b-2 px-2 py-10 sm:pb-14 sm:px-14">
      <h1 className="text-center text-2xl font-bold mb-10">{itineraryTitle}</h1>
      <div className="flex gap-2 justify-center">
        {numberOfDays.length > 1 &&
          numberOfDays.map((item) => (
            <h1
              onClick={() => handleActiveButton(item)}
              className={
                currentItineraryDay === item
                  ? "text-center text-xs p-1 text-white bg-[#fc7070] border-2 rounded-xl cursor-pointer -translate-y-2 transition duration-500 ease-in-out"
                  : "text-center text-xs p-1 text-white bg-[#f79797] border-2 rounded-xl cursor-pointer"
              }
            >
              {item}
            </h1>
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
