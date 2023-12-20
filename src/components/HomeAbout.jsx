import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const contents = [
  {
    image: "/home-about/about-us.jpg",
    title: "A Few Words About Our Library",
    description:
      "Puthi Pallab Library was founded in 2019 to provide access to books, the world’s most valuable source of knowledge.",
  },
  {
    image: "/home-about/our-goals.jpg",
    title: "What We Want to Achieve",
    description:
      "Our global goals are to help our visitors and readers discover more great books and learn about young and popular authors.",
  },
  {
    image: "/home-about/join-library.jpg",
    title: "Join Our Readership Community",
    description:
      "We are always glad to welcome new library members to our community, which unites writers, poets, readers, and book enthusiasts.",
  },
];

const HomeAbout = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="mt-5 bg-[#F8F8F8]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_3fr] 2xl:grid-cols-2">
        <div className="home__about--img md:h-[400px] xl:h-[430px] 2xl:h-[490px]">
          {contents.map((content, i) => (
            <div
              key={i}
              className={`aspect-[8/5] w-full delay-200 duration-200 ease-linear md:aspect-auto ${
                current === i
                  ? "visible h-auto overflow-visible opacity-100 md:h-full"
                  : "invisible h-0 overflow-hidden opacity-0"
              }`}
            >
              <img
                src={content.image}
                alt={content.title}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col-reverse justify-between sm:flex-row">
          <div className="px-4 py-12 text-center sm:self-center sm:text-left md:w-full xl:w-[calc(100%-280px)] 2xl:pr-20">
            <div className="md:mx-auto md:max-w-[380px]">
              <h2 className="mb-8 text-3xl font-bold text-[#151515] md:text-2xl lg:text-3xl xl:text-4xl xl:leading-tight">
                {contents[current].title}
              </h2>
              <p className="mb-8 text-[#777]">
                {contents[current].description}
              </p>
              <Link
                className="inline-flex items-center gap-3 border-2 border-primary bg-primary px-8 py-3.5 font-semibold uppercase text-white duration-300 hover:gap-4 hover:bg-transparent hover:text-primary"
                to="/about"
              >
                Read more <FaChevronRight />
              </Link>
            </div>
          </div>
          <div className="flex min-w-[230px] flex-wrap divide-y divide-[#555] text-center sm:w-[40%] sm:max-w-[290px]">
            {["about us", "our goals", "join the library"].map((title, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`group relative w-full bg-[#2A2A2A] py-4 uppercase tracking-widest text-white duration-300 hover:bg-[#414141] [&.active]:bg-[#414141] ${
                  current === i ? "active" : ""
                }`}
              >
                <span className="absolute bottom-0 left-1/2 h-[3px] w-0 -translate-x-1/2 bg-primary duration-300 group-[&.active]:w-[76px]"></span>
                {title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
