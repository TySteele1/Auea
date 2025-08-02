// OutputPanel.jsx
import { useContext } from "react";
import { StatusContext } from "../context/statusContext";

function OutputPanel() {
  const { output } = useContext(StatusContext);

  return (
    <div className="p-4 bg-white rounded shadow text-lg min-h-[60px]">
      {output || "Awaiting command..."}
    </div>
  );
}

export default OutputPanel;
