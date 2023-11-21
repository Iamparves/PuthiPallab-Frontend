import React, { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import IssueBookDetails from "../../components/IssueBookDetails";
import IssueBookForm from "../../components/IssueBookForm";
import IssueUserDetails from "../../components/IssueUserDetails";

const IssueBook = () => {
  const [book, setBook] = useState({});
  const [user, setUser] = useState({});

  return (
    <>
      <DashboardHeader title="Issue Book" desc="Issue books to members" />
      <section className="h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden p-3 sm:p-5 lg:p-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <IssueBookForm
            book={book}
            setBook={setBook}
            user={user}
            setUser={setUser}
          />
          <IssueBookDetails book={book} />
          <IssueUserDetails user={user} />
        </div>
      </section>
    </>
  );
};

export default IssueBook;
