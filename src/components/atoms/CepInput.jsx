import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

function CepInput(props) {
  return (
    <>
      <InputMask mask="99999-999" {...props}>
        {(inputProps) => <TextField {...inputProps} />}
      </InputMask>
    </>
  );
}
export { CepInput };
