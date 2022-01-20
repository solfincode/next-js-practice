import { useState, useContext, createContext } from "react";

const ContextModule = createContext();

export const useModule = () => {
  return useContext(ContextModule);
};

export const ContextProvider = ({children}) => {
  const [title, setTitle] = useState("hello world context world");
  const value = {
    title,
  };
  return (
    <ContextModule.Provider value={value}>{children}</ContextModule.Provider>
  );
};
