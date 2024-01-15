import moment from "moment";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const tabs = ["Pastoral", "Educação Cristã", "Administração", "Famílias", "Juventude", "Jovens", "Acampamento", "Integração", "Evangelismo e Missões", "Ação Social"];

const contents = [
  {
    title: "Pastoral",
    description: (
      <span>
        Situada no encantador estado de Alagoas, destaca-se como um lugar de comunhão, adoração e crescimento espiritual. Fundada com a missão de proclamar os ensinamentos cristãos e promover o amor de Deus, a igreja desempenha um papel vital na vida espiritual da comunidade local.
        <br />
      </span>
    ),
    image: "/igreja/frente_igreja.jpg",
  },
  {
    title: "Educação Cristã",
    description: (
      <span>
        Atual pastor da Igreja Batista do Farol, Roberto...
        <br />
        <br />
        Lotus 
      </span>
    ),
    image: "/igreja/pastor_roberto.jpg",
  },
  {
    title: "Administração",
    description: (
      <span>
        Albus, dexter particulas grauiter consumere de ferox, bi-color abactus.
        Impositios studere, tanquam mirabilis hippotoxota. Cur torus manducare?
        Pol, vox! Cum barcas nocere, omnes specieses contactus
        <br />
        <br />
        Lotus 
      </span>
    ),
    image: "/igreja/cristolandia.jpg",
  },
  {
    title: "Famílias",
    description: (
      <span>
        Situada no encantador estado de Alagoas, destaca-se como um lugar de comunhão, adoração e crescimento espiritual. Fundada com a missão de proclamar os ensinamentos cristãos e promover o amor de Deus, a igreja desempenha um papel vital na vida espiritual da comunidade local.
        <br />
      </span>
    ),
    image: "/igreja/frente_igreja.jpg",
  },
  {
    title: "Juventude",
    description: (
      <span>
        Situada no encantador estado de Alagoas, destaca-se como um lugar de comunhão, adoração e crescimento espiritual. Fundada com a missão de proclamar os ensinamentos cristãos e promover o amor de Deus, a igreja desempenha um papel vital na vida espiritual da comunidade local.
        <br />
      </span>
    ),
    image: "/igreja/frente_igreja.jpg",
  },
  {
    title: "Jovens",
    description: (
      <span>
        Situada no encantador estado de Alagoas, destaca-se como um lugar de comunhão, adoração e crescimento espiritual. Fundada com a missão de proclamar os ensinamentos cristãos e promover o amor de Deus, a igreja desempenha um papel vital na vida espiritual da comunidade local.
        <br />
      </span>
    ),
    image: "/igreja/frente_igreja.jpg",
  },
  {
    title: "Acampamento",
    description: (
      <span>
        Situada no encantador estado de Alagoas, destaca-se como um lugar de comunhão, adoração e crescimento espiritual. Fundada com a missão de proclamar os ensinamentos cristãos e promover o amor de Deus, a igreja desempenha um papel vital na vida espiritual da comunidade local.
        <br />
      </span>
    ),
    image: "/igreja/frente_igreja.jpg",
  },
  {
    title: "Integração",
    description: (
      <span>
        Situada no encantador estado de Alagoas, destaca-se como um lugar de comunhão, adoração e crescimento espiritual. Fundada com a missão de proclamar os ensinamentos cristãos e promover o amor de Deus, a igreja desempenha um papel vital na vida espiritual da comunidade local.
        <br />
      </span>
    ),
    image: "/igreja/frente_igreja.jpg",
  },
  {
    title: "Evangelismo e Missões",
    description: (
      <span>
        Situada no encantador estado de Alagoas, destaca-se como um lugar de comunhão, adoração e crescimento espiritual. Fundada com a missão de proclamar os ensinamentos cristãos e promover o amor de Deus, a igreja desempenha um papel vital na vida espiritual da comunidade local.
        <br />
      </span>
    ),
    image: "/igreja/frente_igreja.jpg",
  },
  {
    title: "Ação Social",
    description: (
      <span>
        Situada no encantador estado de Alagoas, destaca-se como um lugar de comunhão, adoração e crescimento espiritual. Fundada com a missão de proclamar os ensinamentos cristãos e promover o amor de Deus, a igreja desempenha um papel vital na vida espiritual da comunidade local.
        <br />
      </span>
    ),
    image: "/igreja/frente_igreja.jpg",
  },
];

const MinisterioTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experience = Math.floor(
    moment.duration(moment().diff(new Date("1917-08-19"))).asYears(),
  );

  return (
    <section className="py-10 sm:py-14 md:py-16">
      <div className="container flex flex-col gap-14 text-[#151515] lg:flex-row-reverse lg:gap-6 xl:gap-16">
        <div className="mx-auto flex w-full flex-shrink-0 flex-col items-center md:max-w-3xl md:items-start lg:w-[300px]">
          <h4 className="font-semibold uppercase tracking-widest md:text-lg lg:leading-[1.75] lg:tracking-[4px]">
            São mais de 10 ministérios
          </h4>
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:w-full lg:flex-col lg:gap-y-0">
            {tabs.map((tab, index) => (
              <button
                className={`group relative border-b border-[#e1e1e1] py-2.5 text-sm uppercase tracking-widest lg:w-full lg:py-5 lg:text-left lg:text-base ${
                  activeTab === index ? "active" : ""
                }`}
                onClick={() => setActiveTab(index)}
                key={index}
              >
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-primary duration-300 group-[&.active]:w-12 group-[&:not(.active):hover]:w-full"></span>
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="mx-auto w-full max-w-[485px] text-center md:max-w-3xl md:text-left lg:max-w-none">
          {contents.map(({ title, description, image }, index) => (
            <div
            className={`invisible h-0 overflow-hidden opacity-0 duration-1000 [&.active]:visible [&.active]:h-auto [&.active]:opacity-100 ${
              activeTab === index ? "active" : ""
            }`}
            key={index}
            >
              {title === 'Famílias' && (
                <div className="mb-8">
                  <h2 className="mb-6 text-2xl font-bold">Inscrições para o ENCIBAF</h2>
                  <p className="mb-2 text-[15px] text-[#777]">Para participar do Encontro de Casais da Igreja Batista do Farol inscreva-se clicando no botão abaixo</p>
                  <Link
                  className="inline-flex items-center gap-3 border-2 border-primary bg-primary px-8 py-3.5 font-semibold uppercase text-white duration-300 hover:gap-4 hover:bg-transparent hover:text-primary"
                  to="/subscribe"
                  >
                    Inscreva-se
                  </Link>
                </div>
              )}
              <h2 className="mb-6 text-3xl font-bold">{title}</h2>
              <p className="mb-8 text-[15px] text-[#777]">{description}</p>
              <img className="apect-[2/1] w-full" src={image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinisterioTabs;
