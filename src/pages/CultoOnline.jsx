import React from "react";
import CultoOnlineCard from "../components/CultoOnlineCard";
import TopBanner from "../components/TopBanner";

const services = [
  {
    title: "14.01.2024 - Noite",
    description:
    "Culto de Domingo - Noite (Acessível em Libras).",
    youtubeUrl: "https://www.youtube.com/watch?v=oZeORO-Oj08",
  },
  {
    title: "14.01.2024 - Manhã",
    description:
    "Culto de Domingo - Manhã (Acessível em Libras).",
    youtubeUrl: "https://www.youtube.com/watch?v=mrtBiF_pxo8",
  },
  {
    title: "10.01.2024 - Oração",
    description:
    "Culto de Louvor e Oração (Acessível em Libras).",
    youtubeUrl: "https://www.youtube.com/watch?v=w3mFGG8j7MQ",
  },
  {
    title: "07.01.2024 - Noite",
    description:
    "Culto de Domingo - Noite (Acessível em Libras)",
    youtubeUrl: "https://www.youtube.com/watch?v=8zHVfZD1E9I",
  },
  {
    title: "07.01.2024 - Manhã",
    description:
    "Nós Dois - Culto dedicado aos casais (Acessível em Libras)",
    youtubeUrl: "https://www.youtube.com/watch?v=38nV3eRAU8E",
  },
  {
    title: "03.01.2024 - Oração",
    description:
    "Escola Bíblica Dominical - 10:30 (Após o culto matutino)",
    youtubeUrl: "https://www.youtube.com/watch?v=IkFBEj35Jvc",
  },
];

const CultoOnline = () => {
  return (
    <section className="pb-10 pt-16 lg:pt-10">
      <TopBanner title="Assista aos cultos online" background="bg-[url(/igreja/igreja_completa_facebook.jpg)]"/>
      <div className="sm:container text-center py-6">
        <h2 className="text-black text-3xl font-bold">Os cultos são transmitidos ao vivo em nosso canal do YouTube</h2>
        <div className="flex items-center justify-center mt-6">
          <h2 className="text-black text-2xl mr-4">Assista aqui:</h2>
          <a href="https://www.youtube.com/@IgrejaBatistadoFarol/streams" target="_blank" rel="noopener noreferrer">
            <img
              src="/logo_youtube.jpg"
              alt="Logo do YouTube"
              className="w-32 h-16"
            />
          </a>
        </div>
      </div>
      <div className="sm:container">
      <div className="sm:container text-left py-6">
        <h2 className="text-black text-2xl font-bold mx-10">Últimos cultos gravados</h2>
      </div>
        <div className="mx-auto mt-5 grid grid-cols-1 sm:mt-10 sm:grid-cols-2 md:grid-cols-3 xl:max-w-6xl">
          {services.map((service, i) => (
            <CultoOnlineCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultoOnline;
