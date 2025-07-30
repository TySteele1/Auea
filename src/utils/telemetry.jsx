import { logTelemetry, TelemetryLevels } from './TelemetryHandler';

const telemetry = {
  trace: (msg, ctx = 'System') => logTelemetry(msg, TelemetryLevels.TRACE, ctx),
  debug: (msg, ctx = 'System') => logTelemetry(msg, TelemetryLevels.DEBUG, ctx),
  info: (msg, ctx = 'System') => logTelemetry(msg, TelemetryLevels.INFO, ctx),
  warn: (msg, ctx = 'System') => logTelemetry(msg, TelemetryLevels.WARN, ctx),
  error: (msg, ctx = 'System') => logTelemetry(msg, TelemetryLevels.ERROR, ctx),
};

export default telemetry;
