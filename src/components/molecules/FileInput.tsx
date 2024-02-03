import React from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { useFileContext } from "../../contexts/FileContext";

function FileInputComponent() {
  const { files, setFiles } = useFileContext();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;

    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles).map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: new Date(file.lastModified),
      }));

      const updatedFiles = [...files];

      newFiles.forEach((newFile) => {
        const exists = updatedFiles.some((file) => file.name === newFile.name);
        if (!exists) {
          updatedFiles.push(newFile);
        }
      });

      setFiles(updatedFiles);
    }
  };

  return (
    <div>
      <Input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="fileInput"
        inputProps={{
          accept: ".png, .jpg, .jpeg, .pdf",
          multiple: true,
        }}
      />
      <label htmlFor="fileInput">
        <Button variant="contained" component="span">
          Escolher arquivo
        </Button>
      </label>
    </div>
  );
}

export { FileInputComponent };
