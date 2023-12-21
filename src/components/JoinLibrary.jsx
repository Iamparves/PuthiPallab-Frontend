import React from "react";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

const JoinLibrary = () => {
  return (
    <section className="bg-[url(/join-library.jpg)] bg-fixed bg-center bg-no-repeat">
      <div className="bg-black/70 px-5 py-20 sm:px-10 md:py-32 xl:py-40">
        <div className=" mx-auto flex max-w-3xl flex-col items-center text-center">
          <h3 className="mb-5 text-3xl font-bold text-[#eee] sm:text-4xl xl:text-5xl">
            Join Puthi Pallab Today
          </h3>
          <p className="mb-7 text-base text-[#ddd] sm:text-lg xl:text-xl">
            Experience the magic of literature and knowledge. Sign up for a
            membership and unlock a world of stories, wisdom, and exploration.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 border-2 border-primary bg-transparent px-5 py-3 font-medium uppercase text-primary duration-300 hover:bg-primary hover:text-white sm:text-lg"
          >
            {" "}
            <span className="text-xl sm:text-2xl">
              <GoPerson />
            </span>{" "}
            Signup
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinLibrary;
