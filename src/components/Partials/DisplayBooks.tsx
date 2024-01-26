import { useContext } from "react"
import { BooksContext } from "../../context/IGetBooksContext"
import { NavLink} from "react-router-dom";


interface DisplayBooksProps {
  categoryText: string;
}

const DisplayBooks = ({categoryText} :DisplayBooksProps) => {
  const {bookResponse} =useContext(BooksContext)  
  const stateText = categoryText

  const sortedBooks = bookResponse
    .slice(0, 5)
    .sort((a, b) => {
      const dateA: Date = new Date(a.volumeInfo.publishedDate);
      const dateB: Date = new Date(b.volumeInfo.publishedDate);
      return dateB.getTime() - dateA.getTime();
    });

  const imgZoom = 10;
  
  return (
    <>
      <ul className="categories-content-list">
        {sortedBooks.map((book, index) => {
          const { title, authors, imageLinks } = book.volumeInfo;
          const zoomedUrl = imageLinks.thumbnail.replace(/zoom=\d+/, `zoom=${imgZoom}`);

          return (
            <li className="categories-content-item" key={index}>
              <div className="categories-content-imgWrapper">
                <img
                  className="categories-content-img"
                  src={zoomedUrl}
                  alt={title}
                />
              </div>
              <div className="categories-content-text">
                <p className="categories-content-title">{title}</p>
                {authors && authors.length > 0 ? (
                  authors.map((author: string, authorIndex: number) => (
                    <p className="categories-content-author" key={authorIndex}>
                      {author}
                    </p>
                  ))
                ) : (
                  <p className="categories-content-author"></p>
                )}
              </div>
              <div className="categories-content-buttonWrapper">
                <NavLink to={`/book/${book.id}`}>
                  <button className="categories-content-button">Läs mer</button>
                </NavLink>
              </div>
            </li>
          );
        })}
        <li className="categories-content-item">
          <NavLink to={`/category?text=:${stateText}`} state={stateText} className="categories-content-listLink">
            <button className="categories-content-listButton">
              Se alla böcker
              <span className="material-symbols-outlined">last_page</span>
            </button>
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default DisplayBooks