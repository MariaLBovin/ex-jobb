import Categories from "./Categories"
import BookSearch from "./Booksearch"
import { categoriesArray } from "../arrays/categoriesArray";
import { useContext, useEffect } from "react";
import { IGetBooksContext, BooksContext } from "../context/IGetBooksContext";
import { getInitalBooks, getAllBooks } from "../services/CategoryCollector";
import { IBookItem } from "../models/IBookItem";



const Home = () => {

  const {setBookResponse, setSelectedCategory} = useContext<IGetBooksContext>(BooksContext);


  useEffect(() => {
    const fetchInitalData = async () => {

      setBookResponse([]);
      setSelectedCategory(['']);

      // const existingData = JSON.parse(sessionStorage.getItem('bookData') || '{}')

      // if(existingData) {



      //    const books = Array.from<IBookItem>(existingData.items)
      //    .filter(e => e);
      //   console.log(books);

      //    const initialBooks = books.filter((book: IBookItem) => {
      //     const initialCategory = 'fiction';
      //     const bookCategories = book.volumeInfo.categories.map(cat => cat.toLowerCase());

      //     return bookCategories.includes(initialCategory);
      //   });


      //    setBookResponse(initialBooks)
      //    setSelectedCategory(['Fiction'])
      // } else {
      //   console.log('else');

        try {
          const response = await getInitalBooks({subject: "fiction"})

          if (response){
            const bookItem = response.items
            setBookResponse(bookItem)
            setSelectedCategory(['Fiction'])

            sessionStorage.setItem('bookData', JSON.stringify(response));
            }

        } catch (error) {
          console.log(error);

      // }
      }


  }
  fetchInitalData();

  const fetchAllData = async () => {

    const subjects = categoriesArray
    .map((category) => category.query)
    .flat()
    .map((subject) => subject.replace(/\s+/g, '%'))
    .filter((subject) => subject.toLowerCase() !== 'fiction');


      try {
        const response = await getAllBooks({subjects})

        const existingData = JSON.parse(sessionStorage.getItem('bookData') || '{}')
        console.log(response.items);
        

        const updatedData = {
          ...existingData,
          items: response.items
        };
        sessionStorage.setItem('bookData', JSON.stringify(updatedData))


      }catch (error){
        console.log(error);

      }
    }

    fetchAllData();
  },[setBookResponse, setSelectedCategory])

  return (
    <>
    <BookSearch></BookSearch>
    <Categories></Categories>
    </>
  )
}

export default Home