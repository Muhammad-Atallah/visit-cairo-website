import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const ItineraryLayout = () => {
  const [activeSection, setActiveSection] = useState("oneDay");

  const handleActiveSection = (numberOfDays) => {
    setActiveSection(numberOfDays);
  };
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
            onClick={() => handleActiveSection("oneDay")}
            className={
              activeSection === "oneDay"
                ? "cursor-pointer py-3 border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out font-bold"
                : "cursor-pointer py-3 border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
            }
          >
            1 Day
          </h1>
          <h1
            onClick={() => handleActiveSection("twoDays")}
            className={
              activeSection === "twoDays"
                ? "cursor-pointer py-3 border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out font-bold"
                : "cursor-pointer py-3 border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
            }
          >
            3 Days
          </h1>
          <h1
            onClick={() => handleActiveSection("threeDays")}
            className={
              activeSection === "threeDays"
                ? "cursor-pointer py-3 border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out font-bold"
                : "cursor-pointer py-3 border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
            }
          >
            5 Days
          </h1>
          <h1
            onClick={() => handleActiveSection("fourDays")}
            className={
              activeSection === "fourDays"
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
