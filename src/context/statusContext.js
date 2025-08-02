const [output, setOutput] = useState("");
const [logEntries, setLogEntries] = useState([]);
const [systemState, setSystemState] = useState({
  activePhase: 2, // toggled from AdminPanel
  // add more flags later like memoryMode, debugMode, etc.
});

const addLogEntry = (entry) => {
  setLogEntries((prev) => [...prev, entry]);
};

return (
  <StatusContext.Provider
    value={{
      inputValue, setInputValue,
      output, setOutput,
      logEntries, addLogEntry,
      systemState, setSystemState
    }}>
    {children}
  </StatusContext.Provider>
);
