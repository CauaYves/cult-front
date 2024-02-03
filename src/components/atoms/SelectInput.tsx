import { useField } from "formik";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const SelectInput = ({ label, ...props }: any) => {
  const [field, meta, helpers] = useField(props);

  const handleChange = (event: any) => {
    helpers.setValue(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select {...field} label={label} onChange={handleChange}>
        <MenuItem value="fisic">Pessoa física</MenuItem>
        <MenuItem value="legal">Pessoa jurídica</MenuItem>
      </Select>
    </FormControl>
  );
};

export { SelectInput };
