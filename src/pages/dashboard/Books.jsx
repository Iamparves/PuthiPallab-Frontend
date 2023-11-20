import { useQuery } from "@tanstack/react-query";
import React from "react";
import DashBooksTable from "../../components/DashBooksTable";
import DashboardHeader from "../../components/DashboardHeader";
import Spinner from "../../components/Spinner";
import { getAllBooks } from "../../utils/apiRequest";

const Books = () => {
  const booksQuery = useQuery({
    queryKey: ["books"],
    queryFn: () => getAllBooks(),
  });

  return (
    <>
      <DashboardHeader title="Books" desc="Manage library book with ease" />
      <section className="h-[calc(100vh-80px)] overflow-y-auto p-10">
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {booksQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">Books Loading...</p>
            </div>
          )}
          {booksQuery.isError && <p>Error: {booksQuery.error.message}</p>}
          {!booksQuery.isLoading && !booksQuery.isError && (
            <DashBooksTable data={booksQuery.data} />
          )}
        </div>
      </section>
    </>
  );
};

export default Books;
