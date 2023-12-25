import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSearchParams } from "react-router-dom";
import BookList from "../components/BookList";
import BookListSidebar from "../components/BookListSidebar";
import TopBanner from "../components/TopBanner";
import { getFilteredBooks } from "../utils/apiRequest";

const Books = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    page: "1",
    limit: "12",
  });

  // const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "12");
  // const bookLanguage = searchParams.get("bookLanguage") || "";
  // const genres = searchParams.get("genres") || "";

  const booksQuery = useQuery({
    queryKey: ["books", searchParams.toString()],
    queryFn: () => getFilteredBooks(`?${searchParams.toString()}`),
  });

  const totalPages = Math.ceil(booksQuery.data?.total / limit) || 1;

  return (
    <main className="bg-white">
      <TopBanner title="Books" background="bg-[url(/books-top.jpg)]" />
      <section className="py-10">
        <div className="container grid grid-cols-1 gap-5 md:grid-cols-[300px_1fr]">
          <BookListSidebar
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <BookList booksQuery={booksQuery} />
        </div>
      </section>
    </main>
  );
};

export default Books;
