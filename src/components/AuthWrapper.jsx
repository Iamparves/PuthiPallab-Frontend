import React from "react";

const AuthWrapper = ({ children }) => {
  return (
    <main className="bg-[#F6F7FB]">
      <div className="container flex min-h-[100dvh] items-center py-10">
        <div className="mx-auto grid h-full w-full max-w-md grid-cols-1 overflow-hidden rounded-[20px] border border-gray-200/70 bg-white shadow-sm sm:max-w-[1064px] sm:grid-cols-[1fr_180px] md:grid-cols-2">
          <div className="mx-auto flex w-full max-w-[400px] flex-col justify-center px-5 py-9">
            {children}
          </div>
          <div className="hidden p-3 pl-0 sm:block md:p-0">
            <img
              className="h-full w-full rounded-xl object-cover md:rounded-none"
              src="/login-banner.jpg"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthWrapper;
