// src/components/TelemetryPanel.jsx

import React from "react";
import useTelemetry from "../handler/TelemetryHandler";
import { formatTimestamp } from "../handler/TelemetryUtils";

const TelemetryPanel = () => {
  const data = useTelemetry();

  if (!data) return <div className="p-4">Loading telemetry...</div>;

  return (
    <div className="p-4 border rounded-xl shadow-md bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">System Telemetry</h2>
      <ul className="space-y-2">
        <li><strong>Status:</strong> {data.status}</li>
        <li><strong>Timestamp:</strong> {formatTimestamp(data.timestamp)}</li>
        <li><strong>CPU Usage:</strong> {data.cpuUsage}</li>
        <li><strong>Memory Usage:</strong> {data.memoryUsage}</li>
      </ul>
    </div>
  );
};

export default TelemetryPanel;
