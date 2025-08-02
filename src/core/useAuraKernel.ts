import { useContext } from "react";
import { AuraKernelContext } from "./AuraKernel";

/**
 * Custom hook to access AuraKernel context.
 * Must be used within an <AuraKernelProvider>.
 */
export const useAuraKernel = () => {
  const context = useContext(AuraKernelContext);
  if (!context) {
    throw new Error("useAuraKernel must be used within AuraKernelProvider");
  }
  return context;
};
