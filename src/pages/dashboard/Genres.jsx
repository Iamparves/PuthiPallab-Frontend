import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdDeleteOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import DashGenreForm from "../../components/DashGenreForm";
import DashboardHeader from "../../components/DashboardHeader";
import Spinner from "../../components/Spinner";
import { deleteGenre, getAllGenres } from "../../utils/apiRequest";

const Genres = () => {
  const [updateId, setUpdateId] = useState("");
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
      <DashboardHeader title="Genres" desc="Effortlessly organize genres" />
      <section className="h-[calc(100vh-80px)] overflow-y-auto p-5 lg:p-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-6">
          <div className="rounded-xl border border-gray-200/70 bg-white p-8">
            <h2 className="mb-2 border-b border-gray-100 pb-1 text-xl font-semibold text-[#2d2d2d]">
              All Genres
            </h2>
            <div className="space-y-2">
              {genresQuery.isLoading && (
                <div className="flex flex-col items-center justify-center py-20">
                  <Spinner color="fill-gray-400" />
                  <p className="mt-2 font-medium text-gray-500">
                    Genres Loading...
                  </p>
                </div>
              )}
              {genresQuery.data &&
                genresQuery.data.map((genre) => (
                  <div
                    key={genre._id}
                    className="grid grid-cols-[80px_1fr_auto_auto] items-center gap-5 border-b border-gray-100 pb-2"
                  >
                    <div className="aspect-square w-full">
                      <img
                        className="h-full w-full rounded-[4px] object-cover"
                        src={genre.imageUrl}
                        alt=""
                      />
                    </div>
                    <h3 key={genre._id}>{genre.genreName}</h3>
                    <button
                      onClick={() => {
                        setUpdateId(genre._id);
                      }}
                      className="flex items-center gap-1 font-medium text-[#50C878]"
                    >
                      <TbEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(genre._id, genre.genreName)}
                      className="flex items-center gap-1 font-medium text-[#FF5556]"
                    >
                      <MdDeleteOutline /> Delete
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className="row-start-1 rounded-xl border border-gray-200/70 bg-white p-8">
            <DashGenreForm updateId={updateId} setUpdateId={setUpdateId} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Genres;
