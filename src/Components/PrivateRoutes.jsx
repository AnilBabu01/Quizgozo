import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoutes({ children }) {

  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  console.log("tpken", token);
  if (token) {
    return children;
  }

  navigate("/login");
}
