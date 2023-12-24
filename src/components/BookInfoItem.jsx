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

export default BookInfoItem;
