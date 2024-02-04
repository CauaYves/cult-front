import { getCep } from "@/app/api/cep";
import { AxiosError } from "axios";
import { FormikValuesTypes } from "../organisms/Form";
import { FormikHelpers } from "formik";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

const handleSubmit = (
  values: FormikValuesTypes,
  { setSubmitting }: FormikHelpers<boolean>
) => {
  console.log("Formulário enviado:", { values });
  setSubmitting(false);
};
const handleInputChange = async (
  e: ChangeEvent<HTMLInputElement>,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  setValues: any,
  values: any
) => {
  const { value } = e.target;
  handleChange(e);
  if (!value.includes("_")) {
    try {
      const cep = await getCep(value);

      setValues((prevValues: FormikValuesTypes) => {
        const updatedValues: FormikValuesTypes = {
          ...prevValues,
          cep: value,
          city: cep.cidade,
          state: cep.uf,
          neighborhood: cep.bairro,
        };

        // Adicionar as propriedades adicionadas manualmente
        // Isso permite que você use setValues diretamente sem modificar initialValues
        Object.assign(updatedValues, {
          issuingState: values.issuingState,
          cpf: values.cpf,
          rg: values.rg,
          username: values.username,
          phone: values.phone,
          street: values.street,
          classPerson: values.classPerson,
          birthDate: values.birthDate,
          eventName: values.eventName,
          eventDate: values.eventDate,
        });

        return updatedValues;
      });
    } catch (error: Error | AxiosError | unknown) {
      console.error("Erro ao obter informações do CEP", error);
    }
  }
};

function formatString(input: string) {
  const withoutSpaces = input.replace(/\s+/g, "");

  const withoutSpecialsCharacteres = withoutSpaces.replace(/[^\w\s]/gi, "");

  return withoutSpecialsCharacteres;
}

export { handleInputChange, handleSubmit, formatString };
