import React from "react";

export const Card = ({ children }) => (
  <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, margin: 8 }}>
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div>{children}</div>
);
