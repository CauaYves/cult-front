import { AxiosError } from "axios";
import api from "./api"
import { error } from "console";

export async function health() {
  try {
    const response = await api.get('/health');
    return response.data;
  } catch(error: Error | AxiosError | unknown) {
    console.log(error)
  }
}
