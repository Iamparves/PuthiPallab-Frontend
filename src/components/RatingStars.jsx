import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ index, rating, setRating }) => {
  return (
    <button
      className={
        rating > 0
          ? `${index < rating ? "text-[#FFC363]" : "text-gray-300"}`
          : "[&:hover~*]:text-gray-300" + " duration-300"
      }
      onClick={() => setRating(index + 1)}
      type="button"
    >
      <FaStar />
    </button>
  );
};

const RatingStars = ({ rating, setRating }) => {
  return (
    <div className="mb-5 flex items-center gap-1 text-xl text-gray-300 [&:has(:hover)]:text-[#FFC363]">
      {new Array(5).fill("").map((_, index) => (
        <Star key={index} index={index} rating={rating} setRating={setRating} />
      ))}
    </div>
  );
};

export default RatingStars;
