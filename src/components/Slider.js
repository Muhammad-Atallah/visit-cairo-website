import React, { useContext, useState } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import CurrentLocalContext from "../contexts/CurrentLocalContext";
import scrollUp from "../data/scrollUpFunction";

const Slider = ({ sliderData }) => {
  const [position, setPosition] = useState(0);
  const { localData, setLocalData } = useContext(CurrentLocalContext);

  const handleCurrentLocal = (item) => {
    setLocalData(() => {
      return {
        image: item.image,
        title: item.title,
        quote: item.quote,
        about: item.about,
        guides: item.guides,
        favoriteSpots: item.favoriteSpots,
      };
    });
  };

  const myStyle = {
    right: position + "%",
    transition: "0.5s",
  };

  const handleMovementLeft = () => {
    if (position < 100 && position >= 0) {
      setPosition(position + 20);
    } else {
      setPosition(0);
    }
  };

  const handleMovementRight = () => {
    if (position < 100 && position >= 0) {
      setPosition(position - 20);
    } else {
      setPosition(0);
    }
  };

  return (
    <>
      <div className="flex mt-4 justify-end">
        <SlArrowLeft
          onClick={handleMovementLeft}
          size={25}
          className="m-1 rounded-full bg-red-300 p-1 cursor-pointer"
        />
        <SlArrowRight
          onClick={handleMovementRight}
          size={25}
          className="m-1 rounded-full bg-red-300 p-1 cursor-pointer"
        />
      </div>
      <div className="overflow-hidden max-w-6xl m-auto">
        <div
          style={myStyle}
          className="grid grid-flow-col auto-cols-auto gap-2 sm:auto-cols-[19%] max-w-6xl m-auto relative"
        >
          {sliderData.map((item) => (
            <NavLink
              onClick={() => {
                setLocalData({ ...item });
                console.log(localData);
                scrollUp();
              }}
              to={item.path}
              className="cursor-pointer"
              key={item.id}
            >
              <div
                className=" flex flex-col gap-2 justify-center items-center w-32 sm:w-48"
                key={item.key}
              >
                <img
                  className="w-full object-cover aspect-[4/5] shadow-xl brightness-[0.8] rounded-sm"
                  src={item.image}
                  alt=""
                />
                <div className="w-full h-0 top-[-6rem] relative p-2 text-white flex flex-col gap-y-2">
                  <h1 className="font-bold text-xs sm:text-base">
                    {item.title}
                  </h1>
                  <h2 className="uppercase text-[11px]">
                    {item.classification}
                  </h2>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
