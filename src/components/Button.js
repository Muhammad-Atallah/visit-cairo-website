import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Button = ({ buttonText }) => {
  return (
    <a
      className="flex gap-[0.4rem] bg-[#f79797] hover:bg-[#fc7070] rounded-xl p-2 w-20 justify-center items-center text-white"
      href="/"
    >
      <h1 className="text-xs inline">{buttonText}</h1>
      <IoIosArrowForward className="w-auto self-center mt-[0.2rem]" size={15} />
    </a>
  );
};

export default Button;
