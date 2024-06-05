
import axios from "axios";
import { IBookList } from "../models/IBookList";
import { IGetAllBooks, IGetBook, IGetBookWithId, IGetBooks } from "../models/IGetBooks";
import { get, post } from "./ServiceBse";
import { IAIResponse } from "../models/IAIResponse";
import { IBookItem } from "../models/IBookItem";
import { IAPIBody } from "../models/IAPIBody";


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
    model: 'gpt-4o',
    "messages": [
      {
        "role": "system",
        "content": [
          {
            "type": "text",
            "text": "Jag kommer mata in en titel och vill att du ger mig ett boktips baserade på den boken. Ta hänsyn till läsålder och genre. Svaret måste vara baserat på kända rekommendationer från litteraturkritiker och populära boklistor. Ge bara svenska förslag och svaret ska vara utformat så här: Titel: Författare:"
          }
        ]
      },
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "Harry Potter\n"
          }
        ]
      },
      {
        "role": "assistant",
        "content": [
          {
            "type": "text",
            "text": "Titel: Cirkeln  \nFörfattare: Mats Strandberg och Sara Bergmark Elfgren"
          }
        ]
      },
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "Flicka, kvinna, annan"
          }
        ]
      },
      {
        "role": "assistant",
        "content": [
          {
            "type": "text",
            "text": "Titel: Brinnande livet  \nFörfattare: Alice Munro"
          }
        ]
      },
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": "1984\n"
          }
        ]
      },
      {
        "role": "assistant",
        "content": [
          {
            "type": "text",
            "text": "Titel: Kallocain  \nFörfattare: Karin Boye"
          }
        ]
      },
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": `${title}`
          }
        ]
      },
    ],
    temperature: 0.1,
    max_tokens: 100,
    top_p: 1,
  };

  return await post<IAIResponse>(APIBody, api_key_ai);
};

export const getBookWithId = async (params: IGetBookWithId): Promise<IBookItem[]> => {
  const { bookIDs } = params;
  const urls = bookIDs.map(id => `volumes/${id}?${api_key}`);

  const responses = await axios.all(urls.map(url => get<IBookItem>(url)));

  const combinedBookList: IBookItem[] = [];

  responses.forEach(response => {
    combinedBookList.push(response);
  });

  return combinedBookList;
};