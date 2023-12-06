import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-[100dvh] bg-[#F6F7FB]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
