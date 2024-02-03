import { getCep } from "@/app/api/cep";

const handleSubmit = (values: any, { setSubmitting }: any) => {
    console.log("Formulário enviado:", { values });
    setSubmitting(false);
};

const handleInputChange = async (e: any, handleChange: any, setValues: any, values: any) => {
    const { value } = e.target;
    handleChange(e);
    if (!value.includes("_")) {
        try {
            const cep = await getCep(value);
            const {issuingState, cpf, rg, username, phone, street, classPerson, birthDate, eventName, eventDate} = values
            setValues({
                cep: value,
                city: cep.cidade,
                state: cep.uf,
                neighborhood: cep.bairro,
                issuingState,
                cpf,
                rg,
                username, 
                phone,
                street,
                classPerson,
                birthDate,
                eventName,
                eventDate
            });
        } catch (error) {
            console.error("Erro ao obter informações do CEP", error);
        }
    }
};

function formatString(input: any) {
  const withoutSpaces = input.replace(/\s+/g, '');

  const withoutSpecialsCharacteres = withoutSpaces.replace(/[^\w\s]/gi, '');

  return withoutSpecialsCharacteres;
}

  export {handleInputChange, handleSubmit, formatString}

