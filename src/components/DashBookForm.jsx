import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TbBookUpload } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import { getAllGenres } from "../utils/apiRequest";
import BookImageUpload from "./BookImageUpload";

const DashBookForm = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [coverImg, setCoverImg] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const genresQuery = useQuery({
    queryKey: ["genres"],
    queryFn: () => getAllGenres(),
  });

  const onBookSubmit = (data) => {};

  return (
    <div className=" w-[calc(100vw-40px)] max-w-3xl p-8">
      <form onSubmit={handleSubmit(onBookSubmit)}>
        <div className="grid grid-cols-[auto_1fr] items-center gap-6">
          <BookImageUpload
            setCoverImg={setCoverImg}
            setIsUploading={setIsUploading}
            isUpdate={!!bookId}
          />
          <div className="space-y-5">
            <div>
              <label
                htmlFor="title"
                className="mb-1 inline-block text-xs font-medium text-gray-400"
              >
                Title
              </label>
              <input
                {...register("title")}
                type="text"
                id="title"
                name="title"
                placeholder="Enter book title"
                className="block w-full rounded-md border p-3 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="author"
                className="mb-1 inline-block text-xs font-medium text-gray-400"
              >
                Author
              </label>
              <input
                {...register("author")}
                type="text"
                id="author"
                name="author"
                placeholder="Enter author name"
                className="block w-full rounded-md border p-3 focus:outline-none"
                required
              />
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
                className="block w-full rounded-md border p-3 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
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
              className="block w-full rounded-md border p-3 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="language"
              className="mb-1 inline-block text-xs font-medium text-gray-400"
            >
              language
            </label>
            <select
              {...register("language")}
              id="language"
              name="language"
              className="block w-full cursor-pointer rounded-md border p-3 focus:outline-none"
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
              Page Count
            </label>
            <input
              {...register("pageCount")}
              type="Number"
              id="pageCount"
              name="pageCount"
              placeholder="Enter book page count"
              className="block w-full rounded-md border p-3 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="totalCopies"
              className="mb-1 inline-block text-xs font-medium text-gray-400"
            >
              No. of copies
            </label>
            <input
              {...register("totalCopies")}
              type="Number"
              id="totalCopies"
              name="totalCopies"
              placeholder="Enter number copies"
              className="block w-full rounded-md border p-3 focus:outline-none"
              required
            />
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
              className="block h-32 w-full resize-none rounded-md border p-3 focus:outline-none"
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="mt-6 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg bg-primary p-4 text-center font-medium text-white duration-300"
          >
            <span className="text-xl">
              <TbBookUpload />
            </span>{" "}
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default DashBookForm;
