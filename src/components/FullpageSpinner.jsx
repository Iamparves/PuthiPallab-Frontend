import React from "react";
import Spinner from "./Spinner";

const FullpageSpinner = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <Spinner width="w-14" height="h-14" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default FullpageSpinner;
