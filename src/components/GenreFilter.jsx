import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllGenres } from "../utils/apiRequest";
import FilterCheckBox from "./FilterCheckBox";

const GenreFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const genres = searchParams.get("genres")?.split(",") || [];

  const genresQuery = useQuery({
    queryKey: ["genres", { sort: "genreName" }],
    queryFn: () => getAllGenres("?sort=genreName"),
    enabled: false,
  });

  const handleBookGenre = (e) => {
    const genre = e.target.value;

    let newGenres = [];

    if (genres.includes(genre)) {
      newGenres = genres.filter((_genre) => _genre !== genre);
    } else {
      newGenres = [...genres, genre];
    }

    setSearchParams((prev) => {
      if (newGenres.length > 0) {
        prev.set("genres", newGenres.join(","));
      } else {
        prev.delete("genres");
      }
      prev.set("page", "1");

      return prev;
    });
  };

  useEffect(() => {
    genresQuery.refetch();
  }, []);

  return (
    <div>
      <h3 className="border-b border-[#e1e1e1] pb-2 font-semibold tracking-wider">
        Genres
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-1">
        {genresQuery.isSuccess &&
          genresQuery.data?.map((genre) => (
            <FilterCheckBox
              key={genre._id}
              value={genre._id}
              handler={handleBookGenre}
              list={genres}
              genre={genre.genreName}
            />
          ))}
      </div>
    </div>
  );
};

export default GenreFilter;
