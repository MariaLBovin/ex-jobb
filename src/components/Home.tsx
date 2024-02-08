import Categories from "./Categories"
import BookSearch from "./Booksearch"
import { useFetchBookShelf } from "../hooks/useFetchBookShelf";
import { useFetchAllData } from "../hooks/useFetchAllData";
import { useFetchInitialData } from "../hooks/useFetchInitalData";
import { useSessionStorage } from "../hooks/useSessionStorage";


const Home = () => {


  useFetchInitialData();
  useFetchAllData();
  useFetchBookShelf();
  useSessionStorage();

  return (
    <>
    <BookSearch></BookSearch>
    <Categories></Categories>
    </>
  )
}

export default Home