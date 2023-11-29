import { useQuery } from "@tanstack/react-query";
import React from "react";
import DashOverviewCards from "../../components/DashOverviewCards";
import DashboardHeader from "../../components/DashboardHeader";
import OverviewIssueRecord from "../../components/OverviewIssueRecord";
import Spinner from "../../components/Spinner";
import { getLibrarianOverview } from "../../utils/apiRequest";

const Overview = () => {
  const overviewQuery = useQuery({
    queryKey: ["librarian_overview"],
    queryFn: getLibrarianOverview,
  });

  return (
    <>
      <DashboardHeader title="Overview" desc="Get a comprehensive snapshot" />
      <section className="h-[calc(100vh-80px)] overflow-y-auto p-3 sm:p-5 xl:p-10">
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {overviewQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                Overview Loading...
              </p>
            </div>
          )}
          {overviewQuery.isError && <p>Error: {overviewQuery.error.message}</p>}
          {!overviewQuery.isLoading && !overviewQuery.isError && (
            <>
              <DashOverviewCards overview={overviewQuery.data?.data} />
              <OverviewIssueRecord />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Overview;
