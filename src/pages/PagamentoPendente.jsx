import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import TopBanner from "../components/TopBanner";

import { Link } from "react-router-dom";


const PagamentoPendente = () => {
  return (
    <main className="bg-white">
      <ScrollToTop />
      <TopBanner title="Inscrição ENCIBAF" background="bg-[url(/igreja/igreja_completa_facebook.jpg)]" />
      <div className="mb-8 mt-10 text-center">
        <h2 className="mb-6 text-2xl font-bold">Só mais um passo...</h2>
        <p className="mb-2 text-[15px] text-[#777]">Para confirmar sua inscrição você deve efetuar o pagamento no link do PagSeguro logo abaixo </p>
        <h2 className="text-xl">Atenção! Se o pagamento não for efetuado agora</h2> 
        <h2 className="mb-6 text-xl">você precisará refazer sua inscrição na área de inscrições para o ENCIBAF.</h2>
        <Link
        className="inline-flex items-center gap-3 border-2 border-primary bg-primary px-8 py-3.5 font-semibold uppercase text-white duration-300 hover:gap-4 hover:bg-transparent hover:text-primary"
        to="/subscribe"
        >
        Prosseguir para o PagSeguro
        </Link>
    </div>
    </main>
  );
};

export default PagamentoPendente;
