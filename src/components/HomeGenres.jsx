import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getAllGenres } from "../utils/apiRequest";
import HomeGenresCard from "./HomeGenresCard";
import SectionTop from "./SectionTop";
import Spinner from "./Spinner";

const HomeGenres = () => {
  const genresQuery = useQuery({
    queryKey: ["genres", { limit: 5 }],
    queryFn: () => getAllGenres("?limit=5"),
  });

  return (
    <section className="bg-[#F6F7FB] py-16 sm:py-20">
      <div className="container">
        <SectionTop title="Genres" letter="G" />
        {genresQuery.isLoading && (
          <div className="mt-10 flex flex-col items-center gap-2 rounded-lg bg-[radial-gradient(circle,#f8f8f8_10%,#fff)] px-5 py-20 text-center">
            <Spinner />
            <p className="text-gray-400">Genres Loading...</p>
          </div>
        )}
        {!genresQuery.isLoading && !genresQuery.isError && (
          <div>
            <div
              className="mx-auto mt-10 grid grid-cols-2 gap-2 sm:grid-cols-[5fr_4fr] sm:grid-rows-[repeat(6,80px)] md:grid-cols-6 md:grid-rows-[200px_200px_200px] lg:max-w-[900px] lg:grid-rows-[220px_220px_260px]"
              style={{ gridAutoRows: "120px" }}
            >
              {genresQuery.data.map((genre, index) => (
                <HomeGenresCard key={index} genre={genre} />
              ))}
            </div>
            <div className="mt-7 text-center">
              <Link
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-primary px-5 py-3.5 font-semibold uppercase text-white duration-300 hover:bg-transparent hover:text-primary"
                to="/about"
              >
                View all Genre <FaChevronRight />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeGenres;
