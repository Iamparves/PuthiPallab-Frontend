import React from "react";

const IssueUserDetails = ({ user }) => {
  const { userId, photo, name, email, gender } = user;

  return (
    <div className="rounded-xl border border-gray-200/70 bg-white">
      <h1 className="border-b border-gray-200/70 px-4 py-3 text-lg font-semibold text-[#1d1d1d] sm:px-5 sm:py-4 sm:text-xl">
        User Details
      </h1>
      {!userId && (
        <p className="px-5 py-10 text-center text-[#bbb]">
          There is nothing to show yet.
        </p>
      )}
      {userId && (
        <div className="space-y-2 p-4 sm:p-5">
          <div className="mb-5">
            <div className="aspect-[4/5] w-40 overflow-hidden rounded-md border p-1">
              <img
                src={
                  photo ||
                  "https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png"
                }
                alt={name}
                className="h-full w-full rounded-[5px] object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2">
            <h3 className="font-semibold text-[#1d1d1d]">User ID: </h3>
            <p className="text-gray-500">{userId}</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2">
            <h3 className="font-semibold text-[#1d1d1d]">Name: </h3>
            <p className="text-gray-500">{name}</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2">
            <h3 className="font-semibold text-[#1d1d1d]">Email: </h3>
            <p className="text-gray-500">{email}</p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-2">
            <h3 className="font-semibold text-[#1d1d1d]">Gender: </h3>
            <p className="text-gray-500">{gender}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default IssueUserDetails;
