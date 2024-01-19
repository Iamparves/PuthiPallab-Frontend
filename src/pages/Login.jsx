import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdOutlineLock, MdOutlineMailOutline } from "react-icons/md";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthWrapper from "../components/AuthWrapper";
import FullpageSpinner from "../components/FullpageSpinner";
import useAuth from "../hooks/useAuth";
import { useStore } from "../store";
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from "../utils/firebaseSetup";
import Navbar from "../components/Navbar";


const style = {
  input:
    "block w-full rounded-lg border border-[#eee] bg-[#FAFBFE] p-3 pl-9 placeholder:text-[#c3c3c3] focus:outline-none",
  icon: "absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-xl text-[#c3c3c3]",
  error: "mt-1 block text-xs text-red-400",
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/perfil";
  const { user, loading } = useAuth();
  const setUser = useStore((state) => state.setUser);

  const [isLoading, setIsLoading] = useState(false);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const onLogin = async (data) => {
    setIsLoading(true);
    const toastId = toast.loading("Acessando sua conta...");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      setUser(user);
      reset();
      setIsLoading(false);

      toast.success("Conta acessada!", { id: toastId });
      navigate(from, { replace: true });
    } catch (error) {
      setIsLoading(false);

      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        toast.error("Invalid email or password", { id: toastId });
      } else {
        toast.error("Something went wrong", { id: toastId });
      }
    }
  };

  if (loading) return <FullpageSpinner />;
  if (user) return <Navigate to={from} replace />;

  return (
    <main>
      <Navbar />
      <AuthWrapper>
        <div>
          <Link className="inline-block" to="/">
            <img src="/logo.svg" alt="" />
          </Link>
          <h1 className="mb-9 mt-14 text-2xl font-semibold text-[#1d1d1d]">
            Entre com sua conta
          </h1>

          <form
            aria-disabled={isLoading}
            className="text-[#1d1d1d] aria-disabled:pointer-events-none aria-disabled:opacity-60"
            onSubmit={handleSubmit(onLogin)}
          >
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
                    required: "Você precisa de uma senha",
                  })}
                  aria-invalid={errors.password ? "true" : "false"}
                  type="password"
                  placeholder="Senha"
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
                className="text-xs font-medium text-primary hover:underline"
                href="#"
              >
                Esqueceu a senha?
              </Link>
            </div>

            <button
              type="submit"
              className="mt-6 block w-full rounded-lg bg-primary p-4 text-center font-semibold text-white duration-300"
            >
              Log In
            </button>
          </form>

          <p className="mt-8 text-center text-xs font-medium text-[#898989]">
            Ainda não é cadastrado?{" "}
            <Link to="/cadastro" className="text-primary hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </AuthWrapper>
    </main>
  );
};

export default Login;
