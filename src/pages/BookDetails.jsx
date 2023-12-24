import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import BookDetailsInfo from "../components/BookDetailsInfo";
import BookDetailsReviews from "../components/BookDetailsReviews";
import BookDetailsSidebar from "../components/BookDetailsSidebar";
import BookDetailsTop from "../components/BookDetailsTop";
import ScrollToTop from "../components/ScrollToTop";
import Spinner from "../components/Spinner";
import { getBookById } from "../utils/apiRequest";

const BookDetails = () => {
  const { bookId } = useParams();

  const bookQuery = useQuery({
    queryKey: ["book", { bookId }],
    queryFn: () => getBookById(bookId),
    staleTime: 1000 * 30,
  });

  if (bookQuery.data?.status === "fail") {
    return (
      <main className="bg-[#F6F7FB]">
        <section className="min-h-[calc(100vh-100px)] py-12">
          <div className="container">
            <div className="bg-white py-20 text-center shadow-sm">
              <p className="text-gray-400 sm:text-lg">Book Not Found</p>
              <Link
                to="/"
                className="mt-5 inline-block border-2 border-primary bg-transparent px-3 py-2 text-xs font-medium uppercase text-primary transition-all hover:bg-primary hover:text-white sm:text-sm"
              >
                Return Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-[#F6F7FB]">
      <ScrollToTop />
      <section className="min-h-[calc(100vh-100px)] py-8 md:py-12">
        <div className="container">
          {bookQuery.isLoading && (
            <div className="flex flex-col items-center gap-2 text-center">
              <Spinner />
              <p className="text-gray-400">Book Loading...</p>
            </div>
          )}
          {!bookQuery.isLoading && !bookQuery.isError && (
            <div>
              <div className="grid grid-cols-1 gap-3 xl:grid-cols-[1fr_280px]">
                <BookDetailsTop book={bookQuery.data} />
                <BookDetailsSidebar
                  bookId={bookId}
                  genres={bookQuery.data?.genres}
                />
              </div>
              <BookDetailsInfo book={bookQuery.data} />
              <BookDetailsReviews book={bookQuery.data} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BookDetails;
