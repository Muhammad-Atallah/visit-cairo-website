import React from "react";
import AttractionsPage from "../../components/AttractionsPage";
import { copticAttractionsData } from "../../data/copticAttractionsData";

const Coptic = () => {
  return (
    <div>
      <AttractionsPage {...copticAttractionsData} />
    </div>
  );
};

export default Coptic;
