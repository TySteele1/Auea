import React from "react";
import DashboardPanel from "@/modules/DashboardPanel";
import AdminPanel from "@/modules/AdminPanel";
import SystemStatus from "@/modules/SystemStatus";

const App = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 min-h-screen">
      <DashboardPanel />
      <AdminPanel />
      <SystemStatus />
    </div>
  );
};

export default App;
