import { useContext } from "react";
import { categoriesArray } from "../../arrays/categoriesArray";
import { BooksContext } from "../../context/IGetBooksContext";
import { Link } from "react-router-dom";
import { IBookItem } from "../../models/IBookItem";

interface DesktopNavProps {
    subMenuOpen: boolean;
  }

const SubMenu = ({subMenuOpen} :DesktopNavProps) => {
  const {setSelectedCategory, setBookResponse} = useContext(BooksContext)
  
  const displayChosenCategory = (selectedCategory: string[]) => {

    const storedBooks = JSON.parse(sessionStorage.getItem('bookData') || '{}');

    const storedBooksArray = Array.from<IBookItem>(storedBooks.items)
      .filter(e => e)
      .filter(book => book.volumeInfo.categories && book.volumeInfo.categories.length > 0);
       
      const filteredBooks = storedBooksArray.filter((book: IBookItem) => {
        const selectedCategoriesLower = selectedCategory.map(cat => cat.toLowerCase());
        const bookCategoriesLower = book.volumeInfo.categories.map(cat => cat.toLowerCase());

        return selectedCategoriesLower.some(cat => bookCategoriesLower.includes(cat));
      });
    
    setBookResponse(filteredBooks)
    setSelectedCategory(selectedCategory)
    
    console.log(selectedCategory);
    
   
  }
  
  return (
    <>
    <div className="header-nav-innerWrapper">
        <ul className={`header-nav-innerMenu ${subMenuOpen && 'active'}`} aria-label="main" aria-hidden={subMenuOpen ? "false" : "true"}>
            {categoriesArray.map((category) => (
                <li className="header-nav-innerItem" key={category.id}> 
                  <Link to={`/category?text=:${category.text}`} onClick={() => displayChosenCategory(category.query)} state= {category.text}>
                  {category.text}
                  </Link>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default SubMenu
