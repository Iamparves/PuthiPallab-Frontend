import { useQuery } from "@tanstack/react-query";
import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import TopBanner from "../components/TopBanner";
import { getAllGenres } from "../utils/apiRequest";

const Donations = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-white">
      <ScrollToTop />
      <TopBanner title="Doações" background="bg-[url(/igreja/doacoes_banner.jpg)]" />

      <div className="grid lg:grid-cols-3 gap-8 p-8">
        <div className="col-span-1">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/Yhp7DX8t660" title="Como entregar dízimos e ofertas neste período de quarentena." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="lg:col-span-2 justify-center items-center">
          <h2 className="text-3xl font-bold text-center mb-8">Transferência</h2>
          <div className="md:grid md:grid-cols-3 w-full justify-between flex flex-col gap-8">
            <div className="flex flex-col items-center">
              <p className="text-xl mb-4 font-bold">
                Banco do Bradesco
              </p>
              <p className="text-lg mb-4">
                Agência: 2250-0
              </p>
              <p className="text-lg mb-4">
                Conta: 348-4
              </p>
              <p className="text-lg mb-4">
                CNPJ: 12.376.976/001-42
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://pagseguro.uol.com.br/checkout/nc/nl/donation/sender-identification.jhtml?t=14bd1089cd284b353c3cad7b4a9dbc1e6c90ec07c71b7810ec868526db497827&e=true#rmcl"
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden"
              >
                <p className="text-xl mb-4 font-bold">
                  Cartão ou Boleto
                </p>
                <img
                  src="/igreja/botao_doacao.gif"
                  alt="Texto Alternativo"
                  className=""
                />
              </a>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-xl lg:text-xl mb-4 font-bold text-center">
                PIX
              </p>
              <p className="text-lg mb-4 text-center">
                CNPJ: 12.376.976/0001-42
              </p>
            </div>
          </div>
        </div>
        </div>
    </main>
  );
};

export default Donations;