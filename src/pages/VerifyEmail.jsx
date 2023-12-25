import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { verifyEmail } from "../utils/apiRequest";

const VerifyEmail = () => {
  const { token } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  const onVerifyEmail = async () => {
    setIsLoading(true);
    const toastId = toast.loading("Verifying email...");
    const result = await verifyEmail(token);
    setIsLoading(false);

    if (result?.status === "success") {
      toast.success("Account Verified Successfully", { id: toastId });
      return setIsVerified(true);
    }

    toast.error(result?.message || "Something went wrong", { id: toastId });
  };

  useEffect(() => {
    onVerifyEmail();
  }, [token]);

  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-[#F6F7FB] px-5 py-10">
      <div className="flex w-full max-w-lg flex-col items-center rounded-lg bg-white p-5 text-center text-sm shadow-sm sm:text-base md:p-8">
        <img className="mb-5 w-24" src="/logo.svg" alt="" />
        {isLoading && (
          <>
            <p className="mb-3 text-gray-500">
              Welcome to Puthi Pallab Library! Your account{" "}
              <span className="text-primary">
                verification is almost complete
              </span>
              .
            </p>
            <Spinner />
          </>
        )}
        {!isLoading && !isVerified && (
          <>
            <p className="mb-3 text-gray-500">
              Opps! Your account{" "}
              <span className="text-primary">verification failed</span>. Please
              try again with a valid verification link.
            </p>
            <Link
              to="/"
              className="mx-auto block rounded-full border-2 border-primary bg-primary px-5 py-3 font-semibold text-white duration-300 hover:bg-white hover:text-primary"
            >
              Return home
            </Link>
          </>
        )}
        {!isLoading && isVerified && (
          <>
            <p className="mb-3 text-gray-500">
              Thank you for registering with Puthi Pallab Library. Your account{" "}
              <span className="text-primary">verification is successful</span>.
              You can now proceed to login.
            </p>
            <Link
              to="/login"
              className="mx-auto block rounded-full border-2 border-primary bg-primary px-5 py-3 font-semibold text-white duration-300 hover:bg-white hover:text-primary"
            >
              Login now
            </Link>
          </>
        )}
      </div>
    </main>
  );
};

export default VerifyEmail;
