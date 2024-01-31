import { IBookItem } from "../models/IBookItem";

export const changeCategory = (selectedCategory: string[]) => {

    const storedBooks = JSON.parse(sessionStorage.getItem('bookData') || '{}');

    const storedBooksArray = Array.from<IBookItem>(storedBooks.items)
      .filter(e => e)
      .filter(book => book.volumeInfo.categories && book.volumeInfo.categories.length > 0);
       
      const filteredBooks = storedBooksArray.filter((book: IBookItem) => {
        const selectedCategoriesLower = selectedCategory.map(cat => cat.toLowerCase());
        const bookCategoriesLower = book.volumeInfo.categories.map(cat => cat.toLowerCase());

        return selectedCategoriesLower.some(cat => bookCategoriesLower.includes(cat));
      });
    
      return filteredBooks;
    
  }

