import React from 'react';

const ValidationConsole = ({ logs }) => {
  return (
    <div className="bg-black text-green-400 p-3 text-xs font-mono rounded-lg shadow-md h-48 overflow-auto">
      <div>🧪 Validation Console</div>
      <hr className="border-green-600 my-2" />
      <div>
        {logs && logs.length > 0
          ? logs.map((log, idx) => <div key={idx}>{log}</div>)
          : 'No logs available.'}
      </div>
    </div>
  );
};

export default ValidationConsole;
