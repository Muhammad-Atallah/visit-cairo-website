import React from "react";
import { DiscoverCard } from "./DiscoverCard";

export const Discover = () => {
  const cardData = [
    {
      image: require("../images/Discover/sultan-hassan.jpg"),
      heading: "Islamic Cairo",
      text: "Explore the heart of Islamic Cairo, home to ancient mosques, madrasas, and bazaars, and immerse yourself in the city's Islamic heritage.",
      link: "where to go/Islamic",
      pageName: "Islamic",
      id: 1,
    },
    {
      image: require("../images/Discover/hanging_church1.jpg"),
      heading: "Coptic Cairo",
      text: "Discover the Coptic Christian heritage of Cairo, where ancient churches, monasteries, and relics offer a glimpse into the city's religious history.",
      link: "where to go/Coptic",
      pageName: "Coptic",
      id: 2,
    },
    {
      image: require("../images/Discover/pyramids.jpg"),
      heading: "Pharaonic Cairo",
      text: "Experience the wonder of ancient Cairo, home to the Great Pyramids, Sphinx, and the Egyptian Museum. A journey through time awaits.",
      link: "where to go/ancient",
      pageName: "Ancient",
      id: 3,
    },
    {
      image: require("../images/Discover/modern-cairo.jpg"),
      heading: "Modern Cairo",
      text: "Discover the modern side of Cairo, a bustling metropolis of skyscrapers, shopping malls, and vibrant nightlife. A city that never sleeps.",
      link: "where to go/Modern",
      pageName: "Modern",
      id: 4,
    },
  ];

  return (
    <div className="max-w-[1600px] m-auto border-b-2 px-2 py-10 sm:pb-14 sm:px-14">
      <div className="max-w-[1600px] m-auto h-[100%] flex flex-col gap-2 overflow-hidden">
        <div className="flex flex-col items-start ">
          <h1 className="text-m sm:text-2xl mb-4 font-semibold px-2 sm:px-0">
            Get Lost in Cairo
          </h1>
          <div>
            <p className="text-xs sm:text-sm text-justify px-2 sm:px-0">
              Come experience the magic of Cairo for yourself and discover why
              it has captured the hearts of travelers for centuries. Whether
              you're here for a short visit or a longer stay, Cairo is a
              destination that will leave an indelible mark on your soul.
            </p>
          </div>
        </div>
        <div className="grid grid-col-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 m:gap-y-32 gap-y-10 gap-x-none place-content-center place-items-center mt-4">
          {cardData.map((card) => (
            <DiscoverCard
              {...card}
              className="justify-self-center self-center"
              key={card.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
