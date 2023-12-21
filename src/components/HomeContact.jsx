import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const HomeContact = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:gap-8 lg:items-start">
          <div>
            <h2 className="mb-8 text-3xl font-bold text-[#151515] md:text-[32px] lg:mb-12 lg:text-4xl">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
