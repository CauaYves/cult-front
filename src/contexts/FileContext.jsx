import React, { createContext, useContext, useState } from "react";

const FileContext = createContext();

export function FileContextProvider({ children }) {
  const [files, setFiles] = useState([]);

  const contextData = {
    files,
    setFiles,
  };

  return (
    <FileContext.Provider value={contextData}>{children}</FileContext.Provider>
  );
}

export function useFileContext() {
  return useContext(FileContext);
}
