import { useAuraKernel } from "@/modules/AuraKernel";

export const useMAK = () => {
  const { localState, setLocalState } = useAuraKernel();
  return {
    state: localState,
    setState: setLocalState,
  };
};
