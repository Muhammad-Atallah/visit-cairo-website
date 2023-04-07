import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CurrentGoPageContext from "../contexts/CurrentGoPageContext";

const GoLayout = () => {
  const mainImage = require("../images/Where to Go/main2.jpg");
  const { currentGoPage, setCurrentGoPage } = useContext(CurrentGoPageContext);
  // const [currentPage, setCurrentPage] = useState("");

  const handleNavigationButtons = (page) => {
    setCurrentGoPage(page);
  };
  return (
    <>
      <div className="w-full h-[70vh]">
        <img className="w-full h-full object-cover" src={mainImage} alt="" />
      </div>
      <div className="max-w-[1600px] m-auto pt-10 px-2 sm:pt-14 sm:px-14">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold">See & Do</h1>
          <div className="flex p-2 gap-2 sm:gap-6 sm:mb-10 text-[12px] sm:text-base">
            <NavLink
              onClick={() => handleNavigationButtons("")}
              className={
                currentGoPage === ""
                  ? "py-1 border-b-2 sm:border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out"
                  : "py-1 border-b-2 sm:border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
              }
              to=""
            >
              In Focus
            </NavLink>

            <NavLink
              onClick={() => handleNavigationButtons("Ancient")}
              className={
                currentGoPage === "Ancient"
                  ? "py-1 border-b-2 sm:border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out"
                  : "py-1 border-b-2 sm:border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
              }
              to="Ancient"
            >
              Ancient Cairo
            </NavLink>

            <NavLink
              onClick={() => handleNavigationButtons("Islamic")}
              className={
                currentGoPage === "Islamic"
                  ? "py-1 border-b-2 sm:border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out"
                  : "py-1 border-b-2 sm:border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
              }
              to="Islamic"
            >
              Islamic Cairo
            </NavLink>

            <NavLink
              onClick={() => handleNavigationButtons("Coptic")}
              className={
                currentGoPage === "Coptic"
                  ? "py-1 border-b-2 sm:border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out"
                  : "py-1 border-b-2 sm:border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
              }
              to="Coptic"
            >
              Coptic Cairo
            </NavLink>
            <NavLink
              onClick={() => handleNavigationButtons("Modern")}
              className={
                currentGoPage === "Modern"
                  ? "py-1 border-b-2 sm:border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out"
                  : "py-1 border-b-2 sm:border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
              }
              to="Bars"
            >
              Modern Cairo
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default GoLayout;
