import React from "react";
import { useNavigate } from "react-router-dom";

import TopBanner from "../components/TopBanner";

const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const keyword = e.target.search.value;
    if (keyword === "") return;

    navigate(`/books?search=${keyword}`);
  };

  return (
<section>
  <TopBanner title="Igreja Batista do Farol" background="bg-[url(/igreja/frente_igreja_completo.webp)]" />
</section>

  );
};

export default Hero;
