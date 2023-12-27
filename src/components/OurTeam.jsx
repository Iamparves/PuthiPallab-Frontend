import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import SectionTop from "./SectionTop";

const librarians = [
  {
    name: "Osamu Dazai",
    position: "Director, Founder",
    image: "/librarians/dazai.jpg",
    socials: {
      facebook: "#",
      github: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Tsugaru Shinuchi",
    position: "Manager, Co-Founder",
    image: "/librarians/tsugaru.jpg",
    socials: {
      facebook: "#",
      github: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Hotaro Oreki",
    position: "Librarian",
    image: "/librarians/hotaro.jpg",
    socials: {
      facebook: "#",
      github: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Hikigaya Hachiman",
    position: "Librarian",
    image: "/librarians/hikigaya.jpg",
    socials: {
      facebook: "#",
      github: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const SocialButton = ({ href, children }) => {
  return (
    <a
      className="flex aspect-square w-8 items-center justify-center bg-[#f8f8f8] text-[15px] text-[#333] duration-300 hover:bg-primary hover:text-white"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};

const OurTeam = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <SectionTop title="Our Team" letter="T" />
        <div className="mx-auto mt-10 grid max-w-[270px] grid-cols-1 justify-center gap-6 sm:max-w-none sm:grid-cols-[repeat(auto-fit,minmax(260px,280px))] lg:gap-x-3 xl:mt-12 xl:grid-cols-4">
          {librarians.map(({ name, position, image, socials }, index) => (
            <div
              className="bg-white p-3 duration-300 lg:pb-5 lg:hover:shadow-[0_0_20px_#efefef]"
              key={index}
            >
              <img
                src={image}
                alt={name}
                className="aspect-[1/.9] w-full object-cover"
              />
              <div className="mt-5 text-center">
                <h4 className="mb-1 font-medium text-[#151515] lg:text-lg">
                  {name}
                </h4>
                <p className="text-[15px] text-[#777]">{position}</p>
              </div>
              <div className="mt-3 flex justify-center gap-3 overflow-hidden lg:mt-4">
                <SocialButton href={socials.facebook}>
                  <FaFacebookF />
                </SocialButton>
                <SocialButton href={socials.github}>
                  <FaGithub />
                </SocialButton>
                <SocialButton href={socials.linkedin}>
                  <FaLinkedinIn />
                </SocialButton>
                <SocialButton href={socials.instagram}>
                  <FaInstagram />
                </SocialButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
