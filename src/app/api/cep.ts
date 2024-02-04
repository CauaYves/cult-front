import { AxiosError } from "axios"
import api from "./api"

export async function getCep(cep: string) {
    try{        
        const promise = await api.get(`/enrollment/cep?cep=${cep}`)
        return promise.data
    } catch(error: Error | AxiosError | unknown) {
        console.log("cep inserido está incorreto ", error)
    }
}