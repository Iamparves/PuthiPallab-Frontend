import React, { useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";
import TopBanner from "../components/TopBanner";
import toast from "react-hot-toast";
import { useLocation } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { GetDocumentById, UpdateDocument } from "../utils/firebaseRequest";

const ConfirmacaoPagamento = () => {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');
  console.log(token)
  useEffect(() => {
    const processarInscricao = async () => {
      try {
        const documentSnapshot = await GetDocumentById("TesteForm", token);
        console.log(documentSnapshot)

        const editedData = {
          inscricaoPaga: true,
        };
        await UpdateDocument("TesteForm", token, editedData);
        toast.success("Inscrição marcada como paga.");
      } catch (error) {
        console.error("Erro ao processar a inscrição:", error);
      }
    };

    if (token) {
      processarInscricao();
    } else {
      console.error("Token não encontrado na URL.");
    }
  }, [token]);
  return (
    <main className="bg-white">
      <ScrollToTop />
      <TopBanner title="Confirmação de pagamento" background="bg-[url(/igreja/igreja_completa_facebook.jpg)]" />

      <div className="confirmation-container py-20 text-center">
        <div className="confirmation mt-10 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold">Parabéns! Seu pagamento foi aprovado.</h2>
          <FaCheckCircle className="confirmation-icon text-3xl mb-4 mt-3" />
        </div>
        <div className="confirmation">
          <p>Uma mensagem com os detalhes desta transação foi enviada para o seu e-mail.</p>
          <p>Você também pode acessar sua conta no <a href="https://pagseguro.uol.com.br/" target="_blank" rel="noopener noreferrer" className="underline">PagSeguro</a> para mais informações.</p>
        </div>
      </div>
    </main>
  );
};

export default ConfirmacaoPagamento;
