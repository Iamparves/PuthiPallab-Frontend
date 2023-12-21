import React from "react";
import SectionTop from "./SectionTop";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "/services/service-01.png",
    title: "Ask a Librarian",
    description:
      "Feel free to ask our librarians about any book located at our library storage.",
  },
  {
    icon: "/services/service-02.png",
    title: "Meeting Rooms",
    description:
      "Our library provides well-equipped meeting rooms ranging in size from 12 to 40.",
  },
  {
    icon: "/services/service-03.png",
    title: "Study Rooms",
    description:
      "Our study rooms located in library spaces can be reserved up to two weeks in advance.",
  },
  {
    icon: "/services/service-04.png",
    title: "Research",
    description:
      "MagicBook library offers various set of resources for researchers and scholars.",
  },
  {
    icon: "/services/service-05.png",
    title: "Exhibitions",
    description:
      "Feel free to visit any of our regular book exhibitions featuring popular authors.",
  },
  {
    icon: "/services/service-06.png",
    title: "Computer Classes",
    description:
      "Gain access to the immense eBook database using our computer classes.",
  },
];

const Services = () => {
  return (
    <section className="pb-10 pt-16 lg:pt-10">
      <div className="sm:container">
        <SectionTop title="Our Services" letter="S" />
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
