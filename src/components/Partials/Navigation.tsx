import { categories } from "../../arrays/categories";

interface NavigationProps {
    toggleSubMenu: () => void;
    mainMenuOpen: boolean;
    subMenuOpen: boolean;
  }

const Navigation = ({mainMenuOpen, toggleSubMenu, subMenuOpen} :NavigationProps) => {
  return (
    <>
    <nav className={`header-nav ${mainMenuOpen ? "" : "hidden"}`} aria-label="main">
                <ul className="header-nav-list">
                    <li className="header-nav-item">
                    <button className="header-nav-innerButton" onClick={toggleSubMenu}>
                       Kategorier
                       {!subMenuOpen ? (
                        <span className="material-symbols-outlined">expand_more</span>
                        ) : (
                        <span className="material-symbols-outlined">expand_less</span>
                        )}
                    </button>
                    <ul className={`header-nav-innerMenu ${subMenuOpen ? "" : "hidden"}`} aria-label="inner" aria-hidden="true">
                        {categories.map((category) => (
                            <li className="header-nav-innerItem" key={category.id}> 
                                {category.text}
                            </li>
                        ))}
                        </ul>
                    </li>
                    <li className="header-nav-item">Meny</li>
                </ul>
            </nav>
    </>
  )
}

export default Navigation