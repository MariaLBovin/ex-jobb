import { IBookItem } from "../models/IBookItem";


export const filterUniqueBooks = (books: IBookItem[]) => {
    const uniqueTitleContainer: { [key: string]: boolean } = {};
      
    const uniqueBooks = books.filter((book) => {
        const normalizedTitle = book.volumeInfo.title.toLowerCase();
      
          if (!uniqueTitleContainer[normalizedTitle]) {
            uniqueTitleContainer[normalizedTitle] = true;
            return true;
          }
      
          return false;
        });
      
        return uniqueBooks;
      };
