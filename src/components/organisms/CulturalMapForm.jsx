import React from "react";
import styled from "styled-components";
import { Formik, Field, ErrorMessage, Form } from "formik";
import {
  TextField,
  Button,
  FormLabel,
  Typography,
  FormControl,
} from "@mui/material";
import { culturalMapSchema } from "@/schemas/form-validation-schema";
import {
  handleInputChange,
  handleSubmit,
} from "@/components/modules-components/utils";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import blackarrow from "../../../public/icon_blackarrow.svg";
import Image from "next/image";
import {
  CepInput,
  CpfInput,
  RgRneInput,
  PhoneInput,
  SelectInput,
  DateInput,
} from "../atoms";
import colors from "@/constants/colors";
import breakpoint from "@/styles/breakpoint";

function CulturalMapForm() {
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

  return (
    <Formik
      initialValues={{
        rg: "",
        cpf: "",
        cep: "",
        city: "",
        state: "",
        phone: "",
        street: "",
        username: "",
        eventDate: "",
        birthDate: "",
        eventName: "",
        classPerson: "",
        neighborhood: "",
        issuingState: "",
      }}
      validationSchema={culturalMapSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleChange, setValues, values }) => (
        <Main>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <FormWrapper>
            <FormContainer>
              <Block>
                <FormControlStyled>
                  <FormLabel>Data do evento</FormLabel>
                  <Field name="eventDate" as={DateInput} variant="outlined" />
                  <Warn name="eventDate" component="p" />
                </FormControlStyled>
                <FormControlStyled>
                  <FormLabel>Nome do evento</FormLabel>
                  <Field name="eventName" as={TextField} variant="outlined" />
                  <Warn name="eventName" component="p" />
                </FormControlStyled>
                <Typography variant="h6">Dados do anfitrião</Typography>
              </Block>
              {fields.map((field) => (
                <FormControlStyled key={field.name}>
                  <FormLabel>{field.label}</FormLabel>
                  <Field
                    name={field.name}
                    as={field.component}
                    variant={field.variant}
                    type={field.type}
                    onChange={(e) =>
                      handleInputChange(e, handleChange, setValues, values)
                    }
                  />
                  <Warn name={field.name} component="p" />
                </FormControlStyled>
              ))}
            </FormContainer>
            <br />
            <ButtonWrapper>
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                style={{ width: "150px" }}
              >
                Salvar
              </Button>
            </ButtonWrapper>
            <AbsoluteContainer>
              <Link href="/Home">
                <Image src={blackarrow} alt="Voltar" />
                <h3>Voltar</h3>
              </Link>
            </AbsoluteContainer>
          </FormWrapper>
        </Main>
      )}
    </Formik>
  );
}

const Main = styled.div`
  width: 100dvw;
  padding: 10px;
`;
const Warn = styled(ErrorMessage)`
  font-size: 10px;
  color: #f80000;
  position: absolute;
  right: 30px;
  bottom: 10px;
`;

const FormWrapper = styled(Form)`
  max-width: 1200px;
  width: 90vw;
  padding: 20px;
  border-radius: 5px;

  width: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;

  background-color: #ffff;
  box-shadow: 3px 3px 9px #0000002f;
`;

const FormControlStyled = styled(FormControl)`
  padding: 0px 5px;
  width: 33%;
  div {
    width: calc(100% - 10px);
    height: 25px;
  }
  @media (max-width: ${breakpoint}) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const FileContainer = styled.div`
  margin: 10px 0px 0px 0px;
  width: 100%;

  padding: 10px 0px;
  margin: 10px 0px;
`;

const InfoFiles = styled.div`
  width: 100%;
`;

const Caption = styled.div`
  height: 30px;
  width: 100%;
  margin: 10px 0px;
  border-radius: 5px 5px 0px 0px;
  padding: 0px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.fifty};
  div > p {
    color: white;
  }
  div:first-child {
    width: 50%;
  }
`;

const InfosCaption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 30%;
`;
const TableFiles = styled.div`
  border: 1px solid #000000;
  border-top: none;
  border-radius: 5px;

  padding: 0px 0px 20px 0px;
`;
const Block = styled.div`
  width: 100%;
  h6 {
    margin: 15px 0px 15px 5px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
`;

const AbsoluteContainer = styled.div`
  width: min-content;
  a {
    display: flex;
  }
`;

export { CulturalMapForm };
