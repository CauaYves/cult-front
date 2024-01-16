import api from "./api"

export async function checkToken(token) {
    try{
        const response = await api.post("/auth/check-token", null,{ headers: {
            Authorization: `Bearer ${token}`
        }})
        console.log("response: ",response)
        return response.data
    }catch(error){
        console.log(error.response)
        return error.response
    }
}