import React from "react";
import GenreFilter from "./GenreFilter";
import LanguageFilter from "./LanguageFilter";
import SearchFilter from "./SearchFilter";

const BookListSidebar = () => {
  return (
    <div className="text-[#151515]">
      <div className="grid grid-rows-[auto_auto_auto]">
        <LanguageFilter />
        <SearchFilter />
        <GenreFilter />
      </div>
    </div>
  );
};

export default BookListSidebar;
