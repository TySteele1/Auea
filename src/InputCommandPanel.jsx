import React, { useState } from "react";
import { useGenesisMemoryPort } from "./GenesisMemoryPort";

export default function InputCommandPanel() {
  const { appendMemory } = useGenesisMemoryPort();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      appendMemory(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-4 rounded-xl shadow-md">
      <label className="block mb-2 text-sm">Enter Command:</label>
      <input
        type="text"
        className="w-full p-2 rounded bg-black border border-green-400 text-green-300"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="> run system.protocol"
      />
    </form>
  );
}
