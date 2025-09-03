import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div><Outlet/></div>
      <Footer/>
    </div>
  );
};

export default RootLayout;
