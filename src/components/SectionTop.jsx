import React from "react";

const SectionTop = ({ title, letter }) => {
  return (
    <div className="relative z-10 text-center">
      <h2 className="text-3xl font-bold uppercase text-primary sm:text-4xl lg:text-[40px]">
        {title}
      </h2>
      <h3 className="absolute left-1/2 top-1/2 z-[-1] -translate-x-1/2 -translate-y-1/2 text-6xl font-semibold uppercase text-[#FDE9D0]/80 sm:text-7xl lg:text-8xl">
        {letter}
      </h3>
    </div>
  );
};

export default SectionTop;
