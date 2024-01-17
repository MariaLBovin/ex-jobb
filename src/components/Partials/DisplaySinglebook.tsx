import { useContext } from "react"
import { BooksContext } from "../../context/IGetBooksContext"
import { useNavigate, useParams } from "react-router-dom";

const DisplaySinglebook = () => {
    const {bookResponse} = useContext(BooksContext);
    const {id} = useParams();
    const navigate = useNavigate();

    const book = bookResponse.find((book) => book.id === id)

    console.log(id);

    const handleNavigate = () => {
        navigate(-1)
      };
    

  return (
    <>
    <section className='bookpage-container'>
        <article className='bookpage-wrapper'>
            <div className='bookpage-img'>
            <img className="bookpage-img-src" 
              src={book?.volumeInfo.imageLinks.smallThumbnail}
              alt={book?.volumeInfo.title}> 
            </img>
            </div>
            
                <h1 className='bookpage-header'>{book?.volumeInfo.title}</h1>
                <div className='bookpage-heading'>
                <div className='bookpage-heading-info'>
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
                </div>
                
            </div>
            <button className='bookpage-heading-button'>
                    <a href={`https://www.bokus.com/bok/${book?.volumeInfo.industryIdentifiers[0].identifier}`} target="_blank">Köp</a>
                    
                </button>
            <div className='bookpage-info'>
                <h2 className='bookpage-info-header'>Om boken:</h2>
                <p className='bookpage-info-text'>{book?.volumeInfo.description}</p>
            </div>
        </article>
        <button className="bookpage-button" onClick={handleNavigate}>Tillbaka
      <span className="material-symbols-outlined">first_page</span>
      </button>
    </section>
    </>
  )
}

export default DisplaySinglebook