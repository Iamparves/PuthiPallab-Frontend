import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import ScrollToTop from "../components/ScrollToTop";
import SubscribeForm from "../components/SubscribeForm";

const SubscribeToEvent = () => {
  const { user } = useAuth(); // Obtenha o usuário do hook useAuth
  const navigate = useNavigate();

  // Se o usuário não estiver autenticado, redirecione para a página de login
  if (!user) {
    navigate(`/login`);
  }
  console.log(user)

  return (
    <main className="bg-white">
      <ScrollToTop />
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-3xl font-bold mb-8 uppercase">Inscrição: Encontro de casais</h1>
        <SubscribeForm />
      </div>
    </main>
  );
};

export default SubscribeToEvent;
