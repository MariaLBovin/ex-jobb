import { useContext, useState} from "react";
import { LoginUserContext } from "../context/LoginUserContext";
import Booklist from "./Partials/Booklist";
import { NavLink } from "react-router-dom";
import Spinner from "./Partials/Spinner";

const Profilepage = () => {
  const {loggedInUserBooks} = useContext(LoginUserContext);
  const [loading, setLoading] = useState(true);


  const userBooks = loggedInUserBooks;
  console.log('loggedInUserBooks', userBooks);
  
  const storedBooks = JSON.parse(sessionStorage.getItem('books') || '[]');
    const updatedBooks = storedBooks.concat(loggedInUserBooks);
    sessionStorage.setItem('books', JSON.stringify(updatedBooks))
 
  
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
