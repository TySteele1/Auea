import { createContext, useContext, useState } from 'react';

const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
  const [overlayActive, setOverlayActive] = useState(false);

  const toggleOverlay = () => setOverlayActive((prev) => !prev);

  return (
    <OverlayContext.Provider value={{ overlayActive, toggleOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};

export const useOverlay = () => useContext(OverlayContext);
