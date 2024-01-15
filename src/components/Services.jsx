import React from "react";
import SectionTop from "./SectionTop";
import ServiceCard from "./ServiceCard";

const services = [
  {
    img: "/igreja/imagem_do_banco.jpg",
    title: "Culto da Manhã aos Domingos",
    description:
    "Culto da Manhã aos Domingos - 9:00 (Acessível em Libras).",
  },
  {
    img: "/igreja/pr_luiz_cruz.jpg",
    title: "Culto da Noite aos Domingos",
    description:
    "Culto da Noite aos Domingos - 18:00 (Acessível em Libras).",
  },
  {
    img: "/igreja/irma_loira.jpeg",
    title: "Culto de Louvor e Oração",
    description:
    "Culto de Louvor e Oração - 19:30 (Acessível em Libras).",
  },
  {
    img: "/igreja/culto_juventude.jpg",
    title: "Culto da Juventude",
    description:
    "Culto da Juventude",
  },
  {
    img: "/igreja/pastor_roberto.jpg",
    title: "31.12.2023",
    description:
    "Nós Dois - Culto dedicado aos casais (Acessível em Libras)",
  },
  {
    img: "/igreja/biblia.jpg",
    title: "EBD",
    description:
    "Escola Bíblica Dominical - 10:30 (Após o culto matutino)",
  },
];

const Services = () => {
  return (
    <section className="pb-10 pt-16 lg:pt-10">
      <div className="sm:container">
        <SectionTop title="Como tudo começou" letter="IBF" />
        <div className="max-w-xl mx-auto text-center lg:text-center mt-8">
          <p className="mb-20 text-base text-gray-500 xl:text-lg">
            O primeiro pastor batista brasileiro, Antônio Teixeira de Albuquerque, foi batizado e ordenado na igreja em Santa Bárbara
          </p>
        </div>
        <SectionTop title="Cultos" letter="IBF" />
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
