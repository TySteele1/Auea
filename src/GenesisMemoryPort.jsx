import { createContext, useContext, useState, useCallback } from 'react';

const GenesisMemoryContext = createContext();

export function GenesisMemoryProvider({ children }) {
  const [memoryLog, setMemoryLog] = useState([]);

  const appendMemory = useCallback((entry) => {
    const timestamp = new Date().toLocaleTimeString();
    setMemoryLog((prevLog) => [...prevLog, { entry, timestamp }]);
  }, []);

  const clearMemory = useCallback(() => {
    setMemoryLog([]);
  }, []);

  return (
    <GenesisMemoryContext.Provider
      value={{ memoryLog, appendMemory, clearMemory }}
    >
      {children}
    </GenesisMemoryContext.Provider>
  );
}

export function useGenesisMemoryPort() {
  const context = useContext(GenesisMemoryContext);
  if (!context) {
    throw new Error(
      'useGenesisMemoryPort must be used within a GenesisMemoryProvider'
    );
  }
  return context;
}
