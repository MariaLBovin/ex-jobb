import { IBookList } from "../models/IBookList";
import { IGetBook } from "../models/IGetBooks";
import { get } from "./ServiceBse";

const api_key = import.meta.env.VITE_API_KEY;
const req_spec = '&langRestrict=sv&orderBy=newest&printType=books&maxResults=1'

export const getSingleBook =async (params:IGetBook) => {
    return await get<IBookList>(
        `volumes?q=intitle:${params.title}+inauthor:${params.author}&${req_spec}&${api_key}`
    )
}