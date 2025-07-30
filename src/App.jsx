import React from 'react';
import TelemetryPanel from './components/TelemetryPanel';
import FileTree from './debug/FileTree';

function App() {
  return (
    <div className="app-container">
      <h1>Debug Snapshot</h1>
      <FileTree />
      <TelemetryPanel />
    </div>
  );
}

export default App;
