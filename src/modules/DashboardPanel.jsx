import React, { useState } from 'react';
import SystemStatus from './Modules/SystemStatus';
import ActivityLog from './ActivityLog';
import UserProgress from '../components/UserProgress';
import Diagnostics from '../components/Diagnostics';
import Telemetry from '../components/Telemetry';

const Dashboard = () => {
  const [viewMode, setViewMode] = useState('tabs'); // 'tabs' or 'grid'

  const modules = [
    { name: 'System Status', component: <SystemStatus /> },
    { name: 'Activity Log', component: <ActivityLog /> },
    { name: 'User Progress', component: <UserProgress /> },
    { name: 'Diagnostics', component: <Diagnostics /> },
    { name: 'Telemetry', component: <Telemetry /> },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <header className="text-3xl font-bold text-emerald-300 border-b border-emerald-500 pb-4 mb-6">
        Dashboard Panel
      </header>

      <div className="flex justify-end mb-4">
        <button
          className={`px-4 py-2 rounded-l ${
            viewMode === 'tabs' ? 'bg-emerald-600' : 'bg-gray-700'
          }`}
          onClick={() => setViewMode('tabs')}
        >
          Tabs
        </button>
        <button
          className={`px-4 py-2 rounded-r ${
            viewMode === 'grid' ? 'bg-emerald-600' : 'bg-gray-700'
          }`}
          onClick={() => setViewMode('grid')}
        >
          Grid
        </button>
      </div>

      {viewMode === 'tabs' ? (
        <div className="space-y-6">
          {modules.map(({ name, component }, idx) => (
            <div
              key={idx}
              className="border border-emerald-600 p-4 rounded shadow-lg"
            >
              <h2 className="text-xl font-semibold text-emerald-400 mb-2">
                {name}
              </h2>
              {component}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map(({ component }, idx) => (
            <div
              key={idx}
              className="border border-emerald-600 p-4 rounded shadow-lg"
            >
              {component}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
