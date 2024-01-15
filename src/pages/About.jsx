import React from "react";
import AboutTabs from "../components/AboutTabs";
import ScrollToTop from "../components/ScrollToTop";
import TopBanner from "../components/TopBanner";

const About = () => {
  return (
    <main className="bg-white">
      <ScrollToTop />
      <TopBanner title="Sobre nós" background="bg-[url(/igreja/igreja_completa_facebook.jpg)]" />
      <AboutTabs />
      {/* <HowItWorks /> */}
      {/* <OurTeam /> */}
    </main>
  );
};

export default About;
