import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const HomeContact = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:gap-8">
          <div>
            <h2 className="mb-12 text-4xl font-bold text-[#151515]">
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
