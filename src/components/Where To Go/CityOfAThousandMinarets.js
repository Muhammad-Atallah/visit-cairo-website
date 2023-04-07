import React from "react";
import Slider from "../Slider";

const CityOfAThousandMinarets = ({ sliderData }) => {
  return (
    <div className="max-w-[1600px] m-auto border-b-2 px-2 py-10 sm:pb-14 sm:px-14">
      <div className="max-w-[1600px] m-auto h-[100%] flex flex-col gap-2 overflow-hidden">
        <div className="flex flex-col items-start">
          <h1 className="text-m sm:text-2xl mb-4 font-semibold px-2 sm:px-0">
            The City of a Thousand Minarets
          </h1>
          <p className="text-xs sm:text-sm text-justify px-2 sm:px-0">
            Tucked away amid the modern urban area of Cairo lies one of the
            world's oldest Islamic cities, with its famous mosques, madrasas,
            hammams and fountains.
          </p>
        </div>
        <Slider sliderData={sliderData} />
      </div>
    </div>
  );
};

export default CityOfAThousandMinarets;
