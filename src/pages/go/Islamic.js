import React from "react";
import AttractionsPage from "../../components/AttractionsPage";
import { islamicAttractionsData } from "../../data/islamicAttractionsData";

const Islamic = () => {
  return (
    <div>
      <AttractionsPage {...islamicAttractionsData} />
    </div>
  );
};

export default Islamic;
