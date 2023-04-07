import React from "react";
import ANightOnTheTown from "../../components/Where to Eat/Bars & Nightlife/ANightOnTheTown";
import FeaturedArticle from "../../components/FeaturedArticle";
import FeaturedBlockOfArticles from "../../components/FeaturedBlockOfArticles";

const Bars = () => {
  const barsFeaturedArticleData = {
    image: require("../../images/Where to Eat/Bars & NIghtlife/Featured Article/khan.jpg"),
    heading:
      "Walk down the heritage lanes and follow the Khan el Khalili guide",
    description:
      "There are souks and then there is the scintillating Khan el Khalili market. Loud, colourful, crowded and exciting, this market is like a medieval mall with skinny lanes diverging in different directions. ",
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
  return (
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
  );
};

export default Bars;