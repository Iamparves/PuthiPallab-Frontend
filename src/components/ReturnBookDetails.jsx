import moment from "moment";
import React, { useEffect } from "react";

const getLocalDate = (date) => {
  if (!date) return "-";
  return moment(date).format("lll");
};

const getCurrentDate = () => moment().toISOString();

const ReturnBookDetails = ({ issue, setFine }) => {
  const { book, user } = issue;
  const isDelayed = issue.estimatedReturnDate < getCurrentDate();
  const delayedDays = Math.ceil(
    moment.duration(moment().diff(issue.estimatedReturnDate)).asDays(),
  );

  const delayedFine = 50 + (delayedDays - 1) * 10;

  useEffect(() => {
    setFine(isDelayed ? delayedFine : 0);
  }, [issue._id]);

  return (
    <div className="rounded-xl border border-gray-200/70 bg-white">
      <h1 className="border-b border-gray-200/70 px-4 py-3 text-lg font-semibold text-[#1d1d1d] sm:px-5 sm:py-4 sm:text-xl">
        Issue Details
      </h1>
      {!issue.book && (
        <p className="px-5 py-10 text-center text-[#bbb]">
          There is nothing to show yet.
        </p>
      )}
      {issue._id && (
        <div className="grid grid-cols-1 items-center gap-5 p-4 sm:grid-cols-[auto_1fr] sm:p-5">
          <div>
            <img
              className="aspect-[4/5] w-full max-w-[160px] rounded-lg border border-gray-200/70 object-cover p-1 md:max-w-[240px]"
              src={issue.book.coverImg}
              alt={issue.book.title}
            />
          </div>
          <div className="min-w-[320px] space-y-2 text-sm md:text-base">
            <div className="grid grid-cols-[auto_1fr] gap-2">
              <h3 className="font-semibold text-[#1d1d1d]">Book: </h3>
              <p className="text-gray-500">{book.title}</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2">
              <h3 className="font-semibold text-[#1d1d1d]">Member: </h3>
              <p className="text-gray-500">{user.name}</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2">
              <h3 className="font-semibold text-[#1d1d1d]">Issue Date: </h3>
              <p className="text-gray-500">{getLocalDate(issue.issueDate)}</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2">
              <h3 className="font-semibold text-[#1d1d1d]">Due Date: </h3>
              <p className="text-gray-500">
                {getLocalDate(issue.estimatedReturnDate)}
              </p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2">
              <h3 className="font-semibold text-[#1d1d1d]">Return Date: </h3>
              <p className="text-gray-500">{getLocalDate(moment())}</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-2">
              <h3 className="font-semibold text-[#1d1d1d]">Delay Status: </h3>
              <p>
                <span
                  className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${
                    isDelayed
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {isDelayed ? "Delayed" : "Not delayed"}{" "}
                  {isDelayed &&
                    `by ${delayedDays} ${delayedDays < 2 ? "day" : "days"}`}
                </span>
              </p>
            </div>
            {isDelayed && (
              <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                <h3 className="font-semibold text-[#1d1d1d]">Delay Fine: </h3>
                <p>
                  <span className="inline-block rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-600">
                    {delayedFine} BDT
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReturnBookDetails;
