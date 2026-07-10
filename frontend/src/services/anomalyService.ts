import api from "./api";
import { ENDPOINTS } from "../constants/endpoints";

export const detectAnomalies =
async ()=>{

    const response =
        await api.post(ENDPOINTS.DETECT);

    return response.data;

};

export const classifyAnomalies =
async ()=>{

    const response =
        await api.post(ENDPOINTS.CLASSIFY);

    return response.data;

};

export const getAlerts = async ()=> {
  const response = await api.get(
    ENDPOINTS.ALERTS
  );

  return response.data;
}