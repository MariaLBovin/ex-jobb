import { useContext, useEffect } from "react"
import { BooksContext, IGetBooksContext } from "../context/IGetBooksContext"

export const useSessionStorage = () => {
    const {setBookResponse, setSelectedCategory, setSelectedCategoryText}=useContext<IGetBooksContext>(BooksContext)

    useEffect(() => {
        const books = JSON.parse(sessionStorage.getItem('books') || '{}');
        const categoryText = JSON.parse(sessionStorage.getItem('categoryText') || '{}');
        const selectedCategory = JSON.parse(sessionStorage.getItem('selectedCategory') || '{}');

        setBookResponse(books);
        setSelectedCategory(selectedCategory);
        setSelectedCategoryText(categoryText);

    },[setBookResponse, setSelectedCategory, setSelectedCategoryText])
}
