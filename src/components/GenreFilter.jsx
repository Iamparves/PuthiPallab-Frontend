import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllGenres } from "../utils/apiRequest";

const Genre = ({ genre, handleBookGenre, genres }) => {
  return (
    <label className="my-2 flex cursor-pointer items-center">
      <input
        type="checkbox"
        name="bookLanguage"
        value={genre._id}
        className="mr-2"
        onChange={handleBookGenre}
        defaultChecked={genres.includes(genre._id)}
      />
      {genre.genreName}
    </label>
  );
};

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
    <div className="">
      <h3 className="border-b border-[#e1e1e1] pb-5 text-lg tracking-wider ">
        Genres
      </h3>
      <div className="mt-5">
        {genresQuery.isSuccess &&
          genresQuery.data?.map((genre) => (
            <Genre
              key={genre._id}
              genre={genre}
              handleBookGenre={handleBookGenre}
              genres={genres}
            />
          ))}
      </div>
    </div>
  );
};

export default GenreFilter;
