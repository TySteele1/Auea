// src/handler/TelemetryHandler.js

const TelemetryHandler = {
  getSystemStatus: () => {
    // Simulated telemetry data
    return {
      status: "Online",
      timestamp: new Date().toISOString(),
      cpuUsage: (Math.random() * 100).toFixed(2) + "%",
      memoryUsage: (Math.random() * 100).toFixed(2) + "%",
    };
  },

  logEvent: (eventType, message) => {
    console.log(`[Telemetry Event] ${eventType.toUpperCase()}: ${message}`);
  },
};

export default TelemetryHandler;
