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
            <div className='bookpage-heading'>
                <h1 className='bookpage-heading-header'>{book?.volumeInfo.title}</h1>
                <div className='bookpage-heading-info'>
                    {book?.volumeInfo.authors && book.volumeInfo.authors.length > 0 ? (
                        book.volumeInfo.authors.map((author :string, authorIndex : number) => (
                <p className="bookpage-heading-text" key={authorIndex}>
                  {author}
                </p>
                ))
                ) : (
                <p className="bookpage-heading-text"></p>
                )}
                <p className='bookpage-heading-text'>{book?.volumeInfo.publishedDate}</p>
                <p className='bookpage-heading-text'>{book?.volumeInfo.publisher}</p>
                </div>
                <button className='bookpage-heading-button'>Köp</button>
            </div>
            <div className='bookpage-info'>
                <h2 className='bookpage-info-header'>Om boken</h2>
                <p className='bookpage-info-text'>{book?.volumeInfo.description}</p>
            </div>
        </article>
        <button className='bookpage-button'onClick={handleNavigate}>Tillbaka</button>
    </section>
    </>
  )
}

export default DisplaySinglebook