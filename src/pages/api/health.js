import api from "./api"

export async function health() {
  try {
    const response = await api.get('/health');
    return response.data;
  } catch (error) {
    return error;
  }
}
