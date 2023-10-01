import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Screens/Navbar/Navbar";
import Home from "../Screens/Home/Home";
import Signin from "../Screens/Auth/Signin/Signin";
import Signup from "../Screens/Auth/Signup/Signup";
export default function MainRoutes() {
  return (
    <>
      {/* <Navbar /> */}


    {/* dsfdrgf */}
      <Routes>
        <Route path="/" element={<Signup/>} />
      </Routes>
    </>
  );
}
