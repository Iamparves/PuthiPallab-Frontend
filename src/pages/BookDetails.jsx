import React from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  return <div>BookDetails {bookId}</div>;
};

export default BookDetails;
