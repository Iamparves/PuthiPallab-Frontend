import React from "react";
import MinisteriosTabs from "../components/MinisteriosTabs";
import HowItWorks from "../components/HowItWorks";
import OurTeam from "../components/OurTeam";
import ScrollToTop from "../components/ScrollToTop";
import TopBanner from "../components/TopBanner";

const Ministerios = () => {
  return (
    <main className="bg-white">
      <ScrollToTop />
      <TopBanner title="Ministérios" background="bg-[url(/igreja/igreja_completa_facebook.jpg)]" />
      <MinisteriosTabs />
      {/* <HowItWorks /> */}
      {/* <OurTeam /> */}
    </main>
  );
};

export default Ministerios;
