import moment from "moment";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const tabs = ["About us", "Our mission", "Our goals", "Join the library"];

const contents = [
  {
    title: "Puthi Pallab Library was founded in 2019",
    description: (
      <span>
        Albus, dexter particulas grauiter consumere de ferox, bi-color abactus.
        Impositios studere, tanquam mirabilis hippotoxota. Cur torus manducare?
        Pol, vox! Cum barcas nocere, omnes specieses contactus
        <br />
        <br />
        Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu, barbatus
        mens! Cum elogium favere, omnes lubaes tractare talis, barbatus
        adiuratores. Mirabilis hydras ducunt ad danista. Dominas sunt accentors
        de germanus cacula. Amicitias prarere in alta muta! Ecce, bubo! Nunquam
        promissio verpa. Talis, primus fugas recte consumere de audax, festus
        indictio. Nunquam quaestio scutum. Valebats
      </span>
    ),
    image: "/about-us/about-us.jpg",
  },
  {
    title: "Providing access to the best books",
    description: (
      <span>
        Albus, dexter particulas grauiter consumere de ferox, bi-color abactus.
        Impositios studere, tanquam mirabilis hippotoxota. Cur torus manducare?
        Pol, vox! Cum barcas nocere, omnes specieses contactus
        <br />
        <br />
        Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu, barbatus
        mens! Cum elogium favere, omnes lubaes tractare talis, barbatus
        adiuratores. Mirabilis hydras ducunt ad danista. Dominas sunt accentors
        de germanus cacula. Amicitias prarere in alta muta! Ecce, bubo! Nunquam
        promissio verpa. Talis, primus fugas recte consumere de audax, festus
        indictio. Nunquam quaestio scutum. Valebats
      </span>
    ),
    image: "/about-us/our-mission.jpg",
  },
  {
    title: "Educating the rising generation",
    description: (
      <span>
        Albus, dexter particulas grauiter consumere de ferox, bi-color abactus.
        Impositios studere, tanquam mirabilis hippotoxota. Cur torus manducare?
        Pol, vox! Cum barcas nocere, omnes specieses contactus
        <br />
        <br />
        Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu, barbatus
        mens! Cum elogium favere, omnes lubaes tractare talis, barbatus
        adiuratores. Mirabilis hydras ducunt ad danista. Dominas sunt accentors
        de germanus cacula. Amicitias prarere in alta muta! Ecce, bubo! Nunquam
        promissio verpa. Talis, primus fugas recte consumere de audax, festus
        indictio. Nunquam quaestio scutum. Valebats
      </span>
    ),
    image: "/about-us/our-goals.jpg",
  },
  {
    title: "Join the readership community",
    description: (
      <span>
        Albus, dexter particulas grauiter consumere de ferox, bi-color abactus.
        Impositios studere, tanquam mirabilis hippotoxota. Cur torus manducare?
        Pol, vox! Cum barcas nocere, omnes specieses contactus
        <br />
        <br />
        Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu, barbatus
        mens! Cum elogium favere, omnes lubaes tractare talis, barbatus
        adiuratores. Mirabilis hydras ducunt ad danista. Dominas sunt accentors
        de germanus cacula. Amicitias prarere in alta muta! Ecce, bubo! Nunquam
        promissio verpa. Talis, primus fugas recte consumere de audax, festus
        indictio. Nunquam quaestio scutum. Valebats
      </span>
    ),
    image: "/about-us/join-library.jpg",
  },
];

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experience = Math.floor(
    moment.duration(moment().diff(new Date("2019-03-16"))).asYears(),
  );

  return (
    <section className="py-10 sm:py-14 md:py-16">
      <div className="container flex flex-col gap-14 text-[#151515] lg:flex-row-reverse lg:gap-6 xl:gap-16">
        <div className="mx-auto flex w-full flex-shrink-0 flex-col items-center md:max-w-3xl md:items-start lg:w-[300px]">
          <h4 className="font-semibold uppercase tracking-widest md:text-lg lg:leading-[1.75] lg:tracking-[4px]">
            {experience}+ years of experience
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
          <Link
            className="mt-9 inline-block border-2 border-primary bg-primary px-12 py-5 text-sm font-semibold uppercase tracking-widest text-white duration-300 hover:bg-transparent hover:text-primary md:mt-12 lg:w-full lg:py-6 lg:text-center lg:text-base"
            to="/contact"
          >
            Contact us
          </Link>
        </div>
        <div className="mx-auto w-full max-w-[485px] text-center md:max-w-3xl md:text-left lg:max-w-none">
          {contents.map(({ title, description, image }, index) => (
            <div
              className={`invisible h-0 overflow-hidden opacity-0 duration-1000 [&.active]:visible [&.active]:h-auto [&.active]:opacity-100 ${
                activeTab === index ? "active" : ""
              }`}
              key={index}
            >
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

export default AboutTabs;
