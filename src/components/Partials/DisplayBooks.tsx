import { useContext } from "react"
import { BooksContext } from "../../context/IGetBooksContext"
import { Link} from "react-router-dom";

interface DisplayBooksProps {
  categoryText: string | undefined
}


const DisplayBooks = ({categoryText} :DisplayBooksProps) => {
  const {bookResponse, selectedCategory} =useContext(BooksContext)
  
  

  const category = categoryText;

  const sortedBooks = bookResponse
    .filter((book) => {
      return (
        selectedCategory &&
        book.volumeInfo.categories &&
        book.volumeInfo.categories.some(cat => selectedCategory.includes(cat))
      );
    })
    .slice(0, 5)
    .sort((a, b) => {
      const dateA: Date = new Date(a.volumeInfo.publishedDate);
      const dateB: Date = new Date(b.volumeInfo.publishedDate);
      return dateB.getTime() - dateA.getTime();
    });

  const books = sortedBooks.map((book) => book.volumeInfo)
  
  return (
    <>
    <ul className="categories-content-list">
      {books.map((book, index) => (
        <li className="categories-content-item" key={index}>
          <div className="categories-content-imgWrapper">
            <img className="categories-content-img" 
              src={book.imageLinks.smallThumbnail}
              alt={book.title}> 
            </img>
          </div>
          <div className="categories-content-text">
          <p className="categories-content-title">{book.title}</p>
          {book.authors && book.authors.length > 0 ? (
              book.authors.map((author, authorIndex) => (
                <p className="categories-content-author" key={authorIndex}>
                  {author}
                </p>
              ))
            ) : (
              <p className="categories-content-author"></p>
            )}
          </div>
          <div className="categories-content-buttonWrapper">
            <button className="categories-content-button">Läs mer</button>
          </div>
        </li>
      ))}
      <Link to='/category' state={category}>
      <button className="categories-content-listButton">Se alla böcker
      <span className="material-symbols-outlined">last_page</span>
      </button>
      </Link>
      
    </ul>
    
    </>
  )
}

export default DisplayBooks