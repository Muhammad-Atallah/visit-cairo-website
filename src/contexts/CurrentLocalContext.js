import { createContext, useState } from "react";

const CurrentLocalContext = createContext("");

export function CurrentLocalProvider({ children }) {
  const [localData, setLocalData] = useState({
    image: "",
    title: "",
    quote: "",
    about: "",
    guides: [],
    favoriteSpots: [],
  });
  return (
    <CurrentLocalContext.Provider value={{ localData, setLocalData }}>
      {children}
    </CurrentLocalContext.Provider>
  );
}

export default CurrentLocalContext;
