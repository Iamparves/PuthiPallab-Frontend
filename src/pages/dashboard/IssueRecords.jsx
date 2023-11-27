import { useQuery } from "@tanstack/react-query";
import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import IssueRecordTable from "../../components/IssueRecordTable";
import Spinner from "../../components/Spinner";
import { getAllIssues } from "../../utils/apiRequest";

const IssueRecords = () => {
  const issuesQuery = useQuery({
    queryKey: ["issues"],
    queryFn: () => getAllIssues(`?sort=-updatedAt`),
  });

  return (
    <>
      <DashboardHeader
        title="Issue Records"
        desc="Track All Issue-Return History"
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
            <IssueRecordTable data={issuesQuery.data} />
          )}
        </div>
      </section>
    </>
  );
};

export default IssueRecords;
