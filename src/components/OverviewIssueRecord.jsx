import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAllIssues } from "../utils/apiRequest";
import TanstackTable from "./TanstackTable";

const getLocalDate = (date) => {
  if (!date) return "-";
  return moment.utc(date).local().format("lll");
};

const OverviewIssueRecord = () => {
  const [filter, setFilter] = useState("");

  const issuesQuery = useQuery({
    queryKey: ["issues"],
    queryFn: () => getAllIssues("?status=issued&sort=-updatedAt&limit=6"),
  });

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
      accessorFn: (row) => row.user.name,
      header: "Member",
    },
    {
      accessorFn: (row) =>
        moment().isAfter(row.estimatedReturnDate) ? "delayed" : "not delayed",
      header: "Delayed Status",
      cell: (props) => {
        const status = props.getValue();

        return (
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              status !== "delayed"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {status}
          </span>
        );
      },
    },
    {
      accessorKey: "issueDate",
      header: "Issue Date",
      cell: (props) => getLocalDate(props.getValue()),
    },
    {
      accessorKey: "estimatedReturnDate",
      header: "Estimated Return Date",
      cell: (props) => getLocalDate(props.getValue()),
    },
  ];

  return (
    <div className="overviewIssue__table p-3 sm:p-5">
      <h2 className="mb-3 text-lg font-semibold text-[#1d1d1d] sm:mb-5 sm:text-xl">
        Currently Issued Books
      </h2>

      {!issuesQuery.isLoading && !issuesQuery.isError && (
        <div className="border border-b-0 border-gray-200/70">
          <TanstackTable
            data={issuesQuery.data}
            columns={columns}
            filter={filter}
            setFilter={setFilter}
            noPagination={true}
          />
        </div>
      )}

      <div className="mt-5 text-center">
        <Link
          to="/issue-records"
          className="mx-auto block w-[200px] rounded-full border-2 border-primary bg-primary p-3 text-center font-semibold text-white duration-300 hover:bg-white hover:text-primary"
        >
          View all
        </Link>
      </div>
    </div>
  );
};

export default OverviewIssueRecord;
