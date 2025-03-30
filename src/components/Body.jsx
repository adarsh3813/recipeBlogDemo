import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
