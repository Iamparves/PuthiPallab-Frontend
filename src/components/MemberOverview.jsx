import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useStore } from "../store";
import { getMemberOverview } from "../utils/apiRequest";
import MemberOverviewCards from "./MemberOverviewCards";
import OverviewIssueRecord from "./OverviewIssueRecord";
import Spinner from "./Spinner";

const MemberOverview = () => {
  const user = useStore((state) => state.user);

  const overviewQuery = useQuery({
    queryKey: ["overview", "member", user?._id],
    queryFn: getMemberOverview,
  });

  return (
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
            <MemberOverviewCards overview={overviewQuery.data?.data} />
            <OverviewIssueRecord />
          </>
        )}
      </div>
    </section>
  );
};

export default MemberOverview;
