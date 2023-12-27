import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BookList from "../components/BookList";
import BookListSidebar from "../components/BookListSidebar";
import TopBanner from "../components/TopBanner";
import { getBooksPaginated } from "../utils/apiRequest";
import Pagination from "./Pagination";

const Books = () => {
  const [filter, setFilter] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    page: "1",
    limit: "12",
  });

  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "12");
  const bookLanguage = searchParams.get("bookLanguage") || "";
  const genres = searchParams.get("genres") || "";

  const params = { search, page, limit, bookLanguage, genres };

  const booksQuery = useQuery({
    queryKey: ["books", params],
    queryFn: () => getBooksPaginated(params),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [booksQuery.data?.books?.[0]?._id]);

  return (
    <main className="bg-white">
      <TopBanner title="Books" background="bg-[url(/books-top.jpg)]" />
      <section className="py-8 lg:py-10 xl:py-14">
        <div className="container grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr] md:gap-5 lg:grid-cols-[290px_1fr] lg:gap-10">
          <BookListSidebar
            filter={filter}
            setFilter={setFilter}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <div>
            <BookList
              setFilter={setFilter}
              page={page}
              limit={limit}
              booksQuery={booksQuery}
            />
            <Pagination
              hasNextPage={booksQuery.data?.hasNextPage}
              hasPrevPage={booksQuery.data?.hasPrevPage}
              lastPage={booksQuery.data?.totalPages}
              currentPage={page}
              isFetching={booksQuery.isFetching}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Books;
