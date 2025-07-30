// src/GenesisMemoryPort.jsx

import React, { createContext, useState } from 'react';

// Create a context
export const GenesisMemoryContext = createContext();

// Create a provider component
export const GenesisMemoryProvider = ({ children }) => {
  const [memory, setMemory] = useState({
    commandHistory: [],
    userProfile: null,
    systemLog: [],
    genesisStatus: 'initializing',
  });

  const updateMemory = (key, value) => {
    setMemory((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <GenesisMemoryContext.Provider value={{ memory, updateMemory }}>
      {children}
    </GenesisMemoryContext.Provider>
  );
};
