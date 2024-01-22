import Categories from "./Categories"
import BookSearch from "./Booksearch"
import { categoriesArray } from "../arrays/categoriesArray";
import { useContext, useEffect } from "react";
import { IGetBooksContext, BooksContext } from "../context/IGetBooksContext";
import { getInitalBooks, getAllBooks } from "../services/BooksCollector";
import { IBookItem } from "../models/IBookItem";

const Home = () => {

  const {setBookResponse, selectedCategory, setSelectedCategory} = useContext<IGetBooksContext>(BooksContext);

  useEffect(() => {
    const fetchInitalData = async () => {

      setBookResponse([]);
      

      const existingData = JSON.parse(sessionStorage.getItem('bookData') || '{}')

      if(existingData && existingData.items && existingData.items.length > 0) {

        const books = Array.from<IBookItem>(existingData.items)
        .filter(e => e)
        .filter(book => book.volumeInfo.categories && book.volumeInfo.categories.length > 0);

        const initialCategory = selectedCategory && selectedCategory.length > 0 ? selectedCategory : ['Fiction'];
       
         const initialBooks = books.filter((book: IBookItem) => {
          const bookCategories = book.volumeInfo.categories;
          return bookCategories.some(cat => initialCategory.includes(cat));
        });
        
        
         setBookResponse(initialBooks)
         setSelectedCategory(initialCategory);

      } else {

        try {
          const response = await getInitalBooks({subject: "fiction"})
          // console.log(response);

          if (response){
            const bookItem = response.items
            setBookResponse(bookItem)


            sessionStorage.setItem('bookData', JSON.stringify(response));
            }

        } catch (error) {
          console.log(error);

      }
      }
  }
  fetchInitalData();

  const fetchAllData = async () => {

    const subjects = categoriesArray
    .map((category) => category.query)
    .flat()
    .map((subject) => subject.replace(/\s+/g, '%'))


    const existingData = JSON.parse(sessionStorage.getItem('bookData') || '{}')

    if(existingData && existingData.items && existingData.items.length > 40){
      // console.log('data finns');
      
    } else {
      try {
        const response = await getAllBooks({subjects})

        const existingData = JSON.parse(sessionStorage.getItem('bookData') || '{}')

        const updatedData = {
          ...existingData,
          items: response.items
        };
        sessionStorage.setItem('bookData', JSON.stringify(updatedData))


      }catch (error){
        console.log(error);

      }
    }

    }

    fetchAllData();
  },[setBookResponse, selectedCategory, setSelectedCategory])

  return (
    <>
    <BookSearch></BookSearch>
    <Categories></Categories>
    </>
  )
}

export default Home