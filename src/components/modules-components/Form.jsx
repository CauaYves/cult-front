import React from "react";
import Image from "next/image";
import { Formik, Field } from "formik";
import { Button, FormLabel } from "@mui/material";
import { formValidationSchema } from "@/schemas/form-validation-schema";
import { handleInputChange } from "./utils";
import FileInputComponent from "./FileInput";
import { useFileContext } from "../../contexts/FileContext";
import FileRow from "./fileRow.jsx";
import { ToastContainer, toast } from "react-toastify";
import styles from "./formStyles";
import fields from "./fieldsObject";
import blackarrow from "../../../public/img/icon_blackarrow.svg";
import Link from "next/link";

export default function MyForm({ allowFiles }) {
  const { files, setFiles } = useFileContext();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Formulário enviado:", { values, files });
    if (files.length > 20) {
      return toast.error("é permitido inserir até 20 arquivos!");
    }
    setFiles([]);
    setSubmitting(false);
  };

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
        birthDate: "",
        classPerson: "",
        neighborhood: "",
        issuingState: "",
      }}
      validationSchema={formValidationSchema}
      onSubmit={handleSubmit}
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
          <styles.FormWrapper autoComplete="off">
            <styles.FormContainer>
              {fields.map((field) => (
                <styles.FormControlStyled key={field.name}>
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
                  <styles.Warn name={field.name} component="p" />
                </styles.FormControlStyled>
              ))}
              {allowFiles ? (
                <styles.FileContainer>
                  <FileInputComponent />
                  <styles.TableFiles>
                    <styles.Caption>
                      <div>Nome</div>
                      <styles.InfosCaption>
                        <div>Tipo</div>
                        <div>Formato</div>
                      </styles.InfosCaption>
                      <div>ações</div>
                    </styles.Caption>
                    <styles.InfoFiles>
                      {files.map((file, index) => {
                        return (
                          <FileRow
                            key={index}
                            id={index}
                            name={file.name}
                            extension={file.type}
                            files={files}
                            setFiles={setFiles}
                          />
                        );
                      })}
                    </styles.InfoFiles>
                  </styles.TableFiles>
                </styles.FileContainer>
              ) : null}
            </styles.FormContainer>
            <styles.ButtonWrapper>
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                style={{ width: "150px" }}
              >
                Salvar
              </Button>
            </styles.ButtonWrapper>
            <styles.AbsoluteContainer>
              <Link href="/Home">
                <Image src={blackarrow} alt="Voltar" />
                <h3>Voltar</h3>
              </Link>
            </styles.AbsoluteContainer>
          </styles.FormWrapper>
        </styles.Main>
      )}
    </Formik>
  );
}
