
import {useNavigate } from "react-router-dom"
import Booklist from "./Partials/Booklist"
import { useContext } from "react"
import { BooksContext } from "../context/IGetBooksContext"
import { useSessionStorage } from "../hooks/useSessionStorage"


const Category = () => {
  const navigate = useNavigate()
  const {bookResponse, selectedCategoryText} = useContext(BooksContext)
  
  useSessionStorage();
  const books = bookResponse.map((book) => book)
  const uniqueTitleContainer: { [key: string]: boolean } = {};

  const uniqueBooks = books.filter((book) => {
  const normalizedTitle = book.volumeInfo.title.toLowerCase();

  if (!uniqueTitleContainer[normalizedTitle]) {
    uniqueTitleContainer[normalizedTitle] = true;
    return true;
  }

  return false;
});

  const handleNavigate = () => {
    navigate('/')
  };

  return (
      <>
        <section className="category">
          <div className="category-hero">
            <h1 className="category-hero-header">{selectedCategoryText}</h1>
          </div>
          <div className="category-container">
          <ul className="category-list">
            <Booklist books={uniqueBooks}></Booklist>
          </ul>
            <div className="category-footer">
              <button className="category-footer-button" onClick={handleNavigate}>
                Tillbaka
                <i className="fa-solid fa-angles-left"></i>
              </button>
            </div>
          </div>
        </section>
      </>
  )
}

export default Category