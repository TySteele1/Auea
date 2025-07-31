import React from 'react';
import { AuraKernelProvider, useAuraKernel } from './AuraKernel';

const ModuleCInner = () => {
  const { localState, setLocalState } = useAuraKernel();

  // Example: Update some state in kernel on button click
  const updateState = () => {
    setLocalState({ ...localState, lastUpdate: new Date().toISOString() });
  };

  return (
    <div>
      <h3>Module C</h3>
      <p>Last update: {localState.lastUpdate || 'Never'}</p>
      <button onClick={updateState}>Update State</button>
    </div>
  );
};

const ModuleC = () => {
  // Provide your Core API URL here
  const coreApiUrl = 'http://localhost:4000/api'; // example, adjust when core is deployed

  return (
    <AuraKernelProvider coreApiUrl={coreApiUrl}>
      <ModuleCInner />
    </AuraKernelProvider>
  );
};

export default ModuleC;
