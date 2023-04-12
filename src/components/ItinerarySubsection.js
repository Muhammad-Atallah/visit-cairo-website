import React from "react";
import { AiOutlineLink } from "react-icons/ai";

const ItinerarySubsection = ({ data, timeOfDay }) => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-lg font-semibold">{timeOfDay}</h1>
      {data.map((item) => (
        <div className="flex flex-col md:flex-row gap-4 p-5 border-2 hover:border-4 rounded-sm">
          <img
            className="w-[20rem] md:w-[14rem] object-cover self-center rounded-sm"
            src={item.image}
            alt=""
          />
          <div className="flex flex-col gap-3 max-w-[20rem] md:max-w-[30rem] md:w-auto m-auto">
            <h1 className="text-sm font-bold self-center md:self-start">
              {item.title}
            </h1>
            <h2 className="uppercase text-xs self-center md:self-start">
              {item.classification}
            </h2>
            <p className="text-xs">{item.description}</p>
            <a className="flex items-center gap-1" href={item.link}>
              <h1 className="text-xs text-[#fc9696]">Open in Google Maps</h1>
              <span>
                <AiOutlineLink size={20} className="text-[#fc9696]" />
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItinerarySubsection;
