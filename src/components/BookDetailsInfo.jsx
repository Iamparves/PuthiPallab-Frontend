import moment from "moment";
import React from "react";
import BookInfoItem from "./BookInfoItem";

const getLocalDate = (date) => {
  if (!date) return "-";
  return moment.utc(date).local().format("LL");
};

const BookDetailsInfo = ({ book }) => {
  const {
    title,
    author,
    publisher,
    genres,
    publicationDate,
    bookLanguage,
    pageCount,
    totalCopies,
    borrowCount,
  } = book;

  const genresList = genres.map((genre) => genre.genreName).join(", ");

  return (
    <div className="mt-3 bg-white px-5 py-7 shadow-sm md:px-10 md:py-10">
      <h2 className="text-lg font-semibold text-[#151515] sm:text-xl md:text-2xl">
        Additional Information
      </h2>
      <table className="mt-4 w-full border border-[#ebebeb]">
        <tbody>
          <BookInfoItem title="Title" value={title} />
          <BookInfoItem title="Author" value={author} />
          <BookInfoItem title="Publisher" value={publisher || "-"} />
          <BookInfoItem title="Genres" value={genres} />
          <BookInfoItem
            title="Published at"
            value={getLocalDate(publicationDate)}
          />
          <BookInfoItem title="Pages" value={pageCount || "-"} />
          <BookInfoItem title="Total Copies" value={totalCopies} />
          <BookInfoItem title="Borrowed" value={borrowCount + " times"} />
          <BookInfoItem title="Language" value={bookLanguage || "-"} />
        </tbody>
      </table>
    </div>
  );
};

export default BookDetailsInfo;
