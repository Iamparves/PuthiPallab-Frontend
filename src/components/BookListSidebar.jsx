import React from "react";
import { useSearchParams } from "react-router-dom";
import GenreFilter from "./GenreFilter";
import LanguageFilter from "./LanguageFilter";
import SearchFilter from "./SearchFilter";

const BookListSidebar = ({ filter, setFilter }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClearFilter = () => {
    setSearchParams((prev) => {
      prev.delete("search");
      prev.delete("bookLanguage");
      prev.delete("genres");
      prev.set("page", "1");
      return prev;
    });
  };

  const handleCloseFilter = (e) => {
    if (e.target.classList.contains("filterContainer")) {
      setFilter(false);
    }
  };

  return (
    <div
      className={`filterContainer invisible fixed left-0 top-0 z-[99999] flex h-[100dvh] w-full items-center justify-center bg-black/60 opacity-0 duration-300 md:visible md:static md:block md:h-[auto] md:bg-transparent md:opacity-100 md:duration-0 [&.active]:visible [&.active]:opacity-100 ${
        filter ? "active" : ""
      }`}
      onClick={handleCloseFilter}
    >
      <div className="max-h-[calc(100%-100px)] w-[calc(100%-40px)] max-w-md overflow-y-auto rounded-md bg-white p-5 text-[#151515] sm:max-w-xl sm:p-7 md:max-h-none md:w-full md:overflow-y-hidden md:p-0">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xl font-semibold">Filters</h3>
          <button
            onClick={handleClearFilter}
            className="text-sm underline underline-offset-[3px] duration-200 hover:text-primary"
          >
            Clear Filters
          </button>
        </div>
        <div className="grid grid-rows-[auto_auto_auto]">
          <LanguageFilter />
          <SearchFilter />
          <GenreFilter />
        </div>
      </div>
    </div>
  );
};

export default BookListSidebar;
