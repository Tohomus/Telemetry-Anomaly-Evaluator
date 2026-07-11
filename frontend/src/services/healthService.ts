import api from "./api";

export const checkBackendStatus = async ()=> {
  const response = await api.get("/");

  return response.data;
}