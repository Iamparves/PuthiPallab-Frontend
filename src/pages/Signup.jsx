import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import {
  MdOutlineLock,
  MdOutlineMailOutline,
  MdPersonOutline,
} from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthWrapper from "../components/AuthWrapper";
import FullpageSpinner from "../components/FullpageSpinner";
import useAuth from "../hooks/useAuth";
import { signup } from "../utils/apiRequest";

const style = {
  input:
    "block w-full rounded-lg border border-[#eee] bg-[#FAFBFE] p-3 pl-9 placeholder:text-[#c3c3c3] focus:outline-none",
  icon: "absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-xl text-[#c3c3c3]",
  error: "mt-1 block text-xs text-red-400",
  gender:
    "flex cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-[#f5901566] bg-[#f590151c] p-3 font-medium duration-300 hover:bg-primary hover:text-white peer-checked:bg-primary peer-checked:text-white",
};

const Signup = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      gender: "male",
    },
  });

  const onSignup = async (data) => {
    if (data.password !== data.passwordConfirm) {
      return toast.error("Password and Confirm Password doesn't match");
    }

    setIsLoading(true);
    const toastId = toast.loading("Signing up...");
    const result = await signup(data);
    setIsLoading(false);

    if (result.status === "success") {
      reset();

      toast.success(
        <div className="text-center">
          <h4 className="mb-1 text-lg font-medium text-green-400">
            Signup successful
          </h4>
          <p className="text-gray-500">
            Please check your email to verify your account before login
          </p>
        </div>,
        {
          id: toastId,
          duration: 3000,
        },
      );

      return navigate("/login");
    }

    toast.error(result.message, { id: toastId });
  };

  if (loading) return <FullpageSpinner />;
  if (user) return <Navigate to="/dashboard" replace />;

  return (
    <AuthWrapper>
      <div>
        <Link className="inline-block" to="/">
          <img src="/logo.svg" alt="" />
        </Link>
        <h1 className="mb-9 mt-14 text-2xl font-semibold text-[#1d1d1d]">
          Create a new account
        </h1>

        <form
          aria-disabled={isLoading}
          className="text-[#1d1d1d] aria-disabled:pointer-events-none aria-disabled:opacity-60"
          onSubmit={handleSubmit(onSignup)}
        >
          <div className="mb-3">
            <div className="relative">
              <input
                className={style.input}
                {...register("name", {
                  required: "Name is required",
                })}
                aria-invalid={errors.name ? "true" : "false"}
                type="text"
                placeholder="Name"
              />
              <span className={style.icon}>
                <MdPersonOutline />
              </span>
            </div>
            {errors.name && (
              <span className={style.error}>{errors.name.message}</span>
            )}
          </div>
          <div className="mb-3">
            <div className="relative">
              <input
                className={style.input}
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
                type="email"
                placeholder="Email"
              />
              <span className={style.icon}>
                <MdOutlineMailOutline />
              </span>
            </div>
            {errors.email && (
              <span className={style.error}>{errors.email.message}</span>
            )}
          </div>
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
                placeholder="Password"
              />
              <span className={style.icon}>
                <MdOutlineLock />
              </span>
            </div>
            {errors.password && (
              <span className={style.error}>{errors.password.message}</span>
            )}
          </div>
          <div className="mb-3">
            <div className="relative">
              <input
                className={style.input}
                {...register("passwordConfirm", {
                  required: "Confirm Password is required",
                })}
                aria-invalid={errors.passwordConfirm ? "true" : "false"}
                type="password"
                placeholder="Confirm Password"
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
          <p className="mb-1.5 text-sm font-medium text-[#999]">
            Select your gender:
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <input
                type="radio"
                name="gender"
                id="male"
                className="peer hidden"
                {...register("gender")}
                value="male"
              />
              <label htmlFor="male" className={style.gender}>
                <AiOutlineMan />
                <span>Male</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                id="female"
                className="peer hidden"
                {...register("gender")}
                value="female"
              />
              <label htmlFor="female" className={style.gender}>
                <AiOutlineWoman />
                <span>Female</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-3 block w-full rounded-lg bg-primary p-4 text-center font-semibold text-white"
          >
            Sign up
          </button>
        </form>

        <p className="mt-8 text-center text-xs font-medium text-[#898989]">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default Signup;
