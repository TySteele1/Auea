import React, { createContext, useContext, useState, useEffect } from 'react';

// Create AuraKernel Context
const AuraKernelContext = createContext();

export const AuraKernelProvider = ({ children, coreApiUrl }) => {
  const [localState, setLocalState] = useState(() => {
    // Try to restore local cache from localStorage as fallback
    const saved = localStorage.getItem('auraKernelState');
    return saved ? JSON.parse(saved) : {};
  });

  // Sync localState to localStorage on change
  useEffect(() => {
    localStorage.setItem('auraKernelState', JSON.stringify(localState));
  }, [localState]);

  // Example: Sync local state with Core API every 5 seconds
  useEffect(() => {
    if (!coreApiUrl) return;

    const syncWithCore = async () => {
      try {
        // Send localState to core
        await fetch(`${coreApiUrl}/sync`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(localState),
        });
        // Fetch updated state from core
        const res = await fetch(`${coreApiUrl}/state`);
        if (res.ok) {
          const coreState = await res.json();
          setLocalState((prev) => ({ ...prev, ...coreState }));
        }
      } catch (error) {
        console.warn('AuraKernel sync error:', error);
      }
    };

    const intervalId = setInterval(syncWithCore, 5000);
    return () => clearInterval(intervalId);
  }, [localState, coreApiUrl]);

  // Provide localState and setter to consumers
  return (
    <AuraKernelContext.Provider value={{ localState, setLocalState }}>
      {children}
    </AuraKernelContext.Provider>
  );
};

// Custom hook to consume AuraKernel context
export const useAuraKernel = () => {
  const context = useContext(AuraKernelContext);
  if (!context) {
    throw new Error('useAuraKernel must be used within AuraKernelProvider');
  }
  return context;
};
