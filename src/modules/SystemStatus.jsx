import React, { useState } from "react";
import VSTL from "@/core/VSTL";

const SystemStatus = () => {
  const [status, setStatus] = useState("Operational");

  const handleUpdate = () => {
    setStatus("Updated @ " + new Date().toLocaleTimeString());
  };

  return (
    <div className="p-4 rounded-2xl shadow bg-white">
      <h2 className="text-xl font-bold mb-3">System Status</h2>
      <p>Current Status: <span className="font-semibold text-green-700">{status}</span></p>
      <button
        onClick={handleUpdate}
        className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-xl"
      >
        Update Status
      </button>
      <VSTL signal={status} module="SystemStatus" />
    </div>
  );
};

export default SystemStatus;
