import { useQuery } from "@tanstack/react-query";
import React from "react";
import DashUserTable from "../../components/DashUserTable";
import DashboardHeader from "../../components/DashboardHeader";
import Spinner from "../../components/Spinner";
import { getAllUsers } from "../../utils/apiRequest";

const Users = () => {
  const userQuery = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsers(),
  });

  return (
    <>
      <DashboardHeader title="Users" desc="Efficiently oversee user accounts" />
      <section className="h-[calc(100vh-80px)] overflow-y-auto p-3 sm:p-5 xl:p-10">
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {userQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">Users Loading...</p>
            </div>
          )}
          {userQuery.isError && <p>Error: {userQuery.error.message}</p>}
          {!userQuery.isLoading && !userQuery.isError && (
            <DashUserTable data={userQuery.data} />
          )}
        </div>
      </section>
    </>
  );
};

export default Users;
