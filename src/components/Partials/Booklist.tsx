import { NavLink} from "react-router-dom";
import { IBookItem } from "../../models/IBookItem";

interface BooklistProps {
    books: IBookItem[]
    isCategoryPage: boolean
}
const Booklist = ({books, isCategoryPage}: BooklistProps) => {
  const imgZoom = 5;

  return (
    <>
    {books.map((book, index) => {
    const { title, authors, imageLinks } = book.volumeInfo;
    const zoomedUrl = imageLinks.thumbnail.replace(/zoom=\d+/, `zoom=${imgZoom}`);
    const linkPath = isCategoryPage ? `/kategori/bok/${book.id}` : `/bok/${book.id}`;
    return (
        <li className="category-item" key={index}>
            <div className="category-imgWrapper">
                <img loading='lazy' className="category-img" src={zoomedUrl} alt={title}/>
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
                <NavLink to={linkPath}>
                    <button className="category-button" aria-label="Läs mer">Läs mer</button>
                </NavLink>
            </div>
        </li>
    );
    })}
    </>
  )
}

export default Booklist