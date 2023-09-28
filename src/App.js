import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <MainRoutes  />
      </Router>
    </>
  );
}

export default App;
