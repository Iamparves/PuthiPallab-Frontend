import React from "react";
import AboutTabs from "../components/AboutTabs";
import TopBanner from "../components/TopBanner";

const About = () => {
  return (
    <main className="bg-white">
      <TopBanner title="About us" background="bg-[url(/about-top.jpg)]" />
      <AboutTabs />
    </main>
  );
};

export default About;
