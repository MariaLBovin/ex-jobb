import Search from "./Partials/Search"

const BookSearch = () => {
  return (
    <>
    <section className="search-container">
        <div className="search-hero">
          <img className="search-hero-img" src="/noun-stack-of-books.svg"></img>
        </div>
        <Search></Search>
    </section>
    </>
  )
}

export default BookSearch