// Inside ModuleC.jsx
import { useContext } from "react";
import { StatusContext } from "../context/statusContext";
import { routeCommand } from "../logic/CommandRouter";

function ModuleC() {
  const {
    inputValue,
    setInputValue,
    setOutput,
    systemState,
    addLogEntry
  } = useContext(StatusContext);

  const handleCommand = () => {
    const result = routeCommand(inputValue, systemState);
    setOutput(result.response);
    addLogEntry({
      type: "command",
      message: `User: ${inputValue}`,
      timestamp: new Date().toISOString()
    });
    addLogEntry({
      type: "response",
      message: `System: ${result.response}`,
      timestamp: new Date().toISOString()
    });
    setInputValue(""); // Clear after send
  };

  return (
    <div className="p-2 flex gap-2">
      <input
        className="border p-2 rounded w-full"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type a command..."
      />
      <button onClick={handleCommand} className="bg-blue-500 text-white px-4 py-2 rounded">
        Send
      </button>
    </div>
  );
}

export default ModuleC;
