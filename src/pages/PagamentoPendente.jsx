import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import TopBanner from "../components/TopBanner";

import { Link, useLocation } from "react-router-dom";


const PagamentoPendente = () => {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');
  return (
    <main className="bg-white">
      <ScrollToTop />
      <TopBanner title="Inscrição ENCIBAF" background="bg-[url(/igreja/igreja_completa_facebook.jpg)]" />
      <div className="mb-8 mt-10 text-center">
        <h2 className="mb-6 text-2xl font-bold">Que bom ter vocês fazendo parte do ENCIBAF 2024!</h2>
        <p className="mb-2 text-[15px] text-[#777]">Clique abaixo para continuar seu pagamento.</p>
        <div className="flex items-center justify-center">
            <a 
            href="https://pag.ae/7-ayfcYCM/button" 
            target="_blank" 
            title="Pagar com PagSeguro"
            >
            <img 
                src="//assets.pagseguro.com.br/ps-integration-assets/botoes/pagamentos/205x30-pagar.gif" 
                alt="Pague com PagSeguro - é rápido, grátis e seguro!" 
            />
            </a>
        </div>
    </div>
    </main>
  );
};

export default PagamentoPendente;
