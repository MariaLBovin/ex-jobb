import { useContext } from "react"
import { BooksContext } from "../../context/IGetBooksContext"
import { useNavigate, useParams } from "react-router-dom";

const DisplaySinglebook = () => {
    const {bookResponse} = useContext(BooksContext);
    const {id} = useParams();
    const navigate = useNavigate();

    const book = bookResponse.find((book) => book.id === id)
    const imgZoom = 10;

    const handleNavigate = () => {
        navigate(-1)
      };

  return (
    <>
    <section className='bookpage-container'>
        <article className='bookpage-wrapper'>
          <div className='bookpage-img'>
            {book?.volumeInfo.imageLinks ? (
              <img className="bookpage-img-src"
                src={book?.volumeInfo.imageLinks.smallThumbnail.replace(/zoom=\d+/, `zoom=${imgZoom}`)}
                alt={book?.volumeInfo.title}/>
              ) : (
              <p>No image available</p>
            )}
            </div>
              <div className="bookpage-inner">
                <h1 className='bookpage-header'>{book?.volumeInfo.title}</h1>
                <div className='bookpage-heading'>
                
                    {book?.volumeInfo.authors && book.volumeInfo.authors.length > 0 ? (
                        book.volumeInfo.authors.map((author :string, authorIndex : number) => (
                <p className="bookpage-heading-text" key={authorIndex}>
                  Författare: {author}
                </p>
                ))
                ) : (
                <p className="bookpage-heading-text"></p>
                )}
                <p className='bookpage-heading-text'>Utgivningsdatum: {book?.volumeInfo.publishedDate}</p>
                <p className='bookpage-heading-text'>Förlag: {book?.volumeInfo.publisher}</p>
                
                <button className='bookpage-heading-button'>
                    <a href={`https://www.bokus.com/bok/${book?.volumeInfo.industryIdentifiers[0].identifier}`} target="_blank">Köp</a>
                </button>
            </div>

            <div className='bookpage-info'>
                <h2 className='bookpage-info-header'>Om boken:</h2>
                <p className='bookpage-info-text'>{book?.volumeInfo.description}</p>
            </div>
              </div>
                
        </article>
        <div className="bookpage-footer">
          <button className="bookpage-footer-button" onClick={handleNavigate}>Tillbaka
            <span className="material-symbols-outlined">first_page</span>
          </button>
        </div>
        
      
    </section>
    </>
  )
}

export default DisplaySinglebook