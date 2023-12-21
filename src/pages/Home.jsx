import React from "react";
import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import HomeGenres from "../components/HomeGenres";
import JoinLibrary from "../components/JoinLibrary";
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
      <JoinLibrary />
    </main>
  );
};

export default Home;
