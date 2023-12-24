import React from "react";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import HomeContact from "../components/HomeContact";
import JoinLibrary from "../components/JoinLibrary";
import NewestArrivals from "../components/NewestArrivals";
import PopularBooks from "../components/PopularBooks";
import ScrollToTop from "../components/ScrollToTop";
import Services from "../components/Services";

const Home = () => {
  return (
    <main className="bg-white">
      <ScrollToTop />
      <Hero />
      <Services />
      <HomeAbout />
      <PopularBooks />
      <NewestArrivals />
      <JoinLibrary />
      <HomeContact />
    </main>
  );
};

export default Home;
