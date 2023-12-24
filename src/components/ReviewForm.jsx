import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaStarOfLife } from "react-icons/fa";
import { addReview, updateReviewFn } from "../utils/apiRequest";
import RatingStars from "./RatingStars";

const ReviewForm = ({ bookId, updateReview, setForm, setUpdateReview }) => {
  const [ratings, setRatings] = useState(
    updateReview ? updateReview.ratings : 0,
  );
  const [review, setReview] = useState(updateReview ? updateReview.review : "");

  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: addReview,
  });

  const updateMutation = useMutation({
    mutationFn: updateReviewFn,
  });

  const onReviewSubmit = (e) => {
    e.preventDefault();

    const toastId = toast.loading(
      `Submitting ${updateReview ? "update" : ""} review...`,
    );
    const reviewData = { book: bookId, ratings, review };

    if (!updateReview) {
      addMutation.mutate(reviewData, {
        onSuccess: (data) => {
          if (data.status === "success") {
            setForm(false);
            queryClient.invalidateQueries(["book", { bookId }]);
            return toast.success("Review added successfully!", { id: toastId });
          }

          return toast.error(data.message, { id: toastId });
        },
        onError: (error) => {
          return toast.error(error.message, { id: toastId });
        },
      });
    } else {
      updateMutation.mutate(
        { reviewId: updateReview._id, data: reviewData },
        {
          onSuccess: (data) => {
            if (data.status === "success") {
              setForm(false);
              setUpdateReview(null);
              queryClient.invalidateQueries(["book", { bookId }]);
              return toast.success("Review updated successfully!", {
                id: toastId,
              });
            }

            return toast.error(data.message, { id: toastId });
          },
          onError: (error) => {
            return toast.error(error.message, { id: toastId });
          },
        },
      );
    }
  };

  return (
    <div className="pb-4 pt-6 md:pb-5 md:pt-8">
      <h2 className="mb-3 text-xl font-semibold text-[#151515] sm:text-2xl">
        {!updateReview ? "Add" : "Update"} Review
      </h2>
      <form className="" onSubmit={onReviewSubmit}>
        <p className="mb-1 flex items-center gap-1.5 text-[15px] font-semibold">
          Your Rating{" "}
          <span className="text-[8px] leading-none text-red-400">
            <FaStarOfLife />
          </span>
        </p>
        <RatingStars rating={ratings} setRating={setRatings} />
        <p className="mb-1 flex items-center gap-1.5 text-[15px] font-semibold">
          Your Review{" "}
          <span className="text-[8px] leading-none text-red-400">
            <FaStarOfLife />
          </span>
        </p>
        <textarea
          name="review"
          placeholder="Write a feedback..."
          required
          className="h-40 w-full resize-none border border-[#e1e1e1] p-4 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none sm:px-6 sm:py-5"
          onChange={(e) => setReview(e.target.value)}
          defaultValue={updateReview ? updateReview.review : ""}
        ></textarea>
        <div className="mt-3 flex items-center gap-2">
          <button
            type="submit"
            className="inline-block border-2 border-primary bg-primary px-3 py-2.5 text-xs font-medium uppercase text-white duration-300 hover:bg-transparent hover:text-primary disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm"
            disabled={
              ratings === 0 ||
              review.length === 0 ||
              addMutation.isPending ||
              updateMutation.isPending
            }
          >
            Submit Review
          </button>
          <button
            type="submit"
            className="inline-block border-2 border-primary bg-transparent px-3 py-2.5 text-xs font-medium uppercase text-primary duration-300 hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm"
            onClick={() => {
              setForm(false);
              setUpdateReview(null);
            }}
            disabled={addMutation.isPending || updateMutation.isPending}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
