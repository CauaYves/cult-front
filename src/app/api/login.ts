import api from "./api"
import { loginCredentialss } from '../../types/api';
import { AxiosError } from "axios";

export async function login(loginCredentials: loginCredentialss) {
    const body = loginCredentials
    try{
        const response = await api.post("/auth", body)
        return response.data
    }catch(error: Error | AxiosError | unknown){
        console.log(error)
    }
}
