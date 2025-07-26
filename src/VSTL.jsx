import React from 'react';
import { useGenesisMemoryPort } from './GenesisMemoryPort';

export default function VSTL() {
  const { memoryLog } = useGenesisMemoryPort();

  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-md mt-4">
      <h4 className="text-md font-bold mb-2">System Telemetry Active</h4>
      <div className="text-sm">
        Memory Entries: {memoryLog.length}
        <ul className="mt-2 space-y-1">
          {memoryLog.slice(-3).map((log, i) => (
            <li key={i}>
              {log.timestamp}: {log.entry}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
