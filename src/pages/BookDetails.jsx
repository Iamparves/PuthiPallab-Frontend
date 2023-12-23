import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import BookDetailsSidebar from "../components/BookDetailsSidebar";
import BookDetailsTop from "../components/BookDetailsTop";
import Spinner from "../components/Spinner";
import { getBookById } from "../utils/apiRequest";

const BookDetails = () => {
  const { bookId } = useParams();

  const bookQuery = useQuery({
    queryKey: ["book", { bookId }],
    queryFn: () => getBookById(bookId),
    staleTime: 1000 * 30,
  });

  // publisher, genres, publicationDate, bookLanguage, pageCount, totalCopies, borrowCount, reviews

  return (
    <main className="bg-[#F6F7FB]">
      <section className="min-h-[calc(100vh-100px)] py-12 sm:py-16">
        <div className="container">
          {bookQuery.isLoading && (
            <div className="flex flex-col items-center gap-2 text-center">
              <Spinner />
              <p className="text-gray-400">Book Loading...</p>
            </div>
          )}
          {!bookQuery.isLoading && !bookQuery.isError && (
            <div className="grid gap-3 xl:grid-cols-[1fr_280px]">
              <BookDetailsTop book={bookQuery.data} />
              <BookDetailsSidebar
                bookId={bookId}
                genres={bookQuery.data.genres}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BookDetails;
