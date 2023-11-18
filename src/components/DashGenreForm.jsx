import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  addGenre,
  getGenre,
  updateGenre,
  uploadImage,
} from "../utils/apiRequest";
import Spinner from "./Spinner";

const DashGenreForm = ({ updateId, setUpdateId }) => {
  const queryClient = useQueryClient();

  const [genreImg, setGenreImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const genreQuery = useQuery({
    queryKey: ["genres", updateId],
    queryFn: () => getGenre(updateId),
  });

  const mutation = useMutation({
    mutationFn: addGenre,
    onSuccess: () => {
      queryClient.invalidateQueries(["genres"]);
      toast.success("Genre added successfully!");
      reset({ genreName: "", imageUrl: "" });
      setGenreImage("");
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateGenre,
    onSuccess: () => {
      queryClient.invalidateQueries(["genres"]);
      toast.success("Genre updated successfully!");

      setUpdateId("");
      reset({ genreName: "", imageUrl: "" });
      setGenreImage("");
    },
  });

  const handleImageUpload = async (e) => {
    const toastId = toast.loading("Image is uploading...");
    setIsUploading(true);

    const result = await uploadImage(e.target.files[0]);
    setIsUploading(false);

    if (result?.success) {
      setGenreImage(result.data.display_url);
      return toast.success("Image upload successful!", { id: toastId });
    }

    toast.error("Image upload failed! Please try again", { id: toastId });
  };

  const genreSubmit = ({ genreName }) => {
    const data = { genreName, imageUrl: genreImg };

    if (!updateId) {
      mutation.mutate(data);
    } else {
      updateMutation.mutate({ genreId: updateId, data });
    }
  };

  useEffect(() => {
    if (genreQuery.data?.length === 1) {
      const { genreName, imageUrl } = genreQuery.data[0];

      reset({
        genreName,
        imageUrl: "",
      });
      setGenreImage(imageUrl);
    }
  }, [genreQuery.data]);

  return (
    <>
      <div className="mb-2 flex items-center justify-between border-b border-gray-100 pb-2">
        <h2 className="text-xl font-semibold text-[#2d2d2d]">
          {updateId ? "Update existing" : "Add New"} Genre
        </h2>
        {updateId && (
          <button
            onClick={() => {
              setUpdateId("");
              reset({ genreName: "", imageUrl: "" });
              setGenreImage("");
            }}
            className="rounded-md bg-[#FF5556] px-3 py-1.5 text-xs font-medium text-white"
          >
            Cancel
          </button>
        )}
      </div>
      <form onSubmit={handleSubmit(genreSubmit)}>
        <div className="mb-5">
          <label
            htmlFor="genreName"
            className="mb-1 inline-block text-xs font-medium text-gray-400"
          >
            Genre Name
          </label>
          <input
            {...register("genreName")}
            type="text"
            id="genreName"
            name="genreName"
            placeholder="Enter genre name"
            className="block w-full rounded-md border p-3 focus:outline-none"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="imageUrl"
            className="mb-1 inline-block text-xs font-medium text-gray-400"
          >
            Genre Image{" "}
            {updateId ? (
              <span className="text-red-400">
                (Don't select anything if you don't want to change the image)
              </span>
            ) : (
              ""
            )}
          </label>
          <input
            {...register("imageUrl")}
            type="file"
            id="imageUrl"
            name="imageUrl"
            accept="image/*"
            className="block w-full cursor-pointer rounded-md bg-gray-100 p-3"
            required={!updateId}
            onChange={handleImageUpload}
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F59115] p-3 font-semibold text-white duration-300 disabled:opacity-70"
          disabled={isUploading}
        >
          {isUploading || mutation.isPending || updateMutation.isPending ? (
            <Spinner width="w-5" height="h-5" color="fill-orange-400" />
          ) : (
            ""
          )}{" "}
          {updateId ? "Update Genre" : "Add Genre"}
        </button>
      </form>
    </>
  );
};

export default DashGenreForm;
