import { useContext, useEffect } from "react"
import { BooksContext, IGetBooksContext } from "../context/IGetBooksContext"
import { ILogInUserContext, LoginUserContext } from "../context/LoginUserContext"
import { IBookItem } from "../models/IBookItem"



export const useSessionStorage = () => {
    const {setBookResponse, setSelectedCategory, setSelectedCategoryText}=useContext<IGetBooksContext>(BooksContext)
    const { setLoggedInUser, setLoggedInUserBooks} = useContext<ILogInUserContext>(LoginUserContext)

    useEffect(() => {
        const books = JSON.parse(sessionStorage.getItem('books') || '{}');
        console.log('sessionstorage', books);
        
        const selectedCategoryText = JSON.parse(sessionStorage.getItem('categoryText') || '{}');
        const selectedCategory = JSON.parse(sessionStorage.getItem('selectedCategory') || '{}');
        const storedUser = sessionStorage.getItem('user');
        const loggedInUser = storedUser ? JSON.parse(storedUser) : null;
        const userBooks = JSON.parse(sessionStorage.getItem('userBooks') || '{}')

        setBookResponse(books);
        setSelectedCategory(selectedCategory);
        setLoggedInUser(loggedInUser);
        setLoggedInUserBooks(userBooks);
        setSelectedCategoryText(selectedCategoryText);

    },[setBookResponse, setSelectedCategory, setSelectedCategoryText, setLoggedInUser, setLoggedInUserBooks])

    const updateSessionStorage = (newBooks: IBookItem[]) => {
        const storedBooks = JSON.parse(sessionStorage.getItem('books') || '[]');
        console.log(newBooks);
        
        const updatedBooks = storedBooks.concat(newBooks)
        sessionStorage.setItem('books', JSON.stringify(updatedBooks));
        setBookResponse(updatedBooks)
        console.log(updatedBooks);
        
      };
    
      return { updateSessionStorage };
}
