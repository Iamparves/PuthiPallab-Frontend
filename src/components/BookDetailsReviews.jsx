import React from "react";
import { useStore } from "../store";
import RatingStats from "./RatingStats";

const BookDetailsReviews = ({ book }) => {
  const user = useStore((state) => state.user);
  const reviews = book?.reviews || [];

  const existingReview = reviews?.find(
    (review) => review.member._id === user._id,
  );

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
      <RatingStats reviews={reviews} />
    </div>
  );
};

export default BookDetailsReviews;
