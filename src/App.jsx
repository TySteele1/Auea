// src/App.jsx
import React from "react";
import SystemStatus from "./modules/SystemStatus";

export default function App() {
  return (
    <div style={{ fontFamily: "monospace", padding: "20px" }}>
      <SystemStatus />
    </div>
  );
}
