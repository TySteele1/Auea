// Add to AdminPanel.jsx
import { useContext } from "react";
import { StatusContext } from "../context/statusContext";

function AdminPanel() {
  const { systemState, setSystemState } = useContext(StatusContext);

  const togglePhase = () => {
    setSystemState((prev) => ({
      ...prev,
      activePhase: prev.activePhase === 2 ? 1 : 2,
    }));
  };

  return (
    <div className="p-2">
      <button onClick={togglePhase} className="bg-yellow-500 text-black px-4 py-2 rounded">
        Toggle to Phase {systemState.activePhase === 2 ? 1 : 2}
      </button>
      <p>Current Phase: {systemState.activePhase}</p>
    </div>
  );
}

export default AdminPanel;
