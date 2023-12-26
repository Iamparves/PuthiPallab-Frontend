import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { coverImg, title, _id: bookId, author, availableCopies } = book;

  return (
    <Link
      to={`/books/${bookId}`}
      className="group block max-w-[250px] bg-transparent"
    >
      <div className="mb-5">
        <img
          src={coverImg}
          alt=""
          className="mx-auto block aspect-[1/1.4] w-full rounded-md bg-gray-200 object-cover"
        />
      </div>
      <div className="">
        <h3 className="mb-2 font-semibold leading-tight text-[#1a1668] duration-200 group-hover:text-primary sm:text-[19px] sm:leading-snug">
          {title}
        </h3>
        <p className="mb-0.5 text-[15px] text-[#1d1d1d] sm:text-base">
          {author}
        </p>
        <p
          className={`text-sm ${
            availableCopies > 0 ? "text-[#EAA451]" : "text-red-400"
          }`}
        >
          {availableCopies > 0
            ? `${availableCopies} Available Copies`
            : "Not available"}
        </p>
      </div>
    </Link>
  );
};

export default BookCard;
