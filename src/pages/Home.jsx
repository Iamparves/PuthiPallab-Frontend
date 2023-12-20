import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Services />
      {/* <HomeAbout /> */}
    </main>
  );
};

export default Home;
