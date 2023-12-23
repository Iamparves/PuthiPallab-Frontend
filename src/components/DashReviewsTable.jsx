import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useStore } from "../store";
import TanstackTable from "./TanstackTable";

const DashReviewsTable = ({ data, onDelete }) => {
  const user = useStore((state) => state.user);
  const isMember = user.role === "member";
  const [filter, setFilter] = useState("");

  const columns = [
    {
      accessorFn: (row) => row.book.coverImg,
      header: "Cover",
      cell: (props) => {
        const cover = props.getValue();

        return (
          <img src={cover} alt="" className="aspect-[3/4] w-12 object-cover" />
        );
      },
    },
    {
      accessorFn: (row) => row.book.title,
      header: "Book",
    },
    {
      accessorFn: (row) => row.ratings,
      header: "Rating",
    },
    {
      accessorFn: (row) => row.review,
      header: "Review",
    },
    {
      accessorFn: (row) => row._id,
      header: "Delete",
      cell: (props) => (
        <button
          className="mx-auto flex aspect-square w-9 items-center justify-center rounded-md border border-[#eee] bg-[#FEF2E2]/30 text-xl text-[#FF5556] duration-200 hover:bg-[#FF5556] hover:text-white"
          onClick={() => onDelete(props.getValue())}
        >
          <MdDeleteOutline />
        </button>
      ),
    },
    {
      accessorFn: (row) => row.book._id,
      header: "View Book",
      cell: (props) => (
        <Link
          className="mx-auto flex aspect-square w-9 items-center justify-center rounded-md border border-[#eee] bg-[#FEF2E2]/30 text-xl text-primary duration-200 hover:bg-primary hover:text-white"
          target="_blank"
          to={`/books/${props.getValue()}`}
        >
          <AiOutlineEye />
        </Link>
      ),
    },
  ];

  if (!isMember) {
    columns.splice(2, 0, {
      accessorFn: (row) => row.member?.name || "-",
      header: "Member",
    });
  }

  return (
    <div className="reviews__table">
      <div className="flex items-center justify-between gap-3 px-3 py-2 lg:px-5 lg:py-3">
        <h2 className="text-lg font-semibold text-[#1d1d1d] sm:block md:text-xl">
          {isMember && "My"} Reviews
        </h2>
        <div className="relative w-[60%] max-w-[220px] sm:w-auto sm:max-w-none">
          <input
            type="text"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            placeholder="Search"
            className="block w-full rounded-lg border-2 border-gray-200/70 px-2 py-1.5 pl-8 text-sm placeholder:text-[#bbb] focus:outline-none sm:w-64 sm:rounded-xl sm:px-3 sm:py-2 sm:pl-8 sm:text-base"
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-lg text-gray-400/80">
            <HiOutlineSearch />
          </span>
        </div>
      </div>
      <TanstackTable
        data={data}
        columns={columns}
        filter={filter}
        setFilter={setFilter}
        noPagination={isMember}
      />
    </div>
  );
};

export default DashReviewsTable;
