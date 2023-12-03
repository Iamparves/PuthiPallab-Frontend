import React from "react";
import ErrorStatusPage from "../components/ErrorStatusPage";

const NotFound = () => (
  <ErrorStatusPage
    title="Page Not Found"
    description="The page you are looking for does not exist or has been moved."
    image="/404-error.png"
  />
);

export default NotFound;
