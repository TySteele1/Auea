// === SimulatedCIFThread.jsx ===

export const simulateCIFResponse = async (input) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`CIF Validation: ✅ "${input}" understood and logged.`);
    }, 500);
  });
};
