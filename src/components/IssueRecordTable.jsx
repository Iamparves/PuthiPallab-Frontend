import moment from "moment";
import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import TanstackTable from "./TanstackTable";

const getLocalDate = (date) => {
  if (!date) return "-";
  return moment.utc(date).local().format("lll");
};

const IssueRecordTable = ({ data, isLibrarian }) => {
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
      accessorFn: (row) => `${row.book.bookId} - ${row.book.title}`,
      header: "BookId - Title",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (props) => {
        const status = props.getValue();

        return (
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              status === "returned"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {status === "returned"
              ? status
              : isLibrarian
                ? "issued"
                : "borrowed"}
          </span>
        );
      },
    },
    {
      accessorKey: "issueDate",
      header: isLibrarian ? "Issue Date" : "Borrow Date",
      cell: (props) => getLocalDate(props.getValue()),
    },
    {
      accessorKey: "estimatedReturnDate",
      header: "Estimated Return Date",
      cell: (props) => getLocalDate(props.getValue()),
    },
    {
      accessorKey: "returnDate",
      header: "Return Date",
      cell: (props) => getLocalDate(props.getValue()),
    },
    {
      accessorFn: (row) => (row.status === "returned" ? row.delayedFine : "-"),
      header: "Fine",
      cell: (props) => {
        const fine = props.getValue();

        return (
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              fine === 0
                ? "bg-green-100 text-green-600"
                : fine === "-"
                  ? "bg-gray-100 text-gray-600"
                  : "bg-red-100 text-red-600"
            }`}
          >
            {fine === 0 ? "No fine" : fine === "-" ? "-" : `${fine} BDT`}
          </span>
        );
      },
    },
  ];

  if (isLibrarian) {
    columns.splice(2, 0, {
      accessorFn: (row) =>
        `${row.user?.userId || ""} - ${row.user?.name || ""}`,
      header: "UserId - Name",
    });
  }

  return (
    <div className="issueRecord__table">
      <div className="flex items-center justify-between gap-3 px-3 py-2 lg:px-5 lg:py-3">
        <h2 className="text-lg font-semibold text-[#1d1d1d] sm:block md:text-xl">
          Issue Records
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
      />
    </div>
  );
};

export default IssueRecordTable;
