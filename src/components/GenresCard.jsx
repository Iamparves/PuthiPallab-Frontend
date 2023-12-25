import React from "react";
import { Link } from "react-router-dom";

const GenresCard = ({ genre }) => {
  const { _id: genreId, genreName, imageUrl } = genre;

  return (
    <Link
      to={`/books?genres=${genreId}`}
      className="relative block aspect-[2/1.1] min-h-[100px] w-full overflow-hidden rounded-md"
    >
      <img
        className="h-full w-full object-cover duration-300"
        src={imageUrl}
        alt={genreName}
      />
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/60 p-5 duration-300 hover:backdrop-blur-[2px]">
        <p className="text-center font-semibold leading-tight tracking-wide text-white duration-300">
          {genreName}
        </p>
      </div>
    </Link>
  );
};

export default GenresCard;
