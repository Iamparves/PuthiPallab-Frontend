import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import AuthWrapper from "../components/AuthWrapper";
import FullpageSpinner from "../components/FullpageSpinner";
import useAuth from "../hooks/useAuth";
import { auth } from "../utils/firebaseSetup"
import { sendPasswordResetEmail } from "firebase/auth";

const style = {
  input:
    "block w-full rounded-lg border border-[#eee] bg-[#FAFBFE] p-3 pl-9 placeholder:text-[#c3c3c3] focus:outline-none",
  icon: "absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-xl text-[#c3c3c3]",
  error: "mt-1 block text-xs text-red-400",
};

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  
  const onForgotPassword = async (data) => {
    setIsLoading(true);
    const toastId = toast.loading("Enviando um link de recuperação para seu email...");
    try {
      sendPasswordResetEmail(auth, data.email)
        .then(() => {
          // Password reset email sent!
          // ..
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      reset();
      toast.success("Link enviado. Verifique seu email!", { id: toastId });
      
    } catch (error) {
      toast.error(error.message || "Algo de errado ocorreu. Contate a administração do site", { id: toastId });
    } finally {
      setIsLoading(false);
    }
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
          Esqueceu a senha?
        </h1>

        <form
          aria-disabled={isLoading}
          className="text-[#1d1d1d] aria-disabled:pointer-events-none aria-disabled:opacity-60"
          onSubmit={handleSubmit(onForgotPassword)}
        >
          <div>
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

          <button
            type="submit"
            className="mt-6 block w-full rounded-lg bg-primary p-4 text-center font-semibold text-white duration-300"
          >
            Resetar minha senha
          </button>
        </form>

        <p className="mt-8 text-center text-xs font-medium text-[#898989]">
          Conseguiu lembrar da sua senha?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default ForgotPassword;
