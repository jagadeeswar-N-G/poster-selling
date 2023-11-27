"use client"
import { createContext, FC, ReactNode } from "react";

type GlobalContextType = {
  // Define your context properties here
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

type GlobalStateProps = {
  children: ReactNode;
};

const GlobalState: FC<GlobalStateProps> = ({ children }) => {
  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;


