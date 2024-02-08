import { useContext, useEffect } from "react";
import { BooksContext, IGetBooksContext } from "../context/IGetBooksContext";
import { IBookItem } from "../models/IBookItem";
import { getInitalBooks } from "../services/BooksCollector";


export const useFetchInitialData = () => {
  const {
    setBookResponse,
    setSelectedCategory,
    setSelectedCategoryText
  } = useContext<IGetBooksContext>(BooksContext);

  useEffect(() => {
    const fetchInitialData = async () => {
    setBookResponse([]);
    
    const initialCategory = ['Fiction'];
    const categoryText = 'Skönlitteratur';
   
    try {
      let books: IBookItem[]= [];
      const existingData = JSON.parse(sessionStorage.getItem('bookData') || '{}')
      if (existingData.length > 0) {

        return;
      } else {
        const response = await getInitalBooks({ subject: 'fiction' });

        
        if (response) {
          books = response.items
            .filter(e => e)
            .filter(book => book.volumeInfo.categories && book.volumeInfo.categories.length > 0);
          setBookResponse(books);
          setSelectedCategory(initialCategory);
          setSelectedCategoryText(categoryText);
          sessionStorage.setItem('books', JSON.stringify(books));
          sessionStorage.setItem('bookData', JSON.stringify(books))
          sessionStorage.setItem('categoryText', JSON.stringify(categoryText));
          sessionStorage.setItem('selectedCategory', JSON.stringify(initialCategory));

        }

      }

    } catch (error) {
      console.log(error);
    }
  };
  fetchInitialData()
  }, [setBookResponse, setSelectedCategory, setSelectedCategoryText])
};
