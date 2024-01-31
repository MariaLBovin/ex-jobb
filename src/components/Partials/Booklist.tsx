import { NavLink} from "react-router-dom";
import { IBookItem } from "../../models/IBookItem";

interface BooklistProps {
    books: IBookItem[]
}
const Booklist = ({books}: BooklistProps) => {
  const imgZoom = 5;

  return (
    <>
    {books.map((book, index) => {
    const { title, authors, imageLinks } = book.volumeInfo;
    const zoomedUrl = imageLinks.thumbnail.replace(/zoom=\d+/, `zoom=${imgZoom}`);
    return (
        <li className="category-item" key={index}>
            <div className="category-imgWrapper">
                <img className="category-img" src={zoomedUrl} alt={title} loading="lazy"/>
            </div>
            <div className="category-text">
                <p className="category-title">{title}</p>
                    {authors && authors.length > 0 ? (
                    authors.map((author, authorIndex) => (
                <p className="category-author" key={authorIndex}>
                     {author}
                </p>
                    ))
                    ) : (
                <p className="category-author"></p>
                    )}
            </div>
            <div className="category-buttonWrapper">
                <NavLink to={`/book/${book.id}`}>
                    <button className="category-button">Läs mer</button>
                </NavLink>
            </div>
        </li>
    );
    })}
    </>
  )
}

export default Booklist