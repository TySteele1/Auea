import React from 'react';

const Diagnostics = () => (
  <div className="p-4 bg-yellow-100 text-yellow-900 rounded-2xl shadow-md text-center">
    <h2 className="text-xl font-semibold">Diagnostics</h2>
    <p>
      System Health: <span className="font-bold">Nominal</span>
    </p>
    <p>
      Errors: <span className="font-bold text-green-700">None</span>
    </p>
  </div>
);

export default Diagnostics;
