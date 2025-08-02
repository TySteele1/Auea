// src/core/AuraKernelProvider.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuraKernelContextType {
  localState: Record<string, any>;
  setLocalState: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

const AuraKernelContext = createContext<AuraKernelContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
  coreApiUrl?: string;
}

export const AuraKernelProvider = ({ children, coreApiUrl }: Props) => {
  const [localState, setLocalState] = useState(() => {
    const saved = localStorage.getItem("auraKernelState");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("auraKernelState", JSON.stringify(localState));
  }, [localState]);

  useEffect(() => {
    if (!coreApiUrl) return;

    const syncWithCore = async () => {
      try {
        await fetch(`${coreApiUrl}/sync`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(localState),
        });

        const res = await fetch(`${coreApiUrl}/state`);
        if (res.ok) {
          const coreState = await res.json();
          setLocalState((prev) => ({ ...prev, ...coreState }));
        }
      } catch (error) {
        console.warn("AuraKernel sync error:", error);
      }
    };

    const intervalId = setInterval(syncWithCore, 5000);
    return () => clearInterval(intervalId);
  }, [localState, coreApiUrl]);

  return (
    <AuraKernelContext.Provider value={{ localState, setLocalState }}>
      {children}
    </AuraKernelContext.Provider>
  );
};
