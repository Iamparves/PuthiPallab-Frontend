import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { GiReturnArrow } from "react-icons/gi";
import { GoPerson } from "react-icons/go";
import { LuBookMarked } from "react-icons/lu";
import { MdOutlineDeleteForever } from "react-icons/md";
import { TbBrandGoogleBigQuery } from "react-icons/tb";
import { getIssue } from "../utils/apiRequest";
import Spinner from "./Spinner";

const style = {
  label: "mb-1 inline-block text-xs font-medium text-gray-400",
  input:
    "block w-full rounded-lg border border-[#eee] bg-[#FAFBFE] p-3 pl-9 placeholder:text-[#c3c3c3] focus:outline-none",
  icon: "absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-xl text-[#c3c3c3]/80",
  error: "mt-1 block text-xs text-red-400",
  button:
    "inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-primary px-3 py-2.5 text-center text-sm font-medium text-white duration-300 hover:bg-white hover:text-primary disabled:pointer-events-none disabled:opacity-60",
  button2:
    "inline-flex items-center justify-center gap-1 rounded-lg border-2 border-primary px-3 py-2.5 text-center text-sm font-medium text-primary disabled:pointer-events-none disabled:opacity-60",
};

const getCurrentDate = () => moment().toISOString().slice(0, 16);

const ReturnBookForm = ({ issue, setIssue }) => {
  const [bookId, setBookId] = useState("");
  const [userId, setUserId] = useState("");

  const issueQuery = useQuery({
    queryKey: ["issues", bookId, userId],
    queryFn: () => getIssue(bookId, userId),
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation({
    mutationFn: () => {},
  });

  const resetFormData = () => {
    document.querySelector(".returnBookForm").reset();
    setBookId("");
    setUserId("");
    setIssue({});
  };

  const handlePreview = async (e) => {
    e.preventDefault();

    if (!bookId || !userId) return;
    const toastId = toast.loading("Loading issue data...");
    setIssue({});

    const issueResult = await issueQuery.refetch();
    toast.dismiss(toastId);

    setIssue(issueResult.data);
  };

  const onReturnBook = async (e) => {
    e.preventDefault();

    await mutation.mutate();
    resetFormData();
  };

  return (
    <div className="rounded-xl border border-gray-200/70 bg-white">
      <h1 className="border-b border-gray-200/70 px-4 py-3 text-lg font-semibold text-[#1d1d1d] sm:px-5 sm:py-4 sm:text-xl">
        Return Book
      </h1>
      <form className="returnBookForm grid grid-cols-2 gap-x-3 gap-y-5 p-4 text-[#1d1d1d] sm:p-5 xl:grid-cols-1">
        <div>
          <label htmlFor="bookId" className={style.label}>
            Book ID
          </label>
          <div className="relative">
            <input
              className={style.input}
              type="number"
              placeholder="Enter book ID"
              onChange={(e) => {
                setBookId(e.target.value);
              }}
              disabled={mutation.isPending}
            />
            <span className={style.icon}>
              <LuBookMarked />
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="userId" className={style.label}>
            User ID
          </label>
          <div className="relative">
            <input
              className={style.input}
              type="number"
              placeholder="Enter user ID"
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              disabled={mutation.isPending}
            />
            <span className={style.icon}>
              <GoPerson />
            </span>
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center gap-2 xl:col-span-1">
          <button
            type="reset"
            className={style.button2}
            disabled={mutation.isPending || (!bookId && !userId)}
            onClick={resetFormData}
          >
            <span className="text-xl">
              <MdOutlineDeleteForever />
            </span>{" "}
            Reset
          </button>
          <button
            className={style.button}
            disabled={mutation.isPending || !bookId || !userId}
            onClick={handlePreview}
          >
            <span className="text-xl">
              <TbBrandGoogleBigQuery />
            </span>{" "}
            Preview
          </button>
          <button
            type="submit"
            className={style.button}
            disabled={mutation.isPending || !bookId || !userId || !issue._id}
            onClick={onReturnBook}
          >
            {mutation.isPending ? (
              <span className="text-xl">
                <Spinner width="w-5" height="h-5" color="fill-white" />
              </span>
            ) : (
              <span className="text-xl">
                <GiReturnArrow />
              </span>
            )}
            {mutation.isPending ? "Returning..." : "Return"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReturnBookForm;
