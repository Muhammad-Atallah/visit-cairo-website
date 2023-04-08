import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const ItineraryLayout = () => {
  const [activeSection, setActiveSection] = useState("guides");

  const handleActiveSection = () => {
    activeSection === "guides"
      ? setActiveSection("spots")
      : setActiveSection("guides");
  };
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
        <div className="max-w-[1600px] text-xs sm:text-sm  m-auto sm:px-16 xl:px-44 border-b-2 flex gap-5 sm:gap-10 justify-center sm:justify-start">
          <h1
            onClick={handleActiveSection}
            className={
              activeSection === "guides"
                ? "cursor-pointer py-3 border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out font-bold"
                : "cursor-pointer py-3 border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
            }
          >
            My Guides
          </h1>
          <h1
            onClick={handleActiveSection}
            className={
              activeSection === "spots"
                ? "cursor-pointer py-3 border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out font-bold"
                : "cursor-pointer py-3 border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
            }
          >
            Favorite Spots
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
