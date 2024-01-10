import { useContext } from "react"
import { BooksContext } from "../../context/IGetBooksContext"


const DisplayBooks = () => {
  const {bookResponse} =useContext(BooksContext)

  const books = bookResponse.items.map((book) => (
    book.volumeInfo
  ))

  console.log(books);
  
  
  return (
    <>
    <ul>
      {books.map((book) => (
        <li>{book.title}</li>
      ))}
    </ul>
    </>
  )
}

export default DisplayBooks