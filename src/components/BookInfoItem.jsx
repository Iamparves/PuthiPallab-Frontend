import { Link } from "react-router-dom";

const BookInfoItem = ({ title, value }) => {
  return (
    <tr className="text-sm text-[#151515]">
      <td className="border border-[#ebebeb] bg-[#f8f8f8] px-2 py-3 font-semibold sm:w-[200px] sm:px-5">
        {title}
      </td>
      <td className="border border-[#ebebeb] px-2 py-3 sm:px-5">
        {!(title === "Genres" || title === "Language") && value}
        {title === "Language" && (
          <Link
            className="text-[#EAA451] hover:underline"
            to={`/books?bookLanguage=${value}`}
          >
            {value}
          </Link>
        )}
        {title === "Genres" &&
          value.map((genre, index) => (
            <Link
              className="text-[#EAA451] hover:underline"
              key={genre._id}
              to={`/books?genres=${genre._id}`}
            >
              {genre.genreName}
              {index !== value.length - 1 && ", "}
            </Link>
          ))}
      </td>
    </tr>
  );
};

export default BookInfoItem;
