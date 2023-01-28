import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./assets/css/utils.css";
import "./assets/css/auth.css";
import "./assets/css/dash.css";

import { Provider } from "react-redux";
import { masterStore } from "./store/master";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={masterStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
