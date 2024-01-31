import Search from "./Partials/Search";
import HeroImg from '/hero-img.svg';

const BookSearch = () => {
  return (
    <>
    <section className="search-container">
        <div className="search-hero">
          <img className="search-hero-img" src={HeroImg}></img>
        </div>
        <Search></Search>
    </section>
    </>
  )
}

export default BookSearch