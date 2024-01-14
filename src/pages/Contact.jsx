import React from "react";
import HomeContact from "../components/HomeContact";
import ScrollToTop from "../components/ScrollToTop";
import TopBanner from "../components/TopBanner";

const Contact = () => {
  return (
    <main className="bg-white">
      <ScrollToTop />
      <TopBanner title="Contact" background="bg-[url(/contact-top.jpg)]" />
      <HomeContact />
      <section className="bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15732.975731320632!2d-35.7331838!3d-9.6601867!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145826fac042d%3A0xe60fead903d51b69!2sIgreja%20Batista%20do%20Farol!5e0!3m2!1spt-BR!2sbr!4v1705257402510!5m2!1spt-BR!2sbr"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[70vh] min-h-[300px] w-full border-0 xl:min-h-[400px]"
        ></iframe>
      </section>
    </main>
  );
};

export default Contact;
