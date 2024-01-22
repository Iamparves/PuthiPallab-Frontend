import React from "react";
import { useNavigate } from "react-router-dom";

// import TopBanner from "../components/TopBanner";
import Carrossel from "../components/Carrossel";

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
  <Carrossel />
</section>

  );
};

export default Hero;
