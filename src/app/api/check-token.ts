import api from "./api"

export async function checkToken(token: any) {
    try{
        const response = await api.post("/auth/check-token", null,{ headers: {
            Authorization: `Bearer ${token}`
        }})
        console.log("response: ",response)
        return response.data
    }catch(error: any){
        console.log(error.response)
        return error.response
    }
}