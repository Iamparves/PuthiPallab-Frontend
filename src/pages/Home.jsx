import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="h-[85vh]">
      <div className="space-x-2 pt-10 text-center">
        <Link
          to="/login"
          className="mt-6 inline-block rounded-lg bg-primary px-10 py-4 text-center font-semibold text-white"
        >
          Log In
        </Link>
        <Link
          to="/dashboard"
          className="mt-6 inline-block rounded-lg bg-primary px-10 py-4 text-center font-semibold text-white"
        >
          Dashboard
        </Link>
      </div>
    </main>
  );
};

export default Home;
