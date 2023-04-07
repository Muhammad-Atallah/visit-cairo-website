import React from "react";

const ANightOnTheTown = () => {
  const aNightOnTheTownData = [
    {
      image: require("../../../images/Where to Eat/Bars & NIghtlife/1.jpg"),
      heading: "Bars And Clubs That Offers Amazing Cairo Nightlife Experience",
      classification: "Bars & Nightclubs",
    },
    {
      image: require("../../../images/Where to Eat/Bars & NIghtlife/2.jpg"),
      heading: "Bars And Clubs That Offers Amazing Cairo Nightlife Experience",
      classification: "Bars & Nightclubs",
    },
    {
      image: require("../../../images/Where to Eat/Bars & NIghtlife/3.jpg"),
      heading: "Bars And Clubs That Offers Amazing Cairo Nightlife Experience",
      classification: "Bars & Nightclubs",
    },
  ];
  return (
    <div className="max-w-[1600px] m-auto overflow-hidden border-b-2">
      <div className="max-w-[1600px] m-auto p-2 h-[100%] flex flex-col gap-2">
        <div className="flex flex-col items-center sm:items-start mb-6">
          <h1 className="text-m sm:text-2xl mb-4 font-semibold px-2 sm:px-0">
            A night on the town
          </h1>
          <p className="text-xs sm:text-sm text-start px-2">
            Innovative drinks, a great concert, a night of clubbing, or all of
            the above? Start planing your evening in Stockholm here!
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-y-2 gap-x-10">
          {aNightOnTheTownData.map((item) => (
            <a className="cursor-pointer">
              <div className="max-w-[22rem] max-h-[20rem]" key={item.key}>
                <img
                  className="w-full min-h-[14rem] brightness-95 aspect-[8/7]"
                  src={item.image}
                  alt=""
                />
                <div className=" text-white relative flex flex-col p-2 gap-2 max-w-[22rem] bottom-[6.8rem] sm:bottom-24 h-0">
                  <h1 className="font-semibold sm:text-xs md:text-sm xl:text-lg">
                    {item.heading}
                  </h1>
                  <h2 className="text-xs uppercase">{item.classification}</h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ANightOnTheTown;
