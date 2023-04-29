import { createContext, useState } from "react";

const CurrentLocalContext = createContext("");

export function CurrentLocalProvider({ children }) {
  const [localData, setLocalData] = useState({
    image: require("../images/Locals/1.jpg"),
    title: "Amira Fathi",
    classification: "local in cairo",
    quote:
      "'Cairo is a city that never sleeps, always buzzing with energy and excitement. I feel alive here, surrounded by the rich history and culture that this city has to offer.'",
    about:
      "Amira is a young university student living in the bustling city of Cairo. She finds inspiration and joy in the vibrant energy of the city, which is full of life and history. Amidst the noise and crowds, Amira feels alive and connected to her surroundings. Amira studies anthropology at the American University in Cairo and is passionate about exploring different cultures and traditions. She loves to spend her free time visiting historical sites and trying out new street food. Despite the challenges of living in a big city, Amira finds solace in the tight-knit community of her university and the warmth of her family and friends.",
    guides: [
      {
        image: require("../images/Local Page/Amira Fathi/1.jpg"),
        title: "How I Spend a Family Friendly Day in Cairo",
        classification: "Activities",
      },
      {
        image: require("../images/Local Page/Amira Fathi/2.jpg"),
        title: "How I Spend a Family Friendly Day in Cairo",
        classification: "Activities",
      },
      {
        image: require("../images/Local Page/Amira Fathi/3.jpg"),
        title: "How I Spend a Family Friendly Day in Cairo",
        classification: "Activities",
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
        classification: "Attraction",
        link: "https://goo.gl/maps/uaVztGT3qftLzHmd9",
        description:
          "This iconic cafe in Khan el-Khalili is the perfect spot to relax with a cup of tea and people-watch.",
      },

      {
        image: require("../images/Local Page/Amira Fathi/spots/3.jpg"),
        title: "Felfela Restaurant",
        classification: "Attraction",
        link: "https://goo.gl/maps/VwW8eUtNjx3tq3YY7",
        description:
          "Located in downtown Cairo, Felfela serves delicious Egyptian cuisine in a cozy atmosphere. I especially love their foul (a popular Egyptian breakfast dish) and their falafel.",
      },
      {
        image: require("../images/Local Page/Amira Fathi/spots/3.jpg"),
        title: "Cairo Jazz Club",
        classification: "Attraction",
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
