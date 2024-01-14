import React from "react";
import toast from "react-hot-toast";
import { MdAlternateEmail } from "react-icons/md";
import { sendContactMessage } from "../utils/apiRequest";

const SubscribeForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending message...");

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      cpf: e.target.cpf.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };

    //const result = await sendContactMessage(data);

    if (result?.status === "success") {
      toast.success(result.message, { id: toastId });
    } else {
      toast.error(result.message, { id: toastId });
    }

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-3 sm:space-y-5">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-1">
        <input
          name="name"
          type="text"
          placeholder="Nome Completo"
          required
          className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
        />
      </div>
      <input
        name="cpf"
        type="text"
        placeholder="CPF"
        className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
      />
      <input
        name="address"
        type="text"
        placeholder="Endereço"
        className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
      />
      <input
        name="phone"
        type="text"
        placeholder="Número para contato"
        className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
      />
      <div className="text-center md:text-left">
        <button
          type="submit"
          className="inline-flex items-center gap-2 border-2 border-primary bg-primary px-8 py-5 font-semibold uppercase tracking-wide text-white duration-300 hover:bg-transparent hover:text-primary"
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
