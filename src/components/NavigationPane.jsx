import React from 'react';

const NavigationPane = () => {
  return (
    <nav className="w-64 h-full bg-gray-900 text-white p-4 shadow-xl">
      <h3 className="text-xl mb-4">Navigation</h3>
      <ul className="space-y-2">
        <li>📦 Dashboard</li>
        <li>🧠 Command Center</li>
        <li>🔐 Access Control</li>
        <li>📊 Telemetry</li>
      </ul>
    </nav>
  );
};

export default NavigationPane;
