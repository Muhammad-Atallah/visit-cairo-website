import React from "react";
import Slider from "../../Slider";

const ACoffeeLoverParadise = ({ sliderData }) => {
  return (
    <div className="max-w-[1600px] m-auto border-b-2 px-2 py-10 sm:pb-14 sm:px-14">
      <div className="max-w-[1600px] m-auto h-[100%] flex flex-col gap-2 overflow-hidden">
        <div className="flex flex-col items-start">
          <h1 className="text-m sm:text-2xl mb-4 font-semibold px-2 sm:px-0">
            A coffee lover's paradise
          </h1>
          <p className="text-xs sm:text-sm text-justify px-2 sm:px-0">
            “Legal drugs” is what coffee is called in Egypt and that explains
            why the slightest drop in its quality can affect the mood of all
            coffeehouse regulars who cannot get through the day without a few
            cups.
          </p>
        </div>
        <Slider sliderData={sliderData} />
      </div>
    </div>
  );
};

export default ACoffeeLoverParadise;
