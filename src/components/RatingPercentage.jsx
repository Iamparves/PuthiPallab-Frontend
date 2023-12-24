import React from "react";

const RatingPercentage = ({ title, rating }) => {
  return (
    <div className="grid grid-cols-[60px_1fr_50px] items-center gap-2 sm:grid-cols-[50px_1fr_30px] lg:grid-cols-[60px_1fr_50px]">
      <p
        className={`text-xs ${
          rating === "0%" ? "text-gray-500" : "text-primary"
        }`}
      >
        {title}
      </p>
      <div className="h-5 w-full overflow-hidden rounded-sm bg-gray-200 shadow-inner">
        <div
          className={`h-full bg-gradient-to-b from-primary to-[#ff6e1a]`}
          style={{ width: rating }}
        ></div>
      </div>
      <p
        className={`text-right text-xs ${
          rating === "0%" ? "text-gray-500" : "text-primary"
        }`}
      >
        {rating}
      </p>
    </div>
  );
};

export default RatingPercentage;
