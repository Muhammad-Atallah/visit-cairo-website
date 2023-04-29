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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index path="" element={<Home />} />

      <Route path="where to go" element={<GoLayout />}>
        <Route path="" element={<GoPageInFocus />} />
        <Route path="Ancient" element={<Ancient />} />
        <Route path="Islamic" element={<Islamic />} />
        <Route path="Coptic" />
        <Route path="Modern" />
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
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
