import { useContext, useEffect } from "react";
import { categoriesArray } from "../arrays/categoriesArray";
import { BooksContext, IGetBooksContext } from "../context/IGetBooksContext";
import { getAllBooks } from "../services/BooksCollector";
import { IBookItem } from "../models/IBookItem";

export const useFetchAllData = () => {
    const {setBookResponse} = useContext<IGetBooksContext>(BooksContext);

    useEffect(() => {
      const fetchAllData = async () => {
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
            if(response){
              books = response.items
              .filter(e => e)
              .filter(book => book.volumeInfo.categories && book.volumeInfo.categories.length > 0);
            }
            const existingData = JSON.parse(sessionStorage.getItem('bookData') || '{}');
            const updatedData = existingData.concat(books)
            sessionStorage.setItem('bookData', JSON.stringify(updatedData));
          } catch (error) {
            console.log(error);
          }
        }
      };
  
      fetchAllData();
    }, [setBookResponse]);
  };
  