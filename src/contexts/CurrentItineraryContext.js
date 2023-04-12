import { createContext, useState } from "react";

const CurrentItineraryContext = createContext("");

export function ItineraryProvider({ children }) {
  const [activeItinerary, setActiveItinerary] = useState("oneDay");
  const [currentItineraryDay, setCurrentItineraryDay] = useState(1);
  const [numberOfDays, setNumberOfDays] = useState([1]);
  return (
    <CurrentItineraryContext.Provider
      value={{
        activeItinerary,
        currentItineraryDay,
        setCurrentItineraryDay,
        setActiveItinerary,
        numberOfDays,
        setNumberOfDays,
      }}
    >
      {children}
    </CurrentItineraryContext.Provider>
  );
}

export default CurrentItineraryContext;
