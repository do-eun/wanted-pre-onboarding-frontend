import React from "react";
import ReactDOM from "react-dom/client";
import "../src/shared/index.css";
import App from "./App";
import axios from "axios";

/**모든 axios 요청에 적용 */
axios.defaults.baseURL = "https://www.pre-onboarding-selection-task.shop/";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
