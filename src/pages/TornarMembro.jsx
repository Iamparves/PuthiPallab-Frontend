import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import TopBanner from "../components/TopBanner";

const TornarMembro = () => {
  return (
    <main className="bg-white">
      <ScrollToTop />
      <TopBanner title="Como Tornar-se um Membro" background="bg-[url(/igreja/igreja_completa_facebook.jpg)]" />
    </main>
  );
};

export default TornarMembro;
