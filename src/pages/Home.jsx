import React from "react";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import HomeGenres from "../components/HomeGenres";
import NewestArrivals from "../components/NewestArrivals";
import PopularBooks from "../components/PopularBooks";
import Services from "../components/Services";

const Home = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Services />
      <HomeAbout />
      <PopularBooks />
      <HomeGenres />
      <NewestArrivals />
    </main>
  );
};

export default Home;
