import React from "react";
import { MdClose } from "react-icons/md";
import DemoAccount from "./DemoAccount";

const demoAccounts = {
  librarian: ["guest@puthipallab.com", "Guest_123"],
  member: ["guest2@puthipallab.com", "Guest_123"],
};

const DemoLogin = ({ isDemoOpen, setIsDemoOpen }) => {
  return (
    <div
      className={`fixed left-0 top-0 z-[999] flex min-h-screen w-screen items-center justify-center bg-black/50 px-3 py-10 duration-300 ${
        isDemoOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={(e) => {
        if (!e.target.closest(".demoAccountCard")) {
          setIsDemoOpen(false);
        }
      }}
    >
      <div className="demoAccountCard w-full max-w-md rounded-lg bg-white">
        <div className="flex items-center justify-between border-b border-gray-200 px-3 py-[15px] sm:px-5">
          <h3 className="font-bold text-[#1d1d1d] sm:text-lg">Demo Accounts</h3>
          <button
            className="flex h-[30px] w-[30px] items-center justify-center rounded-[4px] bg-gray-100 duration-200 hover:bg-gray-200"
            onClick={() => setIsDemoOpen(false)}
          >
            <MdClose className="text-2xl" />
          </button>
        </div>
        <div className="flex flex-col gap-8 p-3 sm:p-5">
          <DemoAccount
            title="Guest Librarian"
            credentials={demoAccounts["librarian"]}
          />
          <DemoAccount
            title="Guest Member"
            credentials={demoAccounts["member"]}
          />
        </div>
      </div>
    </div>
  );
};

export default DemoLogin;
