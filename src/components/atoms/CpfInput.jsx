import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

function CpfInput(props) {
  return (
    <>
      <InputMask mask="999.999.999-99" {...props}>
        {(inputProps) => <TextField {...inputProps} />}
      </InputMask>
    </>
  );
}

export { CpfInput };
