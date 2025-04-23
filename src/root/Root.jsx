import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/header/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto ">
      <Navbar />
      <div
        className=""
      >
        <Outlet />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
