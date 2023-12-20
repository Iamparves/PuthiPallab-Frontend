import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section className="overflow-hidden bg-[#F6F7FB]/70">
      <img src="/about-wave.svg" alt="" className="w-full" />
      <div className="container grid grid-cols-2 items-center gap-16 py-20">
        <div className="">
          <img src="/img-2.jpg" alt="" />
        </div>
        <div className="">
          <h3 className="relative mb-8 text-4xl font-semibold text-primary after:absolute after:left-0 after:top-[calc(100%+3px)] after:h-1 after:w-20 after:bg-primary">
            About us
          </h3>
          <p className="mb-3 text-gray-500">
            Puthi Pallab Library has a story that weaves through time, echoing
            the dreams of its founders and the aspirations of a community hungry
            for knowledge. Established in 2019, our library embarked on a humble
            yet ambitious mission – to be a sanctuary for minds eager to explore
            the vast realms of literature.
          </p>
          <p className="mb-5 text-gray-500">
            From the beginning, Puthi Pallab aimed to be more than just a
            library. It became a gathering place, a melting pot of ideas, and a
            hub for fostering a love of reading. The shelves, once sparse, now
            brim with a diverse collection that mirrors the eclectic tastes and
            interests of our community.
          </p>
          <Link
            to="/about"
            className="inline-block rounded-full border-2 border-primary bg-primary px-5 py-2.5 text-white duration-300 hover:bg-transparent hover:text-primary"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
