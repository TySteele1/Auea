// TelemetryDisplay.jsx
import { useContext } from "react";
import { StatusContext } from "../context/statusContext";

function TelemetryDisplay() {
  const { logEntries } = useContext(StatusContext);

  return (
    <div className="p-4 bg-black text-green-400 font-mono h-64 overflow-y-auto">
      {logEntries.map((entry, idx) => (
        <div key={idx}>
          [{entry.timestamp.split("T")[1].slice(0, 8)}] {entry.message}
        </div>
      ))}
    </div>
  );
}

export default TelemetryDisplay;
