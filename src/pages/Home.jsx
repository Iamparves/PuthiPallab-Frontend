import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-x-2 pt-10 text-center">
      <Link
        to="/login"
        className="bg-primary mt-6 inline-block rounded-lg px-10 py-4 text-center font-semibold text-white"
      >
        Log In
      </Link>
      <Link
        to="/dashboard"
        className="bg-primary mt-6 inline-block rounded-lg px-10 py-4 text-center font-semibold text-white"
      >
        Dashboard
      </Link>
    </div>
  );
};

export default Home;
