import api from "./api"

export async function credenciamento(body: any) {
    try{
        const response = await api.post("/testbetaform", body, { headers: {
            "Content-Type": "multipart/form-data"
        }})
        return response.data
    }catch(error: any){
        return error.response.data
    }
}