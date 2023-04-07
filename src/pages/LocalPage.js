import React, { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";

const LocalPage = ({ image, title, quote, about, guides, favoriteSpots }) => {
  const [activeSection, setActiveSection] = useState("guides");

  const handleActiveSection = () => {
    activeSection === "guides"
      ? setActiveSection("spots")
      : setActiveSection("guides");
  };

  return (
    <>
      <div className="max-w-[1600px] m-auto py-10 px-2 sm:p-14">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center md:items-start px-2 md:px-10">
          <div>
            <img
              className="min-w-[12rem] w-[12rem] md:w-[15rem] rounded-sm mt-8 md:mt-0"
              src={image}
            />
          </div>
          <div className="flex flex-col gap-10 max-w-xl">
            <div className="flex flex-col gap-2">
              <h1 className="md::text-xl font-bold">{title}</h1>
              <p className="text-sm md:text-base font-semibold">{quote}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-sm md:text-base font-semibold">About Me</h2>
              <p className="text-xs md:text-sm">{about}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-[1600px] text-xs sm:text-sm  m-auto sm:px-16 xl:px-44 border-b-2 flex gap-5 sm:gap-10 justify-center sm:justify-start">
          <h1
            onClick={handleActiveSection}
            className={
              activeSection === "guides"
                ? "cursor-pointer py-3 border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out font-bold"
                : "cursor-pointer py-3 border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
            }
          >
            My Guides
          </h1>
          <h1
            onClick={handleActiveSection}
            className={
              activeSection === "spots"
                ? "cursor-pointer py-3 border-b-4 border-[#FFACAC] hover:border-[#FFACAC] transition duration-400 ease-in-out font-bold"
                : "cursor-pointer py-3 border-b-4 border-white hover:border-[#FFACAC] transition duration-400 ease-in-out"
            }
          >
            Favorite Spots
          </h1>
        </div>
      </div>
      <div className="max-w-[1600px] m-auto py-10 px-2 sm:p-14 flex justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 ">
          {activeSection === "guides" &&
            guides.map((item) => (
              <a className="cursor-pointer">
                <div>
                  <img
                    className="w-64 h-60 object-cover brightness-75 rounded-sm"
                    src={item.image}
                    alt=""
                  />
                  <div className="w-60 h-0 relative bottom-[5rem] text-white px-2">
                    <h1>{item.title}</h1>
                    <h2>{item.classification}</h2>
                  </div>
                </div>
              </a>
            ))}
        </div>

        <div className="grid grid-flow-row">
          {activeSection === "spots" &&
            favoriteSpots.map((item) => (
              <div className="flex flex-col md:flex-row gap-4 p-5 border-2 m-1 hover:border-4 rounded-sm">
                <img
                  className="w-[14rem] sm:w-[20rem] md:w-[12rem] lg:w-[20rem] object-cover self-center rounded-sm"
                  src={item.image}
                  alt=""
                />
                <div className="flex flex-col gap-3 w-[12rem] sm:w-[20rem] md:w-auto">
                  <h1 className="text-sm lg:text-base font-bold self-center md:self-start">
                    {item.title}
                  </h1>
                  <h2 className="uppercase text-xs self-center md:self-start">
                    {item.classification}
                  </h2>
                  <p className="text-xs lg:text-sm">{item.description}</p>
                  <a className="flex items-center gap-1" href={item.link}>
                    <h1 className="text-xs lg:text-sm text-[#fc9696]">
                      Open in Google Maps
                    </h1>
                    <span>
                      <AiOutlineLink size={20} className="text-[#fc9696]" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default LocalPage;
