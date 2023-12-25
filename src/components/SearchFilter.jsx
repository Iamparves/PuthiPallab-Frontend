import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

const SearchFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pSearch = searchParams.get("search") || "";

  const handleSearch = (e) => {
    e.preventDefault();

    const search = e.target.search.value;

    setSearchParams((prev) => {
      if (search === "") {
        prev.delete("search");
      } else {
        prev.set("search", search);
      }
      prev.set("page", "1");

      return prev;
    });
  };

  return (
    <form onSubmit={handleSearch} className="relative my-5 pt-1 md:my-10">
      <input
        name="search"
        className="block w-full rounded-md bg-[#f4f4f4] py-4 pl-5 pr-16 focus:outline-none lg:py-5"
        type="text"
        placeholder="Search..."
        defaultValue={pSearch}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 flex h-full w-16 items-center justify-center text-2xl duration-300 hover:text-primary"
      >
        <IoSearchOutline />
      </button>
    </form>
  );
};

export default SearchFilter;
