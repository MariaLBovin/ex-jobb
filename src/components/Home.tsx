import Categories from "./Categories"
import BookSearch from "./Booksearch"
import { useFetchInitialData } from "../hooks/useFetchInitalData";
import { useFetchAllData } from "../hooks/useFetchAllData";
import { useFetchBookShelf } from "../hooks/useFetchBookShelf";

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