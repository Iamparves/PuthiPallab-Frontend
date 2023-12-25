import React from "react";
import GenreFilter from "./GenreFilter";
import LanguageFilter from "./LanguageFilter";
import SearchFilter from "./SearchFilter";

const BookListSidebar = () => {
  return (
    <div className="text-[#151515]">
      <LanguageFilter />
      <SearchFilter />
      <GenreFilter />
    </div>
  );
};

export default BookListSidebar;
