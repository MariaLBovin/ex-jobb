import { useContext, useEffect } from "react";
import { categoriesArray } from "../arrays/categoriesArray";
import { BooksContext, IGetBooksContext } from "../context/IGetBooksContext";
import { getAllBooks } from "../services/BooksCollector";

export const useFetchAllData = () => {

    const {setBookResponse} = useContext<IGetBooksContext>(BooksContext);
    useEffect(() => {
      const fetchAllData = async () => {
        const subjects = categoriesArray
          .map((category) => category.query)
          .flat()
          .map((subject) => subject.replace(/\s+/g, '%'));
  
        const existingData = JSON.parse(sessionStorage.getItem('bookData') || '{}');
  
        if (existingData && existingData.items && existingData.items.length > 40) {
          return
        } else {
          try {
            const response = await getAllBooks({ subjects });
            const existingData = JSON.parse(sessionStorage.getItem('bookData') || '{}');
            const updatedData = {
              ...existingData,
              items: response.items
            };
            sessionStorage.setItem('bookData', JSON.stringify(updatedData));
          } catch (error) {
            console.log(error);
          }
        }
      };
  
      fetchAllData();
    }, [setBookResponse]);
  };
  