import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/header/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div
        className=""
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
