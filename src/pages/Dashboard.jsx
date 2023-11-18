import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

const Dashboard = () => {
  return (
    <main className="grid h-screen grid-cols-[280px_1fr] bg-[#F6F7FB]">
      <DashboardSidebar />
      <div className="h-full">
        <Outlet />
      </div>
    </main>
  );
};

export default Dashboard;
