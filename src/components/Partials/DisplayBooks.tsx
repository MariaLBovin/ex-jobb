import { useContext } from "react"
import { BooksContext } from "../../context/IGetBooksContext"
import { NavLink} from "react-router-dom";
import Booklist from "./Booklist";


const DisplayBooks = () => {
  const {bookResponse, selectedCategoryText} =useContext(BooksContext)  

  const sortedBooks = bookResponse
    .slice(0, 6)
    .sort((a, b) => {
      const dateA: Date = new Date(a.volumeInfo.publishedDate);
      const dateB: Date = new Date(b.volumeInfo.publishedDate);
      return dateB.getTime() - dateA.getTime();
    });

  return (
    <>
      <ul className="categories-content-list">
        <Booklist books={sortedBooks}></Booklist>
      </ul>
      <NavLink to={`/category?text=:${selectedCategoryText}`} state={selectedCategoryText} className="categories-content-listLink">
            <button className="categories-content-listButton">
              Se fler
              <i className="fa-solid fa-angles-right"></i>
            </button>
      </NavLink>
    </>
  );
}

export default DisplayBooks