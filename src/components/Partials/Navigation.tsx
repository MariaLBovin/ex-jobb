import SubMenu from "./SubMenu";
import { NavLink } from "react-router-dom";

interface NavigationProps {
    toggleSubMenu: () => void;
    mainMenuOpen: boolean;
    subMenuOpen: boolean;
  }

const Navigation = ({mainMenuOpen, toggleSubMenu, subMenuOpen} :NavigationProps) => {
  return (
    <>
        <nav className="header-nav" aria-label="main" aria-hidden={mainMenuOpen ? "false" : "true"}>
        <div className={`header-nav-element ${mainMenuOpen && 'active'}`}>
        <ul className="header-nav-list">
            <li className="header-nav-item">
              <button className="header-nav-itemButton" onClick={toggleSubMenu} aria-expanded={subMenuOpen ? "true" : "false"}>
                Kategorier
                {!subMenuOpen ? (
                <span className="material-symbols-outlined">expand_more</span>
                ) : (
                <span className="material-symbols-outlined">expand_less</span>
                )}
                </button>
                <SubMenu subMenuOpen={subMenuOpen}></SubMenu>
            </li>
            <li className="header-nav-item">
              <NavLink to='/contact' 
              className={isActive => "nav-link" + (!isActive ? " unselected" : "")}>
                Kontakt
              </NavLink>
            </li>
          </ul>
          </div>
          
        </nav> 
    </>
  )
}

export default Navigation