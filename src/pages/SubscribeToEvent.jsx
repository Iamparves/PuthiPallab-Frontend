import React from "react";
import Hero from "../components/Hero";

import ScrollToTop from "../components/ScrollToTop";
import SubscribeForm from "../components/SubscribeForm";


const SubscribeToEvent = () => {
  return (
    <main className="bg-white">
      <ScrollToTop />
      <Hero />

      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-3xl font-bold mb-8 uppercase">Inscrição: Encontro de casais</h1>
        <SubscribeForm />
      </div>
    </main>
  );
};

export default SubscribeToEvent;
