import { categories } from "../../arrays/categories";

interface DesktopNavProps {
    toggleSubMenu: () => void;
    subMenuOpen: boolean;
  }
export const DesktopNav = ({toggleSubMenu, subMenuOpen} :DesktopNavProps) => {
  return (
    <>
    <nav className="header-nav-desktop" aria-label="desktopMain">
        <ul className="header-nav-desktopList">
            <li className="header-nav-desktopItem">
                <button className="header-nav-innerButton" onClick={toggleSubMenu}>
                    Kategorier
                    {!subMenuOpen ? (
                        <span className="material-symbols-outlined">expand_more</span>
                        ) : (
                        <span className="material-symbols-outlined">expand_less</span>
                        )}
                    </button>
        <ul className={`header-nav-innerDesktopMenu ${subMenuOpen ? "" : "hidden"}`} aria-label="inner" aria-hidden="true">
            {categories.map((category) => (
                <li className="header-nav-innerDesktopItem" key={category.id}> 
                    {category.text}
                </li>
            ))}
            
        </ul>
            </li>
                <li className="header-nav-desktopItem"> Om Bokai</li>
        </ul>
            </nav>
    </>
  )
}
