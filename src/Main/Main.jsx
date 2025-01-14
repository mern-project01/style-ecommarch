import React from "react";
import Heder from "../Share/Heder/Heder";
import { Outlet } from "react-router-dom";
import Footer from "../Share/Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 b ">
        <Heder></Heder>
      </div>
      <div className="pt-16">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
