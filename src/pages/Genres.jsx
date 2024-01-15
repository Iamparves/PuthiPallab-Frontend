import { useQuery } from "@tanstack/react-query";
import React from "react";
import GenresCard from "../components/GenresCard";
import ScrollToTop from "../components/ScrollToTop";
import Spinner from "../components/Spinner";
import TopBanner from "../components/TopBanner";
import { getAllGenres } from "../utils/apiRequest";

const Genres = () => {
  const genresQuery = useQuery({
    queryKey: ["genres", { sort: "genreName" }],
    queryFn: () => getAllGenres("?sort=genreName"),
  });

  return (
    <main className="min-h-[calc(100vh-80px)] bg-white">
      <ScrollToTop />
      <TopBanner title="Doações" background="bg-[url(/igreja/doacoes_banner.jpg)]" />

      <div className="grid grid-cols-3 gap-8 p-8">
        {/* Vídeo do YouTube à esquerda */}
        <div className="col-span-1">
          {/* Substitua o 'videoId' pelo ID do seu vídeo do YouTube */}
          <iframe
            width="100%"
            height="315"
            src={`https://youtu.be/Yhp7DX8t660`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Textos no centro */}
        <div className="col-span-1 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">Transferência</h2>
          <p className="text-lg mb-4 font-bold">
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

        {/* Botão à direita com imagem */}
        <div className="col-span-1 flex items-center ">
          <a
            href="https://pagseguro.uol.com.br/checkout/nc/nl/donation/sender-identification.jhtml?t=3cab15ce697649fb887bdddd005424bcd796d942530f9ba645d787ce663a832e&e=true#rmcl"
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
              className="w-full h-full"
            />
          <p className="text-xl mb-4 font-bold">
            PIX
          </p>
          <p className="text-lg mb-4">
            CNPJ: 12.376.976/0001-42
          </p>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Genres;
