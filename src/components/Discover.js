import React from "react";
import { DiscoverCard } from "./DiscoverCard";

export const Discover = () => {
  const cardData = [
    {
      image: require("../images/Discover/sultan-hassan.jpg"),
      heading: "Islamic Cairo",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nobis dolorem suscipit illo totam iste dolorum, possimus numquam sapiente eos.",
      link: "where to go/Islamic",
      page: "Islamic",
    },
    {
      image: require("../images/Discover/hanging_church1.jpg"),
      heading: "Coptic Cairo",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium explicabo ab quaerat, exercitationem omnis sapiente.",
      link: "where to go/Coptic",
      page: "Coptic",
    },
    {
      image: require("../images/Discover/pyramids.jpg"),
      heading: "Pharaonic Cairo",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil at officiis omnis, ab perspiciatis voluptatibus illo, impedit nam voluptatem accusantium sapiente. Recusandae tempore voluptatem assumenda.",
      link: "where to go/ancient",
      page: "Ancient",
    },
    {
      image: require("../images/Discover/modern-cairo.jpg"),
      heading: "Modern Cairo",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum officia numquam animi laborum quidem, labore sunt nulla asperiores!",
      link: "where to go/Modern",
      page: "Modern",
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              quasi sint quibusdam veniam officia ea eligendi quidem a mollitia
              laboriosam obcaecati? Hic incidunt adipisci in? Excepturi, autem
              ullam. Odio quidem ullam tempora! Culpa, sapiente placeat
              repellendus exercitationem harum velit quidem.
            </p>
          </div>
        </div>
        <div className="grid grid-col-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 m:gap-y-32 gap-y-10 gap-x-none place-content-center place-items-center mt-4">
          {cardData.map((card) => (
            <DiscoverCard
              {...card}
              className="justify-self-center self-center"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
