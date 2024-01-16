import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

export default function DateInput(props) {
  return (
    <>
      <InputMask mask="99/99/9999" {...props}>
        {(inputProps) => <TextField {...inputProps} />}
      </InputMask>
    </>
  );
}
