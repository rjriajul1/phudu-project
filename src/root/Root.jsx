import React from "react";
import { Outlet, useNavigation} from "react-router";
import Navbar from "../components/header/navbar/Navbar";
import Footer from "../components/footer/Footer";


const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <div className="max-w-6xl mx-auto ">
      <Navbar />
      <div
        className="min-h-[calc(100vh-308px)]"
      >
        {
          isNavigating && <p>loading...</p>
        }
        <Outlet />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
