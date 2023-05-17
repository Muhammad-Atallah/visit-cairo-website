import React from "react";

const FeaturedBlockOfArticles = ({ mainHeader, mainParagraph, data }) => {
  return (
    <div className="max-w-[1600px] m-auto py-10 px-2 sm:p-14 border-b-2 overflow-hidden">
      <div className="max-w-[1600px] m-auto p-2 h-[100%] flex flex-col gap-2">
        <div className="flex flex-col items-start mb-6">
          <h1 className="text-m sm:text-2xl mb-4 font-semibold px-2 sm:px-0">
            {mainHeader}
          </h1>
          <p className="text-xs sm:text-sm text-justify px-2 sm:px-0">
            {mainParagraph}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-y-2 gap-x-5 lg:gap-x-20">
          {data.map((item) => (
            <a className="cursor-pointer">
              <div className="max-w-[16rem] max-h-[14rem]" key={item.key}>
                <img
                  className="w-full brightness-95 aspect-[8/7] rounded-sm"
                  src={item.image}
                  alt=""
                />
                <div className=" text-white relative flex flex-col p-2 gap-2 max-w-[22rem] bottom-[6rem] sm:bottom-[5rem] h-0">
                  <h1 className="font-bold text-sm sm:text-xs xl:text-sm">
                    {item.title}
                  </h1>
                  <h2 className="text-[11px] uppercase">
                    {item.classification}
                  </h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlockOfArticles;
