import React from "react";
import { NavLink } from "react-router-dom";

const Footer = ({ modalState, setModalState, language }) => {
  const toggleModal = () => {
    setModalState(!modalState);
  };

  return (
    <div className="w-[100vw] h-full sm:h-12 bg-white text-black border-t-2 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-16 p-2">
      <div className="text-xs sm:text-md flex gap-5">
        <NavLink className="hover:bg-[#fdc9c9] sm:py-4 sm:px-5" to="home">
          Home
        </NavLink>
        <NavLink className="hover:bg-[#fdc9c9] sm:py-4 sm:px-5" to="/">
          About
        </NavLink>
        <NavLink className="hover:bg-[#fdc9c9] sm:py-4 sm:px-5" to="/">
          Privacy Policy
        </NavLink>
      </div>
      <div
        onClick={toggleModal}
        className="cursor-pointer text-xs sm:text-md font-bold"
      >
        <div>{language}</div>
      </div>
    </div>
  );
};

export default Footer;
