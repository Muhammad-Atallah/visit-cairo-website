import React from "react";
import AttractionsPage from "../../components/AttractionsPage";
import { modernAttractionsData } from "../../data/modernAttractionsData";

const Modern = () => {
  return (
    <div>
      <AttractionsPage {...modernAttractionsData} />
    </div>
  );
};

export default Modern;
