import api from "./api"

export async function getCep(cep) {
    try{        
        const promise = await api.get(`/enrollment/cep?cep=${cep}`)
        return promise.data
    }catch(error) {
        console.log("cep inserido está incorreto!")
    }
}