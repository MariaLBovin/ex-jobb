import { useContext } from "react"
import { BooksContext } from "../context/IGetBooksContext"
import { useLocation, useNavigate } from "react-router-dom"


const Category = () => {
  const {state} = useLocation()
  const {bookResponse} = useContext(BooksContext)
  const navigate = useNavigate()

  

  const books = bookResponse.map((book) => book.volumeInfo)

  const handleNavigate = () => {
    navigate(-1)
  };

  return (
    <>
    <section className="category-container">
      <h1 className="category-header">{state}</h1>
      <div className="category-wrapper">
      <ul className="category-list">
      {books.map((book, index) => (
        <li className="category-item" key={index}>
          <div className="category-imgWrapper">
            <img className="category-img" 
              src={book.imageLinks.smallThumbnail}
              alt={book.title}> 
            </img>
          </div>
          
          <div className="category-text">
          <p className="category-title">{book.title}</p>
          {book.authors && book.authors.length > 0 ? (
              book.authors.map((author, authorIndex) => (
                <p className="category-author" key={authorIndex}>
                  {author}
                </p>
              ))
            ) : (
              <p className="category-author"></p>
            )}
          </div>
          <div className="category-buttonWrapper">
            <button className="category-button">Läs mer</button>
          </div>
        </li>
      ))}
      </ul> 
      <button className="categories-content-listButton" onClick={handleNavigate}>Tillbaka
      <span className="material-symbols-outlined">first_page</span>
      </button>

      </div>
      
    </section>
    </>
  )
}

export default Category