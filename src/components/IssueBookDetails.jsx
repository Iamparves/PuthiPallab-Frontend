import React from "react";

const IssueBookDetails = ({ book }) => {
  const { coverImg, bookId, title, author, genres, availableCopies } = book;

  return (
    <div className="rounded-xl border border-gray-200/70 bg-white">
      <h1 className="border-b border-gray-200/70 px-4 py-3 text-lg font-semibold text-[#1d1d1d] sm:px-5 sm:py-4 sm:text-xl">
        Book Details
      </h1>
      {!bookId && (
        <p className="px-5 py-10 text-center text-[#bbb]">
          There is nothing to show yet.
        </p>
      )}
      {bookId && (
        <div className="space-y-2 p-4 sm:p-5">
          <div className="mb-5">
            <div className="aspect-[4/5] w-40 rounded-md border p-1">
              <img
                src={coverImg}
                alt={title}
                className="h-full w-full rounded-[5px] object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2">
            <h3 className="font-semibold text-[#1d1d1d]">Book ID: </h3>
            <p className="text-gray-500">{bookId}</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2">
            <h3 className="font-semibold text-[#1d1d1d]">Title: </h3>
            <p className="text-gray-500">{title}</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2">
            <h3 className="font-semibold text-[#1d1d1d]">Author: </h3>
            <p className="text-gray-500">{author}</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2">
            <h3 className="font-semibold text-[#1d1d1d]">Genres: </h3>
            <p className="text-gray-500">
              {genres?.map((genre) => genre.genreName).join(", ")}
            </p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2">
            <h3 className="font-semibold text-[#1d1d1d]">Available Copies: </h3>
            <p className="text-gray-500">{availableCopies}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IssueBookDetails;
