import React from "react";
import Button from "./Button";

const FeaturedArticle = ({ heading, description, image, reverse }) => {
  return (
    <div
      className={
        reverse
          ? "flex flex-col-reverse md:flex-row-reverse max-w-[1600px] m-auto border-b-2 py-10 px-2 sm:p-14 overflow-hidden justify-center items-center gap-5 md:gap-16"
          : "flex flex-col-reverse md:flex-row max-w-[1600px] m-auto border-b-2 py-10 px-2 sm:p-14 overflow-hidden justify-center items-center gap-5 md:gap-16"
      }
    >
      <div className="flex flex-col w-[100%] md:w-[40%] justify-center gap-2 md:gap-5">
        <h1 className="text-sm sm:text-2xl sm:mb-4 font-semibold px-2 sm:px-0">
          {heading}
        </h1>
        <p className="mb-2 sm:mb-5 text-xs sm:text-sm text-justify px-2 sm:px-0">
          {description}
        </p>
        <Button buttonText="More" />
      </div>
      <div className="w-[100%] md:w-[60%] justify-center items-center">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default FeaturedArticle;
