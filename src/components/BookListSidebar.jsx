import React from "react";
import { useSearchParams } from "react-router-dom";
import GenreFilter from "./GenreFilter";
import LanguageFilter from "./LanguageFilter";
import SearchFilter from "./SearchFilter";

const BookListSidebar = () => {
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

  return (
    <div className="text-[#151515]">
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
  );
};

export default BookListSidebar;
