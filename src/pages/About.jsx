import React from "react";
import AboutTabs from "../components/AboutTabs";
import HowItWorks from "../components/HowItWorks";
import TopBanner from "../components/TopBanner";

const About = () => {
  return (
    <main className="bg-white">
      <TopBanner title="About us" background="bg-[url(/about-top.jpg)]" />
      <AboutTabs />
      <HowItWorks />
    </main>
  );
};

export default About;
