import React from 'react';
import { GenesisMemoryProvider } from './GenesisMemoryPort';
import SystemStatus from './Modules/SystemStatus';
import InputCommandPanel from './InputCommandPanel';
import OutputDisplayPanel from './OutputDisplayPanel';
import GenesisOverlay from './GenesisOverlay';
import VSTL from './VSTL';
import ModuleC from './Modules/ModuleC';
import telemetry from './utils/telemetry'; // assuming it's in src/utils
import ModuleD from './Modules/ModuleD';

useEffect(() => {
  telemetry.info('App mounted. Telemetry system initialized.', 'App');
}, []);

export default function App() {
  return (
    <GenesisMemoryProvider>
      <div className="min-h-screen bg-black text-green-400 font-mono p-4 space-y-4">
        <GenesisOverlay />
        <SystemStatus />
        <InputCommandPanel />
        <OutputDisplayPanel />
        <VSTL />
        <ModuleC />
        <ModuleD />
        <telemetry />
      </div>
    </GenesisMemoryProvider>
  );
}
