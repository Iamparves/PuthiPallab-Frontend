import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import TopBanner from "../components/TopBanner";

const GaleriaFotos = () => {
  return (
    <main className="bg-white">
      <ScrollToTop />
      <TopBanner title="Galeria de Fotos" background="bg-[url(/igreja/igreja_completa_facebook.jpg)]" />
    </main>
  );
};

export default GaleriaFotos;
