import React from 'react';

const SystemStatus = () => {
  return (
    <div style={{
      backgroundColor: '#000',
      color: '#0f0',
      padding: '10px',
      fontFamily: 'monospace',
      textAlign: 'center',
      borderBottom: '1px solid #0f0',
    }}>
      <div>Testing System Status</div>
      <div style={{ color: 'white', fontWeight: 'bold' }}>System Online</div>
    </div>
  );
};

export default SystemStatus;
