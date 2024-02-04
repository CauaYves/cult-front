import React, { ChangeEvent } from "react";
import Image from "next/image";
import { Formik, Field, FormikValues, FormikHelpers } from "formik";
import { Button, FormLabel } from "@mui/material";
import { formValidationSchema } from "@/schemas/form-validation-schema";
import { useFileContext } from "../../contexts/FileContext";
import { ToastContainer, toast } from "react-toastify";
import blackarrow from "public/icon_blackarrow.svg";
import Link from "next/link";
import { FileInputComponent, FileRow } from "../molecules";
import { handleInputChange } from "@/components/utils";
import { styles, fields } from "@/components/molecules";

type DataFormProps = {
  allowFiles: boolean;
};

export interface FormikValuesTypes {
  rg: string;
  cpf: string;
  cep: string;
  city: string;
  state: string;
  phone: string;
  street: string;
  username: string;
  birthDate: string;
  classPerson: string;
  neighborhood: string;
  issuingState: string;
}
function DataForm({ allowFiles }: DataFormProps) {
  const { files, setFiles } = useFileContext();

  const handleSubmit = async (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<FormikValuesTypes>
  ): Promise<void> => {
    console.log("Formulário enviado:", { values, files });

    if (files.length > 20) {
      toast.error("É permitido inserir até 20 arquivos!");
      return Promise.resolve();
    }

    setFiles([]);
    setSubmitting(false);

    return Promise.resolve();
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
                    variant="outlined"
                    type={field.type}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
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
                      <div>
                        <p>Nome</p>
                      </div>
                      <styles.InfosCaption>
                        <div>
                          <p>Tipo</p>
                        </div>
                        <div>
                          <p>Formato</p>
                        </div>
                      </styles.InfosCaption>
                      <div>
                        <p>ações</p>
                      </div>
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
              <Link href="/home">
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

export { DataForm };
