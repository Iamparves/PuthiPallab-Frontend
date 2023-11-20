import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <main>
      <section>
        <h1>Unauthorized</h1>
        <p>You do not have permission to access the requested page.</p>
        <button onClick={goBack}>Go Back</button>
      </section>
    </main>
  );
};

export default Unauthorized;
