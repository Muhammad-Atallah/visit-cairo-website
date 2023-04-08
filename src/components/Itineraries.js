import React from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink
          to="Itinerary page/one day"
          className="w-24 h-20 sm:w-40 sm:h-36 xl:w-48 xl:h-44 m-5 bg-[#FFACAC] flex justify-center rounded group cursor-pointer hover:-translate-y-4 transition duration-500 place-self-center"
        >
          <div className="w-[85%] h-[85%] m-auto flex justify-center text-white border-[1px] border-white">
            <h1 className="m-auto text-md sm:text-xl ">1 Day</h1>
          </div>
        </NavLink>
        <NavLink
          to="Itinerary page/three days"
          className="w-24 h-20 sm:w-40 sm:h-36 xl:w-48 xl:h-44 m-5 bg-[#FFACAC] flex justify-center rounded group cursor-pointer hover:-translate-y-4 transition duration-500 place-self-center"
        >
          <div className="w-[85%] h-[85%] m-auto flex justify-center text-white border-[1px] border-white">
            <h1 className="m-auto text-md sm:text-xl ">3 Days</h1>
          </div>
        </NavLink>
        <NavLink
          to="Itinerary page/five days"
          className="w-24 h-20 sm:w-40 sm:h-36 xl:w-48 xl:h-44 m-5 bg-[#FFACAC] flex justify-center rounded group cursor-pointer hover:-translate-y-4 transition duration-500 place-self-center"
        >
          <div className="w-[85%] h-[85%] m-auto flex justify-center text-white border-[1px] border-white">
            <h1 className="m-auto text-md sm:text-xl ">5 Days</h1>
          </div>
        </NavLink>
        <NavLink
          to="Itinerary page/seven days"
          className="w-24 h-20 sm:w-40 sm:h-36 xl:w-48 xl:h-44 m-5 bg-[#FFACAC] flex justify-center rounded group cursor-pointer hover:-translate-y-4 transition duration-500 place-self-center"
        >
          <div className="w-[85%] h-[85%] m-auto flex justify-center text-white border-[1px] border-white">
            <h1 className="m-auto text-md sm:text-xl ">7 Days</h1>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Itineraries;
