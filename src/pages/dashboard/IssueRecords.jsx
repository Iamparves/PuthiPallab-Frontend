import { useQuery } from "@tanstack/react-query";
import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import IssueRecordTable from "../../components/IssueRecordTable";
import Spinner from "../../components/Spinner";
import { useStore } from "../../store";
import { getAllIssues, getMyIssues } from "../../utils/apiRequest";

const IssueRecords = () => {
  const user = useStore((state) => state.user);
  const isLibrarian = user?.role === "librarian";

  const queryKey = isLibrarian
    ? ["issues", "librarian"]
    : ["issues", "member", user._id];

  const issuesQuery = useQuery({
    queryKey: queryKey,
    queryFn: () => {
      if (isLibrarian) return getAllIssues(`?sort=-updatedAt`);

      return getMyIssues(`?sort=-updatedAt`);
    },
  });

  return (
    <>
      <DashboardHeader
        title={isLibrarian ? "Issue Records" : "Borrow Records"}
        desc={`Track All ${isLibrarian ? "Issue" : "Borrow"}-Return History`}
      />
      <section className="h-[calc(100vh-80px)] overflow-y-auto p-3 sm:p-5 xl:p-10">
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {issuesQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                Issue Records Loading...
              </p>
            </div>
          )}
          {issuesQuery.isError && <p>Error: {issuesQuery.error.message}</p>}
          {!issuesQuery.isLoading && !issuesQuery.isError && (
            <IssueRecordTable
              data={issuesQuery.data}
              isLibrarian={isLibrarian}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default IssueRecords;
