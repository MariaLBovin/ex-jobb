import { IBookItem } from "../models/IBookItem";

export const changeCategory = (selectedCategory: string[]) => {

    const storedBooks = JSON.parse(sessionStorage.getItem('bookData') || '{}')
      .filter((e: unknown) => e)
      .filter((book: IBookItem) => book.volumeInfo.categories && book.volumeInfo.categories.length > 0);

      console.log('storedBooks', storedBooks);
      
    
      const filteredBooks = storedBooks.filter((book: IBookItem) => {
        const selectedCategoriesLower = selectedCategory.map(cat => cat.toLowerCase());
        const bookCategoriesLower = book.volumeInfo.categories.map(cat => cat.toLowerCase());

        return selectedCategoriesLower.some(cat => bookCategoriesLower.includes(cat));
      });
      console.log(filteredBooks);
      
      return filteredBooks;
      
  }

