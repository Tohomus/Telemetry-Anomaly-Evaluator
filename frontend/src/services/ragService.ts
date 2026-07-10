import api from "./api";
import { ENDPOINTS } from "../constants/endpoints";
import type{ Alert } from "../types/anomaly";

export const analyzeAlert = async (
  alert: Alert
) => {
  const response = await api.post(
    ENDPOINTS.ANALYZE,
    {
      alert,
    }
  );

  return response.data;
};