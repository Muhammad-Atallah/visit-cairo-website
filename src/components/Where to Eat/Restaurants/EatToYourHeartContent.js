import React from "react";
import Slider from "../../Slider";

const EatToYourHeartContent = ({ sliderData }) => {
  return (
    <div className="max-w-[1600px] m-auto border-b-2 px-2 py-10 sm:pb-14 sm:px-14">
      <div className="max-w-[1600px] m-auto h-[100%] flex flex-col gap-2 overflow-hidden">
        <div className="flex flex-col items-start">
          <h1 className="text-m sm:text-2xl mb-4 font-semibold px-2 sm:px-0">
            Eat to your heart's content
          </h1>
          <p className="text-xs sm:text-sm text-justify px-2 sm:px-0">
            Fine dining, street food, and plenty of places to fika - a trip to
            Stockholm is a real treat for your tastebuds. Whatever you're
            craving, you're sure to find something to your liking. And with a
            culinary scene as varied and innovative as Stockholm's, you'll
            probably discover a new favorite too!
          </p>
        </div>
        <Slider sliderData={sliderData} />
      </div>
    </div>
  );
};

export default EatToYourHeartContent;
