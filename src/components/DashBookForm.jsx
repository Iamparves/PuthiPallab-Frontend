import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaStarOfLife } from "react-icons/fa6";
import { TbBookUpload } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import {
  addBook,
  getAllBooks,
  getAllGenres,
  updateBook,
} from "../utils/apiRequest";
import BookImageUpload from "./BookImageUpload";
import Spinner from "./Spinner";

const DashBookForm = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [coverImg, setCoverImg] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const genresQuery = useQuery({
    queryKey: ["genres"],
    queryFn: () => getAllGenres(),
  });

  const booksQuery = useQuery({
    queryKey: ["books", bookId],
    queryFn: () => getAllBooks(`?_id=${bookId}`),
    enabled: !!bookId,
  });

  const mutation = useMutation({
    mutationFn: addBook,
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
      toast.success("Book added successfully!");

      navigate(-1);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateBook,
    onSuccess: (data) => {
      if (data.status === "success") {
        queryClient.invalidateQueries(["books", bookId]);
        toast.success("Book updated successfully!");

        navigate(-1);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onBookSubmit = (data) => {
    if (!coverImg && !bookId)
      return toast.error("Please upload book cover image");

    const bookData = { ...data };

    if (!bookId) {
      bookData.coverImg = coverImg;
      return mutation.mutate(bookData);
    } else {
      if (coverImg) bookData.coverImg = coverImg;
      return updateMutation.mutate({ bookId, data: bookData });
    }
  };

  useEffect(() => {
    if (booksQuery.data?.length === 1) {
      const {
        coverImg: bookCoverImg,
        title,
        author,
        publisher,
        publicationDate,
        bookLanguage,
        pageCount,
        totalCopies,
        genres,
        summary,
      } = booksQuery.data[0];

      const genresId = genres.map((genre) => genre._id);

      reset({
        title,
        author,
        publisher,
        publicationDate: publicationDate?.split("T")[0],
        bookLanguage,
        pageCount,
        totalCopies,
        genres: genresId,
        summary,
      });

      setCoverImg(bookCoverImg);
    }
  }, [booksQuery.data]);

  return (
    <div className="w-[calc(100vw-20px)] max-w-xl p-3 sm:w-[calc(100vw-40px)] sm:p-8 md:max-w-3xl">
      <form onSubmit={handleSubmit(onBookSubmit)}>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[auto_1fr]">
          <BookImageUpload
            coverImg={coverImg}
            setCoverImg={setCoverImg}
            setIsUploading={setIsUploading}
            isUpdate={!!bookId}
          />
          <div className="space-y-5">
            <div>
              <label
                htmlFor="title"
                className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-gray-400"
              >
                Title{" "}
                <span className="text-[10px] text-red-400">
                  <FaStarOfLife />
                </span>
              </label>
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                id="title"
                name="title"
                placeholder="Enter book title"
                className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base"
              />
              {errors.title && (
                <span className="mt-1 block text-xs text-red-400">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="author"
                className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-gray-400"
              >
                Author
                <span className="text-[10px] text-red-400">
                  <FaStarOfLife />
                </span>
              </label>
              <input
                {...register("author", { required: "Author name is required" })}
                type="text"
                id="author"
                name="author"
                placeholder="Enter author name"
                className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base"
              />
              {errors.author && (
                <span className="mt-1 block text-xs text-red-400">
                  {errors.author.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="publisher"
                className="mb-1 inline-block text-xs font-medium text-gray-400"
              >
                Publisher
              </label>
              <input
                {...register("publisher")}
                type="text"
                id="publisher"
                name="publisher"
                placeholder="Enter publisher name"
                className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 grid-cols-2 gap-x-6 gap-y-5 space-y-5 md:grid md:space-y-0">
          <div>
            <label
              htmlFor="publicationDate"
              className="mb-1 inline-block text-xs font-medium text-gray-400"
            >
              Publication Date
            </label>
            <input
              {...register("publicationDate")}
              type="date"
              id="publicationDate"
              name="publicationDate"
              placeholder="Enter publisher name"
              className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base"
            />
          </div>
          <div>
            <label
              htmlFor="bookLanguage"
              className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-gray-400"
            >
              Language
              <span className="text-[10px] text-red-400">
                <FaStarOfLife />
              </span>
            </label>
            <select
              {...register("bookLanguage")}
              id="bookLanguage"
              name="bookLanguage"
              className="block w-full cursor-pointer rounded-md border p-3 text-sm focus:outline-none sm:text-base"
              defaultValue={"বাংলা"}
              required
            >
              <option value="বাংলা">বাংলা</option>
              <option value="English">English</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="pageCount"
              className="mb-1 inline-block text-xs font-medium text-gray-400"
            >
              Total Pages
            </label>
            <input
              {...register("pageCount")}
              type="Number"
              id="pageCount"
              name="pageCount"
              placeholder="Enter book page count"
              className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base"
            />
          </div>
          <div>
            <label
              htmlFor="totalCopies"
              className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-gray-400"
            >
              No. of copies
              <span className="text-[10px] text-red-400">
                <FaStarOfLife />
              </span>
            </label>
            <input
              {...register("totalCopies", {
                required: "Number of copies required",
              })}
              type="Number"
              id="totalCopies"
              name="totalCopies"
              placeholder="Enter number copies"
              className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base"
            />
            {errors.totalCopies && (
              <span className="mt-1 block text-xs text-red-400">
                {errors.totalCopies.message}
              </span>
            )}
          </div>
          <div className="col-span-2">
            <p
              htmlFor="genres"
              className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-gray-400"
            >
              Genres
              <span className="text-[10px] text-red-400">
                <FaStarOfLife />
              </span>
            </p>

            <div className="flex flex-wrap gap-2">
              {!genresQuery.isLoading &&
                genresQuery.data.map((genre) => (
                  <span
                    className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-200/80 bg-gray-100/50 px-2 py-1.5 text-[11px] font-medium text-[#333] sm:px-2.5 sm:text-[12px] [&:has(input:checked)]:border-primary/30 [&:has(input:checked)]:bg-[#FEF2E2] [&:has(input:checked)]:text-primary"
                    key={genre._id}
                  >
                    <input
                      type="checkbox"
                      {...register("genres", {
                        required: "Must select at least one genre",
                      })}
                      id={genre.genreName}
                      name="genres"
                      value={genre._id}
                      className="hidden appearance-none"
                    />
                    <label className="cursor-pointer" htmlFor={genre.genreName}>
                      {genre.genreName}
                    </label>
                  </span>
                ))}
            </div>
            {errors.genres && (
              <span className="mt-2 block text-xs text-red-400">
                {errors.genres.message}
              </span>
            )}
          </div>
          <div className="col-span-2">
            <label
              htmlFor="summary"
              className="mb-1 inline-block text-xs font-medium text-gray-400"
            >
              Summary
            </label>
            <textarea
              {...register("summary")}
              type="text"
              id="summary"
              name="summary"
              placeholder="Enter book summary"
              className="block h-32 w-full resize-none rounded-md border p-3 text-sm focus:outline-none sm:text-base"
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="mt-6 inline-flex w-full max-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-primary bg-primary p-3.5 text-center text-sm font-medium text-white duration-300 hover:bg-white hover:text-primary disabled:pointer-events-none disabled:opacity-60 sm:max-w-[260px] sm:text-base"
            disabled={isUploading}
          >
            {isUploading ? (
              <Spinner width="w-5" height="h-5" />
            ) : (
              <span className="text-xl">
                <TbBookUpload />
              </span>
            )}
            {bookId ? "Update Book" : "Add Book"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DashBookForm;
