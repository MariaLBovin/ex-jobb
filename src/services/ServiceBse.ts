import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const get = async <T>(endpoint: string) => {
    const response = await axios.get<T>(`${BASE_URL}${endpoint}`);
    return response.data;
  };