import { createContext } from "react";
import { IBookItem } from "../models/IBookItem";


export interface IGetBooksContext {
    bookResponse: IBookItem [],
    setBookResponse: React.Dispatch<React.SetStateAction<IBookItem[]>>;
}

export const BooksContext = createContext<IGetBooksContext>({
    bookResponse: [],
    setBookResponse: () => {},
});