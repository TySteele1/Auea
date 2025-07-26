import React from 'react';
import telemetry from "../utils/telemetry";  // ✅ relative path


useEffect(() => {
  telemetry.debug('SystemStatus module mounted.', 'SystemStatus');
}, []);

const checkSystemHealth = () => {
  telemetry.trace('System health check triggered.', 'SystemStatus');
  // existing health logic...
};

export default function SystemStatus() {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold">Status: Online ✅</h2>
    </div>
  );
}
