import { createContext } from "react";
import { IBookItem } from "../models/IBookItem";

export interface IGetBooksContext {
    bookResponse: IBookItem[];
    setBookResponse: React.Dispatch<React.SetStateAction<IBookItem[]>>;
    selectedCategory: string[];
    setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>>;
    selectedCategoryText: string;
    setSelectedCategoryText: React.Dispatch<React.SetStateAction<string>>;
  }
  
  export const BooksContext = createContext<IGetBooksContext>({
    bookResponse: [],
    setBookResponse: () => {},
    selectedCategory: [],
    setSelectedCategory: () => {},
    selectedCategoryText: '',
    setSelectedCategoryText: () => {}
  });

