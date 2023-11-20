import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdDeleteOutline, MdOutlineAdd } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { getAllGenres } from "../utils/apiRequest";
import TanstackTable from "./TanstackTable";

const DashBooksTable = ({ data, onDelete }) => {
  const [filter, setFilter] = useState("");
  const queryClient = useQueryClient();

  const columns = [
    {
      accessorKey: "bookId",
      header: "Book ID",
    },
    {
      accessorKey: "coverImg",
      header: "Cover",
      cell: (props) => {
        const cover =
          // props.getValue() ||
          "https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png";

        return (
          <img src={cover} alt="" className="aspect-[3/4] w-12 object-cover" />
        );
      },
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "author",
      header: "Author",
    },
    {
      accessorFn: (row) =>
        row.genres.map((genre) => genre.genreName).join(", "),
      header: "Genres",
    },
    {
      accessorKey: "totalCopies",
      header: "Total",
      cell: (props) => <p className="text-center">{props.getValue()}</p>,
    },
    {
      accessorKey: "availableCopies",
      header: "Available",
      cell: (props) => <p className="text-center">{props.getValue()}</p>,
    },
    {
      accessorKey: "borrowCount",
      header: "Borrowed",
      cell: (props) => <p className="text-center">{props.getValue()}</p>,
    },
    {
      accessorFn: (row) => row._id,
      header: "Update",
      cell: (props) => (
        <Link
          to={`edit/${props.getValue()}`}
          className="mx-auto flex aspect-square w-9 items-center justify-center rounded-md border border-[#eee] bg-[#FEF2E2]/30 text-xl text-[#50C878]"
        >
          <TbEdit />
        </Link>
      ),
    },
    {
      accessorFn: (row) => row._id,
      header: "Delete",
      cell: (props) => (
        <button
          className="mx-auto flex aspect-square w-9 items-center justify-center rounded-md border border-[#eee] bg-[#FEF2E2]/30 text-xl text-[#FF5556]"
          onClick={() => onDelete(props.getValue())}
        >
          <MdDeleteOutline />
        </button>
      ),
    },
  ];

  const prefetchGenres = async () => {
    await queryClient.prefetchQuery({
      queryKey: ["genres"],
      queryFn: () => getAllGenres(),
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-3 px-5 py-3">
        <h2 className="text-xl font-semibold text-[#1d1d1d]">Books List</h2>
        <div className="relative">
          <input
            type="text"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            placeholder="Search"
            className="block w-64 rounded-xl border-2 border-gray-200/70 px-3 py-2 pl-8 placeholder:text-[#bbb] focus:outline-none"
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-lg text-gray-400/80">
            <HiOutlineSearch />
          </span>
        </div>
        <Link
          to="new"
          className="flex items-center gap-1 rounded-md bg-primary p-2 font-medium text-white"
          onMouseOver={prefetchGenres}
        >
          <span className="text-xl">
            <MdOutlineAdd />
          </span>
          Add Book
        </Link>
      </div>
      <TanstackTable
        data={data}
        columns={columns}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
};

export default DashBooksTable;
