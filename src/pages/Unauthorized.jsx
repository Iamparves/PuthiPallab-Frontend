import React from "react";
import ErrorStatusPage from "../components/ErrorStatusPage";

const Unauthorized = () => (
  <ErrorStatusPage
    title="Unauthorized"
    description="You do not have permission to access the requested page."
    image="/401-error.png"
  />
);

export default Unauthorized;
