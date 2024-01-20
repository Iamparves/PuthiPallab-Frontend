import React from 'react';
import { Link } from "react-router-dom";
import StatusPagamento from './StatusPagamento';

const DadosInscricaoEncibaf = ({ docSnap }) => {
  // Certifique-se de que docSnap está disponível
  if (!docSnap) {
    return (
<       div className="mb-8 pl-10 mt-10">
          <h2 className="mb-6 text-2xl font-bold">Inscrições para o ENCIBAF</h2>
          <p className="mb-2 text-[15px] text-[#777]">Para participar do Encontro de Casais da Igreja Batista do Farol faça sua inscrição no botão abaixo</p>
          <Link
          className="inline-flex items-center gap-3 border-2 border-primary bg-primary px-8 py-3.5 font-semibold uppercase text-white duration-300 hover:gap-4 hover:bg-transparent hover:text-primary"
          to="/subscribe"
          >
          Inscreva-se
          </Link>
        </div>
    );
  }

  // Extraia os dados do docSnap
  const userData = docSnap.data();

  return (
    <div className="border border-gray-300 rounded p-4 my-4 shadow-md overflow-auto bg-[#F6F7FB]">
        <StatusPagamento inscricaoPaga={userData.inscricaoPaga} />
      <h2 className="text-2xl font-bold mb-4">Dados da Inscrição</h2>
      <div className="ml-4">
        <h2 className="text-xl font-bold mb-4">Esposa</h2>
        <p><strong>Nome:</strong> {userData.wifeName}</p>
        <p><strong>Data:</strong> {userData.wifeBirthdate}</p>
        <p><strong>CPF:</strong> {userData.wifeCpf}</p>
        <p><strong>Número do RG e Orgão Expedidor:</strong> {userData.wifeRg}</p>
        <p><strong>Profissão:</strong> {userData.wifeJob}</p>
        <p><strong>Telefone:</strong> {userData.wifePhone}</p>
        <p><strong>Email:</strong> {userData.wifeEmail}</p>
        <p><strong>Membro da IBF?:</strong> {userData.wifeIbf}</p>
        <p><strong>Caso não seja, qual igreja?</strong> {userData.wifeChurch}</p>
        <p><strong>Tamanho da camisa:</strong> {userData.wifeSize}</p>
        {/* Marido */}
        <h2 className="text-xl font-bold mb-4 mt-5">Marido</h2>
        <p><strong>Nome:</strong> {userData.husbandName}</p>
        <p><strong>Data:</strong> {userData.husbandBirthdate}</p>
        <p><strong>CPF:</strong> {userData.husbandCpf}</p>
        <p><strong>Número do RG e Orgão Expedidor:</strong> {userData.husbandRg}</p>
        <p><strong>Profissão:</strong> {userData.husbandJob}</p>
        <p><strong>Telefone:</strong> {userData.husbandPhone}</p>
        <p><strong>Email:</strong> {userData.husbandEmail}</p>
        <p><strong>Membro da IBF?:</strong> {userData.husbandIbf}</p>
        <p><strong>Caso não seja, qual igreja?</strong> {userData.husbandChurch}</p>
        <p><strong>Tamanho da camisa:</strong> {userData.husbandSize}</p>
        {/* Casal */}
        <h2 className="text-xl font-bold mb-4 mt-5">Casal</h2>
        <p><strong>Nome dos filhos e idade:</strong> {userData.childInfo}</p>
        <p><strong>Contato de emergência:</strong> {userData.emergencyContact}</p>
        <p><strong>Tem condução própria?</strong> {userData.hasVehicle}</p>
        <p><strong>Se sim, pode dar carona?</strong> {userData.ride}</p>
        <p><strong>Tem interesse em ônibus comum para transporte?</strong> {userData.busTransport}</p>
        <p><strong>Observações</strong> {userData.observations}</p>
        {/* Pagamento */}
        <h2 className="text-xl font-bold mb-4 mt-5">Pagamento</h2>
        <p><strong>Forma de pagamento:</strong> {userData.paymentType}</p>
        <p><strong>Em quantas parcelas?</strong> {userData.parcels}</p>
        <p><strong>Dia do vencimento:</strong> {userData.paydate}</p>
        <p><strong>Tem interesse em ônibus comum para transporte?</strong> {userData.busTransport}</p>
        {/* Adicione mais campos conforme necessário */}
      </div>
    </div>
  );
};

export default DadosInscricaoEncibaf;
