import React from "react";

const TopBanner = ({ title, background }) => {
  return (
    <section className={`${background} bg-cover bg-center bg-no-repeat`}>
      <div className="w-full bg-black/60">
        <div className="container py-14 text-center lg:py-20">
          <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
          <div className="mx-auto mt-5 h-[3px] w-20 rounded-md bg-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
