import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="w-full border-t border-[#ebebeb] pt-10 text-center text-[15px] text-[#151515] md:w-[280px] md:border-l md:border-t-0 md:pl-8 md:pr-3 md:text-left lg:w-[320px] lg:pl-10 lg:pr-8 lg:pt-0">
      <div className="mx-auto max-w-xs border-b border-[#ebebeb] pb-7">
        <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest">
          Follow us
        </h4>
        <div className="inline-flex items-center gap-2 text-lg">
          <a
            href="https://facebook.com/Iamparves"
            target="_blank"
            className="p-1 duration-300 hover:text-primary"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/Iamparves"
            target="_blank"
            className="p-1 duration-300 hover:text-primary"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/iamparves"
            target="_blank"
            className="p-1 duration-300 hover:text-primary"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Iamparves"
            target="_blank"
            className="p-1 duration-300 hover:text-primary"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-xs border-b border-[#ebebeb] py-7">
        <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest">
          Phone
        </h4>
        <a
          href="tel:#"
          className="inline-flex items-center gap-3 duration-300 hover:text-primary"
        >
          <span className="text-xl text-primary">
            <IoMdCall />
          </span>
          +8801723-4567890
        </a>
      </div>
      <div className="mx-auto max-w-xs border-b border-[#ebebeb] py-7">
        <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest">
          E-mail
        </h4>
        <a
          href="mailto:#"
          className="inline-flex items-center gap-3 duration-300 hover:text-primary"
        >
          <span className="text-xl text-primary">
            <MdOutlineMail />
          </span>
          info@puthipallab.com
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
          Sopura, Boalia, Rajshahi
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
