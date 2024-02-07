import Categories from "./Categories"
import BookSearch from "./Booksearch"
import { useFetchBookShelf } from "../hooks/useFetchBookShelf";
import { useFetchAllData } from "../hooks/useFetchAllData";
import { useFetchInitialData } from "../hooks/useFetchInitalData";

const Home = () => {
  useFetchInitialData();
  useFetchAllData();
  useFetchBookShelf();
  return (
    <>
    <BookSearch></BookSearch>
    <Categories></Categories>
    </>
  )
}

export default Home