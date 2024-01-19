import { useContext } from "react"
import { BooksContext } from "../../context/IGetBooksContext"
import { Link} from "react-router-dom";


interface DisplayBooksProps {
  categoryText: string;
  
}

const DisplayBooks = ({categoryText} :DisplayBooksProps) => {
  const {bookResponse} =useContext(BooksContext)  
  const stateText = categoryText
  console.log(bookResponse);
  
  const sortedBooks = bookResponse
    .slice(0, 5)
    .sort((a, b) => {
      const dateA: Date = new Date(a.volumeInfo.publishedDate);
      const dateB: Date = new Date(b.volumeInfo.publishedDate);
      return dateB.getTime() - dateA.getTime();
    });

  const books = sortedBooks.map((book) => book)


    
  return (
    <>
    <ul className="categories-content-list">
      {books.map((book, index) => (
        <li className="categories-content-item" key={index}>
          <div className="categories-content-imgWrapper">
            <img className="categories-content-img" 
              src={book.volumeInfo.imageLinks.smallThumbnail}
              alt={book.volumeInfo.title}> 
            </img>
          </div>
          <div className="categories-content-text">
          <p className="categories-content-title">{book.volumeInfo.title}</p>
          {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 ? (
              book.volumeInfo.authors.map((author :string, authorIndex : number) => (
                <p className="categories-content-author" key={authorIndex}>
                  {author}
                </p>
              ))
            ) : (
              <p className="categories-content-author"></p>
            )}
          </div>
          <div className="categories-content-buttonWrapper">
            <Link to={`/book/${book.id}`}>
            <button className="categories-content-button">Läs mer</button>
            </Link>
          </div>
        </li>
      ))}
      <Link to='/category' state={stateText} className="categories-content-listLink">
      <button className="categories-content-listButton">Se alla böcker
      <span className="material-symbols-outlined">last_page</span>
      </button>
      </Link>
      
    </ul>
    
    </>
  )
}

export default DisplayBooks