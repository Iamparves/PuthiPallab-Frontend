import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import TopBanner from "../components/TopBanner";
import { FaCheckCircle } from 'react-icons/fa';

const ConfirmacaoPagamento = () => {
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
