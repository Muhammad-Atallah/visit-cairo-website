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
        image: require("../images/Local Page/Amira Fathi/spots/Egyptian-Museum-Cairo.jpg"),
        title: "The Egyptian Museum",
        classification: "Attraction",
        link: "https://www.google.com/maps/place/The+Egyptian+Museum+in+Cairo/@30.0483213,31.2310871,17z/data=!3m1!4b1!4m6!3m5!1s0x1458b14d72adf029:0x9a38f9bbb6edbfe4!8m2!3d30.0483167!4d31.2336674!16zL20vMDE5cGpo?authuser=0",
        description:
          "As an anthropology student, I love visiting this museum to learn more about Egypt's rich history and see ancient artifacts up close.",
        id: 1,
      },
      {
        image: require("../images/Local Page/Amira Fathi/spots/khan-el-khalili.webp"),
        title: "Khan el-Khalili",
        classification: "Attraction",
        link: "https://www.google.com/maps/place/Khan+el-Khalili/@30.0477432,31.2596735,17z/data=!3m1!4b1!4m6!3m5!1s0x145840eb2c0e580f:0x1761e0e461027d11!8m2!3d30.0477386!4d31.2622538!16s%2Fm%2F026lzw2?authuser=0",
        description:
          "This bustling bazaar is a great place to shop for souvenirs and immerse yourself in Cairo's vibrant culture.",
        id: 2,
      },
      {
        image: require("../images/Local Page/Amira Fathi/spots/fishawi.jpg"),
        title: "El Fishawy Cafe",
        classification: "Cafe",
        link: "https://www.google.com/maps/place/El+Fishawy+Cafe/@30.0475191,31.2598006,17z/data=!3m1!4b1!4m6!3m5!1s0x14583f600025b819:0xafc21152ed3389d1!8m2!3d30.0475145!4d31.2623809!16s%2Fg%2F1tdv9l30?authuser=0",
        description:
          "This iconic cafe in Khan el-Khalili is the perfect spot to relax with a cup of tea and people-watch.",
        id: 3,
      },

      {
        image: require("../images/Local Page/Amira Fathi/spots/felfela.jpg"),
        title: "Felfela Restaurant",
        classification: "Restaurant",
        link: "https://www.google.com/maps/place/Felfela/@30.0467309,31.2370956,19z/data=!4m14!1m7!3m6!1s0x1458412e3d282e53:0x8a99910744809179!2sFelfela+Express!8m2!3d30.0465172!4d31.2379418!16s%2Fg%2F11pkh_1qcp!3m5!1s0x14584184c933b19f:0x352d15d4c5e2448a!8m2!3d30.0465539!4d31.237955!16s%2Fg%2F1tdz23f3?authuser=0",
        description:
          "Located in downtown Cairo, Felfela serves delicious Egyptian cuisine in a cozy atmosphere. I especially love their foul (a popular Egyptian breakfast dish) and their falafel.",
        id: 4,
      },
      {
        image: require("../images/Local Page/Amira Fathi/spots/cairo-jazz-club.jpg"),
        title: "Cairo Jazz Club",
        classification: "Club",
        link: "https://goo.gl/maps/j4CGkb4m5D5Q5f5g6",
        description:
          "Cairo Jazz Club is a vibrant and renowned music venue located in the heart of Cairo. It is a haven for music lovers, offering a lively atmosphere, live performances by talented local and international artists",
        id: 5,
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
