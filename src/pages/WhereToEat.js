import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const WhereToEat = () => {
  const [currentContent, setCurrentContent] = useState("In Focus");
  const mainImage = require("../images/Where to Eat/where-to-eat.jpg");

  const handleContent = (content) => {
    setCurrentContent(content);
  };

  console.log(currentContent);

  return (
    <>
      <div className="w-full h-[70vh]">
        <img className="w-full h-full object-cover" src={mainImage} alt="" />
      </div>
      <div className="max-w-[1600px] m-auto px-2 py-2 sm:py-5">
        <div>
          <h1 className="text-xl lg:text-3xl font-semibold">Eat & Drink</h1>
          <div className="flex p-2 gap-6 mb-10">
            <div
              onClick={() => handleContent("In Focus")}
              className="cursor-pointer"
            >
              <h2>
                <NavLink to="">In Focus</NavLink>
              </h2>
            </div>
            <div
              onClick={() => handleContent("Restaurants")}
              className="cursor-pointer"
            >
              <h2>
                <NavLink to="Restaurants">Restaurants</NavLink>
              </h2>
            </div>
            <div
              onClick={() => handleContent("Cafes")}
              className="cursor-pointer"
            >
              <h2>
                <NavLink to="Cafes">Cafés</NavLink>
              </h2>
            </div>
            <div
              onClick={() => handleContent("Bars")}
              className="cursor-pointer"
            >
              <h2>
                <NavLink to="Bars">Bars & Nightlife</NavLink>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default WhereToEat;
