import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Modal = ({ children, title }) => {
  const navigate = useNavigate();

  const closeModal = (e) => {
    if (e.target.closest(".modalCard")) return;
    navigate(-1);
  };

  return (
    <div
      className="fixed left-0 top-0 z-[99] flex h-screen w-full items-center justify-center bg-[#1d1d1d]/30 backdrop-blur-[4px]"
      onClick={closeModal}
    >
      <div className="modalCard max-h-full w-auto max-w-full overflow-y-auto overflow-x-hidden rounded-md bg-white">
        <div className="flex items-center justify-between gap-10 border-b border-gray-200/70 px-3 py-3 sm:px-5">
          <h2 className="text-lg font-semibold text-[#1d1d1d]">{title}</h2>
          <button
            className="text-2xl text-red-500"
            onClick={() => navigate(-1)}
          >
            <MdOutlineClose />
          </button>
        </div>
        <div className="max-h-[calc(100vh-100px)]">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
