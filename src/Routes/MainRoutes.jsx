import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Screens/Navbar/Navbar";
import Home from "../Screens/Home/Home";

export default function MainRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
