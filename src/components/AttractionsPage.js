import React from "react";

const AttractionsPage = ({ mainHeader, mainParagraph, data }) => {
  return (
    <div className="max-w-[1600px] m-auto border-b-2 px-2 py-10 sm:pb-14 sm:px-14">
      <h1 className="text-m sm:text-2xl mb-4 font-semibold px-2 sm:px-0">
        {mainHeader}
      </h1>
      <p className="text-xs sm:text-sm text-justify px-2 sm:px-0 mb-10">
        {mainParagraph}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto auto-cols-auto gap-10 w-full h-full">
        {data.map((item) => (
          <a className="cursor-pointer">
            <div
              className="h-64 w-58 bg-cover bg-center bg-no-repeat text-white flex flex-col justify-end gap-2 p-4 rounded-md shadow-lg text-center group bg-"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <h1 className="relative group-hover:-translate-y-4 transition duration-500 ease-in-out">
                {item.title}
              </h1>
              <h2 className="uppercase relative group-hover:-translate-y-4 transition duration-500 ease-in-out text-xs">
                {item.classification}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AttractionsPage;
