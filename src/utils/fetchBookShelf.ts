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
            console.log(user);
            
            const dbData = await fetchFromDb({userId: user.uid});
            const bookIDs = dbData
            console.log(dbData);
            
            await new Promise(resolve => setTimeout(resolve, 1000))
    
            const booksData = await getBookWithId({bookIDs});
            console.log('böcker', booksData);
            sessionStorage.setItem('userBooks', JSON.stringify(booksData))
            return booksData

          } catch (error) {
            console.log('fel vid hämtning');
            return null
          }

};
