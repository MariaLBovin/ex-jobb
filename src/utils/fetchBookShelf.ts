import { getBookWithId } from "../services/BooksCollector";
import { fetchFromDb } from "../services/DatabaseCollector";
import { IUserInfo } from "../models/IUserInfo";


interface BookShelvProps {
  user: IUserInfo | null
}

export const fetchBookShelf = async ({user}: BookShelvProps) => {
          try {
            if (!user) {
              return;
            }
            
            const dbData = await fetchFromDb({userId: user.uid});
            const bookIDs = dbData
            
            await new Promise(resolve => setTimeout(resolve, 1000))
    
            const booksData = await getBookWithId({bookIDs});
            sessionStorage.setItem('userBooks', JSON.stringify(booksData))
            return booksData

          } catch (error) {
            console.log('fel vid hämtning');
            return null
          }

};
