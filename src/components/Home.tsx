import Categories from "./Categories"
import BookSearch from "./Booksearch"
import { useFetchInitialData } from "../hooks/useFetchInitalData";
import { useFetchAllData } from "../hooks/useFetchAllData";

const Home = () => {
  useFetchInitialData();
  useFetchAllData();
  return (
    <>
    <BookSearch></BookSearch>
    <Categories></Categories>
    </>
  )
}

export default Home