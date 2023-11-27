import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { Outlet } from "react-router-dom";
import DashGenresTable from "../../components/DashGenresTable";
import DashboardHeader from "../../components/DashboardHeader";
import Spinner from "../../components/Spinner";
import { deleteGenre, getAllGenres } from "../../utils/apiRequest";

const Genres = () => {
  const queryClient = useQueryClient();

  const genresQuery = useQuery({
    queryKey: ["genres"],
    queryFn: () => getAllGenres(),
  });

  const mutation = useMutation({
    mutationFn: deleteGenre,
    onSuccess: (data) => {
      if (data.status === "success") {
        queryClient.invalidateQueries(["genres"]);
        return toast.success("Genre deleted successfully");
      }
      toast.error(data.message);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleDelete = (genreId, genreName) => {
    const confirm = window.confirm(
      `Are you sure you want to delete genre: ${genreName}?`,
    );

    if (confirm) mutation.mutate(genreId);
  };

  return (
    <>
      <Outlet />
      <DashboardHeader title="Genres" desc="Effortlessly organize genres" />
      <section className="h-[calc(100vh-80px)] overflow-y-auto p-3 sm:p-5 xl:p-10">
        <div className="mx-auto rounded-xl border border-gray-200/70 bg-white">
          {genresQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                Genres Loading...
              </p>
            </div>
          )}
          {genresQuery.isError && <p>Error: {genresQuery.error.message}</p>}
          {!genresQuery.isLoading && !genresQuery.isError && (
            <DashGenresTable data={genresQuery.data} onDelete={handleDelete} />
          )}
        </div>
      </section>
    </>
  );
};

export default Genres;
