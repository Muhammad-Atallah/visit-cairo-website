import React from "react";

const FeaturedArticle = ({
  heading,
  authorImage,
  authorName,
  authorClassification,
  description,
  image,
}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row max-w-[1600px] m-auto overflow-hidden border-b-2 py-10 px-10 justify-center items-center gap-5 md:gap-16">
      <div className="flex flex-col w-[100%] md:w-[40%] justify-center gap-5 md:gap-10">
        <h1 className="text-md lg:text-2xl font-semibold">{heading}</h1>
        <div className="flex gap-2">
          <img
            className="w-[4rem] h-[4rem] lg:w-[5rem] lg:h-[5rem] aspect-square object-cover"
            src={authorImage}
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-xs lg:text-sm">{authorName}</h1>
            <h2 className="text-xs lg:text-sm">{authorClassification}</h2>
          </div>
        </div>
        <p className="text-sm lg:text-md">{description}</p>
        <a className="text-xs sm:text-sm self-start" href="/">
          Find out More
        </a>
      </div>
      <div className="w-[100%] md:w-[60%] justify-center items-center">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default FeaturedArticle;
