import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const ErrorStatusPage = ({ title, description, image }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <main>
      <section className="flex min-h-[100dvh] items-center justify-center bg-white">
        <div className="container py-10">
          <div
            className="mx-auto grid max-w-sm
          grid-cols-1 items-center gap-10 rounded-md md:max-w-3xl md:grid-cols-[auto_1fr]"
          >
            <img className="mx-auto block w-[300px] lg:w-[350px]" src={image} />
            <div className="text-center md:text-left">
              <h1 className="mb-2 text-2xl font-semibold text-primary">
                {title}
              </h1>
              <p className="mb-5 text-gray-500 md:text-lg">{description}</p>
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <button
                  className="flex items-center gap-1 rounded-full border-2 border-primary bg-primary px-5 py-2.5 font-medium text-white duration-300 hover:bg-white hover:text-primary"
                  onClick={goBack}
                >
                  <MdKeyboardBackspace />
                  Go Back
                </button>
                <Link
                  className="flex items-center gap-1 rounded-full border-2 border-primary px-5 py-2.5 text-primary duration-300 hover:bg-primary hover:text-white"
                  to="/"
                >
                  <IoHomeOutline /> Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorStatusPage;
