import React from "react";
import SectionTop from "./SectionTop";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "10.01.2024",
    description:
    "Culto de Oração e Louvor (Acessível em Libras).",
    youtubeUrl: "https://www.youtube.com/watch?v=w3mFGG8j7MQ",
  },
  {
    title: "07.01.2024",
    description:
    "Culto de Domingo - Noite (Acessível em Libras)",
    youtubeUrl: "https://www.youtube.com/watch?v=8zHVfZD1E9I",
  },
  {
    title: "07.01.2024",
    description:
    "Culto de Domingo (Acessível em Libras)",
    youtubeUrl: "https://www.youtube.com/watch?v=38nV3eRAU8E",
  },
  {
    title: "03.01.2024",
    description:
    "Culto de Oração e Louvor (Acessível em Libras)",
    youtubeUrl: "https://www.youtube.com/watch?v=h1NJubCt9O8",
  },
  {
    title: "31.12.2023",
    description:
    "Culto de Ano Novo - Noite (Acessível em Libras)",
    youtubeUrl: "https://www.youtube.com/watch?v=8hNDLUsh974",
  },
  {
    title: "31.12.2023",
    description:
    "Culto de Domingo - Manhã (Acessível em Libras)",
    youtubeUrl: "https://www.youtube.com/watch?v=Egz-JwjT2Js",
  },
];

const Services = () => {
  return (
    <section className="pb-10 pt-16 lg:pt-10">
      <div className="sm:container">
        <SectionTop title="Assista aos nosso cultos" letter="IBF" />
        <div className="mx-auto mt-5 grid grid-cols-1 sm:mt-10 sm:grid-cols-2 md:grid-cols-3 xl:max-w-6xl">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
