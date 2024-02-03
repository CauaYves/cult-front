import api from "./api"

export async function login(loginCredentials: any) {
    const body = loginCredentials
    try{
        const response = await api.post("/auth", body)
        return response.data
    }catch(error: any){
        return error.response
    }
}
