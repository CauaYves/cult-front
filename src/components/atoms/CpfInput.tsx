import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

function CpfInput(props: any) {
  return (
    <>
      <InputMask mask="999.999.999-99" {...props}>
        {(inputProps: any) => <TextField {...inputProps} />}
      </InputMask>
    </>
  );
}

export { CpfInput };
