import React, { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import RatingStars from "./RatingStars";

const ReviewForm = ({ bookId, updateReview, setForm, setUpdateReview }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  return (
    <div className="pb-4 pt-6 md:pb-5 md:pt-8">
      <h2 className="mb-3 text-xl font-semibold text-[#151515] sm:text-2xl">
        {!updateReview ? "Add" : "Update"} Review
      </h2>
      <form className="">
        <p className="mb-1 flex items-center gap-1.5 text-[15px] font-semibold">
          Your Rating{" "}
          <span className="text-[8px] leading-none text-red-400">
            <FaStarOfLife />
          </span>
        </p>
        <RatingStars rating={rating} setRating={setRating} />
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
        ></textarea>
        <div className="mt-3 flex items-center gap-2">
          <button
            type="submit"
            className="inline-block border-2 border-primary bg-primary px-3 py-2.5 text-xs font-medium uppercase text-white duration-300 hover:bg-transparent hover:text-primary disabled:pointer-events-none disabled:opacity-50 sm:py-3 sm:text-sm"
            disabled={rating === 0 || review.length === 0}
          >
            Submit Review
          </button>
          <button
            type="submit"
            className="inline-block border-2 border-primary bg-transparent px-3 py-2.5 text-xs font-medium uppercase text-primary duration-300 hover:bg-primary hover:text-white sm:py-3 sm:text-sm"
            onClick={() => {
              setForm(false);
              setUpdateReview(null);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
