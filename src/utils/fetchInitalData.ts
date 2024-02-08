import { IBookItem } from "../models/IBookItem";
import { getInitalBooks } from "../services/BooksCollector";


export const fetchInitialData = async () => {
    const initialCategory = ['Fiction'];
    const categoryText = 'Skönlitteratur';
   
    try {
      let books: IBookItem[]= [];
      const existingData = JSON.parse(sessionStorage.getItem('bookData') || '{}')
      if (existingData.length > 0) {

        return;
      } else {
        const response = await getInitalBooks({ subject: 'fiction' });
        console.log('hämtar initial data');
        
        if (response) {
          books = response.items
            .filter(e => e)
            .filter(book => book.volumeInfo.categories && book.volumeInfo.categories.length > 0);
          sessionStorage.setItem('books', JSON.stringify(books));
          sessionStorage.setItem('bookData', JSON.stringify(books))
          sessionStorage.setItem('categoryText', JSON.stringify(categoryText));
          sessionStorage.setItem('selectedCategory', JSON.stringify(initialCategory));

          return {books, initialCategory, categoryText}
        }
      }
    } catch (error) {
      console.log(error);
    }
  

};
