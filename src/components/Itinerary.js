import React from "react";
import { NavLink } from "react-router-dom";

const Itinerary = ({ text }) => {
  return (
    <NavLink to={"Itinerary page"}>
      <div className="w-24 h-20 sm:w-40 sm:h-36 xl:w-48 xl:h-44 m-5 bg-[#FFACAC] flex justify-center rounded group cursor-pointer hover:-translate-y-4 transition duration-500 place-self-center">
        <div className="w-[85%] h-[85%] m-auto flex justify-center text-white border-[1px] border-white">
          <h1 className="m-auto text-md sm:text-xl ">{text}</h1>
        </div>
      </div>
    </NavLink>
  );
};

export default Itinerary;
