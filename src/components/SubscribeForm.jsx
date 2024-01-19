import React, { useState, useEffect} from "react";
import toast from "react-hot-toast";
import { MdAlternateEmail } from "react-icons/md";
import { AddDocumentWithId } from "../utils/firebaseRequest";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebaseSetup';


const SubscribeForm = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      wifeName: e.target.wifeName.value,
      wifeBirthdate: e.target.wifeBirthdate.value,
      wifeCpf: e.target.wifeCpf.value,
      wifeRg: e.target.wifeRg.value,
      wifeJob: e.target.wifeJob.value,
      wifePhone: e.target.wifePhone.value,
      wifeEmail: e.target.wifeEmail.value,
      wifeIbf: e.target.wifeIbf.value,
      wifeChurch: e.target.wifeChurch.value,
      wifeSize: e.target.wifeSize.value,
      husbandName: e.target.husbandName.value,
      husbandBirthdate: e.target.husbandBirthdate.value,
      husbandCpf: e.target.husbandCpf.value,
      husbandRg: e.target.husbandRg.value,
      husbandJob: e.target.husbandJob.value,
      husbandPhone: e.target.husbandPhone.value,
      husbandEmail: e.target.husbandEmail.value,
      husbandIbf: e.target.husbandIbf.value,
      husbandChurch: e.target.husbandChurch.value,
      husbandSize: e.target.husbandSize.value,
      address: e.target.address.value,
      weddingDate: e.target.weddingDate.value,
      childInfo: e.target.childInfo.value,
      emergencyContact: e.target.emergencyContact.value,
      paymentType: e.target.paymentType.value,
      parcels: e.target.parcels.value,
      paydate: e.target.paydate.value,
      hasVehicle: e.target.hasVehicle.value,
      ride: e.target.ride.value,
      busTransport: e.target.busTransport.value,
      observations: e.target.observations.value,
      inscricaoPaga: false
    };

    try {
      // const docRef = await AddDocument("TesteForm", data);
      const docId = await AddDocumentWithId("TesteForm", data, userEmail);
      // const docId = docRef.id;
      toast.success("Incrição realizada com sucesso!");
      navigate(`/pagamentopendente?token=${docId}`);
    } catch (error) {
      toast.error("Erro ao realizar inscrição!");
    }

    // e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-3 sm:space-y-5">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-1">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-1 border-2 border-primary rounded-lg p-8">
          <h2 className="text-3xl font-semibold">Esposa</h2>
          <input
            name="wifeName"
            type="text"
            placeholder="Nome da esposa"
            required
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
          <p>Data de nascimento</p>
          <input
            name="wifeBirthdate"
            type="date"
            placeholder="Data de nascimento"
            required
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
          <input
            name="wifeCpf"
            type="text"
            placeholder="CPF"
            mask="999.999.999-99"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
          <input
            name="wifeRg"
            type="text"
            placeholder="Número do RG e Orgão Expedidor"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
          <input
            name="wifeJob"
            type="text"
            placeholder="Profissão"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
          <input
            name="wifePhone"
            type="text"
            placeholder="Telefone"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
          <input
            name="wifeEmail"
            type="email"
            placeholder="Email"
            required
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
          <fieldset>
            <legend>Membro da IBF?</legend>
            <div className="flex gap-8">
              <span className="flex gap-1">
                <input type="radio" id="wife-yes" name="wifeIbf" value="true" required/>
                <label htmlFor="wife-yes">Sim</label>
              </span>

              <span className="flex gap-1">
                <input type="radio" id="wife-no" name="wifeIbf" value="false" />
                <label htmlFor="wife-no">Não</label>
              </span>
            </div>
          </fieldset>
          <label htmlFor="wifeChurch">Caso não seja, qual igreja?</label>
          <input
            name="wifeChurch"
            type="text"
            placeholder="Igreja (Opcional)"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />

          <input
            name="wifeSize"
            type="text"
            placeholder="Tamanho da camisa"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-1 border-2 border-primary rounded-lg p-8">
          <h2 className="text-3xl font-semibold">Marido</h2>
          <input
            name="husbandName"
            type="text"
            placeholder="Nome do marido"
            required
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
          <p>Data de nascimento</p>
          <input
            name="husbandBirthdate"
            type="date"
            placeholder="Data de nascimento"
            required
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
          <input
            name="husbandCpf"
            type="text"
            placeholder="CPF"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
          <input
            name="husbandRg"
            type="text"
            placeholder="Número do RG e Orgão Expedidor"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
          <input
            name="husbandJob"
            type="text"
            placeholder="Profissão"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
          <input
            name="husbandPhone"
            type="text"
            placeholder="Telefone"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
          <input
            name="husbandEmail"
            type="email"
            placeholder="Email"
            required
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
          <fieldset>
            <legend className="text-xl font-bold">Membro da IBF?</legend>
            <div className="flex gap-8">
              <span className="flex gap-1">
                <input type="radio" id="husband-yes" name="husbandIbf" value="true" required/>
                <label htmlFor="husband-yes">Sim</label>
              </span>

              <span className="flex gap-1">
                <input type="radio" id="husband-no" name="husbandIbf" value="false" />
                <label htmlFor="husband-no">Não</label>
              </span>
            </div>
          </fieldset>
          <label htmlFor="husbandChurch">Caso não seja, qual igreja?</label>
          <input
            name="husbandChurch"
            type="text"
            placeholder="Igreja (Opcional)"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />

          <input
            name="husbandSize"
            type="text"
            placeholder="Tamanho da camisa"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-1 border-2 border-primary rounded-lg p-8">
          <h2 className="text-3xl font-semibold">Casal</h2>
          <input
            name="address"
            type="text"
            placeholder="Endereço do casal"
            required
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />

          <input
            name="weddingDate"
            type="date"
            placeholder="Data de casamento"
            required
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />

          <input
            name="childInfo"
            type="text"
            placeholder="Nome dos filhos e idade"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />

          <input
            name="emergencyContact"
            type="text"
            placeholder="Contato de emergência (Nome, telefone e grau de parentesco)"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />

          <fieldset>
            <legend className="text-xl font-bold">Forma de pagamento:</legend>
            <div className="grid grid-cols-2 gap-8">
              <span className="flex gap-1">
                <input type="radio" id="payment-0" name="paymentType" value="1" required/>
                <label htmlFor="payment-0">PIX (à vista)</label>
              </span>
              <span className="flex gap-1">
                <input type="radio" id="payment-1" name="paymentType" value="2" />
                <label htmlFor="payment-1">PIX (em até 2x)</label>
              </span>
              <span className="flex gap-1">
                <input type="radio" id="payment-2" name="paymentType" value="3" />
                <label htmlFor="payment-2">Crédito (Parcela única)</label>
              </span>
              <span className="flex gap-1">
                <input type="radio" id="payment-3" name="paymentType" value="4" />
                <label htmlFor="payment-3">Débito (Parcela única)</label>
              </span>
              <span className="flex gap-1">
                <input type="radio" id="payment-4" name="paymentType" value="5" />
                <label htmlFor="payment-4">Boleto (em até 2x)</label>
              </span>
              <span className="flex gap-1">
                <input type="radio" id="payment-5" name="paymentType" value="6" />
                <label htmlFor="payment-5">Cheque (em até 2x)</label>
              </span>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-xl font-bold">Em quantas Parcelas?</legend>
            <div className="flex gap-8">
              <span className="flex gap-1">
                <input type="radio" id="parcels-1" name="parcels" value="1"/>
                <label htmlFor="parcels-1">1</label>
              </span>
              <span className="flex gap-1">
                <input type="radio" id="parcels-2" name="parcels" value="2" />
                <label htmlFor="parcels-2">2</label>
              </span>
            </div>
          </fieldset>

          <input
            name="paydate"
            type="text"
            placeholder="Dia de vencimento"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />

          <fieldset>
            <legend className="text-xl font-bold">Tem condução própria?</legend>
            <div className="flex gap-8">
              <span className="flex gap-1">
                <input type="radio" id="has-vehicle-1" name="hasVehicle" value="true" required/>
                <label htmlFor="has-vehicle-1">Sim</label>
              </span>
              <span className="flex gap-1">
                <input type="radio" id="has-vehicle-2" name="hasVehicle" value="false" />
                <label htmlFor="has-vehicle-2">Não</label>
              </span>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-xl font-bold">Se sim, pode dar carona?</legend>
            <div className="flex gap-8">
              <span className="flex gap-1">
                <input type="radio" id="ride-1" name="ride" value="true" required/>
                <label htmlFor="ride-1">Sim</label>
              </span>
              <span className="flex gap-1">
                <input type="radio" id="ride-2" name="ride" value="false" />
                <label htmlFor="ride-2">Não</label>
              </span>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-xl font-bold">Tem interesse em ônibus comum para transporte?</legend>
            <div className="flex gap-8">
              <span className="flex gap-1">
                <input type="radio" id="commom-transport-1" name="busTransport" value="true" required/>
                <label htmlFor="commom-transport-1">Sim</label>
              </span>
              <span className="flex gap-1">
                <input type="radio" id="commom-transport-2" name="busTransport" value="false" />
                <label htmlFor="commom-transport-2">Não</label>
              </span>
            </div>
          </fieldset>

          <input 
            type="text"
            name="observations"
            placeholder="Observações"
            className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
          />
        </div>
      </div>
      <div className="text-center md:text-left">
        <button
          type="submit"
          className="inline-flex items-center gap-2 border-2 rounded-lg border-primary bg-primary px-8 py-5 font-semibold uppercase tracking-wide text-white duration-300 hover:bg-transparent hover:text-primary"
        >
          <span className="text-xl">
            <MdAlternateEmail />
          </span>
          INSCREVER-SE
        </button>
      </div>
    </form>
  );
};

export default SubscribeForm;
