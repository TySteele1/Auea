// === AccessControlLayer.jsx === import { createContext, useContext, useState } from 'react';
const RBACContext = createContext();
export const RBACProvider = ({ children }) => {
  const [role, setRole] = useState('admin');
  const toggleRole = () => {
    setRole((prev) => (prev === 'admin' ? 'user' : 'admin'));
  };
  return (
    <RBACContext.Provider value={{ role, toggleRole }}>
      {' '}
      {children}{' '}
    </RBACContext.Provider>
  );
};
export const useRBAC = () => useContext(RBACContext);
