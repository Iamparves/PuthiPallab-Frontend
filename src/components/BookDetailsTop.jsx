import React from "react";

const BookDetailsTop = ({ book }) => {
  const { coverImg, title, author, summary, availableCopies, waitlist } = book;

  return (
    <div className="grid grid-cols-1 gap-10">
      <div className="">
        <img
          src={coverImg}
          alt={title}
          className="mx-auto aspect-[1/1.4] w-full max-w-[280px] object-cover shadow-xl shadow-black/10"
        />
      </div>
      <div className="mx-auto max-w-md text-center">
        <h2 className="mb-3 text-2xl font-bold text-[#151515]">{title}</h2>
        <p className="mb-3 text-[#999]">
          by <span className="text-[15px] text-primary">{author}</span>
        </p>
        <p className="text-[15px] text-[#1d1d1d]">{summary}</p>
        <hr className="mb-5 mt-5 border-[#ebebeb]" />
        <p
          className={`text-sm ${
            availableCopies > 0 ? "text-[#EAA451]" : "text-red-400"
          }`}
        >
          {availableCopies > 0
            ? `${availableCopies} Available Copies`
            : "Not available"}
        </p>
        {availableCopies === 0 && (
          <div className="mt-3">
            <p className="mb-3 text-sm text-gray-400">
              {waitlist.length} people in waitlist
            </p>
            <button className="inline-block border-2 border-primary bg-primary px-4 py-2.5 text-sm font-medium text-white duration-300 hover:bg-transparent hover:text-primary">
              Join Waitlist
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetailsTop;
