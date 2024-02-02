
import {useNavigate } from "react-router-dom"
import Booklist from "./Partials/Booklist"
import { useContext } from "react"
import { BooksContext } from "../context/IGetBooksContext"
import { useSessionStorage } from "../hooks/useSessionStorage"
import { filterUniqueBooks } from "../utils/filterUniqeBooks"
import Breadcrumbs from "./Partials/Breadcrumbs"


const Category = () => {
  const navigate = useNavigate()
  const {bookResponse, selectedCategoryText} = useContext(BooksContext)
  
  useSessionStorage();
  const books = bookResponse.map((book) => book)

  const filteredBooks = filterUniqueBooks(books)

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
          <Breadcrumbs></Breadcrumbs>
          <ul className="category-list">
            <Booklist books={filteredBooks} isCategoryPage={true}></Booklist>
          </ul>
            <div className="category-footer">
              <button className="category-footer-button" aria-lable='navigate' onClick={handleNavigate}>
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