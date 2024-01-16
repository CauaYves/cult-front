import CpfInput from "./CpfInput";
import RgRneInput from "./RgRneInput";
import CepInput from "./CepInput";
import PhoneInput from "./PhoneInput";
import SelectInput from "./SelectInput";
import { TextField } from "@mui/material";
import DateInput from "./birthInput";

const fields = [
    {
      name: "username",
      label: "Nome completo",
      component: TextField,
      variant: "outlined",
    },
    { name: "cpf", label: "CPF", component: CpfInput, type: "cpf" },
    { name: "rg", label: "RG/RNE", component: RgRneInput, variant: "outlined" },
    { name: "cep", label: "CEP", component: CepInput, variant: "outlined" },
    {
      name: "city",
      label: "Cidade",
      component: TextField,
      variant: "outlined",
    },
    {
      name: "neighborhood",
      label: "Bairro",
      component: TextField,
      variant: "outlined",
    },
    {
      name: "state",
      label: "Estado",
      component: TextField,
      variant: "outlined",
    },
    {
      name: "issuingState",
      label: "Estado emissor",
      component: TextField,
      variant: "outlined",
    },
    {
      name: "phone",
      label: "Telefone",
      component: PhoneInput,
      variant: "outlined",
    },
    {
      name: "street",
      label: "Rua/N",
      component: TextField,
      variant: "outlined",
    },
    {
      name: "birthDate",
      label: "Data de nascimento",
      component: DateInput,
      variant: "outlined",
    },
    {
      name: "classPerson",
      label: "Classificação do indivíduo",
      component: SelectInput,
      variant: "outlined",
    },
  ];

  export default fields