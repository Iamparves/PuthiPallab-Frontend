import React, { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import ReturnBookDetails from "../../components/ReturnBookDetails";
import ReturnBookForm from "../../components/ReturnBookForm";

const ReturnBook = () => {
  const [fine, setFine] = useState(0);
  const [issue, setIssue] = useState({});

  return (
    <>
      <DashboardHeader title="Return Book" desc="Record book returns" />
      <section className="h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden p-3 sm:p-5 xl:p-10">
        <div className="mx-auto grid max-w-lg grid-cols-1 gap-3 md:max-w-2xl xl:max-w-7xl xl:grid-cols-[auto_1fr] xl:gap-5 2xl:grid-cols-[460px_1fr]">
          <ReturnBookForm issue={issue} setIssue={setIssue} fine={fine} />
          <ReturnBookDetails issue={issue} setFine={setFine} />
        </div>
      </section>
    </>
  );
};

export default ReturnBook;
