import { useContext } from "react"
import { BooksContext } from "../context/IGetBooksContext"
import { Link, useLocation, useNavigate } from "react-router-dom"


const Category = () => {
  const {state} = useLocation()
  const {bookResponse} = useContext(BooksContext)
  const navigate = useNavigate()

  const books = bookResponse.map((book) => book)
  const imgZoom = 5;

  const handleNavigate = () => {
    navigate('/')
  };

  return (
      <>
        <section className="category">
          <div className="category-hero">
            <h1 className="category-hero-header">{state}</h1>
          </div>
          <div className="category-container">
            <ul className="category-list">
              {books.map((book, index) => {
                const { title, authors, imageLinks } = book.volumeInfo;
                const zoomedUrl = imageLinks.thumbnail.replace(/zoom=\d+/, `zoom=${imgZoom}`);
                return (
                  <li className="category-item" key={index}>
                    <div className="category-imgWrapper">
                      <img className="category-img" src={zoomedUrl} alt={title} loading="lazy"/>
                    </div>
                    <div className="category-text">
                      <p className="category-title">{title}</p>
                      {authors && authors.length > 0 ? (
                        authors.map((author, authorIndex) => (
                          <p className="category-author" key={authorIndex}>
                            {author}
                          </p>
                        ))
                      ) : (
                        <p className="category-author"></p>
                      )}
                    </div>
                    <div className="category-buttonWrapper">
                      <Link to={`/book/${book.id}`}>
                        <button className="category-button">Läs mer</button>
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="category-footer">
              <button className="category-footer-button" onClick={handleNavigate}>
                Tillbaka
                <i className="fa-solid fa-angles-left"></i>
              </button>
            </div>
          </div>
        </section>
      </>
  )
}

export default Category