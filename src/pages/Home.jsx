import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="bg-[url(/img-1.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="flex min-h-[calc(100svh-64px)] w-full flex-col justify-center bg-black/60 md:min-h-[calc(100svh-80px)]">
          <div className="container flex flex-col items-center text-center">
            <h1 className="mb-3 text-3xl font-bold text-white md:text-5xl md:leading-tight">
              Journey into the{" "}
              <span className="text-primary">World of Books</span>
            </h1>
            <p className="mb-5 text-lg text-gray-100 md:text-2xl">
              Explore the Boundless Universe of Knowledge Through the Pages of
              Puthi Pallab
            </p>
            <Link className="mx-auto block rounded-full border-2 border-primary bg-primary px-6 py-3 text-center font-semibold text-white duration-300 hover:bg-white hover:text-primary">
              Know more
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
