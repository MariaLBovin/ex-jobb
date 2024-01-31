import { useContext } from "react";
import { categoriesArray } from "../../arrays/categoriesArray";
import { BooksContext } from "../../context/IGetBooksContext";
import { NavLink} from "react-router-dom";
import { changeCategory } from "../../utils/changeCategoryUtils";

interface DesktopNavProps {
    subMenuOpen: boolean;
    toggleSubMenu: () => void;
    toggleMainMenu: () => void;


  }

const SubMenu = ({subMenuOpen, toggleMainMenu, toggleSubMenu} :DesktopNavProps) => {
  const {setSelectedCategory, setBookResponse, setSelectedCategoryText} = useContext(BooksContext)

  const displayChosenCategory = (selectedCategory: string[], categoryText: string) => {
    const filteredBooks = changeCategory(selectedCategory);
    setBookResponse(filteredBooks);
    setSelectedCategory(selectedCategory);
    setSelectedCategoryText(categoryText);
    

    if(window.innerWidth <= 760){
      toggleMainMenu();
      toggleSubMenu();
    }else {
      toggleSubMenu();
    }

  }
  
  return (
    <>
    <div className={`header-nav-innerWrapper ${subMenuOpen && 'active'}`}>
        <ul className="header-nav-innerList" aria-label="sub" aria-hidden={subMenuOpen ? "false" : "true"}>
            {categoriesArray.map((category) => (
                <li className="header-nav-innerItem" key={category.id}> 
                  <NavLink to={`/category?text=:${category.text}`} 
                  onClick={() => displayChosenCategory(category.query, category.text)} 
                  state= {category.text} 
                  className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>
                  {category.text}
                  </NavLink>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default SubMenu
