import { FieldHookConfig, useField } from "formik";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import React from "react";

interface SelectInputProps {
  label: string;
  props: FieldHookConfig<SelectInputProps>;
}

const SelectInput = ({ label, ...props }: SelectInputProps) => {
  const [field, _meta, helpers] = useField(props.props);

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
