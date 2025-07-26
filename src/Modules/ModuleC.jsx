import React, { useState, useEffect } from 'react';
import { useCIFEngine } from '../hooks/useCIFEngine';

const { response, loading, injectValidationPath } = useCIFEngine();

// Call this function on some user action
injectValidationPath('I need help with legal money matters');

import telemetry from '../utils/telemetry';

export default function ModuleC() {
  const [inputText, setInputText] = useState('');
  const { response, loading, injectValidationPath } = useCIFEngine();

  useEffect(() => {
    telemetry.info('ModuleC active and listening.', 'ModuleC');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    injectValidationPath(inputText, 'ModuleC'); // specify source module
    setInputText('');
  };

  return (
    <div className="space-y-4 p-4 border border-green-600 rounded-xl">
      <h2 className="text-xl text-green-300 font-bold">
        🧠 CIF Signal Scanner
      </h2>

      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          className="flex-1 bg-black border border-green-500 px-3 py-2 text-green-200"
          placeholder="Enter your query..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-green-600 text-black px-4 py-2 font-bold"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Run'}
        </button>
      </form>

      {response && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm">
          <SignalCard title="🧠 Cognitive Signal" value={response.cognitive} />
          <SignalCard title="💓 Emotional Signal" value={response.emotional} />
          <SignalCard
            title="🧱 Structural Signal"
            value={response.structural}
          />
          {response.legal && (
            <SignalCard title="⚖️ Legal Signal" value={response.legal} />
          )}
        </div>
      )}
    </div>
  );
}

function SignalCard({ title, value }) {
  return (
    <div className="border border-green-400 p-3 rounded-lg bg-black/50">
      <div className="text-green-400 font-bold mb-1">{title}</div>
      <div className="text-green-100">{value}</div>
    </div>
  );
}
