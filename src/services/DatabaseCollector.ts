import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../services/Firebase";

export const fetchFromDb = async ({userId}: {userId: string | undefined}) => {
    const collection_name='user';
    const q = query(
        collection(db, collection_name),
        where('user', '==', userId)
      );

      const bookIDs: string[]= [];

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const bookId = doc.data().bookId;
          bookIDs.push(bookId)
        }); 
        unsubscribe();
        
      });
      return bookIDs;
}