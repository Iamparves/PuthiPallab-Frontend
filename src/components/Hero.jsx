import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const keyword = e.target.search.value;
    if (keyword === "") return;

    navigate(`/books?search=${keyword}`);
  };

  return (
<section className="bg-[url(/hero-bg.svg)] bg-contain bg-right-top bg-no-repeat py-10 lg:py-20 2xl:py-32">
  <div className="mx-auto max-w-xl lg:max-w-full">
    <div className="container grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-20">
      <div className="max-w-xl text-center lg:text-left">
        <div className="lg:text-right"> {/* Adicionando a classe lg:text-right */}
          <h1 className="mb-5 text-4xl font-bold text-[#1d1d1d] lg:text-[40px] xl:text-5xl xl:leading-tight">
            <span className="text-primary text-[#4169E1]">Igreja</span> Batista
            <br />
            do <span className="text-primary text-[#4169E1]">Farol</span>
          </h1>
          <p className="mb-5 text-base text-gray-500 xl:text-lg">
            Uma igreja forte e ativa
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;
