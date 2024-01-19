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
        <h2 className="mb-6 text-2xl font-bold">Só mais um passo...</h2>
        <p className="mb-2 text-[15px] text-[#777]">Para confirmar sua inscrição você deve efetuar o pagamento no link do PagSeguro logo abaixo.</p>
        <p className="mb-2 text-[15px] text-[#777]">Caso prefira, você também pode efetuar o pagamento presencialmente em nossa igreja.</p>
        <p className="mb-2 text-[15px] text-[#777]">Informe seu email de cadastro no site e peça para que o responsável confirme.</p>
        <div className="flex items-center justify-center">
            <a 
            href="https://pag.ae/7-9LSKbS2/button" 
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
