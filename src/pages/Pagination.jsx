import React from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import { useSearchParams } from "react-router-dom";

const Button = ({ page, icon, disabled, handlePageChange }) => {
  return (
    <button
      className="bg-primary p-3 text-lg text-white transition-all duration-200 first:rounded-l-md last:rounded-r-md hover:bg-[#3d3d3d] disabled:pointer-events-none disabled:opacity-50"
      disabled={disabled}
      onClick={() => handlePageChange(page)}
    >
      {icon}
    </button>
  );
};

const Pagination = ({ hasPrevPage, hasNextPage, currentPage, lastPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (page) => {
    setSearchParams((prev) => {
      prev.set("page", page);
      return prev;
    });
  };

  return (
    <div className="mt-10">
      <div className="flex justify-center gap-[1px]">
        <Button
          page={1}
          icon={<FiChevronsLeft />}
          disabled={!hasPrevPage}
          handlePageChange={handlePageChange}
        />
        <Button
          page={currentPage - 1}
          icon={<FiChevronLeft />}
          disabled={!hasPrevPage}
          handlePageChange={handlePageChange}
        />
        <p className="flex items-center justify-center bg-primary px-3 font-medium text-white sm:min-w-[100px]">
          Page {currentPage}
        </p>
        <Button
          page={currentPage + 1}
          icon={<FiChevronRight />}
          disabled={!hasNextPage}
          handlePageChange={handlePageChange}
        />
        <Button
          page={lastPage}
          icon={<FiChevronsRight />}
          disabled={!hasNextPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Pagination;
