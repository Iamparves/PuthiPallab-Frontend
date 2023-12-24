import { useMutation, useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import React from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { deleteReview } from "../utils/apiRequest";

const ReviewCard = ({ review, owner = false, bookId, setUpdateReviewForm }) => {
  const queryClient = useQueryClient();
  const { ratings, review: reviewText, member, createdAt } = review;

  const renderRating = () => {
    const ratingStars = new Array(5).fill("").map((_, index) => {
      const starClass = index < ratings ? "text-[#ffc363]" : "text-gray-300";

      return <FaStar key={index} className={starClass} />;
    });

    return ratingStars;
  };

  const deleteMutation = useMutation({
    mutationFn: deleteReview,
  });

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this?");
    if (!confirm) return;

    const toastId = toast.loading("Deleting Review...");
    deleteMutation.mutate(review._id, {
      onSuccess: (data) => {
        if (data.status === "success") {
          toast.success("Review deleted successfully", { id: toastId });
          queryClient.invalidateQueries(["book", { bookId }]);
        } else {
          toast.error("Something went wrong! Please try again", {
            id: toastId,
          });
        }
      },
      onError: (err) => {
        toast.error(err.message, { id: toastId });
      },
    });
  };

  return (
    <div
      className={`rounded-md border p-5 ${
        owner ? "border-primary/50" : "border-[#ebebeb]"
      }`}
    >
      <div className="mb-4 flex items-center gap-3 sm:mb-5">
        <div className="flex-shrink-0">
          <img
            className="aspect-square w-12 rounded-full object-cover"
            src={
              member.photo ||
              "https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png"
            }
            alt={member.name}
          />
        </div>
        <h4 className="text-sm font-semibold text-[#151515] sm:text-base">
          {member.name}
        </h4>
      </div>
      <div className="mb-2 flex items-center gap-4 sm:mb-3">
        <div className="flex gap-0.5">{renderRating()}</div>
        <p className="text-xs text-gray-400">{moment(createdAt).fromNow()}</p>
      </div>
      <p className="text-sm text-[#151515] sm:text-[15px] sm:leading-normal">
        {reviewText}
      </p>
      {owner && (
        <div className="mt-3 flex items-center gap-3 text-sm text-gray-400">
          <button
            onClick={() => setUpdateReviewForm(review)}
            className="duration-300 hover:text-primary"
          >
            Edit
          </button>
          <span className="block aspect-square w-0.5 rounded-full bg-gray-400"></span>
          <button
            onClick={handleDelete}
            className="duration-300 hover:text-red-400"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
