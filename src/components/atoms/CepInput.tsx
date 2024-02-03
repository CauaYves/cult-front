import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

function CepInput(props: any) {
  return (
    <>
      <InputMask mask="99999-999" {...props}>
        {(inputProps: any) => <TextField {...inputProps} />}
      </InputMask>
    </>
  );
}
export { CepInput };
