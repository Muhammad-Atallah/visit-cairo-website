import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const EatLayout = () => {
  const mainImage = require("../images/Where to Eat/where-to-eat.jpg");
  const [currentPage, setCurrentPage] = useState("");

  const handleNavigationButtons = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="w-full h-[70vh]">
        <img className="w-full h-full object-cover" src={mainImage} alt="" />
      </div>
      <div className="max-w-[1600px] m-auto pt-10 px-2 sm:pt-14 sm:px-14">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold">Eat & Drink</h1>
          <div className="flex p-2 gap-2 sm:gap-6 sm:mb-10 text-[12px] sm:text-base">
            <NavLink
              onClick={() => handleNavigationButtons("")}
              className={
                currentPage === ""
                  ? "py-1 border-b-2 sm:border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out"
                  : "py-1 border-b-2 sm:border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
              }
              to=""
            >
              In Focus
            </NavLink>

            <NavLink
              onClick={() => handleNavigationButtons("Restaurants")}
              className={
                currentPage === "Restaurants"
                  ? "py-1 border-b-2 sm:border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out"
                  : "py-1 border-b-2 sm:border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
              }
              to="Restaurants"
            >
              Restaurants
            </NavLink>

            <NavLink
              onClick={() => handleNavigationButtons("Cafes")}
              className={
                currentPage === "Cafes"
                  ? "py-1 border-b-2 sm:border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out"
                  : "py-1 border-b-2 sm:border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
              }
              to="Cafes"
            >
              Cafés
            </NavLink>

            <NavLink
              onClick={() => handleNavigationButtons("Bars")}
              className={
                currentPage === "Bars"
                  ? "py-1 border-b-2 sm:border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out"
                  : "py-1 border-b-2 sm:border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
              }
              to="Bars"
            >
              Bars & Nightlife
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default EatLayout;
