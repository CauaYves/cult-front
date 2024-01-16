export async function credenciamento(body) {
    try{
        const response = await api.post("/testbetaform", body, { headers: {
            "Content-Type": "multipart/form-data"
        }})
        return response.data
    }catch(error){
        return error.response.data
    }
}