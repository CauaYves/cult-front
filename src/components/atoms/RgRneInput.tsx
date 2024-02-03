import InputMask from "react-input-mask";
import { TextField } from "@mui/material";
function RgRneInput(props: any) {
  return (
    <>
      <InputMask mask="99.999.999-9" {...props}>
        {(inputProps: any) => <TextField {...inputProps} />}
      </InputMask>
    </>
  );
}
export { RgRneInput };
