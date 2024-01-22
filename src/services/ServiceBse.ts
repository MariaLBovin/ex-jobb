import axios from "axios";
import { IAPIBody } from "../models/IAPIBody";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL_AI = import.meta.env.VITE_BASE_URL_AI


export const get = async <T>(endpoint: string) => {
    const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
    return response.data;
  };

  export const post = async <T>(APIBody: IAPIBody, api_key_ai: string) => {
    const response = await axios.post<T>(BASE_URL_AI, APIBody, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + api_key_ai,
      },
    });
    return response.data;
  };
