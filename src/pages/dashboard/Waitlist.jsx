import { useQuery } from "@tanstack/react-query";
import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import Spinner from "../../components/Spinner";
import WaitlistTable from "../../components/WaitlistTable";
import { getAllWaitlist } from "../../utils/apiRequest";

const Waitlist = () => {
  const waitlistQuery = useQuery({
    queryKey: ["waitlist"],
    queryFn: () => getAllWaitlist(),
  });

  return (
    <>
      <DashboardHeader title="Waitlist" desc="Books people are waiting for" />
      <section className="h-[calc(100vh-80px)] overflow-y-auto p-3 sm:p-5 xl:p-10">
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {waitlistQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                waitlist Loading...
              </p>
            </div>
          )}
          {waitlistQuery.isError && <p>Error: {waitlistQuery.error.message}</p>}
          {!waitlistQuery.isLoading && !waitlistQuery.isError && (
            <WaitlistTable data={waitlistQuery.data} />
          )}
        </div>
      </section>
    </>
  );
};

export default Waitlist;
