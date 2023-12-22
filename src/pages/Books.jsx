import React from "react";
import TopBanner from "../components/TopBanner";

const Books = () => {
  return (
    <main className="bg-white">
      <TopBanner title="Books" background="bg-[url(/books-top.jpg)]" />
      <section>
        <div className="container grid grid-cols-1"></div>
      </section>
    </main>
  );
};

export default Books;
