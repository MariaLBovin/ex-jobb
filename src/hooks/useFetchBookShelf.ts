import { useEffect, useContext, useState } from "react";
import { getBookWithId } from "../services/BooksCollector";
import { fetchFromDb } from "../services/DatabaseCollector";
import { LoginUserContext } from "../context/LoginUserContext";

export const useFetchBookShelf = () => {
    const {loggedInUser, setLoggedInUserBooks} = useContext(LoginUserContext)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            if (!loggedInUser) {
              console.log('ingen inloggad användare');
              return;
            }
            const dbData = await fetchFromDb({userId: loggedInUser.uid});
            
            const bookIDs = dbData
    
            await new Promise(resolve => setTimeout(resolve, 1000))
    
            const booksData = await getBookWithId({bookIDs});
            console.log('böcker', booksData);
            sessionStorage.setItem('userBooks', JSON.stringify(booksData))
            setLoggedInUserBooks(booksData);
            setLoading(false);
    
          } catch (error) {
            console.log('fel vid hämtning');
          }
        };
    
        fetchData();
      }, [setLoggedInUserBooks, loggedInUser]);
      return {loading}
}