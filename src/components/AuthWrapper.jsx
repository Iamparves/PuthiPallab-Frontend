import React from "react";

const AuthWrapper = ({ children }) => {
  return (
    <main className="bg-[#F6F7FB]">
      <div className="container flex min-h-screen items-center py-14">
        <div className="mx-auto grid h-full w-full max-w-[1064px] grid-cols-2 overflow-hidden rounded-[20px] bg-white">
          <div className="mx-auto flex w-full max-w-[400px] flex-col justify-center px-5 py-9">
            {children}
          </div>
          <div>
            <img
              className="h-full w-full object-cover"
              src="/login-banner.jpg"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthWrapper;
