
import axios from "axios";
import { IBookList } from "../models/IBookList";
import { IGetAllBooks, IGetBooks } from "../models/IGetBooks";
import { get } from "./ServiceBse";

const req_spec = import.meta.env.VITE_REQUEST_SPEC;
const api_key = import.meta.env.VITE_API_KEY;

export const getInitalBooks =async (params:IGetBooks) => {
    return await get<IBookList>(
        `volumes?q=*+subject:${params.subject}&${req_spec}&${api_key}`
    )
}
export const getAllBooks = async (params: IGetAllBooks): Promise<IBookList> => {

    const {subjects} = params; 

    const urls = subjects.map(subject => `volumes?q=*+subject:${subject}&${req_spec}&${api_key}`);

    const responses = await axios.all(urls.map(url => get<IBookList>(url)));
  
    const combinedBookList: IBookList = {
      kind: "", 
      totalItems: 0, 
      items: []

    };
  
    responses.forEach(response => {
      combinedBookList.items = combinedBookList.items.concat(response.items);
    });
  
    return combinedBookList;
  };