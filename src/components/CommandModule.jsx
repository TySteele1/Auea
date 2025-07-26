import React from 'react';

function CommandCenter() {
  return (
    <div
      style={{
        backgroundColor: '#222',
        color: 'aqua',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid aqua',
      }}
    >
      <h2>🧠 Command Center</h2>
      <textarea
        placeholder="Enter command..."
        style={{
          width: '100%',
          height: '100px',
          backgroundColor: '#111',
          color: '#0ff',
          border: '1px solid #0ff',
          borderRadius: '4px',
          padding: '10px',
        }}
      />
    </div>
  );
}

export default CommandModule;
