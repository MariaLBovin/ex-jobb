import { useContext, useEffect} from "react";
import { LoginUserContext } from "../context/LoginUserContext";

import { NavLink } from "react-router-dom";
import Spinner from "./Partials/Spinner";
import Booklist from "./Partials/Booklist";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { fetchBookShelf } from "../utils/fetchBookShelf";




const Profilepage = () => {
 const {loading, loggedInUserBooks, loggedInUser, setLoggedInUserBooks, setLoading} =useContext(LoginUserContext)

  useSessionStorage();

  useEffect(() => {
    const fetchUserBooks = async () => {
      try {
        setLoading(true);
        const books = await fetchBookShelf({ user: loggedInUser });
        setLoggedInUserBooks(books ?? null);
      } catch (error) {
        console.error('Fel vid hämtning av användarens böcker:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserBooks();
  }, [loggedInUser, setLoggedInUserBooks, setLoading]);
  const userBooks =loggedInUserBooks
  
  const storedBooks = JSON.parse(sessionStorage.getItem('books') || '[]');
    const updatedBooks = storedBooks.concat(userBooks);
    sessionStorage.setItem('books', JSON.stringify(updatedBooks))
 
  console.log(loading);
  
  return (
    <>
    <section className="profile-container">
    <h1 className="profile-header">Min bokhylla</h1>
    <div className="profile-wrapper">
    {loading ? (
          <Spinner></Spinner>
          ) : userBooks?.length === 0 ? (
            <div className="profile-wrapper-inner">
              <p>Du har inga sparade böcker i din bokhylla</p>
              <NavLink to="/" className="profile-wrapper-link">
                Gå till startsidan för att hitta böcker att spara
              </NavLink>
            </div>
          ) : (
    <ul className="profile-list">
      <Booklist books={userBooks} isCategoryPage={false} isProfilePage={true}></Booklist>
    </ul>
      )}
    </div>
    </section>
    </>
  )
}

export default Profilepage
