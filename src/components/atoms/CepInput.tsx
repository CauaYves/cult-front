import InputMask, { Props } from "react-input-mask";
import { TextField, TextFieldProps } from "@mui/material";

function CepInput(props: any) {
  return (
    <>
      <InputMask mask="99999-999" {...props}>
        {(inputProps: Props & TextFieldProps) => <TextField {...inputProps} />}
      </InputMask>
    </>
  );
}
export { CepInput };
