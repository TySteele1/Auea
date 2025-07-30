// src/handler/TelemetryUtils.js

export const formatTimestamp = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString();
  };
  
  export const simulateLag = (min = 100, max = 500) => {
    return new Promise((resolve) => setTimeout(resolve, Math.random() * (max - min) + min));
  };
  