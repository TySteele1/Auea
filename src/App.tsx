import React from 'react';
import './App.css';
import SystemStatus from './modules/SystemStatus';
import ModuleC from './components/ModuleC';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Auea Control Dashboard</h1>
      <SystemStatus />
      <ModuleC />
    </div>
  );
};

export default App;
