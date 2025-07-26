import React, { useEffect, useState } from 'react';

const TelemetryOverlay = ({ logs = [] }) => {
  const [visible, setVisible] = useState(true);
  const [logFeed, setLogFeed] = useState(logs);

  useEffect(() => {
    const handleLogEvent = (e) => {
      const newLog = e.detail;
      setLogFeed((prev) => [...prev.slice(-49), newLog]);
    };

    window.addEventListener('telemetry-log', handleLogEvent);
    return () => window.removeEventListener('telemetry-log', handleLogEvent);
  }, []);

  if (!visible) {
    return (
      <div className="fixed bottom-2 right-2 z-50">
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded shadow-lg"
          onClick={() => setVisible(true)}
        >
          Open Telemetry
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 right-0 w-[400px] h-[300px] bg-black bg-opacity-80 text-green-300 p-2 z-50 rounded-tl-xl shadow-xl flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-sm font-bold">Telemetry Overlay</h2>
        <button
          className="text-red-400 hover:text-white"
          onClick={() => setVisible(false)}
        >
          ✕
        </button>
      </div>
      <div className="overflow-y-auto text-xs whitespace-pre font-mono flex-1 border-t border-green-700 pt-2">
        {logFeed.map((log, idx) => (
          <div key={idx} className="mb-1">
            {log}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TelemetryOverlay;
