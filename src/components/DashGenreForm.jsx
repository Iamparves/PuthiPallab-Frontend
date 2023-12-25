import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { TbCategoryPlus } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import slugify from "slugify";
import { addGenre, getAllGenres, updateGenre } from "../utils/apiRequest";
import GenreImageUpload from "./GenreImageUpload";
import Spinner from "./Spinner";

const DashGenreForm = () => {
  const { updateId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [genreImg, setGenreImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const genreQuery = useQuery({
    queryKey: ["genres", updateId],
    queryFn: () => getAllGenres(`?_id=${updateId}`),
    enabled: !!updateId,
  });

  const mutation = useMutation({
    mutationFn: addGenre,
    onSuccess: () => {
      queryClient.invalidateQueries(["genres"]);
      toast.success("Genre added successfully!");

      navigate(-1);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateGenre,
    onSuccess: (data) => {
      if (data.status === "success") {
        queryClient.invalidateQueries(["genres"]);
        toast.success("Genre updated successfully!");

        navigate(-1);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onGenreSubmit = ({ genreName, slug }) => {
    if (!genreImg && !updateId) {
      return toast.error("Please upload genre image");
    }

    const genreData = { genreName, slug };

    if (!updateId) {
      genreData.imageUrl = genreImg;
      mutation.mutate(genreData);
    } else {
      if (genreImg) genreData.imageUrl = genreImg;
      updateMutation.mutate({ genreId: updateId, genreData });
    }
  };

  useEffect(() => {
    if (genreQuery.data?.length === 1) {
      const { genreName, imageUrl, slug } = genreQuery.data[0];

      reset({
        genreName,
        slug,
      });

      setGenreImage(imageUrl);
    }
  }, [genreQuery.data]);

  return (
    <div className="w-[calc(100vw-20px)] max-w-lg p-3 sm:p-8">
      <form className="space-y-5" onSubmit={handleSubmit(onGenreSubmit)}>
        <GenreImageUpload
          genreImg={genreImg}
          setGenreImage={setGenreImage}
          setIsUploading={setIsUploading}
          isUpdate={!!updateId}
        />
        <div>
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
            onChange={(e) =>
              reset({ slug: slugify(e.target.value, { lower: true }) })
            }
          />
        </div>
        <div>
          <label
            htmlFor="slug"
            className="mb-1 inline-block text-xs font-medium text-gray-400"
          >
            Slug
          </label>
          <input
            {...register("slug")}
            type="text"
            id="slug"
            name="slug"
            placeholder="Enter genre slug"
            className="block w-full rounded-md border p-3 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="mx-auto flex w-full max-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-primary bg-primary p-3 font-semibold text-white duration-300 hover:bg-white hover:text-primary disabled:pointer-events-none disabled:opacity-70"
          disabled={isUploading}
        >
          {isUploading ? (
            <Spinner width="w-5" height="h-5" />
          ) : (
            <span className="text-xl">
              <TbCategoryPlus />
            </span>
          )}
          {updateId ? "Update Genre" : "Add Genre"}
        </button>
      </form>
    </div>
  );
};

export default DashGenreForm;
