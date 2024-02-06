import { addDoc, collection, deleteDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../services/Firebase";
import { IUserInfo } from "../models/IUserInfo";
import { IBookItem } from "../models/IBookItem";

export const handleSaveUserBook = async ({loggedInUser, book}:  {loggedInUser:IUserInfo | null, book: IBookItem | undefined}) => {
  try {
    if(!loggedInUser){
      return Promise.reject('Användaren är inte inloggad')
    }
    await addDoc(collection(db, 'user'), {
      user: loggedInUser.uid,
      bookId: book?.id,
    }); 
  }catch(error){
    console.log(error);
    
  }
}

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

export const removeFromDb = async ({ userId, bookId }: { userId: string | undefined; bookId: string }) => {

    const q = query(collection(db, 'user'), where('user', '==', userId), where('bookId', '==', bookId));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });

    console.log('Boken har tagits bort för användaren:', userId);
  
};