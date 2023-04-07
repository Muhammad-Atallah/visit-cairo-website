import React, { useContext } from "react";
import LocalPage from "../pages/LocalPage";
import CurrentLocalContext from "../contexts/CurrentLocalContext";

const LocalPageLayout = () => {
  const { localData } = useContext(CurrentLocalContext);
  console.log(localData);
  return <LocalPage {...localData} />;
};

export default LocalPageLayout;
