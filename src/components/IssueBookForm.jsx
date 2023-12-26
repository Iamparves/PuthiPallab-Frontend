import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment/moment";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { GoPerson } from "react-icons/go";
import { LuBookMarked, LuCalendar } from "react-icons/lu";
import { MdOutlineDeleteForever } from "react-icons/md";
import { TbBrandGoogleBigQuery, TbFileUpload } from "react-icons/tb";
import { getAllBooks, getAllUsers, issueBook } from "../utils/apiRequest";
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

const getCurrentDate = () => moment().toISOString();
const getReturnDate = () =>
  moment().add(3, "days").add(2, "hours").toISOString();

const IssueBookForm = ({ book, user, setBook, setUser }) => {
  const queryClient = useQueryClient();
  const [bookId, setBookId] = useState("");
  const [userId, setUserId] = useState("");
  const [dates, setDates] = useState({
    issueDate: "",
    estimatedReturnDate: "",
  });

  const bookQuery = useQuery({
    queryKey: ["books", bookId],
    queryFn: () => getAllBooks(`?bookId=${bookId}`),
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const userQuery = useQuery({
    queryKey: ["users", userId],
    queryFn: () => getAllUsers(`?userId=${userId}`),
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation({
    mutationFn: () => {
      const issueData = {
        user: user?._id,
        book: book?._id,
        issueDate: dates.issueDate,
        estimatedReturnDate: dates.estimatedReturnDate,
      };

      return issueBook(issueData);
    },
    onSuccess: (data) => {
      if (data.status === "success") {
        queryClient.invalidateQueries(["issues"]);
        return toast.success("Book issued successfully!");
      }

      toast.error(data.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handlePreview = async (e) => {
    e.preventDefault();

    if (!bookId || !userId) return;
    const toastId = toast.loading("Loading data...");

    setBook({});
    setUser({});
    setDates({ issueDate: "", estimatedReturnDate: "" });

    const resBook = await bookQuery.refetch();
    const resUser = await userQuery.refetch();

    const bookQueryData = resBook.data?.[0];
    const userQueryData = resUser.data?.[0];

    if (!bookQueryData && !userQueryData) {
      return toast.error("Book and User not found!", { id: toastId });
    }

    if (!bookQueryData) {
      return toast.error("Book not found!", { id: toastId });
    }

    if (!userQueryData) {
      return toast.error("User not found!", { id: toastId });
    }

    if (userQueryData.role === "librarian") {
      return toast.error("Books cannot be issued to librarians", {
        id: toastId,
      });
    }

    if (!userQueryData.isVerified) {
      return toast.error("Books cannot be issued to unverified users!", {
        id: toastId,
      });
    }

    toast.dismiss(toastId);

    setUser(userQueryData);
    setBook(bookQueryData);
    setDates({
      issueDate: getCurrentDate(),
      estimatedReturnDate: getReturnDate(),
    });
  };

  const resetFormData = () => {
    document.querySelector(".issueBookForm").reset();
    setBookId("");
    setUserId("");
    setDates({ issueDate: "", estimatedReturnDate: "" });
    setBook({});
    setUser({});
  };

  const onIssueBook = async (e) => {
    e.preventDefault();

    if (book.availableCopies === 0) {
      return toast.error("Currently, this book is unavailable in the library");
    }

    await mutation.mutate();
    resetFormData();
  };

  return (
    <div className="rounded-xl border border-gray-200/70 bg-white md:col-span-2 2xl:col-span-1">
      <h1 className="border-b border-gray-200/70 px-4 py-3 text-lg font-semibold text-[#1d1d1d] sm:px-5 sm:py-4 sm:text-xl">
        Issue Book
      </h1>
      <form className="issueBookForm grid grid-cols-1 gap-5 p-4 text-[#1d1d1d] sm:p-5 md:grid-cols-2 2xl:grid-cols-1">
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
                setBook({});
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
                setUser({});
              }}
              disabled={mutation.isPending}
            />
            <span className={style.icon}>
              <GoPerson />
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="issueDate" className={style.label}>
            Issue Date
          </label>
          <div className="relative">
            <input
              className={`${style.input} pointer-events-none opacity-70`}
              type="text"
              defaultValue={
                dates.issueDate ? moment(dates.issueDate).format("LLL") : ""
              }
              readOnly
              placeholder="Issue Date"
            />
            <span className={style.icon}>
              <LuCalendar />
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="estimatedReturnDate" className={style.label}>
            Estimated Return Date
          </label>
          <div className="relative">
            <input
              className={`${style.input} pointer-events-none opacity-70`}
              type="text"
              defaultValue={
                dates.estimatedReturnDate
                  ? moment(dates.estimatedReturnDate).format("LLL")
                  : ""
              }
              readOnly
              placeholder="Estimated Return Date"
            />
            <span className={style.icon}>
              <LuCalendar />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:col-span-2 2xl:col-span-1">
          <button
            type="reset"
            className={style.button2}
            disabled={
              mutation.isPending ||
              (!bookId && !userId && !dates.currentDate && !dates.returnDate)
            }
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
            disabled={
              mutation.isPending || !bookId || !userId || !user._id || !book._id
            }
            onClick={onIssueBook}
          >
            {mutation.isPending ? (
              <span className="text-xl">
                <Spinner width="w-5" height="h-5" color="fill-white" />
              </span>
            ) : (
              <span className="text-xl">
                <TbFileUpload />
              </span>
            )}
            {mutation.isPending ? "Issuing..." : "Issue"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default IssueBookForm;
