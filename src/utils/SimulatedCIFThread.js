import telemetry from '@/utils/telemetry';

export const simulateCIFResponse = async (input) => {
  telemetry.debug(
    `Simulating CIF response for: ${input}`,
    'SimulatedCIFThread'
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      telemetry.trace(`Resolved CIF for: ${input}`, 'SimulatedCIFThread');
      resolve(`CIF Validation: ✅ "${input}" understood and logged.`);
    }, 500);
  });
};
