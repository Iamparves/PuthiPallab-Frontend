import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdOutlineLock } from "react-icons/md";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import AuthWrapper from "../components/AuthWrapper";
import FullpageSpinner from "../components/FullpageSpinner";
import useAuth from "../hooks/useAuth";
import { resetPassword } from "../utils/apiRequest";

const style = {
  input:
    "block w-full rounded-lg border border-[#eee] bg-[#FAFBFE] p-3 pl-9 placeholder:text-[#c3c3c3] focus:outline-none",
  icon: "absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-xl text-[#c3c3c3]",
  error: "mt-1 block text-xs text-red-400",
};

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { user, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onResetPassword = async (data) => {
    if (data.password !== data.passwordConfirm) {
      return toast.error("Password and Confirm Password doesn't match");
    }

    setIsLoading(true);
    const toastId = toast.loading("Resetting password...");
    const result = await resetPassword(token, data);
    setIsLoading(false);

    if (result?.status === "success") {
      reset();

      toast.success(result?.message, { id: toastId });
      return navigate("/dashboard", { replace: true });
    }

    toast.error(result?.message || "Something went wrong", {
      id: toastId,
    });
  };

  if (loading) return <FullpageSpinner />;
  if (user) return <Navigate to="/" replace />;

  return (
    <AuthWrapper>
      <div>
        <Link className="inline-block" to="/">
          <img src="/logo.svg" alt="" />
        </Link>
        <h1 className="mb-9 mt-14 text-2xl font-semibold text-[#1d1d1d]">
          Reset Password
        </h1>

        <form
          aria-disabled={isLoading}
          className="text-[#1d1d1d] aria-disabled:pointer-events-none aria-disabled:opacity-60"
          onSubmit={handleSubmit(onResetPassword)}
        >
          <div className="mb-3">
            <div className="relative">
              <input
                className={style.input}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[\W_])/,
                    message:
                      "Password must include at least 1 digit and 1 symbol",
                  },
                })}
                aria-invalid={errors.password ? "true" : "false"}
                type="password"
                placeholder="New Password"
              />
              <span className={style.icon}>
                <MdOutlineLock />
              </span>
            </div>
            {errors.password && (
              <span className={style.error}>{errors.password.message}</span>
            )}
          </div>
          <div>
            <div className="relative">
              <input
                className={style.input}
                {...register("passwordConfirm", {
                  required: "Confirm Password is required",
                })}
                aria-invalid={errors.passwordConfirm ? "true" : "false"}
                type="password"
                placeholder="Confirm New Password"
              />
              <span className={style.icon}>
                <MdOutlineLock />
              </span>
            </div>
            {errors.passwordConfirm && (
              <span className={style.error}>
                {errors.passwordConfirm.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 block w-full rounded-lg bg-primary p-4 text-center font-semibold text-white duration-300"
          >
            Reset Password
          </button>
        </form>

        <p className="mt-8 text-center text-xs font-medium text-[#898989]">
          Remembered your password?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default ResetPassword;
