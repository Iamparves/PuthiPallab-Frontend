import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-5 shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
      <div className="container text-center">
        <p className="text-xs text-[#999] sm:text-sm">
          &copy; {new Date().getFullYear()} Igreja Batista do Farol (82) 3221-0070
        </p>
      </div>
    </footer>
  );
};

export default Footer;
