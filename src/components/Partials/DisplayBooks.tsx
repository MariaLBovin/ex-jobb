import { useContext } from "react"
import { BooksContext } from "../../context/IGetBooksContext"
import { NavLink} from "react-router-dom";
import Booklist from "./Booklist";
import { filterUniqueBooks } from "../../utils/filterUniqeBooks";




const DisplayBooks = () => {
  const {bookResponse, selectedCategoryText} =useContext(BooksContext)  

  const sortedBooks = bookResponse
    .slice(0, 6)
    .sort((a, b) => {
      const dateA: Date = new Date(a.volumeInfo.publishedDate);
      const dateB: Date = new Date(b.volumeInfo.publishedDate);
      return dateB.getTime() - dateA.getTime();
    });

    const filteredBooks = filterUniqueBooks(sortedBooks);

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