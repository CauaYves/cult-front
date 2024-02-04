import {
  CpfInput,
  RgRneInput,
  CepInput,
  PhoneInput,
  SelectInput,
  DateInput,
} from "../atoms";
import { TextField } from "@mui/material";

const fields = [
  {
    name: "username",
    label: "Nome completo",
    component: TextField,
  },
  {
    name: "cpf",
    label: "CPF",
    component: CpfInput,
    type: "cpf",
  },
  { name: "rg", label: "RG/RNE", component: RgRneInput, variant: "outlined" },
  { name: "cep", label: "CEP", component: CepInput, variant: "outlined" },
  {
    name: "city",
    label: "Cidade",
    component: TextField,
  },
  {
    name: "neighborhood",
    label: "Bairro",
    component: TextField,
  },
  {
    name: "state",
    label: "Estado",
    component: TextField,
  },
  {
    name: "issuingState",
    label: "Estado emissor",
    component: TextField,
  },
  {
    name: "phone",
    label: "Telefone",
    component: PhoneInput,
  },
  {
    name: "street",
    label: "Rua/N",
    component: TextField,
  },
  {
    name: "birthDate",
    label: "Data de nascimento",
    component: DateInput,
  },
  {
    name: "classPerson",
    label: "Classificação do indivíduo",
    component: SelectInput,
  },
];

export { fields };
