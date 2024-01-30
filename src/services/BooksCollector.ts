
import axios from "axios";
import { IBookList } from "../models/IBookList";
import { IGetAllBooks, IGetBook, IGetBooks } from "../models/IGetBooks";
import { get, post } from "./ServiceBse";
import { IAIResponse } from "../models/IAIResponse";


interface IAPIBody {
  model: string,
  prompt: string,
  temperature: number,
  max_tokens: number,
  top_p:number
}

const req_spec = import.meta.env.VITE_REQUEST_SPEC;
const req_spec_single = import.meta.env.VITE_REQUEST_SPEC_SINGLE
const api_key = import.meta.env.VITE_API_KEY;
const api_key_ai = import.meta.env.VITE_API2_KEY;

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



export const getSingleBook =async (params:IGetBook) => {
    return await get<IBookList>(
        `volumes?q=intitle:${params.extractedTitle}+inauthor:${params.author}&${req_spec_single}&${api_key}`
    )
}

export const getBookRecommendation = async (title: string) => {
  const APIBody: IAPIBody = {
    model: 'gpt-3.5-turbo-instruct',
    prompt: `'Rekommendera en bok baserat på ${title}. Svara bara med titel och författare. '`,
    temperature: 0.1,
    max_tokens: 20,
    top_p: 1,
  };

  return await post<IAIResponse>(APIBody, api_key_ai);
};
