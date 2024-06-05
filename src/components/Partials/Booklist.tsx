import { NavLink} from "react-router-dom";
import { IBookItem } from "../../models/IBookItem";

interface BooklistProps {
    books: IBookItem[] | null,
    isCategoryPage: boolean,
    isProfilePage: boolean,
}

const Booklist = ({books, isCategoryPage, isProfilePage}: BooklistProps) => {
  const imgZoom = 5;

  return (
    <>
    {books?.map((book, index) => {
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
                <p className="category-author">
                {authors[0]}{authors.length > 1 && " mfl"}
                </p>
        ) : (
    <p className="category-author"></p>
)}

            </div>
            <div className="category-buttonWrapper">
                <button className="category-button">
                <NavLink to={linkPath} state={isProfilePage}>Läs mer</NavLink>
                </button>
                
            </div>
        </li>
    );
    })}
    </>
  )
}

export default Booklist