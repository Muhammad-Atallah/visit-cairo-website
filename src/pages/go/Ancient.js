import React from "react";
import AttractionsPage from "../../components/AttractionsPage";
import { ancientAttractionsData } from "../../data/ancientAttractionsData";

const Ancient = () => {
  return (
    <div>
      <AttractionsPage {...ancientAttractionsData} />
    </div>
  );
};

export default Ancient;
