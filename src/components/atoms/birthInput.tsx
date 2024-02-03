import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

function DateInput(props: any) {
  return (
    <>
      <InputMask mask="99/99/9999" {...props}>
        {(inputProps: any) => <TextField {...inputProps} />}
      </InputMask>
    </>
  );
}
export { DateInput };
