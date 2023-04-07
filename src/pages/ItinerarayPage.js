import React from "react";
import { AiOutlineLink } from "react-icons/ai";

const ItinerarayPage = () => {
  const favoriteSpots = [
    {
      image: require("../images/Local Page/Amira Fathi/spots/1.jpg"),
      title: "The Serapeum",
      classification: "Attraction",
      link: "https://www.google.com/maps/place/Serapeum,+El+Qantara+El+Sharqiya,+Ismailia+Governorate,+Egypt/@30.5142464,32.3255567,16z/data=!3m1!4b1!4m6!3m5!1s0x14f85fbc7d78d8b1:0xcd2d23a7d9ae427f!8m2!3d30.5143303!4d32.3270475!16s%2Fg%2F11b5v4d3j7?authuser=0",
      description:
        "The Serapeum of Saqqara was the ancient Egyptian burial place for sacred bulls of the Apis cult at Memphis. It was believed that the bulls were incarnations of the god Ptah, which would become immortal after death as Osiris-Apis.",
    },
    {
      image: require("../images/Local Page/Amira Fathi/spots/2.jpg"),
      title: "The Serapeum",
      classification: "Attraction",
      link: "https://www.google.com/maps/place/Serapeum,+El+Qantara+El+Sharqiya,+Ismailia+Governorate,+Egypt/@30.5142464,32.3255567,16z/data=!3m1!4b1!4m6!3m5!1s0x14f85fbc7d78d8b1:0xcd2d23a7d9ae427f!8m2!3d30.5143303!4d32.3270475!16s%2Fg%2F11b5v4d3j7?authuser=0",
      description:
        "The Serapeum of Saqqara was the ancient Egyptian burial place for sacred bulls of the Apis cult at Memphis. It was believed that the bulls were incarnations of the god Ptah, which would become immortal after death as Osiris-Apis.",
    },
  ];

  return (
    <div className="max-w-[1600px] m-auto border-b-2 px-2 py-10 sm:pb-14 sm:px-14">
      <h1 className="text-center text-2xl font-bold mb-10">
        A Perfect Day in Cairo
      </h1>
      <div className="max-w-[1000px] m-auto p-2 h-[100%] flex flex-col gap-16">
        <div className="flex flex-col gap-10">
          <h1 className="text-xl font-semibold">Morning</h1>
          {favoriteSpots.map((item) => (
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
                  <h1 className="text-xs text-[#fc9696]">
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
        <div className="flex flex-col gap-10">
          <h1 className="text-xl font-semibold">Afternoon</h1>
          {favoriteSpots.map((item) => (
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
                  <h1 className="text-xs text-[#fc9696]">
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
        <div className="flex flex-col gap-10">
          <h1 className="text-xl font-semibold">Evening</h1>
          {favoriteSpots.map((item) => (
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
                  <h1 className="text-xs text-[#fc9696]">
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
    </div>
  );
};

export default ItinerarayPage;
