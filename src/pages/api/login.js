import api from "./api"

export async function login(loginCredentials) {
    const body = loginCredentials
    try{
        const response = await api.post("/auth", body)
        return response.data
    }catch(error){
        return error.response
    }
}
