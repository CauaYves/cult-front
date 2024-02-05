import { FieldHookConfig, useField } from "formik";
import { Select, MenuItem, FormControl } from "@mui/material";

const SelectInput = ({ ...props }: FieldHookConfig<string>) => {
  const [field, _meta, helpers] = useField(props);

  return (
    <FormControl>
      <Select
        {...field}
        label="Selecione o tipo"
        onChange={(e) => {
          helpers.setValue(e.target.value);
        }}
      >
        <MenuItem value="fisic">Pessoa física</MenuItem>
        <MenuItem value="legal">Pessoa jurídica</MenuItem>
      </Select>
    </FormControl>
  );
};

export { SelectInput };
