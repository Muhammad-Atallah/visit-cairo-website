import React, { useState } from "react";
import { FoodSection } from "../FoodSection";
import Slider from "../Slider";
import ANightOnTheTown from "./Bars & Nightlife/ANightOnTheTown";
import FeaturedArticle from "../FeaturedArticle";
import FoodParadise from "./FoodParadise";
import EatToYourHeartContent from "./Restaurants/EatToYourHeartContent";
import FeaturedBlockOfArticles from "../FeaturedBlockOfArticles";
import ACoffeeLoverParadise from "./Cafes/ACoffeeLoverParadise";

const WhereToEat = () => {
  const [currentContent, setCurrentContent] = useState("In Focus");
  const mainImage = require("../../images/Where to Eat/where-to-eat.jpg");

  const FoodParadiseData = [
    {
      image: require("../../images/Where to Eat/Food Paradise/1.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Food Paradise/2.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Food Paradise/3.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Food Paradise/4.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Food Paradise/5.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Food Paradise/6.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Food Paradise/7.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Food Paradise/8.jpg"),
      title: "New and Trendy Restaurants",
      classification: "Restaurants",
    },
  ];

  const eatToYourHeartContentData = [
    {
      image: require("../../images/Where to Eat/Restaurants Tab/Eat to your heart's content/6.jpg"),
      title: "Top Vegetarian-Friendly Restaurants in Cairo",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Restaurants Tab/Eat to your heart's content/7.jpg"),
      title: "Top Vegetarian-Friendly Restaurants in Cairo",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Restaurants Tab/Eat to your heart's content/3.jpg"),
      title: "Top Vegetarian-Friendly Restaurants in Cairo",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Restaurants Tab/Eat to your heart's content/4.jpg"),
      title: "Top Vegetarian-Friendly Restaurants in Cairo",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Restaurants Tab/Eat to your heart's content/5.jpg"),
      title: "Top Vegetarian-Friendly Restaurants in Cairo",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Restaurants Tab/Eat to your heart's content/1.jpg"),
      title: "Top Vegetarian-Friendly Restaurants in Cairo",
      classification: "Restaurants",
    },
    {
      image: require("../../images/Where to Eat/Restaurants Tab/Eat to your heart's content/2.jpg"),
      title: "Top Vegetarian-Friendly Restaurants in Cairo",
      classification: "Restaurants",
    },
  ];

  const aCoffeeLoverParadiseData = [
    {
      image: require("../../images/Where to Eat/A Coffee Lover's Paradise/1.jpg"),
      title: "5 Historic Cafés to Visit in Cairo",
      classification: "Cafés",
    },
    {
      image: require("../../images/Where to Eat/A Coffee Lover's Paradise/2.jpg"),
      title: "5 Historic Cafés to Visit in Cairo",
      classification: "Cafés",
    },
    {
      image: require("../../images/Where to Eat/A Coffee Lover's Paradise/3.jpg"),
      title: "5 Historic Cafés to Visit in Cairo",
      classification: "Cafés",
    },
    {
      image: require("../../images/Where to Eat/A Coffee Lover's Paradise/4.jpg"),
      title: "5 Historic Cafés to Visit in Cairo",
      classification: "Cafés",
    },
    {
      image: require("../../images/Where to Eat/A Coffee Lover's Paradise/5.jpg"),
      title: "5 Historic Cafés to Visit in Cairo",
      classification: "Cafés",
    },
    {
      image: require("../../images/Where to Eat/A Coffee Lover's Paradise/6.jpg"),
      title: "5 Historic Cafés to Visit in Cairo",
      classification: "Cafés",
    },
    {
      image: require("../../images/Where to Eat/A Coffee Lover's Paradise/7.jpg"),
      title: "5 Historic Cafés to Visit in Cairo",
      classification: "Cafés",
    },
  ];

  const aGreatDinnerOnEachCornerData = {
    mainHeader: "A great dinner on every corner",
    mainParagraph:
      "Restaurants in Stockholm are as diverse as the districts themselves. Discover a local gem where you can grab a bite to eat and get to know the neighborhood while you're at it.",
    data: [
      {
        image: require("../../images/Where to Eat/A Great Dinner On Every Corner/1.jpg"),
        title: "Restaurants in Old Cairo",
        classification: "Restaurants",
      },
      {
        image: require("../../images/Where to Eat/A Great Dinner On Every Corner/2.jpg"),
        title: "Restaurants in Old Cairo",
        classification: "Restaurants",
      },
      {
        image: require("../../images/Where to Eat/A Great Dinner On Every Corner/3.jpg"),
        title: "Restaurants in Old Cairo",
        classification: "Restaurants",
      },
    ],
  };

  const hitYourSweetSpotData = {
    mainHeader: "Hit Your Sweet Tooth's Sweet Spot",
    mainParagraph:
      "Cairo boasts an array of indulgent desserts that will have you feeling on top of the world.",
    data: [
      {
        image: require("../../images/Where to Eat/A Coffee Lover's Paradise/Desserts/1.jpg"),
        title: "Dessert Places You Have to Try in Cairo",
        classification: "Cafés",
      },
      {
        image: require("../../images/Where to Eat/A Coffee Lover's Paradise/Desserts/2.jpg"),
        title: "Dessert Places You Have to Try in Cairo",
        classification: "Cafés",
      },
      {
        image: require("../../images/Where to Eat/A Coffee Lover's Paradise/Desserts/3.jpg"),
        title: "Dessert Places You Have to Try in Cairo",
        classification: "Cafés",
      },
    ],
  };

  const livePerformanceData = {
    mainHeader: "Where to Find Cairo’s Favorite Bands and Live Performances",
    mainParagraph:
      "Music is the living pulse of a city. In Cairo, the constant rhythm of its streets is but a teaser for the vibrant music scene in its cafés, clubs and concert halls.",
    data: [
      {
        image: require("../../images/Where to Eat/Bars & NIghtlife/4.jpg"),
        title: "Dessert Places You Have to Try in Cairo",
        classification: "Bars & Clubs",
      },
      {
        image: require("../../images/Where to Eat/Bars & NIghtlife/5.jpg"),
        title: "Dessert Places You Have to Try in Cairo",
        classification: "Bars & Clubs",
      },
      {
        image: require("../../images/Where to Eat/Bars & NIghtlife/6.jpg"),
        title: "Dessert Places You Have to Try in Cairo",
        classification: "Bars & Clubs",
      },
    ],
  };

  const aNightOnTheTownData = {
    mainHeader: "A night on the town",
    mainParagraph:
      "Innovative drinks, a great concert, a night of clubbing, or all of the above? Start planing your evening in Stockholm here!",
    data: [
      {
        image: require("../../images/Where to Eat/Bars & NIghtlife/1.jpg"),
        title: "Bars And Clubs That Offers Amazing Cairo Nightlife Experience",
        classification: "Bars & Nightclubs",
      },
      {
        image: require("../../images/Where to Eat/Bars & NIghtlife/2.jpg"),
        title: "Bars And Clubs That Offers Amazing Cairo Nightlife Experience",
        classification: "Bars & Nightclubs",
      },
      {
        image: require("../../images/Where to Eat/Bars & NIghtlife/3.jpg"),
        title: "Bars And Clubs That Offers Amazing Cairo Nightlife Experience",
        classification: "Bars & Nightclubs",
      },
    ],
  };

  const cafesFeaturedArticleData = {
    image: require("../../images/Where to Eat/A Coffee Lover's Paradise/fishawy.png"),
    heading: "5 Historic Cafés to Visit in Cairo",
    description:
      "Some of the cairo's coffee shops date as far back as the 15th century and the days of the Ottoman Empire, yet still remain popular amongst locals and tourists alike to this day.",
  };

  const barsFeaturedArticleData = {
    image: require("../../images/Where to Eat/Bars & NIghtlife/Featured Article/khan.jpg"),
    heading:
      "Walk down the heritage lanes and follow the Khan el Khalili guide",
    description:
      "There are souks and then there is the scintillating Khan el Khalili market. Loud, colourful, crowded and exciting, this market is like a medieval mall with skinny lanes diverging in different directions. ",
  };

  const inFocusfeaturedArticleData = {
    image: require("../../images/Where to Eat/Featured Article/sustainable-food.jpg"),
    heading: "Sustainable Eating in Cairo",
    description:
      "There is a new food empire cooking in Cairo and it is putting delicious, local, and organic products into the hands of a new generation of Egyptians.",
  };

  const restaurantsFeaturedArticleData = {
    image: require("../../images/Where to Eat/Restaurants Tab/Featured Article/falafel.jpg"),
    heading: "10 Must-Try Dishes To Eat When Visiting Cairo",
    description:
      "Think of Egypt and images of the Nile and the pyramids spring to mind – but there’s far more to it than that, especially when it comes to food. If you’re planning a visit to Cairo, take a look at our pick of what to order when in the capital.",
  };

  const handleContent = (content) => {
    setCurrentContent(content);
  };

  console.log(currentContent);

  return (
    <>
      {/* <div className="max-w-[1600px] m-auto overflow-hidden border-b-2 py-10">

      </div> */}
      <div className="w-full h-[70vh]">
        <img className="w-full h-full object-cover" src={mainImage} alt="" />
      </div>
      <div className="max-w-[1600px] m-auto px-2 py-2 sm:py-5">
        <div>
          <h1 className="text-xl lg:text-3xl font-semibold">Eat & Drink</h1>
          <div className="flex p-2 gap-6 mb-10">
            <div
              onClick={() => handleContent("In Focus")}
              className="cursor-pointer"
            >
              <h2>In Focus</h2>
            </div>
            <div
              onClick={() => handleContent("Restaurants")}
              className="cursor-pointer"
            >
              <h2>Restaurants</h2>
            </div>
            <div
              onClick={() => handleContent("Cafes")}
              className="cursor-pointer"
            >
              <h2>Cafés</h2>
            </div>
            <div
              onClick={() => handleContent("Bars")}
              className="cursor-pointer"
            >
              <h2>Bars & Nightlife</h2>
            </div>
          </div>
        </div>

        {currentContent === "In Focus" && (
          <div>
            <div>
              <FoodParadise FoodParadiseData={FoodParadiseData} />
            </div>
            <div>
              <FeaturedArticle {...inFocusfeaturedArticleData} />
            </div>
            <div>
              <FeaturedBlockOfArticles {...aNightOnTheTownData} />
            </div>
          </div>
        )}

        {currentContent === "Restaurants" && (
          <div>
            <div>
              <EatToYourHeartContent sliderData={eatToYourHeartContentData} />
            </div>
            <div>
              <FeaturedArticle {...restaurantsFeaturedArticleData} />
            </div>
            <div>
              <FeaturedBlockOfArticles {...aGreatDinnerOnEachCornerData} />
            </div>
          </div>
        )}

        {currentContent === "Cafes" && (
          <div>
            <div>
              <ACoffeeLoverParadise sliderData={aCoffeeLoverParadiseData} />
            </div>
            <div>
              <FeaturedArticle {...cafesFeaturedArticleData} />
            </div>
            <div>
              <FeaturedBlockOfArticles {...hitYourSweetSpotData} />
            </div>
          </div>
        )}

        {currentContent === "Bars" && (
          <div>
            <div>
              <ANightOnTheTown />
            </div>
            <div>
              <FeaturedArticle {...barsFeaturedArticleData} />
            </div>
            <div>
              <FeaturedBlockOfArticles {...livePerformanceData} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhereToEat;
