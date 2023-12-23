import React from "react";
import BookDetailsWaitlist from "./BookDetailsWaitlist";

const BookDetailsTop = ({ book }) => {
  const { coverImg, title, author, summary, availableCopies, waitlist } = book;

  return (
    <div className="grid grid-cols-1 items-start gap-10 bg-white px-5 py-10 shadow-sm sm:mx-auto sm:grid-cols-[auto_auto] sm:gap-5 md:gap-10 md:px-10 lg:items-center lg:gap-16 xl:gap-20 xl:p-16">
      <div className="mx-auto w-[280px] border border-[#ebebeb] p-2 sm:w-[220px] md:w-[calc(25vw+50px)] lg:w-[350px] lg:p-10 xl:w-[400px]">
        <img
          src={coverImg}
          alt={title}
          className="aspect-[1/1.4] w-full object-cover shadow-xl shadow-black/10 sm:max-w-none"
        />
      </div>
      <div className="text-center sm:text-left">
        <h2 className="mb-3 text-2xl font-bold text-[#151515] md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mb-3 text-[#999]">
          by{" "}
          <span className="text-[15px] text-primary md:text-base">
            {author}
          </span>
        </p>
        <p className="text-[15px] text-[#1d1d1d] md:text-base">{summary}</p>
        <hr className="mb-5 mt-5 border-[#ebebeb]" />
        <p className="text-sm text-gray-400 md:text-base">
          Availability:{" "}
          <span
            className={` ${
              availableCopies > 0 ? "text-[#EAA451]" : "text-red-400"
            }`}
          >
            {availableCopies > 0
              ? `${availableCopies} ${
                  availableCopies === 1 ? "copy" : "copies"
                } available`
              : "Not available"}
          </span>
        </p>

        {availableCopies === 0 && (
          <BookDetailsWaitlist waitlist={waitlist} bookId={book._id} />
        )}
      </div>
    </div>
  );
};

export default BookDetailsTop;
