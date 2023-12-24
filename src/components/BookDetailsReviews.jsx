import React from "react";
import { useStore } from "../store";
import RatingStats from "./RatingStats";
import ReviewCard from "./ReviewCard";

const BookDetailsReviews = ({ book }) => {
  const user = useStore((state) => state.user);
  const reviews = book?.reviews || [];

  let existingReview =
    reviews.length === 0
      ? null
      : reviews?.find((review) => review.member._id === user._id);

  return (
    <div className="mt-3 bg-white px-5 py-7 shadow-sm md:px-10 md:py-10">
      <div className="lg:mx-auto lg:max-w-4xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-[#151515] sm:text-xl md:text-2xl">
            Reviews
          </h2>
          {user.role === "member" && !existingReview && (
            <button className="border-2 border-primary bg-primary px-2 py-1 text-xs font-medium text-white duration-300 hover:bg-transparent hover:text-primary sm:px-3 sm:py-2 sm:text-sm">
              Add Review
            </button>
          )}
        </div>
        <RatingStats reviews={reviews} />

        {!!existingReview && (
          <div className="mt-2 md:mt-3">
            <ReviewCard owner={true} review={existingReview} />
          </div>
        )}

        <div className="mt-2 grid grid-cols-1 gap-2 md:mt-3 md:gap-3">
          {reviews.map((review) => {
            if (review.member._id === user._id) return null;
            else return <ReviewCard key={review._id} review={review} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BookDetailsReviews;
