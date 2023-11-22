import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Outlet } from "react-router-dom";
import DashBooksTable from "../../components/DashBooksTable";
import DashboardHeader from "../../components/DashboardHeader";
import Spinner from "../../components/Spinner";
import { deleteBook, getAllBooks } from "../../utils/apiRequest";

const Books = () => {
  const queryClient = useQueryClient();

  const booksQuery = useQuery({
    queryKey: ["books"],
    queryFn: () => getAllBooks(),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteBook,
    onSuccess: (data) => {
      if (data.status === "success") {
        queryClient.invalidateQueries(["books"]);
        return toast.success("Book deleted successfully");
      }
      toast.error(data.message);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleDelete = (bookId) => {
    const confirm = window.confirm("Are you sure you want to delete the book?");

    if (confirm) deleteMutation.mutate(bookId);
  };

  return (
    <>
      <Outlet />
      <DashboardHeader title="Books" desc="Manage library book with ease" />
      <section className="h-[calc(100vh-80px)] overflow-y-auto p-3 sm:p-5 xl:p-10">
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {booksQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">Books Loading...</p>
            </div>
          )}
          {booksQuery.isError && <p>Error: {booksQuery.error.message}</p>}
          {!booksQuery.isLoading && !booksQuery.isError && (
            <DashBooksTable data={booksQuery.data} onDelete={handleDelete} />
          )}
        </div>
      </section>
    </>
  );
};

export default Books;
