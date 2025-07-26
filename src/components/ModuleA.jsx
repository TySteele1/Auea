// ModuleA.jsx

import React from 'react';
import SystemStatus from './components/Modules/SystemStatus';

const ModuleA = () => {
  const status = 'Online'; // This can be dynamic later

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-4">Module A</h1>
      <SystemStatus status={status} />
    </div>
  );
};

export default ModuleA;
