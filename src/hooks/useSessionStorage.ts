import { useContext, useEffect } from "react"
import { BooksContext, IGetBooksContext } from "../context/IGetBooksContext"
import { ILogInUserContext, LoginUserContext } from "../context/LoginUserContext"

export const useSessionStorage = () => {
    const {setBookResponse, setSelectedCategory, setSelectedCategoryText}=useContext<IGetBooksContext>(BooksContext)
    const { setLoggedInUser, setLoggedInUserBooks} = useContext<ILogInUserContext>(LoginUserContext)

    useEffect(() => {
        const books = JSON.parse(sessionStorage.getItem('books') || '{}');
        const categoryText = JSON.parse(sessionStorage.getItem('categoryText') || '{}');
        const selectedCategory = JSON.parse(sessionStorage.getItem('selectedCategory') || '{}');
        const storedUser = sessionStorage.getItem('user');
        const loggedInUser = storedUser ? JSON.parse(storedUser) : null;
        const userBooks = JSON.parse(sessionStorage.getItem('userBooks') || '{}')

        setBookResponse(books);
        setSelectedCategory(selectedCategory);
        setSelectedCategoryText(categoryText);
        setLoggedInUser(loggedInUser);
        setLoggedInUserBooks(userBooks);

    },[setBookResponse, setSelectedCategory, setSelectedCategoryText, setLoggedInUser, setLoggedInUserBooks])
}
