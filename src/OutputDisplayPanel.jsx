import React from "react";
import { useGenesisMemoryPort } from "./GenesisMemoryPort";

export default function OutputDisplayPanel() {
  const { memoryLog } = useGenesisMemoryPort();

  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold mb-2">Memory Output:</h3>
      <ul className="space-y-1 max-h-48 overflow-y-auto">
        {memoryLog.map((log, index) => (
          <li key={index} className="text-sm">
            <span className="text-green-500">{log.timestamp}:</span> {log.entry}
          </li>
        ))}
      </ul>
    </div>
  );
}
