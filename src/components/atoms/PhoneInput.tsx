import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

function PhoneInput(props: any) {
  return (
    <>
      <InputMask mask="(99) 99999-9999" {...props}>
        {(inputProps: any) => <TextField {...inputProps} />}
      </InputMask>
    </>
  );
}
export { PhoneInput };
