import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineSearch } from "react-icons/hi";
import { leaveWaitlist } from "../utils/apiRequest";
import TanstackTable from "./TanstackTable";

const WaitlistTable = ({ data, isLibrarian }) => {
  const [filter, setFilter] = useState("");

  const mutation = useMutation({
    mutationFn: leaveWaitlist,
    onSuccess: (data) => {
      if (data.status === "success") {
        return toast.success("Successfully left waitlist");
      }

      toast.error(data.message);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onLeaveWaitlist = (bookId) => {
    const confirm = window.confirm(
      "Are you sure you want to leave the waitlist?",
    );

    if (confirm) mutation.mutate(bookId);
  };

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
      header: "Title",
    },
    {
      accessorFn: (row) => row.book.author,
      header: "Author",
    },
    {
      accessorFn: (row) => `${row.waitingList.length} person`,
      header: "Total Waiting",
    },
  ];

  if (!isLibrarian) {
    // Leave waitlist / cancel waiting
    columns.push({
      accessorFn: (row) => row.book._id,
      header: "Action",
      cell: (props) => {
        return (
          <button
            onClick={() => onLeaveWaitlist(props.getValue())}
            className="rounded-md bg-[#FF5556] px-3 py-2.5 text-white hover:bg-[#ff4b4b]"
          >
            Leave Waitlist
          </button>
        );
      },
    });
  }

  return (
    <div className="waitlist__table">
      <div className="flex items-center justify-between gap-3 px-3 py-2 lg:px-5 lg:py-3">
        <h2 className="text-lg font-semibold text-[#1d1d1d] sm:block md:text-xl">
          {!isLibrarian && "My"} Waitlist
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
        noPagination={!isLibrarian}
      />
    </div>
  );
};

export default WaitlistTable;
