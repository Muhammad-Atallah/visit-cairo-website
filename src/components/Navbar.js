import React, { useContext } from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import PageContext from "../contexts/PageContext";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { page, setPage } = useContext(PageContext);

  const handlePage = (page) => {
    setPage(page);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const handleNav = () => setIsOpen(!isOpen);

  let titleText = "Welcome";
  let titleColor = "text-[#FFACAC]";
  switch (page) {
    case "locals recommend":
      titleText = "Discover";
      titleColor = "text-[#3A98B9]";
      break;
    case "what to eat":
      titleText = "Eat";
      titleColor = "text-[#539165]";
      break;
    case "where to go":
      titleText = "Do";
      titleColor = "text-[#FDD36A]";
      break;
    default:
      titleText = "Welcome";
      titleColor = "text-[#FFACAC]";
  }

  return (
    <div className="w-full xl:w-[70%] flex justify-between text-black bg-white h-14 items-center mx-auto px-10 mb-1 fixed md:static z-50">
      <h1 className="p-4 text-sm font-bold">
        <NavLink onClick={() => handlePage("home")} to="">
          <span className={titleColor}>{titleText}</span> <br></br> Cairo,
          Egypt.
        </NavLink>
      </h1>
      <ul className="hidden text-xs md:flex">
        <NavLink
          onClick={() => handlePage("home")}
          to=""
          className={
            page === "home"
              ? "p-4 cursor-pointer border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out font-bold"
              : "p-4 cursor-pointer border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
          }
        >
          <h1>Home</h1>
        </NavLink>
        <NavLink
          onClick={() => handlePage("where to go")}
          to="/where to go"
          className={
            page === "where to go"
              ? "p-4 cursor-pointer border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out font-bold"
              : "p-4 cursor-pointer border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
          }
        >
          <h1>Where to Go</h1>
        </NavLink>
        <NavLink
          onClick={() => handlePage("what to eat")}
          to="/what to eat"
          className={
            page === "what to eat"
              ? "p-4 cursor-pointer border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out font-bold"
              : "p-4 cursor-pointer border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
          }
        >
          <h1>What to Eat</h1>
        </NavLink>
        <NavLink
          onClick={() => handlePage("locals recommend")}
          to="/locals recommend"
          className={
            page === "locals recommend"
              ? "p-4 cursor-pointer border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out font-bold"
              : "p-4 cursor-pointer border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
          }
        >
          <h1>Locals Recommend</h1>
        </NavLink>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          !isOpen
            ? "fixed right-[-100%] top-14 w-[100%] h-full ease-in-out duration-500 z-50 md:hidden"
            : "fixed right-0 top-14 w-[100%] h-full bg-white ease-in-out duration-500 z-50 md:hidden"
        }
      >
        <ul className="text-xs p-4 uppercase">
          <li
            onClick={() => handleNavClick()}
            className="p-4 border-b-2 border-[#FFACAC] sm:border-b-0 text-center cursor-pointer sm:hover:bg-[#fdc9c9] transition duration-300 ease-in-out"
          >
            <NavLink to="">Home</NavLink>
          </li>
          <li
            onClick={() => handleNavClick()}
            className="p-4 border-b-2 border-[#FFACAC] sm:border-b-0 text-center cursor-pointer sm:hover:bg-[#fdc9c9] transition duration-300 ease-in-out"
          >
            <NavLink to="/where to Go">Where to Go</NavLink>
          </li>
          <li
            onClick={() => handleNavClick()}
            className="p-4 border-b-2 border-[#FFACAC] sm:border-b-0 text-center cursor-pointer sm:hover:bg-[#fdc9c9] transition duration-300 ease-in-out"
          >
            <NavLink to="/what to Eat">What to Eat</NavLink>
          </li>
          <li
            onClick={() => handleNavClick()}
            className="p-4 text-center cursor-pointer border-b-2 border-[#FFACAC] sm:border-b-0 sm:hover:bg-[#fdc9c9] transition duration-300 ease-in-out"
          >
            <NavLink to="/locals Recommend"> Locals Recommend</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
