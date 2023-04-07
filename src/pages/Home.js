import { useContext } from "react";
import Main from "../components/Main";
import { Discover } from "../components/Discover";
import Itineraries from "../components/Itineraries";
import { FoodSection } from "../components/FoodSection";
import { Locals } from "../components/Locals";
import PageContext from "../contexts/PageContext";

const Home = () => {
  const { page } = useContext(PageContext);
  console.log(page);
  return (
    <>
      <div className="h-[100%] w-[100%]">
        <Main></Main>
      </div>
      <div className="h-[100%] -z-10">
        <Discover />
      </div>
      <div className="h-[100%] -z-10">
        <Itineraries />
      </div>
      <div className="h-[100%] -z-10">
        <FoodSection />
      </div>
      <div className="h-[100%] -z-10">
        <Locals />
      </div>
    </>
  );
};

export default Home;
