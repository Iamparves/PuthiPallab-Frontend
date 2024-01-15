import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail, MdOutlinePhone, MdOutlineWhatsapp } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="w-full border-t border-[#ebebeb] pt-10 text-center text-[15px] text-[#151515] md:w-[280px] md:border-l md:border-t-0 md:pl-8 md:pr-3 md:text-left lg:w-[320px] lg:pl-10 lg:pr-8 lg:pt-0">
      <div className="mx-auto max-w-xs border-b border-[#ebebeb] pb-7">
        <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest">
          Siga-nos nas redes sociais
        </h4>
        <div className="inline-flex items-center gap-2 text-lg">
          <a
            href="https://www.facebook.com/ibfarol"
            target="_blank"
            className="p-1 duration-300 hover:text-primary"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/ibfarol?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="p-1 duration-300 hover:text-primary"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@IgrejaBatistadoFarol/streams"
            target="_blank"
            className="p-1 duration-300 hover:text-primary"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-xs border-b border-[#ebebeb] py-7">
        <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest">
          Phone
        </h4>
        <a
          href="tel:8292210070"
          className="inline-flex items-center gap-3 duration-300 hover:text-primary"
        >
          <span className="text-xl text-primary">
            <MdOutlinePhone />
          </span>
          (82) 3221-0070
        </a>
        <a
          href="https://api.whatsapp.com/send?1=pt_BR&phone=5582999330577"
          target="_blank"
          className="inline-flex items-center gap-3 duration-300 hover:text-primary"
        >
          <span className="text-xl text-primary">
            <MdOutlineWhatsapp />
          </span>
          (82) 99933-0577
        </a>
      </div>
      <div className="mx-auto max-w-xs border-b border-[#ebebeb] py-7">
        <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest">
          E-mail
        </h4>
        <a
          href="mailto:faleconosco@ibfarol.com.br"
          className="inline-flex items-center gap-3 duration-300 hover:text-primary"
        >
          <span className="text-xl text-primary">
            <MdOutlineMail />
            
          </span>
          faleconosco@ibfarol.com.br
        </a>
      </div>
      <div className="mx-auto max-w-xs pt-7">
        <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest">
          Address
        </h4>
        <p className="inline-flex items-center gap-3">
          <span className="text-xl text-primary">
            <IoLocationSharp />
          </span>
          AV DOM ANTÔNIO BRANDÃO, 90, FAROL
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
