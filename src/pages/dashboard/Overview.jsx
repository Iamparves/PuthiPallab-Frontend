import React from "react";
import DashboardHeader from "../../components/DashboardHeader";
import LibrarianOverview from "../../components/LibrarianOverview";
import MemberOverview from "../../components/MemberOverview";
import { useStore } from "../../store";

const Overview = () => {
  const user = useStore((state) => state.user);

  return (
    <>
      <DashboardHeader title="Overview" desc="Get a comprehensive snapshot" />
      {user.role === "librarian" ? <LibrarianOverview /> : <MemberOverview />}
    </>
  );
};

export default Overview;
