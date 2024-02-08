import { useContext } from "react"
import { BooksContext } from "../../context/IGetBooksContext"
import { NavLink} from "react-router-dom";
import Booklist from "./Booklist";
import { filterUniqueBooks } from "../../utils/filterUniqeBooks";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import { IBookItem } from "../../models/IBookItem";


const DisplayBooks = () => {
  const {bookResponse, selectedCategoryText} =useContext(BooksContext)  
  useSessionStorage();
  let filteredBooks:IBookItem[] = [];

  if (bookResponse && bookResponse.length > 0) {
    const sortedBooks = bookResponse
      .slice(0, 6)
      .sort((a, b) => {
        const dateA = new Date(a.volumeInfo.publishedDate);
        const dateB = new Date(b.volumeInfo.publishedDate);
        return dateB.getTime() - dateA.getTime();
      });
    filteredBooks = filterUniqueBooks(sortedBooks);
  }

  return (
    <>
      <ul className="categories-content-list">
        <Booklist books={filteredBooks} isCategoryPage={false} isProfilePage={false}></Booklist>
      </ul>
      <NavLink to={`/kategori/${selectedCategoryText}`} state={selectedCategoryText} className="categories-content-listLink" aria-label="navigate">
            <button className="categories-content-listButton" aria-label="Se fler">
              Se fler
              <i className="fa-solid fa-angles-right"></i>
            </button>
      </NavLink>
    </>
  );
}

export default DisplayBooks