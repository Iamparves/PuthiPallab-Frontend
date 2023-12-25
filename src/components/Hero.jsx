import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const keyword = e.target.search.value;
    if (keyword === "") return;

    navigate(`/books?search=${keyword}`);
  };

  return (
    <section className="bg-[url(/hero-bg.svg)] bg-contain bg-right-top bg-no-repeat py-10 lg:py-20 2xl:py-32">
      <div className="mx-auto max-w-xl lg:max-w-full">
        <div className="container grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="mb-5 text-4xl font-bold  text-[#1d1d1d] lg:text-[40px] xl:text-5xl xl:leading-tight">
              <span className="text-primary">Unleash</span> Your
              <br />
              Inner <span className="text-primary">Bookworm</span>
            </h1>
            <p className="mb-5 text-base text-gray-500 xl:text-lg">
              Come, let the pages turn, and let the words weave their magic.
              Discover, learn, and find inspiration within the walls of our
              library - a place where stories come alive and knowledge knows no
              bounds.
            </p>
            <form
              onSubmit={handleSearch}
              className="mx-auto flex max-w-xs sm:max-w-[400px] lg:mx-0"
            >
              <input
                className="w-full rounded-l-md border border-r-0 border-gray-200 px-3 py-2.5 text-base focus:outline-none sm:px-4 sm:py-3.5"
                type="search"
                name="search"
                placeholder="Enter keyword"
              />
              <button className="rounded-r-md bg-primary px-3 text-base font-semibold text-white sm:px-5">
                Search
              </button>
            </form>
          </div>
          <div className="row-start-1 flex justify-center lg:row-start-auto lg:justify-end">
            <img src="/book-lover.svg" alt="Book Lover" className="w-10/12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
