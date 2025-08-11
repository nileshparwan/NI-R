import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [openItem, setOpenItem] = useState("item-1"); // default open

  return (
    <AppContext.Provider value={{ openItem, setOpenItem }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAccordion() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAccordion must be used inside AppProvider");
  }
  return context;
}
