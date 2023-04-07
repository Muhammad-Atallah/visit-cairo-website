import { createContext, useState } from "react";

const CurrentGoPageContext = createContext("");

export function CurrentGoPageProvider({ children }) {
  const [currentGoPage, setCurrentGoPage] = useState("");
  return (
    <CurrentGoPageContext.Provider value={{ currentGoPage, setCurrentGoPage }}>
      {children}
    </CurrentGoPageContext.Provider>
  );
}

export default CurrentGoPageContext;
