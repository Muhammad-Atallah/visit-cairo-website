import React from "react";
import ItinerarySubsection from "./ItinerarySubsection";

const ItinerarySection = ({ data }) => {
  return (
    <div className="max-w-[1000px] m-auto p-2 h-[100%] flex flex-col gap-10">
      <ItinerarySubsection data={data[0]} timeOfDay="Morning" />
      <ItinerarySubsection data={data[1]} timeOfDay="Afternoon" />
      <ItinerarySubsection data={data[2]} timeOfDay="Evening" />
    </div>
  );
};

export default ItinerarySection;
