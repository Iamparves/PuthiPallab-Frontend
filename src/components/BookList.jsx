import React from "react";
import BookCard from "./BookCard";
import Spinner from "./Spinner";

const BookList = ({ booksQuery, page, limit }) => {
  const skip = (page - 1) * limit;
  return (
    <div className="">
      {booksQuery.isSuccess && (
        <p className="mb-5 text-[15px] font-medium text-gray-400 md:text-base lg:text-lg xl:text-[19px]">
          Showing{" "}
          <span className="text-[#1d1d1d]">
            {skip + 1}-{skip + booksQuery.data.results}{" "}
          </span>{" "}
          of{" "}
          <span className="text-[#1d1d1d]">{booksQuery.data.totalBooks}</span>{" "}
          results
        </p>
      )}
      {booksQuery.isLoading && (
        <div className="flex flex-col items-center py-20 sm:py-28 lg:py-40">
          <Spinner />
          <p className="mt-5 text-[15px] text-gray-400 md:text-base lg:text-lg">
            Books Loading...
          </p>
        </div>
      )}
      {booksQuery.isSuccess && booksQuery.data?.books?.length === 0 && (
        <div className="py-10 text-center md:py-24">
          <p className="mt-5 text-[15px] text-gray-400 md:text-base lg:text-lg">
            No books found
          </p>
        </div>
      )}
      {booksQuery.isSuccess && (
        <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3 xl:grid-cols-4">
          {booksQuery.data?.books?.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
