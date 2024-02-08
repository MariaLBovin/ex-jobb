import Categories from "./Categories"
import BookSearch from "./Booksearch"
import { fetchAllData } from "../utils/fetchAllData";
import { fetchInitialData } from "../utils/fetchInitalData";
import { useContext, useEffect} from "react";
import { BooksContext } from "../context/IGetBooksContext";


const Home = () => {
  const {setBookResponse, setSelectedCategory, setSelectedCategoryText} = useContext(BooksContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchInitialData();
        if(data){
          const { books, initialCategory, categoryText } = data;
          setBookResponse(books);
          setSelectedCategory(initialCategory);
          setSelectedCategoryText(categoryText);
        }
        await fetchAllData();
      } catch (error) {
        console.error('Fel vid hämtning av data:', error);
      }
    };

    fetchData();
  }, [setBookResponse,setSelectedCategory,setSelectedCategoryText]);

  return (
    <>
    <BookSearch></BookSearch>
    <Categories></Categories>
    </>
  )
}

export default Home