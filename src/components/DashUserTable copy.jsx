import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { HiOutlineSearch } from "react-icons/hi";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const columns = [
  {
    accessorKey: "userId",
    header: "User ID",
  },
  {
    accessorKey: "photo",
    header: "Avatar",
    cell: (props) => {
      const avatar =
        props.getValue() ||
        "https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png";

      return (
        <img
          src={avatar}
          alt=""
          className="aspect-square w-12 rounded-full object-cover"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Fullname",
  },
  {
    accessorKey: "email",
    header: "Email Address",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (props) =>
      props.getValue().slice(0, 1).toUpperCase() + props.getValue().slice(1),
  },
  {
    accessorFn: (row) =>
      JSON.stringify({
        id: row._id,
        title: row.role === "member" ? "Make Librarian" : "Make Member",
      }),
    header: "Action",
    cell: (props) => {
      const { id, title } = JSON.parse(props.getValue());

      return <button onClick={() => console.log(id)}>{title}</button>;
    },
  },
];

const DashUserTable = ({ data }) => {
  const [filter, setFilter] = useState("");
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFilter,
    initialState: {
      pagination: {
        pageSize: 15,
      },
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between px-5 py-3">
        <h2 className="text-xl font-semibold text-[#1d1d1d]">Users List</h2>
        <div className="relative">
          <input
            type="text"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            placeholder="Search"
            className="block w-60 rounded-xl border-2 border-gray-200/70 px-3 py-2 pl-8 placeholder:text-[#bbb] focus:outline-none"
          />
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-lg text-gray-400/80">
            <HiOutlineSearch />
          </span>
        </div>
      </div>
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b border-gray-200/70 bg-[#F6F7FB]"
            >
              {headerGroup.headers.map((header) => (
                <th
                  onClick={header.column.getToggleSortingHandler()}
                  className="font-Semibold px-5 py-3 text-left text-sm text-[#1d1d1d]"
                  key={header.id}
                >
                  <div className="inline-flex items-center gap-1">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                    {
                      { asc: <IoChevronUp />, desc: <IoChevronDown /> }[
                        header.column.getIsSorted() ?? null
                      ]
                    }
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              className="border-b border-gray-200/70 even:bg-[#F6F7FB]/50"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  className="px-5 py-3 text-sm font-medium text-[#3c3c3c]"
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between p-5">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="flex cursor-pointer items-center gap-1 rounded-lg bg-[#FEF2E2] px-3 py-1.5 font-medium text-primary disabled:cursor-default disabled:opacity-60"
        >
          <GoArrowLeft /> Prev
        </button>
        <div className="flex gap-1.5">
          {new Array(table.getPageCount()).fill().map((_, i) => (
            <button
              onClick={() => table.setPageIndex(i)}
              key={i}
              className="w-9 cursor-pointer rounded-lg bg-[#FEF2E2] px-3 py-1.5 font-medium text-primary"
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          className="flex items-center gap-1 rounded-lg bg-[#FEF2E2] px-3 py-1.5 font-medium text-primary disabled:cursor-default disabled:opacity-60"
        >
          Next <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default DashUserTable;
