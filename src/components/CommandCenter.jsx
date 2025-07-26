// === CommandCenter.jsx === import { useState } from 'react'; import { useGenesisMemoryPort } from './GenesisMemoryPort'; import { useRBAC } from './AccessControlLayer';
export default function CommandCenter({ onSubmit }) { const [input, setInput] = useState(''); const { logMemory } = useGenesisMemoryPort(); const { role } = useRBAC();
const handleSubmit = (e) => { e.preventDefault(); if (!input) return; logMemory(input); onSubmit(input); setInput(''); };
if (role !== 'admin') return null;
return (
<input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter command..." /> Send
); }
