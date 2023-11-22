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
      <section className="h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden p-3 sm:p-5 xl:p-10">
        <div className="mx-auto grid max-w-lg grid-cols-1 gap-3 md:max-w-none md:grid-cols-2 xl:gap-5 2xl:grid-cols-3">
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
