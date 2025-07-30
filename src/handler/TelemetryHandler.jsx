// src/handler/TelemetryHandler.jsx

import { useEffect, useState } from "react";
import TelemetryHandler from "./TelemetryHandler";

const useTelemetry = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const update = () => {
      const status = TelemetryHandler.getSystemStatus();
      setData(status);
    };

    update();
    const interval = setInterval(update, 5000); // refresh every 5 sec
    return () => clearInterval(interval);
  }, []);

  return data;
};

export default useTelemetry;
