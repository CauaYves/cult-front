import React, { ChangeEvent } from "react";
import { Formik, Field } from "formik";
import { culturalMapSchema } from "@/schemas/form-validation-schema";
import { ToastContainer } from "react-toastify";
import { DateInput } from "../atoms";
import { TextField, Button, FormLabel, Typography } from "@mui/material";
import { fields, styles } from "@/components/molecules";
import { handleInputChange } from "@/components/utils";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Link from "next/link";

function CulturalMapForm() {
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
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting, handleChange, setValues, values }) => (
        <styles.Main>
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
          <styles.FormWrapper>
            <styles.FormContainer>
              <styles.Block>
                {/* TODO ADICIONAR OS DOIS INPUTS AO OBJETO DE INPUTS, DINAMICAMENTE */}
                <styles.FormControlStyled>
                  <FormLabel>Data do evento</FormLabel>
                  <Field name="eventDate" as={DateInput} variant="outlined" />
                  <styles.Warn name="eventDate" component="p" />
                </styles.FormControlStyled>
                <styles.FormControlStyled>
                  <FormLabel>Nome do evento</FormLabel>
                  <Field name="eventName" as={TextField} variant="outlined" />
                  <styles.Warn name="eventName" component="p" />
                </styles.FormControlStyled>
                <Typography variant="h6">Dados do anfitrião</Typography>
              </styles.Block>
              {fields.map((field) => (
                <styles.FormControlStyled key={field.name}>
                  <FormLabel>{field.label}</FormLabel>
                  <Field
                    name={field.name}
                    as={field.component}
                    variant={field.variant}
                    type={field.type}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleInputChange(e, handleChange, setValues, values)
                    }
                  />
                  <styles.Warn name={field.name} component="p" />
                </styles.FormControlStyled>
              ))}
            </styles.FormContainer>
            <styles.ButtonWrapper>
              <Link href="/home">
                <Button startIcon={<ArrowBack />}>Voltar</Button>
              </Link>
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                style={{ width: "150px" }}
              >
                Salvar
              </Button>
            </styles.ButtonWrapper>
          </styles.FormWrapper>
        </styles.Main>
      )}
    </Formik>
  );
}

export { CulturalMapForm };
