import { useContext } from "react"
import { BooksContext } from "../../context/IGetBooksContext"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSessionStorage } from "../../hooks/useSessionStorage";
import { addDoc, collection} from "firebase/firestore";
import { LoginUserContext } from "../../context/LoginUserContext";
import { db } from "../../services/Firebase";


const DisplaySinglebook = () => {
    const {bookResponse} = useContext(BooksContext);
    const {loggedInUser} = useContext(LoginUserContext)
    const {id} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const isProfilePage =location.state ?? false;

    console.log(isProfilePage);
    
    useSessionStorage();

    
    const book = bookResponse.find((book) => book.id === id)
    console.log(bookResponse);
    console.log(book);
    
    
    const imgZoom = 5;

    const handleNavigate = () => {
        navigate(-1)
      };
    
      const handleSave = async () => {
        try {
          if (!loggedInUser) {
            navigate('/login')
            return
          }

          await addDoc(collection(db, 'user'), {
            user: loggedInUser.uid,
            bookId: book?.id,
          });
    
          console.log('Boken har sparats för användaren:', loggedInUser.uid);
        } catch (error) {
          console.error('Fel vid sparande av bok:', error);
        }
      };

  return (
    <>
    <section className='bookpage-container'>
        <article className='bookpage-wrapper'>
            <div className="bookpage-inner">
              <div className='bookpage-heading'>
                <div className="bookpage-heading-inner">
                  <h1 className='bookpage-header'>{book?.volumeInfo.title}</h1>
                  {book?.volumeInfo.authors && book.volumeInfo.authors.length > 0 ? (
                    book.volumeInfo.authors.map((author :string, authorIndex : number) => (
                  <p className="bookpage-heading-text" key={authorIndex}>Författare: {author}</p>
                    ))
                    ) : (
                  <p className="bookpage-heading-text"></p>
                    )}
                  <p className='bookpage-heading-text'>Utgivningsdatum: {book?.volumeInfo.publishedDate}</p>
                  <p className='bookpage-heading-text'>Förlag: {book?.volumeInfo.publisher}</p>
                  <div className='bookpage-heading-buttons'>
                  <button className='bookpage-heading-button' aria-label="Köp boken på Bokus">
                    <a href={`https://www.bokus.com/bok/${book?.volumeInfo.industryIdentifiers[0].identifier}`} target="_blank">Köp</a>
                  </button>
                  {!isProfilePage && <button className="bookpage-heading-button" onClick={handleSave}>Spara</button>}
                  
                  </div>
                 
                </div>
                <div className='bookpage-heading-image'>
                  {book?.volumeInfo.imageLinks ? (
                  <img className="bookpage-img"
                    src={book?.volumeInfo.imageLinks.smallThumbnail.replace(/zoom=\d+/, `zoom=${imgZoom}`)}
                    alt={book?.volumeInfo.title}/>
                    ) : (
                  <p>No image available</p>
                  )}
                </div>
              </div>  
              <div className='bookpage-info'>
                <h2 className='bookpage-info-header'>Om boken:</h2>
                <p className='bookpage-info-text'>{book?.volumeInfo.description}</p>
              </div>
            </div> 
        </article>
        <div className="bookpage-footer">
          <button className="bookpage-footer-button" onClick={handleNavigate} aria-label="navigera tillbaka">Tillbaka
            <i className="fa-solid fa-angles-left"></i>
          </button>
        </div>
    </section>
    </>
  )
}

export default DisplaySinglebook