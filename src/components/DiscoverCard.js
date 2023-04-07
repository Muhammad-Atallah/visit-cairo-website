import React, { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import CurrentGoPageContext from "../contexts/CurrentGoPageContext";

export const DiscoverCard = ({ image, heading, text, link, page }) => {
  const { currentGoPage, setCurrentGoPage } = useContext(CurrentGoPageContext);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="w-[12rem] h-[15rem] sm:h-[15rem] sm:w-[20rem] md:h-[12rem] md:w-[15rem] l:h-[15rem] l:w-[20rem] xl:h-[15rem] xl:w-[25rem] 2xl:h-[15rem] 2xl:w-[30rem] overflow-hidden shadow-lg bg-black group  border-2 border-white rounded-xl bg-cover bg-center flex place-content-center"
    >
      <div className="w-full h-full relative left-[90%] bg-neutral-900 opacity-80 text-white flex flex-row justify-center items-center group-hover:left-0 duration-700 ease-in-out">
        <div>
          <AiOutlineArrowLeft
            size={20}
            className="inline group-hover:hidden transition duration-700 ease-in-out ml-1 mr-4"
          />
        </div>
        <div className="flex flex-col ml-4">
          <h1 className="text-md sm:text-lg mb-2">{heading}</h1>
          <p className="text-xs mb-4">{text}</p>
          <NavLink
            onClick={() => {
              scrollUp();
              setCurrentGoPage(page);
            }}
            to={link}
          >
            <Button buttonText="More" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
