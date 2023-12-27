import { useQuery } from "@tanstack/react-query";
import React from "react";
import GenresCard from "../components/GenresCard";
import ScrollToTop from "../components/ScrollToTop";
import Spinner from "../components/Spinner";
import TopBanner from "../components/TopBanner";
import { getAllGenres } from "../utils/apiRequest";

const Genres = () => {
  const genresQuery = useQuery({
    queryKey: ["genres", { sort: "genreName" }],
    queryFn: () => getAllGenres("?sort=genreName"),
  });
  return (
    <main className="min-h-[calc(100vh-80px)] bg-white">
      <ScrollToTop />
      <TopBanner title="Genres" background="bg-[url(/genres-top.jpg)]" />
      <section className="py-16 sm:py-20">
        <div className="container">
          {genresQuery.isLoading && (
            <div className="mt-10 flex flex-col items-center gap-2 text-center">
              <Spinner />
              <p className="text-gray-400">Genres Loading...</p>
            </div>
          )}
          {genresQuery.isSuccess && genresQuery.data?.length === 0 && (
            <div className="mt-10 text-center">
              <p className="text-gray-400">No genres found</p>
            </div>
          )}
          {!genresQuery.isLoading && !genresQuery.isError && (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-1 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]  md:gap-2 lg:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
              {genresQuery.data?.map((genre) => (
                <GenresCard key={genre._id} genre={genre} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Genres;
