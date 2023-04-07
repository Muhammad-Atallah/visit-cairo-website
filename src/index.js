import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PageProvider } from "./contexts/PageContext";
import { CurrentLocalProvider } from "./contexts/CurrentLocalContext";
import { CurrentGoPageProvider } from "./contexts/CurrentGoPageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PageProvider>
      <CurrentLocalProvider>
        <CurrentGoPageProvider>
          <App />
        </CurrentGoPageProvider>
      </CurrentLocalProvider>
    </PageProvider>
  </React.StrictMode>
);
