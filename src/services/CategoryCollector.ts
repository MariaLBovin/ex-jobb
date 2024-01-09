
import { IBookList } from "../models/IBookList";
import { IGetBooks } from "../models/IGetBooks";
import { get } from "./ServiceBse";

const req_spec = import.meta.env.VITE_REQUEST_SPEC;
const api_key = import.meta.env.VITE_API_KEY;

export const getBooksByCategory =async (params:IGetBooks) => {
    return await get<IBookList>(
        `volumes?q=*+subject:${params.subject}&${req_spec}&${api_key}`
    )
}