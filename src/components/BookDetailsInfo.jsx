import moment from "moment";
import React from "react";

const getLocalDate = (date) => {
  if (!date) return "-";
  return moment.utc(date).local().format("LL");
};

const BookInfoItem = ({ title, value }) => {
  return (
    <tr className="text-sm text-[#151515]">
      <td className="border border-[#ebebeb] bg-[#f8f8f8] px-2 py-3 font-semibold sm:w-[200px] sm:px-5">
        {title}
      </td>
      <td className="border border-[#ebebeb] px-2 py-3 sm:px-5">{value}</td>
    </tr>
  );
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
          <BookInfoItem title="Genres" value={genresList} />
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
