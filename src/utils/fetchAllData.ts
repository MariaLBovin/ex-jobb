
import { categoriesArray } from "../arrays/categoriesArray";
import { getAllBooks } from "../services/BooksCollector";
import { IBookItem } from "../models/IBookItem";

export const fetchAllData = async () => {

        const subjects = categoriesArray
          .map((category) => category.query)
          .flat()
          .map((subject) => subject.replace(/\s+/g, '%'));
  
        const existingData = JSON.parse(sessionStorage.getItem('bookData') || '{}');
        if (existingData.length > 40) {
          return
        } else {
          try {
            let books: IBookItem[] = []
            const response = await getAllBooks({ subjects });
            console.log('hämtar all data');
            
            if(response){
              books = response.items
              .filter(e => e)
              .filter(book => book.volumeInfo.categories && book.volumeInfo.categories.length > 0);
                books = books.filter(book => !existingData.some((existingBook: { id: string; }) => existingBook.id === book.id));
            }
            
            const updatedData = existingData.concat(books)
            console.log(updatedData);
            
            sessionStorage.setItem('bookData', JSON.stringify(updatedData));
          } catch (error) {
            console.log(error);
          }
        }
        
  };
  