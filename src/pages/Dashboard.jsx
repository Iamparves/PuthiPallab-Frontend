import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="grid h-screen grid-cols-1 bg-[#F6F7FB] lg:grid-cols-[280px_1fr]">
      <DashboardSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="h-full w-full overflow-hidden">
        <Outlet context={[sidebarOpen, setSidebarOpen]} />
      </div>
    </main>
  );
};

export default Dashboard;
