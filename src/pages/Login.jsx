import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdOutlineLock, MdOutlineMailOutline } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthWrapper from "../components/AuthWrapper";
import { useStore } from "../store";
import { login } from "../utils/apiRequest";

const style = {
  input:
    "block w-full rounded-lg border border-[#eee] bg-[#FAFBFE] p-3 pl-9 placeholder:text-[#c3c3c3] focus:outline-none",
  icon: "absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-xl text-[#c3c3c3]",
  error: "mt-1 block text-xs text-red-400",
};

const Login = () => {
  const navigate = useNavigate();
  const [isUnverified, setIsUnverified] = useState(false);
  const isLoggedIn = useStore((state) => state.loggedIn);
  const setUser = useStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onLogin = async (data) => {
    const result = await login(data);

    if (result?.status === "success") {
      setUser(result.data.user);
      reset();

      toast.success("Login successful");
      return navigate("/dashboard");
    }

    toast.error(result?.message || "Something went wrong");
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <AuthWrapper>
      <div>
        <Link className="inline-block" to="/">
          <img src="/logo.svg" alt="" />
        </Link>
        <h1 className="mb-9 mt-14 text-2xl font-semibold text-[#1d1d1d]">
          Log in to your account
        </h1>

        <form className="text-[#1d1d1d]" onSubmit={handleSubmit(onLogin)}>
          <div className="mb-3">
            <div className="relative">
              <input
                className={style.input}
                {...register("email", {
                  required: "Email Address is required",
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
          <div className="mb-2">
            <div className="relative">
              <input
                className={style.input}
                {...register("password", {
                  required: "Password is required",
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

          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-xs font-medium text-[#F59115] hover:underline"
              href="#"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="mt-6 block w-full rounded-lg bg-[#F59115] p-4 text-center font-semibold text-white"
          >
            Log In
          </button>
        </form>

        <p className="mt-8 text-center text-xs font-medium text-[#898989]">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#F59115] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default Login;
