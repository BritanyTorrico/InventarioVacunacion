import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { VacunacionApp } from "./VacunacionApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <VacunacionApp />
  </BrowserRouter>
);
