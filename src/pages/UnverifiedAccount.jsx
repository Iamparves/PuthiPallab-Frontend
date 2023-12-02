import React from "react";
import toast from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthWrapper from "../components/AuthWrapper";
import { resendVerificationEmail } from "../utils/apiRequest";

const UnverifiedAccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const onResendVerificationEmail = async () => {
    if (!email) return;

    const toastId = toast.loading("Sending verification email...");
    const result = await resendVerificationEmail({ email });

    if (result?.status === "success") {
      toast.success("Verification email sent", { id: toastId });
      return navigate("/login", { replace: true });
    } else {
      toast.error(result?.message || "Something went wrong", {
        id: toastId,
      });
    }
  };

  if (!email) return <Navigate to="/login" replace />;

  return (
    <AuthWrapper>
      <div>
        <Link className="inline-block" to="/">
          <img src="/logo.svg" alt="" />
        </Link>
        <h1 className="mb-9 mt-14 text-xl font-semibold text-[#1d1d1d] sm:text-2xl">
          Unverified Account
        </h1>

        <div className="space-y-6 text-sm sm:text-base">
          <p className="text-[#898989]">
            Your account is not verified yet. Please check your email for the
            verification link.
          </p>
          <p className="text-[#898989]">
            If you haven't received the email, click below to resend the
            verification link:
          </p>
          <button
            onClick={onResendVerificationEmail}
            className="mt-6 block w-full rounded-lg bg-primary p-4 text-center font-semibold text-white duration-300"
          >
            Resend Verification Email
          </button>
        </div>

        <p className="mt-8 text-center text-xs font-medium text-[#898989]">
          <Link to="/login" className="text-primary hover:underline">
            Return to Login
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default UnverifiedAccount;
