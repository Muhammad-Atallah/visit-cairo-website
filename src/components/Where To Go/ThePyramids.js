import React from "react";
import Slider from "../Slider";

const ThePyramids = ({ sliderData }) => {
  return (
    <div className="max-w-[1600px] m-auto border-b-2 px-2 py-10 sm:pb-14 sm:px-14">
      <div className="max-w-[1600px] m-auto h-[100%] flex flex-col gap-2 overflow-hidden">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            The Fascinating Pyramids of Cairo
          </h1>
          <p className="text-xs sm:text-sm text-justify px-2 sm:px-0">
            Unquestionably the most iconic symbol of Egypt throughout history is
            the pyramid. The masonry structures with a pyramid design are
            symbolic and significant in Egyptian culture, and today they are
            among the top attractions in the entire country.
          </p>
        </div>
        <Slider sliderData={sliderData} />
      </div>
    </div>
  );
};

export default ThePyramids;
