import React from "react";

const FoodArticle = ({
  image,
  heading,
  classification,
  authorImage,
  authorName,
  authorClassification,
}) => {
  return (
    <a
      className="text-white w-[15rem] h-[12rem] md:w-[12rem] md:h-[12rem] lg:w-[15rem] lg:h-[12rem] xl:w-[20rem] xl:h-[18rem] overflow-hidden bg-cover group shadow-md shadow-black self-center justify-self-center"
      href="/"
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="text-white w-[15rem] h-[12rem] md:w-[12rem] md:h-[12rem] lg:w-[15rem] lg:h-[12rem] xl:w-[20rem] xl:h-[18rem] overflow-hidden bg-cover group shadow-md shadow-black self-center justify-self-center"
      >
        <div className="w-[15rem] h-[12rem] md:w-[12rem] md:h-[12rem] lg:w-[15rem] lg:h-[12rem] xl:w-[20rem] xl:h-[18rem] absolute bg-neutral-900 opacity-30"></div>
        <div className="w-full h-full md:top-[55%] md:group-hover:top-[20%] xl:top-[65%] relative p-1 xl:group-hover:top-[35%] duration-700 flex flex-col justify-end md:justify-start gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-md xl:text-2xl font-semibold">{heading}</h1>
            <h2 className="text-xs xl:text-sm uppercase">{classification}</h2>
          </div>
          <div className="flex gap-2">
            <img
              className="w-[4rem] h-[4rem] xl:w-[5rem] xl:h-[5rem] aspect-square object-cover"
              src={authorImage}
              alt=""
            />
            <div className="flex flex-col text-sm">
              <h1>{authorName}</h1>
              <h2>{authorClassification}</h2>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default FoodArticle;
