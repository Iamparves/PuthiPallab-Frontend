import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { getAllBooks } from "../utils/apiRequest";

const BookCard = ({ book }) => {
  const { _id, coverImg, title, author, availableCopies } = book;

  return (
    <Link
      to={`/books/${_id}`}
      className="group grid grid-cols-[60px_1fr] items-center gap-2 px-2 py-3 duration-300 hover:bg-gray-100/60"
    >
      <img
        src={coverImg}
        alt={title}
        className="aspect-[1/1.4] w-full object-cover"
      />
      <div className="space-y-1">
        <h4 className="text-[15px] font-semibold text-[#151515] duration-300 group-hover:text-primary">
          {title}
        </h4>
        <p className="text-xs text-[#777]">
          by <span className="font-medium text-primary">{author}</span>
        </p>
        <p
          className={`text-xs ${
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

const BookDetailsSidebar = ({ genres, bookId }) => {
  const genresList = genres?.map((genre) => genre._id).join(",");

  const booksQuery = useQuery({
    queryKey: ["books", { genres: genresList, limit: 5 }],
    queryFn: () => getAllBooks(`?genres=${genresList}&limit=5`),
  });

  const filteredBooks =
    booksQuery.data?.filter((book) => book._id !== bookId).slice(0, 4) || [];

  return (
    <div className="hidden bg-white px-3 py-5 shadow-sm xl:block">
      <h3 className="border-b border-[#ebebeb] px-2 pb-1 text-lg font-semibold text-[#1d1d1d]">
        Related Books
      </h3>
      <div className="grid grid-cols-1 divide-y-[1px] divide-[#ebebeb] pt-2">
        {filteredBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
      {filteredBooks.length === 0 && (
        <p className="py-3 text-center text-gray-400">No related books found</p>
      )}
    </div>
  );
};

export default BookDetailsSidebar;
