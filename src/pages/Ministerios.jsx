import React from "react";
import MinisteriosTabs from "../components/MinisteriosTabs";
import HowItWorks from "../components/HowItWorks";
import OurTeam from "../components/OurTeam";
import ScrollToTop from "../components/ScrollToTop";
import TopBanner from "../components/TopBanner";
import { Link } from "react-router-dom";

const Ministerios = () => {
  return (
    <main className="bg-white">
      <ScrollToTop />
      <TopBanner title="Ministérios" background="bg-[url(/igreja/igreja_completa_facebook.jpg)]" />
      {/* <MinisteriosTabs /> */}

      {/* Lembrar de excluir depois */}
      <div className="mb-8 pl-10 mt-10">
        <h2 className="mb-6 text-2xl font-bold">Inscrições para o ENCIBAF</h2>
        <p className="mb-2 text-[15px] text-[#777]">Para participar do Encontro de Casais da Igreja Batista do Farol inscreva-se clicando no botão abaixo</p>
        <Link
        className="inline-flex items-center gap-3 border-2 border-primary bg-primary px-8 py-3.5 font-semibold uppercase text-white duration-300 hover:gap-4 hover:bg-transparent hover:text-primary"
        to="/subscribe"
        >
        Inscreva-se
        </Link>
      </div>
    </main>
  );
};

export default Ministerios;
