import moment from "moment";
import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdDeleteOutline, MdOutlineAdd } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import TanstackTable from "./TanstackTable";

const DashGenresTable = ({ data, onDelete }) => {
  const [filter, setFilter] = useState("");

  const columns = [
    {
      accessorKey: "imageUrl",
      header: "Thumbnail",
      cell: (props) => {
        const thumbnail = props.getValue();

        return (
          <img
            src={thumbnail}
            alt=""
            className="aspect-[8/7] w-20 object-cover"
          />
        );
      },
    },
    {
      accessorKey: "genreName",
      header: "Genre",
    },
    {
      accessorFn: (row) => (row.slug ? row.slug : "-"),
      header: "Slug",
    },
    {
      accessorFn: (row) => moment.utc(row.createdAt).local().format("LLL"),
      header: "Created At",
    },
    {
      accessorFn: (row) => row._id,
      header: "Update",
      cell: (props) => (
        <Link
          to={`edit/${props.getValue()}`}
          className="mx-auto flex aspect-square w-9 items-center justify-center rounded-md border border-[#eee] bg-[#FEF2E2]/30 text-xl text-[#50C878] duration-200 hover:bg-[#50c878] hover:text-white"
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
          className="mx-auto flex aspect-square w-9 items-center justify-center rounded-md border border-[#eee] bg-[#FEF2E2]/30 text-xl text-[#FF5556] duration-200 hover:bg-[#FF5556] hover:text-white"
          onClick={() => onDelete(props.getValue())}
        >
          <MdDeleteOutline />
        </button>
      ),
    },
  ];

  return (
    <div className="genres__table">
      <div className="flex items-center justify-between gap-3 px-3 py-2 lg:px-5 lg:py-3">
        <h2 className="hidden text-lg font-semibold text-[#1d1d1d] sm:block md:text-xl">
          Genres List
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
        <Link
          to="new"
          className="flex items-center gap-1 rounded-md bg-primary p-2 text-sm font-medium text-white sm:text-base"
        >
          <span className="text-xl">
            <MdOutlineAdd />
          </span>
          Add Genre
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

export default DashGenresTable;
