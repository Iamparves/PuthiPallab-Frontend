import React from "react";
import HomeContact from "../components/HomeContact";
import TopBanner from "../components/TopBanner";

const Contact = () => {
  return (
    <main className="bg-white">
      <TopBanner title="Contact" background="bg-[url(/contact-top.jpg)]" />
      <HomeContact />
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.0618343471733!2d88.60403457599317!3d24.379152264346946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbee4db10be455%3A0xc6ee56098bd61ee9!2sRajshahi%20Polytechnic%20Institute!5e0!3m2!1sen!2sbd!4v1703224471085!5m2!1sen!2sbd"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="h-[70vh] w-full border-0"
        ></iframe>
      </section>
    </main>
  );
};

export default Contact;
