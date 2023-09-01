import React from "react";

import { Outlet, useLocation } from "react-router-dom";

import Footer from "../shared/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

const HomeLayout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>

      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
