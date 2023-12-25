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
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const TanstackTable = ({
  data,
  columns,
  filter,
  setFilter,
  pageSize,
  noPagination,
}) => {
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
        pageSize: pageSize || 10,
      },
    },
  });

  return (
    <>
      <div className="tasnstack__table overflow-x-auto">
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
                    className="font-Semibold cursor-pointer px-3 py-2 text-left text-xs text-[#1d1d1d] md:px-5 md:py-3 md:text-sm"
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
                    className="px-3 py-2 text-xs font-medium text-[#3c3c3c] md:px-5 md:py-3 md:text-sm"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {data.length === 0 && (
          <div className="py-20 text-center">
            <p className="mt-2 font-medium text-gray-500">No data found</p>
          </div>
        )}
      </div>
      {!noPagination && (
        <div className="flex justify-between px-3 py-2 md:px-5 md:py-3">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="flex cursor-pointer items-center gap-1 rounded-lg bg-[#FEF2E2] px-3 py-1.5 text-sm font-medium text-primary disabled:cursor-default disabled:opacity-60 md:text-base"
          >
            <GoArrowLeft /> Prev
          </button>
          <div className="hidden gap-1.5 sm:flex">
            {new Array(table.getPageCount()).fill().map((_, i) => (
              <button
                onClick={() => table.setPageIndex(i)}
                key={i}
                className="w-8 cursor-pointer rounded-lg bg-[#FEF2E2] px-3 py-1.5 text-sm font-medium text-primary md:w-9 md:text-base"
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            className="flex items-center gap-1 rounded-lg bg-[#FEF2E2] px-3 py-1.5 text-sm font-medium text-primary disabled:cursor-default disabled:opacity-60 md:text-base"
          >
            Next <GoArrowRight />
          </button>
        </div>
      )}
    </>
  );
};

export default TanstackTable;
