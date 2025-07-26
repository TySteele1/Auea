export const TelemetryLevels = {
  TRACE: 'trace',
  DEBUG: 'debug',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
};

export function logTelemetry(
  message,
  level = TelemetryLevels.INFO,
  context = 'System'
) {
  const timestamp = new Date().toISOString();
  const output = `[${timestamp}] [${context}] [${level.toUpperCase()}] — ${message}`;

  switch (level) {
    case TelemetryLevels.TRACE:
    case TelemetryLevels.DEBUG:
    case TelemetryLevels.INFO:
      console.info(output);
      break;
    case TelemetryLevels.WARN:
      console.warn(output);
      break;
    case TelemetryLevels.ERROR:
      console.error(output);
      break;
    default:
      console.log(output);
  }
}

export function captureSystemSnapshot(componentName, stateObject = {}) {
  logTelemetry(
    `Snapshot from ${componentName}: ${JSON.stringify(stateObject)}`,
    TelemetryLevels.INFO,
    'VSTL'
  );
}
