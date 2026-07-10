import api from "./api";
import { ENDPOINTS } from "../constants/endpoints";

export const generateDataset = async () => {

    console.log("Calling API")

    const response =
        await api.post(ENDPOINTS.GENERATE);
    
    console.log(response)

    return response.data;

};