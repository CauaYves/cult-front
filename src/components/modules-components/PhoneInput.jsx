import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

export default function PhoneInput(props) {
  return (
    <>
      <InputMask mask="(99) 99999-9999" {...props}>
        {(inputProps) => <TextField {...inputProps} />}
      </InputMask>
    </>
  );
}
