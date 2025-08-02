import React, { useEffect, useState } from "react";
import { useMAK } from "@/core/auraKernel";
import VSTL from "@/core/VSTL";

const DashboardPanel = () => {
  const { userRole, fetchSystemData } = useMAK("dashboardpanel");
  const [data, setData] = useState(null);
  const [telemetry, setTelemetry] = useState("Waiting...");

  useEffect(() => {
    fetchSystemData().then((res) => {
      setData(res);
      setTelemetry(`Data loaded at ${new Date().toLocaleTimeString()}`);
    });
  }, []);

  return (
    <div className="p-4 rounded-2xl shadow bg-white">
      <h2 className="text-xl font-bold mb-3">System DashboardPanel</h2>
      <p>User Role: <span className="font-semibold text-purple-600">{userRole}</span></p>
      <div className="mt-3">
        <pre className="bg-gray-100 p-3 rounded-xl">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
      <VSTL signal={telemetry} module="DashboardPanel" />
    </div>
  );
};

export default DashboardPanel;
