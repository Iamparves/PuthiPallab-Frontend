import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const StatusPagamento = ({ inscricaoPaga }) => {
    const estiloDiv = `p-4 rounded text-center ${
      inscricaoPaga
        ? 'bg-green-200 text-green-800' // Se pago, fundo verde e texto verde
        : 'bg-yellow-200 text-yellow-800' // Se não pago, fundo amarelo e texto amarelo
    }`;
  
    return (
      <div className={estiloDiv}>
        {inscricaoPaga ? (
          <>
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
            Inscrição paga!
          </>
        ) : (
          <>
            Aguardando pagamento
            <p className="mb-2 text-[15px] text-[#777]">
              Efetue o pagamento através do link do PagSeguro logo abaixo
            </p>
            <div className="flex items-center justify-center">
              <a
                href="https://pag.ae/7-ayfcYCM/button"
                target="_blank"
                title="Pagar com PagSeguro"
              >
                <img
                  src="//assets.pagseguro.com.br/ps-integration-assets/botoes/pagamentos/205x30-pagar.gif"
                  alt="Pague com PagSeguro - é rápido, grátis e seguro!"
                />
              </a>
            </div>
          </>
        )}
      </div>
    );
  };
export default StatusPagamento;
