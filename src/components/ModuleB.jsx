// components/ModuleB.jsx
import React from 'react';

const ModuleB = () => {
  return (
    <div className="p-6 bg-yellow-100 text-yellow-900 rounded-2xl shadow-lg w-full max-w-md text-center border-2 border-yellow-300">
      <h2 className="text-2xl font-bold mb-2">System Telemetry</h2>
      <ul className="text-left text-lg list-disc list-inside">
        <li>Memory Sync: Normal</li>
        <li>Uplink: Stable</li>
        <li>Latency: 14ms</li>
        <li>Pulse Integrity: Optimal</li>
      </ul>
    </div>
  );
};

export default ModuleB;
