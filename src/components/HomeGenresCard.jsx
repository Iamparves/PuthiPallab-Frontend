import React from "react";
import { Link } from "react-router-dom";

const HomeGenresCard = ({ genre }) => {
  const { _id: genreId, genreName, imageUrl } = genre;

  return (
    <Link
      to={`/books?genres=${genreId}`}
      className="group relative block h-full w-full overflow-hidden rounded-md
    sm:last:hidden
    sm:[&:is(:nth-child(1),:nth-child(5))]:row-span-3
    md:[&:is(:nth-child(2),:nth-child(3))]:col-span-2
    sm:[&:is(:nth-child(2),:nth-child(3),:nth-child(4))]:row-span-2
    md:[&:is(:nth-child(2),:nth-child(3),:nth-child(4))]:row-span-1
    md:[&:is(:nth-child(4),:nth-child(5))]:col-span-3
    md:[&:nth-child(1)]:col-span-4
    md:[&:nth-child(1)]:row-span-2
    md:[&:nth-child(3)]:col-start-5
    sm:[&:nth-child(5)]:col-start-1
    sm:[&:nth-child(5)]:row-start-4
    md:[&:nth-child(5)]:col-start-4
    md:[&:nth-child(5)]:row-span-1
    "
    >
      <img
        className="h-full w-full object-cover duration-300"
        src={imageUrl}
        alt={genreName}
      />
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/60 p-5 duration-300 hover:backdrop-blur-[2px]">
        <p className="text-center font-semibold leading-tight tracking-wide text-white duration-300 group-hover:tracking-widest lg:text-xl">
          {genreName}
        </p>
      </div>
    </Link>
  );
};

export default HomeGenresCard;
