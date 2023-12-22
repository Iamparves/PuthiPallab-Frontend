import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-5 shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
      <div className="container text-center">
        <p className="text-xs text-[#999] sm:text-sm">
          &copy; {new Date().getFullYear()} Puthi Pallab Library. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
