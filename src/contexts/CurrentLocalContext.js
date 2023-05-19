import { createContext, useState } from "react";

const CurrentLocalContext = createContext("");

export function CurrentLocalProvider({ children }) {
  const [localData, setLocalData] = useState({
    id: 1,
    image: require("../images/Locals/1.jpg"),
    title: "Amira Hadi",
    classification: "local in cairo",
    quote:
      "'Cairo is a city that never sleeps, always buzzing with energy and excitement. I feel alive here, surrounded by the rich history and culture that this city has to offer.'",
    about:
      "Amira is a young university student living in the bustling city of Cairo. She finds inspiration and joy in the vibrant energy of the city, which is full of life and history. Amidst the noise and crowds, Amira feels alive and connected to her surroundings. Amira studies anthropology at the American University in Cairo and is passionate about exploring different cultures and traditions. She loves to spend her free time visiting historical sites and trying out new street food. Despite the challenges of living in a big city, Amira finds solace in the tight-knit community of her university and the warmth of her family and friends.",
    guides: [
      {
        image: require("../images/articles/Locals' Articles/Amira Hadi/UnearthingCairoHiddenGems/main-image.jpg"),
        title:
          "Unearthing Cairo's Hidden Gems: A Local's Guide to Off-the-Beaten-Path Historical Sites",
        classification: "Attractions",
        to: "/UnearthingCairoHiddenGems",
      },
      {
        image: require("../images/articles/Locals' Articles/Amira Hadi/StreetFoodAdventures/main-image.jpg"),
        title:
          "Street Food Adventures: Exploring Cairo's Culinary Delights with a Local Foodie",
        classification: "Restaurants",
        to: "/StreetFoodAdventures",
      },
      {
        image: require("../images/articles/Locals' Articles/Amira Hadi/EmbracingCulturalDiversity/main-image.jpg"),
        title:
          "Embracing Cultural Diversity: A Journey through Cairo's Traditions and Festivals",
        classification: "Culture",
        to: "/EmbracingCulturalDiversity",
      },
    ],
    favoriteSpots: [
      {
        image: require("../images/Local Page/Amira Fathi/spots/1.jpg"),
        title: "The Egyptian Museum",
        classification: "Attraction",
        link: "https://goo.gl/maps/g6bdpzmbZp9X9Y4H6",
        description:
          "As an anthropology student, I love visiting this museum to learn more about Egypt's rich history and see ancient artifacts up close.",
      },
      {
        image: require("../images/Local Page/Amira Fathi/spots/2.jpg"),
        title: "Khan el-Khalili",
        classification: "Attraction",
        link: "https://goo.gl/maps/cdL5S5xsWZC44CHF9",
        description:
          "This bustling bazaar is a great place to shop for souvenirs and immerse yourself in Cairo's vibrant culture.",
      },
      {
        image: require("../images/Local Page/Amira Fathi/spots/3.jpg"),
        title: "El Fishawy Cafe",
        classification: "Cafe",
        link: "https://goo.gl/maps/uaVztGT3qftLzHmd9",
        description:
          "This iconic cafe in Khan el-Khalili is the perfect spot to relax with a cup of tea and people-watch.",
      },

      {
        image: require("../images/Local Page/Amira Fathi/spots/3.jpg"),
        title: "Felfela Restaurant",
        classification: "Restaurant",
        link: "https://goo.gl/maps/VwW8eUtNjx3tq3YY7",
        description:
          "Located in downtown Cairo, Felfela serves delicious Egyptian cuisine in a cozy atmosphere. I especially love their foul (a popular Egyptian breakfast dish) and their falafel.",
      },
      {
        image: require("../images/Local Page/Amira Fathi/spots/3.jpg"),
        title: "Cairo Jazz Club",
        classification: "Club",
        link: "https://goo.gl/maps/j4CGkb4m5D5Q5f5g6",
        description:
          "This nightclub in the Zamalek neighborhood is one of the best places in Cairo to catch live music and dance the night away.",
      },
    ],
  });
  return (
    <CurrentLocalContext.Provider value={{ localData, setLocalData }}>
      {children}
    </CurrentLocalContext.Provider>
  );
}

export default CurrentLocalContext;
