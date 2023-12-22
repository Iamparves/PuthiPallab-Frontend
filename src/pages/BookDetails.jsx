import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import BookDetailsTop from "../components/BookDetailsTop";
import Spinner from "../components/Spinner";
import { getBookById } from "../utils/apiRequest";

const BookDetails = () => {
  const { bookId } = useParams();

  const bookQuery = useQuery({
    queryKey: ["book", { bookId }],
    queryFn: () => getBookById(bookId),
  });

  // coverImg, title, author, publisher, genres, publicationDate, bookLanguage, pageCount, summary, totalCopies, availableCopies, borrowCount, reviews, waitlist

  return (
    <main className="bg-white">
      <section className="min-h-[calc(100vh-100px)] py-12 sm:py-16">
        <div className="container">
          {bookQuery.isLoading && (
            <div className="flex flex-col items-center gap-2 text-center">
              <Spinner />
              <p className="text-gray-400">Book Loading...</p>
            </div>
          )}
          {!bookQuery.isLoading && !bookQuery.isError && (
            <div className="">
              <BookDetailsTop book={bookQuery.data} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BookDetails;
