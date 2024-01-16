import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { useFileContext } from "../../contexts/FileContext";

export default function FileInputComponent() {
  const { files, setFiles } = useFileContext();

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    files.map((file, index) => {
      if (file?.name === selectedFiles[0]?.name) {
        return files.splice(index, 1);
      }
    });
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  return (
    <div>
      <Input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="fileInput"
        accept=".png, .jpg, .jpeg, .pdf"
        multiple
      />
      <label htmlFor="fileInput">
        <Button variant="contained" component="span">
          Escolher arquivo
        </Button>
      </label>
    </div>
  );
}
