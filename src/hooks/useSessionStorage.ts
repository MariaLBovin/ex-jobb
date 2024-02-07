import { useContext, useEffect } from "react"
import { BooksContext, IGetBooksContext } from "../context/IGetBooksContext"
import { ILogInUserContext, LoginUserContext } from "../context/LoginUserContext"
import { IBookItem } from "../models/IBookItem"



export const useSessionStorage = () => {
    const {setBookResponse, setSelectedCategory, setSelectedCategoryText}=useContext<IGetBooksContext>(BooksContext)
    const { setLoggedInUser, setLoggedInUserBooks} = useContext<ILogInUserContext>(LoginUserContext)

    useEffect(() => {
        const books = JSON.parse(sessionStorage.getItem('books') || '{}');
        const selectedCategory = JSON.parse(sessionStorage.getItem('selectedCategory') || '{}');
        const storedUser = sessionStorage.getItem('user');
        const loggedInUser = storedUser ? JSON.parse(storedUser) : null;
        const userBooks = JSON.parse(sessionStorage.getItem('userBooks') || '{}')


        
        setBookResponse(books);
        setSelectedCategory(selectedCategory);
        setLoggedInUser(loggedInUser);
        setLoggedInUserBooks(userBooks);

    },[setBookResponse, setSelectedCategory, setSelectedCategoryText, setLoggedInUser, setLoggedInUserBooks])

    const updateSessionStorage = (newBook: IBookItem) => {
        const storedBooks = JSON.parse(sessionStorage.getItem('books') || '[]');
        const updatedBooks = [...storedBooks, newBook];
        sessionStorage.setItem('books', JSON.stringify(updatedBooks));
        console.log(updatedBooks);
        
      };
    
      return { updateSessionStorage };
}
