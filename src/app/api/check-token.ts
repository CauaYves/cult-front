import { AxiosError } from "axios"
import api from "./api"

export async function checkToken(token: string) {
    try{
        const response = await api.post("/auth/check-token", null,{ headers: {
            Authorization: `Bearer ${token}`
        }})
        console.log("response: ",response)
        return response.data
    } catch(error: Error | AxiosError | unknown) {
        console.log(error)
    }
}