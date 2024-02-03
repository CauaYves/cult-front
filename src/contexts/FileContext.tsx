import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface File {
  name: string;
  size: number;
  type: string;
  lastModified: Date;
}

interface FileContextProps {
  files: File[];
  setFiles: Dispatch<SetStateAction<File[]>>;
}

const FileContext = createContext<FileContextProps | undefined>(undefined);

export function FileContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [files, setFiles] = useState<File[]>([]);

  const contextData: FileContextProps = {
    files,
    setFiles,
  };

  return (
    <FileContext.Provider value={contextData}>{children}</FileContext.Provider>
  );
}

export function useFileContext() {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error(
      "useFileContext deve ser usado dentro de um FileContextProvider"
    );
  }

  return context;
}
