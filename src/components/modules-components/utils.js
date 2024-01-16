import { getCep } from "@/pages/api/cep";

const handleSubmit = (values, { setSubmitting }) => {
    console.log("Formulário enviado:", { values });
    setSubmitting(false);
};

const handleInputChange = async (e, handleChange, setValues, values) => {
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

  export {handleInputChange, handleSubmit}

