import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Screens/Navbar/Navbar";
import Home from "../Screens/Home/Home";
import Signin from "../Screens/Auth/Signin";
export default function MainRoutes() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Signin/>} />
      </Routes>
    </>
  );
}
