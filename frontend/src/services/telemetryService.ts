import api from "./api";
import { ENDPOINTS } from "../constants/endpoints";

export const generateDataset = async () => {

    const response =
        await api.post(ENDPOINTS.GENERATE);

    return response.data;

};