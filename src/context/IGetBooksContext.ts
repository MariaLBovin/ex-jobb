import { createContext } from "react";
import { IBookList } from "../models/IBookList";


export interface IGetBooksContext {
    bookResponse: IBookList,
    setBookResponse: React.Dispatch<React.SetStateAction<IBookList>>;
}

export const BooksContext = createContext<IGetBooksContext>({
    bookResponse: { kind: "", totalItems: 0, items: [] },
    setBookResponse: () => {},
});