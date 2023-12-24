import React from "react";
import RatingPercentage from "./RatingPercentage";

const RatingStats = ({ reviews }) => {
  const averageRating =
    reviews.length === 0
      ? 0
      : reviews.reduce((acc, review) => {
          return acc + review.ratings;
        }, 0) / reviews.length;

  const getRatingPercentage = (rating) => {
    const ratingCount = reviews.filter(
      (review) => review.ratings === rating,
    ).length;
    const percentage = (ratingCount / reviews.length) * 100;
    return percentage.toFixed(0) + "%";
  };

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-5">
      <div className="flex flex-col justify-center rounded-sm border border-[#ebebeb] p-5 text-center">
        <h3 className="mb-3 text-5xl font-bold text-[#333] lg:text-[52px]">
          {averageRating.toFixed(1)}
        </h3>
        <p className="text-gray-500">Based on {reviews.length} reviews</p>
      </div>
      <div className="rounded-sm border border-[#ebebeb] p-5">
        <div className="mx-auto grid max-w-sm grid-rows-[repeat(5,20px)] gap-1">
          <RatingPercentage title="5 Star" rating={getRatingPercentage(5)} />
          <RatingPercentage title="4 Star" rating={getRatingPercentage(4)} />
          <RatingPercentage title="3 Star" rating={getRatingPercentage(3)} />
          <RatingPercentage title="2 Star" rating={getRatingPercentage(2)} />
          <RatingPercentage title="1 Star" rating={getRatingPercentage(1)} />
        </div>
      </div>
    </div>
  );
};

export default RatingStats;