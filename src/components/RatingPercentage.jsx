import React from "react";

const RatingPercentage = ({ title, rating }) => {
  return (
    <div className="grid grid-cols-[50px_1fr_35px] items-center gap-2">
      <p
        className={`text-xs ${
          rating === "0%" ? "text-gray-500" : "text-[#ffbb4d]"
        }`}
      >
        {title}
      </p>
      <div className="h-5 w-full overflow-hidden rounded-sm bg-gray-200 shadow-inner">
        <div
          className={`h-full bg-gradient-to-b from-[#fec66b] to-[#ffbb4d]`}
          style={{ width: rating }}
        ></div>
      </div>
      <p
        className={`text-right text-xs ${
          rating === "0%" ? "text-gray-500" : "text-[#ffbb4d]"
        }`}
      >
        {rating}
      </p>
    </div>
  );
};

export default RatingPercentage;
