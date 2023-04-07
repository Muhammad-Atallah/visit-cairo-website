import React from "react";
import FoodArticle from "./FoodArticle";

const EatLikeALocal = ({ featuedFoodArticles }) => {
  return (
    <div className="max-w-[1600px] m-auto border-b-2 px-2 py-10 sm:pb-14 sm:px-14">
      <div className="max-w-[1600px] m-auto h-[100%] flex flex-col gap-2 overflow-hidden">
        <div className="flex flex-col items-start">
          <h1 className="text-m sm:text-2xl mb-4 font-semibold px-2 sm:px-0">
            Eat Like a Local
          </h1>
          <p className="text-xs sm:text-sm text-justify px-2 sm:px-0">
            The people of Cairo reveal their favorite restaurants!
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 md:grid-rows-1 justify-center place-content-center gap-y-10">
          {featuedFoodArticles.map((item) => (
            <FoodArticle {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EatLikeALocal;
