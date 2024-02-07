import { useContext, useEffect } from "react";
import { BooksContext, IGetBooksContext } from "../context/IGetBooksContext";
import { IBookItem } from "../models/IBookItem";
import { getInitalBooks } from "../services/BooksCollector";

export const useFetchInitialData = () => {
  const {
    setBookResponse,
    selectedCategory,
    setSelectedCategory,
    selectedCategoryText
  } = useContext<IGetBooksContext>(BooksContext);

  useEffect(() => {
    const fetchInitialData = async () => {
    setBookResponse([]);
    const existingData = JSON.parse(sessionStorage.getItem('bookData') || '{}');
    const initialCategory =
      selectedCategory && selectedCategory.length > 0 ? selectedCategory : ['Fiction'];
    const categoryText = selectedCategoryText || 'Skönlitteratur';
      console.log(initialCategory);
      
    try {
      let books: IBookItem[]= [];
      if (existingData && existingData.items && existingData.items.length > 0) {
        books = Array.from<IBookItem>(existingData.items)
          .filter(e => e)
          .filter(book => book.volumeInfo.categories && book.volumeInfo.categories.length > 0);
      } else {
        const response = await getInitalBooks({ subject: 'fiction' });

        if (response) {
          books = response.items
            .filter(e => e)
            .filter(book => book.volumeInfo.categories && book.volumeInfo.categories.length > 0);
          setBookResponse(books);
          sessionStorage.setItem('bookData', JSON.stringify(response));
          sessionStorage.setItem('categoryText', JSON.stringify(categoryText));
        }
      }

      const initialBooks = books.filter((book: IBookItem) => {
        const bookCategories = book.volumeInfo.categories;
        return bookCategories.some(cat => initialCategory.includes(cat));
      });
      
      
      setBookResponse(initialBooks);
      setSelectedCategory(initialCategory);
      sessionStorage.setItem('books', JSON.stringify(initialBooks));
      sessionStorage.setItem('selectedCategory', JSON.stringify(initialCategory));
      
      
    } catch (error) {
      console.log(error);
    }
  };
  fetchInitialData()
  }, [setBookResponse, selectedCategory, setSelectedCategory, selectedCategoryText])
};
