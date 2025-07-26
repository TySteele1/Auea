import React from 'react';

const ModuleDisplayRouter = ({ activeModule }) => {
  return (
    <div className="p-4">
      <h2 className="font-bold text-gray-700">📦 Active Module:</h2>
      <div className="mt-2">
        {/* TODO: Dynamically load/render selected module */}
        {activeModule || 'None selected.'}
      </div>
    </div>
  );
};

export default ModuleDisplayRouter;
