import moment from "moment";
import React from "react";

const getLocalDate = (date) => {
  if (!date) return "-";
  return moment.utc(date).local().format("lll");
};

const getCurrentDate = () => moment().toISOString().slice(0, 16);

const ReturnBookDetails = ({ issue }) => {
  const { book, user } = issue;
  const isDelayed = issue.estimatedReturnDate < getCurrentDate();
  const delayedDays = moment().diff(issue.estimatedReturnDate, "days");

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
        <div className="grid grid-cols-[240px_1fr] items-center gap-5 p-4 sm:p-5">
          <div>
            <img
              className="mx-auto aspect-[4/5] w-full max-w-[240px] rounded-lg border border-gray-200/70 object-cover p-1"
              src={issue.book.coverImg}
              alt={issue.book.title}
            />
          </div>
          <div className="space-y-2">
            <div className="grid grid-cols-[auto_1fr] gap-2">
              <h3 className="font-semibold text-[#1d1d1d]">Book ID: </h3>
              <p className="text-gray-500">{book.bookId}</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2">
              <h3 className="font-semibold text-[#1d1d1d]">Title: </h3>
              <p className="text-gray-500">{book.title}</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2">
              <h3 className="font-semibold text-[#1d1d1d]">User ID: </h3>
              <p className="text-gray-500">{user.userId}</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2">
              <h3 className="font-semibold text-[#1d1d1d]">Name: </h3>
              <p className="text-gray-500">{user.name}</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2">
              <h3 className="font-semibold text-[#1d1d1d]">Issue Date: </h3>
              <p className="text-gray-500">{getLocalDate(issue.issueDate)}</p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2">
              <h3 className="font-semibold text-[#1d1d1d]">
                Estimated Return Date:{" "}
              </h3>
              <p className="text-gray-500">
                {getLocalDate(issue.estimatedReturnDate)}
              </p>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-2">
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
                  {isDelayed && `by ${delayedDays} days`}
                </span>
              </p>
            </div>
            {isDelayed && (
              <div className="grid grid-cols-[auto_1fr] gap-2">
                <h3 className="font-semibold text-[#1d1d1d]">Delay Fine: </h3>
                <p>
                  <span className="inline-block rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-600">
                    50 BDT
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
