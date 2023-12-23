import React from "react";
import toast from "react-hot-toast";
import { MdAlternateEmail } from "react-icons/md";
import { sendContactMessage } from "../utils/apiRequest";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending message...");

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const result = await sendContactMessage(data);

    if (result?.status === "success") {
      toast.success(result.message, { id: toastId });
    } else {
      toast.error(result.message, { id: toastId });
    }

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-3 sm:space-y-5">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-1 lg:grid-cols-2">
        <input
          name="name"
          type="text"
          placeholder="Your Name*"
          required
          className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email*"
          required
          className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
        />
      </div>
      <input
        name="subject"
        type="text"
        placeholder="Subject"
        className="w-full border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Message*"
        required
        className="h-40 w-full resize-none border border-[#e1e1e1] px-6 py-5 text-[15px] transition-colors duration-200 focus:border-primary focus:outline-none"
      ></textarea>
      <div className="text-center md:text-left">
        <button
          type="submit"
          className="inline-flex items-center gap-2 border-2 border-primary bg-primary px-8 py-5 font-semibold uppercase tracking-wide text-white duration-300 hover:bg-transparent hover:text-primary"
        >
          <span className="text-xl">
            <MdAlternateEmail />
          </span>
          Contact us
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
