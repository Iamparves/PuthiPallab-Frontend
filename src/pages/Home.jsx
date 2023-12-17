import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <main>
      {/* <section className="grid grid-cols-2 gap-10">
        <div className=""></div>
        <div className="">
          <img
            src="/public/book-lover.svg"
            alt="Book Lover"
            className="mx-auto w-1/2"
          />
        </div>
      </section> */}
      <Hero />
    </main>
  );
};

export default Home;
