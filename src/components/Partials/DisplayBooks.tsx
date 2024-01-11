import { useContext } from "react"
import { BooksContext } from "../../context/IGetBooksContext"


const DisplayBooks = () => {
  const {bookResponse} =useContext(BooksContext)

  const books = bookResponse.items.slice(0,5).map((book) => (
    book.volumeInfo
  ))

  console.log(books);
  
  
  return (
    <>
    <ul className="categories-content-list">
      {books.map((book) => (
        <li className="categories-content-item">
          <div className="categories-content-imgWrapper">
            <img className="categories-content-img" 
              src={book.imageLinks.smallThumbnail}
              alt={book.title}> 
            </img>
          </div>
          <div className="categories-content-text">
          <p className="categories-content-title">{book.title}</p>
          {book.authors.map((author) => (
            <p className="categories-content-author">{author}</p>
          ))}
          </div>
          <div className="categories-content-buttonWrapper">
            <button className="categories-content-button">Läs mer</button>
          </div>
        </li>
      ))}
      <button className="categories-content-listButton">Se alla böcker
      <span className="material-symbols-outlined">last_page</span>
      </button>
    </ul>
    
    </>
  )
}

export default DisplayBooks