import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RouteLayout from "./layouts/RouteLayout";
import GoLayout from "./layouts/GoLayout";
import EatLayout from "./layouts/EatLayout";

import LocalsRecommend from "./pages/LocalsRecommend";
import Home from "./pages/Home";
import Restaurants from "./pages/eat/Restaurants";
import Cafes from "./pages/eat/Cafes";
import Bars from "./pages/eat/Bars";
import EatPageInFocus from "./pages/eat/EatPageInFocus";
import GoPageInFocus from "./pages/go/GoPageInFocus";

import Ancient from "./pages/go/Ancient";
import LocalPage from "./pages/LocalPage";
import LocalPageLayout from "./layouts/LocalPageLayout";
import ItinerarayPage from "./pages/ItinerarayPage";
import ItineraryLayout from "./layouts/ItineraryLayout";
import Islamic from "./pages/go/Islamic";
import Coptic from "./pages/go/Coptic";
import Modern from "./pages/go/Modern";
import UncoveringTheHiddenGems from "./articles/food articles/UncoveringTheHiddenGems";
import ExploringTheBestStreetFood from "./articles/food articles/ExploringTheBestStreetFood";
import TheUltimateGuideToEgyptianBreakfast from "./articles/food articles/TheUltimateGuideToEgyptianBreakfast";
import TheSweetestTreatsInCairo from "./articles/food articles/TheSweetestTreatsInCairo";
import ACulinaryTour from "./articles/food articles/ACulinaryTour";
import AVegetariansGuide from "./articles/food articles/AVegetariansGuide";
import CairoBestSeafood from "./articles/food articles/CairoBestSeafood";
import CairoFoodMarkets from "./articles/food articles/CairoFoodMarkets";
import UnearthingCairoHiddenGems from "./articles/locals' articles/Amira Hadi/UnearthingCairoHiddenGems";
import StreetFoodAdventures from "./articles/locals' articles/Amira Hadi/StreetFoodAdventures";
import EmbracingCulturalDiversity from "./articles/locals' articles/Amira Hadi/EmbracingCulturalDiversity";
import ExploringCairoWithKids from "./articles/locals' articles/Magdi Gamal/ExploringCairoWithKids";
import CairoLesserKnownAttractions from "./articles/locals' articles/Magdi Gamal/CairoLesserKnownAttractions";
import BestHammamsAndSpas from "./articles/locals' articles/Magdi Gamal/BestHammamsAndSpas";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index path="" element={<Home />} />
      <Route path="where to go" element={<GoLayout />}>
        <Route path="" element={<GoPageInFocus />} />
        <Route path="Ancient" element={<Ancient />} />
        <Route path="Islamic" element={<Islamic />} />
        <Route path="Coptic" element={<Coptic />} />
        <Route path="Modern" element={<Modern />} />
      </Route>
      <Route path="what to eat" element={<EatLayout />}>
        <Route index path="" element={<EatPageInFocus />} />
        <Route path="Restaurants" element={<Restaurants />} />
        <Route path="Cafes" element={<Cafes />} />
        <Route path="Bars" element={<Bars />} />
      </Route>
      <Route path="locals recommend" element={<LocalsRecommend />} />
      <Route path="local page" element={<LocalPageLayout />} />
      <Route path="ItineraryLayout" element={<ItineraryLayout />}>
        <Route path="ItinerarayPage" element={<ItinerarayPage />} />
      </Route>
      <Route
        path="UncoveringTheHiddenGems"
        element={<UncoveringTheHiddenGems />}
      />
      <Route
        path="ExploringTheBestStreetFood"
        element={<ExploringTheBestStreetFood />}
      />
      <Route
        path="TheUltimateGuideToEgyptianBreakfast"
        element={<TheUltimateGuideToEgyptianBreakfast />}
      />
      <Route
        path="TheSweetestTreatsInCairo"
        element={<TheSweetestTreatsInCairo />}
      />
      <Route path="ACulinaryTour" element={<ACulinaryTour />} />
      <Route path="AVegetariansGuide" element={<AVegetariansGuide />} />
      <Route path="CairoBestSeafood" element={<CairoBestSeafood />} />
      <Route path="CairoFoodMarkets" element={<CairoFoodMarkets />} />
      <Route
        path="UnearthingCairoHiddenGems"
        element={<UnearthingCairoHiddenGems />}
      />
      <Route path="StreetFoodAdventures" element={<StreetFoodAdventures />} />
      <Route
        path="EmbracingCulturalDiversity"
        element={<EmbracingCulturalDiversity />}
      />
      <Route
        path="ExploringCairoWithKids"
        element={<ExploringCairoWithKids />}
      />
      <Route
        path="CairoLesserKnownAttractions"
        element={<CairoLesserKnownAttractions />}
      />
      <Route path="BestHammamsAndSpas" element={<BestHammamsAndSpas />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
