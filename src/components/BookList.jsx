import React from "react";
import BookCard from "./BookCard";

const BookList = ({ booksQuery }) => {
  return (
    <div className="">
      {booksQuery.isLoading && <p>Loading...</p>}
      {booksQuery.isError && <p>Error: {booksQuery.error}</p>}
      {booksQuery.isSuccess && booksQuery.data?.data?.books?.length === 0 && (
        <p>No books found</p>
      )}
      {booksQuery.isSuccess && (
        <p className="mb-5 text-lg">
          Showing {booksQuery.data.results} of {booksQuery.data.total} results
        </p>
      )}
      {booksQuery.isSuccess && (
        <div className="grid grid-cols-1 gap-x-5 gap-y-7 md:grid-cols-2 lg:grid-cols-4">
          {booksQuery.data?.data?.books?.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
