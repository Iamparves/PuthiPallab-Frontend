import React from "react";
import { useStore } from "../store";
import RatingPercentage from "./RatingPercentage";

const BookDetailsReviews = ({ book }) => {
  const user = useStore((state) => state.user);
  const reviews = book?.reviews || [];

  const existingReview = reviews?.find(
    (review) => review.member._id === user._id,
  );

  const averageRating =
    reviews.length === 0
      ? 0
      : reviews.reduce((acc, review) => {
          return acc + review.ratings;
        }, 0) / reviews.length;

  return (
    <div className="mt-3 bg-white px-5 py-7 shadow-sm md:px-10 md:py-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#151515] sm:text-xl md:text-2xl">
          Reviews
        </h2>
        {user.role === "member" && !existingReview && (
          <button className="text-sm font-medium text-primary hover:underline">
            Add Review
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-5">
        <div className="flex flex-col justify-center rounded-sm border border-[#ebebeb] p-5 text-center">
          <h3 className="mb-3 text-4xl font-bold text-[#333] lg:text-5xl">
            {averageRating.toFixed(1)}
          </h3>
          <p className="text-gray-500">Based on {reviews.length} reviews</p>
        </div>
        <div className="rounded-sm border border-[#ebebeb] p-5">
          <div className="mx-auto grid max-w-sm grid-rows-[repeat(5,20px)] gap-1">
            <RatingPercentage title="5 Star" rating="60%" />
            <RatingPercentage title="4 Star" rating="20%" />
            <RatingPercentage title="3 Star" rating="5%" />
            <RatingPercentage title="2 Star" rating="0%" />
            <RatingPercentage title="1 Star" rating="15%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsReviews;
