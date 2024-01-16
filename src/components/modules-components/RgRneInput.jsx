import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

export default function RgRneInput(props) {
  return (
    <>
      <InputMask mask="99.999.999-9" {...props}>
        {(inputProps) => <TextField {...inputProps} />}
      </InputMask>
    </>
  );
}
