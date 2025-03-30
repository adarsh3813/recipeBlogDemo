import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// Body Component, acts as a parent component for the App
// Our code will be rendered in the <Outlet/>
const Body = () => {
  const user = useSelector((store) => store.user);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
