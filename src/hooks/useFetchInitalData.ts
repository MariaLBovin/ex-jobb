import { useContext, useEffect } from "react";
import { BooksContext, IGetBooksContext } from "../context/IGetBooksContext";
import { IBookItem } from "../models/IBookItem";
import { getInitalBooks } from "../services/BooksCollector";

export const useFetchInitialData = () => {

  const {setBookResponse, selectedCategory, setSelectedCategory, selectedCategoryText} =useContext<IGetBooksContext>(BooksContext);

    useEffect(() => {
      const fetchInitialData = async () => {
        setBookResponse([]);
        const existingData = JSON.parse(sessionStorage.getItem('bookData') || '{}');
  
        if (existingData && existingData.items && existingData.items.length > 0) {
          const books = Array.from<IBookItem>(existingData.items)
            .filter(e => e)
            .filter(book => book.volumeInfo.categories && book.volumeInfo.categories.length > 0);
  
          const initialCategory = selectedCategory && selectedCategory.length > 0 ? selectedCategory : ['Fiction'];
          const categoryText = selectedCategoryText ? selectedCategoryText : 'Skönlitteratur';

          const initialBooks = books.filter((book: IBookItem) => {
            const bookCategories = book.volumeInfo.categories;
            return bookCategories.some(cat => initialCategory.includes(cat));
          });
  
          setBookResponse(initialBooks);
          setSelectedCategory(initialCategory);
          sessionStorage.setItem('books', JSON.stringify(initialBooks));
          sessionStorage.setItem('selectedCategory', JSON.stringify(initialCategory));
          sessionStorage.setItem('categoryText', JSON.stringify(categoryText));

        } else {
          try {
            const response = await getInitalBooks({ subject: 'fiction' });
  
            if (response) {
              const bookItem = response.items;
              setBookResponse(bookItem);
              sessionStorage.setItem('bookData', JSON.stringify(response));
            }
          } catch (error) {
            console.log(error);
          }
        }
      };
  
      fetchInitialData();
    }, [setBookResponse, selectedCategory, setSelectedCategory]);
  };
