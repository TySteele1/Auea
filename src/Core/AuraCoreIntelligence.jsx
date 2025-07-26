// src/core/AuraCoreIntelligence.jsx

import React, { useEffect, useState } from 'react';
import { getSystemHealth } from './SystemIntegrityLayer';

const AuraCoreIntelligence = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const generateSelfReport = async () => {
      const systemStatus = await getSystemHealth();

      const suggestions = [];
      const actions = [];

      if (!systemStatus.dashboardLoaded) {
        suggestions.push(
          'Dashboard module not fully initialized. Consider wiring DashboardPanel.js'
        );
        actions.push('Wire DashboardPanel.jsx to App.jsx');
      }

      if (!systemStatus.adminPanelActive) {
        suggestions.push(
          'Admin Panel status is inactive. Check if Admin routes and logic are mounted.'
        );
        actions.push('Verify AdminModule.jsx integration');
      }

      if (!systemStatus.userInputSync) {
        suggestions.push(
          'Input/Output synchronization missing. Portal Input Bridge may need activation.'
        );
        actions.push('Initialize SubSpaceInputController.jsx');
      }

      if (!systemStatus.VSTLRunning) {
        suggestions.push(
          'Visual System Telemetry Layer is offline. Activate for real-time system feedback.'
        );
        actions.push('Mount VSTLDisplayModule.jsx to AdminView');
      }

      setReport({
        status: systemStatus,
        suggestions,
        actions,
      });
    };

    generateSelfReport();
  }, []);

  return (
    <div className="bg-gray-900 text-green-400 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-2">Aura STREAM Self-Directive</h2>
      {report ? (
        <div>
          <h3 className="text-lg font-semibold">What I Need Now:</h3>
          <ul className="list-disc list-inside">
            {report.suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mt-4">Recommended Actions:</h3>
          <ul className="list-disc list-inside">
            {report.actions.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Running diagnostics...</p>
      )}
    </div>
  );
};

export default AuraCoreIntelligence;
